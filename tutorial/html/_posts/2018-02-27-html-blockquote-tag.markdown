---
layout: post
title: "HTML blockquote tag | belajar &lt;blockquote&gt; element"
short_title: "HTML &lt;blockquote&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;blockquote&gt; tag. Tutorial dan panduan mengenai element &lt;blockquote&gt;..&lt;/blockquote&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;blockquote&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-blockquote-tag.png"
  thumb: "posts/thumbs/html-blockquote-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML blockquote tag</strong>. Tutorial dan panduan mengenai element <code>&lt;blockquote&gt;...&lt;/blockquote&gt;</code> yang digunakan untuk menulis teks kutipan panjang. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;blockquote&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">blockquote</span></small>
</h2>
<p>
  HTML <code>blockquote</code> element digunakan untuk menunjukkan sebuah konten yang dikutip dari sumber lain.
</p>
<p>Jika kutipan bersumber dari alamat web (URL), maka URL harus ditulis pada attribute <code>cite</code> di dalam element <code>blockquote</code>, sedangkan keterangan yang menunjukkan sumber kutipan tersebut ditulis pada element &lt;cite&gt;.</p>
<p><code>blockquote</code> element biasanya memiliki style teks dengan indentasi yang agak merapat ke dalam.</p>
<!-- ingatlah -->
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-success">
    <div class="icard-bar bar-lg">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        <span>TIPS</span>
      </div>
    </div>
  </div>
  <div class="icard-body bg-success2">
<p class="uk-text-left">&lt;blockquote&gt; element digunakan untuk blok kutipan panjang, sedangkan untuk kutipan pendek yang terletak didalam baris (inline) menggunakan <a href="https://www.apacara.com/tutorial/html/html-q-tag.html" title="Belajar HTML q element">&lt;q&gt;</a> element.</p>
<p class="uk-text-left">Untuk merubah tampilan indentasi, dapat menggunakan <a href="https://www.apacara.com/tutorial/css/css-property-margin.html" title="Belajar CSS margin property">CSS Margin</a> property.</p>
  </div>
</div>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;blockquote&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">cite</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan sebuah URL yang menunjukkan sumber dokumen atau teks yang dikutip.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: URL</p>
        </div>
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
        <p>&lt;blockquote&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
        <p>&lt;blockquote&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;blockquote&gt;</code> element</small>
  </h2>
  <div class="dul-block">
        <h5>Contoh 1
  </h5>
<!-- example HTML code -->
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span> <span class="token attr-name">cite</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://id.wikipedia.org/wiki/Blog<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  Blog merupakan singkatan dari web log adalah bentuk aplikasi web yang menyerupai tulisan-tulisan (yang dimuat sebagai posting) pada sebuah halaman web umum. Tulisan-tulisan ini seringkali dimuat dalam urut terbalik (isi terbaru dahulu baru kemudian diikuti isi yang lebih lama), meskipun tidak selamanya demikian. Situs web seperti ini biasanya dapat diakses oleh semua pengguna Internet sesuai dengan topik dan tujuan dari si pengguna blog tersebut.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>

  <h5>Contoh 2</h5>
  <p>Dengan Tambahan &lt;footer&gt; element</p>
<!-- example HTML code -->
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,5"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Janganlah hidup dalam kenangan, karena kenangan itu tentang masa lalu.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hiduplah dalam pekerjaan yang disemangati oleh impian, karena impianmu adalah gambaran tentang keindahan masa depanmu.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>&#x2014; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cite</span><span class="token punctuation">&gt;</span></span>Mario Teguh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cite</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>

  <h5>Contoh 3</h5>
  <p>Dengan Menggunakan Microdata syntax</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,11"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Chairul Tanjung mengungkapkan:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>"Bagi saya, Ibu adalah segalanya."<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>"Bila kita benar-benar berbakti kepada Ibu sepenuh hati dan ikhlas, maka surga akan kita gapai di dunia."<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">itemscope</span> <span class="token attr-name">itemtype</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://schema.org/Book<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Buku: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Chairul Tanjung Si Anak Singkong<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    Penulis: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Tjahja Gunawan Diredja<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    Penerbit: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>publisher<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Kompas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    Tanggal Terbit: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>datePublished<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>July, 2012<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
  </div>
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
        <a href="https://www.apacara.com/example/html/tag/blockquote.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>HTML blockquote tag demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Example 1:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Mengenal Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Apa itu blog?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span> <span class="token attr-name">cite</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://id.wikipedia.org/wiki/Blog<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Blog merupakan singkatan dari web log adalah bentuk aplikasi web yang menyerupai tulisan-tulisan (yang dimuat sebagai posting) pada sebuah halaman web umum. Tulisan-tulisan ini seringkali dimuat dalam urut terbalik (isi terbaru dahulu baru kemudian diikuti isi yang lebih lama), meskipun tidak selamanya demikian. Situs web seperti ini biasanya dapat diakses oleh semua pengguna Internet sesuai dengan topik dan tujuan dari si pengguna blog tersebut.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Example 2:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Janganlah hidup dalam kenangan, karena kenangan itu tentang masa lalu.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hiduplah dalam pekerjaan yang disemangati oleh impian, karena impianmu adalah gambaran tentang keindahan masa depanmu.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>&#x2014; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cite</span><span class="token punctuation">&gt;</span></span>Mario Teguh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cite</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Example 3:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Chairul Tanjung mengungkapkan:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>"Bagi saya, Ibu adalah segalanya."<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>"Bila kita benar-benar berbakti kepada Ibu sepenuh hati dan ikhlas, maka surga akan kita gapai di dunia."<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">itemscope</span> <span class="token attr-name">itemtype</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://schema.org/Book<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        Buku: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Chairul Tanjung Si Anak Singkong<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
        Penulis: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Tjahja Gunawan Diredja<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
        Penerbit: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>publisher<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Kompas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
        Tanggal Terbit: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>datePublished<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>July, 2012<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code>
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
            <td><code>&lt;blockquote&gt;</code></td>
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
  <p>CSS untuk element <code>&lt;blockquote&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">blockquote</span> <span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token property">margin-top</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token property">margin-left</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token property">margin-right</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</div>
</aside>