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


  heart.style.left = (Math.random() * 96) + 'vw';


  const duration = 2 + Math.random() * 2.5;


  heart.style.fontSize = (1.1 + Math.random() * 1.5) + 'rem';


  heart.style.animationDuration = duration + 's';


  container.appendChild(heart);


  setTimeout(() => heart.remove(), duration * 1000 + 200);


}





function burstHearts(count) {


  count = count || 30;


  for (let i = 0; i < count; i++) {


    setTimeout(spawnHeart, i * 55);


  }


}





setInterval(function() {


  if (Math.random() < 0.35) spawnHeart();


}, 2000);





// ===== HUG =====


function sendHug() {


  var btn = document.getElementById('hug-btn');


  var msgBox = document.getElementById('msg-box');


  var msgText = document.getElementById('msg-text');


  var tulipWrap = document.getElementById('tulip-wrap');





  btn.classList.add('pressed');


  setTimeout(function() { btn.classList.remove('pressed'); }, 200);





  burstHearts(36);





  tulipWrap.classList.remove('bounce');


  void tulipWrap.offsetWidth;


  tulipWrap.classList.add('bounce');


  setTimeout(function() { tulipWrap.classList.remove('bounce'); }, 600);





  msgText.textContent = getRandomMessage();





  msgBox.classList.remove('show');


  void msgBox.offsetWidth;


  msgBox.classList.add('show');


  msgBox.style.display = 'block';





  setTimeout(function() { msgBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);


}





// ===== VOICE MESSAGES =====


var currentAudio = null;


var currentBtn = null;


var currentCard = null;


var progressInterval = null;





var audioMap = {


  'audio-goodmorning': { key: 'goodmorning', prog: 'prog-goodmorning' },


  'audio-goodnight':   { key: 'goodnight',   prog: 'prog-goodnight'   },


  'audio-imissyou':    { key: 'imissyou',    prog: 'prog-imissyou'    },


  'audio-iloveyou':    { key: 'iloveyou',    prog: 'prog-iloveyou'    },


  'audio-ingat':       { key: 'ingat',       prog: 'prog-ingat'       },


  'audio-message':     { key: 'message',     prog: 'prog-message'     },


  'audio-reminder':    { key: 'reminder',    prog: 'prog-reminder'    }


};





function getAudio(audioId) {


  var el = document.getElementById(audioId);


  if (!el.src || el.src === window.location.href) {


    var entry = audioMap[audioId];


    if (entry && typeof AUDIO_DATA !== 'undefined' && AUDIO_DATA[entry.key]) {


      el.src = AUDIO_DATA[entry.key];


    }


  }


  return el;


}





function stopCurrentAudio() {


  if (currentAudio) {


    currentAudio.pause();


    currentAudio.currentTime = 0;


  }


  if (currentBtn) currentBtn.classList.remove('is-playing');


  if (currentCard) currentCard.classList.remove('playing');


  clearInterval(progressInterval);


  Object.keys(audioMap).forEach(function(id) {


    var prog = audioMap[id].prog;


    var el = document.getElementById(prog);


    if (el) el.style.width = '0%';


  });


  currentAudio = null;


  currentBtn = null;


  currentCard = null;


}





function toggleAudio(audioId, btn) {


  var audio = getAudio(audioId);


  var card = btn.closest('.voice-card');





  btn.classList.remove('ripple');


  void btn.offsetWidth;


  btn.classList.add('ripple');





  if (currentAudio === audio) {


    stopCurrentAudio();


    return;


  }





  stopCurrentAudio();





  currentAudio = audio;


  currentBtn = btn;


  currentCard = card;





  audio.play().catch(function(e) { console.warn('Play failed:', e); });


  btn.classList.add('is-playing');


  card.classList.add('playing');





  var progBar = document.getElementById(audioMap[audioId].prog);


  progressInterval = setInterval(function() {


    if (audio.duration && progBar) {


      progBar.style.width = (audio.currentTime / audio.duration * 100) + '%';


    }


  }, 150);





  audio.onended = stopCurrentAudio;


}





// ===== LIGHTBOX =====


function openLightbox(src) {


  var overlay = document.getElementById('pixel-lightbox');


  var img = document.getElementById('lightbox-img');


  if (!overlay || !img) return;


  img.src = src;


  overlay.style.display = 'flex';


  document.body.style.overflow = 'hidden';


  requestAnimationFrame(function() {


    requestAnimationFrame(function() { overlay.classList.add('show'); });


  });


}





function closeLightbox() {


  var overlay = document.getElementById('pixel-lightbox');


  if (!overlay) return;


  overlay.classList.remove('show');


  document.body.style.overflow = '';


  setTimeout(function() {


    overlay.style.display = 'none';


    document.getElementById('lightbox-img').src = '';


  }, 320);


}





document.addEventListener('keydown', function(e) {


  if (e.key === 'Escape') closeLightbox();


});





['FB1.jpg', 'FB2.jpg', 'FB3.jpg', 'FB4.jpg'].forEach(function(src) {


  var img = new Image(); img.src = src;


});





// ===== PAGE NAVIGATION =====


var currentPage = 1;





function goToPage(num) {


  if (num === currentPage) return;





  // Hide old page, show new page


  var oldPage = document.getElementById('page-' + currentPage);


  var newPage = document.getElementById('page-' + num);


  if (!oldPage || !newPage) return;





  oldPage.style.display = 'none';


  newPage.style.display = 'flex';





  // Reset animation


  newPage.style.animation = 'none';


  void newPage.offsetWidth;


  newPage.style.animation = '';





  // Update tab buttons


  var oldTab = document.getElementById('tab-' + currentPage);


  var newTab = document.getElementById('tab-' + num);


  if (oldTab) oldTab.classList.remove('active');


  if (newTab) newTab.classList.add('active');





  currentPage = num;


  window.scrollTo({ top: 0, behavior: 'smooth' });





  if (num === 2) {


    setTimeout(initGarden, 80);


  }


}








// ===== GARDEN (PAGE 2) =====


var gardenMessages = [


  "You make my heart bloom every single day. 🌷",


  "Like a tulip in spring, you bring color to my world. 💗",


  "Every flower in this garden is for you, baby. 🌸",


  "You are the garden my soul never wants to leave. 🌷",


  "Growing alongside you is my favorite thing. 💕",


  "This garden blooms just because you exist. ✿",


  "You are my favorite kind of beautiful. 🌷💖",


  "You are my tulip in a world full of roses. 🌷"


];





var TULIP_COLORS = [


  { petal: '#f472b6', center: '#fbbf24', stem: '#4a7a00' },


  { petal: '#fb7185', center: '#fde68a', stem: '#4a7a00' },


  { petal: '#e879f9', center: '#fbbf24', stem: '#5a8a00' },


  { petal: '#f9a8d4', center: '#fcd34d', stem: '#4a7a00' },


  { petal: '#fda4af', center: '#fef08a', stem: '#3a6000' },


  { petal: '#c084fc', center: '#fde047', stem: '#4a7a00' },


  { petal: '#ff85b3', center: '#fbbf24', stem: '#5a8a00' }


];





var gardenAnimFrame = null;


var gardenTulips = [];


var gardenButterflies = [];


var gardenTime = 0;





function drawCloud(ctx, x, y, size, alpha) {


  ctx.save();


  ctx.globalAlpha = alpha;


  ctx.fillStyle = '#fff';


  var r = size * 0.35;


  ctx.beginPath();


  ctx.arc(x, y, r, 0, Math.PI * 2);


  ctx.arc(x + r * 1.2, y - r * 0.3, r * 0.8, 0, Math.PI * 2);


  ctx.arc(x + r * 2.2, y, r * 0.9, 0, Math.PI * 2);


  ctx.arc(x + r * 1.1, y + r * 0.4, r * 0.7, 0, Math.PI * 2);


  ctx.fill();


  ctx.restore();


}





function drawScene(ctx, W, H, t) {


  var sky = ctx.createLinearGradient(0, 0, 0, H * 0.75);


  sky.addColorStop(0, '#ffeef8');


  sky.addColorStop(0.6, '#ffd6ec');


  sky.addColorStop(1, '#d4f5a0');


  ctx.fillStyle = sky;


  ctx.fillRect(0, 0, W, H);


  drawCloud(ctx, 55 + Math.sin(t * 0.1) * 5,       26, 40, 0.38);


  drawCloud(ctx, 195 + Math.sin(t * 0.08 + 1) * 6, 16, 52, 0.30);


  drawCloud(ctx, 315 + Math.sin(t * 0.09 + 2) * 4, 30, 36, 0.34);


  ctx.fillStyle = '#7abc40';


  ctx.fillRect(0, H * 0.72, W, H * 0.28);


  ctx.fillStyle = '#5a8a00';


  ctx.fillRect(0, H * 0.74, W, H - H * 0.74);


  ctx.fillStyle = '#7abc00';


  for (var gx = 0; gx < W; gx += 14) ctx.fillRect(gx, H * 0.72 - 9, 10, 9);


}





function drawOneTulip(ctx, t, time) {


  if (t.progress <= 0) return;


  var sw = Math.sin(time * 0.85 + t.sway) * 3;


  var stemH = t.stemH * Math.min(t.progress, 1);


  var gY = t.groundY;


  var x = t.x;





  ctx.save();


  ctx.strokeStyle = t.color.stem;


  ctx.lineWidth = 3;


  ctx.lineCap = 'round';


  ctx.beginPath();


  ctx.moveTo(x, gY);


  ctx.quadraticCurveTo(x + sw * 0.5, gY - stemH * 0.5, x + sw, gY - stemH);


  ctx.stroke();





  if (t.progress > 0.4) {


    var lp = Math.min((t.progress - 0.4) / 0.4, 1);


    var lx = x + sw * 0.4, ly = gY - stemH * 0.48;


    ctx.save();


    ctx.globalAlpha = lp;


    ctx.fillStyle = '#58961a';


    ctx.beginPath();


    ctx.moveTo(lx, ly);


    ctx.quadraticCurveTo(lx + 22 * lp, ly - 13, lx + 17 * lp, ly + 9);


    ctx.quadraticCurveTo(lx + 4, ly + 4, lx, ly);


    ctx.fill();


    ctx.restore();


  }





  if (t.progress > 0.7) {


    var pp = Math.min((t.progress - 0.7) / 0.3, 1);


    var fx = x + sw, fy = gY - stemH;


    ctx.globalAlpha = pp;


    var pw = 8 * pp, ph = 18 * pp;


    for (var k = 0; k < 5; k++) {


      var ang = (k / 5) * Math.PI * 2 - Math.PI / 2;


      ctx.save();


      ctx.translate(fx + Math.cos(ang) * pw * 0.55, fy + Math.sin(ang) * pw * 0.28);


      ctx.rotate(ang + Math.PI / 2);


      ctx.fillStyle = t.color.petal;


      ctx.shadowColor = t.color.petal;


      ctx.shadowBlur = 7;


      ctx.beginPath();


      ctx.ellipse(0, -ph * 0.5, pw * 0.65, ph * 0.55, 0, 0, Math.PI * 2);


      ctx.fill();


      ctx.restore();


    }


    ctx.fillStyle = t.color.center;


    ctx.shadowColor = t.color.center;


    ctx.shadowBlur = 5;


    ctx.beginPath();


    ctx.arc(fx, fy, 5 * pp, 0, Math.PI * 2);


    ctx.fill();


    ctx.shadowBlur = 0;


  }


  ctx.restore();


}





function drawButterfly(ctx, b, time) {


  var x = b.x + Math.sin(time * b.sx + b.ph) * 28;


  var y = b.y + Math.cos(time * b.sy + b.ph * 0.7) * 14;


  var ww = 10 * Math.abs(Math.sin(time * 6 + b.ph));


  ctx.save();


  ctx.globalAlpha = 0.88;


  ctx.fillStyle = b.color;


  ctx.beginPath(); ctx.ellipse(x - ww, y, ww, 6, -0.4, 0, Math.PI * 2); ctx.fill();


  ctx.beginPath(); ctx.ellipse(x + ww, y, ww, 6,  0.4, 0, Math.PI * 2); ctx.fill();


  ctx.fillStyle = '#3a1a1a';


  ctx.beginPath(); ctx.ellipse(x, y, 2, 5, 0, 0, Math.PI * 2); ctx.fill();


  ctx.restore();


}





function initGarden() {


  var canvas = document.getElementById('garden-canvas');


  if (!canvas) return;


  var ctx = canvas.getContext('2d');


  var W = canvas.width, H = canvas.height;


  if (gardenAnimFrame) { cancelAnimationFrame(gardenAnimFrame); gardenAnimFrame = null; }


  gardenTulips = [];


  gardenTime = 0;


  ctx.clearRect(0, 0, W, H);


  drawScene(ctx, W, H, 0);


}





function growGarden() {


  var btn = document.getElementById('click-me-btn');


  var msgBar = document.getElementById('garden-msg-bar');


  var msgText = document.getElementById('garden-msg-text');


  var canvas = document.getElementById('garden-canvas');


  if (!canvas) return;





  btn.classList.remove('bloomed');


  void btn.offsetWidth;


  btn.classList.add('bloomed');


  setTimeout(function() { btn.classList.remove('bloomed'); }, 700);





  burstHearts(20);





  var ctx = canvas.getContext('2d');


  var W = canvas.width, H = canvas.height;


  var groundY = H * 0.74;





  if (gardenAnimFrame) { cancelAnimationFrame(gardenAnimFrame); gardenAnimFrame = null; }





  var count = 9;


  gardenTulips = [];


  for (var i = 0; i < count; i++) {


    gardenTulips.push({


      x: (W / (count + 1)) * (i + 1) + (Math.random() - 0.5) * 26,


      groundY: groundY + 5,


      stemH: 52 + Math.random() * 42,


      progress: 0,


      color: TULIP_COLORS[Math.floor(Math.random() * TULIP_COLORS.length)],


      sway: Math.random() * Math.PI * 2,


      delay: i * 0.11


    });


  }





  gardenButterflies = [


    { x: 75,  y: groundY - 88, sx: 0.42, sy: 0.28, ph: 0.0, color: '#f472b6' },


    { x: 220, y: groundY - 68, sx: 0.30, sy: 0.48, ph: 1.6, color: '#c084fc' },


    { x: 330, y: groundY - 80, sx: 0.50, sy: 0.36, ph: 3.0, color: '#fb7185' }


  ];





  var startTime = performance.now();


  var growDuration = 2400;





  function animate(now) {


    var elapsed = now - startTime;


    gardenTime = elapsed / 1000;





    ctx.clearRect(0, 0, W, H);


    drawScene(ctx, W, H, gardenTime);





    gardenTulips.forEach(function(t) {


      var ts = t.delay * growDuration;


      var te = ts + growDuration * 0.62;


      t.progress = elapsed > ts ? Math.min((elapsed - ts) / (te - ts), 1) : 0;


      drawOneTulip(ctx, t, gardenTime);


    });





    if (elapsed > growDuration * 0.55) {


      var ba = Math.min((elapsed - growDuration * 0.55) / 450, 1);


      ctx.save(); ctx.globalAlpha = ba;


      gardenButterflies.forEach(function(b) { drawButterfly(ctx, b, gardenTime); });


      ctx.restore();


    }





    var done = gardenTulips.every(function(t) { return t.progress >= 1; }) && elapsed > growDuration + 300;


    gardenAnimFrame = requestAnimationFrame(done ? swayLoop : animate);


  }





  function swayLoop(now) {


    gardenTime = (now - startTime) / 1000;


    ctx.clearRect(0, 0, W, H);


    drawScene(ctx, W, H, gardenTime);


    gardenTulips.forEach(function(t) { t.progress = 1; drawOneTulip(ctx, t, gardenTime); });


    gardenButterflies.forEach(function(b) { drawButterfly(ctx, b, gardenTime); });


    gardenAnimFrame = requestAnimationFrame(swayLoop);


  }





  gardenAnimFrame = requestAnimationFrame(animate);





  setTimeout(function() {


    var idx = Math.floor(Math.random() * gardenMessages.length);


    msgText.textContent = gardenMessages[idx];


    msgBar.classList.remove('show');


    void msgBar.offsetWidth;


    msgBar.classList.add('show');


    msgBar.style.display = 'flex';


    setTimeout(function() { msgBar.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);


  }, 950);


}
// ===== LETTER TYPEWRITER + PARTICLES =====
var LETTER_TEXT = "Hi, my love, I hope y'know that you matter so much, and I'm always proud sayo every single day, and never ako mapapagod na mahalin ka, kaya gagawin ko lahat para ipakita sayo kung gaano kita kamahal and appreciate every single effort you put, my love, and I'm always captivated by you, you are so unforgettable, baby, and I hope that I make more memories with you in the future, and yes, baby, my love for you will always remain the same as the day I met you, and ayun nga, baby, palagi talaga kitang naiisip, wishing na kasama kita sa lugar na yun, and I know sa sarili ko, baby, kung gaano ka ka-busy, kaya ginawa ko itong website na to para sa atin, to boost you up and keep supporting you sa mga bagay na ginagawa mo, baby, and rest assured, baby, na ikaw at ikaw lang uuwian ko, at wala ng iba, walang makakapantay sayo, maging sino man sila, my baby, I love you so much, baby, MWAPZZZZZZZ.";

var letterTyping = false;
var letterDone = false;
var letterRAF = null;

// Particle system
var lpCanvas, lpCtx, lpParticles = [];

var LP_COLORS = ['#f472b6','#fb7185','#e879f9','#f9a8d4','#fda4af','#c084fc','#ff85b3','#fbbf24','#fcd34d','#fff0f8'];

function lpInit() {
  lpCanvas = document.getElementById('letter-particles');
  if (!lpCanvas) return;
  lpCtx = lpCanvas.getContext('2d');
  lpCanvas.width = window.innerWidth;
  lpCanvas.height = window.innerHeight;
}

function lpResize() {
  if (!lpCanvas) return;
  lpCanvas.width = window.innerWidth;
  lpCanvas.height = window.innerHeight;
}

window.addEventListener('resize', lpResize);

function spawnLetterParticle(x, y) {
  var count = 4 + Math.floor(Math.random() * 4);
  for (var i = 0; i < count; i++) {
    lpParticles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 3.5,
      vy: -1.5 - Math.random() * 3,
      size: 3 + Math.random() * 5,
      color: LP_COLORS[Math.floor(Math.random() * LP_COLORS.length)],
      alpha: 1,
      decay: 0.022 + Math.random() * 0.018,
      shape: Math.random() < 0.5 ? 'circle' : 'heart',
      rot: Math.random() * Math.PI * 2,
      rotV: (Math.random() - 0.5) * 0.2
    });
  }
}

function drawHeart(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 10, size / 10);
  ctx.beginPath();
  ctx.moveTo(0, -3);
  ctx.bezierCurveTo(5, -8, 10, -4, 0, 4);
  ctx.bezierCurveTo(-10, -4, -5, -8, 0, -3);
  ctx.fill();
  ctx.restore();
}

function lpTick() {
  if (!lpCtx) return;
  lpCtx.clearRect(0, 0, lpCanvas.width, lpCanvas.height);
  for (var i = lpParticles.length - 1; i >= 0; i--) {
    var p = lpParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.08; // gravity
    p.alpha -= p.decay;
    p.rot += p.rotV;
    if (p.alpha <= 0) { lpParticles.splice(i, 1); continue; }
    lpCtx.save();
    lpCtx.globalAlpha = p.alpha;
    lpCtx.fillStyle = p.color;
    lpCtx.shadowColor = p.color;
    lpCtx.shadowBlur = 6;
    if (p.shape === 'heart') {
      drawHeart(lpCtx, p.x, p.y, p.size);
    } else {
      lpCtx.beginPath();
      lpCtx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
      lpCtx.fill();
    }
    lpCtx.restore();
  }
  if (lpParticles.length > 0 || letterTyping) {
    letterRAF = requestAnimationFrame(lpTick);
  } else {
    if (lpCanvas) lpCanvas.style.display = 'none';
  }
}

function startLetter() {
  if (letterTyping || letterDone) return;

  // Animate envelope opening
  var env = document.getElementById('p2-envelope');
  if (env) {
    env.classList.add('opened');
  }

  // Show text wrap
  var wrap = document.getElementById('p2-letter-wrap');
  if (wrap) { wrap.style.display = 'block'; }

  // Disable button
  var btn = document.getElementById('p2-show-btn');
  if (btn) {
    btn.disabled = true;
    btn.style.opacity = '0.6';
  }

  // Init particles
  lpInit();
  if (lpCanvas) lpCanvas.style.display = 'block';
  letterTyping = true;

  // Start typewriter
  var typed = document.getElementById('p2-typed-text');
  var cursor = document.getElementById('p2-cursor');
  if (!typed) return;

  var i = 0;
  var text = LETTER_TEXT;
  var baseDelay = 38; // ms per character

  function typeNext() {
    if (i >= text.length) {
      // Done
      letterTyping = false;
      letterDone = true;
      if (cursor) cursor.classList.add('hidden');
      if (btn) {
        btn.classList.add('typing-done');
        btn.innerHTML = '<span class="btn-inner">[ Message Delivered 💌 ]</span>';
      }
      return;
    }

    var ch = text[i];
    typed.textContent += ch;
    i++;

    // Spawn particles near the cursor
    if (typed && lpCanvas) {
      var rect = typed.getBoundingClientRect();
      var px = rect.right;
      var py = rect.top + rect.height * 0.5;
      if (ch !== ' ' && ch !== '\n') {
        spawnLetterParticle(px, py);
      }
    }

    // Scroll text into view
    if (i % 30 === 0 && wrap) {
      wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Vary speed: pause longer at punctuation
    var delay = baseDelay;
    if (ch === ',' || ch === ';') delay = 130;
    else if (ch === '.' || ch === '!') delay = 220;
    else delay = baseDelay + Math.random() * 20;

    setTimeout(typeNext, delay);
  }

  // Start particle loop
  letterRAF = requestAnimationFrame(lpTick);
  typeNext();
}

// ===== PAGE 3 TAP BUNNY =====
var BUNNY_GRID=[[0,0,0,3,3,0,0,3,3,0,0,0],[0,0,3,1,3,0,0,3,1,3,0,0],[0,0,3,2,3,0,0,3,2,3,0,0],[0,0,3,2,3,0,0,3,2,3,0,0],[0,3,3,1,3,3,3,3,1,3,3,0],[0,3,1,1,1,1,1,1,1,1,3,0],[3,1,1,4,1,1,1,4,1,1,1,3],[3,1,5,1,1,6,1,1,1,5,1,3],[3,1,1,1,3,1,3,1,1,1,1,3],[0,3,1,1,1,1,1,1,1,1,3,0],[3,1,1,7,7,7,7,7,1,1,1,3],[3,1,1,7,7,7,7,7,1,1,1,3],[0,3,3,1,1,3,3,1,1,3,3,0],[0,0,3,3,0,3,3,0,3,3,0,0]];
var BUNNY_PAL={0:null,1:'#f5e6f0',2:'#f9a8d4',3:'#2d0a1a',4:'#1a0010',5:'#fda4af',6:'#f472b6',7:'#edd5e8'};
function drawPixelBunny(){var c=document.getElementById('bunny-canvas');if(!c)return;var ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);ctx.imageSmoothingEnabled=false;for(var r=0;r<BUNNY_GRID.length;r++)for(var col=0;col<BUNNY_GRID[r].length;col++){var color=BUNNY_PAL[BUNNY_GRID[r][col]];if(!color)continue;ctx.fillStyle=color;ctx.fillRect(col*8,r*8,8,8);}}
window.addEventListener('load',drawPixelBunny);
var bunnyMessages=["i love you so much my felicity 🌷","you are the most captivating woman 💖","you are my hardworking sugarhoneybunchplumplum 🍯","you are the color of my life 🎨💕","i love everything about you baby 🥰"];
var bunnyQuips=["boing!!! 🐰","wheee!! 💕","yay!! 🌷","bun bun!! 🥰","hop hop!! 🐾","hehe!! 💗"];
var bunnyJumping=false,bunnyLastMsg=-1;
function bunnyClick(){
  if(bunnyJumping)return;bunnyJumping=true;
  var canvas=document.getElementById('bunny-canvas'),bubble=document.getElementById('rabbit-bubble'),bubbleTxt=document.getElementById('rabbit-bubble-text'),msgBox=document.getElementById('rabbit-msg-box'),msgText=document.getElementById('rabbit-msg-text'),heartsEl=document.getElementById('rabbit-hearts');
  if(bubbleTxt)bubbleTxt.textContent=bunnyQuips[Math.floor(Math.random()*bunnyQuips.length)];
  if(bubble){bubble.classList.remove('show');void bubble.offsetWidth;bubble.classList.add('show');}
  if(canvas){canvas.classList.remove('jumping','squish');void canvas.offsetWidth;canvas.classList.add('jumping');setTimeout(function(){canvas.classList.remove('jumping');canvas.classList.add('squish');setTimeout(function(){canvas.classList.remove('squish');canvas.style.animation='none';void canvas.offsetWidth;canvas.style.animation='';bunnyJumping=false;},350);},700);}
  spawnBunnyHearts(heartsEl);burstHearts(12);
  setTimeout(function(){if(bubble)bubble.classList.remove('show');},2400);
  var idx;do{idx=Math.floor(Math.random()*bunnyMessages.length);}while(idx===bunnyLastMsg&&bunnyMessages.length>1);bunnyLastMsg=idx;
  if(msgText)msgText.textContent=bunnyMessages[idx];
  if(msgBox){msgBox.classList.remove('show');void msgBox.offsetWidth;msgBox.classList.add('show');msgBox.style.display='block';setTimeout(function(){msgBox.scrollIntoView({behavior:'smooth',block:'nearest'});},100);}
}
function spawnBunnyHearts(container){if(!container)return;var emojis=['💕','💗','💖','♥','🌷','✿','💓','🩷','💞','🐰'];for(var i=0;i<12;i++)(function(i){setTimeout(function(){var el=document.createElement('span');el.className='rh-heart';el.textContent=emojis[Math.floor(Math.random()*emojis.length)];el.style.left=(15+Math.random()*70)+'%';el.style.fontSize=(.8+Math.random()*.9)+'rem';var dur=.9+Math.random()*.8;el.style.animationDuration=dur+'s';container.appendChild(el);setTimeout(function(){el.remove();},dur*1000+100);},i*70);})(i);}

// ===== FLIP GARDEN =====
var fgCanvas=null,fgCtx=null,fgRAF=null,fgFlowers=[],fgBirds=[],fgTime=0;
var FG_FC=[{petal:'#f472b6',center:'#fbbf24',stem:'#4a7a00'},{petal:'#f9a8d4',center:'#fcd34d',stem:'#4a7a00'},{petal:'#e879f9',center:'#fbbf24',stem:'#5a8a00'},{petal:'#fda4af',center:'#fef08a',stem:'#3a6000'},{petal:'#c084fc',center:'#fde047',stem:'#4a7a00'}];
function fgInit(){
  fgCanvas=document.getElementById('flip-garden-canvas');if(!fgCanvas)return;
  fgCtx=fgCanvas.getContext('2d');var W=fgCanvas.width,H=fgCanvas.height;
  fgFlowers=[];for(var i=0;i<11;i++)fgFlowers.push({x:(W/12)*(i+1)+(Math.random()-.5)*16,groundY:H-8,stemH:22+Math.random()*28,progress:0,color:FG_FC[Math.floor(Math.random()*FG_FC.length)],sway:Math.random()*Math.PI*2,delay:i*.09});
  fgBirds=[];for(var b=0;b<4;b++)fgBirds.push({x:Math.random()*W,y:8+Math.random()*20,vx:.4+Math.random()*.5,phase:Math.random()*Math.PI*2,wingT:0,dir:Math.random()<.5?1:-1});
  if(fgRAF)cancelAnimationFrame(fgRAF);
  var st=performance.now(),gd=2000;
  function fgTick(now){var el=now-st;fgTime=el/1000;if(!fgCtx)return;var W2=fgCanvas.width,H2=fgCanvas.height;fgCtx.clearRect(0,0,W2,H2);var sky=fgCtx.createLinearGradient(0,0,0,H2*.6);sky.addColorStop(0,'#1a0010');sky.addColorStop(1,'#2d0020');fgCtx.fillStyle=sky;fgCtx.fillRect(0,0,W2,H2);fgCtx.fillStyle='#3a6000';fgCtx.fillRect(0,H2-8,W2,8);fgCtx.fillStyle='#5a8a00';fgCtx.fillRect(0,H2-12,W2,4);fgFlowers.forEach(function(f){var ts=f.delay*gd,te=ts+gd*.65;if(el>ts)f.progress=Math.min((el-ts)/(te-ts),1);fgDF(fgCtx,f,fgTime);});if(el>800){var bA=Math.min((el-800)/400,1);fgBirds.forEach(function(bird){bird.wingT+=.18;bird.x+=bird.vx*bird.dir;bird.y+=Math.sin(bird.phase+fgTime*.8)*.35;if(bird.x>W2+20)bird.x=-20;if(bird.x<-20)bird.x=W2+20;fgDB(fgCtx,bird,bA);});}fgRAF=requestAnimationFrame(fgTick);}
  fgRAF=requestAnimationFrame(fgTick);
}
function fgDF(ctx,f,t){if(f.progress<=0)return;var sw=Math.sin(t*.85+f.sway)*2,sH=f.stemH*Math.min(f.progress,1),gY=f.groundY,x=f.x;ctx.save();ctx.strokeStyle=f.color.stem;ctx.lineWidth=2;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,gY);ctx.quadraticCurveTo(x+sw*.5,gY-sH*.5,x+sw,gY-sH);ctx.stroke();if(f.progress>.4){var lp=Math.min((f.progress-.4)/.4,1),lx=x+sw*.4,ly=gY-sH*.45;ctx.save();ctx.globalAlpha=lp;ctx.fillStyle='#58961a';ctx.beginPath();ctx.moveTo(lx,ly);ctx.quadraticCurveTo(lx+14*lp,ly-8,lx+11*lp,ly+5);ctx.quadraticCurveTo(lx+3,ly+3,lx,ly);ctx.fill();ctx.restore();}if(f.progress>.7){var pp=Math.min((f.progress-.7)/.3,1),fx=x+sw,fy=gY-sH,pw=5*pp,ph=11*pp;ctx.globalAlpha=pp;for(var k=0;k<5;k++){var ang=(k/5)*Math.PI*2-Math.PI/2;ctx.save();ctx.translate(fx+Math.cos(ang)*pw*.55,fy+Math.sin(ang)*pw*.28);ctx.rotate(ang+Math.PI/2);ctx.fillStyle=f.color.petal;ctx.shadowColor=f.color.petal;ctx.shadowBlur=5;ctx.beginPath();ctx.ellipse(0,-ph*.5,pw*.65,ph*.55,0,0,Math.PI*2);ctx.fill();ctx.restore();}ctx.fillStyle=f.color.center;ctx.shadowColor=f.color.center;ctx.shadowBlur=4;ctx.beginPath();ctx.arc(fx,fy,3*pp,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}ctx.restore();}
function fgDB(ctx,bird,alpha){var x=bird.x,y=bird.y,wf=Math.sin(bird.wingT)*.7+.3;ctx.save();ctx.globalAlpha=alpha*.8;ctx.strokeStyle='#ffd6ec';ctx.lineWidth=1.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x-5,y-6*wf,x-9,y-1);ctx.stroke();ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+5,y-6*wf,x+9,y-1);ctx.stroke();ctx.restore();}

// ===== DANCING BUNNIES =====
var danceCanvas=null,danceCtx=null,danceRAF=null,danceTime=0;
var DANCE_MSGS=["i love you felicity","you are my only one baby","im all yours felicity"];
var danceMsgIdx=0,danceMsgTimer=0,danceBubbleAlpha=0,danceBubbleFading=false,currentDanceMsg=DANCE_MSGS[0];

function drawDancer(ctx,cx,cy,facing,phase,cols){
  ctx.save();ctx.imageSmoothingEnabled=false;
  var P=6,bob=Math.sin(phase*Math.PI*2)*3;
  ctx.translate(cx,cy+bob);
  function block(color,gx,gy,w,h){ctx.fillStyle=color;ctx.fillRect(gx*P,gy*P,(w||1)*P,(h||1)*P);}
  var o=cols.outline,bd=cols.body,ei=cols.earInner,tm=cols.tummy,ey=cols.eye;
  var e1x=facing===1?-1:0,e2x=facing===1?1:2;
  block(o,e1x,-7,1,4);block(bd,e1x,-6,1,3);block(ei,e1x,-6,1,2);
  block(o,e2x,-7,1,4);block(bd,e2x,-6,1,3);block(ei,e2x,-6,1,2);
  block(o,-1,-5,4,1);block(o,-2,-4,1,3);block(o,2,-4,1,3);block(bd,-1,-4,3,3);block(o,-1,-1,4,1);
  var ex=facing===1?-1:1;block(ey,ex,-3,1,1);block('#f472b6',0,-2,1,1);
  block(o,-1,0,4,1);block(o,-2,1,1,4);block(o,2,1,1,4);block(bd,-1,1,3,4);block(tm,0,2,2,2);block(o,-1,5,4,1);
  var sA=Math.sin(phase*Math.PI*2)*1.8,sB=Math.sin(phase*Math.PI*2+Math.PI)*1.8;
  block(o,-1,(6+sA),1.5,1.5);block(bd,-1,(6+sA),1.5,1);block(o,1,(6+sB),1.5,1.5);block(bd,1,(6+sB),1.5,1);
  ctx.restore();
}
function drawSpeechBubble(ctx,cx,cy,text,alpha){
  if(alpha<=0||!text)return;
  ctx.save();ctx.globalAlpha=alpha;ctx.font='bold 8px monospace';
  var pad=6,tw=ctx.measureText(text).width,bw=tw+pad*2,bh=17;
  var bx=Math.max(3,Math.min(ctx.canvas.width-bw-3,cx-bw/2)),by=cy-bh-12;
  ctx.fillStyle='#fff0f8';ctx.fillRect(bx,by,bw,bh);
  ctx.strokeStyle='#c2185b';ctx.lineWidth=1.5;ctx.strokeRect(bx,by,bw,bh);
  var tx=cx;
  ctx.fillStyle='#fff0f8';ctx.beginPath();ctx.moveTo(tx-4,by+bh);ctx.lineTo(tx+4,by+bh);ctx.lineTo(tx,by+bh+8);ctx.closePath();ctx.fill();
  ctx.strokeStyle='#c2185b';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(tx-4,by+bh);ctx.lineTo(tx,by+bh+8);ctx.lineTo(tx+4,by+bh);ctx.stroke();
  ctx.fillStyle='#2d0a1a';ctx.fillText(text,bx+pad,by+bh-4);
  ctx.restore();
}
function danceInit(){
  danceCanvas=document.getElementById('dance-canvas');if(!danceCanvas)return;
  danceCtx=danceCanvas.getContext('2d');
  danceTime=0;danceMsgIdx=0;danceMsgTimer=0;danceBubbleAlpha=0;danceBubbleFading=false;currentDanceMsg=DANCE_MSGS[0];
  if(danceRAF){cancelAnimationFrame(danceRAF);danceRAF=null;}
  var lastTs=null;
  function danceTick(now){
    if(!lastTs)lastTs=now;
    var dt=Math.min((now-lastTs)/1000,.05);lastTs=now;
    danceTime+=dt;danceMsgTimer+=dt;
    if(!danceBubbleFading)danceBubbleAlpha=Math.min(1,danceBubbleAlpha+dt*2.5);
    if(danceMsgTimer>3.2&&!danceBubbleFading)danceBubbleFading=true;
    if(danceBubbleFading){danceBubbleAlpha=Math.max(0,danceBubbleAlpha-dt*3);if(danceBubbleAlpha===0){danceBubbleFading=false;danceMsgTimer=0;danceMsgIdx=(danceMsgIdx+1)%DANCE_MSGS.length;currentDanceMsg=DANCE_MSGS[danceMsgIdx];}}
    if(!danceCtx)return;
    var W=danceCanvas.width,H=danceCanvas.height;danceCtx.clearRect(0,0,W,H);
    var bg=danceCtx.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#1a0010');bg.addColorStop(1,'#2d0020');
    danceCtx.fillStyle=bg;danceCtx.fillRect(0,0,W,H);
    danceCtx.fillStyle='#3a1a30';danceCtx.fillRect(0,H-10,W,10);
    danceCtx.fillStyle='#5a2050';danceCtx.fillRect(0,H-12,W,2);
    for(var h=0;h<5;h++){var hx=W*.12+h*(W*.18)+Math.sin(danceTime*.6+h)*12,hy=H*.15+Math.cos(danceTime*.5+h*1.1)*10;danceCtx.save();danceCtx.globalAlpha=.1+Math.sin(danceTime*1.5+h)*.05;danceCtx.fillStyle='#f472b6';danceCtx.font='11px serif';danceCtx.fillText('♥',hx,hy);danceCtx.restore();}
    var P=6,dPhase=(danceTime%1.8)/1.8,sway=Math.sin(danceTime*Math.PI*.8)*5,gY=H-16;
    var bx=W/2-28+sway*.25,px2=W/2+28+sway*.25;
    var bArmX=bx+P*3,bArmY=gY-P*4+Math.sin(dPhase*Math.PI*2)*P*.8;
    var pArmX=px2-P*3,pArmY=gY-P*4+Math.sin((dPhase+.5)*Math.PI*2)*P*.8;
    drawDancer(danceCtx,bx,gY,1,dPhase,{body:'#8B6040',earInner:'#c49060',outline:'#3a1a08',tummy:'rgba(140,100,60,.4)',eye:'#1a0010'});
    drawDancer(danceCtx,px2,gY,-1,dPhase+.5,{body:'#fce7f3',earInner:'#f9a8d4',outline:'#2d0a1a',tummy:'rgba(255,240,248,.5)',eye:'#1a0010'});
    danceCtx.save();danceCtx.strokeStyle='#fda4af';danceCtx.lineWidth=3;danceCtx.lineCap='round';danceCtx.beginPath();danceCtx.moveTo(bArmX,bArmY);danceCtx.lineTo(pArmX,pArmY);danceCtx.stroke();
    var mx=(bArmX+pArmX)/2,my=(bArmY+pArmY)/2;danceCtx.fillStyle='#f472b6';danceCtx.shadowColor='#f472b6';danceCtx.shadowBlur=8;danceCtx.font='10px serif';danceCtx.fillText('♥',mx-4,my+4);danceCtx.shadowBlur=0;danceCtx.restore();
    danceCtx.save();danceCtx.strokeStyle='#8B6040';danceCtx.lineWidth=3;danceCtx.lineCap='round';danceCtx.beginPath();danceCtx.moveTo(bx-P*2,gY-P*1.5);danceCtx.quadraticCurveTo(bx-P*3,gY-P,bx-P*1.5,gY-P*.5);danceCtx.stroke();danceCtx.restore();
    for(var s=0;s<4;s++){var sA=danceTime*1.8+s*(Math.PI*.5),sr=38+Math.sin(danceTime*2.5+s)*9,sx=W/2+Math.cos(sA)*sr+sway*.2,sy=gY-P*3.5+Math.sin(sA)*sr*.3;danceCtx.save();danceCtx.globalAlpha=Math.max(0,.3+Math.sin(danceTime*4+s)*.2);danceCtx.fillStyle='#ffd6ec';danceCtx.shadowColor='#f472b6';danceCtx.shadowBlur=4;var ss=1.5+Math.sin(danceTime*5+s);danceCtx.fillRect(sx,sy,ss,ss);danceCtx.restore();}
    drawSpeechBubble(danceCtx,bx,gY-P*9+Math.sin(danceTime*2)*2,currentDanceMsg,danceBubbleAlpha);
    danceRAF=requestAnimationFrame(danceTick);
  }
  danceRAF=requestAnimationFrame(danceTick);
}

// ===== SYNCED LYRICS =====
// Timings are absolute seconds from start of mp3.
// Balikat (ang balikat at baywang) — verse 2 starts ~2:36 (156s).
// Timestamps carefully mapped to the song structure.
var BK_LYRICS = [
  {t:0,    text:"♪"},
  {t:4,    text:"Sa ilalim ng bituin"},
  {t:7,    text:"Sa liwanag ng buwan"},
  {t:10,   text:"Sa may 'di kalayuan ay"},
  {t:13,   text:"Ikaw ang siyang tanaw"},
  {t:17,   text:"Kung mangusap ang mata"},
  {t:20,   text:"At itulak ng paa"},
  {t:23,   text:"Matutukoy ba kung dibdib ko"},
  {t:27,   text:"Ay kakaba-kabang magsabi"},
  {t:31,   text:"Ng nararamdaman"},
  {t:36,   text:"Sa'ng lupalop nagmula"},
  {t:39,   text:"Pangungulilang 'di naman sinadya"},
  {t:43,   text:"Sa pag-agaw ng dilim"},
  {t:46,   text:"Lalong sumilay ang iyong talinghaga"},
  {t:52,   text:"Sana naman ay palaring"},
  {t:55,   text:"makadaupang palad ka"},
  {t:58,   text:"At maisayaw sa lilim"},
  {t:61,   text:"ng puno ng akasya"},
  {t:65,   text:"Lahat ng aking nabuong"},
  {t:68,   text:"pangungusap"},
  {t:70,   text:"Sa'yo napupunta"},
  {t:73,   text:"Hindi na isusulat"},
  {t:76,   text:"ang 'di maipinta"},
  {t:81,   text:"Huwag ang sabi ng iba"},
  {t:85,   text:"Iba ang nakikita ko sa'yong mata"},
  {t:90,   text:"Huwag paluluhain ka"},
  {t:94,   text:"Bakit pag-ibig ang hatid mo sa tuwina"},
  {t:100,  text:"Minsan pa'y paikutin"},
  {t:103,  text:"habang hawak ang kamay"},
  {t:107,  text:"Maglalayag sa ilalim"},
  {t:110,  text:"o ngiti mo ang gabay"},
  {t:114,  text:"Ituring mong panaginip"},
  {t:117,  text:"walang kontekstong kasabay"},
  {t:121,  text:"Alam ko lang sumapit"},
  {t:124,  text:"ang hinihintay"},
  {t:129,  text:"Hawak-hawak mo ang balikat ko"},
  {t:134,  text:"Habang ang kamay ko'y nasa baywang mo"},
  {t:139,  text:"Sa ilalim ng mga bituin"},
  {t:143,  text:"Ay kinang ng iyong mata sa akin"},
  {t:148,  text:"Sinta sinta"},
  {t:156,  text:"Para bang suntok sa buwan"},
  {t:160,  text:"Kung bukas 'kaw pa rin ay nandiyan"},
  {t:165,  text:"Pagkatapos ng gabi"},
  {t:168,  text:"tuluyan mo nang makakalimutan"},
  {t:173,  text:"Kaya naman susulitin"},
  {t:176,  text:"bago muling mapag-isa"},
  {t:180,  text:"Uulit-ulitin hanggang"},
  {t:183,  text:"sa makabisa"},
  {t:187,  text:"Mga salita'y iipunin"},
  {t:190,  text:"at nang mahanap ang tugma't"},
  {t:194,  text:"Hindi mo namalayang"},
  {t:197,  text:"tayo ang paksa"},
  {t:202,  text:"Hawak-hawak mo ang balikat ko"},
  {t:207,  text:"Habang ang kamay ko'y nasa baywang mo"},
  {t:212,  text:"Sa ilalim ng mga bituin"},
  {t:216,  text:"Ay kinang ng iyong mata sa akin"},
  {t:221,  text:"Sinta sinta"},
  {t:227,  text:"Kamay sa balikat ko"},
  {t:231,  text:"Haplos sa baywang mo"},
  {t:234,  text:"Atin lamang gabing ito"},
  {t:238,  text:"Kamay sa balikat ko"},
  {t:242,  text:"Haplos sa baywang mo"},
  {t:245,  text:"Atin lamang atin lamang"},
  {t:249,  text:"Atin lamang atin lamang"},
  {t:255,  text:"Hawak-hawak mo ang balikat ko"},
  {t:260,  text:"Habang ang kamay ko'y nasa baywang mo"},
  {t:264,  text:"Sa ilalim ng mga bituin"},
  {t:268,  text:"Ay kinang ng iyong mata sa akin"},
  {t:274,  text:"Hawak-hawak mo ang balikat ko"},
  {t:278,  text:"Habang ang kamay ko'y nasa baywang mo"},
  {t:282,  text:"Sa ilalim ng mga bituin"},
  {t:286,  text:"Ay kinang ng iyong mata sa akin"},
  {t:291,  text:"Sinta sinta"}
];

var lyricsBuilt=false;
var lastLyricIdx=-1;

function buildLyrics(){
  if(lyricsBuilt)return;
  lyricsBuilt=true;
  var container=document.getElementById('bk-lyrics-lines');
  if(!container)return;
  container.innerHTML='';
  BK_LYRICS.forEach(function(l,i){
    var div=document.createElement('div');
    div.className='bk-lyric-line';
    div.id='lyric-'+i;
    div.textContent=l.text;
    container.appendChild(div);
  });
}

function updateLyrics(currentTime){
  var container=document.getElementById('bk-lyrics-lines');
  if(!container)return;
  // Find active line
  var active=-1;
  for(var i=0;i<BK_LYRICS.length;i++){
    if(currentTime>=BK_LYRICS[i].t) active=i;
    else break;
  }
  if(active===lastLyricIdx)return;
  lastLyricIdx=active;
  // Update classes
  var lines=container.querySelectorAll('.bk-lyric-line');
  lines.forEach(function(el,i){
    el.classList.remove('active','passed');
    if(i===active)el.classList.add('active');
    else if(i<active)el.classList.add('passed');
  });
  // Scroll active line to center of the 90px viewport
  if(active>=0){
    var activeLine=document.getElementById('lyric-'+active);
    var scroll=document.getElementById('bk-lyrics-scroll');
    if(activeLine&&scroll){
      var lineTop=activeLine.offsetTop;
      var lineH=activeLine.offsetHeight;
      var scrollH=scroll.clientHeight;
      // Shift the lines container up so active line sits in middle
      var offset=lineTop+lineH/2-scrollH/2;
      container.style.transform='translateY(-'+Math.max(0,offset)+'px)';
    }
  }
}

// ===== MUSIC CARD FLIP + PLAYER =====
var cardFlipped=false,bkAudio=null,bkPlaying=false,bkProgressInterval=null,BK_START=156;
var lyricsInterval=null;

function flipMusicCard(){
  if(cardFlipped)return;cardFlipped=true;
  var card=document.getElementById('flip-card'),msg=document.getElementById('flip-message');
  if(card)card.classList.add('flipped');
  burstHearts(18);
  bkAudio=document.getElementById('bk-audio');
  if(bkAudio){
    var setStart=function(){if(bkAudio.duration)bkAudio.currentTime=BK_START;};
    if(bkAudio.readyState>=1)setStart();
    else bkAudio.addEventListener('loadedmetadata',setStart,{once:true});
    bkAudio.addEventListener('ended',function(){bkPause();});
    bkUpdateTime();
  }
  buildLyrics();
  // Seed lyrics to 2:36 position
  updateLyrics(BK_START);
  setTimeout(function(){danceInit();},550);
  setTimeout(function(){if(msg){msg.classList.add('show');setTimeout(function(){msg.scrollIntoView({behavior:'smooth',block:'nearest'});},120);}},1050);
}
function bkTogglePlay(e){e.stopPropagation();if(!bkAudio)bkAudio=document.getElementById('bk-audio');if(!bkAudio)return;if(bkPlaying)bkPause();else bkPlay();}
function bkPlay(){
  if(!bkAudio)return;
  if(!bkPlaying&&bkAudio.currentTime<BK_START-.5)bkAudio.currentTime=BK_START;
  bkAudio.play().catch(function(e){console.warn(e);});
  bkPlaying=true;
  var btn=document.getElementById('bk-play-btn');if(btn)btn.classList.add('is-playing');
  bkProgressInterval=setInterval(bkUpdateTime,200);
  lyricsInterval=setInterval(function(){if(bkAudio)updateLyrics(bkAudio.currentTime);},150);
}
function bkPause(){
  if(!bkAudio)return;bkAudio.pause();bkPlaying=false;
  var btn=document.getElementById('bk-play-btn');if(btn)btn.classList.remove('is-playing');
  clearInterval(bkProgressInterval);clearInterval(lyricsInterval);
}
function bkUpdateTime(){if(!bkAudio)return;var cur=bkAudio.currentTime||BK_START,dur=bkAudio.duration||0,pct=dur>0?(cur/dur*100):(BK_START/240*100);var bar=document.getElementById('bk-progress-bar'),thumb=document.getElementById('bk-progress-thumb'),curEl=document.getElementById('bk-current-time'),totEl=document.getElementById('bk-total-time');if(bar)bar.style.width=pct+'%';if(thumb)thumb.style.left=pct+'%';if(curEl)curEl.textContent=bkFmt(cur);if(totEl&&dur>0)totEl.textContent=bkFmt(dur);}
function bkFmt(s){var m=Math.floor(s/60),sec=Math.floor(s%60);return m+':'+(sec<10?'0':'')+sec;}
function bkSeek(e){if(!bkAudio||!bkAudio.duration)return;var wrap=document.getElementById('bk-progress-wrap');if(!wrap)return;var rect=wrap.getBoundingClientRect(),pct=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width));bkAudio.currentTime=pct*bkAudio.duration;bkUpdateTime();updateLyrics(bkAudio.currentTime);}

var _p3orig=typeof goToPage==='function'?goToPage:null;
goToPage=function(num){if(_p3orig)_p3orig(num);if(num===3){setTimeout(function(){drawPixelBunny();fgInit();},60);}};
// ===== PAGE 4 — VIDEO PLAYER =====
var videoExpanded=false,vidPlaying=false,vidInterval=null,noClickCount=0;

function expandVideo(){
  if(videoExpanded)return; videoExpanded=true;
  var pill=document.getElementById('vid-collapsed');
  var player=document.getElementById('vid-player');
  var msg=document.getElementById('apo-msg-box');
  var btns=document.getElementById('apo-buttons-wrap');
  if(pill){pill.style.transition='opacity .3s ease,transform .3s ease';pill.style.opacity='0';pill.style.transform='scale(.96)';setTimeout(function(){pill.style.display='none';},320);}
  setTimeout(function(){
    if(player){
      player.classList.add('open');
      var vid=document.getElementById('apo-video');
      if(vid){vid.load();vid.play().catch(function(){});vidPlaying=true;var ic=document.getElementById('vid-play-icon');if(ic)ic.textContent='⏸';_vidProg(vid);vid.addEventListener('ended',function(){vidPause();});}
    }
  },340);
  setTimeout(function(){if(msg)msg.classList.add('show');},940);
  setTimeout(function(){if(btns)btns.classList.add('show');},1700);
}
function vidToggle(e){if(e)e.stopPropagation();var vid=document.getElementById('apo-video');if(!vid)return;if(vidPlaying)vidPause();else{vid.play().catch(function(){});vidPlaying=true;var ic=document.getElementById('vid-play-icon');if(ic)ic.textContent='⏸';_vidProg(vid);}}
function vidPause(){var vid=document.getElementById('apo-video');if(vid)vid.pause();vidPlaying=false;var ic=document.getElementById('vid-play-icon');if(ic)ic.textContent='▶';clearInterval(vidInterval);}
function _vidProg(vid){clearInterval(vidInterval);vidInterval=setInterval(function(){if(!vid||!vid.duration)return;var p=vid.currentTime/vid.duration*100;var f=document.getElementById('vid-prog-fill'),d=document.getElementById('vid-prog-dot'),t=document.getElementById('vid-time');if(f)f.style.width=p+'%';if(d)d.style.left=p+'%';if(t){var s=Math.floor(vid.currentTime),m=Math.floor(s/60),sc=s%60;t.textContent=m+':'+(sc<10?'0':'')+sc;}},250);}
function vidSeek(e){var vid=document.getElementById('apo-video'),w=document.getElementById('vid-prog-wrap');if(!vid||!vid.duration||!w)return;var r=w.getBoundingClientRect();vid.currentTime=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width))*vid.duration;}
function vidFullscreen(){var vid=document.getElementById('apo-video');if(!vid)return;if(vid.requestFullscreen)vid.requestFullscreen();else if(vid.webkitRequestFullscreen)vid.webkitRequestFullscreen();}

function apoYes(){
  var bw=document.getElementById('apo-buttons-wrap'),acc=document.getElementById('apo-accepted'),he=document.getElementById('apo-accepted-hearts');
  if(bw){bw.style.transition='opacity .4s ease,transform .4s ease';bw.style.opacity='0';bw.style.transform='scale(.9)';setTimeout(function(){bw.style.display='none';},420);}
  setTimeout(function(){if(acc){acc.classList.add('show');spawnAcceptedHearts(he);}burstHearts(30);},450);
}
function apoNo(){
  var nb=document.getElementById('apo-no');if(!nb)return;noClickCount++;
  var sc=Math.max(.08,1-noClickCount*.18),op=Math.max(.15,1-noClickCount*.12);
  nb.style.transition='transform .3s cubic-bezier(.22,.68,0,1.4),opacity .3s ease';nb.style.transform='scale('+sc+')';nb.style.opacity=op;
  var yb=document.getElementById('apo-yes');if(yb){yb.style.animation='none';void yb.offsetWidth;yb.style.animation='yesWobble .5s cubic-bezier(.22,.68,0,1.4),yesShimmer 2s .6s ease-in-out infinite';}
  if(noClickCount>=5)nb.style.visibility='hidden';
}
function spawnAcceptedHearts(c){
  if(!c)return;var em=['💗','💕','💖','♥','🌷','✿','🩷','💓','🌸','💞'];
  for(var i=0;i<20;i++){(function(i){setTimeout(function(){var el=document.createElement('span');el.className='apo-acc-heart';el.textContent=em[Math.floor(Math.random()*em.length)];el.style.left=(5+Math.random()*90)+'%';el.style.bottom='0px';el.style.fontSize=(.9+Math.random()*.9)+'rem';var d=1.2+Math.random()*1.2;el.style.animationDuration=d+'s';c.appendChild(el);setTimeout(function(){el.remove();},d*1000+100);},i*90);})(i);}
  setTimeout(function(){spawnAcceptedHearts(c);},2200);
}
(function(){var s=document.createElement('style');s.textContent='@keyframes yesWobble{0%{transform:scale(1) rotate(0)}20%{transform:scale(1.12) rotate(-4deg)}40%{transform:scale(1.08) rotate(4deg)}60%{transform:scale(1.05) rotate(-2deg)}80%{transform:scale(1.02) rotate(1deg)}100%{transform:scale(1) rotate(0)}}';document.head.appendChild(s);})();

// ===== BOUQUET CANVAS =====
var bqBloomed=false, bqRaf=null, bqIdleRaf=null;
var bqStartTime=null;
var BQ_DURATION=3000; // ms for bloom animation

// ---- EASING ----
function easeOutElastic(t){if(t===0)return 0;if(t===1)return 1;var c4=(2*Math.PI)/3;return Math.pow(2,-10*t)*Math.sin((t*10-0.75)*c4)+1;}
function easeOutCubic(t){return 1-Math.pow(1-t,3);}
function easeInOutQuad(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;}
function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
function sub(p,from,to){return clamp((p-from)/(to-from),0,1);}

// ---- TULIP CONFIGS ----
var TULIPS=[
  {dx:-76, baseLen:175, angle:-24, s:.76},
  {dx:-38, baseLen:192, angle:-12, s:.87},
  {dx:  0, baseLen:210, angle:  0, s:1.0},
  {dx: 38, baseLen:192, angle: 12, s:.87},
  {dx: 76, baseLen:175, angle: 24, s:.76},
];

// ---- FALLING PETALS STATE ----
var fallingPetals=[];
function initFallingPetals(){
  fallingPetals=[];
  for(var i=0;i<38;i++){
    fallingPetals.push({
      x:20+Math.random()*280,
      y:-20-Math.random()*120,
      vy:0.6+Math.random()*0.9,
      vx:(Math.random()-.5)*0.7,
      rot:Math.random()*Math.PI*2,
      vrot:(Math.random()-.5)*0.04,
      size:5+Math.random()*7,
      color:['#f9a8d4','#fbcfe8','#fce7f3','#f472b6','#fbbdd4'][Math.floor(Math.random()*5)],
      alpha:0.7+Math.random()*.3,
      delay:i*80, // ms
      active:false
    });
  }
}

function updateFallingPetals(elapsed){
  fallingPetals.forEach(function(p){
    if(elapsed<p.delay)return;
    p.active=true;
    p.x+=p.vx;
    p.y+=p.vy;
    p.rot+=p.vrot;
    if(p.y>440){p.y=-20;p.x=20+Math.random()*280;}
  });
}

function drawFallingPetals(ctx){
  fallingPetals.forEach(function(p){
    if(!p.active)return;
    ctx.save();
    ctx.globalAlpha=p.alpha;
    ctx.translate(p.x,p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle=p.color;
    ctx.beginPath();
    ctx.ellipse(0,0,p.size*.5,p.size,0,0,Math.PI*2);
    ctx.fill();
    ctx.restore();
  });
}

// ---- SUN GLOW ----
function drawSunGlow(ctx, W, t, globalT){
  // pulsing sun at top center
  var cx=W/2, cy=38;
  var pulse=0.85+0.15*Math.sin(globalT*2.2);
  var pulse2=0.7+0.3*Math.sin(globalT*1.7+1);

  // outer corona rays
  var rays=12;
  ctx.save();
  ctx.globalAlpha=0.12*t*pulse2;
  ctx.strokeStyle='#ffd6ec';
  ctx.lineWidth=2;
  for(var i=0;i<rays;i++){
    var a=i*(Math.PI*2/rays)+globalT*0.3;
    var r1=28, r2=52+8*Math.sin(globalT*1.8+i);
    ctx.beginPath();
    ctx.moveTo(cx+Math.cos(a)*r1, cy+Math.sin(a)*r1);
    ctx.lineTo(cx+Math.cos(a)*r2, cy+Math.sin(a)*r2);
    ctx.stroke();
  }
  ctx.restore();

  // big soft radial glow — beams shining down like sunlight
  var beamGrad=ctx.createRadialGradient(cx,cy,0,cx,cy,200*t);
  beamGrad.addColorStop(0, 'rgba(255,182,217,'+(0.28*t*pulse)+')');
  beamGrad.addColorStop(0.3,'rgba(255,214,240,'+(0.16*t)+')');
  beamGrad.addColorStop(0.7,'rgba(255,230,248,'+(0.07*t)+')');
  beamGrad.addColorStop(1,  'rgba(255,240,250,0)');
  ctx.save();
  ctx.globalAlpha=1;
  ctx.fillStyle=beamGrad;
  ctx.beginPath();
  ctx.arc(cx,cy,200,0,Math.PI*2);
  ctx.fill();
  ctx.restore();

  // sun disc
  var discR=18*pulse;
  var discGrad=ctx.createRadialGradient(cx-3,cy-3,1,cx,cy,discR);
  discGrad.addColorStop(0,'rgba(255,255,240,'+(t)+')');
  discGrad.addColorStop(0.4,'rgba(255,214,180,'+(t*.9)+')');
  discGrad.addColorStop(0.8,'rgba(255,160,160,'+(t*.7)+')');
  discGrad.addColorStop(1,'rgba(244,114,182,'+(t*.4)+')');
  ctx.save();
  ctx.globalAlpha=t;
  ctx.beginPath();
  ctx.arc(cx,cy,discR,0,Math.PI*2);
  ctx.fillStyle=discGrad;
  ctx.fill();
  // rim glow
  ctx.shadowBlur=22*pulse;
  ctx.shadowColor='rgba(255,182,217,.8)';
  ctx.strokeStyle='rgba(255,255,255,.55)';
  ctx.lineWidth=1.5;
  ctx.stroke();
  ctx.restore();

  // shimmer light shaft down center
  var shaftH=180*t;
  var shaftGrad=ctx.createLinearGradient(cx,cy+discR,cx,cy+discR+shaftH);
  shaftGrad.addColorStop(0,'rgba(255,230,245,'+(0.22*t*pulse)+')');
  shaftGrad.addColorStop(1,'rgba(255,230,245,0)');
  ctx.save();
  ctx.globalAlpha=1;
  ctx.fillStyle=shaftGrad;
  ctx.beginPath();
  ctx.moveTo(cx-18,cy+discR);
  ctx.lineTo(cx+18,cy+discR);
  ctx.lineTo(cx+38,cy+discR+shaftH);
  ctx.lineTo(cx-38,cy+discR+shaftH);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// ---- DRAW HELPERS ----
function drawLeaf(ctx,x,y,angleDeg,t,col){
  if(t<=0)return;
  ctx.save();ctx.translate(x,y);ctx.rotate(angleDeg*Math.PI/180);ctx.scale(t,t);
  ctx.beginPath();ctx.moveTo(0,0);
  ctx.bezierCurveTo(-9,-11,-16,-28,0,-42);
  ctx.bezierCurveTo(16,-28,9,-11,0,0);
  ctx.fillStyle=col;ctx.fill();
  // midrib
  ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-32);
  ctx.strokeStyle='rgba(255,255,255,.25)';ctx.lineWidth=1;ctx.stroke();
  ctx.restore();
}

function drawWrapBack(ctx,cx,baseY,t){
  ctx.save();ctx.globalAlpha=t;
  var top=baseY-175,bot=baseY+12,lx=cx-82,rx=cx+82;
  ctx.beginPath();ctx.moveTo(cx-7,bot);ctx.lineTo(lx,top);ctx.lineTo(rx,top);ctx.lineTo(cx+7,bot);ctx.closePath();
  var g=ctx.createLinearGradient(lx,top,rx,bot);
  g.addColorStop(0,'#c4a070');g.addColorStop(.4,'#e0c490');g.addColorStop(1,'#c4a070');
  ctx.fillStyle=g;ctx.fill();
  // creases
  ctx.strokeStyle='rgba(150,110,60,.3)';ctx.lineWidth=.9;
  [-55,-26,0,26,55].forEach(function(ox){ctx.beginPath();ctx.moveTo(cx+ox*.75,top+4);ctx.lineTo(cx+ox*.1,bot-4);ctx.stroke();});
  ctx.restore();
}

function drawWrapFront(ctx,cx,baseY,t){
  ctx.save();ctx.globalAlpha=t;
  var top=baseY-150,bot=baseY+14;
  ctx.beginPath();ctx.moveTo(cx-7,bot);ctx.quadraticCurveTo(cx,bot+10,cx+7,bot);ctx.lineTo(cx+72,top);ctx.lineTo(cx-72,top);ctx.closePath();
  var g=ctx.createLinearGradient(cx-72,top,cx+72,bot);
  g.addColorStop(0,'#b89060');g.addColorStop(.3,'#e8d090');g.addColorStop(.6,'#d4bc78');g.addColorStop(1,'#b89060');
  ctx.fillStyle=g;ctx.fill();
  // top fold
  ctx.beginPath();ctx.moveTo(cx-72,top);ctx.lineTo(cx+72,top);
  ctx.strokeStyle='rgba(255,240,195,.7)';ctx.lineWidth=2.2;ctx.stroke();
  // creases
  ctx.strokeStyle='rgba(140,100,55,.25)';ctx.lineWidth=.85;
  [-46,-22,0,22,46].forEach(function(ox){ctx.beginPath();ctx.moveTo(cx+ox,top+2);ctx.lineTo(cx+ox*.07,bot-4);ctx.stroke();});
  ctx.restore();
}

function drawPetal(ctx,ox,oy,lean,h,cBot,cMid,cTop,alpha){
  ctx.save();ctx.translate(ox,oy);ctx.rotate(lean*Math.PI/180);ctx.globalAlpha=(ctx.globalAlpha||1)*alpha;
  var g=ctx.createLinearGradient(0,0,0,-h);
  g.addColorStop(0,cBot);g.addColorStop(.5,cMid);g.addColorStop(1,cTop);
  var w=h*.3;
  ctx.beginPath();ctx.moveTo(0,3);
  ctx.bezierCurveTo(-w,-h*.12,-w*.9,-h*.62,0,-h);
  ctx.bezierCurveTo(w*.9,-h*.62,w,-h*.12,0,3);
  ctx.fillStyle=g;ctx.fill();
  ctx.beginPath();ctx.moveTo(0,2);ctx.lineTo(0,-h*.78);
  ctx.strokeStyle='rgba(255,255,255,.28)';ctx.lineWidth=.85;ctx.stroke();
  ctx.restore();
}

function drawTulip(ctx,x,y,scale,t,idx){
  ctx.save();ctx.translate(x,y);
  var s=t*scale;ctx.scale(s,s);
  var bases=['#f472b6','#f9a8d4','#fce7f3','#f472b6','#fbbdd4'];
  var mids =['#ec4899','#f472b6','#f9a8d4','#ec4899','#f472b6'];
  var tops =['#fce7f3','#fde8f4','#ffffff','#fce7f3','#fde8f4'];
  var bc=bases[idx]||'#f472b6',mc=mids[idx]||'#ec4899',tc=tops[idx]||'#fce7f3';
  var ph=scale>=1?56:scale>.88?50:43;
  drawPetal(ctx,-13,0,-19,ph,bc,mc,tc,.68);
  drawPetal(ctx,13,0,19,ph,bc,mc,tc,.68);
  drawPetal(ctx,-8,0,-9,ph+3,mc,bc,tc,.85);
  drawPetal(ctx,8,0,9,ph+3,mc,bc,tc,.85);
  drawPetal(ctx,0,0,0,ph+8,tc,bc,mc,1);
  // inner depth shadow
  ctx.beginPath();ctx.moveTo(0,3);ctx.bezierCurveTo(-5,-ph*.28,5,-ph*.28,0,3);ctx.fillStyle='rgba(180,20,80,.16)';ctx.fill();
  ctx.restore();
}

function drawRibbon(ctx,cx,y,t){
  if(t<=0)return;
  ctx.save();ctx.translate(cx*(1-t),y*(1-t));ctx.scale(t,t);
  var kx=cx,ky=y;
  ctx.beginPath();ctx.moveTo(kx,ky);ctx.bezierCurveTo(kx-24,ky-25,kx-40,ky-10,kx-20,ky);ctx.fillStyle='#f9a8d4';ctx.fill();ctx.strokeStyle='#ec4899';ctx.lineWidth=1;ctx.stroke();
  ctx.beginPath();ctx.moveTo(kx,ky);ctx.bezierCurveTo(kx+24,ky-25,kx+40,ky-10,kx+20,ky);ctx.fillStyle='#f9a8d4';ctx.fill();ctx.strokeStyle='#ec4899';ctx.lineWidth=1;ctx.stroke();
  var kg=ctx.createRadialGradient(kx-2,ky-2,1,kx,ky,11);kg.addColorStop(0,'#f472b6');kg.addColorStop(1,'#be185d');
  ctx.beginPath();ctx.ellipse(kx,ky,11,7,0,0,Math.PI*2);ctx.fillStyle=kg;ctx.fill();
  ctx.beginPath();ctx.ellipse(kx,ky,5,3.5,0,0,Math.PI*2);ctx.fillStyle='rgba(255,200,230,.6)';ctx.fill();
  ctx.beginPath();ctx.moveTo(kx-7,ky+5);ctx.quadraticCurveTo(kx-20,ky+24,kx-26,ky+36);ctx.strokeStyle='#f9a8d4';ctx.lineWidth=3.8;ctx.lineCap='round';ctx.stroke();ctx.strokeStyle='#ec4899';ctx.lineWidth=1.2;ctx.stroke();
  ctx.beginPath();ctx.moveTo(kx+7,ky+5);ctx.quadraticCurveTo(kx+20,ky+24,kx+26,ky+36);ctx.strokeStyle='#f9a8d4';ctx.lineWidth=3.8;ctx.stroke();ctx.strokeStyle='#ec4899';ctx.lineWidth=1.2;ctx.stroke();
  ctx.restore();
}

function drawSparkles(ctx,cx,baseY,t,gt){
  var pos=[
    {x:cx-88,y:baseY-225,sz:14},{x:cx+86,y:baseY-215,sz:12},
    {x:cx,   y:baseY-275,sz:10},{x:cx-58,y:baseY-200,sz:7},
    {x:cx+58,y:baseY-205,sz:7},{x:cx,    y:baseY-308,sz:6},
    {x:cx-30,y:baseY-255,sz:8},{x:cx+30,y:baseY-248,sz:8}
  ];
  pos.forEach(function(sp,i){
    var tw=0.5+0.5*Math.sin(gt*2.2+i*1.1);
    ctx.save();ctx.globalAlpha=t*tw*.9;
    ctx.fillStyle=i%3===0?'#f472b6':i%3===1?'#fbbdd4':'#fce7f3';
    ctx.font='bold '+sp.sz+'px serif';
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('✦',sp.x,sp.y);
    ctx.restore();
  });
}

// ---- MAIN DRAW ----
function bqDraw(progress, globalT){
  var canvas=document.getElementById('bouquet-canvas');
  if(!canvas)return;
  var ctx=canvas.getContext('2d');
  var W=canvas.width, H=canvas.height;
  ctx.clearRect(0,0,W,H);

  var cx=W/2, baseY=H-28;

  // PHASE MAP
  var sunP    = easeOutCubic(sub(progress, 0,    0.25));
  var stemP   = easeOutCubic(sub(progress, 0.05, 0.28));
  var leafP   = easeOutCubic(sub(progress, 0.18, 0.40));
  var paperP  = easeOutCubic(sub(progress, 0.22, 0.48));
  var ribbonP = easeOutElastic(sub(progress, 0.42, 0.60));
  var sparkP  = easeOutCubic(sub(progress, 0.82, 1.00));

  // 1. SUN GLOW (first thing drawn — behind everything)
  if(sunP>0) drawSunGlow(ctx, W, sunP, globalT);

  // 2. FALLING PETALS (behind stems/bouquet)
  if(progress>0.1) drawFallingPetals(ctx);

  // 3. STEMS
  if(stemP>0){
    TULIPS.forEach(function(tl,i){
      var tp=easeOutCubic(sub(progress, 0.05+i*.018, 0.30+i*.01));
      if(tp<=0)return;
      ctx.save();
      ctx.strokeStyle=i===2?'#5a8a3a':'#4a7c2f';
      ctx.lineWidth=i===2?4.2:3.2;ctx.lineCap='round';
      var sway=Math.sin(globalT*1.1+i*.8)*2.5*(progress>0.9?1:progress*1.1);
      var endX=cx+tl.dx+sway, endY=baseY-tl.baseLen*tp;
      var cpx=cx+Math.sin(tl.angle*Math.PI/180)*tl.baseLen*.38;
      var cpy=baseY-(tl.baseLen*tp)*.52;
      ctx.beginPath();ctx.moveTo(cx,baseY-14);ctx.quadraticCurveTo(cpx,cpy,endX,endY);
      ctx.stroke();ctx.restore();
    });
  }

  // 4. LEAVES
  if(leafP>0){
    drawLeaf(ctx,cx-30,baseY-110,-58,leafP*.88,'#5a8a3a');
    drawLeaf(ctx,cx+30,baseY-110, 58,leafP*.88,'#5a8a3a');
    drawLeaf(ctx,cx-48,baseY-142,-68,leafP*.70,'#4a7c2f');
    drawLeaf(ctx,cx+48,baseY-142, 68,leafP*.70,'#4a7c2f');
    drawLeaf(ctx,cx-14,baseY-88, -42,leafP*.60,'#6a9a40');
    drawLeaf(ctx,cx+14,baseY-88,  42,leafP*.60,'#6a9a40');
  }

  // 5. WRAP PAPER BACK
  if(paperP>0) drawWrapBack(ctx,cx,baseY,paperP);

  // 6. TULIPS — staggered, grow from base
  TULIPS.forEach(function(tl,i){
    var delay=0.36+i*.07;
    var tp=easeOutElastic(sub(progress, delay, delay+0.30));
    if(tp<=0)return;
    var sway=Math.sin(globalT*1.1+i*.8)*2.5;
    var tipX=cx+tl.dx+(progress>=1?sway:0);
    var tipY=baseY-tl.baseLen;
    drawTulip(ctx,tipX,tipY,tl.s,tp,i);
  });

  // 7. WRAP PAPER FRONT
  if(paperP>0) drawWrapFront(ctx,cx,baseY,paperP);

  // 8. RIBBON
  if(ribbonP>0) drawRibbon(ctx,cx,baseY-8,ribbonP);

  // 9. SPARKLES
  if(sparkP>0) drawSparkles(ctx,cx,baseY,sparkP,globalT);
}

// ---- ANIMATION ----
var bqGlobalT=0;

function bqBloomLoop(ts){
  if(!bqStartTime) bqStartTime=ts;
  var elapsed=ts-bqStartTime;
  var progress=Math.min(elapsed/BQ_DURATION,1);
  bqGlobalT=ts/1000;
  if(progress>0.1) updateFallingPetals(elapsed);
  bqDraw(progress, bqGlobalT);
  if(progress<1){
    bqRaf=requestAnimationFrame(bqBloomLoop);
  } else {
    bqIdleRaf=requestAnimationFrame(bqIdleLoop);
  }
}

function bqIdleLoop(ts){
  bqGlobalT=ts/1000;
  updateFallingPetals(bqGlobalT*1000);
  bqDraw(1, bqGlobalT);
  bqIdleRaf=requestAnimationFrame(bqIdleLoop);
}

function bloomBouquet(){
  if(bqBloomed)return; bqBloomed=true;
  // Show canvas wrapper
  var wrap=document.getElementById('bouquet-canvas-wrap');
  if(wrap) wrap.classList.add('visible');
  // Button state
  var btn=document.getElementById('bouquet-btn');
  var btxt=document.getElementById('bouquet-btn-text');
  if(btn) btn.classList.add('bloomed');
  if(btxt) btxt.textContent='🌷 For you, my Felicity';
  // Init petals
  initFallingPetals();
  // Burst hearts + page petals
  burstHearts(24);
  spawnPetals4();
  // Start bloom animation
  bqRaf=requestAnimationFrame(bqBloomLoop);
  // Show message
  setTimeout(function(){var m=document.getElementById('bouquet-msg');if(m)m.classList.add('show');},3200);
}

function spawnPetals4(){
  var c=document.getElementById('hearts-container');if(!c)return;
  var arr=['🌷','🌸','✿','🌺','💮','🌼','💗','🩷'];
  for(var i=0;i<32;i++){(function(i){setTimeout(function(){var p=document.createElement('div');p.classList.add('heart');p.textContent=arr[Math.floor(Math.random()*arr.length)];p.style.left=(Math.random()*96)+'vw';p.style.fontSize=(.8+Math.random()*1.3)+'rem';var d=2+Math.random()*2.4;p.style.animationDuration=d+'s';c.appendChild(p);setTimeout(function(){p.remove();},d*1000+200);},i*65);})(i);}
}
