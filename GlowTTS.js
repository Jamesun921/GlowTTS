// ==UserScript==
// @name         追光朗读 - TTS听文章
// @namespace    http://tampermonkey.net/
// @version      1.0.2.0
// @description 极为好用的网页朗读器，集成百度/EdgeTTS，在浏览器上实时文本转语音 支持移动端| 全平台适用
// @author       GlowJames
// @match        http://*/*
// @match        https://*/*
// @exclude      https://example.com/
// @icon         data:image/png;base64,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
// @run-at       document-end
// @connect      ai.baidu.com
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @license      none
// @require      https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js
/* globals jQuery, $, waitForKeyElements */
// ==/UserScript==
//this.$ = this.jQuery = jQuery.noConflict(true);
let version = "1.0.2.0版";
var Global_TEXT = "";
var BaiduTTS_info = {
    person: 4003,
    speed: 5,
    pitch: 5,
    status: false,
};
var EdgeTTS_info = {
    person: "zh-CN-XiaoxiaoNeural", // 默认晓晓
    speed: 1.0, // 0.5-2.0
    pitch: 0, // -100 到 100
    status: false,
};
var info = {
    type: "edge", // 默认使用Edge
};
var setting = {
    version: version,
    speech_type: "next_text",
};
var TTS_GLOBAL,TTS_MORE_GLOBAL;
var VIEW_MODE = "mini"; // mini | card
var MINI_VIEW_POS = null;
var TTS_BUTTON_POS_KEY = "GLOW_TTS_BUTTON_POS";
var TTS_DRAGGING = false;
var TTS_DRAG_MOVED = false;
var TTS_RESIZE_BOUND = false;
var TTS_MORE_RESIZE_BOUND = false;
var EDGE_TTS_PROXY = "https://tts.glowjames.top/v1/audio/speech";
var EDGE_TTS_API_KEY = ""; // 可选：如果你的服务开启鉴权，填入 Bearer token
var EDGE_STREAM_FORMAT = "audio";
var PLAYBACK_STATE = "idle"; // idle | loading | playing | paused | error
var PLAYBACK_LAST_REASON = "";
var PLAYBACK_USER_PAUSED = false;
var PLAYBACK_EVENTS_BOUND = false;
var PLAYBACK_WATCHDOG_TIMER = 0;
var BAIDU_SENSITIVE_RETRY = false;
var EdgeQueue = {
    active: false,
    paused: false,
    segments: [],
    buffers: {},
    playIndex: 0,
    fetchIndex: 0,
    inflight: 0,
    downloading: false,
    prefetchTimer: 0,
    prefetchLeadMs: 1400
};

function getAudioEl() {
    return document.getElementById('GLOW_TTS');
}

function applyPlaybackState(nextState, reason) {
    PLAYBACK_STATE = nextState;
    PLAYBACK_LAST_REASON = reason || "";
    if (nextState === "playing" || nextState === "loading") {
        if (info.type == "baidu") {
            BaiduTTS_info.status = true;
            EdgeTTS_info.status = false;
        } else if (info.type == "edge") {
            EdgeTTS_info.status = true;
            BaiduTTS_info.status = false;
        }
    } else {
        BaiduTTS_info.status = false;
        EdgeTTS_info.status = false;
    }
    if (nextState === "idle" || nextState === "error") {
        PLAYBACK_USER_PAUSED = false;
    }
    if (nextState === "playing" || nextState === "loading") {
        icon_change("play");
    } else if (nextState === "paused") {
        icon_change("paused");
    } else {
        icon_change("end");
    }
    refreshPlaybackUI();
    syncPlaybackWatchdog();
}

function getPlaybackLabel() {
    if (PLAYBACK_STATE === "playing") return "播放中";
    if (PLAYBACK_STATE === "loading") return "加载中";
    if (PLAYBACK_STATE === "paused") return PLAYBACK_LAST_REASON ? "已暂停（" + PLAYBACK_LAST_REASON + "）" : "已暂停";
    if (PLAYBACK_STATE === "error") return PLAYBACK_LAST_REASON ? "异常（" + PLAYBACK_LAST_REASON + "）" : "异常";
    return "已停止";
}

function refreshPlaybackUI() {
    if (!TTS_GLOBAL) return;
    var btn = TTS_GLOBAL.find("#TTS_Button");
    if (btn.length > 0) {
        if (PLAYBACK_STATE === "playing" || PLAYBACK_STATE === "loading") {
            btn.attr("title", "点击暂停");
        } else if (PLAYBACK_STATE === "paused") {
            btn.attr("title", "点击继续");
        } else {
            btn.attr("title", "点击开始朗读");
        }
    }
    var statusLine = TTS_GLOBAL.find("#tts_status_line");
    if (statusLine.length > 0) {
        statusLine.text("状态：" + getPlaybackLabel());
    }
    var isActive = PLAYBACK_STATE === "playing" || PLAYBACK_STATE === "loading" || PLAYBACK_STATE === "paused";
    TTS_GLOBAL.find(".listen").prop("disabled", isActive);
    TTS_GLOBAL.find(".stop").prop("disabled", !isActive);
}

function syncPlaybackWatchdog() {
    if (PLAYBACK_WATCHDOG_TIMER) {
        clearInterval(PLAYBACK_WATCHDOG_TIMER);
        PLAYBACK_WATCHDOG_TIMER = 0;
    }
    var needWatch = PLAYBACK_STATE === "playing" || PLAYBACK_STATE === "loading" || PLAYBACK_STATE === "paused";
    if (!needWatch) return;
    PLAYBACK_WATCHDOG_TIMER = setInterval(function () {
        var audio = getAudioEl();
        if (!audio) return;
        if (!audio.paused && !audio.ended) {
            if (PLAYBACK_STATE !== "playing") {
                applyPlaybackState("playing", "");
            }
            return;
        }
        if (audio.ended && !EdgeQueue.active && !Global_TEXT.length) {
            applyPlaybackState("idle", "");
        }
    }, 1500);
}

function pauseCurrentPlayback(isUserAction) {
    var a = getAudioEl();
    if (a && !a.paused) {
        a.pause();
    }
    EdgeQueue.paused = true;
    if (EdgeQueue.prefetchTimer) {
        clearTimeout(EdgeQueue.prefetchTimer);
        EdgeQueue.prefetchTimer = 0;
    }
    PLAYBACK_USER_PAUSED = !!isUserAction;
    applyPlaybackState("paused", isUserAction ? "手动暂停" : "系统中断");
}

function resumeCurrentPlayback() {
    init();
    PLAYBACK_USER_PAUSED = false;
    EdgeQueue.paused = false;
    var a = getAudioEl();
    if (a && a.src) {
        applyPlaybackState("loading", "恢复播放");
        var p = a.play();
        if (p && p.catch) {
            p.catch(function () {
                applyPlaybackState("paused", "浏览器限制");
            });
        }
        if (EdgeQueue.active) {
            fetchNextEdgeSegment();
        }
        return;
    }
    if (info.type == "edge" && EdgeQueue.active) {
        applyPlaybackState("loading", "恢复播放");
        fetchNextEdgeSegment();
        playNextFromQueue();
        return;
    }
    if (info.type == "baidu" && Global_TEXT.length) {
        applyPlaybackState("loading", "恢复播放");
        BaiduTTS(Global_TEXT);
        return;
    }
    applyPlaybackState("idle", "");
}

(function() {
    'use strict';

    init_voice_setting();

    GM_addStyle('body{user-select:auto !important; -webkit-user-select:auto !important; -moz-user-select:auto !important; -ms-user-select:auto !important; }');
    GM_addStyle('#GLOW_TTS_IFRAME,.div {bottom: 10%;transform: translate(10px);position: fixed;z-index: 9999;background-spanor: transparent;transform: translate(0);}.TTS_Button {display: flex;justify-content: center;align-items: center;height: 31px;width: 20px;border-radius: 8px;padding: 7px 12px;font-size: 12px;spanor: #969696;//border-radius: 50%;box-shadow: 0 2px 10px rgb(0 0 0 / 5%);background-spanor: white;background: rgba(255, 255, 255, 0.9);margin-left: 8px;transform-origin: center;transition: .2s;cursor: pointer;flex-direction: spanumn;}.TTS_Button:hover {background: #e3e5e7;}.TTS_Card {position: fixed;//position：relative;box-sizing: border-box;padding: 18px;width: 360px;height: 200px;border-radius: 8px;background: white;box-shadow: 0 3px 12px rgb(0 0 0 / 20%);font-size: 16px;bottom: 18%;margin-left: 9px;-moz-user-select: none;-khtml-user-select: none;user-select: none;z-index: 9999;}.TTS_Card .close {position: absolute;top: 14px;right: 14px;width: 14px;height: 14px;cursor: pointer;}.TTS_Card .title {margin-bottom: 16px;margin-left: 2px;//spanor: black;//font-size: 16px;line-height: 22px;display: flex;}.TTS_Card .title .title_text {spanor: black;font-size: 16px;margin-right: 30px;}.TTS_Card .title .TTS_Change {display: flex;}.TTS_Card .title .TTS_Change .il {margin-left: 40px;font-size: 16px;font-family: "微软雅黑";color: #969696;border-bottom: 2px solid #ffffff;cursor: pointer;}.TTS_Card .title .TTS_Change .il:hover {border-bottom: 2px dashed #F00;}.TTS_Card .title .TTS_Change .il:focus {outline: none;border-bottom: 2px solid #F00;}.TTS_Card .login-tip-content-item>* {display: flex;align-items: center;margin-bottom: 14px;width: 50%;height: 26px;}.setting {//position：relative;position: absolute;weight: 100%;height: auto;//max-height: 145px;//background:green;//overflow: auto;}.setting .row {margin: auto;max-height: 50px;width: 100%;overflow: auto;// overflow-x: scroll;// overflow-y: hidden;//white-space: nowrap;margin-bottom: 12px;}.setting .col {width: auto;}.setting .span {width: 70px;height: 30px;float: left;margin-right: 1px;//color: red;color: #2C3E50;cursor: pointer;}.setting .setting_down {display: flex;}.setting .speech_set {font-size: 13px;margin-top: 3px;}.setting .slider {width: 170px;height: 20px;margin: 0;transform-origin: 75px 75px;}.setting .others {display: flex;font-size: inherit;margin-left: auto;}.setting .others .more {background-color: #DCDCDC;border: 1px solid #DCDCDC;color: #fff;display: inline-block;font-size: 9px;padding: 2px 18px;height: 20px;cursor: pointer;}.setting .others .listen {background-color: #0078d4;border: 1px solid #0078d4;border-radius: 3px;color: #fff;display: inline-block;font-size: 9px;padding: 5px 8px;cursor: pointer;}.setting .others .more:active {background-color: #C0C0C0;}.setting .others .listen:active {background-color: #0062ad;}::-webkit-scrollbar {width: 4px;height: 4px;background-color: transparent;}::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px transparent;border-radius: 10px;background-color: white;}::-webkit-scrollbar-thumb {border-radius: 10px;-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);background-color: #555;}.setting a {color: #2a5caa;text-decoration: none;}');

    let BUTTON = `<div class="div"><div class="TTS_Button" id="TTS_Button"><svg width="1.7em" height="1.7em" t="1649228019321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2481" width="200" height="200"><path id="icon-start"          d="M920.8 600.5V491c0-55.7-11-109.8-32.7-160.9-20.9-49.3-50.9-93.6-88.9-131.6-38.1-38.1-82.4-68-131.6-88.9-51.1-21.7-105.2-32.7-160.9-32.7s-109.8 11-160.9 32.7c-49.3 20.9-93.6 50.9-131.6 88.9-38.1 38.1-68 82.4-88.9 131.6-21.9 51.1-32.9 105.2-32.9 160.9v109.5c-21.7 33.2-33.2 73.2-33.2 115.6 0 42.6 11.6 82.7 33.4 116 17.8 27.2 41.7 47.9 68.5 59.8 9.6 32.2 39.5 55.7 74.7 55.7H265c43 0 78-35 78-78v-307c0-43-35-78-78-78h-29.2c-35.2 0-65.1 23.5-74.7 55.7-4.3 1.9-8.6 4.1-12.8 6.5V491c0-48.1 9.5-94.9 28.2-139 18.1-42.6 44-81 77-113.9 33-33 71.3-58.9 113.9-77 44.1-18.7 90.9-28.2 139-28.2 48.1 0 94.9 9.5 139 28.2 42.6 18.1 81 44 113.9 77 33 33 58.9 71.3 77 113.9 18.7 44.1 28.2 90.9 28.2 139v55.8c-4.2-2.4-8.4-4.6-12.8-6.5-9.6-32.2-39.5-55.7-74.7-55.7h-29.2c-43 0-78 35-78 78v307c0 43 35 78 78 78H777c35.2 0 65.1-23.5 74.7-55.7 26.8-12 50.7-32.7 68.5-59.8 21.9-33.3 33.4-73.4 33.4-116 0.4-42.4-11.1-82.3-32.8-115.6z"          fill="#969696" p-id="2482"></path><path id="icon-playing"          d="M512 816.213333c-23.466667 0-42.666667-19.2-42.666667-42.666666V250.88c0-23.466667 19.2-42.666667 42.666667-42.666667s42.666667 19.2 42.666667 42.666667v522.666667c0 23.466667-19.2 42.666667-42.666667 42.666666zM341.333333 597.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666v-85.333334c0-23.466667 19.2-42.666667 42.666666-42.666667s42.666667 19.2 42.666667 42.666667v85.333334c0 23.466667-19.2 42.666667-42.666667 42.666666zM853.333333 640c-23.466667 0-42.666667-19.2-42.666666-42.666667v-170.666666c0-23.466667 19.2-42.666667 42.666666-42.666667s42.666667 19.2 42.666667 42.666667v170.666666c0 23.466667-19.2 42.666667-42.666667 42.666667zM170.666667 682.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V384c0-23.466667 19.2-42.666667 42.666667-42.666667s42.666667 19.2 42.666666 42.666667v256c0 23.466667-19.2 42.666667-42.666666 42.666667zM682.666667 727.893333c-23.466667 0-42.666667-19.2-42.666667-42.666666V338.773333c0-23.466667 19.2-42.666667 42.666667-42.666666s42.666667 19.2 42.666666 42.666666v346.88a42.666667 42.666667 0 0 1-42.666666 42.24z"          fill="#969696" p-id="1413"></path><path id="icon-paused" d="M384 256l320 256-320 256z" fill="#969696" style="display:none;"></path></svg></div></div>`;
    let CARD = "";

    if(!document.querySelector("#GLOW_TTS_IFRAME")){
        var b = document.createElement('iframe');
        b.setAttribute("id","GLOW_TTS_IFRAME");
        b.setAttribute("title","GLOW_TTS");
        b.setAttribute("scrolling","no");
        b.style.cssText = "height:60px; width:70px; border: unset; scrolling:no; display: flex; position: fixed; z-index: 9999;";
        b.style.overflow = "hidden";
        document.body.appendChild(b);
    }
    var _TTS_ = document.querySelector("#GLOW_TTS_IFRAME");
    applyButtonPosition(_TTS_);
    enableDragForButton(_TTS_);
    TTS_GLOBAL = $($("#GLOW_TTS_IFRAME")[0].contentWindow.document);
    add_TTS_Style(_TTS_.contentWindow.document,'.div {bottom: 10px;transform: translate(10px);position: fixed;z-index: 9999;background-spanor: transparent;transform: translate(0);}.TTS_Button {display: flex;justify-content: center;align-items: center;height: 31px;width: 20px;border-radius: 8px;padding: 7px 12px;font-size: 12px;spanor: #969696;//border-radius: 50%;box-shadow: 0 2px 10px rgb(0 0 0 / 5%);background-spanor: white;background: rgba(255, 255, 255, 0.9);margin-left: 8px;transform-origin: center;transition: .2s;cursor: pointer;flex-direction: spanumn;}.TTS_Button:hover {background: #e3e5e7;}.TTS_Card {position: fixed;//position：relative;box-sizing: border-box;padding: 18px;width: 360px;height: 200px;border-radius: 8px;background: white;box-shadow: 0 3px 12px rgb(0 0 0 / 20%);font-size: 16px;bottom: unset;margin-left: 9px;-moz-user-select: none;-khtml-user-select: none;user-select: none;z-index: 9999;}.TTS_Card .close {position: absolute;top: 14px;right: 14px;width: 14px;height: 14px;cursor: pointer;}.TTS_Card .title {margin-bottom: 16px;margin-left: 2px;//spanor: black;//font-size: 16px;line-height: 22px;display: flex;}.TTS_Card .title .title_text {spanor: black;font-size: 16px;margin-right: 30px;}.TTS_Card .title .TTS_Change {display: flex;}.TTS_Card .title .TTS_Change .il {margin-left: 40px;font-size: 16px;font-family: "微软雅黑";color: #969696;border-bottom: 2px solid #ffffff;cursor: pointer;}.TTS_Card .title .TTS_Change .il:hover {border-bottom: 2px dashed #F00;}.TTS_Card .title .TTS_Change .il:focus {outline: none;border-bottom: 2px solid #F00;}.TTS_Card .login-tip-content-item>* {display: flex;align-items: center;margin-bottom: 14px;width: 50%;height: 26px;}.setting {//position：relative;position: absolute;weight: 100%;height: auto;//max-height: 145px;//background:green;//overflow: auto;}.setting .row {margin: auto;max-height: 50px;width: 100%;overflow: auto;// overflow-x: scroll;// overflow-y: hidden;//white-space: nowrap;margin-bottom: 12px;}.setting .col {width: auto;}.setting .span {width: 70px;height: 30px;float: left;margin-right: 1px;//color: red;color: #2C3E50;cursor: pointer;}.setting .setting_down {display: flex;}.setting .speech_set {font-size: 13px;margin-top: 3px;}.setting .slider {width: 170px;height: 20px;margin: 0;transform-origin: 75px 75px;}.setting .others {display: flex;font-size: inherit;margin-left: auto;}.setting .others .more {background-color: #DCDCDC;border: 1px solid #DCDCDC;color: #fff;display: inline-block;font-size: 9px;padding: 2px 18px;height: 20px;cursor: pointer;}.setting .others .listen {background-color: #0078d4;border: 1px solid #0078d4;border-radius: 3px;color: #fff;display: inline-block;font-size: 9px;padding: 5px 8px;cursor: pointer;}.setting .others .more:active {background-color: #C0C0C0;}.setting .others .listen:active {background-color: #0062ad;}::-webkit-scrollbar {width: 4px;height: 4px;background-color: transparent;}::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px transparent;border-radius: 10px;background-color: white;}::-webkit-scrollbar-thumb {border-radius: 10px;-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);background-color: #555;}.setting a {color: #2a5caa;text-decoration: none;}');
    applyModernMainStyle(_TTS_.contentWindow.document);
    _TTS_.contentWindow.document.body.innerHTML = BUTTON;

    UIinit();
    rebind();

    var timeOutEvent,mobile_timeOutEvent;
    var longClick = 0;
    var mobile_longClick = 0;
    TTS_GLOBAL.find("#TTS_Button").on({
        mousedown: function(e) {
            if(e && e.preventDefault) {
                e.preventDefault();
            }
            longClick = 0;
            TTS_DRAG_MOVED = false;
            timeOutEvent = setTimeout(function() {
                if (TTS_DRAG_MOVED || TTS_DRAGGING) return;
                longClick = 1;
                ShowCard();
            }, 300);
        },
        mouseup: function() {
            clearTimeout(timeOutEvent);
        },
        mousemove: function() {
            if (TTS_DRAGGING) {
                clearTimeout(timeOutEvent);
            }
        },
        click: function(e) {
            clearTimeout(timeOutEvent);
            if (longClick == 0) {
                CLICKED();
            }
            return false;
        }
    });
    TTS_GLOBAL.find("#TTS_Button").on({
        touchstart: function(e) {
            mobile_longClick = 0;
            TTS_DRAG_MOVED = false;
            mobile_timeOutEvent = setTimeout(function() {
                if (TTS_DRAG_MOVED || TTS_DRAGGING) return;
                mobile_longClick = 1;
                ShowCard();
            }, 300);
        },
        touchmove: function(e) {
            clearTimeout(mobile_timeOutEvent);
            mobile_timeOutEvent = 0;
            e.preventDefault();
        },
        touchend: function(e) {
            clearTimeout(mobile_timeOutEvent);
            if (mobile_timeOutEvent != 0 && mobile_longClick == 0) {
                CLICKED();
            }
            return false;
        }
    });
    function CLICKED(){
        if (TTS_DRAG_MOVED || TTS_DRAGGING) return;
        init();
        if (PLAYBACK_STATE === "playing" || PLAYBACK_STATE === "loading") {
            pauseCurrentPlayback(true);
            return;
        }
        if (PLAYBACK_STATE === "paused") {
            resumeCurrentPlayback();
            return;
        }
        var TEXT = "";
        if(setting.speech_type == "all_text"){
            TEXT = window.getSelection().toString() || Get_InnerText();
        }else if(setting.speech_type == "next_text"){
            TEXT = Get_InnerText().slice(Get_InnerText().indexOf(window.getSelection().toString()));
        }
        if (!TEXT || !TEXT.trim()) {
            applyPlaybackState("error", "未识别到可朗读文本");
            return;
        }
        applyPlaybackState("loading", "开始朗读");
        if(info.type == "baidu"){
            BaiduTTS(TEXT);
        }else if(info.type == "edge"){
            EdgeTTS(TEXT);
        } else {
            applyPlaybackState("error", "未选择语音引擎");
        }
    }
})();

function add_TTS_Style(_TTS_,css) {
    var head, style;
    head = _TTS_.getElementsByTagName('head')[0];
    if (!head) { console.log("未能添加TTS样式");return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function applyModernMainStyle(doc){
    if (!doc || doc.getElementById("GLOW_TTS_MODERN_STYLE")) return;
    add_TTS_Style(doc, `
        :root { --tts-accent:#0ea5e9; --tts-bg:#f8fafc; --tts-text:#0f172a; --tts-muted:#64748b; --tts-border:#e2e8f0; }
        html,body{ margin:0; padding:0; background:transparent; font-family:"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif; color:var(--tts-text); overflow:hidden; }
        .TTS_Button{
            width:42px; height:42px; padding:0; margin-left:0; border-radius:12px;
            border:1px solid var(--tts-border); background:rgba(255,255,255,.92);
            box-shadow:none; transition:transform .12s ease, background .16s ease;
        }
        .TTS_Button svg{ width:22px; height:22px; }
        .TTS_Button:hover{ background:#fff; transform:translateY(-1px); }
        .TTS_Card{
            width:100%; max-width:none; min-height:300px; max-height:100%; height:auto;
            margin:0; bottom:unset;
            box-sizing:border-box; padding:14px 14px 12px; border-radius:16px;
            background:linear-gradient(180deg,#ffffff 0%, #f8fbff 100%);
            border:1px solid var(--tts-border); box-shadow:none; overflow-y:auto; overflow-x:hidden;
        }
        .TTS_Card .close{ width:16px; height:16px; top:14px; right:14px; opacity:.75; }
        .TTS_Card .close:hover{ opacity:1; }
        .TTS_Card .title{ margin:0 0 10px; padding-right:24px; display:flex; align-items:center; gap:8px; line-height:1.2; flex-wrap:wrap; }
        .TTS_Card .title .title_text{ margin-right:0; font-size:14px; font-weight:700; letter-spacing:.2px; color:var(--tts-text); cursor:grab; user-select:none; white-space:nowrap; }
        .TTS_Card:active .title .title_text{ cursor:grabbing; }
        .TTS_Card .title .TTS_Change{ display:flex; gap:6px; flex-wrap:wrap; width:100%; }
        .TTS_Card .title .TTS_Change .il{
            margin-left:0; padding:5px 10px; border-radius:999px; border:1px solid var(--tts-border);
            font-size:12px; color:var(--tts-muted); background:#fff; user-select:none;
        }
        .TTS_Card .title .TTS_Change .il:hover{ border-color:#bae6fd; background:#f0f9ff; }
        .card{ margin-top:6px; }
        .setting{ position:relative; }
        .setting.tts-hidden{ display:none; }
        .setting .row{
            margin:0 0 10px; width:100%; max-height:92px; padding:8px;
            border:1px solid var(--tts-border); border-radius:12px; background:var(--tts-bg); overflow-y:auto; overflow-x:hidden;
        }
        .setting .col{ display:flex; flex-wrap:wrap; gap:8px; }
        .setting .span{
            float:none; width:auto; min-width:84px; height:auto; margin-right:0; padding:6px 10px;
            border-radius:999px; border:1px solid var(--tts-border); background:#fff; font-size:12px; line-height:1.2;
            color:#334155; text-align:center;
        }
        .setting .setting_down{ display:grid; grid-template-columns:1fr auto; gap:10px; align-items:end; }
        .setting .setting_sp{ min-width:0; }
        .setting .speech_set{ margin:0 0 8px; font-size:12px; color:#334155; }
        .setting .speech_set:last-child{ margin-bottom:0; }
        .setting .slider{ width:100%; height:auto; margin-top:4px; transform:none; }
        .setting input[type="range"]{ width:100%; accent-color:var(--tts-accent); }
        .setting .others{ display:flex; gap:8px; margin-left:0; align-items:flex-end; width:100%; }
        .setting .others .others-main{ margin-right:0; flex:1 1 auto; display:flex; justify-content:flex-end; }
        .setting .others > div{ margin-right:0 !important; width:auto !important; display:block !important; flex-wrap:nowrap !important; }
        .setting .others .more, .setting .others .listen, .setting .others .stop{
            min-width:72px; height:32px; border:1px solid transparent; border-radius:10px; padding:0 12px; font-size:12px; font-weight:600; cursor:pointer;
        }
        .setting .others .more{ background:#e2e8f0; border-color:#e2e8f0; color:#334155; }
        .setting .others .listen{ background:var(--tts-accent); border-color:var(--tts-accent); color:#fff; }
        .setting .others .stop{ background:#ef4444; border-color:#ef4444; color:#fff; }
        .setting .others button[disabled]{ opacity:.45; cursor:not-allowed; }
        .tts-status-line{
            margin:0 0 10px; padding:8px 10px; border-radius:10px;
            border:1px solid var(--tts-border); background:#f8fafc; color:#334155;
            font-size:12px; line-height:1.35;
        }
        #about_card{ font-size:12px; line-height:1.7; color:#334155; }
        #about_card .about-title{ font-size:13px; font-weight:700; color:#0f172a; margin-bottom:8px; }
        #about_card a{ color:#0369a1; text-decoration:none; margin-left:6px; }
        #about_card a:hover{ text-decoration:underline; }
        @media (max-width: 640px){
            .TTS_Card{ max-height:86vh; padding:12px 12px 10px; border-radius:14px; }
            .TTS_Card .title{ gap:8px; padding-right:22px; }
            .TTS_Card .title .title_text{ font-size:14px; }
            .TTS_Card .title .TTS_Change .il{ padding:6px 10px; font-size:12px; }
            .setting .row{ max-height:110px; padding:7px; }
            .setting .span{ min-width:78px; padding:6px 9px; }
            .setting .setting_down{ grid-template-columns:1fr; gap:8px; }
            .setting .others{ width:100%; justify-content:stretch; flex-direction:column; align-items:stretch; }
            .setting .others > div{ width:100% !important; }
            .setting .others .others-main{ width:100%; justify-content:stretch; }
            .setting .others .more, .setting .others .listen, .setting .others .stop{ width:100%; height:34px; }
        }
        @media (max-width: 420px){
            .TTS_Card{ width:100%; margin:0; padding:10px 10px 9px; border-radius:12px; }
            .TTS_Card .title{ margin-bottom:8px; }
            .TTS_Card .title .TTS_Change{ gap:5px; }
            .TTS_Card .title .TTS_Change .il{ padding:5px 8px; font-size:11px; }
            .setting .speech_set{ font-size:11px; }
        }
        #GLOW_TTS_MODERN_STYLE{}
    `);
    var tag = doc.createElement("meta");
    tag.id = "GLOW_TTS_MODERN_STYLE";
    doc.head.appendChild(tag);
}

function applyModernMoreStyle(doc){
    if (!doc || doc.getElementById("GLOW_TTS_MORE_MODERN_STYLE")) return;
    add_TTS_Style(doc, `
        html,body{ margin:0; padding:0; font-family:"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif; }
        .card{
            position:relative; box-sizing:border-box; width:100%; padding:14px; border-radius:14px; background:#fff;
            border:1px solid #e2e8f0; box-shadow:none; user-select:none;
        }
        .title{ margin:0 24px 12px 0; display:flex; align-items:center; line-height:1.2; }
        .title .title_text{ font-size:15px; font-weight:700; color:#0f172a; }
        .close{ position:absolute; top:14px; right:14px; width:14px; height:14px; cursor:pointer; opacity:.75; }
        .line{ display:flex; align-items:center; justify-content:space-between; gap:10px; font-size:13px; color:#334155; }
        .line .info{ margin-right:20px; }
        .line .click{ margin-left:auto; }
        .chooseBtn{ display:none; }
        .choose-label{ box-shadow:inset 0 0 0 1px #cbd5e1; width:40px; height:22px; display:inline-block; border-radius:22px; position:relative; background:#cbd5e1; overflow:hidden; transition:background .2s ease; }
        .choose-label:before{ content:""; position:absolute; left:1px; top:1px; width:20px; height:20px; display:inline-block; border-radius:20px; background:#fff; z-index:20; transition:left .2s ease; }
        .chooseBtn:checked+label.choose-label:before{ left:19px; }
        .chooseBtn:checked+label.choose-label{ background:#0ea5e9; box-shadow:none; }
        @media (max-width: 520px){
            .card{ padding:12px; border-radius:12px; }
            .title .title_text{ font-size:14px; }
            .line{ font-size:12px; gap:8px; }
        }
        #GLOW_TTS_MORE_MODERN_STYLE{}
    `);
    var tag = doc.createElement("meta");
    tag.id = "GLOW_TTS_MORE_MODERN_STYLE";
    doc.head.appendChild(tag);
}

function resizeMoreFrame(){
    var iframeEl = document.querySelector("#GLOW_TTS_MORE_IFRAME");
    if (!iframeEl) return;
    var vw = window.innerWidth || document.documentElement.clientWidth || 360;
    var vh = window.innerHeight || document.documentElement.clientHeight || 240;
    var w = Math.min(380, Math.max(280, Math.floor(vw * 0.92)));
    var h = Math.min(180, Math.max(118, Math.floor(vh * 0.30)));
    iframeEl.style.width = w + "px";
    iframeEl.style.height = h + "px";
}

function change_TTS_Size(w,h){
    $("#GLOW_TTS_IFRAME").width(w);
    $("#GLOW_TTS_IFRAME").height(h);
}

function resizeMainFrameForCard(){
    var vw = window.innerWidth || document.documentElement.clientWidth || 460;
    var vh = window.innerHeight || document.documentElement.clientHeight || 360;
    var w = Math.min(460, Math.max(300, Math.floor(vw * 0.96)));
    var h = Math.min(620, Math.max(320, Math.floor(vh * 0.88)));
    change_TTS_Size(w, h);
}

function ensureMainFrameInViewport() {
    var iframeEl = document.querySelector("#GLOW_TTS_IFRAME");
    if (!iframeEl) return;
    var rect = iframeEl.getBoundingClientRect();
    var vw = window.innerWidth || document.documentElement.clientWidth || 460;
    var vh = window.innerHeight || document.documentElement.clientHeight || 360;
    var margin = 8;
    var left = rect.left;
    var top = rect.top;
    var maxLeft = Math.max(margin, vw - rect.width - margin);
    var maxTop = Math.max(margin, vh - rect.height - margin);
    left = Math.max(margin, Math.min(left, maxLeft));
    top = Math.max(margin, Math.min(top, maxTop));
    iframeEl.style.left = left + "px";
    iframeEl.style.top = top + "px";
    iframeEl.style.bottom = "unset";
    iframeEl.style.right = "unset";
}

function applyButtonPosition(iframeEl){
    var pos = GM_getValue(TTS_BUTTON_POS_KEY, null);
    if (pos && typeof pos.x === "number" && typeof pos.y === "number") {
        iframeEl.style.left = pos.x + "px";
        iframeEl.style.top = pos.y + "px";
        iframeEl.style.bottom = "unset";
        iframeEl.style.right = "unset";
    } else {
        iframeEl.style.left = "10px";
        iframeEl.style.bottom = "10%";
        iframeEl.style.top = "unset";
        iframeEl.style.right = "unset";
    }
}

function enableDragForButton(iframeEl){
    var pointerDown = false;
    var dragging = false;
    var startX = 0, startY = 0;
    var originX = 0, originY = 0;
    var moved = false;
    var pendingX = 0, pendingY = 0;
    var rafId = 0;
    var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document ? iframeEl.contentWindow.document : null;
    var prevUserSelect = "";
    var prevIframeUserSelect = "";

    function applyPosition(){
        rafId = 0;
        iframeEl.style.left = pendingX + "px";
        iframeEl.style.top = pendingY + "px";
    }

    function clamp(v, min, max){
        return Math.max(min, Math.min(max, v));
    }
    function getDragBounds(){
        var margin = 20; // 允许部分越界，保留可抓取区域
        var minX = -Math.max(0, iframeEl.offsetWidth - margin);
        var maxX = (window.innerWidth || document.documentElement.clientWidth) - margin;
        var minY = -Math.max(0, iframeEl.offsetHeight - margin);
        var maxY = (window.innerHeight || document.documentElement.clientHeight) - margin;
        return { minX: minX, maxX: maxX, minY: minY, maxY: maxY };
    }

    function toGlobalMousePoint(e, fromIframe){
        if (!fromIframe) return { x: e.clientX, y: e.clientY };
        var rect = iframeEl.getBoundingClientRect();
        return { x: rect.left + e.clientX, y: rect.top + e.clientY };
    }

    function toGlobalTouchPoint(touch, fromIframe){
        if (!fromIframe) return { x: touch.clientX, y: touch.clientY };
        var rect = iframeEl.getBoundingClientRect();
        return { x: rect.left + touch.clientX, y: rect.top + touch.clientY };
    }

    function beginPointer(clientX, clientY){
        pointerDown = true;
        dragging = false;
        TTS_DRAGGING = false;
        TTS_DRAG_MOVED = false;
        moved = false;
        startX = clientX;
        startY = clientY;
        var rect = iframeEl.getBoundingClientRect();
        originX = rect.left;
        originY = rect.top;
        iframeEl.style.bottom = "unset";
        iframeEl.style.right = "unset";
        iframeEl.style.transition = "none";
        prevUserSelect = document.documentElement.style.userSelect || "";
        document.documentElement.style.userSelect = "none";
        if (iframeDoc) {
            prevIframeUserSelect = iframeDoc.documentElement.style.userSelect || "";
            iframeDoc.documentElement.style.userSelect = "none";
        }
    }
    function onDown(e, opts, fromIframe){
        if (e.button !== undefined && e.button !== 0) return;
        var p = toGlobalMousePoint(e, !!fromIframe);
        beginPointer(p.x, p.y);
        document.addEventListener("mousemove", onMove, true);
        document.addEventListener("mouseup", onUp, true);
        if (!opts || opts.preventDefault !== false) {
            e.preventDefault();
        }
    }
    function moveByPoint(x, y){
        if (!pointerDown) return;
        var dx = x - startX;
        var dy = y - startY;
        if (!dragging && (Math.abs(dx) > 2 || Math.abs(dy) > 2)) {
            dragging = true;
            TTS_DRAGGING = true;
        }
        if (!dragging) return;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
            moved = true;
            TTS_DRAG_MOVED = true;
        }
        var bounds = getDragBounds();
        pendingX = clamp(originX + dx, bounds.minX, bounds.maxX);
        pendingY = clamp(originY + dy, bounds.minY, bounds.maxY);
        if (!rafId) {
            rafId = requestAnimationFrame(applyPosition);
        }
    }
    function onMove(e){
        moveByPoint(e.clientX, e.clientY);
    }
    function onIframeMove(e){
        var p = toGlobalMousePoint(e, true);
        moveByPoint(p.x, p.y);
    }
    function endPointer(){
        pointerDown = false;
        dragging = false;
        TTS_DRAGGING = false;
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = 0;
        }
        iframeEl.style.transition = "";
        document.documentElement.style.userSelect = prevUserSelect;
        if (iframeDoc) {
            iframeDoc.documentElement.style.userSelect = prevIframeUserSelect;
        }
    }
    function onUp(){
        if (!pointerDown) return;
        document.removeEventListener("mousemove", onMove, true);
        document.removeEventListener("mouseup", onUp, true);
        endPointer();
        if (moved) {
            GM_setValue(TTS_BUTTON_POS_KEY, {
                x: iframeEl.offsetLeft,
                y: iframeEl.offsetTop
            });
        }
    }

    iframeEl.addEventListener("mousedown", function(e){ onDown(e, null, false); });
    iframeEl.addEventListener("touchstart", function(e){
        var t = e.touches[0];
        if (!t) return;
        var p = toGlobalTouchPoint(t, false);
        beginPointer(p.x, p.y);
        document.addEventListener("touchmove", onTouchMove, { passive: false });
        document.addEventListener("touchend", onTouchEnd);
    }, { passive: true });

    function onIframeMouseDown(e){
        if (!e || !e.target) return;
        var isButton = e.target.closest && e.target.closest("#TTS_Button");
        var inCard = e.target.closest && e.target.closest("#TTS_Card");
        var interactive = e.target.closest && e.target.closest("input,button,a,label,.il,.span,.close,#card_close");
        var canDragCard = inCard && !interactive;
        if (isButton) {
            onDown(e, { preventDefault: false }, true);
        } else if (canDragCard) {
            onDown(e, null, true);
        }
    }
    function onIframeTouchStart(e){
        var t = e.touches && e.touches[0];
        if (!t) return;
        var isButton = e.target && e.target.closest && e.target.closest("#TTS_Button");
        var inCard = e.target && e.target.closest && e.target.closest("#TTS_Card");
        var interactive = e.target && e.target.closest && e.target.closest("input,button,a,label,.il,.span,.close,#card_close");
        var canDragCard = inCard && !interactive;
        if (isButton || canDragCard) {
            var p = toGlobalTouchPoint(t, true);
            beginPointer(p.x, p.y);
            document.addEventListener("touchmove", onTouchMove, { passive: false });
            document.addEventListener("touchend", onTouchEnd);
        }
    }

    if (iframeDoc) {
        iframeDoc.addEventListener("mousedown", onIframeMouseDown, true);
        iframeDoc.addEventListener("mouseup", onUp, true);
        iframeDoc.addEventListener("mousemove", onIframeMove, true);
        iframeDoc.addEventListener("touchstart", onIframeTouchStart, { passive: true, capture: true });
    }

    function onTouchMove(e){
        if (!pointerDown) return;
        var t = e.touches[0];
        if (!t) return;
        var p = toGlobalTouchPoint(t, false);
        moveByPoint(p.x, p.y);
        e.preventDefault();
    }
    function onIframeTouchMove(e){
        if (!pointerDown) return;
        var t = e.touches[0];
        if (!t) return;
        var p = toGlobalTouchPoint(t, true);
        moveByPoint(p.x, p.y);
        e.preventDefault();
    }
    function onTouchEnd(){
        if (!pointerDown) return;
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
        endPointer();
        if (moved) {
            GM_setValue(TTS_BUTTON_POS_KEY, {
                x: iframeEl.offsetLeft,
                y: iframeEl.offsetTop
            });
        }
    }

    if (iframeDoc) {
        iframeDoc.addEventListener("touchmove", onIframeTouchMove, { passive: false, capture: true });
        iframeDoc.addEventListener("touchend", onTouchEnd, true);
    }
}

function UIinit() {
    ensureCardPlaybackControls();
    TTS_GLOBAL.find('.span').css('color', '#2C3E50');
    TTS_GLOBAL.find('.span').each(function() {
        if (info.type == "baidu") {
            ShowBaiduCard();
            if ($(this).attr('aria-label') == BaiduTTS_info.person) {
                $(this).css('color', 'red');
            }
        } else if (info.type == "edge") {
            ShowEdgeCard();
            if ($(this).attr('aria-label') == EdgeTTS_info.person) {
                $(this).css('color', 'red');
            }
        }
    });
    if(TTS_GLOBAL.find("#baidu_speedlabel").length){
        TTS_GLOBAL.find("#baidu_speedlabel").text("\u8bed\u901f: " + BaiduTTS_info.speed);
        TTS_GLOBAL.find("#baidu_pitchlabel").text("\u97f3\u8c03: " + BaiduTTS_info.pitch);
        TTS_GLOBAL.find("#baidu_speed").val(BaiduTTS_info.speed);
        TTS_GLOBAL.find("#baidu_pitch").val(BaiduTTS_info.pitch);
    }
    if(TTS_GLOBAL.find("#edge_speedlabel").length){
        TTS_GLOBAL.find("#edge_speedlabel").text("语速: " + EdgeTTS_info.speed);
        TTS_GLOBAL.find("#edge_pitchlabel").text("音调: " + EdgeTTS_info.pitch);
        TTS_GLOBAL.find("#edge_speed").val(EdgeTTS_info.speed);
        TTS_GLOBAL.find("#edge_pitch").val(EdgeTTS_info.pitch);
    }
    refreshPlaybackUI();
}

function ensureCardPlaybackControls() {
    if (!TTS_GLOBAL || TTS_GLOBAL.find("#TTS_Card").length === 0) return;
    if (TTS_GLOBAL.find("#tts_status_line").length === 0) {
        TTS_GLOBAL.find("#TTS_Card .title").after('<div id="tts_status_line" class="tts-status-line">状态：已停止</div>');
    }
    TTS_GLOBAL.find(".more").text("更多设置");
    TTS_GLOBAL.find(".listen").text("试听当前音色");
    if (TTS_GLOBAL.find("#baidu_card .stop").length === 0) {
        TTS_GLOBAL.find("#baidu_card .others").append('<button class="stop" type="button">停止</button>');
    }
    if (TTS_GLOBAL.find("#edge_card .stop").length === 0) {
        TTS_GLOBAL.find("#edge_card .others").append('<button class="stop" type="button">停止</button>');
    }
}

function UIinit2(){
    if(setting.speech_type == "all_text"){
        TTS_MORE_GLOBAL.find("#c1").prop("checked",false);
    }else if(setting.speech_type == "next_text"){
        TTS_MORE_GLOBAL.find("#c1").prop("checked",true);
    }
}

function ShowBaiduCard() {
    TTS_GLOBAL.find("#baidu_card").show();
    TTS_GLOBAL.find("#edge_card").hide();
    TTS_GLOBAL.find("#about_card").hide();
    TTS_GLOBAL.find("#baidu").css("border-bottom", "2px solid #F00");
    TTS_GLOBAL.find("#edge").css("border-bottom", "");
    TTS_GLOBAL.find("#about").css("border-bottom", "");
}

function ShowEdgeCard() {
    TTS_GLOBAL.find("#baidu_card").hide();
    TTS_GLOBAL.find("#edge_card").show();
    TTS_GLOBAL.find("#about_card").hide();
    TTS_GLOBAL.find("#baidu").css("border-bottom", "");
    TTS_GLOBAL.find("#edge").css("border-bottom", "2px solid #F00");
    TTS_GLOBAL.find("#about").css("border-bottom", "");
}

function ShowAboutCard() {
    TTS_GLOBAL.find("#baidu_card").hide();
    TTS_GLOBAL.find("#edge_card").hide();
    TTS_GLOBAL.find("#about_card").show();
    TTS_GLOBAL.find("#baidu").css("border-bottom", "");
    TTS_GLOBAL.find("#edge").css("border-bottom", "");
    TTS_GLOBAL.find("#about").css("border-bottom", "2px solid #F00");
}

function rebind() {
    // Baidu TTS 事件
    TTS_GLOBAL.find("#baidu_speed").change(function() {
        var speedValue = $(this).val();
        TTS_GLOBAL.find("#baidu_speedlabel").text("\u8bed\u901f: " + speedValue);
        BaiduTTS_info.speed = speedValue;
    });
    TTS_GLOBAL.find("#baidu_pitch").change(function() {
        var pitchValue = $(this).val();
        TTS_GLOBAL.find("#baidu_pitchlabel").text("\u97f3\u8c03: " + pitchValue);
        BaiduTTS_info.pitch = pitchValue;
    });
    // Edge TTS 事件
    TTS_GLOBAL.find("#edge_speed").change(function() {
        var speedValue = $(this).val();
        TTS_GLOBAL.find("#edge_speedlabel").text("语速: " + speedValue);
        EdgeTTS_info.speed = parseFloat(speedValue);
    });
    TTS_GLOBAL.find("#edge_pitch").change(function() {
        var pitchValue = $(this).val();
        TTS_GLOBAL.find("#edge_pitchlabel").text("音调: " + pitchValue);
        EdgeTTS_info.pitch = parseInt(pitchValue);
    });
    // 语音选择事件
    TTS_GLOBAL.find('.span').on('click', function(e) {
        TTS_GLOBAL.find('.span').css('color', '#2C3E50');
        TTS_GLOBAL.find(this).css('color', 'red');
        var id = $(this).parent().parent().parent().attr('id');
        if (id == "baidu_card") {
            BaiduTTS_info.person = $(this).attr('aria-label');
            info.type = "baidu";
        } else if (id == "edge_card") {
            EdgeTTS_info.person = $(this).attr('aria-label');
            info.type = "edge";
        }
    });
    TTS_GLOBAL.find(".more").click(function() {
        Show_more_card();
    });
    TTS_GLOBAL.find(".listen").click(function() {
        if (PLAYBACK_STATE === "playing" || PLAYBACK_STATE === "loading" || PLAYBACK_STATE === "paused") {
            return;
        }
        TryListen();
    });
    TTS_GLOBAL.find(".stop").click(function() {
        stopCurrentPlayback();
    });
    TTS_GLOBAL.find("#card_close").click(function() {
        setViewMode("mini");
        voice_setting();
});
    TTS_GLOBAL.find("#baidu").click(function() {
        ShowBaiduCard();
    });
    TTS_GLOBAL.find("#edge").click(function() {
        ShowEdgeCard();
    });
    TTS_GLOBAL.find("#about").click(function() {
        ShowAboutCard();
    });
}

function rebind2(){
    TTS_MORE_GLOBAL.find("#c1").click(function() {
        if($(this).prop("checked")){
            setting.speech_type = "next_text";
        }else{
            setting.speech_type = "all_text";
        }
    });
    TTS_MORE_GLOBAL.find("#card_close").click(function() {
        $("#GLOW_TTS_MORE").remove();
        voice_setting();
    });
}

function ShowCard() {
    setViewMode("card");
}

function renderMainCardHtml() {
    return `<div class="TTS_Card" id="TTS_Card">
        <div class="close" id="card_close">
            <svg viewBox="0 0 100 100"><path d="M2 2 L98 98 M 98 2 L2 98Z" stroke-width="10px" stroke="#969696" stroke-linecap="round"></path></svg>
        </div>
        <div class="title">
            <div class="title_text">追光朗读TTS</div>
            <div class="TTS_Change">
                <div id="edge" tabindex="1" class="il">Edge</div>
                <div id="baidu" tabindex="2" class="il">百度</div>
                <div id="about" tabindex="3" class="il">关于</div>
            </div>
        </div>
        <div class="card">
            <div class="setting" id="baidu_card">
                <div class="row"><div class="col">
                    <div class="span" aria-label="4003">度逍遥</div><div class="span" aria-label="4115">度小贤</div><div class="span" aria-label="4119">度小鹿</div><div class="span" aria-label="4100">度小雯</div><div class="span" aria-label="4106">度博文</div><div class="span" aria-label="4103">度米朵</div>
                </div></div>
                <div class="setting_down">
                    <div class="setting_sp">
                        <div class="speech_set"><label for="speed" id="baidu_speedlabel">语速: 5</label><div class="slider"><input type="range" id="baidu_speed" name="speed" min="0" max="15" value="5" class="slider__input" data-bi-id="demo-rate-slider" aria-label="语速"></div></div>
                        <div class="speech_set"><label for="pitch" id="baidu_pitchlabel">音调: 5</label><div class="slider"><input type="range" id="baidu_pitch" name="pitch" min="0" max="15" value="5" class="slider__input" data-bi-id="demo-pitch-slider" aria-label="音调"></div></div>
                    </div>
                    <div class="others"><div class="others-main"><button class="more" type="button">更多</button></div><button class="listen" type="button">试听</button></div>
                </div>
            </div>
            <div class="setting tts-hidden" id="edge_card">
                <div class="row"><div class="col">
                    <div class="span" aria-label="zh-CN-XiaoxiaoNeural">晓晓(女)</div><div class="span" aria-label="zh-CN-YunxiNeural">云希(男)</div><div class="span" aria-label="zh-CN-YunjianNeural">云健(男)</div><div class="span" aria-label="zh-TW-HsiaoChenNeural">台湾小陈</div><div class="span" aria-label="zh-HK-HiuMaanNeural">香港晓曼</div>
                </div></div>
                <div class="setting_down">
                    <div class="setting_sp">
                        <div class="speech_set"><label for="speed" id="edge_speedlabel">语速: 1.0</label><div class="slider"><input type="range" id="edge_speed" name="speed" min="0.5" max="2.0" step="0.1" value="1.0" class="slider__input" aria-label="语速"></div></div>
                        <div class="speech_set"><label for="pitch" id="edge_pitchlabel">音调: 0</label><div class="slider"><input type="range" id="edge_pitch" name="pitch" min="-100" max="100" step="1" value="0" class="slider__input" aria-label="音调"></div></div>
                    </div>
                    <div class="others"><div class="others-main"><button class="more" type="button">更多</button></div><button class="listen" type="button">试听</button></div>
                </div>
            </div>
            <div class="setting tts-hidden" id="about_card">
                <div class="about-title">追光朗读 版本${String(version).replace(/版$/, "")} 由 <a href="https://x.com/jameszz343698" target="_blank" rel="noopener noreferrer">GlowJames</a> 支持</div>
            </div>
        </div>
    </div>`;
}

function setViewMode(mode) {
    if (!TTS_GLOBAL) return false;
    if (mode !== "mini" && mode !== "card") return false;
    if (VIEW_MODE === mode) return true;

    if (mode === "mini") {
        TTS_GLOBAL.find("#TTS_Card").remove();
        change_TTS_Size(70,60);
        if (MINI_VIEW_POS && typeof MINI_VIEW_POS.x === "number" && typeof MINI_VIEW_POS.y === "number") {
            var iframeMini = document.querySelector("#GLOW_TTS_IFRAME");
            if (iframeMini) {
                iframeMini.style.left = MINI_VIEW_POS.x + "px";
                iframeMini.style.top = MINI_VIEW_POS.y + "px";
                iframeMini.style.bottom = "unset";
                iframeMini.style.right = "unset";
                GM_setValue(TTS_BUTTON_POS_KEY, { x: MINI_VIEW_POS.x, y: MINI_VIEW_POS.y });
            }
        }
        ensureMainFrameInViewport();
        TTS_GLOBAL.find(".div").show();
        VIEW_MODE = "mini";
        return true;
    }

    if (VIEW_MODE === "mini") {
        var iframeCard = document.querySelector("#GLOW_TTS_IFRAME");
        if (iframeCard) {
            var rect = iframeCard.getBoundingClientRect();
            MINI_VIEW_POS = { x: rect.left, y: rect.top };
        }
    }
    resizeMainFrameForCard();
    ensureMainFrameInViewport();
    if (TTS_GLOBAL.find("#TTS_Card").length === 0) {
        TTS_GLOBAL.find("body").append(renderMainCardHtml());
    }
    if (TTS_GLOBAL.find("#TTS_Card").length === 0) {
        setViewMode("mini");
        return false;
    }
    TTS_GLOBAL.find(".div").hide();
    applyModernMainStyle($("#GLOW_TTS_IFRAME")[0].contentWindow.document);
    UIinit();
    ensureCardPlaybackControls();
    refreshPlaybackUI();
    rebind();
    VIEW_MODE = "card";

    if (!TTS_RESIZE_BOUND) {
        TTS_RESIZE_BOUND = true;
        window.addEventListener("resize", function() {
            if (VIEW_MODE === "card" && TTS_GLOBAL && TTS_GLOBAL.find("#TTS_Card").length > 0) {
                resizeMainFrameForCard();
                ensureMainFrameInViewport();
            }
        });
    }
    return true;
}

function Show_more_card(){
    if(!document.querySelector("#GLOW_TTS_MORE")){
        var a = document.createElement('div');
        a.setAttribute("id","GLOW_TTS_MORE");
        document.body.appendChild(a);
        var b = document.createElement('iframe');
        b.setAttribute("id","GLOW_TTS_MORE_IFRAME");
        b.setAttribute("title","GLOW_TTS_MORE_IFRAME");
        b.style.cssText = "position: fixed;display: block;border-radius: 12px;border: unset; scrolling:no;left: 50%;top: 50%;z-index: 10001;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);transform: translate(-50%, -50%);background-color: transparent;";
        a.appendChild(b);
        let CARD = `<div class="card"><div class="title"><div class="title_text">TTS 高级设置</div><div class="close" id="card_close"><svg viewBox="0 0 100 100"><path d="M2 2 L98 98 M 98 2 L2 98Z" stroke-width="10px" stroke="#969696" stroke-linecap="round"></path></svg></div></div><div class="line"><div class="info">从选中位置开始朗读</div><div class="click"><input type="checkbox" name="checkbox" id="c1" class="chooseBtn" /><label for="c1" class="choose-label"></label></div></div></div>`;
        $($("#GLOW_TTS_MORE_IFRAME")[0].contentWindow.document).find("body").append(CARD);
    }
    var _TTS_ = document.querySelector("#GLOW_TTS_MORE_IFRAME");
    resizeMoreFrame();
    if (!TTS_MORE_RESIZE_BOUND) {
        TTS_MORE_RESIZE_BOUND = true;
        window.addEventListener("resize", function() {
            if (document.querySelector("#GLOW_TTS_MORE_IFRAME")) {
                resizeMoreFrame();
            }
        });
    }
    TTS_MORE_GLOBAL = $($("#GLOW_TTS_MORE_IFRAME")[0].contentWindow.document);
    applyModernMoreStyle(_TTS_.contentWindow.document);
    UIinit2();
    rebind2();
}

function Get_InnerText(){
    var text = document.body.innerText;
    text = escapeHtml(text);
    text = cleanHtml(text);
    text = text.replace(/<[^<>]+>/g,"");
    //console.log(text);
    return text;
}
function escapeHtml(String) {
    return String.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function cleanHtml(String){
    let s_a = /<script[^<>]*>/g;
    let s_b = /<\/script>/g;
    var text = "";
    text = String.split(s_a)[0];
    for (var i = 1; i < String.split(s_a).length; i++) {
        var a = String.split(s_a)[i];a=a.split(s_b)[1];
        text+=a;
    }
    //console.log(text);
    return text;
}

function init(){
    var audio = getAudioEl();
    if(!audio){
        audio = document.createElement('audio');
        audio.setAttribute("id","GLOW_TTS");
        audio.setAttribute("hidden","true");
        document.body.appendChild(audio);
    }
    if (!PLAYBACK_EVENTS_BOUND) {
        PLAYBACK_EVENTS_BOUND = true;
        audio.addEventListener('playing', function () {
            applyPlaybackState("playing", "");
        }, false);
        audio.addEventListener('pause', function () {
            if (!audio.ended && PLAYBACK_STATE !== "idle") {
                applyPlaybackState("paused", PLAYBACK_USER_PAUSED ? "手动暂停" : "系统中断");
            }
        }, false);
        audio.addEventListener('waiting', function () {
            if (PLAYBACK_STATE === "playing") applyPlaybackState("loading", "缓冲中");
        }, false);
        audio.addEventListener('stalled', function () {
            if (PLAYBACK_STATE === "playing") applyPlaybackState("loading", "网络波动");
        }, false);
        audio.addEventListener('error', function () {
            applyPlaybackState("error", "音频播放失败");
        }, false);
        audio.addEventListener('ended', function () {
            if (info.type == "baidu") {
                BaiduTTS_info.status = false;
                if(Global_TEXT.length != 0){
                    applyPlaybackState("loading", "继续下一段");
                    BaiduTTS(Global_TEXT);
                    return;
                }
            } else if (info.type == "edge") {
                EdgeTTS_info.status = false;
                if (EdgeQueue.active) {
                    applyPlaybackState("loading", "继续下一段");
                    playNextFromQueue();
                    if (EdgeQueue.active) {
                        return;
                    }
                } else if(Global_TEXT.length != 0){
                    applyPlaybackState("loading", "继续下一段");
                    EdgeTTS(Global_TEXT);
                    return;
                }
            }
            applyPlaybackState("idle", "");
        }, false);
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                if (PLAYBACK_STATE === "playing") {
                    pauseCurrentPlayback(false);
                }
            } else {
                refreshPlaybackUI();
            }
        }, false);
        window.addEventListener("pagehide", function () {
            if (PLAYBACK_STATE === "playing") {
                pauseCurrentPlayback(false);
            }
        }, false);
        window.addEventListener("pageshow", function () {
            refreshPlaybackUI();
        }, false);
    }
}

function stopCurrentPlayback() {
    var a = document.getElementById('GLOW_TTS');
    if (a) {
        a.pause();
        a.removeAttribute("src");
        try { a.load(); } catch (e) {}
    }
    Global_TEXT = "";
    EdgeQueue.active = false;
    EdgeQueue.paused = false;
    EdgeQueue.segments = [];
    EdgeQueue.buffers = {};
    EdgeQueue.playIndex = 0;
    EdgeQueue.fetchIndex = 0;
    EdgeQueue.inflight = 0;
    EdgeQueue.downloading = false;
    if (EdgeQueue.prefetchTimer) {
        clearTimeout(EdgeQueue.prefetchTimer);
        EdgeQueue.prefetchTimer = 0;
    }
    BaiduTTS_info.status = false;
    EdgeTTS_info.status = false;
    applyPlaybackState("idle", "");
}

function play(data){
    $(document).ready(function() {
        applyPlaybackState("loading", "准备播放");
        toPlay(data);
    });
}

function toPlay(data){
    var audioBlob = toBlob(data);
    var blobUrl = window.URL.createObjectURL(audioBlob);
    document.getElementById('GLOW_TTS').src = blobUrl;
    var audio = document.getElementById('GLOW_TTS');
    var p = audio.play();
    if (p && p.catch) {
        p.catch(function () {
            applyPlaybackState("error", "播放被阻止");
        });
    }
}

function toBlob(dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}

function icon_change(type){
    if(!TTS_GLOBAL) return;
    if(type=="play"){
        TTS_GLOBAL.find("#icon-start").hide();
        TTS_GLOBAL.find("#icon-paused").hide();
        TTS_GLOBAL.find("#icon-playing").show();
    }else if(type=="paused"){
        TTS_GLOBAL.find("#icon-start").hide();
        TTS_GLOBAL.find("#icon-playing").hide();
        TTS_GLOBAL.find("#icon-paused").show();
    }else if(type=="end" || type=="init"){
        TTS_GLOBAL.find("#icon-start").show();
        TTS_GLOBAL.find("#icon-playing").hide();
        TTS_GLOBAL.find("#icon-paused").hide();
    }
}

function BaiduTTS(TEXT){
    applyPlaybackState("loading", "请求百度音频");
    var str = TEXT;
    var slen = 150;
    var elen = 200;
    var len = elen;
    var _a = str.slice(slen,elen);
    if(_a.indexOf("。")!=-1){
        len = slen + _a.indexOf("。") + 1;
        Global_TEXT = str.slice(len,TEXT.length);
    }else{
        Global_TEXT = str.slice(len,TEXT.length);
    }
    var BaiduTTS_postdata = "type=tns&per="+BaiduTTS_info.person+"&spd="+BaiduTTS_info.speed+"&pit="+BaiduTTS_info.pitch+"&vol=5&aue=6&tex="+encodeURIComponent(str.slice(0,len));
    GM_xmlhttpRequest({
        url:"https://ai.baidu.com/aidemo",
        method :"POST",
        data:BaiduTTS_postdata,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29',
            'Referer': 'https://ai.baidu.com/tech/speech/tts_online'
        },
        onload:function(r){
            //console.log(r.responseText);
            let result = JSON.parse(r.responseText);
            if(result.errno=="0"){
                BAIDU_SENSITIVE_RETRY = false;
                play(result.data);
            }else if(result.errno=="110"){
                if(!BAIDU_SENSITIVE_RETRY){
                    BAIDU_SENSITIVE_RETRY = true;
                    applyPlaybackState("loading", "敏感词提示");
                    BaiduTTS("当前文本中可能存在敏感内容，百度TTS已拒绝了该请求");
                }else{
                    BAIDU_SENSITIVE_RETRY = false;
                    applyPlaybackState("error", "敏感词拦截");
                }
            }
            else{
                BAIDU_SENSITIVE_RETRY = false;
                console.log("请求失败:"+r.responseText);
                applyPlaybackState("error", "百度请求失败");
            }
        }
    });
}

// Edge TTS - 使用 Microsoft Edge TTS 引擎
async function EdgeTTS(TEXT) {
    var segments = buildEdgeSegments(TEXT);
    applyPlaybackState("loading", "请求Edge音频");
    Global_TEXT = "";

    try {
        startEdgeQueue(segments);
    } catch (e) {
        console.error("EdgeTTS错误:", e);
        applyPlaybackState("error", "Edge请求失败");
    }
}

function buildEdgeSegments(TEXT) {
    var segments = [];
    var str = TEXT;
    var slen = 450;
    var elen = 650;
    while (str.length > 0) {
        var len = Math.min(elen, str.length);
        if (str.length > elen) {
            var _a = str.slice(slen, elen);
            if (_a.indexOf("。") != -1) {
                len = slen + _a.indexOf("。") + 1;
            }
        }
        segments.push(str.slice(0, len));
        str = str.slice(len);
    }
    return segments;
}

function startEdgeQueue(segments) {
    EdgeQueue.active = true;
    EdgeQueue.paused = false;
    EdgeQueue.segments = segments;
    EdgeQueue.buffers = {};
    EdgeQueue.playIndex = 0;
    EdgeQueue.fetchIndex = 0;
    EdgeQueue.inflight = 0;
    EdgeQueue.downloading = false;
    if (EdgeQueue.prefetchTimer) {
        clearTimeout(EdgeQueue.prefetchTimer);
        EdgeQueue.prefetchTimer = 0;
    }
    fetchNextEdgeSegment();
    playNextFromQueue();
}

function estimateEdgeSegmentDurationMs(segText) {
    var pure = (segText || "").replace(/\s+/g, "");
    var len = pure.length;
    var cps = Math.max(3, 6.5 * EdgeTTS_info.speed);
    var ms = Math.round((len / cps) * 1000);
    return Math.max(1200, Math.min(ms, 25000));
}

function scheduleEdgePrefetch(delayMs) {
    if (!EdgeQueue.active || EdgeQueue.paused) return;
    if (EdgeQueue.prefetchTimer) {
        clearTimeout(EdgeQueue.prefetchTimer);
        EdgeQueue.prefetchTimer = 0;
    }
    var wait = Math.max(0, delayMs || 0);
    EdgeQueue.prefetchTimer = setTimeout(function() {
        EdgeQueue.prefetchTimer = 0;
        fetchNextEdgeSegment();
    }, wait);
}

function fetchNextEdgeSegment() {
    if (!EdgeQueue.active || EdgeQueue.paused || EdgeQueue.downloading) return;
    if (EdgeQueue.fetchIndex >= EdgeQueue.segments.length) return;
    var idx = EdgeQueue.fetchIndex;
    if (EdgeQueue.buffers[idx]) {
        EdgeQueue.fetchIndex = idx + 1;
        fetchNextEdgeSegment();
        return;
    }
    EdgeQueue.downloading = true;
    EdgeQueue.inflight = 1;
    fetchEdgeAudio(EdgeQueue.segments[idx]).then(function (buf) {
        if (!EdgeQueue.active) return;
        EdgeQueue.buffers[idx] = buf;
        EdgeQueue.fetchIndex = idx + 1;
        if (!EdgeQueue.paused && idx === EdgeQueue.playIndex) {
            playNextFromQueue();
        }
    }).catch(function (e) {
        console.error("EdgeTTS分段获取失败:", e);
        if (!EdgeQueue.active) return;
        EdgeQueue.fetchIndex = idx + 1;
    }).finally(function () {
        EdgeQueue.downloading = false;
        EdgeQueue.inflight = 0;
    });
}

function playNextFromQueue() {
    if (!EdgeQueue.active || EdgeQueue.paused) return;
    if (EdgeQueue.playIndex >= EdgeQueue.segments.length) {
        EdgeQueue.active = false;
        applyPlaybackState("idle", "");
        return;
    }
    const audio = document.getElementById('GLOW_TTS');
    if (audio && !audio.paused) {
        return;
    }
    if (EdgeQueue.fetchIndex <= EdgeQueue.playIndex && !EdgeQueue.downloading) {
        fetchNextEdgeSegment();
    }
    const currentIndex = EdgeQueue.playIndex;
    const buf = EdgeQueue.buffers[currentIndex];
    if (!buf) {
        return;
    }
    const blob = new Blob([buf], { type: "audio/mpeg" });
    delete EdgeQueue.buffers[currentIndex];
    EdgeQueue.playIndex = currentIndex + 1;
    playBlob(blob);
    if (EdgeQueue.playIndex < EdgeQueue.segments.length) {
        var dur = estimateEdgeSegmentDurationMs(EdgeQueue.segments[currentIndex]);
        scheduleEdgePrefetch(Math.max(0, dur - EdgeQueue.prefetchLeadMs));
    }
}

async function fetchEdgeAudio(TEXT_seg) {
    const payload = {
        input: TEXT_seg,
        voice: EdgeTTS_info.person,
        response_format: "mp3",
        speed: EdgeTTS_info.speed,
        stream_format: EDGE_STREAM_FORMAT
    };
    const headers = {
        "Content-Type": "application/json"
    };
    if (EDGE_TTS_API_KEY) {
        headers["Authorization"] = "Bearer " + EDGE_TTS_API_KEY;
    }

    const resp = await fetch(EDGE_TTS_PROXY, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    });
    if (!resp.ok) {
        throw new Error("Edge TTS proxy failed: " + resp.status);
    }

    const ct = resp.headers.get("Content-Type") || "";
    const isSSE = ct.indexOf("text/event-stream") !== -1;
    if (EDGE_STREAM_FORMAT === "sse" && resp.body && isSSE) {
        const bytes = await collectSSEAudio(resp);
        return bytes.buffer;
    }
    return await resp.arrayBuffer();
}

async function collectSSEAudio(resp) {
    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    const chunks = [];
    while (true) {
        const res = await reader.read();
        if (res.done) break;
        buffer += decoder.decode(res.value, { stream: true });
        const lines = buffer.split(/\r?\n/);
        buffer = lines.pop() || "";
        for (var i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (!line.startsWith("data:")) continue;
            const payload = line.slice(5).trim();
            if (!payload) continue;
            if (payload === "[DONE]") continue;
            let msg;
            try { msg = JSON.parse(payload); } catch (e) { continue; }
            if (msg.type === "speech.audio.delta" && msg.audio) {
                chunks.push(base64ToUint8Array(msg.audio));
            }
        }
    }
    return concatUint8Arrays(chunks);
}

function base64ToUint8Array(b64) {
    const binary = atob(b64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}

function concatUint8Arrays(chunks) {
    let total = 0;
    for (let i = 0; i < chunks.length; i++) total += chunks[i].length;
    const out = new Uint8Array(total);
    let offset = 0;
    for (let i = 0; i < chunks.length; i++) {
        out.set(chunks[i], offset);
        offset += chunks[i].length;
    }
    return out;
}

function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

// 播放Blob音频
function playBlob(blob){
    const audioUrl = URL.createObjectURL(blob);
    const audio = document.getElementById('GLOW_TTS');
    if(audio){
        audio.src = audioUrl;
        applyPlaybackState("loading", "准备播放");
        audio.play().catch(e => {
            console.error("播放失败:", e);
            applyPlaybackState("error", "播放失败");
        });
    }
}

function TryListen(){
    init();
    if (PLAYBACK_STATE === "playing" || PLAYBACK_STATE === "loading" || PLAYBACK_STATE === "paused") {
        return;
    }
    let TEXT = "测试成功! 当前版本为 "+version+"。很高兴与你相遇!";
    applyPlaybackState("loading", "试听中");
    if (info.type == "baidu") {
        BaiduTTS(TEXT);
    } else if (info.type == "edge") {
        EdgeTTS(TEXT);
    }
}

function init_voice_setting(){
    var Info_ALL = [BaiduTTS_info, EdgeTTS_info, info, setting];
    if(GM_getValue("GLOW_TTS_voice_info") == null){
        GM_setValue("GLOW_TTS_voice_info", Info_ALL);
    }else{
        Info_ALL = GM_getValue("GLOW_TTS_voice_info");
        BaiduTTS_info = Info_ALL[0];
        EdgeTTS_info = Info_ALL[1];
        if (Info_ALL.length >= 5) {
            info = Info_ALL[3];
            setting = Info_ALL[4];
        } else {
            info = Info_ALL[2];
            setting = Info_ALL[3];
        }
        if (info.type !== "baidu" && info.type !== "edge") {
            info.type = "edge";
        }
    }
    BaiduTTS_info.status = false;
    EdgeTTS_info.status = false;
}

function voice_setting(){
    var Info_ALL = [BaiduTTS_info, EdgeTTS_info, info, setting];
    GM_setValue("GLOW_TTS_voice_info", Info_ALL);
}
