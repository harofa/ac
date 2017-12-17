---
layout: post
title: "HTML abbr tag | belajar &lt;abbr&gt; element"
short_title: "HTML &lt;abbr&gt; Tag"
language: id

metadata:
  description: "Belajar HTML &lt;abbr&gt; tag. Tutorial dan panduan mengenai element &lt;abbr&gt;..&lt;/abbr&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML tag &lt;abbr&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-abbr-tag.png"
  thumb: "posts/thumbs/html-abbr-tag.png"
---
<p class="text-muted">
Referensi Belajar <strong>HTML abbr tag</strong>. Tutorial dan panduan mengenai element <code>&lt;abbr&gt;..&lt;/abbr&gt;</code> yang digunakan untuk menjelaskan kepanjangan dari singkatan. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai referensi belajar HTML <span lang="id">elemen</span> &lt;abbr&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
<small>Penjelasan HTML <span class="highlight">abbr</span></small>
</h2>
<p>
<code>abbr</code> element menunjukkan sebuah <em>abbreviation</em> (singkatan) atau acronym (akronim), seperti <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Palang Merah Indonesia">PMI</abbr>, <abbr title="Majelis Permusyawaratan Rakyat">MPR</abbr>, <abbr title="Rukun Tetangga">RT</abbr>, <abbr title="Rukun Warga">RW</abbr> dan lain sebagainya yang semuanya menunjukkan singkatan dan memiliki kepanjangan. Element &lt;abbr&gt; digunakan bersamaan dengan atribut <code>title</code> yang menjelaskan kepanjangan dari singkatan tersebut dan tidak boleh berisi keterangan lain.</p>
<p>Kepanjangan yang ditulis pada <code>title</code> attribute dapat dilihat ketika mouse/pointer menyentuh (berada diatas) element <code>abbr</code> tersebut.</p>

<hr class="uk-article-divider">

<!-- Global Attributes -->
<section id="global-attribute">
<h2 class="title-sub bd-danger bd-left bd-left-only">Global Attributes <br>
<small>Atribut Secara Global (Keseluruhan)</small>
</h2>
<div class="">
<p>&lt;abbr&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
<div class="footer-callout info">
<p>Silahkan, lihat referensi mengenai <a href="http://www.apacara.com/blog/html-global-attribute.html">HTML Global Attribute</a></p>
</div>
</div>
</section>

<!-- Event Attributes -->
<section>
<h2 class="title-sub bd-danger bd-left bd-left-only">Event Attributes <br>
<small>Atribut event  (Peristiwa)</small>
</h2>
<div class="dul-callout dul-callout-warning">
<p>&lt;abbr&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
<div class="footer-callout warning">
<p>Silahkan, lihat referensi mengenai <a href="http://www.apacara.com/blog/html-event-attribute.html">HTML Events Attribute</a></p>
</div>
</div>
</section>

<section id="example">
<h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
<small>Contoh HTML <code>&lt;abbr&gt;</code> element</small>
</h2>
<div class="dul-block">
<h5>Contoh 1
</h5>
<p>Kepanjangan dari PMI adalah "Palang Merah Indonesia" yang ditulis pada value dari <code>title</code> attribute.</p>
<!-- example HTML code -->
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="2"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Setiap 3 bulan sekali saya mendonorkan darah ke:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Palang Merah Indonesia<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>PMI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">&gt;</span></span>.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
<h5>Contoh 2
</h5>
<!-- example HTML code -->
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dfn</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pmi<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Palang Merah Indonesia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dfn</span><span class="token punctuation">&gt;</span></span> (<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Palang Merah Indonesia<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>PMI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">&gt;</span></span>)
adalah organisasi perhimpunan nasional Indonesia yang bergerak di bidang sosial kemanusiaan. PMI memiliki slogan: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cite</span><span class="token punctuation">&gt;</span></span>Setetes darah Anda, nyawa bagi sesama<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cite</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
</div>
</section>

<h2 class="title-sub bd-danger bd-left bd-left-only">Contoh Lengkap
</h2>
<p>Contoh <em>source code</em> lengkap disertai dengan demo hasil output kode (preview).</p>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html5" aria-hidden="true"></i>
<span>SOURCE</span>
</div>
<div class="icard-bar-right pull-right">
<a href="http://www.apacara.com/example/html/tag/abbr.html" target="_blank" rel="nofollow"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
</div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Contoh 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Setiap 3 bulan sekali saya mendonorkan darah ke <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Palang Merah Indonesia<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>PMI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Contoh 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dfn</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pmi<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Palang Merah Indonesia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dfn</span><span class="token punctuation">&gt;</span></span> (<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Palang Merah Indonesia<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>PMI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">&gt;</span></span>)
    adalah organisasi perhimpunan nasional Indonesia yang bergerak di bidang sosial kemanusiaan. PMI memiliki slogan: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cite</span><span class="token punctuation">&gt;</span></span>Setetes darah Anda, nyawa bagi sesama<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cite</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
</div>
</div>
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
<td><code>&lt;abbr&gt;</code></td>
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
<p>CSS untuk element <code>&lt;abbr&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
<div class="icode itheme css">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment">/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>
</aside>