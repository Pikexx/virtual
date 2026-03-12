// ===== MESSAGES =====
const messages = [
  "Hi, my love. I want to remind you again na you did your best today, and I'm very proud of you every time kasi, baby, it shows how strong you are despite all the odds. 🌷",
  "Baby, for me, you are the painter of my life — with each stroke of your soul plunging into mine making everything much more colorful. Love doesn't need compensation but rather giving each other a love so genuine that even when the distance is nowhere near, the love still stays the same. 💗",
  "You mean so much to me. You are the sweetest feeling, my love. I see you in everything that is beautiful. You are my tulip in a world full of roses. 🌷",
  "Remember, baby — for as long as I'm here, you will always be loved no matter what. I'll stay all the time no matter what happens to us. I'll keep supporting you and listening to each of your words. I will always love you, my baby. 💌",
  "Hi, my love. I hope that you're doing good right now. I know, baby, na pagod ka ngayon — and I want to remind you again that you did your best today. I'm so happy for us na we got through this day together. 🤍",
  "Ikaw ang araw sa tag-ulan at sa maulap kong umaga, kasi baby, you make everything clear for me — especially kung paano kita mahalin. I'm realizing a lot of things because of you, baby. Hihi. 🌤",
  "If you're worrying about someone better, baby, that will never be the case. My heart is full of you, and I find my peace when I'm with you, my love. Just by thinking of you keeps me smiling the entire day. 💞",
  "You could never be unloved by me, baby. My soul is so attached to yours, and I will always love you no matter what, my baby. MWAPZZZZZZZ 💋",
  "As I'm making this, I've got a smile on my face — so you should too, baby! Starting our day with a smile can help us be positive throughout the day. Hihi. 😊",
  "Ikaw yung reason sa mga ngiti ko. I want you to know kung gaano kita naa-appreciate sa lahat ng bagay na ginagawa mo. I love everything about you, my baby. 🥰",
  "I'll do my best to show you na mayroong isang tao na nag-aappreciate sa lahat ng ginagawa mo. I'm always proud of you, kahit anong mangyari. Walang makakapantay sa'yo, maging sino man sila. 👑",
  "Remember, baby — they've got nothing on you. I only have eyes solely for you. 💖",
  "Hello, baby! I'm so proud of you for going through another day. Gusto lang kita i-remind na hindi ako aalis sa side mo kahit gaano ka ka-busy. 🤗",
  "You are the masterpiece my heart keeps admiring and loving — it shows how beautiful you are. I'll love you when you feel like you're not enough, because I'm your other half. You are my partner, my baby. 🩷",
  "Put your trust in me, baby, that I'll wait for you kahit kailan — no matter what it takes. As long as it's you, I'll do whatever it takes to be yours. You are the most captivating woman I know. 🌸",
  "Ako'y sa'yo at ika'y akin lamang. 💗"
];

let lastIndex = -1;

function getRandomMessage() {
  let idx;
  do { idx = Math.floor(Math.random() * messages.length); }
  while (idx === lastIndex && messages.length > 1);
  lastIndex = idx;
  return messages[idx];
}

// ===== HEARTS =====
const heartEmojis = ['♥', '💕', '💗', '💖', '💓', '💞', '🌸', '🌷', '✿', '🩷'];

function spawnHeart() {
  const container = document.getElementById('hearts-container');
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  const left = Math.random() * 96;
  const duration = 2 + Math.random() * 2.5;
  const size = 1.1 + Math.random() * 1.5;

  heart.style.left = `${left}vw`;
  heart.style.fontSize = `${size}rem`;
  heart.style.animationDuration = `${duration}s`;
  container.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000 + 200);
}

function burstHearts(count = 30) {
  for (let i = 0; i < count; i++) {
    setTimeout(spawnHeart, i * 55);
  }
}

// ===== HUG =====
function sendHug() {
  const btn = document.getElementById('hug-btn');
  const msgBox = document.getElementById('msg-box');
  const msgText = document.getElementById('msg-text');
  const tulipWrap = document.getElementById('tulip-wrap');

  // Button effect
  btn.classList.add('pressed');
  setTimeout(() => btn.classList.remove('pressed'), 200);

  // Burst hearts
  burstHearts(36);

  // Tulip bounce animation
  tulipWrap.classList.remove('bounce');
  void tulipWrap.offsetWidth;
  tulipWrap.classList.add('bounce');
  setTimeout(() => tulipWrap.classList.remove('bounce'), 600);

  // Set message
  msgText.textContent = getRandomMessage();

  // Show box
  msgBox.classList.remove('show');
  void msgBox.offsetWidth;
  msgBox.classList.add('show');
  msgBox.style.display = 'block';

  // Scroll smoothly
  setTimeout(() => msgBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
}

// ===== VOICE MESSAGES =====
let currentAudio = null;
let currentBtn = null;
let currentCard = null;
let progressInterval = null;

// Map audio id -> {dataKey, progressId}
const audioMap = {
  'audio-goodmorning': { key: 'goodmorning',  prog: 'prog-goodmorning' },
  'audio-puyat':       { key: 'goodnight',    prog: 'prog-puyat'       },
  'audio-ingat':       { key: 'ingat',        prog: 'prog-ingat'       },
  'audio-message':     { key: 'message',      prog: 'prog-message'     },
  'audio-reminder':    { key: 'reminder',     prog: 'prog-reminder'    },
};

// Inject base64 src into audio elements on first use
function getAudio(audioId) {
  const el = document.getElementById(audioId);
  if (!el.src || el.src === window.location.href) {
    const key = audioMap[audioId].key;
    if (typeof AUDIO_DATA !== 'undefined' && AUDIO_DATA[key]) {
      el.src = AUDIO_DATA[key];
    }
  }
  return el;
}

function stopCurrentAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    const entry = Object.entries(audioMap).find(([,v]) => v.prog && document.getElementById(v.prog));
    // reset all bars just to be safe
  }
  if (currentBtn) currentBtn.classList.remove('is-playing');
  if (currentCard) currentCard.classList.remove('playing');
  clearInterval(progressInterval);
  // reset all progress bars
  Object.values(audioMap).forEach(({prog}) => {
    const el = document.getElementById(prog);
    if (el) el.style.width = '0%';
  });
  currentAudio = null;
  currentBtn = null;
  currentCard = null;
}

function toggleAudio(audioId, btn) {
  const audio = getAudio(audioId);
  const card = btn.closest('.voice-card');

  // Ripple effect
  btn.classList.remove('ripple');
  void btn.offsetWidth;
  btn.classList.add('ripple');

  // If clicking currently playing → stop
  if (currentAudio === audio) {
    stopCurrentAudio();
    return;
  }

  stopCurrentAudio();

  currentAudio = audio;
  currentBtn = btn;
  currentCard = card;

  audio.play().catch(e => console.warn('Play failed:', e));
  btn.classList.add('is-playing');
  card.classList.add('playing');

  const progBar = document.getElementById(audioMap[audioId].prog);
  progressInterval = setInterval(() => {
    if (audio.duration && progBar) {
      progBar.style.width = (audio.currentTime / audio.duration * 100) + '%';
    }
  }, 150);

  audio.onended = () => stopCurrentAudio();
}

setInterval(() => {
  if (Math.random() < 0.35) spawnHeart();
}, 2000);

// ===== LIGHTBOX =====
function openLightbox(src) {
  const overlay = document.getElementById('pixel-lightbox');
  const img = document.getElementById('lightbox-img');
  if (!overlay || !img) return;
  img.src = src;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => overlay.classList.add('show'));
  });
}

function closeLightbox() {
  const overlay = document.getElementById('pixel-lightbox');
  if (!overlay) return;
  overlay.classList.remove('show');
  document.body.style.overflow = '';
  setTimeout(() => {
    overlay.style.display = 'none';
    document.getElementById('lightbox-img').src = '';
  }, 320);
}

// Keyboard close
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Preload gallery images
['FB1.jpg','FB2.jpg','FB3.jpg','FB4.jpg'].forEach(src => {
  const img = new Image(); img.src = src;
});