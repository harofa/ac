---
layout: post
title: "Apa Itu WebVTT atau .vtt File?"
short_title: "webvtt"
language: id

metadata:
  description: "Apa arti WebVTT?. Pengenalan kosa kata atau istilah webvtt yang berkaitan dengan video dan audio. Bagaimana cara membuka file .vtt?"

author: dul

tag: [apa, istilahweb]
taxonomy:
  category: apa
  tag: [apa, istilahweb]
images:
  figure: "posts/apa-itu-webvtt.png"
  thumb: "posts/thumbs/apa-itu-webvtt.png"
---
<p class="lead">
<dfn><strong>WebVTT</strong></dfn> adalah <em>Web Video Text Tracks</em>, merupakan format yang digunakan untuk me<i>markup</i> teks track yang disimpan pada file external berformat <code>.vtt</code>. <em>Text track</em> bisa dibilang tulisan yang muncul diatas video atau audio yang sedang diputar / dimainkan .
</p>

<hr>
<section>
<h2 class="title-sub bd-primary bd-left bd-left-only">Apa Kegunaan WebVTT?</h2>
  <div class="dul-callout dul-callout-success">
    <p>Kegunaan utama dari WebVTT adalah untuk menulis judul atau subtitle sebuah video. Contohnya, video karaoke yang terdapat tulisan (subtitle) lirik lagu yang silih berganti dengan tulisan (syair) yang lain pada durasi (waktu) yang ditentukan sesuai dengan vocal (audio) dari video tersebut. Tulisan yang muncul diatas video ini disebut dengan "subtitle" yang diatur (diformat) dan ditulis didalam .vvt file.</p>
  </div>
</section>

<section>
<h2 class="title-sub bd-primary bd-left bd-left-only">Cara membuka (Open) file .vtt</h2>
  <div class="dul-callout dul-callout-danger">
    <p>.vtt file dapat dibuka dengan program text editor sederhana seperti notepad, nodepad++ dan lain sebagainya.</p>
  </div>
</section>

<section>
<h2 class="title-sub bd-primary bd-left bd-left-only">Contoh Konten File Format ".vtt"</h2>
<div class="dul-block">
  <p>Berikut contoh konten (markup) yang ditulis didalam .vtt file.</p>

  <!-- custom-title -->
  <div class="icode itheme" data-code=".vtt">
  <pre class="prettyprint highlight language-none"><code class="prettyprint  language-none">WEBVTT

00:00:00.000 --&gt; 00:50:00.000
Pengenalan HTML

00:00:00.000 --&gt; 00:10:00.000
HTML Tag, HTML Element

00:10:00.000 --&gt; 00:45:00.000
HTML Attribute

00:00:00.000 --&gt; 00:10:00.000
Global Attribute

00:50:00.000 --&gt; 01:40:00.000
Event Attribute

00:50:00.000 --&gt; 00:55:00.000
Penutupan</code>
  </pre>
  </div>
</div>
</section>

<p>Contoh penggunaannya, dapat dilihat pada pembahasan mengenai <a href="https://www.apacara.com/tutorial/html/html-track-tag.html">HTML &lt;track&gt; Element</a>.</p>