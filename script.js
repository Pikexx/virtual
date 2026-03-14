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

// ===== PAGE 3 — PIXEL BUNNY (tap) =====
var BUNNY_GRID=[[0,0,0,3,3,0,0,3,3,0,0,0],[0,0,3,1,3,0,0,3,1,3,0,0],[0,0,3,2,3,0,0,3,2,3,0,0],[0,0,3,2,3,0,0,3,2,3,0,0],[0,3,3,1,3,3,3,3,1,3,3,0],[0,3,1,1,1,1,1,1,1,1,3,0],[3,1,1,4,1,1,1,4,1,1,1,3],[3,1,5,1,1,6,1,1,1,5,1,3],[3,1,1,1,3,1,3,1,1,1,1,3],[0,3,1,1,1,1,1,1,1,1,3,0],[3,1,1,7,7,7,7,7,1,1,1,3],[3,1,1,7,7,7,7,7,1,1,1,3],[0,3,3,1,1,3,3,1,1,3,3,0],[0,0,3,3,0,3,3,0,3,3,0,0]];
var BUNNY_PAL={0:null,1:'#f5e6f0',2:'#f9a8d4',3:'#2d0a1a',4:'#1a0010',5:'#fda4af',6:'#f472b6',7:'#edd5e8'};
function drawPixelBunny(){var c=document.getElementById('bunny-canvas');if(!c)return;var ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);ctx.imageSmoothingEnabled=false;for(var r=0;r<BUNNY_GRID.length;r++)for(var col=0;col<BUNNY_GRID[r].length;col++){var color=BUNNY_PAL[BUNNY_GRID[r][col]];if(!color)continue;ctx.fillStyle=color;ctx.fillRect(col*8,r*8,8,8);}}
window.addEventListener('load',drawPixelBunny);
var bunnyMessages=["i love you so much my felicity 🌷","you are the most captivating woman 💖","you are my hardworking sugarhoneybunchplumplum 🍯","you are the color of my life 🎨💕","i love everything about you baby 🥰"];
var bunnyQuips=["boing!!! 🐰","wheee!! 💕","yay!! 🌷","bun bun!! 🥰","hop hop!! 🐾","hehe!! 💗"];
var bunnyJumping=false,bunnyLastMsg=-1;
function bunnyClick(){
  if(bunnyJumping)return;bunnyJumping=true;
  var canvas=document.getElementById('bunny-canvas'),bubble=document.getElementById('rabbit-bubble'),
      bubbleTxt=document.getElementById('rabbit-bubble-text'),msgBox=document.getElementById('rabbit-msg-box'),
      msgText=document.getElementById('rabbit-msg-text'),heartsEl=document.getElementById('rabbit-hearts');
  if(bubbleTxt)bubbleTxt.textContent=bunnyQuips[Math.floor(Math.random()*bunnyQuips.length)];
  if(bubble){bubble.classList.remove('show');void bubble.offsetWidth;bubble.classList.add('show');}
  if(canvas){canvas.classList.remove('jumping','squish');void canvas.offsetWidth;canvas.classList.add('jumping');
    setTimeout(function(){canvas.classList.remove('jumping');canvas.classList.add('squish');
      setTimeout(function(){canvas.classList.remove('squish');canvas.style.animation='none';void canvas.offsetWidth;canvas.style.animation='';bunnyJumping=false;},350);},700);}
  spawnBunnyHearts(heartsEl);burstHearts(12);
  setTimeout(function(){if(bubble)bubble.classList.remove('show');},2400);
  var idx;do{idx=Math.floor(Math.random()*bunnyMessages.length);}while(idx===bunnyLastMsg&&bunnyMessages.length>1);bunnyLastMsg=idx;
  if(msgText)msgText.textContent=bunnyMessages[idx];
  if(msgBox){msgBox.classList.remove('show');void msgBox.offsetWidth;msgBox.classList.add('show');msgBox.style.display='block';setTimeout(function(){msgBox.scrollIntoView({behavior:'smooth',block:'nearest'});},100);}
}
function spawnBunnyHearts(container){if(!container)return;
  var emojis=['💕','💗','💖','♥','🌷','✿','💓','🩷','💞','🐰'];
  for(var i=0;i<12;i++)(function(i){setTimeout(function(){
    var el=document.createElement('span');el.className='rh-heart';
    el.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left=(15+Math.random()*70)+'%';el.style.fontSize=(.8+Math.random()*.9)+'rem';
    var dur=.9+Math.random()*.8;el.style.animationDuration=dur+'s';
    container.appendChild(el);setTimeout(function(){el.remove();},dur*1000+100);},i*70);})(i);}

// ===== FLIP GARDEN (flower strip + birds) =====
var fgCanvas=null,fgCtx=null,fgRAF=null,fgFlowers=[],fgBirds=[],fgTime=0;
var FG_FC=[{petal:'#f472b6',center:'#fbbf24',stem:'#4a7a00'},{petal:'#f9a8d4',center:'#fcd34d',stem:'#4a7a00'},{petal:'#e879f9',center:'#fbbf24',stem:'#5a8a00'},{petal:'#fda4af',center:'#fef08a',stem:'#3a6000'},{petal:'#c084fc',center:'#fde047',stem:'#4a7a00'}];
function fgInit(){
  fgCanvas=document.getElementById('flip-garden-canvas');if(!fgCanvas)return;
  fgCtx=fgCanvas.getContext('2d');var W=fgCanvas.width,H=fgCanvas.height;
  fgFlowers=[];for(var i=0;i<11;i++)fgFlowers.push({x:(W/12)*(i+1)+(Math.random()-.5)*18,groundY:H-8,stemH:22+Math.random()*28,progress:0,color:FG_FC[Math.floor(Math.random()*FG_FC.length)],sway:Math.random()*Math.PI*2,delay:i*.09});
  fgBirds=[];for(var b=0;b<4;b++)fgBirds.push({x:Math.random()*W,y:8+Math.random()*22,vx:.4+Math.random()*.5,phase:Math.random()*Math.PI*2,wingT:0,dir:Math.random()<.5?1:-1});
  if(fgRAF)cancelAnimationFrame(fgRAF);
  var st=performance.now(),gd=2000;
  function fgTick(now){var el=now-st;fgTime=el/1000;if(!fgCtx)return;
    var W2=fgCanvas.width,H2=fgCanvas.height;fgCtx.clearRect(0,0,W2,H2);
    var sky=fgCtx.createLinearGradient(0,0,0,H2*.6);sky.addColorStop(0,'#1a0010');sky.addColorStop(1,'#2d0020');
    fgCtx.fillStyle=sky;fgCtx.fillRect(0,0,W2,H2);
    fgCtx.fillStyle='#3a6000';fgCtx.fillRect(0,H2-8,W2,8);fgCtx.fillStyle='#5a8a00';fgCtx.fillRect(0,H2-12,W2,4);
    fgFlowers.forEach(function(f){var ts=f.delay*gd,te=ts+gd*.65;if(el>ts)f.progress=Math.min((el-ts)/(te-ts),1);fgDF(fgCtx,f,fgTime);});
    if(el>800){var bA=Math.min((el-800)/400,1);fgBirds.forEach(function(bird){bird.wingT+=.18;bird.x+=bird.vx*bird.dir;bird.y+=Math.sin(bird.phase+fgTime*.8)*.35;if(bird.x>W2+20)bird.x=-20;if(bird.x<-20)bird.x=W2+20;fgDB(fgCtx,bird,bA);});}
    fgRAF=requestAnimationFrame(fgTick);}
  fgRAF=requestAnimationFrame(fgTick);
}
function fgDF(ctx,f,t){if(f.progress<=0)return;var sw=Math.sin(t*.85+f.sway)*2,sH=f.stemH*Math.min(f.progress,1),gY=f.groundY,x=f.x;ctx.save();ctx.strokeStyle=f.color.stem;ctx.lineWidth=2;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,gY);ctx.quadraticCurveTo(x+sw*.5,gY-sH*.5,x+sw,gY-sH);ctx.stroke();if(f.progress>.4){var lp=Math.min((f.progress-.4)/.4,1),lx=x+sw*.4,ly=gY-sH*.45;ctx.save();ctx.globalAlpha=lp;ctx.fillStyle='#58961a';ctx.beginPath();ctx.moveTo(lx,ly);ctx.quadraticCurveTo(lx+14*lp,ly-8,lx+11*lp,ly+5);ctx.quadraticCurveTo(lx+3,ly+3,lx,ly);ctx.fill();ctx.restore();}if(f.progress>.7){var pp=Math.min((f.progress-.7)/.3,1),fx=x+sw,fy=gY-sH,pw=5*pp,ph=11*pp;ctx.globalAlpha=pp;for(var k=0;k<5;k++){var ang=(k/5)*Math.PI*2-Math.PI/2;ctx.save();ctx.translate(fx+Math.cos(ang)*pw*.55,fy+Math.sin(ang)*pw*.28);ctx.rotate(ang+Math.PI/2);ctx.fillStyle=f.color.petal;ctx.shadowColor=f.color.petal;ctx.shadowBlur=5;ctx.beginPath();ctx.ellipse(0,-ph*.5,pw*.65,ph*.55,0,0,Math.PI*2);ctx.fill();ctx.restore();}ctx.fillStyle=f.color.center;ctx.shadowColor=f.color.center;ctx.shadowBlur=4;ctx.beginPath();ctx.arc(fx,fy,3*pp,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;}ctx.restore();}
function fgDB(ctx,bird,alpha){var x=bird.x,y=bird.y,wf=Math.sin(bird.wingT)*.7+.3;ctx.save();ctx.globalAlpha=alpha*.8;ctx.strokeStyle='#ffd6ec';ctx.lineWidth=1.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x-5,y-6*wf,x-9,y-1);ctx.stroke();ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+5,y-6*wf,x+9,y-1);ctx.stroke();ctx.restore();}

// ===== DANCING BUNNIES =====
var danceCanvas=null,danceCtx=null,danceRAF=null,danceTime=0;
var DANCE_MSGS=["i love you felicity","you are my only one baby","im all yours felicity"];
var danceMsgIdx=0,danceMsgTimer=0;
// Pixel size for dance bunnies
var P=5;

// Draw one pixel — helper
function dp(ctx,col,gx,gy,w,h){ctx.fillStyle=col;ctx.fillRect(gx*P,gy*P,(w||1)*P,(h||1)*P);}

// Draw a pixel bunny for dancing
// cx,cy = center bottom position in canvas pixels
// facing: 1=right, -1=left
// phase: 0..1 dance beat
// colors: {body,earInner,outline,tummy}
// pose: 'normal' or 'waltz'
function drawDancer(ctx, cx, cy, facing, phase, colors){
  ctx.save();
  ctx.imageSmoothingEnabled=false;

  // Vertical bob
  var bob = Math.sin(phase * Math.PI * 2) * 2.5;
  // Horizontal sway
  var sway = Math.sin(phase * Math.PI * 2 + 0.5) * 1.5 * facing;

  // Translate origin to feet
  ctx.translate(cx + sway, cy + bob);

  var o=colors.outline, bd=colors.body, ei=colors.earInner, tm=colors.tummy;

  // --- Ears ---
  // Ear offset: ears sit slightly inside head
  // For facing=1 (right): left ear at col -1, right ear at col 2
  // For facing=-1 (left): mirror
  var el = facing===1 ? -1 : 1;  // ear left col
  var er = facing===1 ?  2 : -2; // ear right col (relative)

  // Left ear (inner)
  ctx.fillStyle=o; ctx.fillRect((el-1)*P,-9*P,3*P,5*P);
  ctx.fillStyle=bd;ctx.fillRect(el*P,-8*P,P,3*P);
  ctx.fillStyle=ei;ctx.fillRect(el*P,-8*P,P,2*P);
  // Right ear
  ctx.fillStyle=o; ctx.fillRect((er-1)*P,-9*P,3*P,5*P);
  ctx.fillStyle=bd;ctx.fillRect(er*P,-8*P,P,3*P);
  ctx.fillStyle=ei;ctx.fillRect(er*P,-8*P,P,2*P);

  // --- Head ---
  ctx.fillStyle=o;  ctx.fillRect(-2*P,-7*P,5*P,P);   // top
  ctx.fillStyle=o;  ctx.fillRect(-2*P,-3*P,5*P,P);   // bottom
  ctx.fillStyle=bd; ctx.fillRect(-2*P,-6*P,5*P,3*P);
  ctx.fillStyle=o;  ctx.fillRect(-3*P,-6*P,P,3*P);   // left side
  ctx.fillStyle=o;  ctx.fillRect(3*P,-6*P,P,3*P);    // right side

  // --- Eyes ---
  // Eye: one pixel for facing direction
  var eyeX = facing===1 ? -1 : 1;
  ctx.fillStyle=colors.eye; ctx.fillRect(eyeX*P,-5*P,P,P);
  // Eye shine
  ctx.fillStyle='#fff'; ctx.fillRect((eyeX+(facing===1?0.5:-0.5))*P,-5*P,P*.5,P*.5);

  // --- Nose ---
  ctx.fillStyle='#f472b6'; ctx.fillRect(-0.5*P,-4*P,P,P*.6);

  // --- Body ---
  ctx.fillStyle=o;  ctx.fillRect(-2*P,-2*P,5*P,P);   // top
  ctx.fillStyle=o;  ctx.fillRect(-2*P,4*P,5*P,P);    // bottom
  ctx.fillStyle=bd; ctx.fillRect(-2*P,-1*P,5*P,5*P);
  ctx.fillStyle=o;  ctx.fillRect(-3*P,-1*P,P,5*P);   // left
  ctx.fillStyle=o;  ctx.fillRect(3*P,-1*P,P,5*P);    // right

  // --- Tummy ---
  ctx.fillStyle=tm; ctx.fillRect(-1*P,0,3*P,3*P);

  // --- Legs (alternating step) ---
  var stepA = Math.sin(phase*Math.PI*2)*1.5;
  var stepB = Math.sin(phase*Math.PI*2+Math.PI)*1.5;
  ctx.fillStyle=o;  ctx.fillRect(-2*P,(5+stepA)*P,2*P,P);
  ctx.fillStyle=bd; ctx.fillRect(-2*P,(5+stepA)*P,2*P,P*.5);
  ctx.fillStyle=o;  ctx.fillRect(1*P,(5+stepB)*P,2*P,P);
  ctx.fillStyle=bd; ctx.fillRect(1*P,(5+stepB)*P,2*P,P*.5);

  ctx.restore();
}

// Draw the joined hands
function drawHands(ctx, lx, ly, rx, ry){
  // Pink = right dancer (higher hand)
  // Brown = left dancer (raised arm on right side)
  // Interpolate midpoint
  var mx=(lx+rx)/2, my=(ly+ry)/2;
  // Connection line
  ctx.save();
  ctx.strokeStyle='#fda4af'; ctx.lineWidth=3; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(lx,ly); ctx.lineTo(mx,my); ctx.lineTo(rx,ry); ctx.stroke();
  // Small heart at join
  ctx.fillStyle='#f472b6'; ctx.shadowColor='#f472b6'; ctx.shadowBlur=8;
  ctx.font='10px serif'; ctx.fillText('♥',mx-5,my+4);
  ctx.shadowBlur=0;
  ctx.restore();
}

function danceInit(){
  danceCanvas=document.getElementById('dance-canvas');if(!danceCanvas)return;
  danceCtx=danceCanvas.getContext('2d');
  danceTime=0; danceMsgIdx=0; danceMsgTimer=0;
  if(danceRAF){cancelAnimationFrame(danceRAF);danceRAF=null;}
  showDanceBubble(DANCE_MSGS[0]);
  var lastTs=null;

  function danceTick(now){
    if(!lastTs)lastTs=now;
    var dt=Math.min((now-lastTs)/1000,.05);lastTs=now;
    danceTime+=dt; danceMsgTimer+=dt;
    // Cycle messages every 3s
    if(danceMsgTimer>3.2){danceMsgTimer=0;danceMsgIdx=(danceMsgIdx+1)%DANCE_MSGS.length;showDanceBubble(DANCE_MSGS[danceMsgIdx]);}
    if(!danceCtx)return;

    var W=danceCanvas.width, H=danceCanvas.height;
    danceCtx.clearRect(0,0,W,H);

    // Background
    var bg=danceCtx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0,'#1a0010');bg.addColorStop(1,'#2d0020');
    danceCtx.fillStyle=bg;danceCtx.fillRect(0,0,W,H);

    // Floor
    danceCtx.fillStyle='#3a1a30';danceCtx.fillRect(0,H-10,W,10);
    danceCtx.fillStyle='#5a2050';danceCtx.fillRect(0,H-12,W,2);

    // Background ambient hearts
    for(var h=0;h<6;h++){
      var hx=W*.1+h*(W*.16)+Math.sin(danceTime*.6+h)*14;
      var hy=H*.15+Math.cos(danceTime*.5+h*1.1)*12;
      danceCtx.save();danceCtx.globalAlpha=.12+Math.sin(danceTime*1.5+h)*.06;
      danceCtx.fillStyle='#f472b6';danceCtx.font='11px serif';danceCtx.fillText('♥',hx,hy);
      danceCtx.restore();
    }

    // Dance phase — full beat every 1.8s
    var dPhase=(danceTime%1.8)/1.8;
    // Shared gentle sway
    var sway=Math.sin(danceTime*Math.PI*.8)*6;

    var groundY=H-14;
    // Brown bunny: left, facing right (1)
    var bx=W/2-22+sway*.3;
    // Pink bunny: right, facing left (-1)
    var px2=W/2+22+sway*.3;

    // Raised hand heights — brown raises RIGHT arm, pink raises LEFT arm (toward each other)
    // Brown right arm tip (toward pink): slightly above mid-body
    var browArmY = groundY - P*5 + Math.sin(dPhase*Math.PI*2)*P;
    var browArmX = bx + P*4;   // right side of brown bunny
    // Pink left arm tip (toward brown): mirrored
    var pinkArmY = groundY - P*5 + Math.sin((dPhase+.5)*Math.PI*2)*P;
    var pinkArmX = px2 - P*4;  // left side of pink bunny

    // Draw bunnies
    drawDancer(danceCtx, bx, groundY, 1, dPhase, {
      body:'#8B6040', earInner:'#c49060', outline:'#3a1a08', tummy:'rgba(160,120,80,0.4)', eye:'#1a0010'
    });
    drawDancer(danceCtx, px2, groundY, -1, dPhase+.5, {
      body:'#fce7f3', earInner:'#f9a8d4', outline:'#2d0a1a', tummy:'rgba(255,240,248,0.5)', eye:'#1a0010'
    });

    // Draw joined hands between them
    drawHands(danceCtx, browArmX, browArmY, pinkArmX, pinkArmY);

    // Brown bunny left arm on own waist — draw small horizontal line
    danceCtx.save();
    danceCtx.strokeStyle='#8B6040';danceCtx.lineWidth=3;danceCtx.lineCap='round';
    danceCtx.beginPath();
    danceCtx.moveTo(bx-P*3,groundY-P*1.5);
    danceCtx.lineTo(bx-P*2,groundY-P*.8);
    danceCtx.stroke();
    danceCtx.restore();

    // Sparkles
    for(var s=0;s<4;s++){
      var sA=danceTime*2+s*(Math.PI/2);var sr2=35+Math.sin(danceTime*3+s)*8;
      var sx2=W/2+Math.cos(sA)*sr2+sway*.2,sy2=groundY-P*4+Math.sin(sA)*sr2*.35;
      var sa2=.35+Math.sin(danceTime*4+s)*.2;
      danceCtx.save();danceCtx.globalAlpha=Math.max(0,sa2);danceCtx.fillStyle='#ffd6ec';
      danceCtx.shadowColor='#f472b6';danceCtx.shadowBlur=5;
      var ss=1.5+Math.sin(danceTime*5+s);danceCtx.fillRect(sx2,sy2,ss,ss);
      danceCtx.restore();
    }

    // Update speech bubble position — above brown bunny
    updateDanceBubblePos(bx, groundY);
    danceRAF=requestAnimationFrame(danceTick);
  }
  danceRAF=requestAnimationFrame(danceTick);
}

function updateDanceBubblePos(bx, groundY){
  var wrap=document.getElementById('dance-stage-wrap');
  var el=document.getElementById('dance-bubble');
  if(!el||!wrap||!danceCanvas)return;
  // Canvas display width may differ from canvas.width due to CSS scaling
  var scaleX=wrap.offsetWidth/danceCanvas.width;
  var scaledBx=bx*scaleX;
  var bubW=el.offsetWidth||90;
  // Position bubble: centered on brown bunny x, above canvas top (negative bottom from stage bottom)
  el.style.left=Math.max(4,scaledBx-bubW/2)+'px';
  el.style.bottom=(danceCanvas.height*scaleX-8)+'px'; // just above canvas top edge inside wrap
  // Actually position from top of wrap
  el.style.bottom='';
  el.style.top='-38px';
}

function showDanceBubble(msg){
  var el=document.getElementById('dance-bubble'),txt=document.getElementById('dance-bubble-text');
  if(!el||!txt)return;
  el.classList.remove('show');
  setTimeout(function(){txt.textContent=msg;el.classList.add('show');},200);
}

// ===== MUSIC CARD FLIP + PLAYER =====
var cardFlipped=false,bkAudio=null,bkPlaying=false,bkProgressInterval=null,BK_START=156;

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
  setTimeout(function(){danceInit();},550);
  setTimeout(function(){if(msg){msg.classList.add('show');setTimeout(function(){msg.scrollIntoView({behavior:'smooth',block:'nearest'});},120);}},1050);
}
function bkTogglePlay(e){e.stopPropagation();if(!bkAudio)bkAudio=document.getElementById('bk-audio');if(!bkAudio)return;if(bkPlaying)bkPause();else bkPlay();}
function bkPlay(){if(!bkAudio)return;if(!bkPlaying&&bkAudio.currentTime<BK_START-.5)bkAudio.currentTime=BK_START;bkAudio.play().catch(function(e){console.warn(e);});bkPlaying=true;var btn=document.getElementById('bk-play-btn');if(btn)btn.classList.add('is-playing');bkProgressInterval=setInterval(bkUpdateTime,250);}
function bkPause(){if(!bkAudio)return;bkAudio.pause();bkPlaying=false;var btn=document.getElementById('bk-play-btn');if(btn)btn.classList.remove('is-playing');clearInterval(bkProgressInterval);}
function bkUpdateTime(){if(!bkAudio)return;var cur=bkAudio.currentTime||BK_START,dur=bkAudio.duration||0,pct=dur>0?(cur/dur*100):(BK_START/240*100);var bar=document.getElementById('bk-progress-bar'),thumb=document.getElementById('bk-progress-thumb'),curEl=document.getElementById('bk-current-time'),totEl=document.getElementById('bk-total-time');if(bar)bar.style.width=pct+'%';if(thumb)thumb.style.left=pct+'%';if(curEl)curEl.textContent=bkFmt(cur);if(totEl&&dur>0)totEl.textContent=bkFmt(dur);}
function bkFmt(s){var m=Math.floor(s/60),sec=Math.floor(s%60);return m+':'+(sec<10?'0':'')+sec;}
function bkSeek(e){if(!bkAudio||!bkAudio.duration)return;var wrap=document.getElementById('bk-progress-wrap');if(!wrap)return;var rect=wrap.getBoundingClientRect(),pct=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width));bkAudio.currentTime=pct*bkAudio.duration;bkUpdateTime();}

// Page 3 init
var _p3orig=typeof goToPage==='function'?goToPage:null;
goToPage=function(num){if(_p3orig)_p3orig(num);if(num===3){setTimeout(function(){drawPixelBunny();fgInit();},60);}};