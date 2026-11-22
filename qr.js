/* Zero-dependency ISO/IEC 18004 QR Code encoder (Byte mode UTF-8, EC Level L, Versions 1-15) */
(function (root) {
  "use strict";

  // Version specs for Error Correction Level L: [totalDataCodewords, ecPerBlock, blocksG1, dataG1, blocksG2, dataG2]
  const LEVEL_L_SPECS = [
    null,
    [19, 7, 1, 19, 0, 0],    // V1 (21x21)
    [34, 10, 1, 34, 0, 0],   // V2 (25x25)
    [55, 15, 1, 55, 0, 0],   // V3 (29x29)
    [80, 20, 1, 80, 0, 0],   // V4 (33x33)
    [108, 26, 1, 108, 0, 0], // V5 (37x37)
    [136, 18, 2, 68, 0, 0],  // V6 (41x41)
    [156, 20, 2, 78, 0, 0],  // V7 (45x45)
    [194, 24, 2, 97, 0, 0],  // V8 (49x49)
    [232, 30, 2, 116, 0, 0], // V9 (53x53)
    [274, 18, 2, 68, 2, 69], // V10 (57x57)
    [324, 20, 4, 81, 0, 0],  // V11 (61x61)
    [370, 24, 2, 92, 2, 93], // V12 (65x65)
    [428, 26, 4, 107, 0, 0], // V13 (69x69)
    [461, 30, 3, 115, 1, 116], // V14 (73x73)
    [523, 22, 5, 87, 1, 88]  // V15 (77x77)
  ];

  const ALIGN_POS = [
    null,
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70]
  ];

  // GF(256) lookup tables with primitive polynomial 0x11D
  const GF_EXP = new Uint8Array(512);
  const GF_LOG = new Uint8Array(256);
  (function initGF() {
    let x = 1;
    for (let i = 0; i < 255; i++) {
      GF_EXP[i] = x;
      GF_LOG[x] = i;
      x <<= 1;
      if (x & 0x100) x ^= 0x11d;
    }
    for (let i = 255; i < 512; i++) {
      GF_EXP[i] = GF_EXP[i - 255];
    }
  })();

  function gfMul(a, b) {
    if (a === 0 || b === 0) return 0;
    return GF_EXP[GF_LOG[a] + GF_LOG[b]];
  }

  function rsGenerator(degree) {
    let poly = [1];
    for (let i = 0; i < degree; i++) {
      const next = new Array(poly.length + 1).fill(0);
      const factor = GF_EXP[i];
      for (let j = 0; j < poly.length; j++) {
        next[j] ^= poly[j];
        next[j + 1] ^= gfMul(poly[j], factor);
      }
      poly = next;
    }
    return poly;
  }

  function rsComputeEC(data, ecLen) {
    const gen = rsGenerator(ecLen);
    const res = new Uint8Array(ecLen);
    for (let i = 0; i < data.length; i++) {
      const factor = data[i] ^ res[0];
      for (let j = 0; j < ecLen - 1; j++) res[j] = res[j + 1];
      res[ecLen - 1] = 0;
      if (factor !== 0) {
        for (let j = 0; j < ecLen; j++) {
          res[j] ^= gfMul(gen[j + 1], factor);
        }
      }
    }
    return res;
  }

  function utf8Bytes(str) {
    if (typeof TextEncoder !== "undefined") {
      return Array.from(new TextEncoder().encode(str));
    }
    const encoded = unescape(encodeURIComponent(str));
    const out = new Array(encoded.length);
    for (let i = 0; i < encoded.length; i++) out[i] = encoded.charCodeAt(i);
    return out;
  }

  function chooseVersion(byteLen) {
    for (let v = 1; v < LEVEL_L_SPECS.length; v++) {
      const capBytes = LEVEL_L_SPECS[v][0];
      const countBits = v <= 9 ? 8 : 16;
      const neededBits = 4 + countBits + byteLen * 8;
      if (neededBits <= capBytes * 8) return v;
    }
    throw new Error("QR payload exceeds Version 15 capacity");
  }

  function encodeCodewords(bytes, version) {
    const spec = LEVEL_L_SPECS[version];
    const totalData = spec[0];
    const countBits = version <= 9 ? 8 : 16;
    const bits = [];

    function pushBits(val, len) {
      for (let i = len - 1; i >= 0; i--) {
        bits.push((val >>> i) & 1);
      }
    }

    // Mode 0100 (Byte), Char count, Payload
    pushBits(0b0100, 4);
    pushBits(bytes.length, countBits);
    for (let i = 0; i < bytes.length; i++) pushBits(bytes[i], 8);

    // Terminator (up to 4 zero bits)
    const capBits = totalData * 8;
    const termLen = Math.min(4, capBits - bits.length);
    pushBits(0, termLen);

    // Pad to byte boundary
    while (bits.length % 8 !== 0) bits.push(0);

    // Pad codewords 0xEC, 0x11
    const codewords = [];
    for (let i = 0; i < bits.length; i += 8) {
      let b = 0;
      for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
      codewords.push(b);
    }
    let padIdx = 0;
    while (codewords.length < totalData) {
      codewords.push(padIdx % 2 === 0 ? 0xec : 0x11);
      padIdx++;
    }

    // Split into blocks & interleave data + EC codewords
    const ecLen = spec[1];
    const g1Count = spec[2];
    const g1Len = spec[3];
    const g2Count = spec[4];
    const g2Len = spec[5];

    const dataBlocks = [];
    const ecBlocks = [];
    let offset = 0;
    for (let i = 0; i < g1Count; i++) {
      const blk = codewords.slice(offset, offset + g1Len);
      offset += g1Len;
      dataBlocks.push(blk);
      ecBlocks.push(rsComputeEC(blk, ecLen));
    }
    for (let i = 0; i < g2Count; i++) {
      const blk = codewords.slice(offset, offset + g2Len);
      offset += g2Len;
      dataBlocks.push(blk);
      ecBlocks.push(rsComputeEC(blk, ecLen));
    }

    const result = [];
    const maxDataLen = Math.max(g1Len, g2Len);
    for (let i = 0; i < maxDataLen; i++) {
      for (let b = 0; b < dataBlocks.length; b++) {
        if (i < dataBlocks[b].length) result.push(dataBlocks[b][i]);
      }
    }
    for (let i = 0; i < ecLen; i++) {
      for (let b = 0; b < ecBlocks.length; b++) {
        result.push(ecBlocks[b][i]);
      }
    }
    return result;
  }

  function bchFormat(mask) {
    // EC Level L = 01
    const data = (0b01 << 3) | (mask & 7);
    let d = data << 10;
    const gen = 0x537;
    for (let i = 14; i >= 10; i--) {
      if ((d >>> i) & 1) d ^= gen << (i - 10);
    }
    return ((data << 10) | d) ^ 0x5412;
  }

  function bchVersion(version) {
    let d = version << 12;
    const gen = 0x1f25;
    for (let i = 17; i >= 12; i--) {
      if ((d >>> i) & 1) d ^= gen << (i - 12);
    }
    return (version << 12) | d;
  }

  function buildBaseMatrix(version) {
    const size = 17 + 4 * version;
    const modules = Array.from({ length: size }, () => new Array(size).fill(false));
    const isFunc = Array.from({ length: size }, () => new Array(size).fill(false));

    function setFunc(r, c, val) {
      if (r >= 0 && r < size && c >= 0 && c < size) {
        modules[r][c] = !!val;
        isFunc[r][c] = true;
      }
    }

    function drawFinder(topR, leftC) {
      for (let dr = -1; dr <= 7; dr++) {
        for (let dc = -1; dc <= 7; dc++) {
          const r = topR + dr;
          const c = leftC + dc;
          if (r < 0 || r >= size || c < 0 || c >= size) continue;
          const dist = Math.max(Math.abs(dr - 3), Math.abs(dc - 3));
          const dark = dist !== 2 && dist !== 4;
          setFunc(r, c, dark);
        }
      }
    }

    function drawAlignment(centerR, centerC) {
      for (let dr = -2; dr <= 2; dr++) {
        for (let dc = -2; dc <= 2; dc++) {
          const dist = Math.max(Math.abs(dr), Math.abs(dc));
          setFunc(centerR + dr, centerC + dc, dist !== 1);
        }
      }
    }

    // Finder patterns + separators
    drawFinder(0, 0);
    drawFinder(0, size - 7);
    drawFinder(size - 7, 0);

    // Timing patterns
    for (let i = 8; i < size - 8; i++) {
      const dark = i % 2 === 0;
      setFunc(6, i, dark);
      setFunc(i, 6, dark);
    }

    // Alignment patterns
    const centers = ALIGN_POS[version];
    for (let i = 0; i < centers.length; i++) {
      for (let j = 0; j < centers.length; j++) {
        if ((i === 0 && j === 0) || (i === 0 && j === centers.length - 1) || (i === centers.length - 1 && j === 0)) {
          continue;
        }
        drawAlignment(centers[i], centers[j]);
      }
    }

    // Reserve format info areas & dark module
    for (let i = 0; i <= 8; i++) {
      if (i !== 6) {
        setFunc(8, i, false);
        setFunc(i, 8, false);
      }
    }
    for (let i = 0; i < 8; i++) {
      setFunc(8, size - 1 - i, false);
    }
    for (let i = 0; i < 7; i++) {
      setFunc(size - 1 - i, 8, false);
    }
    setFunc(4 * version + 9, 8, true);

    // Version info for V7+
    if (version >= 7) {
      const vBits = bchVersion(version);
      for (let i = 0; i < 18; i++) {
        const bit = ((vBits >>> i) & 1) === 1;
        const a = Math.floor(i / 3);
        const b = size - 11 + (i % 3);
        setFunc(b, a, bit);
        setFunc(a, b, bit);
      }
    }

    return { size, modules, isFunc };
  }

  function placeCodewords(base, codewords) {
    const size = base.size;
    let bitIdx = 0;
    const totalBits = codewords.length * 8;
    let upward = true;

    for (let rightCol = size - 1; rightCol >= 1; rightCol -= 2) {
      if (rightCol === 6) rightCol = 5;
      for (let step = 0; step < size; step++) {
        const r = upward ? size - 1 - step : step;
        for (let dx = 0; dx < 2; dx++) {
          const c = rightCol - dx;
          if (!base.isFunc[r][c]) {
            let dark = false;
            if (bitIdx < totalBits) {
              dark = ((codewords[bitIdx >>> 3] >>> (7 - (bitIdx & 7))) & 1) === 1;
              bitIdx++;
            }
            base.modules[r][c] = dark;
          }
        }
      }
      upward = !upward;
    }
  }

  const MASK_FNS = [
    (r, c) => (r + c) % 2 === 0,
    (r) => r % 2 === 0,
    (_r, c) => c % 3 === 0,
    (r, c) => (r + c) % 3 === 0,
    (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
    (r, c) => ((r * c) % 2 + (r * c) % 3) === 0,
    (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
    (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0
  ];

  function applyMaskAndFormat(base, maskIdx) {
    const size = base.size;
    const mat = base.modules.map((row) => row.slice());
    const maskFn = MASK_FNS[maskIdx];
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!base.isFunc[r][c] && maskFn(r, c)) {
          mat[r][c] = !mat[r][c];
        }
      }
    }

    const fmt = bchFormat(maskIdx);
    // Copy 1 (top-left)
    for (let i = 0; i <= 5; i++) mat[8][i] = ((fmt >>> (14 - i)) & 1) === 1;
    mat[8][7] = ((fmt >>> 8) & 1) === 1;
    mat[8][8] = ((fmt >>> 7) & 1) === 1;
    mat[7][8] = ((fmt >>> 6) & 1) === 1;
    for (let i = 0; i <= 5; i++) mat[5 - i][8] = ((fmt >>> (5 - i)) & 1) === 1;

    // Copy 2 (bottom-left bits 14..8 & top-right bits 7..0)
    for (let i = 0; i < 7; i++) mat[size - 1 - i][8] = ((fmt >>> (14 - i)) & 1) === 1;
    for (let i = 0; i < 8; i++) mat[8][size - 8 + i] = ((fmt >>> (7 - i)) & 1) === 1;

    return mat;
  }

  function penaltyScore(mat) {
    const size = mat.length;
    let penalty = 0;

    // Rule 1: 5+ consecutive same-color modules in row or column
    for (let r = 0; r < size; r++) {
      let runColor = mat[r][0];
      let runLen = 1;
      for (let c = 1; c < size; c++) {
        if (mat[r][c] === runColor) {
          runLen++;
        } else {
          if (runLen >= 5) penalty += 3 + (runLen - 5);
          runColor = mat[r][c];
          runLen = 1;
        }
      }
      if (runLen >= 5) penalty += 3 + (runLen - 5);
    }
    for (let c = 0; c < size; c++) {
      let runColor = mat[0][c];
      let runLen = 1;
      for (let r = 1; r < size; r++) {
        if (mat[r][c] === runColor) {
          runLen++;
        } else {
          if (runLen >= 5) penalty += 3 + (runLen - 5);
          runColor = mat[r][c];
          runLen = 1;
        }
      }
      if (runLen >= 5) penalty += 3 + (runLen - 5);
    }

    // Rule 2: 2x2 blocks of same color
    for (let r = 0; r < size - 1; r++) {
      for (let c = 0; c < size - 1; c++) {
        const v = mat[r][c];
        if (mat[r][c + 1] === v && mat[r + 1][c] === v && mat[r + 1][c + 1] === v) {
          penalty += 3;
        }
      }
    }

    // Rule 3: finder-like 1:1:3:1:1 patterns (1011101 with 4 light before or after)
    function checkLine(getVal) {
      for (let i = 0; i <= size - 11; i++) {
        const m0 = getVal(i), m1 = getVal(i + 1), m2 = getVal(i + 2), m3 = getVal(i + 3);
        const m4 = getVal(i + 4), m5 = getVal(i + 5), m6 = getVal(i + 6);
        const m7 = getVal(i + 7), m8 = getVal(i + 8), m9 = getVal(i + 9), m10 = getVal(i + 10);
        if (m0 && !m1 && m2 && m3 && m4 && !m5 && m6 && !m7 && !m8 && !m9 && !m10) penalty += 40;
        if (!m0 && !m1 && !m2 && !m3 && m4 && !m5 && m6 && m7 && m8 && !m9 && m10) penalty += 40;
      }
    }
    for (let r = 0; r < size; r++) checkLine((i) => mat[r][i]);
    for (let c = 0; c < size; c++) checkLine((i) => mat[i][c]);

    // Rule 4: dark proportion balance
    let darkCount = 0;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (mat[r][c]) darkCount++;
      }
    }
    const pct = (darkCount * 100) / (size * size);
    const k = Math.min(Math.floor(Math.abs(pct - 50) / 5), 10);
    penalty += k * 10;

    return penalty;
  }

  function encodeMatrix(text) {
    const bytes = utf8Bytes(String(text || ""));
    const version = chooseVersion(bytes.length);
    const codewords = encodeCodewords(bytes, version);
    const base = buildBaseMatrix(version);
    placeCodewords(base, codewords);

    let bestMat = null;
    let bestScore = Infinity;
    for (let m = 0; m < 8; m++) {
      const candidate = applyMaskAndFormat(base, m);
      const score = penaltyScore(candidate);
      if (score < bestScore) {
        bestScore = score;
        bestMat = candidate;
      }
    }
    return bestMat;
  }

  function toSvg(text, opts) {
    const options = opts || {};
    const margin = typeof options.margin === "number" ? options.margin : 4;
    const dark = options.dark || "#111111";
    const light = options.light || "#ffffff";
    const mat = encodeMatrix(text);
    const size = mat.length;
    const full = size + margin * 2;

    const parts = [];
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (mat[r][c]) {
          parts.push(`M${c + margin},${r + margin}h1v1h-1z`);
        }
      }
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${full} ${full}" shape-rendering="crispEdges" role="img" aria-label="设备配对二维码"><rect width="${full}" height="${full}" fill="${light}"/><path d="${parts.join("")}" fill="${dark}"/></svg>`;
  }

  const api = { encodeMatrix: encodeMatrix, toSvg: toSvg };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
  root.KaoyanQR = api;
})(typeof window !== "undefined" ? window : globalThis);
