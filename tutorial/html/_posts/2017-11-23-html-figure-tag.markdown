---
layout: post
title: "HTML figure tag | belajar &lt;figure&gt; element"
short_title: "HTML &lt;figure&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;figure&gt; tag. Tutorial dan panduan mengenai element &lt;figure&gt;..&lt;/figure&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;figure&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-figure-tag.png"
  thumb: "posts/thumbs/html-figure-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML figure tag</strong>. Tutorial dan panduan mengenai element <code>&lt;figure&gt;...&lt;/figure&gt;</code> yang dapat digunakan untuk memarkup figur gambar dan lain sebagainya. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;figure&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">figure</span></small>
</h2>
<p><code>&lt;figure&gt;</code> element digunakan untuk merepresentasikan konten tersendiri (<i>self-contained</i>, seperti sebuah kalimat lengkap), contohnya sebuah ilustrasi, diagram, foto, video, skema, deretan kode (code listings) dan lain sebagainya.</p>
<p><code>&lt;figure&gt;</code> element digunakan untuk meng-<i>group</i> blok konten yang dapat dipindahkan posisinya dari blok utama sebuah dokumen tanpa mempengaruhi arti dari induk dokumen.</p>
<p>&lt;figure&gt; element dapat ditulis secara bersarang (nested) yang artinya, dalam sebuah <code>&lt;figure&gt;</code>..<code>&lt;/figure&gt;</code> dapat ditulis <code>&lt;figure&gt;</code> element lainnya yang berkaitan.</p>
<p>Di dalam <code>&lt;figure&gt;</code> element dapat ditulis sebuah <i>caption</i> (judul) yang ditandai dengan tag <a href="https://www.apacara.com/tutorial/html/html-figcaption-tag.html" title="belajar HTML figcaption element">&lt;figcaption&gt;</a>.</p>
<p>HTML <code>&lt;figure&gt;</code> merupakan tag yang baru diperkenalkan pada HTML5.</p>

<hr class="uk-article-divider">
<!-- Global Attributes -->
<section id="global-attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Global Attributes <br>
    <small>Atribut Secara Global (Keseluruhan)</small>
  </h2>
    <div class="">
        <p>&lt;figure&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
        <p>&lt;figure&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;figure&gt;</code> element</small>
  </h2>
  <div class="dul-block">
  	<h5>Contoh 1</h5>
    <p><code>&lt;figure&gt;</code> element digunakan untuk me-<i>markup</i> gambar / foto.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,4"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/content/menara-banten.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Masjid Agung dan Menara Banten Lama Serang<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>308<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">&gt;</span></span>Gambar 1 - Masjid Agung dan Menara Banten.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
<hr class="uk-article-divider">
  	<h5>Contoh 2</h5>
  <p><code>&lt;figure&gt;</code> element digunakan untuk me-<i>markup</i> kode (<i>code listings</i>).</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="2,7"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Pada <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#kode1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Kode 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> Kita menggunakan CSS <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> property untuk mewarnai tulisan.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>kode1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">&gt;</span></span>Kode 1. Mewarnai tulisan pada sebuah teks paragraf menjadi hijau.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>p {
  color: green;
  }<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Tulisan berwarna hijau hanya berlaku pada element <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>p<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> (paragraf) saja.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
  	<hr class="uk-article-divider">
   	<h5>Contoh 3</h5>
    <p><code>&lt;figure&gt;</code> element digunakan untuk me-<i>markup</i> puisi / syair.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,11"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Dua mata hitam adalah matahati yang biru <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  dua mata hitam sangat kenal bahasa rindu.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  Rindu bukanlah milik perempuan melulu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  dan keduanya sama tahu, dan keduanya tanpa malu.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  Dua mata hitam terbenam di daging yang wangi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  kecantikan tanpa sutra, tanpa pelangi.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  Dua mata hitam adalah rumah yang temaram<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  secangkir kopi sore hari dan kenangan yang terpendam.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cite</span><span class="token punctuation">&gt;</span></span>Mata Hitam<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cite</span><span class="token punctuation">&gt;</span></span>. Karya: WS Rendra<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
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
    <a href="https://www.apacara.com/example/html/tag/figure.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
  </div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML figure tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/content/menara-banten.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Masjid Agung dan Menara Banten Lama Serang<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>308<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">&gt;</span></span>Gambar 1 - Masjid Agung dan Menara Banten.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">&gt;</span></span>
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
            <td><code>&lt;figure&gt;</code></td>
          <td class="success">8</td>
          <td class="success">5.1</td>
          <td class="success">4.0</td>
          <td class="success">11.10</td>
          <td class="success">9.0</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;figure&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">figure</span> <span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token property">margin-top</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-left</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</div>

</aside>