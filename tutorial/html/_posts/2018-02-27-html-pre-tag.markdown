---
layout: post
title: "HTML pre tag | belajar &lt;pre&gt; element"
short_title: "HTML &lt;pre&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;pre&gt; tag. Tutorial dan panduan mengenai element &lt;pre&gt;&lt;/pre&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;pre&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-pre-tag.png"
  thumb: "posts/thumbs/html-pre-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML pre tag</strong>. Tutorial dan panduan mengenai element <code>&lt;pre&gt;...&lt;/pre&gt;</code> yang digunakan untuk menulis teks tanpa format. Mencakup pembahasan lebih detail dan lengkap yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;pre&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="html-tag">pre</span> tag</small>
</h2>
<p>
  <strong>HTML <code>&lt;pre&gt;</code> element</strong> digunakan untuk merepresentasikan sebuah blok teks preformat (<em>preformatted text</em>). Teks yang ditulis didalam <code>&lt;pre&gt;</code> elemen memiliki struktur berdasarkan ketetapan tifografi, artinya teks ditulis apa adanya sesuai format yang ditulis didalam file (dokumen HTML).
</p>
<p><code>&lt;pre&gt;</code> sering digunakan sebagai induk element bagi <code>&lt;code&gt;</code>, yang mana didalam element <code>pre</code> terdapat element <code>code</code> yang digunakan untuk menulis <em>source code</em>.</p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;pre&gt;</code></small>
  </h2>
  <div class="dul-block">
    <div class="dul-callout dul-callout-success">
      <p>Dalam HTML5, <code>&lt;pre&gt;</code> elemen tidak memiliki attribute khusus yang dapat digunakan, sedangkan didalam HTML 4.01 dan versi sebelumnya terdapat atribut <code>cols</code>, <code>width</code> dan <code>wrap</code>. Atribut-atribut ini sudah usang dan tidak dipakai lagi didalam HTML5, sehingga tidak dibahas disini.</p>
    </div>
  </div>
</section>

<hr class="uk-article-divider">
<!-- Global Attributes -->
<section id="global-attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Global Attributes <br>
    <small>Atribut Secara Global (Keseluruhan)</small>
  </h2>
    <div class="">
        <p>&lt;pre&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
        <div class="footer-callout info">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-global-attribute.html">HTML Global Attribute</a></p>
        </div>
    </div>
</section>

<!-- Event Attributes -->
<section>
  <h2 class="title-sub bd-danger bd-left bd-left-only">Event Attributes <br>
    <small>Atribut event  (Peristiwa)</small>
  </h2>
    <div class="dul-callout dul-callout-warning">
        <p>&lt;pre&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;pre&gt;</code> element</small>
  </h2>
  <h5>Contoh 1</h5>
  <p>Contoh kode <code>pre</code> element sederhana.</p>
<!-- HTML Code Example -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>HTML</span>
  </div>
  
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight no-room language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
  pre ditulis dengan pola teks
        seperti ini
  hasilnya pun sama...
    baik spasi maupun garis baru format letak tulisan
          akan sama (apa adanya)
baris kedalam
                    spasi jauh
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
<!-- end output -->
<p>Contoh seperti diatas, dapat digunakan untuk memarkup sebuah puisi atau syair.</p>

<div class="dul-block">
<h5>Contoh 2</h5>
  <p>Contoh <code>&lt;pre&gt;</code> yang digunakan bersamaan dengan element <code>&lt;code&gt;</code>. Dibawah ini merupakan contoh untuk memarkup kode CSS pada sebuah halaman web (HTML).</p>
<!-- HTML Code Example -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>HTML</span>
  </div>
  
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>pre {
  display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0px;
  }<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
  </div>
  <p>Untuk contoh diatas, dapat diedit sendiri dan dilihat hasilnya pada <em>demo editor</em> (klik demo link pada contoh lengkap) dibawah ini:</p>
</section>
<h2 class="title-sub bd-danger bd-left bd-left-only">Contoh Lengkap
</h2>
<p>Contoh <em>source code</em> lengkap disertai dengan link  &quot;editor&quot; untuk mencoba (try it) dan melihat hasil (preview) kode.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html5" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/html/tag/pre.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML pre tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>pre {
        display: block;
        font-family: monospace;
        white-space: pre;
        margin: 1em 0px;
      }<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<!-- Article Aside -->

<!-- Browser Support -->
<aside id="browser">
<h2 class="title-sub bd-danger bd-left bd-left-only">Browser Support <br>
  <small>Status &amp; Dukungan Browser </small>
</h2>
<p>Berikut adalah keterangan mengenai dukungan (support) dari beberapa browser.</p>
<div class="table-responsive uk-overflow-container">
  <table class="table uk-table uk-text-nowrap full-width">
        <thead>
          <tr>
            <th>HTML</th>
            <th title="Chrome"><i class="fa fa-chrome fa fa-lg"></i></th>
            <th title="Safari"><i class="fa fa-safari fa fa-lg"></i></th>
            <th title="Firefox"><i class="fa fa-firefox fa fa-lg"></i></th>
            <th title="Opera"><i class="fa fa-opera fa fa-lg"></i></th>
            <th title="Internet Explorer"><i class="fa fa-internet-explorer fa fa-lg"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Element</td>
            <td>Chrome</td>
            <td>Safari</td>
            <td>Firefox</td>
            <td>Opera</td>
            <td>IE</td>
          </tr>
          <tr>
            <td><code>&lt;pre&gt;</code></td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;pre&gt;</code> yang mungkin akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">pre</span> <span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> monospace<span class="token punctuation">;</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> pre<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span> 1em 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</div>

</aside>