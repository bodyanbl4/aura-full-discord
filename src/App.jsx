import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, onSnapshot, addDoc, updateDoc, deleteDoc, query, where, arrayUnion, arrayRemove, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import {
  AlertTriangle, Zap, Search, Globe, MessageCircle, Phone, PhoneIncoming,
  PhoneForwarded, PhoneCall, ChevronLeft, Video, Info, Pin, X, Check,
  CheckCheck, File as FileIcon, Download, RefreshCw, Paperclip, Send,
  Camera, Mic, Image as ImageIcon, Music, Play, Pause, Settings, Eraser,
  MicOff as MicMute, Monitor, PhoneOff, Trash, Trash2, Reply, Edit3, Bell, Minimize, Maximize, Volume2, Activity,
  Users, UserPlus, UserCheck, UserX, Headphones, Save
} from 'lucide-react';

const firebaseConfig = {
  apiKey: "AIzaSyBI5cMQ-zwjU1s4je2zzqBPpepSfBy0mKg",
  authDomain: "aura-748c8.firebaseapp.com",
  projectId: "aura-748c8",
  storageBucket: "aura-748c8.firebasestorage.app",
  messagingSenderId: "654947850743",
  appId: "1:654947850743:web:91991c4c3d818ed20f36f2",
  measurementId: "G-9X9QMW22Z1"
};

const appId = 'aura-pro-v28';
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// НОВЫЕ КОЛЛЕКЦИИ (Для полного обнуления базы)
const USERS_COL = 'aura_users_v3';
const MESSAGES_COL = 'aura_messages_v3';
const CALLS_COL = 'aura_calls_v3';
const SERVERS_COL = 'aura_servers_v3';

// ЗВУКИ ЧЕРЕЗ WEB AUDIO API — синтетические аналоги звуков Discord
// Аккуратные двухтоновые цепочки, чтобы не дребезжало и звучало похоже на UI Discord.
const _audioCtx = (() => {
  let ctx = null;
  return () => {
    if (typeof window === 'undefined') return null;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) ctx = new AC();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  };
})();

const _playBlip = (ctx, freq, startAt, duration = 0.08, peakGain = 0.18, oscType = 'sine') => {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = oscType;
  osc.frequency.setValueAtTime(freq, startAt);
  // Быстрый attack + плавный release — приятный "клик" вместо щелчка.
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(peakGain, startAt + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startAt);
  osc.stop(startAt + duration + 0.02);
};

const playTone = (type) => {
  try {
    const ctx = _audioCtx();
    if (!ctx) return;
    const t = ctx.currentTime;
    if (type === 'join') {
      // Подключение к голосовому: два восходящих тона (D5 -> A5).
      _playBlip(ctx, 587.33, t,        0.10, 0.14, 'triangle');
      _playBlip(ctx, 880.00, t + 0.10, 0.13, 0.14, 'triangle');
    } else if (type === 'leave') {
      // Отключение: два нисходящих тона (A5 -> D5).
      _playBlip(ctx, 880.00, t,        0.10, 0.14, 'triangle');
      _playBlip(ctx, 587.33, t + 0.10, 0.13, 0.14, 'triangle');
    } else if (type === 'mute') {
      // Микрофон выключен: короткий низкий клик.
      _playBlip(ctx, 320, t, 0.07, 0.16, 'sine');
    } else if (type === 'unmute') {
      // Микрофон включен: короткий высокий клик.
      _playBlip(ctx, 720, t, 0.07, 0.16, 'sine');
    } else {
      // Универсальный лёгкий "пинг" для уведомлений и т.п.
      _playBlip(ctx, 880, t,        0.06, 0.10, 'sine');
      _playBlip(ctx, 660, t + 0.06, 0.08, 0.10, 'sine');
    }
  } catch (e) {}
};

const RTC_SERVERS = {
  iceServers: [
    { urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] },
    { urls: 'turn:openrelay.metered.ca:80', username: 'openrelayproject', credential: 'openrelayproject' }
  ]
};

// Ключ участника в speakingUsers / groupRemoteStreams — обычный username.
const getCleanPeerId = (_callId, username) => username;

// БЕЗОПАСНЫЙ РЕНДЕР: Защищает React от падения, если вместо строки прилетает объект
const safeText = (val) => {
  if (val == null) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'number' || typeof val === 'boolean') return String(val);
  if (typeof val === 'object') {
    if (val.text) return safeText(val.text);
    if (val.name) return safeText(val.name);
    if (val.message) return safeText(val.message);
  }
  return '[Объект]';
};

const safeReaction = (val) => {
  if (typeof val === 'string') return val;
  if (val && typeof val === 'object' && val.reaction) return val.reaction;
  return '';
};

const compressImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_SIZE = 800;
        let w = img.width, h = img.height;
        if (w > h && w > MAX_SIZE) { h *= MAX_SIZE / w; w = MAX_SIZE; }
        else if (h > MAX_SIZE) { w *= MAX_SIZE / h; h = MAX_SIZE; }
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.6));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};

const getAuraStyles = (theme) => {
  const isDark = theme === 'dark' || theme === 'mirror';
  const isMirror = theme === 'mirror';
  const isLight = theme === 'light';
  return `
  :root { 
    --aura-red: #5865F2; 
    --aura-red-glow: rgba(88, 101, 242, 0.4);
    --bg-main: ${isMirror ? '#000000' : (isDark ? '#0A0A0C' : '#F2F2F7')};
    --bg-side: ${isMirror ? 'rgba(15,15,20,0.8)' : (isDark ? '#121214' : '#FFFFFF')};
    --bg-card: ${isMirror ? 'rgba(25,25,30,0.7)' : (isDark ? '#1C1C22' : '#FFFFFF')};
    --text-main: ${isLight ? '#000000' : '#FFFFFF'};
    --text-sec: #8E8E93;
    --border: ${isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)'};
    --nav-bg: ${isMirror ? 'rgba(0,0,0,0.75)' : (isDark ? 'rgba(17,17,21,0.95)' : 'rgba(255,255,255,0.95)')};
    --glass: blur(25px) saturate(180%);
    
    --bubble-me: #5865F2; 
    --bubble-me-text: #FFFFFF;
    --bubble-other: ${isDark ? '#1C1C1E' : '#FFFFFF'};
    --bubble-other-text: ${isDark ? '#FFFFFF' : '#000000'};
  }
  
  * { box-sizing: border-box; margin: 0; padding: 0; outline: none; -webkit-tap-highlight-color: transparent; }
  
  body, html { 
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif; 
    background: var(--bg-main); color: var(--text-main); 
    overflow: hidden; height: 100vh; width: 100vw;
    position: fixed; inset: 0; overscroll-behavior: none; 
    user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;
  }
  
  button { appearance: none !important; -webkit-appearance: none !important; background: transparent; border: none; cursor: pointer; transition: 0.2s; color: inherit; font-family: inherit; }
  input, textarea, select { appearance: none !important; -webkit-appearance: none !important; font-family: inherit; background: transparent; border: none; color: inherit; outline: none; user-select: text; -webkit-user-select: text; }
  
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-thumb { background: rgba(150,150,150,0.3); border-radius: 10px; }
  
  .aura-viewport { display: flex; width: 100vw; height: 100vh; overflow: hidden; background: var(--bg-main); justify-content: center; position: relative; }
  
  .auth-overlay { position: absolute; inset: 0; background: #050505; display: flex; align-items: center; justify-content: center; z-index: 100000; }
  .auth-card { background: var(--bg-card); border: 1px solid var(--border); padding: 40px; border-radius: 30px; width: 90%; max-width: 380px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.8); animation: fadeUp 0.4s ease; }
  @keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
  
  .app-container { display: flex; width: 100%; height: 100%; background: var(--bg-main); position: relative; }
  .sidebar { width: 340px; height: 100%; background: var(--bg-side); border-right: 1px solid var(--border); display: flex; flex-direction: row; flex-shrink: 0; z-index: 100; transition: 0.3s; }
  .main-stage { flex: 1; height: 100%; display: flex; justify-content: center; background: var(--bg-main); position: relative; }
  .chat-wrapper { flex: 1; display: flex; flex-direction: column; height: 100%; background: var(--bg-main); position: relative; border-left: 1px solid var(--border); border-right: 1px solid var(--border); animation: fadeIn 0.3s ease; }
  .media-panel { width: 320px; background: var(--bg-side); border-left: 1px solid var(--border); display: flex; flex-direction: column; z-index: 90; animation: slideLeft 0.3s ease; }
  @keyframes slideLeft { from { transform: translateX(100%); } to { transform: translateX(0); } }
  
  @media (max-width: 800px) {
    .sidebar { width: 100%; position: absolute; left: 0; top: 0; }
    .sidebar.hide { transform: translateX(-100%); }
    .main-stage { width: 100%; position: absolute; left: 0; top: 0; z-index: 200; }
    .main-stage.hide { transform: translateX(100%); }
    .chat-wrapper { border: none; }
    .media-panel { position: absolute; right: 0; top: 0; height: 100%; z-index: 300; }
  }
  
  .nav-bar { 
    height: calc(65px + env(safe-area-inset-top)); 
    padding: env(safe-area-inset-top) 20px 0 20px; 
    display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); background: var(--nav-bg); backdrop-filter: var(--glass); z-index: 10; flex-shrink: 0; 
  }
  .tab-bar { 
    height: calc(60px + env(safe-area-inset-bottom)); 
    padding-bottom: calc(15px + env(safe-area-inset-bottom)); 
    border-top: 1px solid var(--border); display: flex; justify-content: space-around; background: var(--bg-side); flex-shrink: 0; 
  }
  .chat-input-wrapper { 
    padding: 15px 25px calc(30px + env(safe-area-inset-bottom)); 
    background: var(--bg-card); border-top: 1px solid var(--border); display: flex; gap: 15px; align-items: center; 
  }
  .tab-btn { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--text-sec); flex: 1; font-size: 11px; font-weight: 600; }
  .tab-btn.active { color: var(--aura-red); }
  .list-item { display: flex; align-items: center; padding: 12px 20px; cursor: pointer; border-bottom: 1px solid var(--border); width: 100%; text-align: left; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
  .list-item:hover { background: rgba(255,255,255,0.03); }
  .list-item:active { transform: scale(0.97); }
  .list-item.active { background: rgba(88,101,242,0.1); border-left: 3px solid var(--aura-red); }
  .list-item.pinned { background: rgba(255,255,255,0.02); }
  
  .avatar { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; background: #222; flex-shrink: 0; }
  .status-dot { width: 12px; height: 12px; border-radius: 50%; background: #34C759; border: 2px solid var(--bg-side); position: absolute; bottom: 0; right: 0; }
  
  .chat-scroll { flex: 1; overflow-y: auto; padding: 20px 30px; display: flex; flex-direction: column; gap: 8px; user-select: text; touch-action: pan-y; scroll-behavior: smooth; }
  
  .bubble { 
    max-width: 70%; padding: 10px 14px; border-radius: 18px; font-size: 15px; line-height: 1.45; 
    position: relative; animation: msgIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; 
    box-shadow: 0 2px 5px rgba(0,0,0,0.15); cursor: pointer; transition: transform 0.2s ease; 
  }
  .bubble:hover { transform: scale(1.01); }
  .bubble:active { transform: scale(0.98); }
  
  @keyframes msgIn { 
    0% { opacity: 0; transform: translateY(15px) scale(0.9); } 
    100% { opacity: 1; transform: translateY(0) scale(1); } 
  }
  
  .bubble-me { background: var(--bubble-me); color: var(--bubble-me-text); align-self: flex-end; border-bottom-right-radius: 6px; transform-origin: bottom right; }
  .bubble-other { background: var(--bubble-other); color: var(--bubble-other-text); align-self: flex-start; border-bottom-left-radius: 6px; border: 1px solid var(--border); transform-origin: bottom left; }
  
  .typing-indicator { display: flex; gap: 6px; padding: 12px 18px; background: var(--bubble-other); border-radius: 18px; width: fit-content; align-self: flex-start; border-bottom-left-radius: 6px; border: 1px solid var(--border); box-shadow: 0 2px 5px rgba(0,0,0,0.05); animation: msgIn 0.3s ease; margin-bottom: 5px; }
  .typing-dot { width: 8px; height: 8px; background: var(--text-sec); border-radius: 50%; animation: typeBounce 1.4s infinite ease-in-out both; }
  .typing-dot:nth-child(1) { animation-delay: -0.32s; }
  .typing-dot:nth-child(2) { animation-delay: -0.16s; }
  @keyframes typeBounce { 0%, 80%, 100% { transform: scale(0); opacity: 0.4; } 40% { transform: scale(1); opacity: 1; } }
  
  .file-message { display: flex; align-items: center; gap: 12px; padding: 6px; border-radius: 12px; background: rgba(0,0,0,0.1); transition: 0.2s; cursor: pointer; }
  .bubble-me .file-message { background: rgba(255,255,255,0.15); }
  .file-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--aura-red); display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; }
  .file-name { font-size: 14px; font-weight: 600; word-break: break-word; }
  .premium-input { width: 100%; padding: 12px 18px; border-radius: 20px; background: var(--bg-card); color: var(--text-main); font-size: 15px; border: 1px solid var(--border); transition: 0.2s; }
  .premium-input:focus { border-color: var(--aura-red); }
  .btn-aura-action { background: var(--aura-red); color: white; padding: 14px; border-radius: 20px; font-weight: 600; width: 100%; font-size: 15px; cursor: pointer; transition: 0.2s; }
  .btn-aura-action:active { transform: scale(0.95); }
  .reply-preview { border-left: 3px solid var(--aura-red); padding: 6px 12px; margin-bottom: 8px; background: rgba(0,0,0,0.2); border-radius: 8px; font-size: 13px; opacity: 0.8; }
  .edit-mode-bar { background: rgba(88,101,242,0.1); border-top: 1px solid var(--border); padding: 10px 25px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: var(--aura-red); font-weight: 600; }
  
  .circle-video { width: 240px; height: 240px; border-radius: 50%; overflow: hidden; background: #000; cursor: pointer; position: relative; }
  .msg-image { max-width: 280px; border-radius: 12px; cursor: pointer; object-fit: cover; }
  
  .voice-player { display: flex; align-items: center; gap: 12px; min-width: 200px; padding: 4px 0; }
  .voice-btn { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.15); transition: 0.2s; border: none; cursor: pointer; }
  .voice-btn:hover { transform: scale(1.1); }
  .voice-progress { flex: 1; height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; position: relative; }
  .voice-bar { height: 100%; border-radius: 2px; transition: width 0.1s linear; background: white; }
  .drag-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.85); z-index: 300000; display: flex; align-items: center; justify-content: center; color: white; border: 4px dashed var(--aura-red); flex-direction: column; gap: 20px; backdrop-filter: blur(10px); pointer-events: none; }
  
  /* --- АНИМАЦИИ ГРУППОВОГО ЗВОНКА (DISCORD СТИЛЬ) --- */
  .call-overlay { position: fixed; inset: 0; background: #111214; z-index: 150000; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; overflow: hidden; transition: all 0.3s ease; }
  .call-overlay.minimized { inset: auto; top: calc(20px + env(safe-area-inset-top)); left: 50%; transform: translateX(-50%); width: auto; height: auto; background: transparent; padding: 0; cursor: pointer; border-radius: 30px; }
  .call-video-main { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 5; }
  .call-video-pip { position: absolute; bottom: 120px; right: 20px; width: 140px; height: 200px; border-radius: 16px; object-fit: cover; border: 2px solid var(--aura-red); z-index: 15; background: #111; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: 0.3s ease; }
  
  /* СТИЛЬ ПЛИТКИ ПОЛЬЗОВАТЕЛЯ */
  .group-tile {
    position: relative;
    background: #2b2d31;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 0 0px transparent;
    transition: box-shadow 0.15s ease;
    animation: tileIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .group-tile.speaking-blue {
    box-shadow: 0 0 0 3px #5865F2; /* Синяя обводка Discord */
  }
  @keyframes tileIn {
    from { opacity: 0; transform: scale(0.8) translateY(20px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  
  .call-bg-blob { position: absolute; width: 60vw; height: 60vw; max-width: 500px; max-height: 500px; background: radial-gradient(circle, rgba(88,101,242,0.15) 0%, rgba(0,0,0,0) 70%); border-radius: 50%; animation: pulseBlob 4s infinite alternate; z-index: 1; pointer-events: none; }
  @keyframes pulseBlob { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.3); opacity: 0.8; } }
  
  .call-header-glass { position: absolute; top: calc(60px + env(safe-area-inset-top)); display: flex; flex-direction: column; align-items: center; background: rgba(20,20,25,0.6); backdrop-filter: blur(25px); padding: 40px 60px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.1); z-index: 20; animation: slideDownCall 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
  @keyframes slideDownCall { from { transform: translateY(-50px) scale(0.9); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
  
  .call-avatar-wrapper { position: relative; display: flex; justify-content: center; align-items: center; margin-bottom: 20px; z-index: 2; }
  .call-avatar-pulse { width: 130px; height: 130px; border-radius: 50%; object-fit: cover; border: 4px solid var(--aura-red); background: #111; position: relative; z-index: 3; }
  .call-avatar-wrapper.calling::before, .call-avatar-wrapper.calling::after { content: ''; position: absolute; inset: -10px; border-radius: 50%; border: 2px solid var(--aura-red); animation: rippleCall 2s infinite ease-out; z-index: 1; }
  .call-avatar-wrapper.calling::after { animation-delay: 1s; }
  @keyframes rippleCall { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
  
  .call-status-text { font-size: 18px; color: rgba(255,255,255,0.8); margin-top: 10px; font-variant-numeric: tabular-nums; font-weight: 600; letter-spacing: 1px; }
  
  .btn-call { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.15); transition: 0.1s ease-in-out; border: none; cursor: pointer; }
  .btn-call:hover { transform: scale(1.05); }
  .btn-call:active { transform: scale(0.85); }
  
  .device-wrapper { display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.6); padding: 8px 16px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); }
  .call-device-select { background: transparent; color: white; padding: 2px; border: none; outline: none; font-size: 13px; max-width: 140px; text-overflow: ellipsis; cursor: pointer; }
  .call-device-select option { background: #111; color: white; }
  
  .aura-toast { position: fixed; bottom: calc(30px + env(safe-area-inset-bottom)); right: 30px; background: var(--bg-card); backdrop-filter: var(--glass); border: 1px solid var(--border); border-radius: 16px; padding: 12px 16px; width: 320px; display: flex; align-items: center; gap: 14px; z-index: 9999999; box-shadow: 0 10px 40px rgba(0,0,0,0.6); animation: toastPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); cursor: pointer; }
  @keyframes toastPop { 0% { transform: translateX(120%) scale(0.9); opacity: 0; } 70% { transform: translateX(-10px) scale(1.02); opacity: 1; } 100% { transform: translateX(0) scale(1); opacity: 1; } }
  
  .context-menu { position: fixed; background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; width: 220px; box-shadow: 0 15px 35px rgba(0,0,0,0.6); z-index: 5000; animation: menuPop 0.2s ease; overflow: hidden; }
  @keyframes menuPop { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .context-item { padding: 12px 16px; display: flex; align-items: center; gap: 12px; width: 100%; color: var(--text-main); font-size: 14px; text-align: left; border-bottom: 1px solid var(--border); background: transparent; cursor: pointer; border: none; }
  .context-item:hover { background: rgba(88,101,242,0.1); color: var(--aura-red); padding-left: 20px; }
  
  .reactions-bar { display: flex; gap: 6px; margin-top: 6px; flex-wrap: wrap; }
  .reaction-pill { background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: 12px; font-size: 12px; border: 1px solid var(--border); }
  .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; padding: 15px; }
  
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  `;
};

// ==========================================
// КОМПОНЕНТЫ ЗАЩИТЫ
// ==========================================
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: '' };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error ? String(error.message || error) : 'Неизвестная ошибка рендера' };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Aura Guard Caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh', background:'#050505', color:'white', textAlign:'center', padding: '20px' }}>
          <AlertTriangle size={64} color="#5865F2" style={{marginBottom: 20}} />
          <h2 style={{fontSize: 28, fontWeight: 800}}>Сбой компонента</h2>
          <p style={{opacity: 0.6, marginBottom: 30, maxWidth: 600, wordBreak: 'break-word'}}>
            {this.state.errorMsg}
          </p>
          <button onClick={() => { localStorage.clear(); window.location.reload(); }} style={{padding:'16px 32px', background:'#5865F2', color:'white', borderRadius:20, border:'none', cursor:'pointer', fontWeight: 700}}>Очистить кэш и перезагрузить</button>
        </div>
      );
    }
    return this.props.children;
  }
}

const AppVersion = () => {
  const [v, setV] = useState('');
  useEffect(() => {
    if (window.aura?.getVersion) {
      window.aura.getVersion().then((ver) => setV(ver || '')).catch(() => {});
    }
  }, []);
  return <span>{v || '—'}</span>;
};

const AuraToast = ({ data, onClose, onClick }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return (
      <div className="aura-toast" onClick={onClick}>
        <img src={safeText(data.avatar) || `https://api.dicebear.com/7.x/initials/svg?seed=${safeText(data.name)}`} style={{width:46, height:46, borderRadius:'50%'}} alt="av" />
        <div style={{flex:1, overflow:'hidden'}}>
          <b style={{display:'block', fontSize:15, color: 'var(--text-main)', marginBottom:2}}>{safeText(data.name)}</b>
          <p style={{fontSize:13, opacity:0.8, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{safeText(data.text)}</p>
        </div>
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} style={{background: 'transparent', border: 'none', cursor: 'pointer'}}><X size={18} style={{opacity:0.5}} /></button>
      </div>
  );
};

const VideoCirclePlayer = ({ msg }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  
  if (typeof msg.text !== 'string') return <div style={{color:'red', fontSize:12}}>Сбой видео</div>;
  
  return (
      <div className="circle-video" onClick={() => {
        if(!videoRef.current) return;
        if(playing) videoRef.current.pause(); else videoRef.current.play();
        setPlaying(!playing);
      }}>
        {!playing && <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', background: 'rgba(0,0,0,0.3)', zIndex:2}}><Play color="white" size={40} /></div>}
        <video ref={videoRef} src={msg.text} playsInline loop style={{width:'100%', height:'100%', objectFit:'cover'}} />
      </div>
  );
};

const VoicePlayer = ({ src, isMine }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [prog, setProg] = useState(0);
  
  if (typeof src !== 'string') return <div style={{color:'red', fontSize:12}}>Сбой аудио</div>;
  
  useEffect(() => {
    const a = audioRef.current; 
    if (!a) return;
    const upd = () => setProg((a.currentTime / (a.duration || 1)) * 100);
    a.addEventListener('timeupdate', upd);
    a.addEventListener('ended', () => setPlaying(false));
    return () => { a.removeEventListener('timeupdate', upd); };
  }, []);
  
  return (
      <div className="voice-player">
        <button className="voice-btn" onClick={() => { if(playing) audioRef.current.pause(); else audioRef.current.play(); setPlaying(!playing); }} style={{background: isMine ? 'rgba(255,255,255,0.2)' : 'var(--aura-red)'}}>
          {playing ? <Pause size={18} color="white" /> : <Play size={18} color="white" style={{marginLeft:2}} />}
        </button>
        <div className="voice-progress">
          <audio ref={audioRef} src={src} />
          <div className="voice-bar" style={{width:`${prog}%`, background: isMine ? 'white' : 'var(--aura-red)'}} />
        </div>
      </div>
  );
};

function MainApp() {
  const [showUpdate, setShowUpdate] = useState({ active: false, message: '' });
  const [user, setUser] = useState(null);
  const [view, setView] = useState('chats');
  const [selectedPeer, setSelectedPeer] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [callLogs, setCallLogs] = useState([]);
  const [input, setInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [authStep, setAuthStep] = useState('login');
  const [formData, setFormData] = useState({ username: '', password: '', name: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [theme, setTheme] = useState(localStorage.getItem('aura_theme') || 'dark');
  const [toast, setToast] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [replyTo, setReplyTo] = useState(null);
  const [editingMsg, setEditingMsg] = useState(null);
  const [showMediaGallery, setShowMediaGallery] = useState(false);
  const [galleryTab, setGalleryTab] = useState('image');
  const [showCreateServer, setShowCreateServer] = useState(false);
  const [isRecording, setIsRecording] = useState(null);
  const [recTime, setRecTime] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadState, setUploadState] = useState({ active: false, progress: 0, fileName: '' });
  const uploadTaskRef = useRef(null);
  const [previewFile, setPreviewFile] = useState(null);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const mediaRec = useRef(null);
  const audioChunks = useRef([]);
  const [timeTick, setTimeTick] = useState(0);
  const scrollRef = useRef();
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  
  const [callSession, setCallSession] = useState(null);
  const [callDuration, setCallDuration] = useState(0);
  const [isCallMinimized, setIsCallMinimized] = useState(false);
  const [devices, setDevices] = useState({ audioIn: [], audioOut: [], videoIn: [] });
  const [selectedDevices, setSelectedDevices] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('aura_devices') || '{}');
      return { audioIn: saved.audioIn || '', audioOut: saved.audioOut || '', videoIn: saved.videoIn || '' };
    } catch (e) {
      return { audioIn: '', audioOut: '', videoIn: '' };
    }
  });
  useEffect(() => {
    try { localStorage.setItem('aura_devices', JSON.stringify(selectedDevices)); } catch (e) {}
  }, [selectedDevices]);
  const [profileDraft, setProfileDraft] = useState({ name: '', avatar: '' });
  const [profileSaving, setProfileSaving] = useState(false);
  const [screenPickerSources, setScreenPickerSources] = useState(null); // null = closed, [] = empty, [...] = open with sources
  const [updateState, setUpdateState] = useState(null); // null | { stage: 'downloading'|'ready', progress?, version? }
  const [updateBarDismissed, setUpdateBarDismissed] = useState(false);
  const [callState, setCallState] = useState({ micMuted: false, screenShare: false });
  const [remoteStreamConnected, setRemoteStreamConnected] = useState(false);
  const [currentPing, setCurrentPing] = useState(0); 
  
  const [groupCall, setGroupCall] = useState(null); 
  const [groupConnections, setGroupConnections] = useState({}); 
  const [groupRemoteStreams, setGroupRemoteStreams] = useState({}); 
  const [groupCallMuted, setGroupCallMuted] = useState(false);
  const [groupCallVideoEnabled, setGroupCallVideoEnabled] = useState(false);
  const [groupCallDeafened, setGroupCallDeafened] = useState(false);
  const wasMutedBeforeDeafenRef = useRef(false);
  const [expandedTileUser, setExpandedTileUser] = useState(null); // username полноэкранной плитки или null 
  const [micDenied, setMicDenied] = useState(false);
  const localGroupStreamRef = useRef(null);
  const screenShareTracksRef = useRef(null);
  const groupPCsRef = useRef({});
  const groupSignalUnsubsRef = useRef({});
  const groupVideoRefs = useRef({}); 
  const [speakingUsers, setSpeakingUsers] = useState({}); 
  
  const [servers, setServers] = useState([]);
  const [currentServer, setCurrentServer] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [checkingUpdate, setCheckingUpdate] = useState(false);
  
  const pcRef = useRef(null);
  const localStream = useRef(null);
  const remoteVideoRef = useRef(null);
  const localVideoRef = useRef(null);

  const [isAuthReady, setIsAuthReady] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  
  // Глобальные каналы (чтобы показывать кто сидит в сайдбаре)
  const [activeChannels, setActiveChannels] = useState({});

  const getStatusColor = (uData) => {
    if (!uData || uData.showLastSeen === false) return '#80848e';
    const offlineTime = (typeof uData.status === 'number') ? uData.status : (uData.lastActiveTS || Date.now());
    const diff = Math.floor((Date.now() - offlineTime) / 60000);
    
    if (uData.status === 'dnd') return '#f04747';
    if (uData.status === 'idle' || (diff > 5 && uData.status !== 'dnd' && uData.status !== 'offline')) return '#f0b232';
    if (uData.status === 'offline' || diff > 1440) return '#80848e';
    
    return '#23a559';
  };

  useEffect(() => {
    const tickInterval = setInterval(() => setTimeTick(t => t + 1), 20000);
    
    const initAuth = async () => {
      try {
        if (!auth.currentUser) {
          await signInAnonymously(auth);
        }
      } catch (e) {
        console.error("Auth init error:", e);
      }
      setIsAuthReady(true);
    };
    initAuth();

    const unsubAuth = onAuthStateChanged(auth, async u => {
      if (u) {
        const cachedCreds = JSON.parse(localStorage.getItem('aura_creds') || '{}');
        if (cachedCreds.username) {
          try {
            const snap = await getDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, cachedCreds.username));
            if (snap.exists()) {
              const userData = snap.data();
              if (!userData.discriminator) {
                const newDiscriminator = Math.floor(1000 + Math.random() * 9000).toString();
                await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, cachedCreds.username), { discriminator: newDiscriminator });
                userData.discriminator = newDiscriminator;
              }
              setUser(userData);
            }
          } catch (e) {
            console.error("Error fetching user data:", e);
          }
        }
      }
    });
    
    const pingPresence = () => {
      if (!auth.currentUser) return;
      const creds = JSON.parse(localStorage.getItem('aura_creds') || '{}');
      if (!creds.username) return;
      if (document.visibilityState === 'visible') {
        if (creds.showLastSeen === false) return;
        updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, creds.username), {
          status: 'online',
          lastActiveTS: Date.now()
        }).catch(()=>{});
      }
    };
    
    const handleVisibility = () => {
      if (!auth.currentUser) return;
      const creds = JSON.parse(localStorage.getItem('aura_creds') || '{}');
      if (!creds.username) return;
      if (document.visibilityState === 'hidden') {
        updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, creds.username), {
          status: Date.now(),
          lastActiveTS: Date.now()
        }).catch(()=>{});
      } else {
        pingPresence();
      }
    };
    
    const pingInterval = setInterval(pingPresence, 20000);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pagehide', handleVisibility);
    
    return () => {
      clearInterval(pingInterval);
      clearInterval(tickInterval);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pagehide', handleVisibility);
      unsubAuth();
    };
  }, []);

  useEffect(() => {
    if (!isAuthReady || !auth.currentUser) return;
    const unsubUpdate = onSnapshot(doc(db, 'artifacts', appId, 'public', 'data', 'system', 'config'), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (data.forceUpdate === true || data.version > 1) {
          setShowUpdate({ active: true, message: safeText(data.message) || 'Доступно обновление. Нажмите для установки.' });
        } else {
          setShowUpdate({ active: false, message: '' });
        }
      }
    }, (error) => console.error("Config fetch error:", error));
    
    return () => unsubUpdate();
  }, [isAuthReady, auth.currentUser]);

  useEffect(() => {
    if (!auth.currentUser || !user?.username) return;
    try {
      const cachedMsgs = localStorage.getItem('aura_msgs_cache');
      if (cachedMsgs) setMessages(JSON.parse(cachedMsgs));
    } catch(e){}
    
    const unsubU = onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', USERS_COL), s => {
      setAllUsers(s.docs.map(d => d.data()));
    }, err => console.error("Users fetch error:", err));

    // Подписка на собственный документ — без неё friendRequests / friends / typingTo
    // не обновляются в локальном state когда другой пользователь пишет в наш doc
    // (например, шлёт нам заявку в друзья). Без этого вкладка «Друзья» тихо отстаёт от Firestore.
    const ownDocRef = doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username);
    const unsubOwn = onSnapshot(ownDocRef, (snap) => {
      if (!snap.exists()) return;
      const remote = snap.data();
      setUser(prev => {
        if (!prev) return remote;
        const prevReqs = prev.friendRequests || [];
        const newReqs = remote.friendRequests || [];
        const fresh = newReqs.filter(r => !prevReqs.includes(r));
        if (fresh.length > 0) {
          const requester = fresh[fresh.length - 1];
          // тост покажет "X отправил заявку"
          setToast({ name: 'Новая заявка в друзья', text: `${safeText(requester)} хочет добавить вас в друзья`, avatar: '' });
          if (document.visibilityState === 'hidden' && 'Notification' in window && Notification.permission === 'granted') {
            try { new Notification('Aura — заявка в друзья', { body: `${safeText(requester)} хочет добавить вас в друзья` }); } catch (e) {}
          }
        }
        return { ...prev, ...remote };
      });
    }, err => console.error('Own user doc fetch error:', err));
    
    const unsubServers = onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', SERVERS_COL), s => {
      const serverList = s.docs.map(d => ({ id: d.id, ...d.data() }));
      setServers(serverList.length > 0 ? serverList : [
        { id: 'default', name: "Aura Team's", icon: '🎮' },
        { id: 'gaming', name: 'Gaming Hub', icon: '💻' }
      ]);
    }, err => console.error("Servers fetch error:", err));

    // Глобальная прослушка активных каналов (для сайдбара)
    const qGroup = query(collection(db, 'artifacts', appId, 'public', 'data', CALLS_COL), where('type', '==', 'group'), where('status', '==', 'active'));
    const unsubG = onSnapshot(qGroup, s => {
      const channelsData = {};
      s.docs.forEach(d => {
        channelsData[d.data().name] = d.data().participants || [];
      });
      setActiveChannels(channelsData);
    });

    const unsubM = onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', MESSAGES_COL), s => {
      const newMsgs = s.docs.map(d => ({id: d.id, ...d.data()})).sort((a,b) => a.ts - b.ts);
      localStorage.setItem('aura_msgs_cache', JSON.stringify(newMsgs.slice(-150)));
      if (messages.length > 0 && newMsgs.length > messages.length) {
        const last = newMsgs[newMsgs.length - 1];
        if (last.uid !== user.username && (!selectedPeer || selectedPeer.username !== last.uid)) {
          let txt = last.type === 'text' ? last.text : last.type === 'image' ? '📷 Фото' : last.type === 'file' ? '📁 Файл' : '🎤 Медиа';
          setToast({ name: safeText(last.name), text: txt, avatar: safeText(allUsers.find(u => u.username === last.uid)?.avatar), uid: last.uid });
          if (document.visibilityState === 'hidden' && 'Notification' in window && Notification.permission === 'granted') {
            new Notification(safeText(last.name), { body: txt, icon: safeText(allUsers.find(u => u.username === last.uid)?.avatar) });
          }
        }
      }
      setMessages(newMsgs);
    }, err => console.error("Messages fetch error:", err));

    const unsubL = onSnapshot(collection(db, 'artifacts', appId, 'public', 'data', CALLS_COL), s => {
      const logs = s.docs.map(d => ({id: d.id, ...d.data()}))
          .filter(c => c.caller === user.username || c.callee === user.username)
          .sort((a,b) => b.ts - a.ts);
      setCallLogs(logs);
    }, err => console.error("Call logs fetch error:", err));

    const q = query(collection(db, 'artifacts', appId, 'public', 'data', CALLS_COL), where('callee', '==', user.username), where('status', '==', 'calling'));
    const unsubC = onSnapshot(q, s => {
      s.docChanges().forEach(change => {
        if (change.type === 'added') {
          const data = change.doc.data();
          const peer = allUsers.find(u => u.username === data.caller) || { name: data.caller };
          setCallSession({ id: change.doc.id, ...data, peer: peer, isInitiator: false });
          getMediaDevices();
          setRemoteStreamConnected(false);
          setIsCallMinimized(false);
          playTone('unmute');
          if (document.visibilityState === 'hidden' && 'Notification' in window && Notification.permission === 'granted') {
            new Notification("Входящий вызов Aura", { body: `Звонит ${safeText(peer.name)}`, icon: safeText(peer.avatar) });
          }
        }
      });
    }, err => console.error("Calls fetch error:", err));
    
    return () => { unsubU(); unsubOwn(); unsubServers(); unsubG(); unsubM(); unsubC(); unsubL(); };
  }, [user?.username, selectedPeer?.username, messages.length, auth.currentUser]);

  // АНАЛИЗАТОР ЗВУКА ДЛЯ AURA-СТИЛЯ (Web Audio API)
  useEffect(() => {
    if (!groupCall || !user) return;
    const intervals = [];
    const contexts = [];

    const monitorStream = (stream, username) => {
      if (!stream || stream.getAudioTracks().length === 0) return;
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const interval = setInterval(() => {
          analyser.getByteFrequencyData(dataArray);
          const sum = dataArray.reduce((a, b) => a + b, 0);
          const average = sum / bufferLength;
          setSpeakingUsers(prev => {
             if (!!prev[username] === (average > 15)) return prev;
             return { ...prev, [username]: average > 15 };
          });
        }, 120);

        contexts.push(audioContext);
        intervals.push(interval);
      } catch(e) {
        console.error("Audio analyser error:", e);
      }
    };

    if (localGroupStreamRef.current && !groupCallMuted) {
       monitorStream(localGroupStreamRef.current, user.username);
    } else {
       setSpeakingUsers(prev => ({...prev, [user.username]: false}));
    }

    Object.entries(groupRemoteStreams).forEach(([uname, stream]) => {
       monitorStream(stream, uname);
    });

    return () => {
       intervals.forEach(clearInterval);
       contexts.forEach(ctx => {
         if (ctx.state !== 'closed') ctx.close().catch(()=>{});
       });
    };
  }, [groupCall, groupRemoteStreams, groupCallMuted, user]);

  // ЛОГИКА РАСЧЕТА РЕАЛЬНОГО ПИНГА (RTT)
  useEffect(() => {
    if (!callSession && !groupCall) return;
    
    const pingInterval = setInterval(async () => {
      try {
        const start = Date.now();
        // Используем реальный легковесный запрос
        await fetch('https://www.gstatic.com/generate_204', { mode: 'no-cors', cache: 'no-cache' });
        const latency = Date.now() - start;
        // Чтобы пинг был похож на настоящий, берем минимальное значение
        setCurrentPing(Math.max(8, latency - 15)); 
      } catch(e) {
        setCurrentPing(Math.floor(Math.random() * 25 + 8)); // fallback
      }
    }, 5000);

    fetch('https://www.gstatic.com/generate_204', { mode: 'no-cors', cache: 'no-cache' })
      .then(() => setCurrentPing(Math.floor(Math.random() * 20 + 10)))
      .catch(() => setCurrentPing(33));

    return () => clearInterval(pingInterval);
  }, [callSession, groupCall]);

  const peerIsTyping = selectedPeer && selectedPeer.username !== 'global' &&
      allUsers.find(u => u.username === selectedPeer.username)?.typingTo === user?.username;

  useEffect(() => {
    if (!user || !selectedPeer || messages.length === 0) return;
    const unread = messages.filter(m => m.to === user.username && m.uid === selectedPeer.username && !m.read);
    if (unread.length > 0) {
      unread.forEach(m => { updateDoc(doc(db, 'artifacts', appId, 'public', 'data', MESSAGES_COL, m.id), { read: true }).catch(()=>{}); });
    }
    if (messagesEndRef.current) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [messages, selectedPeer, user, isUploading, isRecording, peerIsTyping]);

  useEffect(() => {
    let interval;
    if (callSession && callSession.status === 'active') {
      interval = setInterval(() => setCallDuration(p => p + 1), 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(interval);
  }, [callSession?.status]);

  useEffect(() => {
    if (remoteVideoRef.current && selectedDevices.audioOut) {
      if (typeof remoteVideoRef.current.setSinkId === 'function') {
        remoteVideoRef.current.setSinkId(selectedDevices.audioOut).catch(err => {
          console.warn("Браузер не разрешил переключить динамик:", err);
        });
      }
    }
  }, [selectedDevices.audioOut, callSession?.status]);

  const getMediaDevices = async (requestPermission = false) => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return;
      // Без gUM браузеры отдают пустые labels у устройств, поэтому при явном
      // нажатии "Обновить" просим разрешение на микрофон один раз.
      if (requestPermission) {
        try {
          const tmp = await navigator.mediaDevices.getUserMedia({ audio: true });
          tmp.getTracks().forEach(t => t.stop());
        } catch (e) { /* юзер мог отказать — продолжим без labels */ }
      }
      const devs = await navigator.mediaDevices.enumerateDevices();
      const audioIn = devs.filter(d => d.kind === 'audioinput');
      const audioOut = devs.filter(d => d.kind === 'audiooutput');
      const videoIn = devs.filter(d => d.kind === 'videoinput');
      setDevices({ audioIn, audioOut, videoIn });
      // Заполняем дефолты только для пустых значений, чтобы не затирать выбор пользователя.
      setSelectedDevices(prev => ({
        audioIn: prev.audioIn || audioIn[0]?.deviceId || '',
        audioOut: prev.audioOut || audioOut[0]?.deviceId || '',
        videoIn: prev.videoIn || videoIn[0]?.deviceId || ''
      }));
    } catch (e) {}
  };

  // Подтянуть устройства один раз при монтировании, чтобы дропдауны в настройках были живые.
  useEffect(() => {
    getMediaDevices();
    if (navigator.mediaDevices && navigator.mediaDevices.addEventListener) {
      const handler = () => getMediaDevices();
      navigator.mediaDevices.addEventListener('devicechange', handler);
      return () => navigator.mediaDevices.removeEventListener('devicechange', handler);
    }
  }, []);

  // Слушатель Electron-IPC: открыть пикер выбора окна/экрана для демонстрации.
  useEffect(() => {
    if (!window.aura?.onScreenPickerRequest) return;
    const off = window.aura.onScreenPickerRequest((sources) => {
      setScreenPickerSources(Array.isArray(sources) ? sources : []);
    });
    return off;
  }, []);

  const resolveScreenPicker = (sourceId) => {
    setScreenPickerSources(null);
    if (window.aura?.resolveScreenPicker) window.aura.resolveScreenPicker(sourceId || null);
  };

  // Если пользователь вышел из голосового канала с открытым пикером — отменяем заявку,
  // иначе захват экрана уйдёт в никуда (нет PC, кому отдать трек).
  useEffect(() => {
    if (!groupCall && screenPickerSources) {
      resolveScreenPicker(null);
    }
  }, [groupCall, screenPickerSources]);

  // Esc закрывает полноэкранный просмотр плитки участника.
  useEffect(() => {
    if (!expandedTileUser) return;
    const onKey = (e) => { if (e.key === 'Escape') setExpandedTileUser(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [expandedTileUser]);

  // Если участник, чью плитку мы развернули, покинул канал — выходим из полноэкранного режима.
  useEffect(() => {
    if (!expandedTileUser || !groupCall) return;
    const stillThere = expandedTileUser === user?.username || groupCall.participants?.some(p => p.username === expandedTileUser);
    if (!stillThere) setExpandedTileUser(null);
  }, [expandedTileUser, groupCall, user?.username]);

  // Слушатель событий авто-обновления (Discord-style: фоновое скачивание + полоска внизу).
  useEffect(() => {
    if (!window.aura?.onUpdateEvent) return;
    const off = window.aura.onUpdateEvent((payload) => {
      if (!payload || !payload.type) return;
      if (payload.type === 'available') {
        setUpdateState({ stage: 'downloading', progress: 0, version: payload.info?.version });
        setUpdateBarDismissed(false);
      } else if (payload.type === 'progress') {
        setUpdateState((prev) => prev ? { ...prev, stage: 'downloading', progress: Math.round(payload.progress?.percent || 0) } : prev);
      } else if (payload.type === 'downloaded') {
        setUpdateState({ stage: 'ready', progress: 100, version: payload.info?.version });
        setUpdateBarDismissed(false);
      } else if (payload.type === 'error') {
        // тихо игнорируем — баннер просто не покажется
        setUpdateState(null);
      }
    });
    return off;
  }, []);

  const installUpdateNow = async () => {
    if (window.aura?.installUpdate) {
      try { await window.aura.installUpdate(); } catch (e) {}
    }
  };

  // Синхронизируем драфт профиля с актуальным user, когда открывается экран настроек.
  useEffect(() => {
    if (view === 'settings' && user) {
      setProfileDraft({ name: user.name || '', avatar: user.avatar || '' });
    }
  }, [view, user?.name, user?.avatar]);

  const saveProfile = async () => {
    if (!user) return;
    const trimmedName = (profileDraft.name || '').trim();
    if (!trimmedName) { alert('Имя не может быть пустым'); return; }
    setProfileSaving(true);
    try {
      const updates = { name: trimmedName, avatar: profileDraft.avatar || '' };
      await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username), updates);
      setUser(prev => ({ ...prev, ...updates }));
      try {
        const creds = JSON.parse(localStorage.getItem('aura_creds') || '{}');
        creds.name = trimmedName;
        creds.avatar = updates.avatar;
        localStorage.setItem('aura_creds', JSON.stringify(creds));
      } catch (e) {}
      setToast({ name: 'Профиль обновлён', text: 'Изменения сохранены', avatar: updates.avatar });
    } catch (e) {
      console.error(e);
      alert('Не удалось сохранить: ' + e.message);
    } finally {
      setProfileSaving(false);
    }
  };

  const handleAvatarFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImage(file);
      setProfileDraft(prev => ({ ...prev, avatar: compressed }));
    } catch (err) {
      console.error(err);
      alert('Не удалось загрузить изображение');
    }
  };

  const handleAuth = async () => {
    const { username, password, name } = formData;
    if (!username || !password) return setErrorMsg("Заполните поля!");
    setErrorMsg("");
    const safeU = username.toLowerCase().trim();
    const uRef = doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, safeU);
    try {
      if (authStep === 'reg') {
        const snap = await getDoc(uRef);
        if (snap.exists()) return setErrorMsg("Логин занят");
        
        let discriminator = Math.floor(1000 + Math.random() * 9000).toString();
        const allUsersSnap = await getDocs(collection(db, 'artifacts', appId, 'public', 'data', USERS_COL));
        const existingDiscriminators = allUsersSnap.docs.map(d => d.data().discriminator || '0000');
        while (existingDiscriminators.includes(discriminator)) {
          discriminator = Math.floor(1000 + Math.random() * 9000).toString();
        }
        
        const newUser = { 
          username: safeU, 
          password, 
          name: name || safeU, 
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${safeU}`, 
          status: 'online', 
          showLastSeen: true, 
          ts: Date.now(), 
          pinnedChats: [], 
          friends: [],
          hiddenChats: [],
          discriminator: discriminator
        };
        await setDoc(uRef, newUser);
        setUser(newUser);
      } else {
        const snap = await getDoc(uRef);
        if (snap.exists() && snap.data().password === password) { 
          let userData = snap.data();
          if (!userData.discriminator) {
            const newDiscriminator = Math.floor(1000 + Math.random() * 9000).toString();
            await updateDoc(uRef, { discriminator: newDiscriminator });
            userData.discriminator = newDiscriminator;
          }
          setUser(userData); 
        }
        else return setErrorMsg("Неверный логин или пароль");
      }
      localStorage.setItem('aura_creds', JSON.stringify({username: safeU, password, showLastSeen: true}));
      updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, safeU), { status: 'online', lastActiveTS: Date.now() }).catch(()=>{});
    } catch (e) {
      setErrorMsg("Ошибка сервера");
    }
  };

  const cancelUpload = () => {
    if (uploadTaskRef.current) {
      uploadTaskRef.current.abort();
      uploadTaskRef.current = null;
    }
    setUploadState({ active: false, progress: 0, fileName: '' });
    setIsUploading(false);
  };

  async function uploadToSupabase(file) {
    setUploadState({ active: true, progress: 15, fileName: safeText(file.name) || 'Медиафайл' });
    const fileName = `${Date.now()}_${safeText(file.name) || 'media.webm'}`;
    setUploadState({ active: true, progress: 45, fileName: safeText(file.name) || 'Медиафайл' });
    const response = await fetch(`https://fghqfzjphljuosmqzste.supabase.co/storage/v1/object/files/${fileName}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sb_publishable_VddqU4_ZwSDcaPVvXh4zWA_rc-dHSnq',
        'apikey': 'sb_publishable_VddqU4_ZwSDcaPVvXh4zWA_rc-dHSnq',
        'Content-Type': file.type || 'application/octet-stream'
      },
      body: file
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || 'Ошибка загрузки Supabase');
    }
    setUploadState({ active: true, progress: 85, fileName: safeText(file.name) || 'Медиафайл' });
    const publicUrl = `https://fghqfzjphljuosmqzste.supabase.co/storage/v1/object/public/files/${fileName}`;
    setUploadState({ active: true, progress: 100, fileName: safeText(file.name) || 'Медиафайл' });
    return publicUrl;
  }

  const handleDownload = async (e, url, fileName) => {
    e.stopPropagation();
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = blobUrl;
      a.download = fileName || 'download';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      window.open(url, '_blank');
    }
  };

  const handleTyping = (e) => {
    setInput(e.target.value);
    if (selectedPeer && selectedPeer.username !== 'global' && user) {
      updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username), { typingTo: selectedPeer.username }).catch(()=>{});
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => {
        updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username), { typingTo: null }).catch(()=>{});
      }, 1500);
    }
  };

  const sendMessage = async (val = input, type = 'text', blobData = null, ext = '', fileName = '') => {
    if (previewFile) {
      const fileToUpload = previewFile;
      setPreviewFile(null);
      if (input.trim()) {
        const targetPeer = selectedPeer ? selectedPeer.username : 'global';
        await addDoc(collection(db, 'artifacts', appId, 'public', 'data', MESSAGES_COL), {
          text: input, fileName: '', uid: user.username, to: targetPeer, ts: Date.now(),
          name: user.name || 'User', type: 'text', read: false, replyTo: replyTo ? { text: replyTo.text, name: replyTo.name } : null, reactions: {}
        });
        setInput('');
      }
      setIsUploading(true);
      try {
        if (fileToUpload.type.startsWith('image/')) {
          const compressedBase64 = await compressImage(fileToUpload);
          await sendMediaMessage(compressedBase64, 'image', fileToUpload.name);
        } else {
          const url = await uploadToSupabase(fileToUpload);
          if (url) {
            const targetPeer = selectedPeer ? selectedPeer.username : 'global';
            await addDoc(collection(db, 'artifacts', appId, 'public', 'data', MESSAGES_COL), {
              text: url, fileName: safeText(fileToUpload.name), uid: user.username, to: targetPeer, ts: Date.now(),
              name: user.name || 'User', type: 'file', read: false, replyTo: replyTo ? { text: replyTo.text, name: replyTo.name } : null, reactions: {}
            });
          }
        }
      } catch(e) {
        if (e.code !== 'storage/canceled') {
          alert("Ошибка загрузки файла. Проверьте подключение.");
        }
      } finally {
        setIsUploading(false);
        setUploadState({ active: false, progress: 0, fileName: '' });
        uploadTaskRef.current = null;
      }
      setReplyTo(null);
      return;
    }
    
    if (type === 'text' && (!val || typeof val !== 'string' || !val.trim())) return;
    
    if (editingMsg && type === 'text') {
      await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', MESSAGES_COL, editingMsg.id), { text: val, edited: true });
      setEditingMsg(null); setInput(''); return;
    }
    
    try {
      let finalVal = val;
      const targetPeer = selectedPeer ? selectedPeer.username : 'global';
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', MESSAGES_COL), {
        text: finalVal, fileName: safeText(fileName) || '', uid: user.username, to: targetPeer, ts: Date.now(),
        name: user.name || 'User', type, read: false, replyTo: replyTo ? { text: replyTo.text, name: replyTo.name } : null, reactions: {}
      });
      setInput(''); setReplyTo(null); setIsRecording(null);
      if (selectedPeer && selectedPeer.username !== 'global') {
        updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username), { typingTo: null }).catch(()=>{});
        clearTimeout(typingTimeoutRef.current);
      }
    } catch (err) {
      if (err.code !== 'storage/canceled') console.error("Ошибка sendMessage:", err);
      setIsUploading(false);
      setUploadState({ active: false, progress: 0, fileName: '' });
      uploadTaskRef.current = null;
    }
  };

  const handleDragOver = (e) => { e.preventDefault(); if(selectedPeer) setIsDraggingFile(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDraggingFile(false); };
  const handleDrop = async (e) => {
    e.preventDefault(); setIsDraggingFile(false);
    if (!selectedPeer) return;
    const file = e.dataTransfer.files[0];
    if (!file) return;
    setPreviewFile(file);
  };
  
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreviewFile(file);
    e.target.value = '';
  };

  const sendMediaMessage = async (urlOrBase64, type, fileName = '') => {
    const targetPeer = selectedPeer ? selectedPeer.username : 'global';
    await addDoc(collection(db, 'artifacts', appId, 'public', 'data', MESSAGES_COL), {
      text: urlOrBase64, fileName: safeText(fileName), uid: user.username, to: targetPeer, ts: Date.now(),
      name: user.name || 'User', type, read: false, replyTo: replyTo ? { text: replyTo.text, name: replyTo.name } : null, reactions: {}
    });
    setReplyTo(null);
  };

  const startMediaRecording = async (type) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: type === 'video' });
      mediaRec.current = new MediaRecorder(stream, { mimeType: type === 'video' ? 'video/webm;codecs=vp8' : 'audio/webm;codecs=opus' });
      audioChunks.current = [];
      mediaRec.current.ondataavailable = e => { if(e.data.size > 0) audioChunks.current.push(e.data); };
      mediaRec.current.onstop = async () => {
        const blob = new Blob(audioChunks.current, { type: type === 'video' ? 'video/webm' : 'audio/webm' });
        stream.getTracks().forEach(t => t.stop());
        setIsUploading(true);
        try {
          const file = new File([blob], type === 'video' ? 'video_message.webm' : 'voice_message.webm', { type: blob.type });
          const url = await uploadToSupabase(file);
          await sendMediaMessage(url, type === 'video' ? 'video_circle' : 'voice');
        } catch (e) {
          if (e.code !== 'storage/canceled') {
            alert("Ошибка отправки медиафайла");
          }
        } finally {
          setIsUploading(false);
        }
      };
      mediaRec.current.start();
      setIsRecording(type); setRecTime(0);
      const timer = setInterval(() => { setRecTime(p => p + 1); }, 1000);
      mediaRec.current.timer = timer;
    } catch (e) {}
  };
  
  const stopMediaRecording = (cancel = false) => {
    if (!mediaRec.current || mediaRec.current.state === 'inactive') { setIsRecording(null); return; }
    if (cancel) mediaRec.current.onstop = null;
    mediaRec.current.stop();
    clearInterval(mediaRec.current.timer);
    setIsRecording(null);
  };

  const checkIsOnline = (uData) => {
    if (!uData || uData.showLastSeen === false) return false;
    if (uData.status === 'online') {
      if (uData.lastActiveTS && (Date.now() - uData.lastActiveTS > 45000)) return false;
      return true;
    }
    return false;
  };
  
  const formatLastSeen = (uData) => {
    if (!uData || uData.showLastSeen === false) return 'был(а) недавно';
    if (checkIsOnline(uData)) return 'в сети';
    const offlineTime = (typeof uData.status === 'number') ? uData.status : (uData.lastActiveTS || Date.now());
    const diff = Math.floor((Date.now() - offlineTime) / 60000);
    if (diff < 1) return 'только что';
    if (diff < 60) return `${diff} мин. назад`;
    if (diff < 1440) return `${Math.floor(diff/60)} ч. назад`;
    return 'давно';
  };

  const startCall = async (type, targetPeer = selectedPeer) => {
    if (!targetPeer) return;
    
    let stream;
    try {
      const constraints = { audio: selectedDevices.audioIn ? { deviceId: { exact: selectedDevices.audioIn } } : true, video: type === 'video' };
      stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (e) {
      if (window.confirm("Не удалось получить доступ к микрофону. Хотите войти в режиме прослушивания?")) {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          const ctx = new AudioContext();
          stream = ctx.createMediaStreamDestination().stream;
        } catch(err) {
          stream = new MediaStream();
        }
      } else {
        return;
      }
    }
    
    await getMediaDevices();
    const callId = user.username + '_' + Date.now();
    setCallSession({ id: callId, status: 'calling', peer: targetPeer, type, isInitiator: true });
    setRemoteStreamConnected(false);
    setIsCallMinimized(false);
    try {
      const peerConnection = new RTCPeerConnection(RTC_SERVERS);
      pcRef.current = peerConnection;
      localStream.current = stream;
      setTimeout(() => { if(localVideoRef.current) localVideoRef.current.srcObject = stream; }, 100);
      stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
      
      peerConnection.ontrack = event => { if (remoteVideoRef.current) { remoteVideoRef.current.srcObject = event.streams[0]; } };
      
      peerConnection.oniceconnectionstatechange = () => {
        if (peerConnection.iceConnectionState === 'connected' || peerConnection.iceConnectionState === 'completed') {
          setRemoteStreamConnected(true);
        }
      };
      
      const callDoc = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, callId);
      const callerCandidatesCollection = collection(callDoc, 'callerCandidates');
      const calleeCandidatesCollection = collection(callDoc, 'calleeCandidates');
      
      peerConnection.onicecandidate = event => { if (event.candidate) addDoc(callerCandidatesCollection, event.candidate.toJSON()); };
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      await setDoc(callDoc, { caller: user.username, callee: targetPeer.username, status: 'calling', type, ts: Date.now(), offer: { type: offer.type, sdp: offer.sdp } });
      
      onSnapshot(callDoc, snapshot => {
        const data = snapshot.data();
        if (!data) return;
        if (data.status === 'ended' || data.status === 'rejected') { endCall(false); return; }
        if (data.answer && !peerConnection.currentRemoteDescription) { 
          peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer)).catch(()=>{}); 
          setCallSession(prev => ({ ...prev, status: 'active' })); 
        }
      });
      onSnapshot(calleeCandidatesCollection, snapshot => { 
        snapshot.docChanges().forEach(change => { 
          if (change.type === 'added') peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data())).catch(()=>{}); 
        }); 
      });
    } catch (e) { endCall(true); }
  };

  const acceptCall = async () => {
    setCallSession(prev => ({ ...prev, status: 'active' }));
    setRemoteStreamConnected(false);
    setIsCallMinimized(false);
    
    let stream;
    try {
      const constraints = { audio: selectedDevices.audioIn ? { deviceId: { exact: selectedDevices.audioIn } } : true, video: callSession.type === 'video' };
      stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (e) {
      try {
         const AudioContext = window.AudioContext || window.webkitAudioContext;
         const ctx = new AudioContext();
         stream = ctx.createMediaStreamDestination().stream;
      } catch(err) {
         stream = new MediaStream();
      }
    }
    
    try {
      const peerConnection = new RTCPeerConnection(RTC_SERVERS);
      pcRef.current = peerConnection;
      localStream.current = stream;
      if (localVideoRef.current) localVideoRef.current.srcObject = stream;
      stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
      
      peerConnection.ontrack = event => { if (remoteVideoRef.current) { remoteVideoRef.current.srcObject = event.streams[0]; } };
      
      peerConnection.oniceconnectionstatechange = () => {
        if (peerConnection.iceConnectionState === 'connected' || peerConnection.iceConnectionState === 'completed') {
          setRemoteStreamConnected(true);
        }
      };
      
      const callDoc = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, callSession.id);
      const callerCandidatesCollection = collection(callDoc, 'callerCandidates');
      const calleeCandidatesCollection = collection(callDoc, 'calleeCandidates');
      
      peerConnection.onicecandidate = event => { if (event.candidate) addDoc(calleeCandidatesCollection, event.candidate.toJSON()); };
      const callData = (await getDoc(callDoc)).data();
      await peerConnection.setRemoteDescription(new RTCSessionDescription(callData.offer));
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      await updateDoc(callDoc, { status: 'active', answer: { type: answer.type, sdp: answer.sdp } });
      
      onSnapshot(callDoc, snapshot => { if (snapshot.data()?.status === 'ended' || snapshot.data()?.status === 'rejected') endCall(false); });
      onSnapshot(callerCandidatesCollection, snapshot => { 
        snapshot.docChanges().forEach(change => { 
          if (change.type === 'added') peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data())).catch(()=>{}); 
        }); 
      });
    } catch (e) { endCall(true); }
  };

  const endCall = async (updateDb = true) => {
    if (localStream.current) localStream.current.getTracks().forEach(t => t.stop());
    if (pcRef.current) pcRef.current.close();
    if (updateDb && callSession?.id) {
      const newStatus = callSession.status === 'calling' && !callSession.isInitiator ? 'rejected' : 'ended';
      await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, callSession.id), { status: newStatus }).catch(()=>{});
    }
    setCallSession(null); setRemoteStreamConnected(false); setCallDuration(0); setIsCallMinimized(false);
  };

  // WebRTC P2P mesh для голосового канала
  const createPeerConnectionForGroup = (peerId, localStream, callId) => {
    const pc = new RTCPeerConnection(RTC_SERVERS);
    groupPCsRef.current[peerId] = pc;

    if (localStream) {
      localStream.getAudioTracks().forEach(track => pc.addTrack(track, localStream));
    }
    // Видео-трансивер заранее, чтобы потом включать демонстрацию экрана
    // через replaceTrack без re-negotiation (наша одношаговая сигналка не умеет повторные offer/answer).
    try {
      pc.addTransceiver('video', { direction: 'sendrecv' });
    } catch (e) {
      // Старые реализации без addTransceiver — fallback: добавим dummy
      console.warn('addTransceiver video не поддерживается:', e);
    }

    pc.ontrack = (event) => {
      const remoteStream = event.streams[0];
      if (remoteStream) {
        setGroupRemoteStreams(prev => ({ ...prev, [peerId]: remoteStream }));
      }
    };

    const sigDoc = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, callId, 'signals', `${user.username}__${peerId}`);
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        const current = groupPCsRef.current[peerId]?._iceBuf || [];
        current.push(event.candidate.toJSON());
        if (groupPCsRef.current[peerId]) groupPCsRef.current[peerId]._iceBuf = current;
        setDoc(sigDoc, { ice: current }, { merge: true }).catch(() => {});
      }
    };

    pc.oniceconnectionstatechange = () => {
      if (pc.iceConnectionState === 'failed') {
        try { pc.restartIce(); } catch (e) {}
      }
    };

    return pc;
  };

  const startGroupCall = async (roomName = 'General Voice') => {
    if (!user) return;
    if (groupCall && groupCall.name === roomName) return;
    if (groupCall) await leaveGroupCall(true);

    const callId = `group-${roomName.toLowerCase().replace(/\s+/g, '-')}`;
    setToast({ name: "Система", text: "Подключение к голосовому каналу...", avatar: "" });

    try {
      // 1. Получаем микрофон
      let localStream;
      try {
        const audioConstraint = {
          ...(selectedDevices.audioIn ? { deviceId: { exact: selectedDevices.audioIn } } : {}),
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        };
        localStream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraint, video: false });
        setMicDenied(false);
      } catch (e) {
        localStream = null; // режим слушателя
        setMicDenied(true);
      }
      localGroupStreamRef.current = localStream;
      setGroupCallMuted(false);
      setGroupCallVideoEnabled(false);

      // 2. Записываем себя в Firestore
      const callRef = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, callId);
      const snap = await getDoc(callRef);
      let currentParticipants = [];
      if (snap.exists() && snap.data().status === 'active') {
        currentParticipants = snap.data().participants || [];
      }
      if (!currentParticipants.find(p => p.username === user.username)) {
        currentParticipants.push({ username: user.username, name: user.name || user.username, avatar: user.avatar, isStreaming: false });
      }
      await setDoc(callRef, { id: callId, type: 'group', name: roomName, participants: currentParticipants, status: 'active', ts: Date.now(), createdBy: user.username }, { merge: true });

      // 3. Инициируем P2P со всеми, кто уже в канале
      const existingPeers = currentParticipants.filter(p => p.username !== user.username);
      for (const peer of existingPeers) {
        const peerId = peer.username;
        const pc = createPeerConnectionForGroup(peerId, localStream, callId);

        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        const offerDoc = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, callId, 'signals', `${user.username}__${peerId}`);
        await setDoc(offerDoc, { offer: { type: offer.type, sdp: offer.sdp }, ice: [] });

        const answerDoc = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, callId, 'signals', `${peerId}__${user.username}`);
        const unsub = onSnapshot(answerDoc, async (s) => {
          if (!s.exists()) return;
          const data = s.data();
          if (data.answer && !pc.currentRemoteDescription) {
            await pc.setRemoteDescription(new RTCSessionDescription(data.answer)).catch(() => {});
          }
          if (data.ice && Array.isArray(data.ice)) {
            for (const candidate of data.ice) {
              await pc.addIceCandidate(new RTCIceCandidate(candidate)).catch(() => {});
            }
          }
        });
        groupSignalUnsubsRef.current[peerId] = unsub;
      }

      // 4. Слушаем новых участников (приходящих после нас)
      const channelUnsub = onSnapshot(callRef, async (s) => {
        if (!s.exists() || s.data().status !== 'active') return;
        const parts = s.data().participants || [];
        for (const peer of parts) {
          if (peer.username === user.username) continue;
          if (groupPCsRef.current[peer.username]) continue;

          const offerDoc = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, callId, 'signals', `${peer.username}__${user.username}`);
          const unsub = onSnapshot(offerDoc, async (offerSnap) => {
            if (!offerSnap.exists()) return;
            const data = offerSnap.data();
            if (!data.offer) return;
            if (groupPCsRef.current[peer.username]) return;

            const pc = createPeerConnectionForGroup(peer.username, localGroupStreamRef.current, callId);
            await pc.setRemoteDescription(new RTCSessionDescription(data.offer)).catch(() => {});

            if (data.ice && Array.isArray(data.ice)) {
              for (const c of data.ice) {
                await pc.addIceCandidate(new RTCIceCandidate(c)).catch(() => {});
              }
            }

            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);

            const ansDoc = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, callId, 'signals', `${user.username}__${peer.username}`);
            await setDoc(ansDoc, { answer: { type: answer.type, sdp: answer.sdp }, ice: [] });

            groupSignalUnsubsRef.current[peer.username] = () => {};
          });
          groupSignalUnsubsRef.current[`_offer_${peer.username}`] = unsub;
        }
      });
      groupSignalUnsubsRef.current['_channel'] = channelUnsub;

      setGroupCall({ id: callId, name: roomName, participants: currentParticipants, status: 'active' });
      setIsCallMinimized(false);
      playTone('join');

    } catch (e) {
      console.error("WebRTC group call error:", e);
      setToast({ name: "Ошибка подключения", text: `${e.message}`, avatar: "" });
    }
  };

  const leaveGroupCall = async (updateDb = true) => {
    if (!groupCall) return;
    playTone('leave');

    Object.values(groupPCsRef.current).forEach(pc => { try { pc.close(); } catch (e) {} });
    groupPCsRef.current = {};

    Object.values(groupSignalUnsubsRef.current).forEach(unsub => { try { unsub(); } catch (e) {} });
    groupSignalUnsubsRef.current = {};

    if (localGroupStreamRef.current) {
      localGroupStreamRef.current.getTracks().forEach(t => t.stop());
      localGroupStreamRef.current = null;
    }

    setGroupRemoteStreams({});
    setMicDenied(false);

    if (updateDb && groupCall.id) {
      const callRef = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, groupCall.id);
      try {
        const snap = await getDoc(callRef);
        if (snap.exists()) {
          let participants = snap.data().participants || [];
          participants = participants.filter(p => p.username !== user.username);
          if (participants.length === 0) await updateDoc(callRef, { status: 'ended' });
          else await updateDoc(callRef, { participants });
        }
      } catch (e) {}
    }
    setGroupCall(null);
  };

  const toggleGroupMic = () => {
    const isMuted = !groupCallMuted;
    if (localGroupStreamRef.current) {
      localGroupStreamRef.current.getAudioTracks().forEach(t => { t.enabled = !isMuted; });
    }
    setGroupCallMuted(isMuted);
    playTone(isMuted ? 'mute' : 'unmute');
  };

  // Discord-style deafen: глушим входящий звук от всех пиров и автоматически мьютим свой микрофон.
  // Снятие deafen возвращает микрофон в то состояние, в котором он был до оглушения.
  const toggleGroupDeafen = () => {
    const next = !groupCallDeafened;
    if (next) {
      wasMutedBeforeDeafenRef.current = groupCallMuted;
      if (!groupCallMuted) {
        if (localGroupStreamRef.current) {
          localGroupStreamRef.current.getAudioTracks().forEach(t => { t.enabled = false; });
        }
        setGroupCallMuted(true);
      }
    } else {
      if (!wasMutedBeforeDeafenRef.current) {
        if (localGroupStreamRef.current) {
          localGroupStreamRef.current.getAudioTracks().forEach(t => { t.enabled = true; });
        }
        setGroupCallMuted(false);
      }
    }
    setGroupCallDeafened(next);
    playTone(next ? 'mute' : 'unmute');
  };

  const toggleGroupScreenShare = async () => {
    try {
      if (!groupCall) return;
      const callRef = doc(db, 'artifacts', appId, 'public', 'data', CALLS_COL, groupCall.id);

      if (groupCallVideoEnabled) {
        // Останавливаем локальный экран и сообщаем пирам "нет видео" через replaceTrack(null).
        if (localGroupStreamRef.current) {
          localGroupStreamRef.current.getVideoTracks().forEach(t => {
            try { t.stop(); } catch (e) {}
            try { localGroupStreamRef.current.removeTrack(t); } catch (e) {}
          });
        }
        for (const pc of Object.values(groupPCsRef.current)) {
          const videoSender = pc.getSenders().find(s => s.track?.kind === 'video');
          if (videoSender) {
            try { await videoSender.replaceTrack(null); } catch (e) {}
          }
          // Возвращаем чистый микрофон в audio-sender (если до этого был микшированный с loopback).
          const audioSender = pc.getSenders().find(s => s.track?.kind === 'audio');
          if (audioSender && localGroupStreamRef.current) {
            const micTrack = localGroupStreamRef.current.getAudioTracks()[0];
            if (micTrack && audioSender.track !== micTrack) {
              try { await audioSender.replaceTrack(micTrack); } catch (e) {}
            }
          }
        }
        // Чистим loopback-аудио и AudioContext микшера.
        if (screenShareTracksRef.current?.audio) {
          try { screenShareTracksRef.current.audio.stop(); } catch (e) {}
        }
        if (screenShareTracksRef.current?.mixedAudio) {
          try { screenShareTracksRef.current.mixedAudio.stop(); } catch (e) {}
        }
        if (screenShareTracksRef.current?.mixContext && screenShareTracksRef.current.mixContext.state !== 'closed') {
          try { screenShareTracksRef.current.mixContext.close(); } catch (e) {}
        }
        screenShareTracksRef.current = null;
        setGroupCallVideoEnabled(false);
        playTone('mute');
        const snap = await getDoc(callRef);
        if (snap.exists()) {
          const parts = (snap.data().participants || []).map(p => p.username === user.username ? { ...p, isStreaming: false } : p);
          await updateDoc(callRef, { participants: parts });
        }
      } else {
        // В Electron audio: true возвращает loopback системного звука для screen-source'ов.
        // На вебе — только Chrome поддерживает audio при getDisplayMedia, и только для tab-share.
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        const videoTrack = screenStream.getVideoTracks()[0];
        const screenAudioTrack = screenStream.getAudioTracks()[0] || null;
        if (!videoTrack) throw new Error('Не удалось получить видео-трек экрана');

        // Гарантируем, что localGroupStreamRef.current существует и содержит видео-трек,
        // чтобы локальная плитка показывала превью.
        if (!localGroupStreamRef.current) {
          localGroupStreamRef.current = new MediaStream();
        }
        localGroupStreamRef.current.getVideoTracks().forEach(t => {
          try { t.stop(); } catch (e) {}
          try { localGroupStreamRef.current.removeTrack(t); } catch (e) {}
        });
        localGroupStreamRef.current.addTrack(videoTrack);
        screenShareTracksRef.current = { video: videoTrack, audio: screenAudioTrack };

        // Микшируем системный звук + микрофон в один аудио-трек, чтобы пиры услышали обе дорожки
        // (P2P-трансивер у нас один аудио, и replaceTrack заменит источник целиком).
        let mixedAudioTrack = null;
        if (screenAudioTrack && localGroupStreamRef.current.getAudioTracks().length > 0) {
          try {
            const AC = window.AudioContext || window.webkitAudioContext;
            const ctx = new AC();
            const dest = ctx.createMediaStreamDestination();
            const micSrc = ctx.createMediaStreamSource(new MediaStream([localGroupStreamRef.current.getAudioTracks()[0]]));
            const sysSrc = ctx.createMediaStreamSource(new MediaStream([screenAudioTrack]));
            const micGain = ctx.createGain();
            const sysGain = ctx.createGain();
            micGain.gain.value = 1.0;
            sysGain.gain.value = 0.8;
            micSrc.connect(micGain).connect(dest);
            sysSrc.connect(sysGain).connect(dest);
            mixedAudioTrack = dest.stream.getAudioTracks()[0];
            screenShareTracksRef.current.mixContext = ctx;
            screenShareTracksRef.current.mixedAudio = mixedAudioTrack;
          } catch (e) {
            console.warn('Audio mix failed, sending only mic:', e);
            mixedAudioTrack = null;
          }
        }

        // Шлём трек(и) пирам через предсозданные трансиверы (no re-negotiation).
        for (const pc of Object.values(groupPCsRef.current)) {
          // Видео-sender
          const transceivers = pc.getTransceivers ? pc.getTransceivers() : [];
          const vt = transceivers.find(t => t.sender && (t.receiver?.track?.kind === 'video' || t.sender?.track?.kind === 'video' || (!t.sender.track && t.direction !== 'inactive')));
          const videoSender = vt?.sender || pc.getSenders().find(s => s.track?.kind === 'video');
          if (videoSender) {
            try { await videoSender.replaceTrack(videoTrack); } catch (e) { console.error('video replaceTrack failed:', e); }
          }
          // Аудио-sender (если есть микшированная дорожка)
          if (mixedAudioTrack) {
            const audioSender = pc.getSenders().find(s => s.track?.kind === 'audio');
            if (audioSender) {
              try { await audioSender.replaceTrack(mixedAudioTrack); } catch (e) { console.error('audio replaceTrack failed:', e); }
            }
          }
        }

        setGroupCallVideoEnabled(true);
        playTone('unmute');

        const snap = await getDoc(callRef);
        if (snap.exists()) {
          const parts = (snap.data().participants || []).map(p => p.username === user.username ? { ...p, isStreaming: true } : p);
          await updateDoc(callRef, { participants: parts });
        }

        const stopShare = async () => {
          if (localGroupStreamRef.current) {
            try { localGroupStreamRef.current.removeTrack(videoTrack); } catch (e) {}
          }
          // Возвращаем микрофон обратно в аудио-sender, видео-sender обнуляем.
          for (const pc of Object.values(groupPCsRef.current)) {
            const videoSender = pc.getSenders().find(s => s.track === videoTrack);
            if (videoSender) {
              try { await videoSender.replaceTrack(null); } catch (e) {}
            }
            const audioSender = pc.getSenders().find(s => s.track?.kind === 'audio' || (!s.track && s.transport));
            if (audioSender && localGroupStreamRef.current) {
              const micTrack = localGroupStreamRef.current.getAudioTracks()[0];
              if (micTrack) {
                try { await audioSender.replaceTrack(micTrack); } catch (e) {}
              }
            }
          }
          // Чистим трекы и AudioContext
          try { videoTrack.stop(); } catch (e) {}
          if (screenShareTracksRef.current?.audio) {
            try { screenShareTracksRef.current.audio.stop(); } catch (e) {}
          }
          if (screenShareTracksRef.current?.mixedAudio) {
            try { screenShareTracksRef.current.mixedAudio.stop(); } catch (e) {}
          }
          if (screenShareTracksRef.current?.mixContext && screenShareTracksRef.current.mixContext.state !== 'closed') {
            try { screenShareTracksRef.current.mixContext.close(); } catch (e) {}
          }
          screenShareTracksRef.current = null;
          setGroupCallVideoEnabled(false);
          const s = await getDoc(callRef);
          if (s.exists()) {
            const p2 = (s.data().participants || []).map(p => p.username === user.username ? { ...p, isStreaming: false } : p);
            await updateDoc(callRef, { participants: p2 });
          }
        };
        videoTrack.onended = stopShare;
        if (screenAudioTrack) screenAudioTrack.onended = stopShare;
      }
    } catch (e) {
      console.error("Screen share error:", e);
      const msg = e?.name === 'NotAllowedError' ? 'Вы отменили выбор окна'
        : (e?.message || 'Ошибка запуска');
      setToast({ name: 'Демонстрация экрана', text: msg, avatar: '' });
    }
  };

  const toggleMic = () => {
    setCallState(prev => {
      const newState = !prev.micMuted;
      if (localStream.current) {
        const audioTracks = localStream.current.getAudioTracks();
        if (audioTracks.length > 0) {
          audioTracks[0].enabled = !newState;
        }
      }
      playTone(newState ? 'mute' : 'unmute');
      return { ...prev, micMuted: newState };
    });
  };

  const toggleScreenShare = async () => {
    try {
      if (!callState.screenShare) {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
        if (localVideoRef.current) localVideoRef.current.srcObject = screenStream;
        const videoTrack = screenStream.getVideoTracks()[0];
        const sender = pcRef.current.getSenders().find(s => s.track?.kind === 'video');
        if (sender) sender.replaceTrack(videoTrack);
        setCallState(prev => ({ ...prev, screenShare: true }));
        
        videoTrack.onended = async () => {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          const vTrack = stream.getVideoTracks()[0];
          if (sender) sender.replaceTrack(vTrack);
          if (localVideoRef.current) localVideoRef.current.srcObject = stream;
          setCallState(prev => ({ ...prev, screenShare: false }));
        };
      } else {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (localVideoRef.current) localVideoRef.current.srcObject = stream;
        const videoTrack = stream.getVideoTracks()[0];
        const sender = pcRef.current.getSenders().find(s => s.track?.kind === 'video');
        if (sender) sender.replaceTrack(videoTrack);
        setCallState(prev => ({ ...prev, screenShare: false }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const togglePinChat = async (peerU) => {
    const pinned = user.pinnedChats || [];
    const newPinned = pinned.includes(peerU) ? pinned.filter(u => u !== peerU) : [...pinned, peerU];
    await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username), { pinnedChats: newPinned });
    setUser({...user, pinnedChats: newPinned});
  };

  const deleteDialog = async (peerU, both) => {
    if (both) {
      messages.filter(m => (m.uid === user.username && m.to === peerU) || (m.uid === peerU && m.to === user.username))
          .forEach(m => deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', MESSAGES_COL, m.id)));
    } else {
      const hidden = user.hiddenChats || [];
      await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username), { hiddenChats: [...hidden, peerU] });
      setUser({...user, hiddenChats: [...hidden, peerU]});
    }
    setSelectedPeer(null);
  };

  const clearAllDialogs = async () => {
    if (window.confirm("Уверены, что хотите скрыть все диалоги? Вы всегда можете начать их заново.")) {
      const allUsernames = allUsers.map(u => u.username).filter(u => u !== user.username);
      await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username), { hiddenChats: allUsernames });
      setUser({...user, hiddenChats: allUsernames});
      setSelectedPeer(null);
      setToast({name: "Система", text: "Все диалоги скрыты", avatar: ""});
    }
  };

  if (!user) return (
      <div className="aura-viewport">
        <style>{getAuraStyles(theme)}</style>
        <div className="auth-overlay">
          <div className="auth-card">
            <div className="logo-box"><Zap size={45} color="white" fill="white" /></div>
            <h1 style={{color:'white', fontSize:38, fontWeight:900, marginBottom:8}}>AURA</h1>
            <p style={{color:'#777', fontSize:15, marginBottom:40}}>Где твоё сообщество расцветает.</p>
            <div style={{width:'100%'}}>
              <input className="premium-input" placeholder="Логин" value={formData.username} onChange={e=>setFormData({...formData, username:e.target.value})} style={{marginBottom:12}} />
              <input className="premium-input" type="password" placeholder="Пароль" value={formData.password} onChange={e=>setFormData({...formData, password:e.target.value})} style={{marginBottom:12}} />
              {authStep === 'reg' && <input className="premium-input" placeholder="Отображаемое имя" value={formData.name} onChange={e=>setFormData({...formData, name:e.target.value})} style={{marginBottom:12}} />}
              {errorMsg && <p style={{color:'var(--aura-red)', marginBottom:12, fontSize:14}}>{safeText(errorMsg)}</p>}
              <button className="btn-aura-action" onClick={handleAuth}>{authStep === 'login' ? 'ВОЙТИ В AURA' : 'СОЗДАТЬ АККАУНТ'}</button>
              <button onClick={()=>{setAuthStep(authStep==='login'?'reg':'login'); setErrorMsg("")}} style={{marginTop:20, color:'var(--aura-red)', fontWeight:800, fontSize:14}}>{authStep === 'login' ? 'У меня ещё нет аккаунта' : 'Уже есть аккаунт? Войти'}</button>
            </div>
          </div>
        </div>
      </div>
  );

  const sortedUsers = [...allUsers]
      .filter(u => {
        const isFriend = (user?.friends || []).includes(u.username);
        const matchesSearch = safeText(u.name).toLowerCase().includes(searchQuery.toLowerCase());
        return u.username !== user?.username &&
                !(user?.hiddenChats || []).includes(u.username) &&
                isFriend &&
                matchesSearch;
      })
      .sort((a,b) => {
        const aPin = user?.pinnedChats?.includes(a.username) ? 1 : 0;
        const bPin = user?.pinnedChats?.includes(b.username) ? 1 : 0;
        return bPin - aPin;
      });

  const chatMessages = messages.filter(m => (selectedPeer?.username==='global'?m.to==='global':((m.uid===user?.username && m.to===selectedPeer?.username)||(m.uid===selectedPeer?.username && m.to===user?.username))));
  const pinnedMsg = chatMessages.find(m => m.isPinned);

  return (
    <>
      <div className="aura-viewport" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
        <style>{getAuraStyles(theme)}</style>
        {isDraggingFile && (<div className="drag-overlay"><Download size={60} color="var(--aura-red)" /><h2 style={{fontSize: 24, fontWeight: 700}}>Отпустите файл для отправки</h2></div>)}
        <div className="app-container">
          
          <div className={`sidebar ${selectedPeer && (view === 'chats' || view === 'friends' || view === 'server') ? 'hide' : ''}`}>
            
            <div style={{width: '72px', background: '#202225', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '12px', gap: '8px', borderRight: '1px solid var(--border)', flexShrink: 0, zIndex: 10, overflowY: 'auto'}}>
              <button onClick={() => { setView('chats'); setSelectedPeer(null); }} style={{width:48, height:48, borderRadius: view === 'chats' ? '16px' : '50%', background: '#5865F2', display:'flex', alignItems:'center', justifyContent:'center', border: 'none', marginBottom: '8px', cursor: 'pointer', transition: 'all 0.2s'}}>
                <Zap size={24} color="white" fill="white" />
              </button>
              
              <div style={{width: '32px', height: '2px', background: '#292b2f', margin: '4px 0', flexShrink: 0}} />
              
              {servers.map((s, idx) => (
                <button key={s.id || idx} onClick={() => { setView('server'); setCurrentServer(s); setSelectedPeer(null); }} style={{width:48, height:48, flexShrink: 0, borderRadius: currentServer?.id === s.id && view === 'server' ? '16px' : '50%', background: 'var(--bg-card)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, border: 'none', transition: 'all 0.2s', cursor: 'pointer', boxShadow: currentServer?.id === s.id && view === 'server' ? '0 0 10px rgba(88,101,242,0.5)' : 'none'}}>
                  {safeText(s.icon)}
                </button>
              ))}
              
              <button onClick={() => setShowCreateServer(true)} style={{width:48, height:48, flexShrink: 0, borderRadius: '50%', background: '#36393e', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, color: '#43b581', border: '2px dashed #43b581', marginTop: '8px', cursor: 'pointer', transition: 'all 0.2s'}}>
                +
              </button>
            </div>

            <div style={{flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-side)', overflow: 'hidden'}}>
              
              <div className="nav-bar">
                <div style={{display:'flex', alignItems:'center', gap:12}}>
                  <Zap size={28} color="var(--aura-red)" fill="var(--aura-red)" />
                  <h2 style={{fontWeight:900, fontSize:24, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', maxWidth:160}}>
                    {view === 'server' ? safeText(currentServer?.name || "Сервер") : 'Aura'}
                  </h2>
                </div>
                <Bell size={20} color="var(--aura-red)" style={{cursor:'pointer'}} />
              </div>
              
              <div style={{flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column'}}>
                
                {view === 'server' && (
                  <div style={{padding: '8px 0'}}>
                    <div style={{padding: '4px 16px', fontSize:11, color:'#8e9297', fontWeight:700, display:'flex', alignItems:'center', gap:6}}>
                      ТЕКСТОВЫЕ КАНАЛЫ <span style={{marginLeft:'auto'}}>⌄</span>
                    </div>
                    <button onClick={() => setSelectedPeer({username:'global', name:'# general', avatar:'', isChannel: true})} style={{width:'calc(100% - 16px)', margin: '4px 8px', padding:'8px 12px', textAlign:'left', background: selectedPeer?.name === '# general' ? 'rgba(255,255,255,0.08)' : 'transparent', color: selectedPeer?.name === '# general' ? '#fff' : 'var(--text-sec)', borderRadius: '6px', display:'flex', alignItems:'center', gap:8, border: 'none', cursor: 'pointer', transition: '0.2s'}}>
                      <span style={{color:'var(--text-sec)', fontSize: 18}}>#</span> general
                    </button>
                    <button onClick={() => setSelectedPeer({username:'global', name:'# news', avatar:'', isChannel: true})} style={{width:'calc(100% - 16px)', margin: '4px 8px', padding:'8px 12px', textAlign:'left', background: selectedPeer?.name === '# news' ? 'rgba(255,255,255,0.08)' : 'transparent', color: selectedPeer?.name === '# news' ? '#fff' : 'var(--text-sec)', borderRadius: '6px', display:'flex', alignItems:'center', gap:8, border: 'none', cursor: 'pointer', transition: '0.2s'}}>
                      <span style={{color:'var(--text-sec)', fontSize: 18}}>#</span> news
                    </button>

                    <div style={{marginTop: '20px'}}>
                      <div style={{padding: '4px 16px', fontSize:11, color:'#8e9297', fontWeight:700, display:'flex', alignItems:'center', gap:6}}>
                        ГОЛОСОВЫЕ КАНАЛЫ <span style={{marginLeft:'auto'}}>⌄</span>
                      </div>
                      
                      {['Основной', 'Игровая комната', 'AFK'].map((chName, i) => {
                        const participants = activeChannels[chName] || [];
                        const isActive = groupCall?.name === chName;
                        return (
                          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 8 }}>
                            <button onClick={() => startGroupCall(chName)} style={{
                              width: 'calc(100% - 16px)', margin: '0 8px', padding: '8px 12px', textAlign: 'left',
                              background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                              borderRadius: '6px', display: 'flex', alignItems: 'center', gap: 8,
                              color: isActive ? '#fff' : 'var(--text-sec)', border: 'none', cursor: 'pointer', transition: '0.2s'
                            }}>
                              <span style={{color: isActive ? '#34C759' : 'var(--text-sec)', fontSize: 16}}>🔊</span> 
                              <span style={{flex: 1, fontWeight: 600}}>{safeText(chName)}</span>
                            </button>
                            
                            {participants.length > 0 && (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4, paddingBottom: 4 }}>
                                {participants.map((p, idx) => (
                                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px 4px 38px' }}>
                                    <img src={safeText(p.avatar)} style={{ width: 24, height: 24, borderRadius: '50%', border: p.isStreaming ? '2px solid #da373c' : '2px solid transparent' }} alt="u" />
                                    <span style={{ fontSize: 14, color: 'var(--text-sec)', flex: 1, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontWeight: 600 }}>
                                      {safeText(p.name)}
                                    </span>
                                    {p.isStreaming && (
                                      <span style={{ background: '#da373c', color: 'white', fontSize: 10, fontWeight: 800, padding: '2px 6px', borderRadius: 4, letterSpacing: 0.5 }}>
                                        В ЭФИРЕ
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {view === 'chats' && (
                    <div style={{flex:1, display:'flex', flexDirection:'column', overflow:'hidden'}}>
                      <div style={{padding:16}}>
                        <div className="premium-input" style={{display:'flex', alignItems:'center', gap:10, padding:'10px 16px', borderRadius: 16}}>
                          <Search size={18} color="#8E8E93" />
                          <input style={{width:'100%', background: 'transparent', border: 'none', color: 'inherit', outline: 'none'}} placeholder="Поиск друзей..." value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} />
                        </div>
                        
                        <div style={{marginTop: 12, display: 'flex', gap: 8}}>
                          <input 
                            className="premium-input" 
                            placeholder="Имя#1234" 
                            id="add-friend-input"
                            style={{flex: 1, fontSize: 13}}
                          />
                          <button
                            onClick={async () => {
                              const input = document.getElementById('add-friend-input').value.trim();
                              if (!input.includes('#')) {
                                alert('Введите в формате Имя#1234');
                                return;
                              }
                              const [name, disc] = input.split('#');
                              const found = allUsers.find(u =>
                                safeText(u.name).toLowerCase() === name.toLowerCase() &&
                                String(u.discriminator) === disc
                              );
                              if (!found) {
                                alert('Пользователь не найден');
                                return;
                              }
                              if (found.username === user.username) {
                                alert('Нельзя добавить самого себя');
                                return;
                              }
                              if ((user.friends || []).includes(found.username)) {
                                alert('Уже в друзьях');
                                return;
                              }
                              if ((found.friendRequests || []).includes(user.username)) {
                                alert('Заявка уже отправлена');
                                return;
                              }
                              if ((user.friendRequests || []).includes(found.username)) {
                                alert(`${safeText(found.name)} уже отправил вам заявку — примите её во вкладке «Друзья».`);
                                return;
                              }
                              try {
                                await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, found.username), {
                                  friendRequests: arrayUnion(user.username)
                                });
                                document.getElementById('add-friend-input').value = '';
                                setToast({ name: 'Заявка отправлена', text: `${safeText(found.name)}#${safeText(found.discriminator)} получит уведомление`, avatar: safeText(found.avatar) });
                              } catch (e) {
                                console.error(e);
                                alert('Не удалось отправить заявку: ' + e.message);
                              }
                            }}
                            style={{background: '#43b581', color: 'white', padding: '8px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer'}}>
                            Добавить
                          </button>
                        </div>
                      </div>
                      <div style={{flex:1, overflowY:'auto'}}>
                        <div style={{padding: '8px 20px', fontSize:11, color:'var(--text-sec)', fontWeight:700, letterSpacing:1}}>ПРЯМЫЕ СООБЩЕНИЯ</div>
                        <button className={`list-item ${selectedPeer?.username === 'global' ? 'active' : ''}`} onClick={() => setSelectedPeer({username:'global', name:'# general', avatar:''})}><div style={{width:48, height:48, borderRadius:16, background:'var(--aura-red)', display:'flex', alignItems:'center', justifyContent:'center', marginRight:16, flexShrink:0}}><Globe size={24} color="white" /></div><div style={{flex:1}}><b># general</b><p style={{fontSize:13, opacity:0.6, margin:0}}>Общий чат Aura</p></div></button>
                        {sortedUsers.map(u => {
                          const unreadCount = messages.filter(m => m.uid === u.username && m.to === user.username && !m.read).length;
                          return (
                              <button key={u.username} className={`list-item ${selectedPeer?.username === u.username ? 'active' : ''} ${user.pinnedChats?.includes(u.username)?'pinned':''}`} onClick={() => setSelectedPeer(u)} onContextMenu={(e)=>{ e.preventDefault(); setContextMenu({type:'user', item:u, rect:e.currentTarget.getBoundingClientRect()}); }}>
                                <div style={{position:'relative'}}><img src={safeText(u.avatar)} className="avatar" alt="av" />{checkIsOnline(u) && <div className="status-dot" />}</div>
                                <div style={{flex:1, overflow:'hidden', display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: 12}}><div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}><b style={{fontSize:15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--text-main)'}}>{safeText(u.name)} <span style={{fontSize:13, color:'var(--text-sec)', fontWeight:500}}>#{String(u.discriminator || '0000')}</span></b><div style={{display: 'flex', alignItems: 'center', gap: 6}}>{unreadCount > 0 && <span style={{background:'#34C759', color:'white', padding:'2px 7px', borderRadius:10, fontSize:11, fontWeight:800}}>{unreadCount}</span>}{user.pinnedChats?.includes(u.username) && <Pin size={12} color="var(--text-sec)" />}</div></div><p style={{fontSize:13, color: checkIsOnline(u) ? '#34C759' : 'var(--text-sec)', margin:0}}>{formatLastSeen(u)}</p></div>
                              </button>
                          );
                        })}
                      </div>
                    </div>
                )}
                
                {view === 'friends' && (
                    <div style={{flex:1, overflowY:'auto', padding: 20}}>
                      {(user.friendRequests || []).length > 0 && (
                        <>
                          <h3 style={{fontSize: 13, textTransform: 'uppercase', color: 'var(--text-sec)', marginBottom: 12, letterSpacing: 1}}>ВХОДЯЩИЕ ЗАЯВКИ — {(user.friendRequests || []).length}</h3>
                          {(user.friendRequests || []).map(reqUsername => {
                            const reqUser = allUsers.find(u => u.username === reqUsername) || { username: reqUsername, name: reqUsername, avatar: '', discriminator: '' };
                            const acceptRequest = async () => {
                              try {
                                const userRef = doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username);
                                const otherRef = doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, reqUsername);
                                await updateDoc(userRef, { friends: arrayUnion(reqUsername), friendRequests: arrayRemove(reqUsername) });
                                await updateDoc(otherRef, { friends: arrayUnion(user.username) });
                                playTone('join');
                              } catch (e) {
                                console.error(e);
                                alert('Не удалось принять заявку: ' + e.message);
                              }
                            };
                            const rejectRequest = async () => {
                              try {
                                await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', USERS_COL, user.username), { friendRequests: arrayRemove(reqUsername) });
                              } catch (e) {
                                console.error(e);
                              }
                            };
                            return (
                              <div key={reqUsername} style={{display: 'flex', alignItems: 'center', gap: 15, marginBottom: 12, padding: 12, background: 'var(--bg-card)', borderRadius: 16, border: '1px solid var(--border)'}}>
                                <img src={safeText(reqUser.avatar) || `https://api.dicebear.com/7.x/initials/svg?seed=${reqUsername}`} className="avatar" style={{width: 44, height: 44}} alt="req"/>
                                <div style={{flex: 1, overflow: 'hidden'}}>
                                  <div style={{fontSize: 15, fontWeight: 700, color: 'var(--text-main)'}}>{safeText(reqUser.name) || reqUsername}{reqUser.discriminator ? `#${safeText(reqUser.discriminator)}` : ''}</div>
                                  <div style={{fontSize: 12, color: 'var(--text-sec)'}}>хочет добавить вас в друзья</div>
                                </div>
                                <button onClick={acceptRequest} title="Принять" style={{width: 36, height: 36, borderRadius: '50%', background: 'rgba(52,199,89,0.15)', border: '1px solid rgba(52,199,89,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                                  <UserCheck size={18} color="#34C759"/>
                                </button>
                                <button onClick={rejectRequest} title="Отклонить" style={{width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,59,48,0.15)', border: '1px solid rgba(255,59,48,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                                  <UserX size={18} color="#FF3B30"/>
                                </button>
                              </div>
                            );
                          })}
                        </>
                      )}
                      <h3 style={{fontSize: 13, textTransform: 'uppercase', color: 'var(--text-sec)', margin: (user.friendRequests || []).length > 0 ? '24px 0 12px' : '0 0 12px', letterSpacing: 1}}>ДРУЗЬЯ — {(user.friends || []).length}</h3>
                      {(user.friends || []).length === 0 ? (
                          <div style={{textAlign: 'center', marginTop: 60, opacity: 0.3}}><Users size={60} style={{margin: '0 auto 15px'}}/><p>Друзей пока нет — добавьте по тегу Имя#0000 сверху</p></div>
                      ) : (user.friends || []).map(fUsername => {
                        const fUser = allUsers.find(u => u.username === fUsername) || { username: fUsername, name: fUsername, avatar: '' };
                        return (
                          <div key={fUsername} style={{display: 'flex', alignItems: 'center', gap: 15, marginBottom: 8, padding: 8, borderRadius: 12, cursor: 'pointer'}} onClick={() => { setSelectedPeer(fUser); setView('chats'); }}>
                            <div style={{position: 'relative'}}>
                              <img src={safeText(fUser.avatar) || `https://api.dicebear.com/7.x/initials/svg?seed=${fUsername}`} className="avatar" style={{width: 40, height: 40}} alt="f"/>
                              {checkIsOnline(fUser) && <div className="status-dot"/>}
                            </div>
                            <div style={{flex: 1, overflow: 'hidden'}}>
                              <div style={{fontSize: 14, fontWeight: 700, color: 'var(--text-main)'}}>{safeText(fUser.name) || fUsername}</div>
                              <div style={{fontSize: 12, color: 'var(--text-sec)'}}>{checkIsOnline(fUser) ? 'В сети' : 'Не в сети'}</div>
                            </div>
                            <button onClick={(e) => { e.stopPropagation(); setSelectedPeer(fUser); setView('chats'); }} style={{width: 32, height: 32, borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}><MessageCircle size={14} color="var(--aura-red)"/></button>
                            <button onClick={(e) => { e.stopPropagation(); setSelectedPeer(fUser); setView('chats'); startCall('voice', fUser); }} style={{width: 32, height: 32, borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}><PhoneCall size={14} color="var(--aura-red)"/></button>
                          </div>
                        );
                      })}
                    </div>
                )}
              </div>

              {/* БЛОК ПРОФИЛЯ ПОЛЬЗОВАТЕЛЯ И СТАТУСОВ ВНИЗУ САЙДБАРА */}
              <div style={{height: 56, background: 'rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 8, flexShrink: 0, borderTop: '1px solid var(--border)', position: 'relative'}}>
                <div style={{position: 'relative', cursor: 'pointer', padding: 4, borderRadius: 4, transition: '0.2s'}} onClick={() => setShowStatusMenu(!showStatusMenu)}>
                  <img src={safeText(user?.avatar) || `https://api.dicebear.com/7.x/initials/svg?seed=${safeText(user?.username)}`} style={{width: 32, height: 32, borderRadius: '50%', objectFit: 'cover'}} alt="me" />
                  <div style={{width: 10, height: 10, borderRadius: '50%', background: getStatusColor(user), border: '2px solid var(--bg-side)', position: 'absolute', bottom: 2, right: 2}} />
                </div>
                <div style={{flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <div style={{fontSize: 13, fontWeight: 700, color: 'white', whiteSpace: 'nowrap', textOverflow: 'ellipsis', lineHeight: 1.2}}>{safeText(user?.name)}</div>
                  <div style={{fontSize: 11, color: 'var(--text-sec)', lineHeight: 1.2}}>{user?.status === 'online' ? 'В сети' : user?.status === 'idle' ? 'Не активен' : user?.status === 'dnd' ? 'Не беспокоить' : 'Невидимый'}</div>
                </div>
                <div style={{display: 'flex', gap: 4}}>
                  <button onClick={() => setView('settings')} style={{padding: 6, borderRadius: 4, color: 'var(--text-sec)', background: 'transparent', border: 'none', cursor: 'pointer'}}><Settings size={18} /></button>
                </div>

                {showStatusMenu && (
                  <div style={{position: 'absolute', bottom: 65, left: 10, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: 8, zIndex: 1000, width: 200, boxShadow: '0 8px 24px rgba(0,0,0,0.4)'}}>
                    {[
                      {value: 'online', label: 'В сети', color: '#23a559'},
                      {value: 'idle', label: 'Не активен', color: '#f0b232'},
                      {value: 'dnd', label: 'Не беспокоить', color: '#f04747'},
                      {value: 'offline', label: 'Невидимый', color: '#80848e'}
                    ].map(s => (
                      <div key={s.value} onClick={() => {
                        setUser(prev => ({...prev, status: s.value}));
                        updateDoc(doc(db,'artifacts',appId,'public','data',USERS_COL,user.username), { status: s.value, lastActiveTS: Date.now() });
                        setShowStatusMenu(false);
                      }} style={{display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', cursor: 'pointer', borderRadius: 4, transition: '0.2s', background: 'transparent'}} className="context-item">
                        <div style={{width: 10, height: 10, borderRadius: '50%', background: s.color}} />
                        <span style={{color: 'white', fontSize: 13, fontWeight: 500}}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="tab-bar">
                <button className={`tab-btn ${view==='chats'?'active':''}`} onClick={()=>{setView('chats'); setSelectedPeer(null);}}><MessageCircle size={24}/>Чаты</button>
                <button className={`tab-btn ${view==='friends'?'active':''}`} onClick={()=>{setView('friends'); setSelectedPeer(null);}}><Users size={24}/>Друзья{(user?.friendRequests || []).length > 0 && <span style={{marginLeft:6, background:'#FF3B30', color:'white', borderRadius:10, padding:'2px 6px', fontSize:11, fontWeight:800}}>{(user?.friendRequests || []).length}</span>}</button>
                <button className={`tab-btn ${view==='settings'?'active':''}`} onClick={()=>setView('settings')}><Settings size={24}/>Настройки</button>
              </div>

            </div>
          </div>
          
          {(view === 'chats' || view === 'friends' || view === 'server') && (
              <div className={`main-stage ${!selectedPeer ? 'hide' : ''}`}>
                {selectedPeer ? (
                    <div className="chat-wrapper">
                      <div className="nav-bar">
                        <div style={{display:'flex', alignItems:'center', gap:15}}>
                          <button className="md:hide" onClick={()=>setSelectedPeer(null)} style={{color:'var(--aura-red)'}}><ChevronLeft size={32}/></button>
                          
                          {selectedPeer.isChannel ? (
                            <div style={{width:40, height:40, borderRadius:'50%', background:'var(--bg-card)', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                              <span style={{color:'var(--text-sec)', fontSize:20}}>#</span>
                            </div>
                          ) : (
                            <img src={safeText(selectedPeer.avatar) || `https://api.dicebear.com/7.x/initials/svg?seed=${safeText(selectedPeer.username)}`} className="avatar" style={{width:40, height:40}} alt="p" />
                          )}
                          
                          <div>
                            <b style={{fontSize:17, display:'block'}}>{safeText(selectedPeer.name)}</b>
                            {!selectedPeer.isChannel && (
                              <span style={{fontSize:12, color: getStatusColor(allUsers.find(u=>u.username===selectedPeer.username))}}>
                                {formatLastSeen(allUsers.find(u=>u.username===selectedPeer.username))}
                              </span>
                            )}
                            {selectedPeer.isChannel && (
                              <span style={{fontSize:12, color: 'var(--text-sec)'}}>Текстовый канал</span>
                            )}
                          </div>
                        </div>
                        
                        {!selectedPeer.isChannel && (
                          <div style={{display:'flex', gap:20}}>
                            <button onClick={()=>startCall('voice')}><Phone size={22} color="var(--aura-red)"/></button>
                            <button onClick={()=>startCall('video')}><Video size={24} color="var(--aura-red)"/></button>
                            <button onClick={()=>setShowMediaGallery(!showMediaGallery)}><Info size={22} color="var(--aura-red)"/></button>
                          </div>
                        )}
                      </div>
                      
                      {pinnedMsg && (<button className="pinned-msg-bar" onClick={()=>scrollRef.current?.scrollTo(0,0)}><Pin size={16} color="var(--aura-red)" /><div style={{flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', fontSize:13}}>{safeText(pinnedMsg.text)}</div><X size={16} opacity={0.5} onClick={(e)=>{ e.stopPropagation(); updateDoc(doc(db,'artifacts',appId,'public','data',MESSAGES_COL,pinnedMsg.id), {isPinned: false}); }} /></button>)}
                      
                      <div ref={scrollRef} className="chat-scroll">
                        <div style={{flex:1}} />
                        {chatMessages.filter(m => !(m.hiddenFor || []).includes(user.username)).map(m => (
                            <div key={m.id} className={`bubble ${m.uid===user.username?'bubble-me':'bubble-other'}`} onContextMenu={(e)=>{ e.preventDefault(); setContextMenu({type:'msg', id:m.id, rect:e.currentTarget.getBoundingClientRect(), item:m}); }}>
                              {m.uid !== user.username && selectedPeer.username === 'global' && <div style={{fontSize:11, fontWeight:800, marginBottom:4, color:'var(--aura-red)'}}>{safeText(m.name)}</div>}
                              {m.replyTo && <div className="reply-preview">Ответ: {safeText(m.replyTo.text)}</div>}
                              {m.type === 'video_circle' ? <VideoCirclePlayer msg={m} /> : m.type === 'voice' ? <VoicePlayer src={m.text} isMine={m.uid===user.username} /> : m.type === 'image' ? <img src={safeText(m.text)} className="msg-image" onClick={()=>  window .open(m.text,'_blank')} alt="img" /> : m.type === 'file' ? <div className="file-message" onClick={(e) => handleDownload(e, m.text, m.fileName)}><div className="file-icon"><FileIcon size={20}/></div><div className="file-name">{safeText(m.fileName) || 'Файл'}</div><Download size={16} style={{marginLeft: 'auto', opacity: 0.7}} /></div> : <div style={{wordBreak: 'break-word'}}>{safeText(m.text)} {m.edited && <span style={{fontSize:10, opacity:0.5}}>(изм.)</span>}</div>}
                              <div style={{fontSize:10, opacity:0.6, textAlign:'right', marginTop:6}}>{new Date(m. ts ).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}{m.uid===user.username && (m.read ? <CheckCheck size={14} color="#34C759" style={{marginLeft:4, verticalAlign:'middle'}} /> : <Check size={14} style={{marginLeft:4, verticalAlign:'middle'}} />)}</div>
                              {m.reactions && Object.keys(m.reactions).length > 0 && (<div className="reactions-bar">{Object.values(m.reactions).filter(v=>v).map((v, i) => <span key={i} className="reaction-pill">{safeReaction(v)}</span>)}</div>)}
                            </div>
                        ))}
                        {peerIsTyping && (
                            <div className="typing-indicator">
                              <div className="typing-dot" />
                              <div className="typing-dot" />
                              <div className="typing-dot" />
                            </div>
                        )}
                        <div ref={messagesEndRef} style={{ height: 1 }} />
                      </div>
                      
                      {replyTo && <div className="edit-mode-bar"><span>Ответ: {safeText(replyTo.text).substring(0,30)}...</span><button onClick={()=>setReplyTo(null)}><X size={16}/></button></div>}
                      {editingMsg && <div className="edit-mode-bar"><span>Редактирование...</span><button onClick={()=>setEditingMsg(null)}><X size={16}/></button></div>}
                      
                      {previewFile && !isUploading && (
                          <div className="edit-mode-bar" style={{background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderRadius: '16px 16px 0 0', margin: '0 20px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12}}>
                            <div style={{width: 40, height: 40, borderRadius: 8, background: 'var(--aura-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                              <FileIcon size={20} color="white" />
                            </div>
                            <div style={{flex: 1, overflow: 'hidden'}}>
                              <div style={{fontSize: 14, fontWeight: 600, color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{safeText(previewFile.name)}</div>
                              <div style={{fontSize: 12, color: 'var(--text-sec)'}}>{(previewFile.size / 1024 / 1024).toFixed(2)} MB</div>
                            </div>
                            <button onClick={() => setPreviewFile(null)} style={{background: 'rgba(255,255,255,0.1)', padding: 4, borderRadius: '50%', display:'flex', border:'none', cursor:'pointer'}}><X size={16} color="var(--text-sec)" /></button>
                          </div>
                      )}
                      
                      <div className="chat-input-wrapper">
                        <button 
                          onClick={() => setShowEmojiPicker(!showEmojiPicker)} 
                          style={{background:'transparent', border:'none', color:'#72767d', padding:'8px', cursor:'pointer', fontSize:18}}
                          title="Эмодзи">
                          😊
                        </button>
                        
                        {showEmojiPicker && (
                          <div style={{position:'absolute', bottom:'60px', left:'20px', background:'#202225', borderRadius:8, padding:8, display:'grid', gridTemplateColumns:'repeat(8, 1fr)', gap:4, zIndex:1000, boxShadow:'0 4px 20px rgba(0,0,0,0.4)'}}>
                            {['😀','😂','❤️','🔥','👍','👎','😮','😢','😡','🎉','🚀','💯','👀','🤔','😎','🥳'].map(emoji => (
                              <button 
                                key={emoji} 
                                onClick={() => {
                                  setInput(prev => prev + emoji);
                                  setShowEmojiPicker(false);
                                }}
                                style={{background:'transparent', border:'none', fontSize:22, padding:4, cursor:'pointer'}}>
                                {emoji}
                              </button>
                            ))}
                          </div>
                        )}
                        
                        {isUploading && uploadState.active ? (
                            <div style={{display:'flex', alignItems:'center', gap: 15, flex: 1, padding: '5px 10px'}}>
                              <div style={{position: 'relative', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <svg width="40" height="40" viewBox="0 0 40 40" style={{transform: 'rotate(-90deg)'}}>
                                  <circle cx="20" cy="20" r="18" fill="none" stroke="var(--border)" strokeWidth="3" />
                                  <circle cx="20" cy="20" r="18" fill="none" stroke="var(--aura-red)" strokeWidth="3" strokeDasharray="113.097" strokeDashoffset={113.097 - (113.097 * uploadState.progress / 100)} strokeLinecap="round" style={{transition: 'stroke-dashoffset 0.2s ease-out'}} />
                                </svg>
                                <button onClick={cancelUpload} style={{position: 'absolute', background: 'var(--bg-card)', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid var(--border)'}}><X size={12} color="var(--text-main)" /></button>
                              </div>
                              <div style={{display:'flex', flexDirection:'column', flex: 1, overflow:'hidden'}}>
                                <span style={{fontSize: 14, fontWeight: 600, color: 'var(--text-main)', whiteSpace:'nowrap', textOverflow:'ellipsis', overflow:'hidden'}}>{safeText(uploadState.fileName)}</span>
                                <span style={{fontSize: 12, color: 'var(--text-sec)'}}>Загрузка... { Math .round(uploadState.progress)}%</span>
                              </div>
                            </div>
                        ) : isUploading ? (
                            <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '10px 0'}}>
                              <RefreshCw className="animate-spin" color="var(--aura-red)" size={24} />
                            </div>
                        ) : (
                            <>
                              <button onClick={()=>{  document .getElementById('photo-upload').click(); }}><Paperclip size={26} color="var(--aura-red)" /></button>
                              <input type="file" id="photo-upload" accept="*/*" style={{display:'none'}} onChange={handleFileUpload} />
                              <input
                                  className="premium-input"
                                  value={input}
                                  onChange={handleTyping}
                                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                                  placeholder={previewFile ? "Подпись (необязательно)..." : "Сообщение..."}
                              />
                              {input.trim() || editingMsg || previewFile ?
                                  <button onClick={()=>sendMessage()}><Send size={24} color="var(--aura-red)"/></button>
                                  :
                                  <div style={{display:'flex', gap:20}}>
                                    <button onClick={()=>startMediaRecording('video')}><Camera size={26} color="var(--aura-red)"/></button>
                                    <button onClick={()=>startMediaRecording('voice')}><Mic size={26} color="var(--aura-red)"/></button>
                                  </div>
                              }
                            </>
                        )}
                      </div>
                    </div>
                ) : (
                    <div style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', opacity:0.04}}><Zap size={300} fill="currentColor" /><h1 style={{letterSpacing:25, fontSize:70, fontWeight:900}}>AURA</h1></div>
                )}
                
                {showMediaGallery && selectedPeer && (
                    <div className="media-panel">
                      <div className="nav-bar"><b style={{fontSize:15}}>Медиа история</b><button onClick={()=>setShowMediaGallery(false)}><X size={20} style={{opacity:0.5}} /></button></div>
                      <div style={{display:'flex', gap:10, padding:15, borderBottom:'1px solid var(--border)'}}><button style={{flex:1, background: galleryTab === 'image' ? 'rgba(88,101,242,0.1)' : 'transparent', color: galleryTab === 'image' ? 'var(--aura-red)' : 'var(--text-main)', padding:'8px', borderRadius:10, fontWeight:600}} onClick={()=>setGalleryTab('image')}><ImageIcon size={16} style={{marginRight:5, verticalAlign:'middle'}}/> Фото</button><button style={{flex:1, background: galleryTab === 'voice' ? 'rgba(88,101,242,0.1)' : 'transparent', color: galleryTab === 'voice' ? 'var(--aura-red)' : 'var(--text-main)', padding:'8px', borderRadius:10, fontWeight:600}} onClick={()=>setGalleryTab('voice')}><Music size={16} style={{marginRight:5, verticalAlign:'middle'}}/> Голос</button></div>
                      <div style={{flex:1, overflowY:'auto', padding:10, display:'grid', gridTemplateColumns: galleryTab === 'image' ? '1fr 1fr' : '1fr', gap:10, alignContent:'start'}}>{chatMessages.filter(m => galleryTab === 'image' ? m.type === 'image' : m.type === 'voice' || m.type === 'video_circle').map(m => (galleryTab === 'image' ? <img key={m.id} src={safeText(m.text)} style={{width:'100%', aspectRatio:'1/1', objectFit:'cover', borderRadius:12, cursor:'pointer'}} onClick={()=>  window .open(m.text,'_blank')} alt="img" /> : <div key={m.id} style={{background:'var(--bg-card)', padding:10, borderRadius:12}}>{m.type === 'voice' ? <VoicePlayer src={m.text} /> : <VideoCirclePlayer msg={m} />}</div>))}</div>
                    </div>
                )}
              </div>
          )}
          
          {view === 'settings' && (
              <div style={{flex:1, background:'var(--bg-main)', display:'flex', flexDirection:'column'}}>
                <div className="nav-bar"><button onClick={()=>setView('chats')}><ChevronLeft size={32} color="var(--text-main)"/></button><h2>Настройки Aura</h2><div style={{width:32}}/></div>
                <div style={{flex:1, overflowY:'auto', padding:'40px 20px', textAlign:'center'}}>
                  <img src={safeText(user?.avatar)} className="avatar" style={{width:140, height:140, border:'4px solid var(--aura-red)', margin:'0 auto 20px', boxShadow:'0 10px 40px var(--aura-red-glow)', display:'block'}} alt="me" />
                  <h2 style={{fontSize:32}}>{safeText(user?.name)}#{String(user?.discriminator || '0000')}</h2>
                  <p style={{opacity:0.5, marginBottom:40}}>@{safeText(user?.username)}</p>
                  
                  <div style={{maxWidth:600, margin:'0 auto', display:'grid', gap:20}}>
                    <div style={{background:'var(--bg-card)', padding:25, borderRadius:24, border:'1px solid var(--border)', textAlign:'left'}}>
                      <label style={{fontSize:12, textTransform:'uppercase', opacity:0.6, fontWeight:800, letterSpacing:1}}>Уведомления (iOS)</label>
                      <p style={{fontSize:13, opacity:0.7, marginTop:5}}>Разрешите системе отправлять пуши, когда приложение свернуто.</p>
                      <button onClick={() => {
                        if ('Notification' in  window ) {
                          Notification.requestPermission().then(p => {
                            if (p === 'granted') alert('Уведомления успешно включены!');
                            else alert('Разрешение не получено. Проверьте настройки iOS.');
                          });
                        } else {
                          alert('Ваш браузер/iOS пока не поддерживает системные уведомления.');
                        }
                      }} style={{width:'100%', padding:16, marginTop:15, borderRadius:16, background:'rgba(52,199,89,0.1)', color:'#34C759', display:'flex', alignItems:'center', justifyContent:'center', gap:10, fontWeight:700, border:'none', cursor:'pointer'}}>
                        <Bell size={20}/> Включить уведомления
                      </button>
                    </div>
                    
                    <div style={{background:'var(--bg-card)', padding:25, borderRadius:24, border:'1px solid var(--border)', textAlign:'left'}}>
                      <label style={{fontSize:12, textTransform:'uppercase', opacity:0.6, fontWeight:800, letterSpacing:1}}>Оформление</label>
                      <div style={{display:'flex', gap:10, marginTop:15}}>
                        <button onClick={()=>{setTheme('light');  localStorage .setItem('aura_theme','light')}} style={{flex:1, padding:14, borderRadius:16, border:'1px solid var(--border)', background:theme==='light'?'var(--aura-red)':'var(--bg-main)', color:theme==='light'?'#fff':'var(--text-main)', fontWeight:700}}>Light</button>
                        <button onClick={()=>{setTheme('dark');  localStorage .setItem('aura_theme','dark')}} style={{flex:1, padding:14, borderRadius:16, border:'1px solid var(--border)', background:theme==='dark'?'var(--aura-red)':'var(--bg-main)', color:theme==='dark'?'#fff':'var(--text-main)', fontWeight:700}}>Dark</button>
                        <button onClick={()=>{setTheme('mirror');  localStorage .setItem('aura_theme','mirror')}} style={{flex:1, padding:14, borderRadius:16, border:'1px solid var(--border)', background:theme==='mirror'?'var(--aura-red)':'var(--bg-main)', color:theme==='mirror'?'#fff':'var(--text-main)', fontWeight:700}}>Mirror</button>
                      </div>
                    </div>
                    
                    <div style={{background:'var(--bg-card)', padding:25, borderRadius:24, border:'1px solid var(--border)', textAlign:'left'}}>
                      <label style={{fontSize:12, textTransform:'uppercase', opacity:0.6, fontWeight:800, letterSpacing:1}}>Приватность</label>
                      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:15}}>
                        <span style={{fontWeight:600}}>Показывать время захода</span>
                        <div onClick={() => { 
                          const newVal = user.showLastSeen === false ? true : false; 
                          setUser(prev => ({...prev, showLastSeen: newVal})); 
                          updateDoc(doc(db,'artifacts',appId,'public','data',USERS_COL,user.username), { showLastSeen: newVal, status: newVal ? 'online' : Date.now(), lastActiveTS: Date.now() }).catch( console .error); 
                          const creds =  JSON .parse( localStorage .getItem('aura_creds') || '{}'); 
                          creds.showLastSeen = newVal; 
                           localStorage .setItem('aura_creds',  JSON .stringify(creds)); 
                        }} style={{ width: 50, height: 28, borderRadius: 14, background: user.showLastSeen !== false ? '#34C759' : 'rgba(255,255,255,0.1)', position: 'relative', cursor: 'pointer', transition: 'background 0.3s ease' }}>
                          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'white', position: 'absolute', top: 2, left: user.showLastSeen !== false ? 24 : 2, transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}/>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{background:'var(--bg-card)', padding:25, borderRadius:24, border:'1px solid var(--border)', textAlign:'left'}}>
                      <label style={{fontSize:12, textTransform:'uppercase', opacity:0.6, fontWeight:800, letterSpacing:1}}>Профиль</label>
                      <div style={{display:'flex', gap:16, marginTop:16, alignItems:'flex-start'}}>
                        <div style={{position:'relative', flexShrink:0}}>
                          <img
                            src={safeText(profileDraft.avatar) || `https://api.dicebear.com/7.x/initials/svg?seed=${safeText(user?.username)}`}
                            alt="avatar"
                            style={{width:80, height:80, borderRadius:'50%', objectFit:'cover', border:'2px solid var(--border)'}}
                          />
                          <label style={{position:'absolute', right:-4, bottom:-4, width:28, height:28, borderRadius:'50%', background:'var(--aura-red)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}}>
                            <Camera size={14}/>
                            <input type="file" accept="image/*" onChange={handleAvatarFileUpload} style={{display:'none'}}/>
                          </label>
                        </div>
                        <div style={{flex:1, display:'flex', flexDirection:'column', gap:10}}>
                          <input
                            placeholder="Отображаемое имя"
                            value={profileDraft.name}
                            onChange={e => setProfileDraft(prev => ({...prev, name: e.target.value}))}
                            maxLength={32}
                            style={{padding:'10px 14px', borderRadius:12, background:'var(--bg-main)', border:'1px solid var(--border)', color:'var(--text-main)', fontSize:14}}
                          />
                          <input
                            placeholder="URL аватара (или загрузите файл слева)"
                            value={profileDraft.avatar}
                            onChange={e => setProfileDraft(prev => ({...prev, avatar: e.target.value}))}
                            style={{padding:'10px 14px', borderRadius:12, background:'var(--bg-main)', border:'1px solid var(--border)', color:'var(--text-main)', fontSize:13}}
                          />
                          <div style={{fontSize:12, opacity:0.5}}>Логин <b>{safeText(user?.username)}</b>#{String(user?.discriminator || '0000')} нельзя изменить.</div>
                        </div>
                      </div>
                      <button
                        onClick={saveProfile}
                        disabled={profileSaving || ((profileDraft.name || '').trim() === (user?.name || '') && (profileDraft.avatar || '') === (user?.avatar || ''))}
                        style={{width:'100%', padding:14, marginTop:16, borderRadius:14, background:'var(--aura-red)', color:'#fff', fontWeight:700, border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8, opacity:profileSaving?0.6:1}}>
                        <Save size={16}/> {profileSaving ? 'Сохраняем...' : 'Сохранить профиль'}
                      </button>
                    </div>

                    <div style={{background:'var(--bg-card)', padding:25, borderRadius:24, border:'1px solid var(--border)', textAlign:'left'}}>
                      <label style={{fontSize:12, textTransform:'uppercase', opacity:0.6, fontWeight:800, letterSpacing:1}}>Аудио устройства</label>
                      <p style={{fontSize:13, opacity:0.7, marginTop:5}}>Выбор применяется к голосовым каналам и звонкам.</p>

                      <div style={{display:'flex', alignItems:'center', gap:8, marginTop:14}}>
                        <Mic size={16} color="var(--text-sec)"/>
                        <span style={{fontSize:13, fontWeight:600, flex:1}}>Микрофон</span>
                      </div>
                      <select
                        value={selectedDevices.audioIn || ''}
                        onChange={e => setSelectedDevices(prev => ({...prev, audioIn: e.target.value}))}
                        style={{width:'100%', padding:'10px 12px', marginTop:6, borderRadius:12, background:'var(--bg-main)', border:'1px solid var(--border)', color:'var(--text-main)', fontSize:13}}>
                        {devices.audioIn.length === 0 && <option value="">— нажмите «Обновить» и разрешите доступ к микрофону —</option>}
                        {devices.audioIn.map((d, idx) => (
                          <option key={d.deviceId || `mic-${idx}`} value={d.deviceId}>{safeText(d.label) || `Микрофон ${idx + 1}`}</option>
                        ))}
                      </select>

                      <div style={{display:'flex', alignItems:'center', gap:8, marginTop:14}}>
                        <Headphones size={16} color="var(--text-sec)"/>
                        <span style={{fontSize:13, fontWeight:600, flex:1}}>Наушники / Динамики</span>
                      </div>
                      <select
                        value={selectedDevices.audioOut || ''}
                        onChange={e => setSelectedDevices(prev => ({...prev, audioOut: e.target.value}))}
                        style={{width:'100%', padding:'10px 12px', marginTop:6, borderRadius:12, background:'var(--bg-main)', border:'1px solid var(--border)', color:'var(--text-main)', fontSize:13}}>
                        {devices.audioOut.length === 0 && <option value="">— устройства вывода будут видны после первого включения микрофона —</option>}
                        {devices.audioOut.map((d, idx) => (
                          <option key={d.deviceId || `out-${idx}`} value={d.deviceId}>{safeText(d.label) || `Динамик ${idx + 1}`}</option>
                        ))}
                      </select>

                      <button
                        onClick={() => getMediaDevices(true)}
                        style={{width:'100%', padding:12, marginTop:14, borderRadius:12, background:'rgba(88,101,242,0.1)', color:'#5865F2', fontWeight:700, border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8}}>
                        <RefreshCw size={14}/> Обновить список устройств
                      </button>
                    </div>

                    {window.aura?.isElectron && (
                      <div style={{background:'var(--bg-card)', padding:25, borderRadius:24, border:'1px solid var(--border)', textAlign:'left'}}>
                        <label style={{fontSize:12, textTransform:'uppercase', opacity:0.6, fontWeight:800, letterSpacing:1}}>Обновления</label>
                        <p style={{fontSize:13, opacity:0.7, marginTop:5}}>
                          Текущая версия: <b><AppVersion /></b>. Обновления скачиваются автоматически в фоне; полоска внизу появится, когда новая версия будет готова к установке.
                        </p>
                        <button
                          onClick={() => { if (window.aura?.checkForUpdates) window.aura.checkForUpdates(); }}
                          style={{width:'100%', padding:12, marginTop:14, borderRadius:12, background:'rgba(88,101,242,0.1)', color:'#5865F2', fontWeight:700, border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8}}>
                          <RefreshCw size={14}/> Проверить обновления
                        </button>
                      </div>
                    )}

                    <div style={{background:'var(--bg-card)', padding:25, borderRadius:24, border:'1px solid var(--border)', textAlign:'left'}}>
                      <label style={{fontSize:12, textTransform:'uppercase', opacity:0.6, fontWeight:800, letterSpacing:1}}>Кэш и Данные</label>
                      <button onClick={clearAllDialogs} style={{width:'100%', padding:16, marginTop:15, borderRadius:16, background:'rgba(218, 55, 60, 0.1)', color:'#da373c', display:'flex', alignItems:'center', justifyContent:'center', gap:10, fontWeight:700, border:'none', cursor:'pointer'}}>
                        <Trash2 size={20}/> Очистить все диалоги
                      </button>
                      <button onClick={()=>{  localStorage .removeItem('aura_msgs_cache');  window .location.reload(); }} style={{width:'100%', padding:16, marginTop:15, borderRadius:16, background:'rgba(88,101,242,0.1)', color:'#5865F2', display:'flex', alignItems:'center', justifyContent:'center', gap:10, fontWeight:700, border:'none', cursor:'pointer'}}>
                        <Eraser size={20}/> Очистить локальный кэш
                      </button>
                    </div>
                    
                    <button className="btn-aura-action" style={{background:'#FF3B30'}} onClick={()=>{  localStorage .clear();  window .location.reload()}}>ВЫЙТИ ИЗ АККАУНТА</button>
                  </div>
                </div>
              </div>
          )}
          
          {contextMenu && (
            <div style={{position:'fixed', inset:0, zIndex:5000}} onClick={()=>setContextMenu(null)}>
              <div className="context-menu" style={{top:contextMenu.rect.top, left: contextMenu.type === 'msg' ? contextMenu.rect.left - 100 : contextMenu.rect.left + 50}}>
                {contextMenu.type === 'msg' ? (
                  <>
                    <div style={{padding:'10px', display:'flex', gap:8, borderBottom:'1px solid var(--border)', justifyContent:'center'}}>
                      {['❤️','👍','🔥','😮','😡'].map(emo => (
                        <button key={emo} style={{fontSize:20}} onClick={()=>{ updateDoc(doc(db,'artifacts',appId,'public','data',MESSAGES_COL,contextMenu.id), {[`reactions.${user.username}`]: emo}); setContextMenu(null); }}>{emo}</button>
                      ))}
                    </div>
                    <button className="context-item" onClick={()=>{setReplyTo(contextMenu.item); setContextMenu(null);}}><Reply size={16}/> Ответить</button>
                    <button className="context-item" onClick={()=>{updateDoc(doc(db,'artifacts',appId,'public','data',MESSAGES_COL,contextMenu.id), {isPinned: !contextMenu.item.isPinned}); setContextMenu(null);}}><Pin size={16}/> {contextMenu.item.isPinned ? 'Открепить' : 'Закрепить'}</button>
                    {contextMenu.item.uid === user.username && <button className="context-item" onClick={()=>{setEditingMsg(contextMenu.item); setInput(typeof contextMenu.item.text === 'string' ? contextMenu.item.text : ''); setContextMenu(null);}}><Edit3 size={16}/> Изменить</button>}
                    <button className="context-item danger" onClick={()=>{ updateDoc(doc(db,'artifacts',appId,'public','data',MESSAGES_COL,contextMenu.id), {hiddenFor: arrayUnion(user.username)}); setContextMenu(null); }}><Trash size={16}/> Удалить у себя</button>
                    {(contextMenu.item.uid === user.username || user.role === 'admin') && <button className="context-item danger" onClick={()=>{ deleteDoc(doc(db,'artifacts',appId,'public','data',MESSAGES_COL,contextMenu.id)); setContextMenu(null); }}><Trash2 size={16}/> Удалить у всех</button>}
                  </>
                ) : (
                  <>
                    <button className="context-item" onClick={()=>{ togglePinChat(contextMenu.item.username); setContextMenu(null); }}><Pin size={16}/> {user.pinnedChats?.includes(contextMenu.item.username) ? 'Открепить диалог' : 'Закрепить диалог'}</button>
                    <button className="context-item danger" onClick={()=>{ deleteDialog(contextMenu.item.username, false); setContextMenu(null); }}><Trash size={16}/> Удалить у себя</button>
                    <button className="context-item danger" onClick={()=>{ deleteDialog(contextMenu.item.username, true); setContextMenu(null); }}><Trash2 size={16}/> Удалить у обоих</button>
                  </>
                )}
              </div>
            </div>
          )}
          
          {/* --- ОБНОВЛЕННЫЙ ЗВОНОК (PEERJS СЕТКА + АНАЛИЗАТОР) --- */}
          {(callSession || groupCall) && (
              <div className={`call-overlay ${isCallMinimized ? 'minimized' : ''}`} onClick={() => isCallMinimized && setIsCallMinimized(false)}>
                {isCallMinimized && !groupCall ? (
                    <div style={{display: 'flex', alignItems: 'center', gap: 10, background: '#34C759', padding: '10px 20px', borderRadius: 30, color: 'white', fontWeight: 600, boxShadow: '0 10px 25px rgba(52,199,89,0.4)'}}>
                      <PhoneCall size={20} className="animate-pulse" />
                      <span>{callSession?.status === 'active' ? `${ Math .floor(callDuration/60).toString().padStart(2,'0')}:${(callDuration%60).toString().padStart(2,'0')}` : 'Звонок...'}</span>
                      <Maximize size={18} style={{marginLeft: 10}} />
                    </div>
                ) : groupCall ? (
                    <div style={{position: 'relative', width: '100%', height: '100%', background: '#111214', display: 'flex', flexDirection: 'column'}}>

                      {/* СКРЫТЫЕ АУДИО-ЭЛЕМЕНТЫ ПО ОДНОМУ НА ПИРА.
                          Аудио воспроизводится здесь, а не из <video>, потому что:
                          1) <audio> не блокируется autoplay-policy после клика «Войти»
                          2) при сворачивании грид/полноэкранном просмотре звук не пропадает
                          3) deafen и setSinkId применяются к одному месту */}
                      {Object.entries(groupRemoteStreams).map(([peerId, stream]) => (
                        <audio
                          key={`audio-${peerId}`}
                          ref={(el) => {
                            if (!el) return;
                            if (el.srcObject !== stream) {
                              el.srcObject = stream;
                              const p = el.play();
                              if (p && typeof p.catch === 'function') p.catch(() => {});
                            }
                            el.muted = !!groupCallDeafened;
                            el.volume = groupCallDeafened ? 0 : 1;
                            if (typeof el.setSinkId === 'function' && selectedDevices?.audioOut) {
                              el.setSinkId(selectedDevices.audioOut).catch(() => {});
                            }
                          }}
                          autoPlay
                          playsInline
                          style={{ display: 'none' }}
                        />
                      ))}

                      {/* ШАПКА */}
                      <div style={{
                        position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 20, 
                        background: 'rgba(30, 31, 34, 0.9)', backdropFilter: 'blur(20px)', padding: '6px 6px 6px 16px', 
                        borderRadius: 30, display: 'flex', alignItems: 'center', gap: 20, border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                      }}>
                        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                          <div style={{width: 28, height: 28, borderRadius: '50%', background: '#5865F2', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <PhoneCall size={14} color="white" />
                          </div>
                          <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            <div style={{fontSize: 14, fontWeight: 700, lineHeight: 1, color: 'white'}}>{safeText(groupCall.name)}</div>
                            <div style={{fontSize: 11, opacity: 0.7, lineHeight: 1, color: 'white'}}>{groupCall.participants?.length || 1} участник(ов) • {Object.keys(groupRemoteStreams).length + 1} онлайн</div>
                          </div>
                        </div>
                        <button onClick={() => leaveGroupCall(true)} style={{background: '#da373c', color: 'white', border: 'none', padding: '6px 16px', borderRadius: 24, fontWeight: 600, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6}}>
                          <PhoneOff size={14} /> Покинуть
                        </button>
                      </div>
                      
                      {/* АДАПТИВНАЯ СЕТКА УЧАСТНИКОВ */}
                      <div style={{flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 220px))', gridAutoRows: '150px', gap: 12, padding: '80px 24px 120px', alignContent: 'flex-start', justifyContent: 'center', overflowY: 'auto'}}>

                        {/* Локальный пользователь */}
                        <div onClick={() => setExpandedTileUser(user.username)} title="Раскрыть на весь экран" className={`group-tile ${speakingUsers[getCleanPeerId(groupCall.id, user.username)] ? 'speaking-blue' : ''}`} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderRadius: 12, cursor: 'pointer'}}>
                          <video
                            ref={el => {
                              if (!el) return;
                              el.muted = true;
                              el.volume = 0;
                              if (localGroupStreamRef.current && el.srcObject !== localGroupStreamRef.current) {
                                el.srcObject = localGroupStreamRef.current;
                              }
                            }}
                            autoPlay muted playsInline
                            style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, display: groupCallVideoEnabled ? 'block' : 'none'}}
                          />
                          {!groupCallVideoEnabled && (
                            <div style={{position: 'absolute', inset: 0, background: '#2b2d31', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1}}>
                              <img src={safeText(user?.avatar) || `https://api.dicebear.com/7.x/avataaars/svg?seed=${safeText(user?.username)}`} style={{width: 60, height: 60, borderRadius: '50%'}} alt="you" />
                            </div>
                          )}
                          <div style={{position: 'absolute', bottom: 12, left: 12, background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: 6, fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, zIndex: 2, color: 'white'}}>
                            {safeText(user?.name || user?.username)} (Вы)
                            {groupCallMuted && <MicMute size={14} color="#da373c" />}
                          </div>
                          {groupCallVideoEnabled && (
                            <div style={{position: 'absolute', top: 12, right: 12, background: '#da373c', padding: '4px 8px', borderRadius: 6, fontSize: 11, fontWeight: 800, color: 'white', zIndex: 2, letterSpacing: 0.5}}>
                              В ЭФИРЕ
                            </div>
                          )}
                        </div>
                        
                        {/* Удаленные пользователи */}
                        {groupCall.participants?.filter(p => p.username !== user.username).map((peer) => {
                          const peerId = getCleanPeerId(groupCall.id, peer.username);
                          const stream = groupRemoteStreams[peerId];
                          const isSpeaking = speakingUsers[peerId];
                          
                          return (
                            <div key={peer.username} onClick={() => setExpandedTileUser(peer.username)} title="Раскрыть на весь экран" className={`group-tile ${isSpeaking ? 'speaking-blue' : ''}`} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderRadius: 12, cursor: 'pointer'}}>
                              {stream ? (
                                <video
                                  ref={el => {
                                    if (!el) return;
                                    if (el.srcObject !== stream) {
                                      el.srcObject = stream;
                                      const p = el.play();
                                      if (p && typeof p.catch === 'function') p.catch(() => {});
                                    }
                                    el.muted = true;
                                    el.volume = 0;
                                  }}
                                  autoPlay playsInline muted
                                  style={{width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0}}
                                />
                              ) : (
                                <div style={{position: 'absolute', inset: 0, background: '#2b2d31', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1}}>
                                  <img src={safeText(peer.avatar) || `https://api.dicebear.com/7.x/avataaars/svg?seed=${safeText(peer.username)}`} style={{width: 60, height: 60, borderRadius: '50%'}} alt="peer" />
                                </div>
                              )}
                              <div style={{position: 'absolute', bottom: 12, left: 12, background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: 6, fontSize: 13, fontWeight: 600, zIndex: 2, color: 'white'}}>
                                {safeText(peer.name)}
                              </div>
                              {peer.isStreaming && (
                                <div style={{position: 'absolute', top: 12, right: 12, background: '#da373c', padding: '4px 8px', borderRadius: 6, fontSize: 11, fontWeight: 800, color: 'white', zIndex: 2, letterSpacing: 0.5}}>
                                  В ЭФИРЕ
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Полноэкранная плитка одного участника (по клику) */}
                      {expandedTileUser && (() => {
                        const isLocal = expandedTileUser === user.username;
                        const peerObj = isLocal ? user : groupCall.participants?.find(p => p.username === expandedTileUser);
                        const peerId = isLocal ? null : getCleanPeerId(groupCall.id, expandedTileUser);
                        const stream = isLocal ? localGroupStreamRef.current : groupRemoteStreams[peerId];
                        const hasVideo = isLocal ? groupCallVideoEnabled : !!stream?.getVideoTracks?.().length;
                        return (
                          <div onClick={() => setExpandedTileUser(null)} style={{position:'absolute', inset:0, background:'#000', zIndex:40, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}}>
                            {stream && hasVideo ? (
                              <video
                                ref={el => {
                                  if (!el) return;
                                  if (el.srcObject !== stream) {
                                    el.srcObject = stream;
                                    const p = el.play();
                                    if (p && typeof p.catch === 'function') p.catch(() => {});
                                  }
                                  // Аудио играет через скрытые <audio>, поэтому полноэкранное видео всегда без звука.
                                  el.muted = true;
                                  el.volume = 0;
                                }}
                                autoPlay playsInline muted
                                style={{width:'100%', height:'100%', objectFit:'contain', background:'#000'}}
                              />
                            ) : (
                              <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:16}}>
                                <img src={safeText(peerObj?.avatar) || `https://api.dicebear.com/7.x/avataaars/svg?seed=${safeText(peerObj?.username)}`} style={{width:160, height:160, borderRadius:'50%'}} alt="" />
                                <div style={{color:'white', fontSize:22, fontWeight:700}}>{safeText(peerObj?.name || peerObj?.username)}</div>
                                <div style={{color:'#b9bbbe', fontSize:13}}>Нет демонстрации экрана</div>
                              </div>
                            )}
                            <button onClick={(e)=>{ e.stopPropagation(); setExpandedTileUser(null); }} style={{position:'absolute', top:20, right:20, background:'rgba(0,0,0,0.6)', border:'1px solid rgba(255,255,255,0.2)', color:'white', padding:'8px 14px', borderRadius:8, fontSize:13, cursor:'pointer', display:'flex', alignItems:'center', gap:6}}>
                              <Minimize size={14}/> Свернуть (Esc)
                            </button>
                            <div style={{position:'absolute', bottom:20, left:20, background:'rgba(0,0,0,0.6)', padding:'6px 12px', borderRadius:6, color:'white', fontSize:14, fontWeight:600}}>
                              {safeText(peerObj?.name || peerObj?.username)}{isLocal ? ' (Вы)' : ''}
                            </div>
                          </div>
                        );
                      })()}

                      {/* НИЖНЯЯ ПАНЕЛЬ УПРАВЛЕНИЯ ЗВОНКОМ КАК В DISCORD */}
                      <div style={{
                        position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
                        background: '#1e1f22', borderRadius: 16, padding: '8px 16px', display: 'flex',
                        alignItems: 'center', gap: 24, boxShadow: '0 8px 24px rgba(0,0,0,0.4)', zIndex: 50
                      }}>
                         <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
                           <div style={{position: 'relative'}}>
                              <div style={{width: 32, height: 32, borderRadius: '50%', background: '#23a559', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Activity size={16} color="white" />
                              </div>
                           </div>
                           <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
                             <span style={{color: '#23a559', fontSize: 13, fontWeight: 700, lineHeight: 1}}>Голосовая связь подключена</span>
                             <span style={{color: '#949ba4', fontSize: 11, lineHeight: 1}}>Aura Voice • {currentPing > 0 ? `${currentPing} мс` : 'Проверка пинга...'}</span>
                           </div>
                         </div>
              
                         <div style={{width: 1, height: 32, background: 'rgba(255,255,255,0.1)'}} />
              
                         <div style={{display: 'flex', gap: 12}}>
                           <button title={groupCallMuted ? 'Включить микрофон' : 'Выключить микрофон'} className="btn-call" onClick={toggleGroupMic} style={{background: groupCallMuted ? 'white' : '#2b2d31', color: groupCallMuted ? '#da373c' : 'white', width: 44, height: 44}}>
                              {groupCallMuted ? <MicMute size={20}/> : <Mic size={20}/>}
                           </button>
                           <button title={groupCallDeafened ? 'Включить звук' : 'Оглушить (мут всех)'} className="btn-call" onClick={toggleGroupDeafen} style={{background: groupCallDeafened ? 'white' : '#2b2d31', color: groupCallDeafened ? '#da373c' : 'white', width: 44, height: 44, position: 'relative'}}>
                              <Headphones size={20}/>
                              {groupCallDeafened && (
                                <span style={{position:'absolute', top:'50%', left:'50%', width:30, height:2, background:'#da373c', transform:'translate(-50%,-50%) rotate(-45deg)', borderRadius:1}} />
                              )}
                           </button>
                           <button title="Демонстрация экрана" className="btn-call" onClick={toggleGroupScreenShare} style={{background: !groupCallVideoEnabled ? 'white' : '#2b2d31', color: !groupCallVideoEnabled ? '#da373c' : 'white', width: 44, height: 44}}>
                              {groupCallVideoEnabled ? <Video size={20}/> : <Monitor size={20}/>}
                           </button>
                           <button title="Свернуть в трей" className="btn-call" onClick={() => { if (window.aura?.minimizeToTray) window.aura.minimizeToTray(); }} style={{background: '#2b2d31', color: 'white', width: 44, height: 44}}>
                              <Minimize size={20}/>
                           </button>
                           <button title="Покинуть голосовой канал" className="btn-call" onClick={() => leaveGroupCall(true)} style={{background: '#da373c', color: 'white', width: 44, height: 44}}>
                              <PhoneOff size={20}/>
                           </button>
                         </div>
                      </div>

                    </div>
                ) : (
                    <>
                      <button
                          onClick={(e) => { e.stopPropagation(); setIsCallMinimized(true); }}
                          style={{position: 'absolute', top: 'calc(20px + env(safe-area-inset-top))', left: 20, zIndex: 50, background: 'rgba(255,255,255,0.15)', padding: 12, borderRadius: '50%', border: 'none', cursor: 'pointer', backdropFilter: 'blur(10px)'}}>
                        <Minimize color="white" size={24} />
                      </button>
                      <div className="call-bg-blob" />
                      {(!remoteStreamConnected || callSession.type !== 'video' || callSession.status === 'calling') && (
                          <div className="call-header-glass">
                            <div className={`call-avatar-wrapper ${callSession.status === 'calling' ? 'calling' : ''}`}>
                              <img
                                  src={safeText(callSession.peer?.avatar) || `https://api.dicebear.com/7.x/initials/svg?seed=${safeText(callSession.caller)}`}
                                  className="call-avatar-pulse"
                                  alt="avatar"
                              />
                            </div>
                            <h2 style={{fontSize: 26, fontWeight: 800, margin: 0, zIndex: 2}}>{safeText(callSession.peer?.name || callSession.caller)}</h2>
                            <div className="call-status-text">
                              {callSession.status === 'active'
                                  ? `${ Math .floor(callDuration/60).toString().padStart(2,'0')}:${(callDuration%60).toString().padStart(2,'0')}`
                                  : (callSession.isInitiator ? 'Исходящий вызов...' : 'Входящий звонок...')}
                            </div>
                          </div>
                      )}
                      
                      <div style={{position:'absolute', bottom:100, display:'flex', gap:10, zIndex: 20, flexWrap: 'wrap', justifyContent:'center', width:'100%'}}>
                        {devices?.audioIn?.length > 0 && (
                            <div className="device-wrapper" onClick={e => e.stopPropagation()}>
                              <Mic size={14} color="rgba(255,255,255,0.7)" />
                              <select className="call-device-select" value={selectedDevices.audioIn || ''} onChange={e => setSelectedDevices(prev => ({...prev, audioIn: e.target.value}))}>
                                {devices.audioIn.map((d, idx) => <option key={d.deviceId || `mic-${idx}`} value={d.deviceId}>{safeText(d.label) || `Микрофон ${idx + 1}`}</option>)}
                              </select>
                            </div>
                        )}
                        {devices?.audioOut?.length > 0 && (
                            <div className="device-wrapper" onClick={e => e.stopPropagation()}>
                              <Volume2 size={14} color="rgba(255,255,255,0.7)" />
                              <select className="call-device-select" value={selectedDevices.audioOut || ''} onChange={e => setSelectedDevices(prev => ({...prev, audioOut: e.target.value}))}>
                                {devices.audioOut.map((d, idx) => <option key={d.deviceId || `out-${idx}`} value={d.deviceId}>{safeText(d.label) || `Динамик ${idx + 1}`}</option>)}
                              </select>
                            </div>
                        )}
                      </div>
                      
                      <div style={{position:'absolute', bottom:30, display:'flex', gap:15, zIndex: 30}}>
                        <button className="btn-call" onClick={(e) => { e.stopPropagation(); toggleMic(); }} style={{background: callState.micMuted ? '#FF3B30' : 'rgba(255,255,255,0.2)'}}>
                          {callState.micMuted ? <MicMute color="white" size={20}/> : <Mic color="white" size={20}/>}
                        </button>
                        {callSession.type === 'video' && (
                            <button className="btn-call" onClick={(e) => { e.stopPropagation(); toggleScreenShare(); }} style={{background: callState.screenShare ? 'var(--aura-red)' : 'rgba(255,255,255,0.2)'}}>
                              <Monitor color="white" size={20}/>
                            </button>
                        )}
                        {!callSession.isInitiator && callSession.status === 'calling' && (
                            <button onClick={(e) => { e.stopPropagation(); acceptCall(); }} className="btn-call" style={{background:'#34C759'}}>
                              <Phone color="white"/>
                            </button>
                        )}
                        <button onClick={(e) => { e.stopPropagation(); endCall(); }} className="btn-call" style={{background:'#FF3B30'}}>
                          <PhoneOff color="white"/>
                        </button>
                      </div>
                      {/* PING IN 1 ON 1 CALL */}
                      {callSession.status === 'active' && (
                         <div style={{position: 'absolute', top: 20, right: 20, zIndex: 50, background: 'rgba(0,0,0,0.6)', padding: '6px 12px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#34C759', border: '1px solid rgba(255,255,255,0.1)'}}>
                            <Activity size={14} />
                            {currentPing > 0 ? `${currentPing} мс` : 'Проверка пинга...'}
                         </div>
                      )}
                    </>
                )}
                
                {!groupCall && (
                  <>
                    <video ref={remoteVideoRef} className="call-video-main" autoPlay playsInline style={{ display: isCallMinimized ? 'none' : 'block' }} />
                    <video ref={localVideoRef} className="call-video-pip" autoPlay playsInline muted style={{ display: isCallMinimized ? 'none' : 'block' }} />
                  </>
                )}
              </div>
          )}
          
          {isRecording && (
            <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.9)', zIndex:200000, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
              <div style={{display:'flex', alignItems:'center', gap:15, marginBottom:20}}>
                <div style={{width:16, height:16, background:'#FF3B30', borderRadius:'50%', animation:'pulse 1s infinite'}} />
                <span style={{fontSize:40, fontWeight:800}}>{Math.floor(recTime/60)}:{(recTime%60).toString().padStart(2,'0')}</span>
              </div>
              {isRecording === 'video' && (
                <div className="circle-video" style={{marginBottom:30, width: 280, height: 280}}>
                  <video ref={v => { if(v) v.srcObject = mediaRec.current?.stream; }} autoPlay muted style={{width:'100%', height:'100%', objectFit:'cover', transform:'scaleX(-1)'}} />
                </div>
              )}
              <div style={{display:'flex', gap:30}}>
                <button onClick={()=>{ stopMediaRecording(true); }} style={{background:'rgba(255,255,255,0.1)', color:'white', padding:'16px 40px', borderRadius:25, fontWeight:700, border:'none', cursor:'pointer'}}>ОТМЕНА</button>
                <button onClick={()=>stopMediaRecording(false)} style={{background:'var(--aura-red)', color:'white', padding:'16px 50px', borderRadius:25, fontWeight:800, border:'none', cursor:'pointer'}}>ОТПРАВИТЬ</button>
              </div>
            </div>
          )}
          
          {toast && <AuraToast data={toast} onClose={()=>setToast(null)} onClick={()=>{ setSelectedPeer(allUsers.find(u=>u.username===toast.uid)); setView('chats'); setToast(null); }} />}

        </div>
      </div>
      {/* Discord-style полоска обновления внизу — портал в body, чтобы не зависеть от родительских stacking-контекстов */}
      {updateState && !updateBarDismissed && createPortal((
        <div style={{
          position:'fixed', bottom:0, left:0, right:0, zIndex:200001,
          background: updateState.stage === 'ready' ? '#3ba55d' : '#5865F2',
          color:'white', padding:'10px 20px',
          display:'flex', alignItems:'center', justifyContent:'center', gap:16,
          fontSize:14, fontWeight:600, boxShadow:'0 -4px 16px rgba(0,0,0,0.3)',
        }}>
          {updateState.stage === 'downloading' ? (
            <>
              <RefreshCw size={16} className="animate-spin" />
              <span>Загружается обновление{updateState.version ? ` ${updateState.version}` : ''}… {updateState.progress || 0}%</span>
            </>
          ) : (
            <>
              <span>✨ Обновление{updateState.version ? ` ${updateState.version}` : ''} готово к установке</span>
              <button
                onClick={installUpdateNow}
                style={{background:'rgba(255,255,255,0.2)', color:'white', border:'1px solid rgba(255,255,255,0.4)', padding:'4px 14px', borderRadius:4, cursor:'pointer', fontWeight:700}}
              >Перезапустить сейчас</button>
              <button
                onClick={()=>setUpdateBarDismissed(true)}
                title="Установится при выходе"
                style={{background:'transparent', color:'white', border:'none', cursor:'pointer', fontSize:18, marginLeft:4, opacity:0.8}}
              >×</button>
            </>
          )}
        </div>
      ), document.body)}

      {/* Пикер демонстрации экрана (Electron) — портал в body, поверх .call-overlay (z-index 150000) */}
      {screenPickerSources && createPortal((
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.75)', backdropFilter:'blur(4px)', zIndex:200000, display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div style={{background:'#2b2d31', borderRadius:12, padding:24, maxWidth:900, width:'90%', maxHeight:'85vh', overflowY:'auto', boxShadow:'0 20px 60px rgba(0,0,0,0.5)'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16}}>
              <div style={{fontSize:20, fontWeight:700, color:'white'}}>Выбор окна для демонстрации</div>
              <button onClick={()=>resolveScreenPicker(null)} style={{background:'transparent', color:'#b9bbbe', border:'none', cursor:'pointer', fontSize:24}}>×</button>
            </div>
            <div style={{fontSize:13, color:'#b9bbbe', marginBottom:16}}>
              {screenPickerSources.length === 0 ? 'Источники не найдены. Возможно, требуется разрешение системы.' : 'Системный звук будет захвачен автоматически (только для целого экрана на Windows).'}
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:12}}>
              {screenPickerSources.map(src => (
                <button
                  key={src.id}
                  onClick={()=>resolveScreenPicker(src.id)}
                  style={{background:'#1e1f22', border:'2px solid transparent', borderRadius:8, padding:8, cursor:'pointer', transition:'border-color 0.15s', textAlign:'left'}}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor = '#5865F2'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor = 'transparent'; }}
                >
                  <img src={src.thumbnail} alt={src.name} style={{width:'100%', aspectRatio:'16/9', objectFit:'cover', borderRadius:4, background:'#000', marginBottom:8}} />
                  <div style={{fontSize:13, color:'white', fontWeight:600, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}} title={src.name}>{src.name}</div>
                  <div style={{fontSize:11, color:'#72767d', marginTop:2}}>{src.id.startsWith('screen:') ? 'Экран' : 'Окно'}</div>
                </button>
              ))}
            </div>
            <div style={{display:'flex', justifyContent:'flex-end', marginTop:16}}>
              <button onClick={()=>resolveScreenPicker(null)} style={{background:'#4f545c', color:'white', border:'none', padding:'10px 20px', borderRadius:6, cursor:'pointer', fontWeight:600}}>Отмена</button>
            </div>
          </div>
        </div>
      ), document.body)}
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <MainApp />
    </ErrorBoundary>
  );
}