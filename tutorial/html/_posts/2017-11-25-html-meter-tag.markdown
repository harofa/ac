---
layout: post
title: "HTML meter tag | belajar &lt;meter&gt; element"
short_title: "HTML &lt;meter&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;meter&gt; tag. Tutorial dan panduan mengenai element &lt;meter&gt;&lt;/meter&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;meter&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-meter-tag.png"
  thumb: "posts/thumbs/html-meter-tag.png"
---
<p class="text-muted">
  Referensi Belajar <strong>HTML meter tag</strong>. Tutorial dan panduan mengenai element <code>&lt;meter&gt;...&lt;/meter&gt;</code> yang digunakan untuk mengukur (memeteri) data. Mencakup pembahasan lebih detail dan lengkap yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;meter&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="html-tag">meter</span> tag</small>
</h2>
<p>
  <strong>HTML <code>&lt;meter&gt;</code> element</strong> digunakan untuk mengukur data berdasarkan tingkat tertentu. Memeteri data dengan bilangan yang menunjukkan tingkat meteran atau dikenal dengan istilah <em>gauge</em>.
</p>
<p>Contohnya, digunakan untuk menunjukkan kapasitas hardisk / memory disk dan hasil pencarian (<em>query result</em>).</p>
<p><code>&lt;meter&gt;</code> tag tidak boleh digunakan apabila menunjukkan sebuah progres (berlangsungnya sebuah kegiatan). Untuk hal ini, gunakan <a href="https://www.apacara.com/blog/html-progress-tag.html">&lt;progress&gt;</a> element.</p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;meter&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">form</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan satu atau dua lebih form yang mana &lt;meter&gt; element tersebut diperuntukkan baginya.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>Value:</b>: <i>form_id</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">height</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan tingkat nilai yang dianggap tinggi.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>Value:</b> <i>nomor</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">low</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan tingkat nilai yang dianggap rendah.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>Value:</b>: <i>nomor</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">max</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan tingkat nilai maksimum.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>Value:</b>: <i>nomor</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">min</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan tingkat nilai minimum.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>Value:</b>: <i>nomor</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">optimum</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan berapa jumlah optimal yang berlaku untuk meteran tersebut.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>Value:</b>: <i>nomor</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">value</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan nilai saat ini yang berlaku. Attribute ini wajib ditulis.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>Value:</b>: <i>nomor</i></p>
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
    <p>&lt;meter&gt; tag mencakup <em>global attributes</em>.</p>
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
    <p>&lt;meter&gt; tag mencakup <em>event attributes</em>. </p>
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
    <small>Contoh HTML <code>&lt;meter&gt;</code> element</small>
  </h2>
    <p>Contoh kode</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Contoh nilai 4 dari 10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meter</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>4 dari 10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>meter</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Contoh 50%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meter</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0.5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>50%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>meter</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code>
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
        <a href="https://www.apacara.com/example/html/tag/meter.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML meter tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Contoh nilai 4 dari 10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meter</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>4 dari 10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>meter</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Contoh 50%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meter</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0.5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>50%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>meter</span><span class="token punctuation">&gt;</span></span>
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
            <td><code>&lt;meter&gt;</code></td>
            <td class="success">8.0</td>
            <td class="success">6.0</td>
            <td class="success">6.0</td>
            <td class="success">11.0</td>
            <td class="warning">?</td>
            <td class="success">13.0</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;meter&gt;</code> yang mungkin akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>

</aside>