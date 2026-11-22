# 考研英语（二）真题阅读精装词本 · Kaoyan Vocab

在线地址：<https://tayloverqjc.github.io/kaoyan-vocab/>

纯静态零依赖（HTML / CSS / JS）的考研英语（二）阅读复盘生词本，支持 5 套主题（精装纸感 / 极简黑白 / 不背熏黑毛玻璃 / 墨墨背词风 / 深夜护眼）、精读卡 / 速刷表 / 3D 物理闪卡三种学习模式、艾宾浩斯间隔重复、模糊遮义自测、一键移出熟词与撤销恢复、**GitHub 私密 Gist 手机/电脑/平板三端自动无感同步（按词条粒度自动合并 + 扫码绑定）**，以及 JSON 进度码手动备份。

## 目录结构

- `index.html`：页面骨架与脚本清单引入（注意静态资源的 `?v=` 缓存版本号）
- `styles.css`：5 套主题样式、云同步面板与响应式布局
- `qr.js`：纯前端零依赖二维码生成器（本地生成三端配对二维码，不经由任何第三方服务）
- `app.js`：前端状态、视图渲染、本地持久化（`kaoyan_vocab_progress_v1`）、按词条 LWW 合并与 GitHub 私密 Gist 自动同步引擎
- `data/manifest.js`：年份词卷清单（年份顺序、标题、词数、`js` 路径）
- `data/*.js`：各年份词库数据（挂载到 `window.VOCAB_SETS['<id>']`）
- `assets/`：本地渐进式风景壁纸（`bg-alpine.jpg`、`bg-sunset.jpg`、`bg-forest.jpg`）

## 三端自动同步（GitHub 私密 Gist）

1. 在左侧栏底部（或移动端顶部云朵按钮）打开「三端云同步与备份」。
2. 在 GitHub 生成一个仅勾选 `gist` 权限的 Token 并粘贴连接，系统会自动在你账号下查找或创建私密 Gist（`kaoyan-vocab-progress.json`），凭证仅存放在当前浏览器本地 `localStorage`（`kaoyan_vocab_gist_sync_v1`），绝不会写入仓库代码。
3. 开启后支持：打开/切回前台/联网自动拉取合并、操作防抖自动上传、离线本地暂存、按词条时间戳（LWW）无损合并；并可生成配对二维码或 `#kv_sync=` 链接供手机/平板免输入一键绑定。

## 新增年份词库约定（供后续添加 2013 等年份参考）

1. **考生身份约定**：用户备考 **考研英语（二）**。2010 年及之后的词卷统一标注为 `YYYY 英二` / `YYYY 英语（二）阅读`；2010 年前的统考真题标注为 `YYYY 真题` / `YYYY 考研英语阅读`。
2. **新增 `data/<year>.js`**：
   - `window.VOCAB_SETS['<year>-en2-reading'] = { id, year, label, subtitle, updatedAt, passages: [...] }`
   - 每个词条包含：`id`（如 `2013-T1-1`）、`word`、`ipa`（美式音标）、`meaning`（词性用反引号包裹如 `` `n.` `` 以渲染词性胶囊）、`usage`（尽量保留至少一段反引号包裹的英文原文/选项搭配，供 3D 闪卡正面语境提示提取）、`memory`（词根/联想记忆）、`secondary`（是否熟词生义 `true/false`）。
3. **更新注册与缓存**：
   - 按年份顺序更新 `data/manifest.js`（确保 `count` 与实际词数一致）。
   - 在 `index.html` 中按年份引入 `<script src="data/<year>.js?v=1"></script>`，并递增 `data/manifest.js?v=...` 版本号。
4. **校验并部署**：
   - 执行 `node --check` 校验 JS 语法与字段完整性后，直接提交推送至 `origin main`，等待 GitHub Pages 构建完成。