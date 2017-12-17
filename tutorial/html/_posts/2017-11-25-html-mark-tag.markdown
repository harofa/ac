---
layout: post
title: "HTML mark tag | belajar &lt;mark&gt; element"
short_title: "HTML &lt;mark&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;mark&gt; tag. Tutorial dan panduan mengenai element &lt;mark&gt;&lt;/mark&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;mark&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-mark-tag.png"
  thumb: "posts/thumbs/html-mark-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML mark tag</strong>. Tutorial dan panduan mengenai element <code>&lt;mark&gt;...&lt;/mark&gt;</code> yang digunakan untuk menandai teks penting. Mencakup pembahasan lebih detail dan lengkap yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;mark&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="html-tag">mark</span> tag</small>
</h2>
<p>
  <strong>HTML <code>&lt;mark&gt;</code> element</strong> digunakan untuk merepresentasikan  teks yang <mark>disorot</mark> atau ditandai karena memiliki peran penting, yang biasanya dimaksudkan untuk mereferensi (merujuk) atau mengingatkan akan hal penting yang berkaitan dengan konteks khusus sebuah kalimat.
</p>
<p><code>&lt;mark&gt;</code> menunjukkan sebuah teks dalam dokumen yang di <mark>ditandai</mark> (<i>marked</i>) atau disorot untuk tujuan referensi atau acuan terhadap konteks (kalimat) yang lain yang berkaitan. Ketika digunakan dalam sebuah kutipan atau teks yang bersumber dari sebuah <i title="karangan bebas">prosa</i>, element ini menunjukkan sebuah teks yang disorot (<em>highlight</em>) yang merupakan tambahan untuk mendapat perhatian dan pengertian khusus terhadap pembaca, yang mana teks tersebut bukan bersumber dari penulis/pengarang asli. Ketika digunakan pada tulisan utama yang terdapat dalam sebuah dokumen, elemen ini menunjukkan bagian dokumen yang disorot karena keterkaitannya dengan aktivitas pengguna (user) yang sedang berlangsung. Contohnya, menampilkan hasil pencarian sesuai dengan kata-kata yang diketik oleh <i>user</i>. kata-kata tersebut akan di-<i>marked</i> atau disorot pada hasil pencarian yang relevan (berkaitan).
</p>
<p>Umumnya, teks yang ditulis di dalam &lt;mark&gt; element memiliki warna latar (background) kuning atau warna lainnya yang jelas atau kontras.</p>

<hr class="uk-article-divider">
<!-- Global Attributes -->
<section id="global-attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Global Attributes <br>
    <small>Atribut Secara Global (Keseluruhan)</small>
  </h2>
  <div class="">
    <p>&lt;mark&gt; tag mencakup <em>global attributes</em>.</p>
    <div class="collapse-global uk-hidden" aria-hidden="true">
      <p>Tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
      <div class="footer-callout info">
        <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-global-attribute.html">HTML Global Attribute</a></p>
      </div>
    </div>
  </div>
</section>

<!-- Event Attributes -->
<section>
  <h2 class="title-sub bd-danger bd-left bd-left-only">Event Attributes <br>
    <small>Atribut event  (Peristiwa)</small>
  </h2>
  <div class="dul-callout dul-callout-warning">
    <p>&lt;mark&gt; tag mencakup <em>event attributes</em>. </p>
    <div>
      <p>Attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
      <div class="footer-callout warning">
        <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
      </div>
    </div>
  </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;mark&gt;</code> element</small>
  </h2>
  <h5>Contoh 1</h5>
<!-- HTML Code Example -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>HTML</span>
  </div>
  <div class="icard-bar-right pull-right">
    <span>Example</span>
  </div>
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup">Saya tidak tahu, rumah pedagang <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">&gt;</span></span>tahu&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
</div>
</div>

  <h5>Contoh 2</h5>
  <p>Contoh dibawah ini, misalnya kita ingin mengoreksi tulisan orang lain. Maka, kata yang dimaksud, ditulis dalam <code>&lt;mark&gt;&lt;/mark&gt;</code> element untuk menandainya.</p>
<!-- HTML Code Example -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>HTML</span>
  </div>
  <div class="icard-bar-right pull-right">
    <span>Example</span>
  </div>
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Anda salah tulis pada kata <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>yelow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>, seharusnya <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>. Seperti ini:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>footer {
  background: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">&gt;</span></span>yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">&gt;</span></span>;
}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>

</section>
<h2 class="title-sub bd-danger bd-left bd-left-only">Contoh Lengkap
</h2>
<p>Contoh <em>source code</em> lengkap disertai dengan demo link untuk mencoba (try it) dan melihat hasil (preview) kode.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html5" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/html/tag/mark.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML mark tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      Saya tidak tahu, rumah pedagang <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">&gt;</span></span>tahu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Anda salah tulis pada kata <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>yelow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>, seharusnya <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>. Seperti ini:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>footer {
    background: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">&gt;</span></span>yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">&gt;</span></span>;
    }<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
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
            <th title="Edge"><i class="fa fa-edge fa fa-lg"></i></th>
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
            <td>Edge</td>
          </tr>
          <tr>
            <td><code>&lt;mark&gt;</code></td>
            <td class="success">6.0</td>
            <td class="success">5.0</td>
            <td class="success">4.0</td>
            <td class="success">11.1</td>
            <td class="success">9.0</td>
            <td class="success">12.0</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;mark&gt;</code> yang mungkin akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">mark</span> <span class="token punctuation">{</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</div>

</aside>