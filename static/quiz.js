// ans = index of correct option (0=ক, 1=খ, 2=গ, 3=ঘ)
// opts = plain text — esc() used when rendering into innerHTML

// const questions = [
//   { q: "IPv6 অ্যাড্রেস মোট কত বিটের হয়ে থাকে?", opts: ["৩২","৬৪","১২৮","২৫৬"], ans: 2 },
//   { q: "ইন্টারনেটে ডোমেইন নেম নিয়ন্ত্রণ করে কোন সংস্থাটি?", opts: ["IANA","ICANN","IEEE","ISO"], ans: 1 },
//   { q: "IP অ্যাড্রেসের ডটেড ডেসিমাল ফরম্যাটে প্রতিটি অংশকে কী বলা হয়?", opts: ["বিট","বাইট","অকটেট","নিবল"], ans: 2 },
//   { q: "নিচের কোনটি ডাইনামিক ওয়েবসাইটের বৈশিষ্ট্য?", opts: ["ব্যবহারকারীর ইনপুট নেওয়ার ব্যবস্থা থাকে","শুধুমাত্র HTML ও CSS দিয়ে তৈরি","ডেটাবেজ সংযোগ থাকে না","কন্টেন্ট রান টাইমে পরিবর্তিত হয় না"], ans: 0 },
//   { q: "বর্তমানে সবচেয়ে জনপ্রিয় ও যুক্তিযুক্ত ওয়েবসাইটের কাঠামো কোনটি?", opts: ["লিনিয়ার","নেটওয়ার্ক","ট্রি বা হায়ারার্কিক্যাল","হাইব্রিড"], ans: 2 },
//   { q: '<p align="center"> এখানে "align" কী হিসেবে ব্যবহৃত হয়েছে?', opts: ["ট্যাগ","এলিমেন্ট","অ্যাট্রিবিউট","ভ্যালু"], ans: 2 },
//   { q: "নিচের কোনটি একটি 'ফাঁকা' বা 'Empty' ট্যাগ?", opts: ["<html>","<br>","<p>","<table>"], ans: 1 },
//   { q: "HTML এ বিশেষ ক্যারেক্টার '&' প্রদর্শনের জন্য কোন কোডটি ব্যবহৃত হয়?", opts: ["&copy;","&lt;","&amp;","&gt;"], ans: 2 },
//   { q: "ওয়েবসাইটের কন্টেন্ট এরিয়া বা মূল অংশ নির্ধারণের জন্য কোন ট্যাগ ব্যবহৃত হয়?", opts: ["<head>","<title>","<body>","<meta>"], ans: 2 },
//   { q: 'target="_blank" অ্যাট্রিবিউটটি হাইপারলিংকে কেন ব্যবহার করা হয়?', opts: ["নতুন ট্যাবে পেজ খোলার জন্য","একই পেজে যাওয়ার জন্য","ছবি যুক্ত করার জন্য","মেইল পাঠানোর জন্য"], ans: 0 },
//   { q: "টেবিলে ডাটা সেলগুলোকে আনুভূমিকভাবে যুক্ত করার জন্য কোন অ্যাট্রিবিউট ব্যবহৃত হয়?", opts: ["Rowspan","Colspan","Cellspacing","Cellpadding"], ans: 1 },
//   { q: "ছবির পরিবর্তে কোনো টেক্সট প্রদর্শনের জন্য <img> ট্যাগে কোন অ্যাট্রিবিউট ব্যবহার করা হয়?", opts: ["src","title","alt","align"], ans: 2 },
//   { q: "নিচের কোন রঙের হেক্সাডেসিমাল কোড হলো #0000FF?", opts: ["লাল","সবুজ","নীল","হলুদ"], ans: 2 },
//   { q: "একই স্টাইল একাধিক এলিমেন্টে ব্যবহারের জন্য কোন CSS সিলেক্টরটি সুবিধাজনক?", opts: ["Inline CSS","Internal CSS","External CSS","সবগুলো"], ans: 2 },
//   { q: "অর্ডর্ড লিস্টকে (Ordered List) 'E' থেকে শুরু করতে চাইলে সঠিক কোড কোনটি?", opts: ['<ol type="A" start="5">','<ol type="1" start="E">','<ol start="5">','<ol type="E">'], ans: 0 },
//   { q: 'cellspacing="10" বলতে কী বোঝায়?', opts: ["বর্ডার ও কন্টেন্টের দূরত্ব","দুটি সেলের মধ্যবর্তী দূরত্ব","সেলের উচ্চতা","সেলের প্রস্থ"], ans: 1 },
//   { q: "ওয়েবসাইটের প্রতিটি পেজে সাধারণ অংশগুলো ম্যানেজ করার জন্য কোন ট্যাগটি বর্তমানে বেশি ব্যবহৃত হয়?", opts: ["<table>","<div>","<frameset>","<span>"], ans: 1 },
//   { q: "SEO এর পূর্ণরূপ কী?", opts: ["Search Engine Optimization","Social Engine Order","System Engine Operation","Search Entity Option"], ans: 0 },
//   { q: "১ মেগাবাইট সাইজের ফাইল ১০০ জন ব্যবহারকারী ডাউনলোড করলে মোট ব্যান্ডউইথ খরচ কত?", opts: ["১ মেগাবাইট","১০ মেগাবাইট","১০০ মেগাবাইট","২০০ মেগাবাইট"], ans: 2 },
//   { q: "ইন্টারনেটে ব্রাউজারে ওয়েবসাইট প্রদর্শনের জন্য সার্ভারে রাখা পদ্ধতিকে কী বলে?", opts: ["আপলোডিং","ডাউনলোডিং","ওয়েব হোস্টিং","ওয়েব পাবলিশিং"], ans: 2 },
//   { q: "ডোমেইন নামের শেষ অংশকে (যেমন- .com, .edu) কী বলা হয়?", opts: ["রুট ডোমেইন","টপ লেভেল ডোমেইন","সাব ডোমেইন","কান্ট্রি ডোমেইন"], ans: 1 },
//   { q: "<a> ট্যাগের সাথে মেইল পাঠানোর জন্য কোন সিনট্যাক্সটি সঠিক?", opts: ['<a href="mail:abc@gmail.com">','<a href="mailto:abc@gmail.com">','<a link="abc@gmail.com">','<a src="abc@gmail.com">'], ans: 1 },
//   { q: "একটি ড্রপ-ডাউন বক্স বা লিস্ট তৈরি করার জন্য কোন ট্যাগটি ব্যবহৃত হয়?", opts: ["<input>","<option>","<select>","<list>"], ans: 2 },
//   { q: "ডেফিনেশন লিস্ট তৈরির জন্য জোড়া ট্যাগ কোনটি?", opts: ["<ul> ও <li>","<dl> ও <dt>","<ol> ও <li>","<div> ও <span>"], ans: 1 },
//   { q: "ডোমেইন নেম ও IP অ্যাড্রেস এর মধ্যে সম্পর্ক স্থাপন করে কোনটি?", opts: ["HTTP","FTP","DNS","TCP"], ans: 2 },
//   { q: "টেক্সটকে সুপারস্ক্রিপ্ট করার জন্য সঠিক ট্যাগ কোনটি?", opts: ["<sub>","<super>","<sup>","<top>"], ans: 2 },
//   { q: "নিচের কোন ফাইল ফরম্যাটটি স্বচ্ছ ব্যাকগ্রাউন্ড বা অ্যানিমেশন সমর্থন করে?", opts: [".jpg",".bmp",".gif",".png"], ans: 2 },
//   { q: '<input type="radio"> কেন ব্যবহার করা হয়?', opts: ["অনেকগুলো অপশন সিলেক্ট করতে","নির্দিষ্ট একটি অপশন সিলেক্ট করতে","পাসওয়ার্ড লিখতে","টেক্সট ইনপুট দিতে"], ans: 1 },
//   { q: "বাংলা ফন্ট প্রদর্শনের জন্য HTML ফাইলে কোন ক্যারেক্টার সেট ব্যবহার করা উচিত?", opts: ["ASCII","UTF-8","ANSI","ISO-8859"], ans: 1 },
//   { q: 'মারকুই ট্যাগের মাধ্যমে লেখাকে ডান থেকে বামে সরাতে কোন অ্যাট্রিবিউট ব্যবহার করা হয়?', opts: ['direction="left"','direction="right"','behavior="scroll"','scrollamount="5"'], ans: 0 },
//   { q: "টেবিলের হেডার সেল তৈরিতে কোন ট্যাগ ব্যবহৃত হয়?", opts: ["<td>","<tr>","<th>","<thead>"], ans: 2 },
//   { q: "bgcolor এবং background অ্যাট্রিবিউটের মধ্যে পার্থক্য কী?", opts: ["ব্যাকগ্রাউন্ডে রঙ ও ছবি সেট করা","দুটিই রঙের জন্য ব্যবহৃত হয়","দুটিই ছবির জন্য ব্যবহৃত হয়","কোনো পার্থক্য নেই"], ans: 0 },
//   { q: "একটি ছোট সাইজের ইমেজকে বড় ইমেজের লিংক হিসেবে ব্যবহার করলে তাকে কী বলে?", opts: ["আইকন","থাম্বনেইল","ব্যানার","লোগো"], ans: 1 },
//   { q: "CSS এ হেক্স কালার কোডে কতটি ডিজিট থাকে?", opts: ["৪টি","৫টি","৬টি","৮টি"], ans: 2 },
//   { q: "ডোমেইন নাম রেজিস্ট্রেশনের সময় কোনটি সবচেয়ে বেশি খেয়াল রাখা উচিত?", opts: ["নাম ছোট ও অর্থবোধক হওয়া","নামের মাঝে স্পেস দেওয়া","অনেক লম্বা নাম রাখা","শুধুমাত্র সংখ্যা ব্যবহার করা"], ans: 0 },
//   { q: "নিচের কোনটি একটি ওয়েব পোর্টাল এর উদাহরণ?", opts: ["www.google.com","www.bangladesh.gov.bd","www.facebook.com","www.youtube.com"], ans: 1 },
//   { q: "রান টাইমে কন্টেন্ট পরিবর্তিত হয় না এমন সাইটকে কী বলে?", opts: ["ডাইনামিক","হাইব্রিড","স্ট্যাটিক","পোর্টাল"], ans: 2 },
//   { q: "HTML ডকুমেন্টে কোনো নির্দিষ্ট টেক্সট বা সেকশনকে সিলেকশন বা বিভাজন করতে ব্যবহৃত হয়?", opts: ["<abbr>","<blockquote>","<span>","<address>"], ans: 2 },
//   { q: "ডোমেইন নেম ও ওয়েব হোস্টিং এর মধ্যে প্রধান পার্থক্য কী?", opts: ["একটি নাম, অন্যটি জায়গা","একটি ফ্রি, অন্যটি পেইড","একটি সফটওয়্যার, অন্যটি হার্ডওয়্যার","কোনো পার্থক্য নেই"], ans: 0 },
//   { q: "ওয়েবসাইট পাবলিশিং এর সর্বশেষ ধাপ কোনটি?", opts: ["ডোমেইন রেজিস্ট্রেশন","হোস্টিং","সার্চ ইঞ্জিন সাবমিশন","কন্টেন্ট আপডেট"], ans: 2 },
// ];
// const questions = [
//   {
//     q: "তথ্যের ক্ষুদ্রতম উপাদান কোনটি?",
//     opts: ["ডেটা", "ইনফরমেশন", "রেকর্ড", "ফিল্ড"],
//     ans: 0,
//   },
//   {
//     q: "Datum শব্দের বহুবচন কোনটি?",
//     opts: ["Datas", "Data", "Datums", "Database"],
//     ans: 1,
//   },
//   {
//     q: "ডেটাবেজকে সাধারণ অর্থে কী বলা হয়?",
//     opts: ["তথ্যাগার", "তথ্য সংগ্রাহক", "ডেটা ব্যাংক", "ডেটা টেবিল"],
//     ans: 2,
//   },
//   {
//     q: "নিচের কোনটি ডেটাবেজের ভিত্তি?",
//     opts: ["রেকর্ড", "ডেটা", "ফিল্ড", "টেবিল"],
//     ans: 2,
//   },
//   {
//     q: "পরস্পর সম্পর্কযুক্ত কয়েকটি ফিল্ডের সমষ্টিকে কী বলে?",
//     opts: ["ডেটা", "রেকর্ড", "টেবিল", "এনটিটি"],
//     ans: 1,
//   },
//   {
//     q: "সমজাতীয় অনেকগুলো রেকর্ডের সমাবেশকে কী বলে?",
//     opts: ["ফিল্ড", "ডেটা টেবিল", "কুয়েরি", "এনটিটি"],
//     ans: 1,
//   },
//   {
//     q: "DBMS-এর পূর্ণরূপ কী?",
//     opts: [
//       "Database Manager System",
//       "Data Bank Management System",
//       "Database Management System",
//       "Database Model System",
//     ],
//     ans: 2,
//   },
//   {
//     q: "নিচের কোনটি একটি ডেটাবেজ সফটওয়্যার?",
//     opts: ["ওরাকল", "পাইথন", "জাভা", "সি++"],
//     ans: 0,
//   },
//   {
//     q: "MongoDB কোন ধরণের ডেটাবেজ?",
//     opts: ["RDBMS", "NoSQL", "Static", "General"],
//     ans: 1,
//   },
//   {
//     q: "ডেটা ডুপ্লিকেশন কমানো কিসের সুবিধা?",
//     opts: ["এমএস ওয়ার্ড", "ডিবিএমএস", "এক্সেল", "পাওয়ারপয়েন্ট"],
//     ans: 1,
//   },
//   {
//     q: "কোন কী (Key) প্রতিটি রেকর্ডকে অদ্বিতীয়ভাবে শনাক্ত করে?",
//     opts: ["ফরেন কী", "প্রাইমারি কী", "কম্পোজিট কী", "সেকেন্ডারি কী"],
//     ans: 1,
//   },
//   {
//     q: "দুই বা ততোধিক ফিল্ডের সমন্বয়ে গঠিত প্রাইমারি কী কোনটি?",
//     opts: [
//       "ফরেন কী",
//       "কম্পোজিট প্রাইমারি কী",
//       "সেকেন্ডারি কী",
//       "ক্যানডিডেট কী",
//     ],
//     ans: 1,
//   },
//   {
//     q: "এক টেবিলের প্রাইমারি কী অন্য টেবিলে ব্যবহৃত হলে তাকে কী বলে?",
//     opts: ["ফরেন কী", "প্রাইমারি কী", "কম্পোজিট কী", "সুপার কী"],
//     ans: 0,
//   },
//   {
//     q: "ডেটাবেজ রিলেশন প্রধানত কত প্রকার?",
//     opts: ["২", "৩", "৪", "৫"],
//     ans: 1,
//   },
//   {
//     q: "One to One রিলেশনে প্রতিটি টেবিলে সাধারণত কয়টি প্রাইমারি কী থাকে?",
//     opts: ["১", "২", "৩", "৪"],
//     ans: 0,
//   },
//   {
//     q: "Many to Many রিলেশন তৈরির জন্য কোন তৃতীয় টেবিল ব্যবহৃত হয়?",
//     opts: ["মাস্টার টেবিল", "চাইল্ড টেবিল", "জাংশন টেবিল", "প্রাইমারি টেবিল"],
//     ans: 2,
//   },
//   {
//     q: "SQL-এর পূর্ণরূপ কী?",
//     opts: [
//       "System Query Language",
//       "Structured Query Language",
//       "Standard Query Language",
//       "Sequential Query Language",
//     ],
//     ans: 1,
//   },
//   {
//     q: "SQL কত সালে প্রথম উদ্ভাবিত হয়?",
//     opts: ["১৯৭০", "১৯৭৪", "১৯৮০", "১৯৯০"],
//     ans: 1,
//   },
//   {
//     q: "DDL-এর পূর্ণরূপ কী?",
//     opts: [
//       "Data Definition Language",
//       "Data Description Language",
//       "Data Design Language",
//       "Data Delete Language",
//     ],
//     ans: 0,
//   },
//   {
//     q: "নিচের কোনটি DDL কমান্ড?",
//     opts: ["SELECT", "INSERT", "CREATE", "UPDATE"],
//     ans: 2,
//   },
//   {
//     q: "নিচের কোনটি DML কমান্ড?",
//     opts: ["ALTER", "DROP", "RENAME", "SELECT"],
//     ans: 3,
//   },
//   {
//     q: "ডেটাকে ঊর্ধ্বক্রম বা নিম্নক্রমে সাজানোর প্রক্রিয়া কোনটি?",
//     opts: ["কুয়েরি", "সর্টিং", "ইনডেক্সিং", "এনক্রিপশন"],
//     ans: 1,
//   },
//   {
//     q: "ইনডেক্সিং এর মূল সুবিধা কী?",
//     opts: [
//       "মেমোরি বাঁচানো",
//       "দ্রুত ডেটা খোঁজা",
//       "ডেটা মোছা",
//       "ডেটা টাইপ পরিবর্তন",
//     ],
//     ans: 1,
//   },
//   {
//     q: "অনাকাঙ্ক্ষিত প্রবেশ থেকে ডেটাকে সুরক্ষিত রাখাকে কী বলে?",
//     opts: ["ডেটা সিকিউরিটি", "ডেটা সর্টিং", "ডেটা ব্যাকআপ", "ডেটা রিকভারি"],
//     ans: 0,
//   },
//   {
//     q: "পঠনযোগ্য ডেটাকে অপঠনযোগ্য করার পদ্ধতি কোনটি?",
//     opts: ["ডিক্রিপশন", "এনক্রিপশন", "কম্পাইল", "ইন্টারপ্রিট"],
//     ans: 1,
//   },
//   {
//     q: "এনক্রিপ্টেড ডেটাকে কী বলা হয়?",
//     opts: ["প্লেইন টেক্সট", "র-ডেটা", "সাইফার টেক্সট", "কোড টেক্সট"],
//     ans: 2,
//   },
//   {
//     q: "সাধারণ বোধগম্য টেক্সটকে কী বলা হয়?",
//     opts: [
//       "সাইফার টেক্সট",
//       "প্লেইন টেক্সট",
//       "এনক্রিপ্টেড টেক্সট",
//       "সিক্রেট কোড",
//     ],
//     ans: 1,
//   },
//   {
//     q: "সিমেট্রিক কী ক্রিপ্টোগ্রাফিতে কয়টি কী ব্যবহৃত হয়?",
//     opts: ["১", "২", "৩", "৪"],
//     ans: 0,
//   },
//   {
//     q: "অ্যাসিমেট্রিক কী ক্রিপ্টোগ্রাফিতে কয়টি কী ব্যবহৃত হয়?",
//     opts: ["১", "২", "৩", "৪"],
//     ans: 1,
//   },
//   {
//     q: "RDBMS-এর পূর্ণরূপ কী?",
//     opts: [
//       "Record Database Management System",
//       "Relational Database Management System",
//       "Regional Database Management System",
//       "Reporting Database Management System",
//     ],
//     ans: 1,
//   },
//   {
//     q: "RDBMS-এর তাত্ত্বিক ধারণা প্রদান করেন কে?",
//     opts: ["বিল গেটস", "ই. এফ. কড", "স্টিভ জবস", "টিম বার্নার্স লি"],
//     ans: 1,
//   },
//   {
//     q: "ই. এফ. কড কত সালে রিলেশনাল ডেটাবেজের নিয়ম প্রস্তাব করেন?",
//     opts: ["১৯৭০", "১৯৮০", "১৯৮৫", "১৯৯০"],
//     ans: 2,
//   },
//   {
//     q: "MS Access-এ ডেটাবেজ ফাইলের এক্সটেনশন কোনটি?",
//     opts: [" .docx", " .xlsx", " .accdb", " .pptx"],
//     ans: 2,
//   },
//   {
//     q: "অক্ষর, সংখ্যা ও চিহ্নযুক্ত বড় বর্ণনার জন্য কোন ফিল্ড ব্যবহৃত হয়?",
//     opts: ["টেক্সট", "মেমো", "নাম্বার", "কারেন্সি"],
//     ans: 1,
//   },
//   {
//     q: "টাকা বা মুদ্রার হিসাবের জন্য ব্যবহৃত ডেটা টাইপ কোনটি?",
//     opts: ["কারেন্সি", "নাম্বার", "মেমো", "লজিক্যাল"],
//     ans: 0,
//   },
//   {
//     q: "তারিখ ও সময়ের জন্য কোন ডেটা টাইপ ব্যবহৃত হয়?",
//     opts: ["ডেট/টাইম", "নাম্বার", "মেমো", "টেক্সট"],
//     ans: 0,
//   },
//   {
//     q: "ছবি বা ভিডিও ডেটাবেজে সংরক্ষণের টাইপ কোনটি?",
//     opts: ["OLE অবজেক্ট", "হাইপারলিঙ্ক", "মেমো", "টেক্সট"],
//     ans: 0,
//   },
//   {
//     q: "হ্যাঁ/না জাতীয় মানের জন্য ব্যবহৃত টাইপ কোনটি?",
//     opts: ["নাম্বার", "লজিক্যাল", "মেমো", "কারেন্সি"],
//     ans: 1,
//   },
//   // {
//   //   q: "এনক্রিপশন ও ডিক্রিপশন বিষয়ক বিজ্ঞান কোনটি?",
//   //   opts: ["ফটোগ্রাফি", "ক্রিপ্টোগ্রাফি", "বায়োগ্রাফি", "গ্রাফোলজি"],
//   //   ans: 1,
//   // },
//   // {
//   //   q: "ডেটাবেজের রেকর্ডের অ্যাড্রেসকে লজিক্যাল অর্ডারে সাজানোকে কী বলে?",
//   //   opts: ["সর্টিং", "ইনডেক্সিং", "এনক্রিপশন", "রিলেশন"],
//   //   ans: 1,
//   // },
//   {
//     q: "নিচের কোনটি DDL কমান্ড নয়?",
//     opts: ["CREATE", "ALTER", "INSERT", "DROP"],
//     ans: 2,
//   },
//   {
//     q: "ডেটাবেজের টেবিল মোছার জন্য কোন কমান্ড ব্যবহৃত হয়?",
//     opts: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
//     ans: 1,
//   },
// ];


const questions =[
  {
    "q": "scores টেবিল থেকে সব শিক্ষার্থীর নাম ও স্কোর দেখতে কোন SQL কোয়েরিটি সঠিক?",
    "opts": [
      "SELECT name, score FROM scores",
      "SHOW name, score FROM scores",
      "GET name, score FROM scores",
      "DISPLAY name, score FROM scores"
    ],
    "ans": 0
  },
  {
    "q": "scores টেবিলের সব কলাম ও সব রেকর্ড দেখতে কোন কোয়েরি ব্যবহার করতে হবে?",
    "opts": [
      "SELECT scores FROM *",
      "SELECT * FROM scores",
      "SELECT ALL scores",
      "FROM scores SELECT *"
    ],
    "ans": 1
  },
  {
    "q": "শুধুমাত্র যে শিক্ষার্থীরা grade = 'A' পেয়েছে তাদের তথ্য দেখতে কোন কোয়েরিটি ঠিক?",
    "opts": [
      "SELECT * FROM scores IF grade = 'A'",
      "SELECT * FROM scores HAVING grade = 'A'",
      "SELECT * FROM scores WHERE grade = 'A'",
      "SELECT * FROM scores WHEN grade = 'A'"
    ],
    "ans": 2
  },
  {
    "q": "scores টেবিল থেকে সকল শিক্ষার্থীর স্কোর বড় থেকে ছোট ক্রমে সাজাতে কোন কোয়েরি সঠিক?",
    "opts": [
      "SELECT * FROM scores SORT BY score DESC",
      "SELECT * FROM scores ORDER BY score ASC",
      "SELECT * FROM scores ORDER BY score DESC",
      "SELECT * FROM scores ARRANGE BY score DESC"
    ],
    "ans": 2
  },
  {
    "q": "যেসব শিক্ষার্থীর score ৩০-এর বেশি এবং grade = 'A' তাদের দেখাতে কোন কোয়েরি সঠিক?",
    "opts": [
      "SELECT * FROM scores WHERE score > 30 OR grade = 'A'",
      "SELECT * FROM scores WHERE score > 30 AND grade = 'A'",
      "SELECT * FROM scores WHERE score > 30 PLUS grade = 'A'",
      "SELECT * FROM scores WHERE score > 30 WITH grade = 'A'"
    ],
    "ans": 1
  },
  {
    "q": "scores টেবিল থেকে শুধু name কলাম দেখতে চাইলে কোন কোয়েরিটি সঠিক?",
    "opts": [
      "SELECT scores FROM name",
      "GET name FROM scores",
      "SELECT name FROM scores",
      "SHOW name FROM scores"
    ],
    "ans": 2
  },
  {
    "q": "scores টেবিলে যে শিক্ষার্থীদের wrong ১০-এর কম অথবা skipped ০ তাদের দেখাতে কোন কোয়েরি লিখতে হবে?",
    "opts": [
      "SELECT * FROM scores WHERE wrong < 10 AND skipped = 0",
      "SELECT * FROM scores WHERE wrong < 10 OR skipped = 0",
      "SELECT * FROM scores WHERE wrong < 10 NOT skipped = 0",
      "SELECT * FROM scores WHERE wrong > 10 OR skipped = 0"
    ],
    "ans": 1
  },
  {
    "q": "scores টেবিল থেকে শিক্ষার্থীদের নাম ছোট থেকে বড় (A-Z) ক্রমে সাজাতে কোন কোয়েরি সঠিক?",
    "opts": [
      "SELECT * FROM scores ORDER BY name DESC",
      "SELECT * FROM scores SORT BY name ASC",
      "SELECT * FROM scores ORDER BY name ASC",
      "SELECT * FROM scores ARRANGE BY name"
    ],
    "ans": 2
  },
  {
    "q": "scores টেবিল থেকে শুধুমাত্র 'Aoyon'-এর তথ্য বের করতে কোন WHERE কোয়েরি সঠিক?",
    "opts": [
      "SELECT * FROM scores WHERE name == 'Aoyon'",
      "SELECT * FROM scores WHERE name = 'Aoyon'",
      "SELECT * FROM scores IF name = 'Aoyon'",
      "SELECT * FROM scores FIND name = 'Aoyon'"
    ],
    "ans": 1
  },
  {
    "q": "scores টেবিলে correct >= 30 এবং wrong <= 10 — এই দুই শর্ত একসাথে পূরণ হওয়া শিক্ষার্থীদের দেখাতে কোন অপারেটর ব্যবহার করতে হবে?",
    "opts": [
      "OR",
      "NOT",
      "AND",
      "BETWEEN"
    ],
    "ans": 2
  },
  {
    "q": "নিচের কোয়েরিটি কী ফলাফল দেবে?\nSELECT name, grade FROM scores WHERE score >= 31",
    "opts": [
      "score ৩১-এর কম সবার নাম ও গ্রেড",
      "score ঠিক ৩১ এমন সবার নাম ও গ্রেড",
      "score ৩১ বা তার বেশি সবার নাম ও গ্রেড",
      "সকল শিক্ষার্থীর নাম ও গ্রেড"
    ],
    "ans": 2
  },
  {
    "q": "scores টেবিল থেকে grade = 'D' অথবা wrong > 20 এমন শিক্ষার্থীদের তথ্য বের করতে কোন কোয়েরি সঠিক?",
    "opts": [
      "SELECT * FROM scores WHERE grade = 'D' AND wrong > 20",
      "SELECT * FROM scores WHERE grade = 'D' OR wrong > 20",
      "SELECT * FROM scores WHERE grade = 'D' NOT wrong > 20",
      "SELECT * FROM scores WHERE grade = 'D' PLUS wrong > 20"
    ],
    "ans": 1
  },
  {
    "q": "scores টেবিল থেকে correct কলামের মান অনুযায়ী ছোট থেকে বড় ক্রমে সাজিয়ে দেখাতে কোন keyword ব্যবহার হবে?",
    "opts": [
      "DESC",
      "ASC",
      "SORT",
      "TOP"
    ],
    "ans": 1
  },
  {
    "q": "নিচের কোয়েরিটি কী করবে?\nSELECT name, score FROM scores WHERE grade = 'B+' ORDER BY score DESC",
    "opts": [
      "B+ গ্রেডধারীদের নাম ও স্কোর ছোট থেকে বড় ক্রমে দেখাবে",
      "B+ গ্রেডধারীদের নাম ও স্কোর বড় থেকে ছোট ক্রমে দেখাবে",
      "সবার নাম ও স্কোর বড় থেকে ছোট ক্রমে দেখাবে",
      "শুধু B+ গ্রেড কলাম দেখাবে"
    ],
    "ans": 1
  },
  {
    "q": "scores টেবিলে skipped = 0 এবং wrong < 10 শর্তে যে শিক্ষার্থীদের তথ্য বের হবে, তাদের ক্ষেত্রে কোনটি সত্য?",
    "opts": [
      "যেকোনো একটি শর্ত সত্য হলেই রেকর্ড আসবে",
      "দুটি শর্তের কোনটিই সত্য না হলে রেকর্ড আসবে",
      "দুটি শর্তই একসাথে সত্য হলে রেকর্ড আসবে",
      "শুধু প্রথম শর্ত সত্য হলে রেকর্ড আসবে"
    ],
    "ans": 2
  },
  {
    "q": "নিচের কোন কোয়েরিটি দিয়ে শুধু id, name ও score কলাম তিনটি দেখা যাবে?",
    "opts": [
      "SELECT * FROM scores",
      "SELECT id, name, score FROM scores",
      "SELECT scores(id, name, score)",
      "GET id, name, score FROM scores"
    ],
    "ans": 1
  },
  {
    "q": "নিচের কোয়েরিটি কোন শিক্ষার্থীদের তথ্য দেখাবে?\nSELECT * FROM scores WHERE score < 20 OR skipped > 0",
    "opts": [
      "যাদের score ২০-এর কম এবং skipped ০-র বেশি — দুটো শর্তই পূরণ করেছে",
      "যাদের score ২০-এর কম অথবা skipped ০-র বেশি — যেকোনো একটি শর্ত পূরণ করেছে",
      "যাদের score ঠিক ২০ এবং skipped = 0",
      "সকল শিক্ষার্থীর তথ্য"
    ],
    "ans": 1
  },
  {
    "q": "scores টেবিলে total = 40 এবং grade = 'A' এমন শিক্ষার্থীর নাম জানতে কোন কোয়েরি লিখতে হবে?",
    "opts": [
      "SELECT name FROM scores WHERE total = 40 OR grade = 'A'",
      "SELECT name FROM scores WHERE total = 40 AND grade = 'A'",
      "SELECT name FROM scores HAVING total = 40 AND grade = 'A'",
      "SELECT name FROM scores IF total = 40 AND grade = 'A'"
    ],
    "ans": 1
  },
  {
    "q": "নিচের কোয়েরিতে ORDER BY name ASC ব্যবহার করলে ফলাফল কীভাবে আসবে?",
    "opts": [
      "নাম বড় থেকে ছোট (Z-A) ক্রমে",
      "নাম ছোট থেকে বড় (A-Z) ক্রমে",
      "স্কোর অনুযায়ী সাজানো হবে",
      "কোনো পরিবর্তন হবে না"
    ],
    "ans": 1
  },
  {
    "q": "scores টেবিল থেকে grade = 'A' অথবা grade = 'B+' পাওয়া শিক্ষার্থীদের নাম ও স্কোর, স্কোর অনুযায়ী বড় থেকে ছোট ক্রমে দেখাতে কোন কোয়েরি সঠিক?",
    "opts": [
      "SELECT name, score FROM scores WHERE grade = 'A' AND grade = 'B+' ORDER BY score DESC",
      "SELECT name, score FROM scores WHERE grade = 'A' OR grade = 'B+' ORDER BY score ASC",
      "SELECT name, score FROM scores WHERE grade = 'A' OR grade = 'B+' ORDER BY score DESC",
      "SELECT name, score FROM scores WHERE grade = 'A' OR grade = 'B+' SORT BY score DESC"
    ],
    "ans": 2
  }
];
const LABELS = ["ক", "খ", "গ", "ঘ"];
const TOTAL = questions.length;
const TOTAL_TIME = 40 * 60;

let current = 0;
let userAnswers = new Array(TOTAL).fill(null);
let answered = new Array(TOTAL).fill(false);
let timerInterval = null;
let timeLeft = TOTAL_TIME;
let studentName = "";
let quizStartTime = null;
let quizSubmitted = false; // সাবমিট হওয়ার আগে সঠিক/ভুল দেখাবে না

// ── helpers ──────────────────────────────────────────────
function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function toBN(n) {
  return String(n).replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
}

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ── start ─────────────────────────────────────────────────
function startQuiz() {
  const inp = document.getElementById("studentName");
  const err = document.getElementById("nameError");
  const name = inp.value.trim();
  if (!name) {
    inp.classList.add("error");
    err.classList.add("show");
    inp.focus();
    return;
  }
  inp.classList.remove("error");
  err.classList.remove("show");
  studentName = name;
  quizStartTime = Date.now();
  showScreen("quizScreen");
  buildDots();
  renderQuestion(0);
  startTimer();
}

// ── timer ─────────────────────────────────────────────────
function startTimer() {
  const tv = document.getElementById("timerVal");
  const tc = document.getElementById("timerCard");
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById("overlay").style.display = "flex";
      return;
    }
    const m = Math.floor(timeLeft / 60),
      s = timeLeft % 60;
    tv.textContent = toBN(m) + ":" + (s < 10 ? "০" : "") + toBN(s);
    if (timeLeft <= 300)
      tc.style.background = "linear-gradient(135deg,#ff6b6b,#ee5a24)";
    if (timeLeft <= 60) tc.classList.add("timer-warning");
    timeLeft--;
  }, 1000);
}

// ── dots ──────────────────────────────────────────────────
function buildDots() {
  const wrap = document.getElementById("qDots");
  wrap.innerHTML = "";
  questions.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "q-dot" + (i === 0 ? " current" : "");
    d.textContent = toBN(i + 1);
    d.title = "প্রশ্ন " + (i + 1);
    d.onclick = () => renderQuestion(i);
    wrap.appendChild(d);
  });
  initSwipe();
}

function updateDots() {
  const dots = document.querySelectorAll(".q-dot");
  dots.forEach((d, i) => {
    d.className = "q-dot";
    if (i === current) {
      d.classList.add("current");
    } else if (quizSubmitted && answered[i]) {
      // সাবমিটের পরেই সবুজ/লাল দেখাও
      d.classList.add(
        userAnswers[i] === questions[i].ans
          ? "answered-correct"
          : "answered-wrong",
      );
    } else if (answered[i]) {
      // উত্তর দেওয়া কিন্তু সাবমিট হয়নি — নিরপেক্ষ রঙ (ধূসর-নীল)
      d.classList.add("answered-pending");
    } else if (i < current) {
      d.classList.add("visited-unanswered");
    }
  });
  const active = dots[current];
  if (active)
    active.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
}

// ── swipe ─────────────────────────────────────────────────
function initSwipe() {
  const el = document.getElementById("swipeWrap");
  let startX = 0,
    startY = 0;
  el.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true },
  );
  el.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
      if (dx < 0) navigate(1);
      else navigate(-1);
    },
    { passive: true },
  );
}

// ── render ────────────────────────────────────────────────
function renderQuestion(idx) {
  current = idx;
  const q = questions[idx];
  const wrap = document.getElementById("questionWrap");

  let html = "";
  q.opts.forEach((opt, i) => {
    const isSel = userAnswers[idx] === i;
    const isCorr = i === q.ans;
    let cls = "option";
    if (quizSubmitted) {
      // সাবমিটের পরে সঠিক/ভুল দেখাও
      if (isCorr) cls += " correct";
      else if (isSel) cls += " wrong";
    } else if (isSel) {
      cls += " selected";
    }
    const isLocked = answered[idx] || quizSubmitted;
    const click = isLocked
      ? ""
      : 'onclick="selectOption(' + idx + "," + i + ',this)"';
    html +=
      '<label class="' +
      cls +
      '" ' +
      click +
      ">" +
      '<input type="radio" name="q' +
      idx +
      '" ' +
      (isSel ? "checked" : "") +
      " " +
      (isLocked ? "disabled" : "") +
      ">" +
      '<span class="option-label">' +
      LABELS[i] +
      "</span>" +
      '<span class="option-text">' +
      esc(opt) +
      "</span>" +
      '<i class="fas fa-check option-icon correct-icon"></i>' +
      '<i class="fas fa-times option-icon wrong-icon"></i>' +
      "</label>";
  });

  // question-box রঙ: সাবমিটের আগে শুধু unanswered হলুদ, সাবমিটের পরে সবুজ/লাল
  let boxClass = "question-box";
  if (quizSubmitted) {
    if (userAnswers[idx] === q.ans) boxClass += " answered-correct";
    else if (userAnswers[idx] !== null) boxClass += " answered-wrong";
    else boxClass += " unanswered";
  } else if (answered[idx]) {
    boxClass += ""; // উত্তর দেওয়া হয়েছে কিন্তু সাবমিট হয়নি — রঙ নেই
  } else if (idx < current) {
    boxClass += " unanswered"; // এড়িয়ে গেছে
  }

  wrap.innerHTML =
    '<div class="question-wrap">' +
    '<div class="' +
    boxClass +
    '"><div class="question-title">' +
    '<span class="question-number">' +
    toBN(idx + 1) +
    "</span>" +
    "<span>" +
    esc(q.q) +
    "</span></div></div>" +
    '<div class="options">' +
    html +
    "</div></div>";

  document.getElementById("qCounter").textContent =
    toBN(idx + 1) + " / " + toBN(TOTAL);
  document.getElementById("progressFill").style.width =
    (answered.filter(Boolean).length / TOTAL) * 100 + "%";

  const isMobile = window.innerWidth <= 600;
  const isLast = idx === TOTAL - 1;
  document.getElementById("prevBtn").style.display = isMobile ? "none" : "flex";
  document.getElementById("nextBtn").style.display =
    isMobile || isLast ? "none" : "flex";
  document.getElementById("submitBtn").style.display = isLast ? "flex" : "none";
  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("navButtons").style.display =
    isMobile && !isLast ? "none" : "flex";

  window.scrollTo({ top: 0, behavior: "smooth" });
  updateDots();
  updateLiveScore();
}

// ── select ────────────────────────────────────────────────
function selectOption(idx, optIndex, labelEl) {
  if (answered[idx]) return;
  userAnswers[idx] = optIndex;
  labelEl
    .closest(".options")
    .querySelectorAll(".option")
    .forEach((o) => o.classList.remove("selected"));
  labelEl.classList.add("selected");
  confirmAnswer(idx);
}

function confirmAnswer(idx) {
  if (answered[idx]) return;
  answered[idx] = true;
  updateDots();
  updateLiveScore();

  if (idx < TOTAL - 1) {
    // slide-out করে পরের প্রশ্নে যাও
    const wrap = document.getElementById("questionWrap");
    wrap.classList.add("slide-out");
    setTimeout(() => {
      wrap.classList.remove("slide-out");
      renderQuestion(idx + 1);
      wrap.classList.add("slide-in");
      setTimeout(() => wrap.classList.remove("slide-in"), 320);
    }, 250);
  } else {
    // শেষ প্রশ্ন — শুধু re-render (সাবমিট বাটন দেখাবে)
    renderQuestion(idx);
  }
}

// ── navigate ──────────────────────────────────────────────
function navigate(delta) {
  const n = current + delta;
  if (n >= 0 && n < TOTAL) renderQuestion(n);
}

// ── score ─────────────────────────────────────────────────
function calcScore() {
  return userAnswers.reduce(
    (a, ans, i) => a + (ans === questions[i].ans ? 1 : 0),
    0,
  );
}

function updateLiveScore() {
  const el = document.getElementById("liveScore");
  if (el) el.textContent = toBN(calcScore());
}

// ── submit ────────────────────────────────────────────────
function submitQuiz() {
  clearInterval(timerInterval);
  finishQuiz();
}
function finishQuiz() {
  quizSubmitted = true;
  document.getElementById("overlay").style.display = "none";
  clearInterval(timerInterval);
  showResults();
}

// ── results ───────────────────────────────────────────────
function showResults() {
  const score = calcScore();
  const wrong = answered.filter(
    (a, i) => a && userAnswers[i] !== questions[i].ans,
  ).length;
  const skipped = TOTAL - answered.filter(Boolean).length;
  const pct = (score / TOTAL) * 100;

  document.getElementById("scoreNum").textContent = toBN(score);
  document.getElementById("correctCount").textContent = toBN(score);
  document.getElementById("wrongCount").textContent = toBN(wrong);
  document.getElementById("skipCount").textContent = toBN(skipped);
  document.getElementById("resultName").textContent = "👤 " + studentName;

  let emoji, title, subtitle, grade, gc;
  if (pct >= 90) {
    emoji = "🏆";
    title = "অসাধারণ!";
    subtitle = "তুমি দুর্দান্ত ফল করেছ!";
    grade = "A+";
    gc = "grade-A";
  } else if (pct >= 80) {
    emoji = "🎉";
    title = "চমৎকার!";
    subtitle = "খুব ভালো করেছ!";
    grade = "A";
    gc = "grade-A";
  } else if (pct >= 70) {
    emoji = "😊";
    title = "ভালো!";
    subtitle = "আরেকটু চেষ্টা করলে আরও ভালো হবে।";
    grade = "B+";
    gc = "grade-B";
  } else if (pct >= 60) {
    emoji = "👍";
    title = "মোটামুটি ভালো!";
    subtitle = "আরও অনুশীলন করো।";
    grade = "B";
    gc = "grade-B";
  } else if (pct >= 50) {
    emoji = "📚";
    title = "চেষ্টা করো!";
    subtitle = "আরও পড়াশোনা দরকার।";
    grade = "C";
    gc = "grade-C";
  } else {
    emoji = "💪";
    title = "হাল ছাড়বে না!";
    subtitle = "আবার চেষ্টা করো।";
    grade = "D";
    gc = "grade-D";
  }

  document.getElementById("resultEmoji").textContent = emoji;
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultSubtitle").textContent = subtitle;
  document.getElementById("gradeBadge").innerHTML =
    '<i class="fas fa-medal"></i> গ্রেড: ' + grade;
  document.getElementById("gradeBadge").className = "grade-badge " + gc;

  const elapsed = quizStartTime
    ? Math.floor((Date.now() - quizStartTime) / 1000)
    : 0;
  const timeTaken = Math.floor(elapsed / 60) + "m " + (elapsed % 60) + "s";

  const statusEl = document.getElementById("saveStatus");
  statusEl.innerHTML =
    '<span style="color:#a0aec0"><i class="fas fa-spinner fa-spin"></i> স্কোর সেভ হচ্ছে...</span>';

  fetch("/api/save-score", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: studentName,
      score,
      total: TOTAL,
      correct: score,
      wrong,
      skipped,
      grade,
      time_taken: timeTaken,
    }),
  })
    .then((r) => r.json())
    .then((d) => {
      statusEl.innerHTML = d.success
        ? '<span style="color:#38a169"><i class="fas fa-check-circle"></i> স্কোর সফলভাবে সেভ হয়েছে!</span>'
        : '<span style="color:#e53e3e"><i class="fas fa-exclamation-circle"></i> সেভ করতে সমস্যা হয়েছে।</span>';
    })
    .catch(() => {
      statusEl.innerHTML =
        '<span style="color:#e53e3e"><i class="fas fa-exclamation-circle"></i> সার্ভার সংযোগ ব্যর্থ।</span>';
    });

  buildReview();
  showScreen("resultScreen");
}

// ── review ────────────────────────────────────────────────
function buildReview() {
  const list = document.getElementById("reviewList");
  list.innerHTML = "";
  questions.forEach((q, i) => {
    const ua = userAnswers[i];
    const ok = ua === q.ans;
    const userText = ua !== null ? esc(q.opts[ua]) : "উত্তর দাও নাই";
    const div = document.createElement("div");
    div.className = "review-item " + (ok ? "correct" : "wrong");
    div.innerHTML =
      '<div class="review-q">' +
      '<span class="question-number" style="background:' +
      (ok ? "#48bb78" : "#fc8181") +
      ';min-width:28px;height:28px;font-size:12px;">' +
      toBN(i + 1) +
      "</span>" +
      "<span>" +
      esc(q.q) +
      "</span></div>" +
      '<div class="review-ans">' +
      '<span class="review-correct">✅ সঠিক উত্তর: ' +
      esc(q.opts[q.ans]) +
      "</span>" +
      (!ok
        ? '<span class="review-user">❌ তোমার উত্তর: ' + userText + "</span>"
        : "") +
      "</div>";
    list.appendChild(div);
  });
}

function toggleReview() {
  const l = document.getElementById("reviewList");
  const c = document.getElementById("reviewChevron");
  l.classList.toggle("open");
  c.style.transform = l.classList.contains("open") ? "rotate(180deg)" : "";
}

// ── restart ───────────────────────────────────────────────
function restartQuiz() {
  current = 0;
  userAnswers = new Array(TOTAL).fill(null);
  answered = new Array(TOTAL).fill(false);
  timeLeft = TOTAL_TIME;
  studentName = "";
  quizStartTime = null;
  quizSubmitted = false;
  clearInterval(timerInterval);
  const tc = document.getElementById("timerCard");
  tc.style.background = "";
  tc.classList.remove("timer-warning");
  document.getElementById("timerVal").textContent = "40:00";
  document.getElementById("studentName").value = "";
  document.getElementById("saveStatus").innerHTML = "";
  showScreen("introScreen");
}
