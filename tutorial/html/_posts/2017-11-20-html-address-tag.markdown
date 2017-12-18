---
layout: post
title: "HTML address tag | belajar &lt;address&gt; element"
short_title: "HTML &lt;address&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;address&gt; tag. Tutorial dan panduan mengenai element &lt;address&gt;..&lt;/address&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;address&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-address-tag.png"
  thumb: "posts/thumbs/html-address-tag.png"

---
<p class="text-muted">
Referensi Belajar <strong>HTML address tag</strong>. Tutorial dan panduan mengenai element <code>&lt;address&gt;..&lt;/address&gt;</code> yang berarti alamat yang berisi kontak yang dapat dihubungi. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;address&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
<small>Penjelasan HTML <span class="highlight">address</span></small>
</h2>
<p>
<em>address</em> artinya <em>alamat</em>. HTML element <code>address</code> digunakan untuk menunjukkan kontak informasi yang berkaitan dengan element induknya (element yang menaunginya). <code>address</code> element biasanya digunakan di dalam <code>article</code> dan <code>body</code> element. <code>address</code> element tidak digunakan untuk memberi markup alamat secara lengkap (berikut kode pos) karena ia lebih cocok menggunakan &lt;p&gt; element.
</p>
<p>Jika element <code>address</code> ditulis pada &lt;body&gt; element, maka kontak informasi tersebut berlaku untuk dokumen tersebut secara keseluruhan.</p>
<p>Jika ditulis pada &lt;article&gt; element, maka &lt;address&gt; dapat berisi konten mengenai kontak informasi penulis/editor artikel tersebut.</p>

<hr class="uk-article-divider">
<!-- Global Attributes -->
<section id="global-attribute">
<h2 class="title-sub bd-danger bd-left bd-left-only">Global Attributes <br>
<small>Atribut Secara Global (Keseluruhan)</small>
</h2>
<div class="">
<p>&lt;address&gt; tag mencakup <em>global attributes</em> yang artinya, tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
<p>&lt;address&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
<div class="footer-callout warning">
<p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
</div>
</div>
</section>

<!-- Example -->
<section id="example">
<h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
<small>Contoh HTML <code>&lt;address&gt;</code> element</small>
</h2>
<div class="dul-block">
<p>Contoh 1:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,5"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>address</span><span class="token punctuation">&gt;</span></span>
  Penulis dapat dihubungi melalui:
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mailto:email@domain.com<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>email@domain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> dan
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/p/contact.html<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>address</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
<p>Contoh 2:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="2,6"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>address</span><span class="token punctuation">&gt;</span></span>
    Penulis dapat dihubungi melalui:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mailto:email@domain.com<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>email@domain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> dan
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/p/contact.html<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>address</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">&gt;</span></span>Lisensi Artikel: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://creativecommons.org/licenses/by/4.0/<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Creative Commons Attribution 4.0 license<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
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
        <a href="https://www.apacara.com/example/html/tag/address.html" target="_blank" rel="nofollow"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML address tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Belajar Web Standard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      Apa itu Web Standard? Web Standard adalah teknologi yang dibangun oleh W3C dan lainnya yang dikembangkan untuk menginterpretasikan konten web agar memiliki standar yang dapat dinikmati oleh semua kalangan dan dapat diakses di semua <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>device<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span> (smartphone, tablet, desktop dan lain sebagainya).
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      Web yang dibangun sesuai standard (web standard) juga harus mempertimbangkan beberapa aspek diantaranya adalah harus mengedapankan kode yang bersih (clean), valid dan dapat digunakan kembali, dapat diakses oleh semua orang baik penyandang cacat, buta warna dan semacamnya (accessible), juga bersahabat dengan search engine (search engine friendly).
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>Ditulis Oleh:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>address</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>dul<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
        kontak:
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mailto:email@domain.com<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>email@domain.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> dan
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/p/contact.html<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>address</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">&gt;</span></span>Lisensi Artikel: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://creativecommons.org/licenses/by-nc-sa/4.0/<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>CC BY-NC-SA 4.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
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
<td><code>&lt;address&gt;</code></td>
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
<p>CSS untuk element <code>&lt;address&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
<div class="icode itheme css">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">address</span> <span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</div>
</aside>