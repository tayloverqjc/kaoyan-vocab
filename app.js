(() => {
  const STORAGE_KEY = "kaoyan_vocab_progress_v1";
  const THEME_KEY = "kaoyan_vocab_theme_v1";
  const SET_KEY = "kaoyan_vocab_set_v1";

  const ICONS = {
    speaker: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
    bookmark: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>',
    bookmarkFill: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>',
    check: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    eyeOff: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>',
    eye: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
    moon: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    sun: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    shuffle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/></svg>',
    prev: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
    next: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    trash: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
    restore: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>'
  };

  const manifest = window.VOCAB_MANIFEST || [];
  const sets = window.VOCAB_SETS || {};

  function initialSetId() {
    try {
      const saved = localStorage.getItem(SET_KEY);
      if (saved && manifest.some(m => m.id === saved)) return saved;
    } catch (_) {}
    const def = manifest.find(m => m.id === "2012-en2-reading") || manifest[0];
    return def ? def.id : "";
  }

  const state = {
    setId: initialSetId(),
    passage: "ALL",
    collection: "all", // all | unmastered | hard | secondary | mastered | deleted
    view: "cards", // cards | ledger | deck
    maskMeaning: false,
    search: "",
    revealedIds: new Set(),
    expandedIds: new Set(),
    fcIndex: 0,
    fcFlipped: false,
    fcShowHint: false,
    fcOrder: [],
    progress: loadProgress()
  };

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        return {
          mastered: Array.isArray(p.mastered) ? p.mastered : [],
          hard: Array.isArray(p.hard) ? p.hard : [],
          deleted: Array.isArray(p.deleted) ? p.deleted : []
        };
      }
    } catch (_) {}
    return { mastered: [], hard: [], deleted: [] };
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch (_) {}
  }

  const isMastered = id => state.progress.mastered.includes(id);
  const isHard = id => state.progress.hard.includes(id);
  const isDeleted = id => state.progress.deleted.includes(id);

  function toggleMastered(id, force) {
    const next = typeof force === "boolean" ? force : !isMastered(id);
    state.progress.mastered = state.progress.mastered.filter(x => x !== id);
    if (next) {
      state.progress.mastered.push(id);
      state.progress.hard = state.progress.hard.filter(x => x !== id);
    }
    saveProgress();
  }

  function toggleHard(id, force) {
    const next = typeof force === "boolean" ? force : !isHard(id);
    state.progress.hard = state.progress.hard.filter(x => x !== id);
    if (next) {
      state.progress.hard.push(id);
      state.progress.mastered = state.progress.mastered.filter(x => x !== id);
    }
    saveProgress();
  }

  function deleteWord(item) {
    const prev = { wasMastered: isMastered(item.id), wasHard: isHard(item.id) };
    if (!isDeleted(item.id)) state.progress.deleted.push(item.id);
    state.progress.mastered = state.progress.mastered.filter(x => x !== item.id);
    state.progress.hard = state.progress.hard.filter(x => x !== item.id);
    state.fcOrder = state.fcOrder.filter(x => x !== item.id);
    state.fcFlipped = false;
    state.fcShowHint = false;
    saveProgress();
    render();
    showToast(`已移出「${item.word}」`, {
      label: "撤销",
      onClick: () => {
        restoreWord(item.id, prev);
        showToast(`已恢复「${item.word}」`);
      }
    });
  }

  function restoreWord(id, prev = null) {
    state.progress.deleted = state.progress.deleted.filter(x => x !== id);
    if (prev && prev.wasMastered && !isMastered(id)) state.progress.mastered.push(id);
    if (prev && prev.wasHard && !isHard(id)) state.progress.hard.push(id);
    saveProgress();
    if (state.collection === "deleted" && !deletedWords().length) {
      state.collection = "all";
    }
    syncDeckOrder(false);
    render();
  }

  function restoreAllCurrentDeleted() {
    const ids = new Set(deletedWords().map(w => w.id));
    if (!ids.size) return;
    state.progress.deleted = state.progress.deleted.filter(id => !ids.has(id));
    saveProgress();
    state.collection = "all";
    syncDeckOrder(false);
    render();
    showToast(`已恢复本卷 ${ids.size} 个词条`);
  }

  function currentSet() {
    return sets[state.setId] || null;
  }

  function rawWords() {
    const s = currentSet();
    if (!s) return [];
    return s.passages.flatMap(p =>
      p.words.map(w => ({
        ...w,
        passageId: p.id,
        passageCode: p.code,
        passageTitle: p.title
      }))
    );
  }

  function allWords() {
    let idx = 0;
    return rawWords()
      .filter(w => !isDeleted(w.id))
      .map(w => ({ ...w, num: ++idx }));
  }

  function deletedWords() {
    let idx = 0;
    return rawWords()
      .filter(w => isDeleted(w.id))
      .map(w => ({ ...w, num: ++idx }));
  }

  function filteredWords() {
    const q = state.search.trim().toLowerCase();
    const base = state.collection === "deleted" ? deletedWords() : allWords();
    return base.filter(w => {
      if (state.passage !== "ALL" && w.passageId !== state.passage) return false;
      if (state.collection === "unmastered" && isMastered(w.id)) return false;
      if (state.collection === "hard" && !isHard(w.id)) return false;
      if (state.collection === "secondary" && !w.secondary) return false;
      if (state.collection === "mastered" && !isMastered(w.id)) return false;
      if (q && !`${w.word} ${w.meaning} ${w.usage} ${w.memory}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  function extractEnglishHint(usage) {
    const matches = [...usage.matchAll(/`([^`]+)`/g)].map(m => m[1]);
    if (!matches.length) return "";
    // Prefer the longest English snippet as context clue
    return matches.sort((a, b) => b.length - a.length)[0];
  }

  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const fmtBody = s => esc(s)
    .replace(/⭐\*\*熟词生义\*\*：?/g, "")
    .replace(/\*\*熟词生义\*\*：?/g, "")
    .replace(/`([^`]+)`/g, '<span class="en-quote">$1</span>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  const fmtMeaning = s => esc(s).replace(/`([^`]+)`/g, '<span class="pos-chip">$1</span>');

  let toastTimer = null;
  function showToast(msg, action = null) {
    const el = document.getElementById("toast");
    el.innerHTML = "";
    const txt = document.createElement("span");
    txt.textContent = msg;
    el.appendChild(txt);
    if (action && action.label && typeof action.onClick === "function") {
      el.classList.add("has-action");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "toast-act";
      btn.textContent = action.label;
      btn.onclick = () => {
        el.classList.remove("show", "has-action");
        clearTimeout(toastTimer);
        action.onClick();
      };
      el.appendChild(btn);
    } else {
      el.classList.remove("has-action");
    }
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show", "has-action"), action ? 4200 : 1800);
  }

  function speakWord(word, btnEl) {
    if (!("speechSynthesis" in window)) {
      showToast("当前浏览器不支持语音朗读");
      return;
    }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(word);
      u.lang = "en-US";
      u.rate = 0.9;
      if (btnEl) {
        btnEl.classList.add("speaking");
        u.onend = () => btnEl.classList.remove("speaking");
        u.onerror = () => btnEl.classList.remove("speaking");
      }
      speechSynthesis.speak(u);
    } catch (_) {}
  }

  function syncDeckOrder(shuffle = false) {
    const ids = filteredWords().map(w => w.id);
    if (shuffle) {
      for (let i = ids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ids[i], ids[j]] = [ids[j], ids[i]];
      }
    }
    state.fcOrder = ids;
    state.fcIndex = 0;
    state.fcFlipped = false;
    state.fcShowHint = false;
  }

  function closeDrawer() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("drawerBackdrop").classList.remove("open");
  }

  function openDrawer() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("drawerBackdrop").classList.add("open");
  }

  function renderSidebar() {
    const all = allWords();
    const total = all.length;
    const mastered = all.filter(w => isMastered(w.id)).length;
    const hard = all.filter(w => isHard(w.id)).length;
    const secondary = all.filter(w => w.secondary).length;
    const remain = total - mastered;
    const pct = total ? Math.round((mastered / total) * 100) : 0;

    // SVG Ring (r = 28 -> circumference = 175.93)
    const circ = 2 * Math.PI * 28;
    const fg = document.getElementById("ringFg");
    fg.style.strokeDasharray = `${circ}`;
    fg.style.strokeDashoffset = `${circ * (1 - pct / 100)}`;

    document.getElementById("ringPct").textContent = `${pct}%`;
    document.getElementById("mobilePct").textContent = `${pct}%`;
    document.getElementById("statMastered").textContent = mastered;
    document.getElementById("statTotal").textContent = total;
    document.getElementById("statRemain").textContent = remain;
    document.getElementById("statHard").textContent = hard;

    // Year switcher
    const setEl = document.getElementById("yearList");
    setEl.innerHTML = "";
    manifest.forEach(item => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = `year-btn ${item.id === state.setId ? "active" : ""}`;
      b.textContent = item.shortLabel;
      b.title = `${item.label}（共 ${item.count} 词）`;
      b.onclick = () => {
        if (state.setId === item.id) return;
        state.setId = item.id;
        state.passage = "ALL";
        state.collection = "all";
        state.revealedIds.clear();
        state.expandedIds.clear();
        try { localStorage.setItem(SET_KEY, item.id); } catch (_) {}
        syncDeckOrder(false);
        closeDrawer();
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
        showToast(`已切换：${item.label}`);
      };
      setEl.appendChild(b);
    });

    // Chapters
    const chapEl = document.getElementById("chapterList");
    chapEl.innerHTML = "";
    const cur = currentSet();
    if (cur) {
      const items = [
        { id: "ALL", title: "全部篇目", count: total, done: mastered },
        ...cur.passages.map(p => {
          const active = p.words.filter(w => !isDeleted(w.id));
          return {
            id: p.id,
            title: `${p.code} · ${p.title}`,
            count: active.length,
            done: active.filter(w => isMastered(w.id)).length
          };
        })
      ];
      items.forEach(it => {
        const pPct = it.count ? Math.round((it.done / it.count) * 100) : 0;
        const b = document.createElement("button");
        b.type = "button";
        b.className = `side-item ${state.passage === it.id ? "active" : ""}`;
        b.innerHTML = `
          <div class="side-item-row">
            <span class="side-item-title"><span class="chapter-dot"></span><span>${esc(it.title)}</span></span>
            <span class="side-count">${it.done}/${it.count}</span>
          </div>
          <div class="mini-bar"><div class="mini-bar-fill" style="width:${pPct}%"></div></div>
        `;
        b.onclick = () => {
          state.passage = it.id;
          syncDeckOrder(false);
          closeDrawer();
          render();
        };
        chapEl.appendChild(b);
      });
    }

    // Smart collections
    const delCount = deletedWords().length;
    const colEl = document.getElementById("collectionList");
    colEl.innerHTML = "";
    const cols = [
      { id: "all", label: "全部词条", count: total },
      { id: "unmastered", label: "待攻克", count: remain },
      { id: "hard", label: "易忘钉子户", count: hard },
      { id: "secondary", label: "熟词生义精选", count: secondary },
      { id: "mastered", label: "已掌握词库", count: mastered }
    ];
    if (delCount > 0 || state.collection === "deleted") {
      cols.push({ id: "deleted", label: "已移出词库", count: delCount });
    }
    cols.forEach(c => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = `side-item ${state.collection === c.id ? "active" : ""}`;
      b.innerHTML = `<div class="side-item-row"><span>${esc(c.label)}</span><span class="side-count">${c.count}</span></div>`;
      b.onclick = () => {
        state.collection = c.id;
        syncDeckOrder(false);
        closeDrawer();
        render();
      };
      colEl.appendChild(b);
    });
  }

  function renderStageHeader() {
    const cur = currentSet();
    const list = filteredWords();
    let title = "全部篇目";
    if (cur && state.passage !== "ALL") {
      const p = cur.passages.find(x => x.id === state.passage);
      if (p) title = `${p.code} · ${p.title}`;
    }
    const colLabels = {
      all: "全量词表",
      unmastered: "待攻克",
      hard: "易忘钉子户",
      secondary: "熟词生义",
      mastered: "已掌握",
      deleted: "已移出词库"
    };
    document.getElementById("stageKicker").textContent = `${cur ? cur.label : ""} · ${colLabels[state.collection]} (${list.length})`;
    document.getElementById("stageTitle").textContent = title;

    document.querySelectorAll("[data-view]").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === state.view);
    });

    const maskBtn = document.getElementById("maskBtn");
    maskBtn.classList.toggle("active", state.maskMeaning);
    maskBtn.classList.toggle("hidden", state.view === "deck");
    maskBtn.innerHTML = `${state.maskMeaning ? ICONS.eye : ICONS.eyeOff}<span>${state.maskMeaning ? "显示词义" : "遮义自测"}</span>`;
  }

  function renderTrashBanner(box) {
    if (state.collection !== "deleted") return;
    const totalDel = deletedWords().length;
    if (!totalDel) return;
    const bar = document.createElement("div");
    bar.className = "trash-banner";
    bar.innerHTML = `
      <span>已移出的简单词/熟词不会计入当前词卷进度，随时可单条或批量恢复。</span>
      <button type="button" class="foot-btn master-on" id="restoreAllBtn">${ICONS.restore}<span>恢复本卷全部 (${totalDel})</span></button>
    `;
    bar.querySelector("#restoreAllBtn").onclick = restoreAllCurrentDeleted;
    box.appendChild(bar);
  }

  function renderEmpty(box) {
    box.innerHTML = `
      <div class="empty-box">
        <h3>这一组词条已经空啦</h3>
        <p>可以切换左侧篇目或筛选条件，也可以清空搜索词重新浏览。</p>
        <button type="button" class="ink-btn" id="resetBtn">回到全部词条</button>
      </div>`;
    document.getElementById("resetBtn").onclick = () => {
      state.passage = "ALL";
      state.collection = "all";
      state.search = "";
      document.getElementById("searchInput").value = "";
      syncDeckOrder(false);
      render();
    };
  }

  function renderCardsView(list, box) {
    if (!list.length) return renderEmpty(box);
    renderTrashBanner(box);
    const inTrash = state.collection === "deleted";
    const cur = currentSet();
    cur.passages.forEach(p => {
      const pw = list.filter(w => w.passageId === p.id);
      if (!pw.length) return;
      const done = pw.filter(w => isMastered(w.id)).length;
      const block = document.createElement("section");
      block.className = "chapter-block";
      block.innerHTML = `
        <div class="chapter-banner">
          <h2><span class="chapter-roman">${esc(p.code)}</span><span>${esc(p.title)}</span></h2>
          <span class="chapter-stat">${inTrash ? `${pw.length} 词已移出` : `${done} / ${pw.length} 已掌握`}</span>
        </div>`;

      const grid = document.createElement("div");
      grid.className = "card-grid";

      pw.forEach(item => {
        const m = isMastered(item.id);
        const h = isHard(item.id);
        const frosted = state.maskMeaning && !state.revealedIds.has(item.id);
        const card = document.createElement("article");
        card.className = `lex-card ${m ? "is-mastered" : ""} ${h ? "is-hard" : ""}`;
        card.innerHTML = `
          <div class="card-meta-row">
            <span class="card-num">No.${String(item.num).padStart(2, "0")}</span>
            ${item.secondary ? '<span class="seal-tag">熟词生义</span>' : ""}
          </div>
          <div class="headword-row">
            <span class="headword">${esc(item.word)}</span>
            <span class="ipa">${esc(item.ipa)}</span>
            <button type="button" class="speak-btn" title="朗读发音" aria-label="朗读">${ICONS.speaker}</button>
          </div>
          <div class="meaning-zone" data-a="peek">
            <div class="meaning-val ${frosted ? "frosted" : ""}">${fmtMeaning(item.meaning)}</div>
            ${frosted ? '<div class="frost-veil"><span>轻触揭开释义</span></div>' : ""}
          </div>
          <div class="card-body">
            <div class="note-section"><span class="note-label">真题用法</span>${fmtBody(item.usage)}</div>
            <div class="memory-strip"><span class="note-label">记忆挂钩</span>${fmtBody(item.memory)}</div>
          </div>
          <div class="card-foot">
            <span class="foot-chapter">${esc(item.passageCode)} · ${esc(item.passageTitle)}</span>
            <div class="foot-actions">
              ${inTrash
                ? `<button type="button" class="foot-btn master-on" data-a="res">${ICONS.restore}<span>恢复词条</span></button>`
                : `
                  <button type="button" class="foot-btn ${h ? "hard-on" : ""}" data-a="h">${h ? ICONS.bookmarkFill : ICONS.bookmark}<span>${h ? "已标易忘" : "易忘"}</span></button>
                  <button type="button" class="foot-btn ${m ? "master-on" : ""}" data-a="m">${ICONS.check}<span>${m ? "已掌握" : "掌握"}</span></button>
                  <button type="button" class="foot-btn del-btn" data-a="del" title="移出词本（太简单/已熟知）" aria-label="移出词本">${ICONS.trash}</button>
                `}
            </div>
          </div>
        `;

        const spk = card.querySelector(".speak-btn");
        spk.onclick = () => speakWord(item.word, spk);
        if (inTrash) {
          card.querySelector('[data-a="res"]').onclick = () => {
            restoreWord(item.id);
            showToast(`已恢复「${item.word}」`);
          };
        } else {
          card.querySelector('[data-a="h"]').onclick = () => { toggleHard(item.id); render(); };
          card.querySelector('[data-a="m"]').onclick = () => { toggleMastered(item.id); render(); };
          card.querySelector('[data-a="del"]').onclick = () => deleteWord(item);
        }
        card.querySelector('[data-a="peek"]').onclick = () => {
          if (!state.maskMeaning) return;
          state.revealedIds.has(item.id) ? state.revealedIds.delete(item.id) : state.revealedIds.add(item.id);
          renderMain();
        };

        grid.appendChild(card);
      });

      block.appendChild(grid);
      box.appendChild(block);
    });
  }

  function renderLedgerView(list, box) {
    if (!list.length) return renderEmpty(box);
    renderTrashBanner(box);
    const inTrash = state.collection === "deleted";
    const cur = currentSet();
    cur.passages.forEach(p => {
      const pw = list.filter(w => w.passageId === p.id);
      if (!pw.length) return;
      const block = document.createElement("section");
      block.className = "chapter-block";
      block.innerHTML = `
        <div class="chapter-banner">
          <h2><span class="chapter-roman">${esc(p.code)}</span><span>${esc(p.title)}</span></h2>
          <span class="chapter-stat">${inTrash ? `${pw.length} 词已移出` : "点击任意一行展开真题用法与记忆法 · 右侧可快速清理熟词"}</span>
        </div>`;
      const ledger = document.createElement("div");
      ledger.className = "ledger";

      pw.forEach(item => {
        const m = isMastered(item.id);
        const h = isHard(item.id);
        const frosted = state.maskMeaning && !state.revealedIds.has(item.id);
        const open = state.expandedIds.has(item.id);

        const row = document.createElement("div");
        row.className = `ledger-row ${m ? "is-mastered" : ""}`;
        row.innerHTML = `
          <div class="ledger-main" data-a="exp">
            <div class="ledger-word-col">
              <button type="button" class="speak-btn" style="transform:none;width:24px;height:24px" data-a="spk">${ICONS.speaker}</button>
              <div>
                <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                  <span class="ledger-word">${esc(item.word)}</span>
                  ${item.secondary ? '<span class="seal-tag">熟</span>' : ""}
                </div>
                <div class="ledger-ipa">${esc(item.ipa)}</div>
              </div>
            </div>
            <div style="position:relative" data-a="peek">
              <div class="meaning-val ${frosted ? "frosted" : ""}" style="font-size:14.5px;font-weight:500">${fmtMeaning(item.meaning)}</div>
              ${frosted ? '<div class="frost-veil"><span>点击查看</span></div>' : ""}
            </div>
            <div class="foot-actions">
              ${inTrash
                ? `<button type="button" class="foot-btn master-on" data-a="res" title="恢复词条">${ICONS.restore}<span>恢复</span></button>`
                : `
                  <button type="button" class="foot-btn ${h ? "hard-on" : ""}" data-a="h" title="易忘">${h ? ICONS.bookmarkFill : ICONS.bookmark}</button>
                  <button type="button" class="foot-btn ${m ? "master-on" : ""}" data-a="m" title="已掌握">${ICONS.check}</button>
                  <button type="button" class="foot-btn del-btn" data-a="del" title="移出词本（太简单/已熟知）" aria-label="移出词本">${ICONS.trash}</button>
                `}
            </div>
          </div>
          ${open ? `
            <div class="ledger-detail">
              <div class="note-section"><span class="note-label">真题用法</span>${fmtBody(item.usage)}</div>
              <div class="memory-strip"><span class="note-label">记忆挂钩</span>${fmtBody(item.memory)}</div>
            </div>` : ""}
        `;

        row.querySelector('[data-a="spk"]').onclick = e => { e.stopPropagation(); speakWord(item.word, e.currentTarget); };
        if (inTrash) {
          row.querySelector('[data-a="res"]').onclick = e => {
            e.stopPropagation();
            restoreWord(item.id);
            showToast(`已恢复「${item.word}」`);
          };
        } else {
          row.querySelector('[data-a="h"]').onclick = e => { e.stopPropagation(); toggleHard(item.id); render(); };
          row.querySelector('[data-a="m"]').onclick = e => { e.stopPropagation(); toggleMastered(item.id); render(); };
          row.querySelector('[data-a="del"]').onclick = e => { e.stopPropagation(); deleteWord(item); };
        }
        row.querySelector('[data-a="peek"]').onclick = e => {
          if (!state.maskMeaning) return;
          e.stopPropagation();
          state.revealedIds.has(item.id) ? state.revealedIds.delete(item.id) : state.revealedIds.add(item.id);
          renderMain();
        };
        row.querySelector('[data-a="exp"]').onclick = () => {
          state.expandedIds.has(item.id) ? state.expandedIds.delete(item.id) : state.expandedIds.add(item.id);
          renderMain();
        };

        ledger.appendChild(row);
      });

      block.appendChild(ledger);
      box.appendChild(block);
    });
  }

  function renderDeckView(list, box) {
    const inTrash = state.collection === "deleted";
    const map = new Map(list.map(w => [w.id, w]));
    let ids = state.fcOrder.filter(id => map.has(id));
    if (!ids.length && list.length) {
      syncDeckOrder(false);
      ids = state.fcOrder.filter(id => map.has(id));
    }
    if (!ids.length) return renderEmpty(box);
    if (state.fcIndex >= ids.length) state.fcIndex = 0;

    const item = map.get(ids[state.fcIndex]);
    const hintQuote = extractEnglishHint(item.usage);

    box.innerHTML = `
      <div class="deck-stage">
        <div class="deck-bar">
          <span>卡片 <strong>${state.fcIndex + 1}</strong> / ${ids.length}</span>
          <div style="display:flex;gap:8px">
            <button type="button" class="mask-btn" style="height:32px;padding:0 10px" id="fcPrev">${ICONS.prev}<span>上一张</span></button>
            <button type="button" class="mask-btn" style="height:32px;padding:0 10px" id="fcShuffle">${ICONS.shuffle}<span>洗牌</span></button>
            <button type="button" class="mask-btn" style="height:32px;padding:0 10px" id="fcNext"><span>下一张</span>${ICONS.next}</button>
          </div>
        </div>

        <div class="deck-stack">
          <div class="flip-scene ${state.fcFlipped ? "flipped" : ""}" id="flipScene">
            <!-- Front Face -->
            <div class="flip-face flip-front">
              <div class="fc-top-row">
                <span>${esc(item.passageCode)} · ${esc(item.passageTitle)}</span>
                <div style="display:inline-flex;align-items:center;gap:8px">
                  <span>${item.secondary ? '<span class="seal-tag">熟词生义</span>' : `No.${String(item.num).padStart(2, "0")}`}</span>
                  ${inTrash
                    ? `<button type="button" class="foot-btn master-on" id="fcActionFront">${ICONS.restore}<span>恢复</span></button>`
                    : `<button type="button" class="foot-btn del-btn" id="fcActionFront" title="移出词本（太简单/已熟知）">${ICONS.trash}<span>移出</span></button>`}
                </div>
              </div>
              <div class="fc-center">
                <h2 class="fc-big-word">${esc(item.word)}</h2>
                <div class="fc-ipa-line">
                  <span class="ipa">${esc(item.ipa)}</span>
                  <button type="button" class="speak-btn" id="fcSpeakFront" title="朗读">${ICONS.speaker}</button>
                </div>
                ${state.fcShowHint && hintQuote ? `<div class="fc-context-hint">“${esc(hintQuote)}”</div>` : ""}
              </div>
              <div class="fc-front-actions">
                <button type="button" class="ink-btn" id="fcFlipBtn">翻转查看释义</button>
                ${hintQuote && !state.fcShowHint ? '<button type="button" class="text-link-btn" id="fcHintBtn">先看真题英文语境提示</button>' : ""}
              </div>
            </div>

            <!-- Back Face -->
            <div class="flip-face flip-back">
              <div>
                <div class="fc-back-head">
                  <div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap">
                    <span class="fc-back-word">${esc(item.word)}</span>
                    <span class="ipa">${esc(item.ipa)}</span>
                    <button type="button" class="speak-btn" id="fcSpeakBack" title="朗读">${ICONS.speaker}</button>
                  </div>
                  <div style="display:inline-flex;align-items:center;gap:10px">
                    ${inTrash
                      ? `<button type="button" class="foot-btn master-on" id="fcActionBack">${ICONS.restore}<span>恢复</span></button>`
                      : `<button type="button" class="foot-btn del-btn" id="fcActionBack" title="移出词本（太简单/已熟知）">${ICONS.trash}</button>`}
                    <button type="button" class="text-link-btn" id="fcUnflipBtn">翻回正面</button>
                  </div>
                </div>
                <div class="fc-back-meaning">${fmtMeaning(item.meaning)}</div>
                <div class="card-body">
                  <div class="note-section"><span class="note-label">真题用法</span>${fmtBody(item.usage)}</div>
                  <div class="memory-strip"><span class="note-label">记忆挂钩</span>${fmtBody(item.memory)}</div>
                </div>
              </div>
              ${inTrash ? "" : `
              <div class="fc-ratings">
                <button type="button" class="rate-pill r-forgot" id="rate1">忘了 · 标易忘</button>
                <button type="button" class="rate-pill r-fuzzy" id="rate2">模糊 · 下张</button>
                <button type="button" class="rate-pill r-know" id="rate3">秒懂 · 掌握</button>
              </div>`}
            </div>
          </div>
        </div>

        <div class="deck-kbd">快捷键：空格翻转 · 1 忘了 · 2 模糊 · 3 掌握 · ←/→ 切卡</div>
      </div>`;

    const spkF = document.getElementById("fcSpeakFront");
    const spkB = document.getElementById("fcSpeakBack");
    spkF.onclick = () => speakWord(item.word, spkF);
    spkB.onclick = () => speakWord(item.word, spkB);

    const handleCardAction = () => {
      if (inTrash) {
        restoreWord(item.id);
        showToast(`已恢复「${item.word}」`);
      } else {
        deleteWord(item);
      }
    };
    document.getElementById("fcActionFront").onclick = handleCardAction;
    document.getElementById("fcActionBack").onclick = handleCardAction;

    document.getElementById("fcPrev").onclick = () => {
      state.fcIndex = (state.fcIndex - 1 + ids.length) % ids.length;
      state.fcFlipped = false;
      state.fcShowHint = false;
      renderMain();
    };
    document.getElementById("fcNext").onclick = () => {
      state.fcIndex = (state.fcIndex + 1) % ids.length;
      state.fcFlipped = false;
      state.fcShowHint = false;
      renderMain();
    };
    document.getElementById("fcShuffle").onclick = () => {
      syncDeckOrder(true);
      showToast("已重新洗牌");
      renderMain();
    };

    document.getElementById("fcFlipBtn").onclick = () => {
      state.fcFlipped = true;
      document.getElementById("flipScene").classList.add("flipped");
    };
    document.getElementById("fcUnflipBtn").onclick = () => {
      state.fcFlipped = false;
      document.getElementById("flipScene").classList.remove("flipped");
    };
    const hintBtn = document.getElementById("fcHintBtn");
    if (hintBtn) {
      hintBtn.onclick = () => {
        state.fcShowHint = true;
        renderMain();
      };
    }

    const r1 = document.getElementById("rate1");
    const r2 = document.getElementById("rate2");
    const r3 = document.getElementById("rate3");
    if (r1) r1.onclick = () => {
      toggleHard(item.id, true);
      showToast("已加入「易忘钉子户」");
      state.fcIndex = (state.fcIndex + 1) % ids.length;
      state.fcFlipped = false;
      state.fcShowHint = false;
      render();
    };
    if (r2) r2.onclick = () => {
      state.fcIndex = (state.fcIndex + 1) % ids.length;
      state.fcFlipped = false;
      state.fcShowHint = false;
      renderMain();
    };
    if (r3) r3.onclick = () => {
      toggleMastered(item.id, true);
      showToast("已标为掌握");
      if (state.collection !== "unmastered") {
        state.fcIndex = (state.fcIndex + 1) % ids.length;
      }
      state.fcFlipped = false;
      state.fcShowHint = false;
      render();
    };
  }

  function renderMain() {
    const list = filteredWords();
    const box = document.getElementById("stageContent");
    box.innerHTML = "";
    if (state.view === "cards") renderCardsView(list, box);
    else if (state.view === "ledger") renderLedgerView(list, box);
    else renderDeckView(list, box);
  }

  function render() {
    renderSidebar();
    renderStageHeader();
    renderMain();
  }

  // 5 Handcrafted Themes + 3 Bubeidanci-style Scenic Wallpapers for Glass
  const WALLPAPER_KEY = "kaoyan_vocab_wallpaper_v1";

  const THEMES = [
    {
      id: "paper",
      name: "精装纸感",
      swatch: "linear-gradient(135deg, #f3efe6 52%, #1e5b4c 52%)"
    },
    {
      id: "mono",
      name: "极简黑白",
      swatch: "linear-gradient(135deg, #ffffff 50%, #0a0a0a 50%)"
    },
    {
      id: "glass",
      name: "不背毛玻璃",
      swatch: "linear-gradient(135deg, #1b3158 0%, #4d7ea8 48%, #f3a683 100%)"
    },
    {
      id: "momo",
      name: "墨墨背词风",
      swatch: "linear-gradient(135deg, #edf7f3 50%, #16b385 50%)"
    },
    {
      id: "dark",
      name: "深夜护眼",
      swatch: "linear-gradient(135deg, #1b1917 52%, #56b89a 52%)"
    }
  ];

  const WALLPAPERS = [
    { id: "alpine", name: "雪山", full: "雪山暮色", img: "assets/bg-alpine.jpg" },
    { id: "sunset", name: "落日", full: "橘海落日", img: "assets/bg-sunset.jpg" },
    { id: "forest", name: "松雾", full: "晨雾松林", img: "assets/bg-forest.jpg" }
  ];

  function normalizeTheme(id) {
    if (id === "light" || !id) return "paper";
    return THEMES.some(t => t.id === id) ? id : "paper";
  }

  function normalizeWallpaper(id) {
    return WALLPAPERS.some(w => w.id === id) ? id : "alpine";
  }

  let activeTheme = "paper";
  let activeWallpaper = "alpine";
  try {
    activeTheme = normalizeTheme(localStorage.getItem(THEME_KEY));
    activeWallpaper = normalizeWallpaper(localStorage.getItem(WALLPAPER_KEY));
  } catch (_) {}

  function applyWallpaper(wpId, notify = false) {
    const id = normalizeWallpaper(wpId);
    activeWallpaper = id;
    if (id === "alpine") {
      document.documentElement.removeAttribute("data-wallpaper");
    } else {
      document.documentElement.setAttribute("data-wallpaper", id);
    }
    try {
      localStorage.setItem(WALLPAPER_KEY, id);
    } catch (_) {}

    document.querySelectorAll("[data-wp-pick]").forEach(btn => {
      const isCurrent = btn.getAttribute("data-wp-pick") === id;
      btn.classList.toggle("active", isCurrent);
      btn.setAttribute("aria-checked", isCurrent ? "true" : "false");
    });

    if (notify) {
      const meta = WALLPAPERS.find(w => w.id === id);
      if (meta) showToast("已切换壁纸：" + meta.full);
    }
  }

  function applyTheme(themeId, notify = false) {
    const id = normalizeTheme(themeId);
    activeTheme = id;
    if (id === "paper") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", id);
    }
    try {
      localStorage.setItem(THEME_KEY, id);
    } catch (_) {}

    document.querySelectorAll("[data-theme-pick]").forEach(btn => {
      const isCurrent = btn.getAttribute("data-theme-pick") === id;
      btn.classList.toggle("active", isCurrent);
      btn.setAttribute("aria-checked", isCurrent ? "true" : "false");
    });

    if (notify) {
      const meta = THEMES.find(t => t.id === id);
      if (meta) showToast("已切换主题：" + meta.name);
    }
  }

  function initThemePickers() {
    const grid = document.getElementById("themeGrid");
    const dots = document.getElementById("themeDots");
    const wpGrid = document.getElementById("wpGrid");
    const wpPill = document.getElementById("wpPill");

    if (grid) {
      grid.innerHTML = THEMES.map(t => `
        <button type="button" class="theme-chip" role="radio" aria-checked="false" data-theme-pick="${t.id}">
          <span class="theme-swatch" style="background:${t.swatch}"></span>
          <span class="theme-chip-label">${t.name}</span>
        </button>
      `).join("");
    }
    if (dots) {
      dots.innerHTML = THEMES.map(t => `
        <button type="button" class="theme-dot-btn" role="radio" aria-checked="false" data-theme-pick="${t.id}" title="主题：${t.name}" aria-label="切换主题：${t.name}" style="background:${t.swatch}"></button>
      `).join("");
    }
    if (wpGrid) {
      wpGrid.innerHTML = WALLPAPERS.map(w => `
        <button type="button" class="wp-card" role="radio" aria-checked="false" data-wp-pick="${w.id}" style="background-image:url('${w.img}')" title="${w.full}">
          <span>${w.name}</span>
        </button>
      `).join("");
    }
    if (wpPill) {
      wpPill.innerHTML = WALLPAPERS.map(w => `
        <button type="button" class="wp-mini" role="radio" aria-checked="false" data-wp-pick="${w.id}" title="切换壁纸：${w.full}">${w.name}</button>
      `).join("");
    }

    document.querySelectorAll("[data-theme-pick]").forEach(btn => {
      btn.onclick = () => applyTheme(btn.getAttribute("data-theme-pick"), true);
    });
    document.querySelectorAll("[data-wp-pick]").forEach(btn => {
      btn.onclick = () => applyWallpaper(btn.getAttribute("data-wp-pick"), true);
    });

    applyWallpaper(activeWallpaper, false);
    applyTheme(activeTheme, false);
  }

  initThemePickers();

  // Controls bindings
  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.onclick = () => {
      state.view = btn.getAttribute("data-view");
      if (state.view === "deck") syncDeckOrder(false);
      render();
    };
  });

  document.getElementById("maskBtn").onclick = () => {
    state.maskMeaning = !state.maskMeaning;
    state.revealedIds.clear();
    render();
  };

  document.getElementById("searchInput").oninput = e => {
    state.search = e.target.value;
    if (state.view === "deck") syncDeckOrder(false);
    renderStageHeader();
    renderMain();
  };

  document.getElementById("mobileMenuBtn").onclick = openDrawer;
  document.getElementById("drawerBackdrop").onclick = closeDrawer;

  // Keyboard shortcuts for 3D deck
  document.addEventListener("keydown", e => {
    if (state.view !== "deck") return;
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.code === "Space") {
      e.preventDefault();
      state.fcFlipped = !state.fcFlipped;
      const scene = document.getElementById("flipScene");
      if (scene) scene.classList.toggle("flipped", state.fcFlipped);
    } else if (e.key === "ArrowLeft") {
      const b = document.getElementById("fcPrev");
      if (b) b.click();
    } else if (e.key === "ArrowRight") {
      const b = document.getElementById("fcNext");
      if (b) b.click();
    } else if (state.fcFlipped && ["1", "2", "3"].includes(e.key)) {
      const b = document.getElementById("rate" + e.key);
      if (b) b.click();
    }
  });

  // Sync Modal
  const syncModal = document.getElementById("syncModal");
  const syncArea = document.getElementById("syncArea");
  document.getElementById("syncBtn").onclick = () => {
    closeDrawer();
    syncArea.value = JSON.stringify(state.progress);
    syncModal.classList.add("open");
  };
  document.getElementById("closeSyncBtn").onclick = () => syncModal.classList.remove("open");
  syncModal.onclick = e => { if (e.target === syncModal) syncModal.classList.remove("open"); };
  document.getElementById("copySyncBtn").onclick = async () => {
    try {
      await navigator.clipboard.writeText(syncArea.value);
      showToast("进度码已复制");
    } catch (_) {
      syncArea.select();
      document.execCommand("copy");
      showToast("进度码已复制");
    }
  };
  document.getElementById("importSyncBtn").onclick = () => {
    try {
      const parsed = JSON.parse(syncArea.value.trim());
      if (!Array.isArray(parsed.mastered) || !Array.isArray(parsed.hard)) throw 0;
      const deleted = Array.isArray(parsed.deleted) ? [...new Set(parsed.deleted)] : [];
      state.progress = {
        mastered: [...new Set(parsed.mastered)].filter(id => !deleted.includes(id)),
        hard: [...new Set(parsed.hard)].filter(id => !deleted.includes(id)),
        deleted
      };
      if (state.collection === "deleted" && deletedWords().length === 0) {
        state.collection = "all";
      }
      saveProgress();
      syncDeckOrder(false);
      syncModal.classList.remove("open");
      showToast("学习进度已导入");
      render();
    } catch (_) {
      showToast("进度码格式不正确");
    }
  };
  document.getElementById("resetProgressBtn").onclick = () => {
    if (!confirm("确定清空所有已掌握、易忘与已移出记录吗？")) return;
    state.progress = { mastered: [], hard: [], deleted: [] };
    if (state.collection === "deleted") state.collection = "all";
    saveProgress();
    syncDeckOrder(false);
    syncModal.classList.remove("open");
    showToast("进度已重置");
    render();
  };

  syncDeckOrder(false);
  render();
})();
