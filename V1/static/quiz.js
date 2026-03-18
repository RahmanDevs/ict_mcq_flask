// ans = index of correct option (0=ক, 1=খ, 2=গ, 3=ঘ)
// opts = plain text — esc() used when rendering into innerHTML

const questions = [
  { q: "IPv6 অ্যাড্রেস মোট কত বিটের হয়ে থাকে?", opts: ["৩২","৬৪","১২৮","২৫৬"], ans: 2 },
  { q: "ইন্টারনেটে ডোমেইন নেম নিয়ন্ত্রণ করে কোন সংস্থাটি?", opts: ["IANA","ICANN","IEEE","ISO"], ans: 1 },
  { q: "IP অ্যাড্রেসের ডটেড ডেসিমাল ফরম্যাটে প্রতিটি অংশকে কী বলা হয়?", opts: ["বিট","বাইট","অকটেট","নিবল"], ans: 2 },
  { q: "নিচের কোনটি ডাইনামিক ওয়েবসাইটের বৈশিষ্ট্য?", opts: ["ব্যবহারকারীর ইনপুট নেওয়ার ব্যবস্থা থাকে","শুধুমাত্র HTML ও CSS দিয়ে তৈরি","ডেটাবেজ সংযোগ থাকে না","কন্টেন্ট রান টাইমে পরিবর্তিত হয় না"], ans: 0 },
  { q: "বর্তমানে সবচেয়ে জনপ্রিয় ও যুক্তিযুক্ত ওয়েবসাইটের কাঠামো কোনটি?", opts: ["লিনিয়ার","নেটওয়ার্ক","ট্রি বা হায়ারার্কিক্যাল","হাইব্রিড"], ans: 2 },
  { q: '<p align="center"> এখানে "align" কী হিসেবে ব্যবহৃত হয়েছে?', opts: ["ট্যাগ","এলিমেন্ট","অ্যাট্রিবিউট","ভ্যালু"], ans: 2 },
  { q: "নিচের কোনটি একটি 'ফাঁকা' বা 'Empty' ট্যাগ?", opts: ["<html>","<br>","<p>","<table>"], ans: 1 },
  { q: "HTML এ বিশেষ ক্যারেক্টার '&' প্রদর্শনের জন্য কোন কোডটি ব্যবহৃত হয়?", opts: ["&copy;","&lt;","&amp;","&gt;"], ans: 2 },
  { q: "ওয়েবসাইটের কন্টেন্ট এরিয়া বা মূল অংশ নির্ধারণের জন্য কোন ট্যাগ ব্যবহৃত হয়?", opts: ["<head>","<title>","<body>","<meta>"], ans: 2 },
  { q: 'target="_blank" অ্যাট্রিবিউটটি হাইপারলিংকে কেন ব্যবহার করা হয়?', opts: ["নতুন ট্যাবে পেজ খোলার জন্য","একই পেজে যাওয়ার জন্য","ছবি যুক্ত করার জন্য","মেইল পাঠানোর জন্য"], ans: 0 },
  { q: "টেবিলে ডাটা সেলগুলোকে আনুভূমিকভাবে যুক্ত করার জন্য কোন অ্যাট্রিবিউট ব্যবহৃত হয়?", opts: ["Rowspan","Colspan","Cellspacing","Cellpadding"], ans: 1 },
  { q: "ছবির পরিবর্তে কোনো টেক্সট প্রদর্শনের জন্য <img> ট্যাগে কোন অ্যাট্রিবিউট ব্যবহার করা হয়?", opts: ["src","title","alt","align"], ans: 2 },
  { q: "নিচের কোন রঙের হেক্সাডেসিমাল কোড হলো #0000FF?", opts: ["লাল","সবুজ","নীল","হলুদ"], ans: 2 },
  { q: "একই স্টাইল একাধিক এলিমেন্টে ব্যবহারের জন্য কোন CSS সিলেক্টরটি সুবিধাজনক?", opts: ["Inline CSS","Internal CSS","External CSS","সবগুলো"], ans: 2 },
  { q: "অর্ডর্ড লিস্টকে (Ordered List) 'E' থেকে শুরু করতে চাইলে সঠিক কোড কোনটি?", opts: ['<ol type="A" start="5">','<ol type="1" start="E">','<ol start="5">','<ol type="E">'], ans: 0 },
  { q: 'cellspacing="10" বলতে কী বোঝায়?', opts: ["বর্ডার ও কন্টেন্টের দূরত্ব","দুটি সেলের মধ্যবর্তী দূরত্ব","সেলের উচ্চতা","সেলের প্রস্থ"], ans: 1 },
  { q: "ওয়েবসাইটের প্রতিটি পেজে সাধারণ অংশগুলো ম্যানেজ করার জন্য কোন ট্যাগটি বর্তমানে বেশি ব্যবহৃত হয়?", opts: ["<table>","<div>","<frameset>","<span>"], ans: 1 },
  { q: "SEO এর পূর্ণরূপ কী?", opts: ["Search Engine Optimization","Social Engine Order","System Engine Operation","Search Entity Option"], ans: 0 },
  { q: "১ মেগাবাইট সাইজের ফাইল ১০০ জন ব্যবহারকারী ডাউনলোড করলে মোট ব্যান্ডউইথ খরচ কত?", opts: ["১ মেগাবাইট","১০ মেগাবাইট","১০০ মেগাবাইট","২০০ মেগাবাইট"], ans: 2 },
  { q: "ইন্টারনেটে ব্রাউজারে ওয়েবসাইট প্রদর্শনের জন্য সার্ভারে রাখা পদ্ধতিকে কী বলে?", opts: ["আপলোডিং","ডাউনলোডিং","ওয়েব হোস্টিং","ওয়েব পাবলিশিং"], ans: 2 },
  { q: "ডোমেইন নামের শেষ অংশকে (যেমন- .com, .edu) কী বলা হয়?", opts: ["রুট ডোমেইন","টপ লেভেল ডোমেইন","সাব ডোমেইন","কান্ট্রি ডোমেইন"], ans: 1 },
  { q: "<a> ট্যাগের সাথে মেইল পাঠানোর জন্য কোন সিনট্যাক্সটি সঠিক?", opts: ['<a href="mail:abc@gmail.com">','<a href="mailto:abc@gmail.com">','<a link="abc@gmail.com">','<a src="abc@gmail.com">'], ans: 1 },
  { q: "একটি ড্রপ-ডাউন বক্স বা লিস্ট তৈরি করার জন্য কোন ট্যাগটি ব্যবহৃত হয়?", opts: ["<input>","<option>","<select>","<list>"], ans: 2 },
  { q: "ডেফিনেশন লিস্ট তৈরির জন্য জোড়া ট্যাগ কোনটি?", opts: ["<ul> ও <li>","<dl> ও <dt>","<ol> ও <li>","<div> ও <span>"], ans: 1 },
  { q: "ডোমেইন নেম ও IP অ্যাড্রেস এর মধ্যে সম্পর্ক স্থাপন করে কোনটি?", opts: ["HTTP","FTP","DNS","TCP"], ans: 2 },
  { q: "টেক্সটকে সুপারস্ক্রিপ্ট করার জন্য সঠিক ট্যাগ কোনটি?", opts: ["<sub>","<super>","<sup>","<top>"], ans: 2 },
  { q: "নিচের কোন ফাইল ফরম্যাটটি স্বচ্ছ ব্যাকগ্রাউন্ড বা অ্যানিমেশন সমর্থন করে?", opts: [".jpg",".bmp",".gif",".png"], ans: 2 },
  { q: '<input type="radio"> কেন ব্যবহার করা হয়?', opts: ["অনেকগুলো অপশন সিলেক্ট করতে","নির্দিষ্ট একটি অপশন সিলেক্ট করতে","পাসওয়ার্ড লিখতে","টেক্সট ইনপুট দিতে"], ans: 1 },
  { q: "বাংলা ফন্ট প্রদর্শনের জন্য HTML ফাইলে কোন ক্যারেক্টার সেট ব্যবহার করা উচিত?", opts: ["ASCII","UTF-8","ANSI","ISO-8859"], ans: 1 },
  { q: 'মারকুই ট্যাগের মাধ্যমে লেখাকে ডান থেকে বামে সরাতে কোন অ্যাট্রিবিউট ব্যবহার করা হয়?', opts: ['direction="left"','direction="right"','behavior="scroll"','scrollamount="5"'], ans: 0 },
  { q: "টেবিলের হেডার সেল তৈরিতে কোন ট্যাগ ব্যবহৃত হয়?", opts: ["<td>","<tr>","<th>","<thead>"], ans: 2 },
  { q: "bgcolor এবং background অ্যাট্রিবিউটের মধ্যে পার্থক্য কী?", opts: ["ব্যাকগ্রাউন্ডে রঙ ও ছবি সেট করা","দুটিই রঙের জন্য ব্যবহৃত হয়","দুটিই ছবির জন্য ব্যবহৃত হয়","কোনো পার্থক্য নেই"], ans: 0 },
  { q: "একটি ছোট সাইজের ইমেজকে বড় ইমেজের লিংক হিসেবে ব্যবহার করলে তাকে কী বলে?", opts: ["আইকন","থাম্বনেইল","ব্যানার","লোগো"], ans: 1 },
  { q: "CSS এ হেক্স কালার কোডে কতটি ডিজিট থাকে?", opts: ["৪টি","৫টি","৬টি","৮টি"], ans: 2 },
  { q: "ডোমেইন নাম রেজিস্ট্রেশনের সময় কোনটি সবচেয়ে বেশি খেয়াল রাখা উচিত?", opts: ["নাম ছোট ও অর্থবোধক হওয়া","নামের মাঝে স্পেস দেওয়া","অনেক লম্বা নাম রাখা","শুধুমাত্র সংখ্যা ব্যবহার করা"], ans: 0 },
  { q: "নিচের কোনটি একটি ওয়েব পোর্টাল এর উদাহরণ?", opts: ["www.google.com","www.bangladesh.gov.bd","www.facebook.com","www.youtube.com"], ans: 1 },
  { q: "রান টাইমে কন্টেন্ট পরিবর্তিত হয় না এমন সাইটকে কী বলে?", opts: ["ডাইনামিক","হাইব্রিড","স্ট্যাটিক","পোর্টাল"], ans: 2 },
  { q: "HTML ডকুমেন্টে কোনো নির্দিষ্ট টেক্সট বা সেকশনকে সিলেকশন বা বিভাজন করতে ব্যবহৃত হয়?", opts: ["<abbr>","<blockquote>","<span>","<address>"], ans: 2 },
  { q: "ডোমেইন নেম ও ওয়েব হোস্টিং এর মধ্যে প্রধান পার্থক্য কী?", opts: ["একটি নাম, অন্যটি জায়গা","একটি ফ্রি, অন্যটি পেইড","একটি সফটওয়্যার, অন্যটি হার্ডওয়্যার","কোনো পার্থক্য নেই"], ans: 0 },
  { q: "ওয়েবসাইট পাবলিশিং এর সর্বশেষ ধাপ কোনটি?", opts: ["ডোমেইন রেজিস্ট্রেশন","হোস্টিং","সার্চ ইঞ্জিন সাবমিশন","কন্টেন্ট আপডেট"], ans: 2 },
];

const LABELS = ['ক','খ','গ','ঘ'];
const TOTAL = questions.length;
const TOTAL_TIME = 40 * 60;

let current = 0;
let userAnswers = new Array(TOTAL).fill(null);
let answered   = new Array(TOTAL).fill(false);
let timerInterval = null;
let timeLeft = TOTAL_TIME;
let studentName = '';
let quizStartTime = null;

// ── helpers ──────────────────────────────────────────────
function esc(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function toBN(n) {
  return String(n).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[d]);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── start ─────────────────────────────────────────────────
function startQuiz() {
  const inp = document.getElementById('studentName');
  const err = document.getElementById('nameError');
  const name = inp.value.trim();
  if (!name) {
    inp.classList.add('error');
    err.classList.add('show');
    inp.focus();
    return;
  }
  inp.classList.remove('error');
  err.classList.remove('show');
  studentName = name;
  quizStartTime = Date.now();
  showScreen('quizScreen');
  buildDots();
  renderQuestion(0);
  startTimer();
}

// ── timer ─────────────────────────────────────────────────
function startTimer() {
  const tv = document.getElementById('timerVal');
  const tc = document.getElementById('timerCard');
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('overlay').style.display = 'flex';
      return;
    }
    const m = Math.floor(timeLeft / 60), s = timeLeft % 60;
    tv.textContent = toBN(m) + ':' + (s < 10 ? '০' : '') + toBN(s);
    if (timeLeft <= 300) tc.style.background = 'linear-gradient(135deg,#ff6b6b,#ee5a24)';
    if (timeLeft <= 60)  tc.classList.add('timer-warning');
    timeLeft--;
  }, 1000);
}

// ── dots ──────────────────────────────────────────────────
function buildDots() {
  const wrap = document.getElementById('qDots');
  wrap.innerHTML = '';
  questions.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'q-dot' + (i === 0 ? ' current' : '');
    d.textContent = toBN(i + 1);
    d.title = 'প্রশ্ন ' + (i + 1);
    d.onclick = () => renderQuestion(i);
    wrap.appendChild(d);
  });
  initSwipe();
}

function updateDots() {
  const dots = document.querySelectorAll('.q-dot');
  dots.forEach((d, i) => {
    d.className = 'q-dot';
    if (i === current) d.classList.add('current');
    if (answered[i])  d.classList.add(userAnswers[i] === questions[i].ans ? 'answered-correct' : 'answered-wrong');
  });
  const active = dots[current];
  if (active) active.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
}

// ── swipe ─────────────────────────────────────────────────
function initSwipe() {
  const el = document.getElementById('swipeWrap');
  let startX = 0, startY = 0;
  el.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  el.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0) navigate(1);
    else        navigate(-1);
  }, { passive: true });
}

// ── render ────────────────────────────────────────────────
function renderQuestion(idx) {
  current = idx;
  const q = questions[idx];
  const wrap = document.getElementById('questionWrap');

  let html = '';
  q.opts.forEach((opt, i) => {
    const isSel  = userAnswers[idx] === i;
    const isCorr = i === q.ans;
    let cls = 'option';
    if (answered[idx]) {
      if (isCorr)      cls += ' correct';
      else if (isSel)  cls += ' wrong';
    } else if (isSel) {
      cls += ' selected';
    }
    const click = answered[idx] ? '' : 'onclick="selectOption(' + idx + ',' + i + ',this)"';
    html += '<label class="' + cls + '" ' + click + '>'
          + '<input type="radio" name="q' + idx + '" ' + (isSel ? 'checked' : '') + ' ' + (answered[idx] ? 'disabled' : '') + '>'
          + '<span class="option-label">' + LABELS[i] + '</span>'
          + '<span class="option-text">' + esc(opt) + '</span>'
          + '<i class="fas fa-check option-icon correct-icon"></i>'
          + '<i class="fas fa-times option-icon wrong-icon"></i>'
          + '</label>';
  });

  wrap.innerHTML = '<div class="question-wrap">'
    + '<div class="question-box"><div class="question-title">'
    + '<span class="question-number">' + toBN(idx + 1) + '</span>'
    + '<span>' + esc(q.q) + '</span></div></div>'
    + '<div class="options">' + html + '</div></div>';

  document.getElementById('qCounter').textContent = toBN(idx + 1) + ' / ' + toBN(TOTAL);
  document.getElementById('progressFill').style.width = (answered.filter(Boolean).length / TOTAL * 100) + '%';

  const isMobile = window.innerWidth <= 600;
  const isLast   = idx === TOTAL - 1;
  document.getElementById('prevBtn').style.display   = isMobile ? 'none' : 'flex';
  document.getElementById('nextBtn').style.display   = (isMobile || isLast) ? 'none' : 'flex';
  document.getElementById('submitBtn').style.display = isLast ? 'flex' : 'none';
  document.getElementById('prevBtn').disabled        = idx === 0;
  document.getElementById('navButtons').style.display = (isMobile && !isLast) ? 'none' : 'flex';

  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateDots();
  updateLiveScore();
}

// ── select ────────────────────────────────────────────────
function selectOption(idx, optIndex, labelEl) {
  if (answered[idx]) return;
  userAnswers[idx] = optIndex;
  labelEl.closest('.options').querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  labelEl.classList.add('selected');
  setTimeout(() => confirmAnswer(idx), 400);
}

function confirmAnswer(idx) {
  if (answered[idx]) return;
  answered[idx] = true;
  renderQuestion(idx);

  const q  = questions[idx];
  const ok = userAnswers[idx] === q.ans;
  const toast     = document.getElementById('toast');
  const toastIcon = document.getElementById('toastIcon');
  document.getElementById('toastTitle').textContent = ok ? 'সঠিক উত্তর! ✅' : 'ভুল উত্তর ❌';
  document.getElementById('toastSub').textContent   = ok ? 'চমৎকার! এগিয়ে যাও।' : 'সঠিক: ' + q.opts[q.ans];
  toastIcon.className = ok ? 'fas fa-check' : 'fas fa-times';
  toast.className = 'show ' + (ok ? 'correct' : 'wrong');

  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.className = ok ? 'correct' : 'wrong';
    if (idx < TOTAL - 1) setTimeout(() => { if (current === idx) navigate(1); }, 200);
  }, 1800);
}

// ── navigate ──────────────────────────────────────────────
function navigate(delta) {
  const n = current + delta;
  if (n >= 0 && n < TOTAL) renderQuestion(n);
}

// ── score ─────────────────────────────────────────────────
function calcScore() {
  return userAnswers.reduce((a, ans, i) => a + (ans === questions[i].ans ? 1 : 0), 0);
}

function updateLiveScore() {
  document.getElementById('liveScore').textContent = toBN(calcScore());
}

// ── submit ────────────────────────────────────────────────
function submitQuiz()  { clearInterval(timerInterval); finishQuiz(); }
function finishQuiz()  { document.getElementById('overlay').style.display = 'none'; clearInterval(timerInterval); showResults(); }

// ── results ───────────────────────────────────────────────
function showResults() {
  const score   = calcScore();
  const wrong   = answered.filter((a, i) => a && userAnswers[i] !== questions[i].ans).length;
  const skipped = TOTAL - answered.filter(Boolean).length;
  const pct     = (score / TOTAL) * 100;

  document.getElementById('scoreNum').textContent      = toBN(score);
  document.getElementById('correctCount').textContent  = toBN(score);
  document.getElementById('wrongCount').textContent    = toBN(wrong);
  document.getElementById('skipCount').textContent     = toBN(skipped);
  document.getElementById('resultName').textContent    = '👤 ' + studentName;

  let emoji, title, subtitle, grade, gc;
  if      (pct >= 90) { emoji='🏆'; title='অসাধারণ!';        subtitle='তুমি দুর্দান্ত ফল করেছ!';                grade='A+'; gc='grade-A'; }
  else if (pct >= 80) { emoji='🎉'; title='চমৎকার!';          subtitle='খুব ভালো করেছ!';                        grade='A';  gc='grade-A'; }
  else if (pct >= 70) { emoji='😊'; title='ভালো!';            subtitle='আরেকটু চেষ্টা করলে আরও ভালো হবে।';     grade='B+'; gc='grade-B'; }
  else if (pct >= 60) { emoji='👍'; title='মোটামুটি ভালো!';   subtitle='আরও অনুশীলন করো।';                     grade='B';  gc='grade-B'; }
  else if (pct >= 50) { emoji='📚'; title='চেষ্টা করো!';      subtitle='আরও পড়াশোনা দরকার।';                   grade='C';  gc='grade-C'; }
  else                { emoji='💪'; title='হাল ছাড়বে না!';    subtitle='আবার চেষ্টা করো।';                     grade='D';  gc='grade-D'; }

  document.getElementById('resultEmoji').textContent    = emoji;
  document.getElementById('resultTitle').textContent    = title;
  document.getElementById('resultSubtitle').textContent = subtitle;
  document.getElementById('gradeBadge').innerHTML       = '<i class="fas fa-medal"></i> গ্রেড: ' + grade;
  document.getElementById('gradeBadge').className       = 'grade-badge ' + gc;

  const elapsed  = quizStartTime ? Math.floor((Date.now() - quizStartTime) / 1000) : 0;
  const timeTaken = Math.floor(elapsed / 60) + 'm ' + (elapsed % 60) + 's';

  const statusEl = document.getElementById('saveStatus');
  statusEl.innerHTML = '<span style="color:#a0aec0"><i class="fas fa-spinner fa-spin"></i> স্কোর সেভ হচ্ছে...</span>';

  fetch('/api/save-score', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: studentName, score, total: TOTAL, correct: score, wrong, skipped, grade, time_taken: timeTaken })
  })
  .then(r => r.json())
  .then(d => {
    statusEl.innerHTML = d.success
      ? '<span style="color:#38a169"><i class="fas fa-check-circle"></i> স্কোর সফলভাবে সেভ হয়েছে!</span>'
      : '<span style="color:#e53e3e"><i class="fas fa-exclamation-circle"></i> সেভ করতে সমস্যা হয়েছে।</span>';
  })
  .catch(() => {
    statusEl.innerHTML = '<span style="color:#e53e3e"><i class="fas fa-exclamation-circle"></i> সার্ভার সংযোগ ব্যর্থ।</span>';
  });

  buildReview();
  showScreen('resultScreen');
}

// ── review ────────────────────────────────────────────────
function buildReview() {
  const list = document.getElementById('reviewList');
  list.innerHTML = '';
  questions.forEach((q, i) => {
    const ua  = userAnswers[i];
    const ok  = ua === q.ans;
    const userText = ua !== null ? esc(q.opts[ua]) : 'উত্তর দাও নাই';
    const div = document.createElement('div');
    div.className = 'review-item ' + (ok ? 'correct' : 'wrong');
    div.innerHTML =
      '<div class="review-q">'
      + '<span class="question-number" style="background:' + (ok ? '#48bb78' : '#fc8181') + ';min-width:28px;height:28px;font-size:12px;">' + toBN(i + 1) + '</span>'
      + '<span>' + esc(q.q) + '</span></div>'
      + '<div class="review-ans">'
      + '<span class="review-correct">✅ সঠিক উত্তর: ' + esc(q.opts[q.ans]) + '</span>'
      + (!ok ? '<span class="review-user">❌ তোমার উত্তর: ' + userText + '</span>' : '')
      + '</div>';
    list.appendChild(div);
  });
}

function toggleReview() {
  const l = document.getElementById('reviewList');
  const c = document.getElementById('reviewChevron');
  l.classList.toggle('open');
  c.style.transform = l.classList.contains('open') ? 'rotate(180deg)' : '';
}

// ── restart ───────────────────────────────────────────────
function restartQuiz() {
  current      = 0;
  userAnswers  = new Array(TOTAL).fill(null);
  answered     = new Array(TOTAL).fill(false);
  timeLeft     = TOTAL_TIME;
  studentName  = '';
  quizStartTime = null;
  clearInterval(timerInterval);
  const tc = document.getElementById('timerCard');
  tc.style.background = '';
  tc.classList.remove('timer-warning');
  document.getElementById('timerVal').textContent    = '40:00';
  document.getElementById('studentName').value       = '';
  document.getElementById('saveStatus').innerHTML    = '';
  showScreen('introScreen');
}