---
layout: post
title: "HTML bdo tag | belajar &lt;bdo&gt; element"
short_title: "HTML &lt;bdo&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;bdo&gt; tag. Tutorial dan panduan mengenai element &lt;bdo&gt;..&lt;/bdo&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;bdo&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-bdo-tag.png"
  thumb: "posts/thumbs/html-bdo-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML bdo tag</strong>. Tutorial dan panduan mengenai element <code>&lt;bdo&gt;..&lt;/bdo&gt;</code>. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;bdo&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">bdo</span></small>
</h2>
<p>
  <em>bdo</em> adalah kepanjangan dari <em>Bi-Directional Override</em>.
</p>
<p>HTML <code>bdo</code> element digunakan untuk mengganti arah text yang sedang berlaku pada sebuah element, sehingga secara tegas dapat memformat arah teks bagi kontent atau element keturunannya.</p>
<p>Attribute <code>dir</code> harus disebutkan didalam element <code>bdo</code> ini, dengan value <code>ltr</code> untuk arah <em>left-to-right (kiri-ke-kanan)</em> dan <code>rtl</code> untuk arah <em>right-to-left (kanan-ke-kiri)</em>.</p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;bdo&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">dir</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan arah teks yang akan diberlakukkan pada konten di dalam element &lt;bdo&gt;. <code>ltr</code> = <em>left-to-right (kiri-ke-kanan)</em>, <code>rtl</code> = <em>right-to-left (kanan-ke-kiri)</em></p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>ltr</code> | <code>rtl</code> | <code>auto</code></p>
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
        <p>&lt;bdo&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
        <p>&lt;bdo&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;bdo&gt;</code> element</small>
  </h2>
  <div class="dul-block">
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bdo</span> <span class="token attr-name">dir</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rtl<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
Teks ini mengarah dari kanan ke kiri
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bdo</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
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
        <a href="https://www.apacara.com/example/html/tag/bdo.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Teks normal, mengarah dari kiri ke kanan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bdo</span> <span class="token attr-name">dir</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rtl<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Teks ini mengarah dari kanan ke kiri<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bdo</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>

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
          <td><code>&lt;b&gt;</code></td>
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
<p>CSS untuk element <code>&lt;b&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
<div class="icode itheme css">
<pre class="prettyprint linenums line-numbers highlight language-css"><code data-language="css" class=" language-css"><span class="token selector">bdo</span> <span class="token punctuation">{</span>
<span class="token property">unicode-bidi</span><span class="token punctuation">:</span> bidi-override<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>

</aside>