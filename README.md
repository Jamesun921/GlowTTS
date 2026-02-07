# GlowTTS

一个面向任意网页的 Tampermonkey 文本朗读脚本，支持 **Baidu TTS** 与 **Edge TTS**，可在浏览器内一键把正文转成语音播放。

## 功能

- 支持任意网站（`http/https`）快速朗读
- 双引擎：Baidu TTS / Edge TTS（可切换）
- Edge 分段队列播放，长文本更稳定
- 支持暂停 / 继续 / 停止
- 语速、发音人可调（Edge 音调取决于代理实现）
- 支持“从当前选中段落往后读”与“全文朗读”
- 悬浮按钮可拖拽，桌面与移动端可用
- 配置自动持久化（Tampermonkey 存储）

## 安装

1. 安装浏览器扩展：Tampermonkey（Violentmonkey 、 Greasemonkey）。
2. 新建脚本并粘贴 `GlowTTS.js` 全部内容，保存启用。
3. 打开任意网页，右下角会出现朗读按钮。

## 使用

- 单击悬浮按钮：开始/暂停/继续朗读
- 长按悬浮按钮：打开设置面板
- 在面板中可切换引擎、调节参数、试听与更多设置

## Edge 代理说明

脚本默认通过 `EDGE_TTS_PROXY` 请求 Edge TTS（当前默认值：`https://tts.glowjames.top/v1/audio/speech` 。不保证稳定，自建可以参考 https://github.com/travisvn/openai-edge-tts ）。

如需自建服务，可在 `GlowTTS.js` 中修改：

- `EDGE_TTS_PROXY`
- `EDGE_TTS_API_KEY`（可选）
- `EDGE_STREAM_FORMAT`（`audio` 或 `sse`）
- `EDGE_PITCH_SUPPORTED`（当你的代理明确支持 `pitch` 时设为 `true`）

## 文件结构

- `GlowTTS.js`：主脚本
- `README.md`：项目说明

## 兼容性

- Chromium 内核浏览器（Chrome / Edge / Brave 等）
- Firefox（需 Tampermonkey 兼容环境）
- Safari（macOS / iOS）可用，但需安装 Userscripts 或 Tampermonkey 并授予站点权限（实验性支持）
- 移动端支持取决于浏览器与脚本扩展环境，常见可用方案：
- iOS / iPadOS：Safari + Userscripts 或 Tampermonkey
- Android：Firefox（Add-ons）、Samsung Internet（Add-ons）、Yandex Browser（Extensions）、Kiwi（Extensions）

## License

本项目采用 [MIT](./LICENSE) 许可证。
