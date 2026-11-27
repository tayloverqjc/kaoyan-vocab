window.DRILL_2016 = {
  meta: {
    title: "2016 英语（二）阅读 · 抓主干顺读特训",
    subtitle: "Text 2 & Text 3 全文 38 句 X 光拆骨 · 顺读不倒译 · 骨架串主旨",
    updatedAt: "2026-11-27"
  },
  methodCards: [
    {
      step: "01",
      title: "先砍三类包袱",
      desc: "双逗号/双破折号插入语、句首分词或介词背景、层层叠挂的后置修饰——先让它们退后，别把大脑内存塞满。"
    },
    {
      step: "02",
      title: "直抓核心谓语动词",
      desc: "长句发懵时，只找主句的核心动词（requires / means / gives / helps），先看清“谁对谁干了什么”或“A = B”。"
    },
    {
      step: "03",
      title: "防误伤：三类重心绝不砍",
      desc: "① 观点动词后的 that 从句/引语（said / argued that 后才是正文）；② but / however 转折后；③ 虚壳结构后（The idea is / What makes X is that）。"
    },
    {
      step: "04",
      title: "顺着切块，绝不倒译",
      desc: "按英文语序从左到右把定语、状语、from which 等接成“流水账短句”，先懂核心人话，再回头看润色。"
    }
  ],
  passages: [
    {
      id: "T2",
      code: "Text 2",
      title: "美国小草原松鸡保护计划",
      enTitle: "Lesser Prairie Chicken Conservation Plan",
      qRange: "26–30 题",
      sentenceCount: 18,
      whyHard: "机构缩写和三方利益主体密集（联邦 USFWS / 西部州与地主行业 / 环保人士），第 3 段长句里条件、定语和双宾语叠在一起，用中文倒译极易头晕。",
      macroThesis: "松鸡数量暴跌 → 联邦选择较温和的 threatened 标签（引发环保派嫌松、行业与州嫌严）→ 方案靠“缴费补栖息地 + 州主导”求合作 → 仍遭各方起诉反对。",
      camps: [
        { name: "折中官方派", members: "USFWS / 局长 Daniel Ashe", stance: "给 threatened 标签，换取灵活性，拉拢州政府和私人地主合作，让州居主导。" },
        { name: "强硬保护派", members: "环保人士 / 生物学家 Jay Lininger", stance: "想要 endangered 强监管；批评方案管得太松（doesn't go far enough），偏袒行业。" },
        { name: "被监管方", members: "行业团体 / 部分州政府 / 部分议员", stance: "对联邦插手不安，起诉方案管得太严（goes too far）。" }
      ],
      paragraphs: [
        {
          para: 1,
          role: "背景引入 · 数量暴跌",
          gist: "小草原松鸡从曾经的 200 万只锐减到如今的 2.2 万只（仅剩历史栖息地 16%）。",
          logicTag: "昔盛今衰（时间对比）"
        },
        {
          para: 2,
          role: "政策分歧 · 标签之争",
          gist: "数量暴跌促使联邦将其列为 threatened；环保人士因监管力弱而失望，但局长 Ashe 认为这更有灵活性，便于联合州政府和掌握 95% 栖息地的私人地主。",
          logicTag: "因果 → 转折分歧 → 官方辩护"
        },
        {
          para: 3,
          role: "方案细则 · 合作机制",
          gist: "方案豁免签约的无意伤害者，要求破坏者向基金缴费（毁 1 亩补 2 亩）并补偿地主；设 10 年目标，交由州联盟 WAFWA 监督——核心是让各州坐镇主导。",
          logicTag: "举例展开 → 顺延补细节 → Overall 总结"
        },
        {
          para: 4,
          role: "各方反弹 · 双赢落空",
          gist: "并非人人都买“双赢”的账：行业和州嫌管太严，环保派嫌管太松；生物学家 Lininger 痛批政府把管理权交给了把鸟推向灭绝的行业。",
          logicTag: "首句否定定调 → 阵营对照 → 引语收尾"
        }
      ],
      sentences: [
        {
          id: "T2-S1",
          para: 1,
          num: 1,
          difficulty: 2,
          examQ: "Q26 背景",
          raw: "Biologists estimate that as many as 2 million lesser prairie chickens — a kind of bird living on stretching grasslands — once lent red to the often grey landscape of the midwestern and southwestern United States.",
          segs: [
            { t: "Biologists estimate that ", k: "frame" },
            { t: "as many as 2 million lesser prairie chickens ", k: "core" },
            { t: "— a kind of bird living on stretching grasslands — ", k: "baggage" },
            { t: "once lent red to the often grey landscape", k: "core" },
            { t: " of the midwestern and southwestern United States.", k: "baggage" }
          ],
          coreZh: "曾经有多达 200 万只小草原松鸡，给美国中/西南部大地添上过红彩。",
          skeletonEn: "2 million lesser prairie chickens once lent red to the landscape",
          chunks: [
            { en: "Biologists estimate that", zh: "生物学家估计：", role: "引出壳" },
            { en: "as many as 2 million lesser prairie chickens", zh: "多达 200 万只小草原松鸡", role: "主干·主语" },
            { en: "— a kind of bird living on stretching grasslands —", zh: "（一种住在辽阔草原上的鸟）", role: "包袱·插入语" },
            { en: "once lent red to the often grey landscape", zh: "曾给常显灰暗的景色添上一抹红", role: "主干·谓宾" },
            { en: "of the midwestern and southwestern United States.", zh: "在美国中西部和西南部。", role: "包袱·地点" }
          ],
          tipTitle: "跨过双破折号插入语，直接接通主谓",
          tip: "开头 `Biologists estimate that` 是引出数据的外壳，**真主干在 `that` 后面**；中间双破折号只是科普这种鸟长啥样，一眼跳过，把主语 `2 million lesser prairie chickens` 直接连上谓语 `once lent red`。地道表达：`lend red to`（给……增添红色，形容鸟群极多）。",
          polishedZh: "生物学家估计，曾经有多达 200 万只小草原松鸡（一种栖息在辽阔草原上的鸟类）为美国中西部和西南部常显灰暗的景观增添过一抹亮红。"
        },
        {
          id: "T2-S2",
          para: 1,
          num: 2,
          difficulty: 1,
          examQ: "Q26 证据",
          raw: "But just some 22,000 birds remain today, occupying about 16% of the species’ historic range.",
          segs: [
            { t: "But ", k: "pivot" },
            { t: "just some 22,000 birds remain today", k: "core" },
            { t: ", occupying about 16% of the species’ historic range.", k: "baggage" }
          ],
          coreZh: "但如今只剩约 2.2 万只，仅占历史栖息地的 16%。",
          skeletonEn: "But just some 22,000 birds remain today",
          chunks: [
            { en: "But", zh: "但是", role: "转折枢轴" },
            { en: "just some 22,000 birds remain today,", zh: "如今只剩下约 2.2 万只鸟，", role: "主干" },
            { en: "occupying about 16% of the species’ historic range.", zh: "只占该物种历史分布范围的约 16%。", role: "伴随补充" }
          ],
          tipTitle: "顺读伴随分词 + 与首句数字形成强对比",
          tip: "逗号后的 `occupying...` 直接顺译成“只占着……”，不用往回套。200 万 → 2.2 万，这就是下一句 `The crash`（暴跌）的直接指代，也是第 26 题 A 项 `drastically decreased population` 的铁证。",
          polishedZh: "但如今仅存约 2.2 万只，只占据该物种历史栖息范围的约 16%。"
        },
        {
          id: "T2-S3",
          para: 2,
          num: 3,
          difficulty: 2,
          examQ: "Q26 定位",
          raw: "The crash was a major reason the U.S. Fish and Wildlife Service (USFWS) decided to formally list the bird as threatened.",
          segs: [
            { t: "The crash was a major reason ", k: "core" },
            { t: "the U.S. Fish and Wildlife Service (USFWS) decided to formally list the bird as threatened.", k: "core" }
          ],
          coreZh: "数量暴跌，是联邦机构（USFWS）决定将其列为“受威胁”的主要原因。",
          skeletonEn: "The crash was a major reason [why] USFWS decided to list the bird as threatened",
          chunks: [
            { en: "The crash was a major reason", zh: "这次（数量）暴跌是一个主要原因，", role: "主干" },
            { en: "(why) the U.S. Fish and Wildlife Service (USFWS)", zh: "（导致）美国鱼类及野生动物管理局（USFWS）", role: "省略 why" },
            { en: "decided to formally list the bird as threatened.", zh: "决定正式将这种鸟列为“受威胁物种”。", role: "具体结果" }
          ],
          tipTitle: "识别省略 why + 立刻还原指代 The crash",
          tip: "`a major reason` 后面省掉了 `why`，如果没认出来会觉得两个句子撞在一起。机构全称很长，脑子里直接缩成代号“**联邦机构**”即可，绝不在专有名词上耗神；`The crash` 回指第 1 段的数量暴跌。",
          polishedZh: "数量锐减是美国鱼类及野生动物管理局（USFWS）决定正式将该鸟列为受威胁物种的主要原因。"
        },
        {
          id: "T2-S4",
          para: 2,
          num: 4,
          difficulty: 1,
          examQ: null,
          raw: "“The lesser prairie chicken is in a desperate situation,” said USFWS Director Daniel Ashe.",
          segs: [
            { t: "“The lesser prairie chicken is in a desperate situation,”", k: "core" },
            { t: " said USFWS Director Daniel Ashe.", k: "frame" }
          ],
          coreZh: "局长 Ashe 说：小草原松鸡处境堪忧。",
          skeletonEn: "The lesser prairie chicken is in a desperate situation",
          chunks: [
            { en: "“The lesser prairie chicken is in a desperate situation,”", zh: "“小草原松鸡正处于绝境之中，”", role: "主干·引语" },
            { en: "said USFWS Director Daniel Ashe.", zh: "USFWS 局长 Daniel Ashe 说。", role: "说话人" }
          ],
          tipTitle: "英文新闻体：先说核心话，句尾报姓名",
          tip: "记住人物标签：**Daniel Ashe = 联邦机构 USFWS 局长（折中官方派代表）**，后文他还会反复出场，记准立场就不乱。",
          polishedZh: "“小草原松鸡正处于岌岌可危的境地，”USFWS 局长丹尼尔·阿什说道。"
        },
        {
          id: "T2-S5",
          para: 2,
          num: 5,
          difficulty: 1,
          examQ: "Q27 定位",
          raw: "Some environmentalists, however, were disappointed.",
          segs: [
            { t: "Some environmentalists", k: "core" },
            { t: ", however, ", k: "pivot" },
            { t: "were disappointed.", k: "core" }
          ],
          coreZh: "但部分环保人士很失望。",
          skeletonEn: "Some environmentalists, however, were disappointed",
          chunks: [
            { en: "Some environmentalists,", zh: "一些环保人士", role: "新主体" },
            { en: "however,", zh: "然而，", role: "转折枢轴" },
            { en: "were disappointed.", zh: "感到失望。", role: "态度核心" }
          ],
          tipTitle: "段中短转折句 = 切换新阵营",
          tip: "看到 `however` 插在主谓之间，脑中立刻竖起界碑：前面是官方定调，从这里开始切到**环保派立场**，紧接着必定解释“为什么失望”（直指 Q27）。",
          polishedZh: "然而，一些环保人士对此感到失望。"
        },
        {
          id: "T2-S6",
          para: 2,
          num: 6,
          difficulty: 2,
          examQ: "Q27 核心证据",
          raw: "They had pushed the agency to designate the bird as “endangered,” a status that gives federal officials greater regulatory power to crack down on threats.",
          segs: [
            { t: "They had pushed the agency to designate the bird as “endangered,” ", k: "core" },
            { t: "a status that ", k: "baggage" },
            { t: "gives federal officials greater regulatory power", k: "core" },
            { t: " to crack down on threats.", k: "baggage" }
          ],
          coreZh: "他们原想推动定为“濒危”——那能赋予联邦更强的监管权。",
          skeletonEn: "They pushed the agency to designate it “endangered” → gives federal officials greater regulatory power",
          chunks: [
            { en: "They had pushed the agency", zh: "他们曾一直催促该机构", role: "主干·动作" },
            { en: "to designate the bird as “endangered,”", zh: "把这种鸟定为“濒危”，", role: "主干·目标" },
            { en: "a status that gives federal officials greater regulatory power", zh: "这一级别能给联邦官员更大的监管权力", role: "核心解释（不可砍）" },
            { en: "to crack down on threats.", zh: "去严厉打击威胁因素。", role: "目的补充" }
          ],
          tipTitle: "防误伤：同位语定语解释了“为什么”，绝不能砍！",
          tip: "这句是讲义**“对比取反”**的经典考场：环保派想要 `endangered`（带来 `greater regulatory power`），官方却给了 `threatened`，取反即知 `threatened` 的监管权更弱（直接命中 Q27 C 项 `granted less federal regulatory power`）。",
          polishedZh: "他们原本敦促该机构将此鸟定为“濒危”物种，这一级别能赋予联邦官员更大的监管权力来严厉打击各种威胁。"
        },
        {
          id: "T2-S7",
          para: 2,
          num: 7,
          difficulty: 3,
          examQ: "Q27 防干扰边界",
          raw: "But Ashe and others argued that the “threatened” tag gave the federal government flexibility to try out new, potentially less confrontational conservation approaches.",
          segs: [
            { t: "But ", k: "pivot" },
            { t: "Ashe and others argued that ", k: "frame" },
            { t: "the “threatened” tag gave the federal government flexibility", k: "core" },
            { t: " to try out new, potentially less confrontational conservation approaches.", k: "baggage" }
          ],
          coreZh: "但 Ashe 等人认为，“受威胁”标签给了联邦政府灵活性（便于尝试温和新办法）。",
          skeletonEn: "But the “threatened” tag gave the federal government flexibility",
          chunks: [
            { en: "But Ashe and others argued that", zh: "但阿什等人辩称：", role: "转折+换说话人" },
            { en: "the “threatened” tag gave the federal government flexibility", zh: "“受威胁”标签给了联邦政府灵活性，", role: "主干·核心" },
            { en: "to try out new, potentially less confrontational conservation approaches.", zh: "可以试行新的、对抗性更低的保护方法。", role: "目的补充" }
          ],
          tipTitle: "先看观点归属：But 一出，说话人切回官方！",
          tip: "做 Q27 时，很多同学在这里绕晕就是因为没切分**观点归属**：S5–S6 是环保派观点，S7 经 `But Ashe...` 已经切回官方自辩。此外，长名词短语 `new, potentially less confrontational conservation approaches` 不用硬翻，抓住关键词 `less confrontational`（少对抗 = 温和合作）即可。",
          polishedZh: "但阿什等人认为，“受威胁”这一标签赋予了联邦政府灵活性，使其能够尝试新的、可能对抗性更低的保护措施。"
        },
        {
          id: "T2-S8",
          para: 2,
          num: 8,
          difficulty: 3,
          examQ: null,
          raw: "In particular, they called for forging closer collaborations with western state governments, which are often uneasy with federal action, and with the private landowners who control an estimated 95% of the prairie chicken’s habitat.",
          segs: [
            { t: "In particular, ", k: "baggage" },
            { t: "they called for forging closer collaborations with western state governments", k: "core" },
            { t: ", which are often uneasy with federal action, ", k: "baggage" },
            { t: "and with the private landowners", k: "core" },
            { t: " who control an estimated 95% of the prairie chicken’s habitat.", k: "baggage" }
          ],
          coreZh: "他们尤其呼吁与“西部州政府”和“私人地主”加强合作。",
          skeletonEn: "they called for collaborations with western state governments and with private landowners",
          chunks: [
            { en: "In particular,", zh: "特别是，", role: "过渡包袱" },
            { en: "they called for forging closer collaborations", zh: "他们呼吁建立更紧密的合作，", role: "主干·动作" },
            { en: "with western state governments,", zh: "对象一是西部州政府", role: "主干·对象A" },
            { en: "which are often uneasy with federal action,", zh: "（它们常对联邦干预感到不安），", role: "包袱·注脚A" },
            { en: "and with the private landowners", zh: "对象二是私人地主", role: "主干·对象B" },
            { en: "who control an estimated 95% of the prairie chicken’s habitat.", zh: "（他们掌握了约 95% 的松鸡栖息地）。", role: "包袱·注脚B" }
          ],
          tipTitle: "长定语夹心并列：先连 with A and with B，定语顺着当括号注脚！",
          tip: "37 词看着吓人，把两个定语从句放进括号后，骨架干净得惊人：`collaborations with [州政府] and with [私人地主]`。顺读时，把 `which...` 和 `who...` 当成跟在屁股后面的“原因注脚”，速度翻倍。",
          polishedZh: "他们特别呼吁与西部各州政府（它们往往对联邦举措心存芥蒂）以及私人地主（他们控制着大约 95% 的松鸡栖息地）建立更紧密的合作。"
        },
        {
          id: "T2-S9",
          para: 3,
          num: 9,
          difficulty: 3,
          examQ: "Q28 定位①",
          raw: "Under the plan, for example, the agency said it would not prosecute landowners or businesses that unintentionally kill, harm, or disturb the bird, as long as they had signed a range-wide management plan to restore prairie chicken habitat.",
          segs: [
            { t: "Under the plan, for example, ", k: "baggage" },
            { t: "the agency said ", k: "frame" },
            { t: "it would not prosecute landowners or businesses", k: "core" },
            { t: " that unintentionally kill, harm, or disturb the bird, ", k: "baggage" },
            { t: "as long as ", k: "pivot" },
            { t: "they had signed a range-wide management plan", k: "core" },
            { t: " to restore prairie chicken habitat.", k: "baggage" }
          ],
          coreZh: "该机构不会起诉无意伤害者——只要他们签了栖息地管理计划。",
          skeletonEn: "it would not prosecute landowners or businesses ... as long as they had signed a management plan",
          chunks: [
            { en: "Under the plan, for example, the agency said", zh: "比如按该计划，该机构表示：", role: "背景+引出壳" },
            { en: "it would not prosecute landowners or businesses", zh: "它不会起诉地主或企业", role: "主干·结果" },
            { en: "that unintentionally kill, harm, or disturb the bird,", zh: "（那些无意中杀死、伤害或惊扰该鸟的人），", role: "包袱·限定对象" },
            { en: "as long as", zh: "只要", role: "条件枢轴" },
            { en: "they had signed a range-wide management plan", zh: "他们签署了一项全范围管理计划", role: "主干·条件" },
            { en: "to restore prairie chicken habitat.", zh: "用来恢复松鸡栖息地。", role: "包袱·目的" }
          ],
          tipTitle: "用条件词 as long as 一刀两断 + 触发防并列！",
          tip: "遇到 39 词长句，先找连词 `as long as` 切两半：**前半不予起诉 / 后半签约条件**。重点来了：做 Q28 时发现选项里没有“签约”，这就是讲义最经典的**防并列信号**——必须顺着 `management plan` 往下读下一句，看“计划里到底要求他们干嘛”！",
          polishedZh: "例如，根据该计划，该机构表示只要地主或企业签署了旨在恢复松鸡栖息地的全范围管理计划，即便他们无意中杀死、伤害或干扰了这种鸟，机构也不会对其提起公诉。"
        },
        {
          id: "T2-S10",
          para: 3,
          num: 10,
          difficulty: 3,
          examQ: "Q28 定位②",
          raw: "Negotiated by USFWS and the states, the plan requires individuals and businesses that damage habitat as part of their operations to pay into a fund to replace every acre destroyed with 2 new acres of suitable habitat.",
          segs: [
            { t: "Negotiated by USFWS and the states, ", k: "baggage" },
            { t: "the plan requires individuals and businesses ", k: "core" },
            { t: "that damage habitat as part of their operations ", k: "baggage" },
            { t: "to pay into a fund", k: "core" },
            { t: " to replace every acre destroyed with 2 new acres of suitable habitat.", k: "baggage" }
          ],
          coreZh: "该计划要求破坏栖息地的个人和企业往基金里交钱（毁 1 亩补 2 亩）。",
          skeletonEn: "the plan requires individuals and businesses to pay into a fund",
          chunks: [
            { en: "Negotiated by USFWS and the states,", zh: "（由联邦与各州谈妥的）", role: "包袱·开头分词" },
            { en: "the plan requires individuals and businesses", zh: "这项计划要求个人和企业", role: "主干·主谓宾" },
            { en: "that damage habitat as part of their operations", zh: "（在经营中破坏了栖息地的那些）", role: "包袱·定语插队" },
            { en: "to pay into a fund", zh: "向一项基金缴款", role: "主干·补足语" },
            { en: "to replace every acre destroyed with 2 new acres of suitable habitat.", zh: "用来每毁 1 英亩就补建 2 英亩新栖息地。", role: "包袱·用途" }
          ],
          tipTitle: "本篇头号“倒译杀手”：抓 require sb. to do 跨过 9 词定语！",
          tip: "千万别倒译！开头 `Negotiated by...` 扫一眼就扔；核心骨架只有 `the plan requires [人/企] to pay into a fund`——中间插了 9 个词的 `that` 从句硬把 `requires` 和 `to pay` 拆散。顺读末尾 `every acre → 2 new acres`（1 赔 2），顺手就把 Q28 B 项的 `equally big` 和 `volunteer` 一锅端了。",
          polishedZh: "该计划由 USFWS 与各州协商制定，要求在经营活动中破坏栖息地的个人和企业向一项基金缴款，以实现每破坏一英亩便用两英亩适宜栖息地替代的目标。"
        },
        {
          id: "T2-S11",
          para: 3,
          num: 11,
          difficulty: 1,
          examQ: "Q28 定位③",
          raw: "The fund will also be used to compensate landowners who set aside habitat.",
          segs: [
            { t: "The fund will ", k: "core" },
            { t: "also ", k: "pivot" },
            { t: "be used to compensate landowners", k: "core" },
            { t: " who set aside habitat.", k: "baggage" }
          ],
          coreZh: "这笔基金还会用来补偿留出栖息地的地主。",
          skeletonEn: "The fund will also be used to compensate landowners",
          chunks: [
            { en: "The fund will also be used", zh: "这笔基金还将用于", role: "主干（回指上句基金）" },
            { en: "to compensate landowners", zh: "补偿地主", role: "主干·目的" },
            { en: "who set aside habitat.", zh: "（那些专门留出栖息地的地主）。", role: "包袱·定语" }
          ],
          tipTitle: "紧跟指代 The fund，拼齐 Q28 证据链",
          tip: "短语 `set aside` = 留出、拨出。S9（签约免诉）+ S10（向基金交钱替代）+ S11（基金用于补偿 `compensate`），三句串起来正好概括成 Q28 A 项 `agree to pay a sum for compensation`。",
          polishedZh: "该基金还将用于补偿专门留出栖息地的地主。"
        },
        {
          id: "T2-S12",
          para: 3,
          num: 12,
          difficulty: 2,
          examQ: null,
          raw: "USFWS also set an interim goal of restoring prairie chicken populations to an annual average of 67,000 birds over the next 10 years.",
          segs: [
            { t: "USFWS ", k: "core" },
            { t: "also ", k: "pivot" },
            { t: "set an interim goal of restoring prairie chicken populations", k: "core" },
            { t: " to an annual average of 67,000 birds over the next 10 years.", k: "baggage" }
          ],
          coreZh: "USFWS 还定了个阶段目标：把松鸡数量恢复起来（10 年内年均 6.7 万只）。",
          skeletonEn: "USFWS also set an interim goal of restoring prairie chicken populations",
          chunks: [
            { en: "USFWS also set an interim goal", zh: "USFWS 还设定了一个阶段性目标：", role: "主干" },
            { en: "of restoring prairie chicken populations", zh: "恢复小草原松鸡的数量", role: "主干·目标内容" },
            { en: "to an annual average of 67,000 birds", zh: "到年均 6.7 万只", role: "包袱·数字" },
            { en: "over the next 10 years.", zh: "在未来 10 年内。", role: "包袱·时间" }
          ],
          tipTitle: "句尾三连介词短语（of / to / over）：逐块顺读不回头",
          tip: "遇到 `of ... to ... over ...` 这种连环介词短语，绝不从后往前倒翻“在未来十年内将数量恢复至年均……”，顺着读成“目标：恢复数量 / 到年均 6.7 万 / 用 10 年”瞬间明白。",
          polishedZh: "USFWS 还设定了一项阶段性目标：在未来 10 年内将小草原松鸡的种群数量恢复至年均 6.7 万只。"
        },
        {
          id: "T2-S13",
          para: 3,
          num: 13,
          difficulty: 3,
          examQ: "Q28 C 项排错",
          raw: "And it gives the Western Association of Fish and Wildlife Agencies (WAFWA), a coalition of state agencies, the job of monitoring progress.",
          segs: [
            { t: "And ", k: "pivot" },
            { t: "it gives the Western Association of Fish and Wildlife Agencies (WAFWA)", k: "core" },
            { t: ", a coalition of state agencies, ", k: "baggage" },
            { t: "the job of monitoring progress.", k: "core" }
          ],
          coreZh: "它把“监督进展的工作”交给了州机构联盟 WAFWA。",
          skeletonEn: "it gives WAFWA the job of monitoring progress",
          chunks: [
            { en: "And it gives", zh: "而且它（USFWS）赋予", role: "主干·双宾动词" },
            { en: "the Western Association of Fish and Wildlife Agencies (WAFWA),", zh: "西部鱼类及野生动物机构协会（WAFWA）", role: "主干·对象A" },
            { en: "a coalition of state agencies,", zh: "（一个由各州机构组成的联盟），", role: "包袱·同位语" },
            { en: "the job of monitoring progress.", zh: "监督进展的工作。", role: "主干·内容B" }
          ],
          tipTitle: "双宾语 give A B 被巨长机构名+同位语拉断！",
          tip: "读到 `gives` 时大脑要立刻预留两个空位 `give [谁] [什么]`：把 10 词机构名直接压缩成字母代号 `WAFWA`，跳过双逗号同位语，稳稳接住句尾的 `[什么] = the job of monitoring progress`！也顺手排掉了 Q28 C 项（监督是 WAFWA 的活，不是伤害者的免诉条件）。",
          polishedZh: "同时，它还将监督进展的任务交给了由各州机构组成的联盟——西部鱼类及野生动物机构协会（WAFWA）。"
        },
        {
          id: "T2-S14",
          para: 3,
          num: 14,
          difficulty: 2,
          examQ: "Q29 定位",
          raw: "Overall, the idea is to let “states remain in the driver’s seat for managing the species,” Ashe said.",
          segs: [
            { t: "Overall, ", k: "pivot" },
            { t: "the idea is to ", k: "frame" },
            { t: "let “states remain in the driver’s seat for managing the species,”", k: "core" },
            { t: " Ashe said.", k: "frame" }
          ],
          coreZh: "总之，核心思路是让“各州继续主导物种管理”。",
          skeletonEn: "Overall, let “states remain in the driver’s seat for managing the species”",
          chunks: [
            { en: "Overall, the idea is to", zh: "总的来说，核心想法是", role: "总结词+虚壳" },
            { en: "let “states remain in the driver’s seat", zh: "让“各州继续坐在驾驶座上（占主导）", role: "主干·核心" },
            { en: "for managing the species,”", zh: "负责管理该物种”，", role: "主干·范围" },
            { en: "Ashe said.", zh: "阿什说。", role: "说话人" }
          ],
          tipTitle: "总结信号 Overall + 虚壳 the idea is to",
          tip: "看到段尾 `Overall` 直接提神——它在帮你总结整个第 3 段！`in the driver's seat`（坐在驾驶座上 = 掌舵、主导），精准同义替换 Q29 题干 `leading role`，一秒锁定 D `the states`。",
          polishedZh: "阿什表示，总体而言，这一构想旨在让“各州在管理该物种方面继续占据主导地位”。"
        },
        {
          id: "T2-S15",
          para: 4,
          num: 15,
          difficulty: 1,
          examQ: "Q30 宏观定调",
          raw: "Not everyone buys the win-win rhetoric.",
          segs: [
            { t: "Not ", k: "pivot" },
            { t: "everyone buys the win-win rhetoric.", k: "core" }
          ],
          coreZh: "并非所有人都买这套“双赢说辞”的账。",
          skeletonEn: "Not everyone buys the win-win rhetoric",
          chunks: [
            { en: "Not everyone", zh: "并非所有人（部分否定）", role: "否定枢轴" },
            { en: "buys", zh: "都买账 / 都相信（熟词生义）", role: "主干·谓语" },
            { en: "the win-win rhetoric.", zh: "这套“双赢”的漂亮说辞。", role: "主干·宾语" }
          ],
          tipTitle: "6 词末段主旨句：两个高频考点合体",
          tip: "① `Not everyone` 是部分否定（不是“所有人都不买账”，而是“并非人人都买账”）；② `buy` 在考研阅读里高频考熟词生义“**相信、买账**”。一句定调第 4 段：接下来全是反对声音！",
          polishedZh: "并非所有人都买这套“双赢”说辞的账。"
        },
        {
          id: "T2-S16",
          para: 4,
          num: 16,
          difficulty: 2,
          examQ: null,
          raw: "Some Congress members are trying to block the plan, and at least a dozen industry groups, four states, and three environmental groups are challenging it in federal court.",
          segs: [
            { t: "Some Congress members are trying to block the plan", k: "core" },
            { t: ", and ", k: "pivot" },
            { t: "at least a dozen ", k: "baggage" },
            { t: "industry groups, four states, and three environmental groups are challenging it", k: "core" },
            { t: " in federal court.", k: "baggage" }
          ],
          coreZh: "部分议员试图阻挠该计划，多个行业团体、州和环保组织已告上法庭。",
          skeletonEn: "Congress members are trying to block the plan, and industry, states, and environmental groups are challenging it",
          chunks: [
            { en: "Some Congress members are trying to block the plan,", zh: "一些国会议员正试图阻挠该计划，", role: "主干①" },
            { en: "and at least a dozen industry groups, four states, and three environmental groups", zh: "而且至少十几个行业团体、四个州和三个环保组织", role: "并列主语②" },
            { en: "are challenging it in federal court.", zh: "正在联邦法院对该计划发起诉讼质疑。", role: "主干②" }
          ],
          tipTitle: "遇到一长串列举数字，合并打包成“各方齐反对”",
          tip: "扫读时不要逐个默念数字，把 `a dozen..., four..., three...` 打包理解成“**三路人马都把计划告上了法庭**”，立刻接着看下一句它们各自不满啥。",
          polishedZh: "一些国会议员正试图阻挠该计划，同时至少十几个行业团体、四个州以及三个环保组织正在联邦法院对其提起诉讼。"
        },
        {
          id: "T2-S17",
          para: 4,
          num: 17,
          difficulty: 2,
          examQ: "Q30 阵营标尺",
          raw: "Not surprisingly, industry groups and states generally argue it goes too far; environmentalists say it doesn’t go far enough.",
          segs: [
            { t: "Not surprisingly, ", k: "baggage" },
            { t: "industry groups and states ", k: "core" },
            { t: "generally argue ", k: "frame" },
            { t: "it goes too far", k: "core" },
            { t: "; ", k: "pivot" },
            { t: "environmentalists ", k: "core" },
            { t: "say ", k: "frame" },
            { t: "it doesn’t go far enough.", k: "core" }
          ],
          coreZh: "行业和州嫌计划管太严；环保人士嫌管太松。",
          skeletonEn: "industry & states: goes too far; environmentalists: doesn't go far enough",
          chunks: [
            { en: "Not surprisingly,", zh: "毫不意外，", role: "态度副词" },
            { en: "industry groups and states generally argue it goes too far;", zh: "行业团体和各州普遍认为它管得太过头了；", role: "阵营①（嫌严）" },
            { en: "environmentalists say it doesn’t go far enough.", zh: "环保人士则说它做得还远远不够。", role: "阵营②（嫌松）" }
          ],
          tipTitle: "分号 = 天然阵营分水岭！记住这把站队标尺",
          tip: "读到分号立刻心里划出左右两栏：**左边嫌严（行业+州）/ 右边嫌松（环保派）**。紧接着下一句 Jay Lininger 一开口，只要看他嫌严还是嫌松，立刻秒选 Q30！",
          polishedZh: "毫不意外，行业团体和各州普遍认为该计划走得太远（管得太严），而环保人士则认为它力度远远不够。"
        },
        {
          id: "T2-S18",
          para: 4,
          num: 18,
          difficulty: 2,
          examQ: "Q30 定位",
          raw: "“The federal government is giving responsibility for managing the bird to the same industries that are pushing it to extinction,” says biologist Jay Lininger.",
          segs: [
            { t: "“The federal government is giving responsibility for managing the bird to the same industries ", k: "core" },
            { t: "that are pushing it to extinction,”", k: "core" },
            { t: " says biologist Jay Lininger.", k: "frame" }
          ],
          coreZh: "生物学家痛批：联邦政府竟把管鸟的责任交给正把鸟推向灭绝的同一批行业。",
          skeletonEn: "federal government is giving responsibility to the same industries pushing it to extinction",
          chunks: [
            { en: "“The federal government is giving responsibility", zh: "“联邦政府正在把责任", role: "主干·动作" },
            { en: "for managing the bird", zh: "（管理这种鸟的责任）", role: "范围限定" },
            { en: "to the same industries", zh: "交给同一批行业", role: "主干·对象" },
            { en: "that are pushing it to extinction,”", zh: "——正是这些行业在把它推向灭绝，”", role: "态度灵魂（绝不能砍）" },
            { en: "says biologist Jay Lininger.", zh: "生物学家杰伊·莱宁格说。", role: "说话人" }
          ],
          tipTitle: "防误伤：这个定语从句藏着态度灵魂，绝不能砍！",
          tip: "如果把 `that are pushing it to extinction` 当普通定语砍掉，就读不出讽刺和愤怒了！这句强烈控诉政府“偏袒行业、保护不力”，立场与 S17 里的环保团体（嫌管太松）完全一致，稳锁 Q30 C。",
          polishedZh: "“联邦政府正在把管理这种鸟的责任，交给正把它推向灭绝的同一批行业，”生物学家杰伊·莱宁格说道。"
        }
      ]
    },
    {
      id: "T3",
      code: "Text 3",
      title: "为什么总没时间读书 & 如何真正找回阅读时间",
      enTitle: "How to Find Time to Read",
      qRange: "31–35 题",
      sentenceCount: 20,
      whyHard: "抽象概念和比喻密集（flywheel / instrumentally / empty bottles / soul time / default state），而且句子里大量使用“动名词主语 + 虚壳句型 + from which 长定语”，硬译成中文非常拗口。",
      macroThesis: "人人抱怨没时间读书 → 常规时间管理/提效法不管用（深度阅读要的是特殊时间）→ “追求效率”本身就是病根（工具化思维毁掉沉浸感）→ 破局法：固定阅读仪式 + 减少干扰 + 把阅读变成默认状态。",
      camps: [
        { name: "效率/工具思维（被批）", members: "碎片挤 30 分钟 / 列待办清单 / 填满空瓶子", stance: "把每分钟都按“是否推进目标”计价，只能换来目标导向阅读，彻底扼杀沉浸感。" },
        { name: "沉浸/默认思维（推崇）", members: "固定阅读时间（仪式感）/ 纸质书 / 阅读成为默认状态", stance: "跳出时间洪流进入“心灵时间”，甘愿低效无目的，把读书当主业、反过来给杂事挤时间。" }
      ],
      paragraphs: [
        {
          para: 1,
          role: "引出痛点 · 没时间读",
          gist: "人人都忙是老生常谈，但最令人哀叹的一句抱怨是：从来没有时间读书。",
          logicTag: "让步铺垫 → But 引出核心痛点"
        },
        {
          para: 2,
          role: "否定常规 · 提效失灵",
          gist: "网上常见的“挤时间”技巧不管用（思绪停不下来、太累、现代大脑爱被打断）；深度阅读要的不只是时间，而是靠单纯提效换不来的“特殊时间”。",
          logicTag: "提出问题 → 举例否定 → 引语佐证 → 段尾总结"
        },
        {
          para: 3,
          role: "深挖病根 · 效率反噬",
          gist: "“变得更高效”本身就是病根：把时间当待最大化的工具（像在传送带上拼命塞满空瓶子），恰恰与甘愿“低效无目的”的沉浸式阅读水火不容。",
          logicTag: "In fact 升级论点 → by contrast 对比 → 比喻印证"
        },
        {
          para: 4,
          role: "给出破局 · 仪式与默认",
          gist: "真正管用的是：安排固定阅读时间（借仪式感进入心灵时间）、减少干扰、以及高频随身翻读——让阅读成为“默认状态”，反过来给其他事挤时间。",
          logicTag: "设问转折 → 方案①（固定）→ 方案②（减干扰）→ 方案③（随身翻盘）"
        }
      ],
      sentences: [
        {
          id: "T3-S1",
          para: 1,
          num: 1,
          difficulty: 1,
          examQ: null,
          raw: "That everyone’s too busy these days is a cliché.",
          segs: [
            { t: "That everyone’s too busy these days ", k: "core" },
            { t: "is a cliché.", k: "core" }
          ],
          coreZh: "“如今人人都太忙”已是老生常谈。",
          skeletonEn: "[That everyone’s too busy] is a cliché",
          chunks: [
            { en: "That everyone’s too busy these days", zh: "如今人人都太忙这件事", role: "主语从句" },
            { en: "is a cliché.", zh: "是句陈词滥调。", role: "系表结构" }
          ],
          tipTitle: "句首 That = 把整句话打包当主语",
          tip: "看到 `That + 完整句子 + is ...`，不要把 `That` 译成“那个”，直接顺译成“**……这件事，是……**”。",
          polishedZh: "如今人人都太忙，这已是老生常谈。"
        },
        {
          id: "T3-S2",
          para: 1,
          num: 2,
          difficulty: 1,
          examQ: "Q35 话题定调",
          raw: "But one specific complaint is made especially mournfully: There’s never any time to read.",
          segs: [
            { t: "But ", k: "pivot" },
            { t: "one specific complaint is made especially mournfully: ", k: "frame" },
            { t: "There’s never any time to read.", k: "core" }
          ],
          coreZh: "但最令人哀怨的一句抱怨是：从来没时间读书。",
          skeletonEn: "But one specific complaint: There’s never any time to read",
          chunks: [
            { en: "But", zh: "但是", role: "转折引主题" },
            { en: "one specific complaint is made especially mournfully:", zh: "有一个具体的抱怨听起来格外哀怨：", role: "引出壳" },
            { en: "There’s never any time to read.", zh: "从来就没有时间读书。", role: "核心主题" }
          ],
          tipTitle: "冒号之后是全文总话题",
          tip: "首段就两句，经 `But` + 冒号直接亮出全文核心痛点：**没时间读书**（呼应 Q35 标题里的 `Find Time to Read`）。",
          polishedZh: "但有一句具体的抱怨却显得格外哀怨：从来没有时间读书。"
        },
        {
          id: "T3-S3",
          para: 2,
          num: 3,
          difficulty: 2,
          examQ: "Q31 话题定位",
          raw: "What makes the problem thornier is that the usual time-management techniques don’t seem sufficient.",
          segs: [
            { t: "What makes the problem thornier is that ", k: "frame" },
            { t: "the usual time-management techniques don’t seem sufficient.", k: "core" }
          ],
          coreZh: "更棘手的是：常见的时间管理技巧并不够用。",
          skeletonEn: "[What makes it thornier] is that the usual time-management techniques don’t seem sufficient",
          chunks: [
            { en: "What makes the problem thornier is that", zh: "让问题更棘手的是：", role: "虚壳结构" },
            { en: "the usual time-management techniques", zh: "常见的时间管理技巧", role: "真主干·主语" },
            { en: "don’t seem sufficient.", zh: "似乎并不足够。", role: "真主干·表语" }
          ],
          tipTitle: "防误伤：What makes X ... is that Y 的实话全在 that 后",
          tip: "`What ... is that ...` 是考研最爱的强调虚壳，前半句只表达情绪“更棘手的是”，真正的核心判断在 `that` 后（常见时间管理技巧不够用）。`thornier` = thorn（刺）+ ier = 更棘手。",
          polishedZh: "让这一问题更加棘手的是，常见的时间管理技巧似乎并不奏效。"
        },
        {
          id: "T3-S4",
          para: 2,
          num: 4,
          difficulty: 1,
          examQ: null,
          raw: "The web’s full of articles offering tips on making time to read: “Give up TV” or “Carry a book with you at all times.”",
          segs: [
            { t: "The web’s full of articles ", k: "core" },
            { t: "offering tips on making time to read:", k: "core" },
            { t: " “Give up TV” or “Carry a book with you at all times.”", k: "baggage" }
          ],
          coreZh: "网上到处都是教人挤时间读书的贴士（如戒电视、随身带书）。",
          skeletonEn: "The web’s full of articles offering tips on making time to read",
          chunks: [
            { en: "The web’s full of articles", zh: "网上充斥着各种文章，", role: "主干" },
            { en: "offering tips on making time to read:", zh: "提供挤时间读书的小贴士：", role: "顺读分词" },
            { en: "“Give up TV” or “Carry a book with you at all times.”", zh: "“戒掉电视”或“随时随身带本书”。", role: "具体举例" }
          ],
          tipTitle: "顺译 -ing 分词 + 留意第 4 段伏笔",
          tip: "`articles offering tips` 顺着读成“文章，提供贴士”。注意“随身带书”在这里先被当成普通贴士否定，到了第 4 段会被有条件地翻盘（Q34）。",
          polishedZh: "网上充斥着教你挤出时间读书的文章：“戒掉电视”或“随时随身带一本书”。"
        },
        {
          id: "T3-S5",
          para: 2,
          num: 5,
          difficulty: 2,
          examQ: "Q31 背景",
          raw: "But in my experience, using such methods to free up the odd 30 minutes doesn’t work.",
          segs: [
            { t: "But ", k: "pivot" },
            { t: "in my experience, ", k: "baggage" },
            { t: "using such methods to free up the odd 30 minutes doesn’t work.", k: "core" }
          ],
          coreZh: "但据我经验，用这些办法腾出零星 30 分钟根本不管用。",
          skeletonEn: "But using such methods to free up the odd 30 minutes doesn’t work",
          chunks: [
            { en: "But in my experience,", zh: "但按我的经验，", role: "转折+限定" },
            { en: "using such methods to free up the odd 30 minutes", zh: "用这类办法腾出零散的 30 分钟", role: "主干·动名词主语" },
            { en: "doesn’t work.", zh: "根本不管用。", role: "主干·谓语" }
          ],
          tipTitle: "动名词短语做主语 + 熟词生义 the odd",
          tip: "长动名词短语一直延续到核心谓语 `doesn't work` 才收尾。熟词生义：`the odd 30 minutes` 不是“奇怪的 30 分钟”，而是“**零星、零碎的 30 分钟**”。",
          polishedZh: "但根据我的经验，用这些办法腾出零星的 30 分钟根本行不通。"
        },
        {
          id: "T3-S6",
          para: 2,
          num: 6,
          difficulty: 2,
          examQ: null,
          raw: "Sit down to read and the flywheel of work-related thoughts keeps spinning — or else you’re so exhausted that a challenging book’s the last thing you need.",
          segs: [
            { t: "Sit down to read ", k: "baggage" },
            { t: "and ", k: "pivot" },
            { t: "the flywheel of work-related thoughts keeps spinning ", k: "core" },
            { t: "— or else ", k: "pivot" },
            { t: "you’re so exhausted that a challenging book’s the last thing you need.", k: "core" }
          ],
          coreZh: "一坐下来读书，工作思绪就转个不停——要么就累瘫到最不想碰硬书。",
          skeletonEn: "work-related thoughts keep spinning — or else you’re so exhausted a challenging book’s the last thing you need",
          chunks: [
            { en: "Sit down to read and", zh: "刚坐下来想读书，结果", role: "祈使表条件" },
            { en: "the flywheel of work-related thoughts keeps spinning", zh: "工作思绪的飞轮就转个不停——", role: "主干①" },
            { en: "— or else", zh: "要不然就是", role: "选择枢轴" },
            { en: "you’re so exhausted that", zh: "你已经精疲力竭到", role: "主干②" },
            { en: "a challenging book’s the last thing you need.", zh: "一本有难度的书成了你最不需要的东西。", role: "地道习语" }
          ],
          tipTitle: "记住两个超地道高频句式，不用硬查生词",
          tip: "① `祈使句 + and + 陈述句` = 一……就……；② `X is the last thing you need` = X 是你**最不需要**的东西。即使不认识 `flywheel`（飞轮），看 `work-related thoughts keeps spinning` 也秒懂是“脑子里工作念头停不下来”。",
          polishedZh: "一坐下来准备读书，脑子里与工作有关的思绪便像飞轮一样转个不停——否则你就是精疲力竭，最不想碰的就是有深度的书。"
        },
        {
          id: "T3-S7",
          para: 2,
          num: 7,
          difficulty: 3,
          examQ: "Q31 A 项干扰源",
          raw: "The modern mind, Tim Parks, a novelist and critic, writes, “is overwhelmingly inclined toward communication... It is not simply that one is interrupted; it is that one is actually inclined to interruption.”",
          segs: [
            { t: "The modern mind", k: "core" },
            { t: ", Tim Parks, a novelist and critic, writes, ", k: "baggage" },
            { t: "“is overwhelmingly inclined toward communication... ", k: "core" },
            { t: "It is not simply that ", k: "pivot" },
            { t: "one is interrupted", k: "baggage" },
            { t: "; it is that ", k: "pivot" },
            { t: "one is actually inclined to interruption.”", k: "core" }
          ],
          coreZh: "现代人的大脑极度倾向沟通——不只是被动打断，而是自己就渴望被打断。",
          skeletonEn: "The modern mind is overwhelmingly inclined toward communication ... one is actually inclined to interruption",
          chunks: [
            { en: "The modern mind,", zh: "现代人的大脑", role: "主干·主语" },
            { en: "Tim Parks, a novelist and critic, writes,", zh: "（小说家兼评论家蒂姆·帕克斯写道）", role: "包袱·人名插队" },
            { en: "“is overwhelmingly inclined toward communication...", zh: "“极其倾向于与人沟通……", role: "主干·谓表" },
            { en: "It is not simply that one is interrupted;", zh: "问题不只是人会被外界打断；", role: "递进前半" },
            { en: "it is that one is actually inclined to interruption.”", zh: "而在于人自己其实就倾向于被打断。”", role: "递进真重心" }
          ],
          tipTitle: "主谓之间硬塞人名头衔，先跨过去接通 is！",
          tip: "主语 `The modern mind` 和谓语 `is` 中间被 `Tim Parks, a novelist and critic, writes` 硬劈成两截——一眼跳过去！后半句抓 `not simply A; it is that B`（重心在后半）。同时注意：这里只说现代大脑爱分心，**没说**时间管理法“不能安抚现代心灵”，所以 Q31 A 项是无中生有。",
          polishedZh: "小说家兼评论家蒂姆·帕克斯写道，现代人的思维“极其倾向于交流……问题不只是人会被打断，而在于人本身其实就渴望被打断。”"
        },
        {
          id: "T3-S8",
          para: 2,
          num: 8,
          difficulty: 2,
          examQ: "Q31 核心定位",
          raw: "Deep reading requires not just time, but a special kind of time which can’t be obtained merely by becoming more efficient.",
          segs: [
            { t: "Deep reading requires ", k: "core" },
            { t: "not just ", k: "pivot" },
            { t: "time, ", k: "baggage" },
            { t: "but ", k: "pivot" },
            { t: "a special kind of time which can’t be obtained merely by becoming more efficient.", k: "core" }
          ],
          coreZh: "深度阅读需要一种“仅靠提高效率拿不到”的特殊时间。",
          skeletonEn: "Deep reading requires a special kind of time which can’t be obtained merely by becoming more efficient",
          chunks: [
            { en: "Deep reading requires", zh: "深度阅读需要的", role: "主干" },
            { en: "not just time, but a special kind of time", zh: "不只是时间，而是一种特殊的时间，", role: "重心在 but 后" },
            { en: "which can’t be obtained merely by becoming more efficient.", zh: "这种时间单靠提高效率是拿不到的。", role: "核心定语（不可砍）" }
          ],
          tipTitle: "段尾总结句 + not just A, but B 重心在 B",
          tip: "这一句收束了整个第 2 段为什么“常规时间管理不管用”：深度阅读要的东西（特殊时间）靠提效保证不了——直接对应 Q31 D 项 `what deep reading requires cannot be guaranteed`！",
          polishedZh: "深度阅读需要的不只是时间，而是一种仅靠提高效率无法获得的特殊时间。"
        },
        {
          id: "T3-S9",
          para: 3,
          num: 9,
          difficulty: 1,
          examQ: null,
          raw: "In fact, “becoming more efficient” is part of the problem.",
          segs: [
            { t: "In fact, ", k: "pivot" },
            { t: "“becoming more efficient” is part of the problem.", k: "core" }
          ],
          coreZh: "事实上，“变得更高效”本身就是问题的一部分。",
          skeletonEn: "In fact, “becoming more efficient” is part of the problem",
          chunks: [
            { en: "In fact,", zh: "事实上，", role: "递进反转" },
            { en: "“becoming more efficient”", zh: "“变得更高效”这件事", role: "主干·承接上段" },
            { en: "is part of the problem.", zh: "正是问题的一部分。", role: "主干·段首论点" }
          ],
          tipTitle: "9 词段首主旨句：把上段末句直接反手一击",
          tip: "上段刚说“提效没用”，这一句经 `In fact` 立刻升级成“**提效本身就是病根**”。读懂这 9 个词，整个第 3 段的所有抽象句子都有了锚点！",
          polishedZh: "事实上，“变得更高效”本身就是问题所在。"
        },
        {
          id: "T3-S10",
          para: 3,
          num: 10,
          difficulty: 3,
          examQ: null,
          raw: "Thinking of time as a resource to be maximised means you approach it instrumentally, judging any given moment as well spent only in so far as it advances progress toward some goal.",
          segs: [
            { t: "Thinking of time as a resource to be maximised ", k: "core" },
            { t: "means ", k: "pivot" },
            { t: "you approach it instrumentally", k: "core" },
            { t: ", judging any given moment as well spent ", k: "baggage" },
            { t: "only in so far as ", k: "pivot" },
            { t: "it advances progress toward some goal.", k: "baggage" }
          ],
          coreZh: "把时间当最大化资源，意味着你会工具化地对待它（只看推不推进目标）。",
          skeletonEn: "Thinking of time as a resource to be maximised means you approach it instrumentally",
          chunks: [
            { en: "Thinking of time as a resource to be maximised", zh: "把时间看作一种要最大化的资源，", role: "主干·长主语" },
            { en: "means", zh: "意味着（等号劈开！）", role: "核心动词" },
            { en: "you approach it instrumentally,", zh: "你会用工具化的态度对待它，", role: "主干·核心意思" },
            { en: "judging any given moment as well spent", zh: "衡量任何一刻有没有花得值，", role: "顺读解释" },
            { en: "only in so far as it advances progress toward some goal.", zh: "只看它有没有推进某个目标的进展。", role: "条件限定" }
          ],
          tipTitle: "抽象长句破局一刀：先找全句核心动词 means！",
          tip: "很多人单词全认识却在这句发晕，是因为没找到核心谓语 `means`！一刀劈开变成公式：**[最大化时间] = [工具化看待时间]**。逗号后的 `judging...` 顺着当白话解释读；`in so far as` = 只要/在……范围内。",
          polishedZh: "将时间视为有待最大化的资源，意味着你会以工具化的方式对待时间——只有当某一刻能推进某个目标的进展时，才认为这段时间没有虚度。"
        },
        {
          id: "T3-S11",
          para: 3,
          num: 11,
          difficulty: 2,
          examQ: "Q33 跨段钥匙",
          raw: "Immersive reading, by contrast, depends on being willing to risk inefficiency, goallessness, even time-wasting.",
          segs: [
            { t: "Immersive reading", k: "core" },
            { t: ", by contrast, ", k: "pivot" },
            { t: "depends on being willing to risk inefficiency, goallessness, even time-wasting.", k: "core" }
          ],
          coreZh: "相反，沉浸式阅读靠的是甘愿冒“低效、无目的、甚至浪费时间”的风险。",
          skeletonEn: "Immersive reading, by contrast, depends on being willing to risk inefficiency, goallessness, time-wasting",
          chunks: [
            { en: "Immersive reading,", zh: "沉浸式阅读", role: "主干·核心概念" },
            { en: "by contrast,", zh: "恰恰相反，", role: "对比枢轴" },
            { en: "depends on being willing to risk", zh: "取决于你是否愿意甘冒风险——", role: "主干·谓宾" },
            { en: "inefficiency, goallessness, even time-wasting.", zh: "低效、无目的、甚至浪费时间的风险。", role: "三个并列特征" }
          ],
          tipTitle: "记牢核心概念 Immersive reading，它是 Q33 跨段钥匙",
          tip: "经 `by contrast` 确立全文黑白二元对立：**效率思维 vs. 沉浸式阅读（`Immersive reading`）**。后面第 4 段说 `step outside time's flow into “soul time”`，其实就是这个概念的换词复现！",
          polishedZh: "相比之下，沉浸式阅读则取决于你是否愿意承担低效、无目的甚至浪费时间的风险。"
        },
        {
          id: "T3-S12",
          para: 3,
          num: 12,
          difficulty: 2,
          examQ: null,
          raw: "Try to slot it in as a to-do list item and you’ll manage only goal-focused reading — useful, sometimes, but not the most fulfilling kind.",
          segs: [
            { t: "Try to slot it in as a to-do list item ", k: "core" },
            { t: "and ", k: "pivot" },
            { t: "you’ll manage only goal-focused reading ", k: "core" },
            { t: "— useful, sometimes, ", k: "baggage" },
            { t: "but not ", k: "pivot" },
            { t: "the most fulfilling kind.", k: "core" }
          ],
          coreZh: "硬把读书塞进待办清单，你只能得到“目标导向阅读”——不是最充实的那种。",
          skeletonEn: "slot it in as a to-do list item → only goal-focused reading, not the most fulfilling kind",
          chunks: [
            { en: "Try to slot it in as a to-do list item", zh: "试着把读书硬塞成一条待办事项，", role: "条件" },
            { en: "and you’ll manage only goal-focused reading", zh: "你就只能做到目标导向型阅读——", role: "主干·结果" },
            { en: "— useful, sometimes,", zh: "有时确实有用，", role: "让步包袱" },
            { en: "but not the most fulfilling kind.", zh: "但不是最令人充实满足的那种。", role: "转折评价" }
          ],
          tipTitle: "破折号后先让步再转折：抓住 but not 后真态度",
          tip: "`slot ... in` = 硬插进日程空档；`manage` = 勉强做到。句尾 `useful, sometimes` 只是礼貌让步，真正评价在 `but not the most fulfilling kind`。",
          polishedZh: "若试着把阅读塞进待办事项清单，你得到的只能是目标导向型阅读——有时固然有用，却并非最令人充实的那种。"
        },
        {
          id: "T3-S13",
          para: 3,
          num: 13,
          difficulty: 3,
          examQ: "Q32 核心定位",
          raw: "“The future comes at us like empty bottles along an unstoppable and nearly infinite conveyor belt,” writes Gary Eberle in his book Sacred Time, and “we feel a pressure to fill these different-sized bottles (days, hours, minutes) as they pass, for if they get by without being filled, we will have wasted them.”",
          segs: [
            { t: "“The future comes at us like empty bottles", k: "core" },
            { t: " along an unstoppable and nearly infinite conveyor belt,” writes Gary Eberle in his book Sacred Time, ", k: "baggage" },
            { t: "and ", k: "pivot" },
            { t: "“we feel a pressure to fill these different-sized bottles (days, hours, minutes) as they pass", k: "core" },
            { t: ", ", k: "baggage" },
            { t: "for if ", k: "pivot" },
            { t: "they get by without being filled, we will have wasted them.”", k: "baggage" }
          ],
          coreZh: "未来像空瓶子不断涌来，我们倍感压力，必须在时间流过前把它们填满。",
          skeletonEn: "The future comes like empty bottles, and we feel a pressure to fill them (days, hours, minutes) as they pass",
          chunks: [
            { en: "“The future comes at us like empty bottles", zh: "“未来像一个个空瓶子朝我们涌来", role: "主干①·比喻" },
            { en: "along an unstoppable and nearly infinite conveyor belt,”", zh: "（沿着停不下来、近乎无穷的传送带），”", role: "包袱·画面修饰" },
            { en: "writes Gary Eberle in his book Sacred Time,", zh: "加里·埃伯利在《神圣时间》一书中写道，", role: "包袱·出处" },
            { en: "and “we feel a pressure to fill these different-sized bottles (days, hours, minutes) as they pass,", zh: "“我们感到有压力要在这些大小不一的瓶子（天、小时、分钟）经过时把它们填满，", role: "主干②·考点" },
            { en: "for if they get by without being filled, we will have wasted them.”", zh: "因为如果它们空着溜走了，我们就浪费了它们。”", role: "原因补充" }
          ],
          tipTitle: "全篇最长 57 词！砍掉传送带和书名，只抓两段引语骨架",
          tip: "这句虽长达 57 词，结构却只是简单并列 `A and B`：中间的传送带描写和书名作者直接一眼略过，直抓核心动作 `feel a pressure to fill these bottles (days, hours, minutes) as they pass`——精准对应 Q32 B 项 `make passing time fulfilling`！",
          polishedZh: "加里·埃伯利在《神圣时间》中写道：“未来就像沿着一条永不停歇、近乎无穷的传送带涌向我们的空瓶子，我们倍感压力，必须在这些大小不一的瓶子（天、小时、分钟）经过时将它们填满，因为一旦空瓶溜走，我们就浪费了时间。”"
        },
        {
          id: "T3-S14",
          para: 3,
          num: 14,
          difficulty: 1,
          examQ: null,
          raw: "No mind-set could be worse for losing yourself in a book.",
          segs: [
            { t: "No ", k: "pivot" },
            { t: "mind-set could be ", k: "core" },
            { t: "worse ", k: "pivot" },
            { t: "for losing yourself in a book.", k: "core" }
          ],
          coreZh: "没有什么心态比这更不利于沉浸读书了（= 最糟的心态）。",
          skeletonEn: "No mind-set could be worse for losing yourself in a book",
          chunks: [
            { en: "No mind-set could be worse", zh: "没有哪种心态比这更糟（= 最糟）", role: "否定+比较级=最高级" },
            { en: "for losing yourself in a book.", zh: "对于沉浸在一本书里而言。", role: "呼应沉浸阅读" }
          ],
          tipTitle: "否定词 + 比较级 = 最高级",
          tip: "`No ... could be worse` 瞬间转换成“**最糟糕**”。`losing yourself in a book`（忘我地投入书中）再次回扣 `immersive reading`。",
          polishedZh: "要说沉浸于一本书，没有什么心态比这更糟糕了。"
        },
        {
          id: "T3-S15",
          para: 4,
          num: 15,
          difficulty: 1,
          examQ: "Q35 结构转折",
          raw: "So what does work?",
          segs: [
            { t: "So ", k: "pivot" },
            { t: "what does work?", k: "core" }
          ],
          coreZh: "那么，到底什么办法管用？",
          skeletonEn: "So what does work?",
          chunks: [
            { en: "So", zh: "那么，", role: "承上启下" },
            { en: "what does work?", zh: "到底什么办法才管用呢？", role: "设问引方案" }
          ],
          tipTitle: "4 词设问句 = 全文大转折（问题 → 解法）",
          tip: "英语议论文里，段首短设问是**最清晰的宏观路标**——前三段全在批旧方法、挖病根，从这一句起，整段开始给出真正解法！`does` 表强调“到底”。",
          polishedZh: "那么，究竟什么方法才管用呢？"
        },
        {
          id: "T3-S16",
          para: 4,
          num: 16,
          difficulty: 1,
          examQ: "Q33 定位①",
          raw: "Perhaps surprisingly, scheduling regular times for reading.",
          segs: [
            { t: "Perhaps surprisingly, ", k: "baggage" },
            { t: "scheduling regular times for reading.", k: "core" }
          ],
          coreZh: "令人意外的是：安排固定的阅读时间。",
          skeletonEn: "scheduling regular times for reading [works]",
          chunks: [
            { en: "Perhaps surprisingly,", zh: "也许令人意外的是，", role: "态度副词" },
            { en: "scheduling regular times for reading.", zh: "为阅读安排固定时间（才管用）。", role: "方案①" }
          ],
          tipTitle: "紧承设问的省略回答句",
          tip: "省略了谓语 `works`，直接亮出第一个破局办法：**固定阅读时间**。",
          polishedZh: "或许令人意外的是：为阅读安排固定时间。"
        },
        {
          id: "T3-S17",
          para: 4,
          num: 17,
          difficulty: 3,
          examQ: "Q33 核心定位",
          raw: "You’d think this might fuel the efficiency mind-set, but in fact, Eberle notes, such ritualistic behaviour helps us “step outside time’s flow” into “soul time.”",
          segs: [
            { t: "You’d think this might fuel the efficiency mind-set, ", k: "baggage" },
            { t: "but in fact, ", k: "pivot" },
            { t: "Eberle notes, ", k: "frame" },
            { t: "such ritualistic behaviour helps us “step outside time’s flow” into “soul time.”", k: "core" }
          ],
          coreZh: "你以为这会助长效率思维，但其实这种仪式感能帮我们跳出时间洪流、进入心灵时间。",
          skeletonEn: "but in fact, such ritualistic behaviour helps us “step outside time’s flow” into “soul time”",
          chunks: [
            { en: "You’d think this might fuel the efficiency mind-set,", zh: "你可能会以为这会助长效率思维，", role: "假想反面（秒排A）" },
            { en: "but in fact, Eberle notes,", zh: "但事实上，埃伯利指出，", role: "转折+说话人" },
            { en: "such ritualistic behaviour", zh: "这种带有仪式感的行为", role: "主干·手段（秒排C）" },
            { en: "helps us “step outside time’s flow” into “soul time.”", zh: "帮助我们“跳出时间洪流”，进入“心灵时间”。", role: "主干·结果（锁定D）" }
          ],
          tipTitle: "经典“先破后立”：You'd think..., but in fact...",
          tip: "前面 `You'd think...` 专门用来给 Q33 A 项挖反坑；真主干在 `but in fact` 后，且分清因果：`ritualistic behaviour` 是**主语/手段**（不是结果，排 C），`step outside time's flow into “soul time”` 才是**结果**——跨段同义对应第 3 段的 `immersive reading`（锁定 D）！",
          polishedZh: "你或许以为这会助长效率思维，但事实上，埃伯利指出，这种充满仪式感的行为反而能帮我们“跳出时间的洪流”，步入“心灵时间”。"
        },
        {
          id: "T3-S18",
          para: 4,
          num: 18,
          difficulty: 1,
          examQ: "Q33 B 项排错",
          raw: "You could limit distractions by reading only physical books, or on single-purpose e-readers.",
          segs: [
            { t: "You could limit distractions", k: "core" },
            { t: " by reading only physical books, or on single-purpose e-readers.", k: "baggage" }
          ],
          coreZh: "你可以减少干扰——靠只读纸质书或单一用途电子书。",
          skeletonEn: "You could limit distractions by reading physical books or single-purpose e-readers",
          chunks: [
            { en: "You could limit distractions", zh: "你可以限制干扰，", role: "主干·方案②" },
            { en: "by reading only physical books,", zh: "方法是只读纸质书，", role: "方式A" },
            { en: "or on single-purpose e-readers.", zh: "或者用单一用途的电子阅读器。", role: "方式B" }
          ],
          tipTitle: "直白的“目标 + by 方式”句",
          tip: "顺手给出一个反证：作者提倡远离联网干扰（只读纸质书或纯阅读器），彻底排掉 Q33 B 项 `online reading habits`。",
          polishedZh: "你可以通过只读纸质书或使用单一用途的电子阅读器来减少干扰。"
        },
        {
          id: "T3-S19",
          para: 4,
          num: 19,
          difficulty: 3,
          examQ: "Q34 定位①",
          raw: "“Carry a book with you at all times” can actually work, too — providing you dip in often enough, so that reading becomes the default state from which you temporarily surface to take care of business, before dropping back down.",
          segs: [
            { t: "“Carry a book with you at all times” can actually work, too ", k: "core" },
            { t: "— providing ", k: "pivot" },
            { t: "you dip in often enough", k: "core" },
            { t: ", so that ", k: "pivot" },
            { t: "reading becomes the default state", k: "core" },
            { t: " from which you temporarily surface to take care of business, ", k: "baggage" },
            { t: "before ", k: "pivot" },
            { t: "dropping back down.", k: "baggage" }
          ],
          coreZh: "“随身带书”其实也管用——只要你够频繁地看，让阅读变成默认状态。",
          skeletonEn: "“Carry a book” can work — providing you dip in often enough → reading becomes the default state",
          chunks: [
            { en: "“Carry a book with you at all times” can actually work, too", zh: "“随时随身带本书”其实也能管用——", role: "主干·方案③" },
            { en: "— providing you dip in often enough,", zh: "只要你足够频繁地翻阅，", role: "条件（providing=if）" },
            { en: "so that reading becomes the default state", zh: "结果让阅读成了“默认状态”，", role: "核心结果" },
            { en: "from which you temporarily surface to take care of business,", zh: "你只是从这状态里临时浮出水面处理事务，", role: "from which 顺译！" },
            { en: "before dropping back down.", zh: "办完再沉回阅读里。", role: "方向铁证（秒排C）" }
          ],
          tipTitle: "from which 绝不倒译！按三步画面顺读，秒杀方向陷阱",
          tip: "`providing` = 只要（引导条件）。遇到 `from which` 千万别往回倒译成“你临时浮出水面处理事务的默认状态”，顺着读出**潜水画面**：① 泡在阅读里（默认）→ ② 临时浮出办事 → ③ 再沉回阅读（`dropping back down`）。方向一清，Q34 C 项 `drop back to business` 立刻露出“方向反了”的马脚！",
          polishedZh: "“随时随身带一本书”其实也能奏效——前提是你翻看得足够频繁，使阅读成为你的默认状态，你只是偶尔从中浮出水面处理一下日常事务，随后便再次沉回书海。"
        },
        {
          id: "T3-S20",
          para: 4,
          num: 20,
          difficulty: 2,
          examQ: "Q34 定位② / Q35 收束",
          raw: "On a really good day, it no longer feels as if you’re “making time to read,” but just reading, and making time for everything else.",
          segs: [
            { t: "On a really good day, ", k: "baggage" },
            { t: "it ", k: "core" },
            { t: "no longer ", k: "pivot" },
            { t: "feels as if you’re “making time to read,” ", k: "core" },
            { t: "but ", k: "pivot" },
            { t: "just reading, and making time for everything else.", k: "core" }
          ],
          coreZh: "状态极好时，不再是“挤时间读书”，而是“一直在读书、反过来给别的事挤时间”。",
          skeletonEn: "no longer “making time to read,” but just reading, and making time for everything else",
          chunks: [
            { en: "On a really good day,", zh: "在状态极好的一天，", role: "时间背景" },
            { en: "it no longer feels as if you’re “making time to read,”", zh: "感觉不再像是你在“挤时间读书”，", role: "否定前半" },
            { en: "but just reading,", zh: "而是你本来就在读书，", role: "转折重心①" },
            { en: "and making time for everything else.", zh: "只是反过来给其他一切事务挤出时间。", role: "转折重心②" }
          ],
          tipTitle: "防并列收官句：一句印证 Q34 A + 首尾呼应 Q35 B",
          tip: "抓 `no longer A, but B` 反转结构：阅读彻底成了头等正事（精准印证 Q34 A `reading becomes your primary business of the day`），同时与首段“没时间读书”形成完美首尾闭环，锁定全文最佳标题 Q35 B `How to Find Time to Read`！",
          polishedZh: "在状态极佳的日子里，你不再觉得自己是在“挤时间读书”，而是本就在读书，反倒是为其他一切事务挤出时间。"
        }
      ]
    }
  ]
};
