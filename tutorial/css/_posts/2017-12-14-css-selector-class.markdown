---
layout: post
title: "CSS class | Belajar css selector"
short_title: "class"
language: id

metadata:
  description: "Belajar CSS class. Referensi, syntax dan contoh selektor class di dalam CSS. Panduan dan tutorial Bahasa Indonesia mengenai CSS class selector"

author: dul

tag: [css, cssselector]
taxonomy:
  category: css
  tag: [css, cssselector]
images:
  figure: "posts/css-selector-class.png"
  thumb: "posts/thumbs/css-selector-class.png"
---
<p>
    <em><code>.class</code> Selector</em> digunakan untuk menyeleksi element berdasarkan nama class atau nilai (value) dari attribute class yang sama pada html element yang sebelumnya telah ditentukan.
</p>
<p>
    Penulisan <em>Class Selector</em> diawali dengan tanda titik (.) atau <em>period</em>, kemudian diikuti dengan nama class. Kita bisa menentukan sendiri nama class apa saja yang kita inginkan, asalkan mengikuti aturan berikut:
</p>
<ul>
    <li>Nama Class hanya bisa ditulis dengan letters (abjad [A-Z, a-z]), numbers (angka), hyphens (tanda penghubung), dan underscores (tanda garis bawah).</li>
    <li>Setelah titik (.) nama class harus diawali dengan letters (huruf alphabet) pada awal karakter. contoh: <code>.wali9</code> adalah benar, tetapi, <code>.9wali</code> adalah salah.</li>
    <li>Nama Class adalah <em>case-sensitive</em>. Artinya perbedaan huruf besar dengan huruf kecil akan berpengaruh. contoh: <code>.content</code> berbeda dengan <code>.Content</code> karena pebedaan huruf besar C pada awal karakter.</li>
</ul>
<p>
    <em>Class Selector</em> biasanya digunakan untuk memberikan style pada element berdasarkan group tertentu. Satu nama class bisa disisipkan pada beberapa element agar memiliki style yang sama. Jadi, bisa digunakan lebih dari satu deklarasi. Ini, jelas berbeda dengan <a href="https://www.apacara.com/tutorial/css/css-selector-id.html">ID Selector</a> yang hanya bisa digunakan sekali dalam satu halaman.
</p>

<section id="syntax">
    <h3 class="title-sub bd-danger bd-left bd-left-only">Syntax <br>
    <small>Penggunaan Sintaksis CSS <code>class</code></small>
    </h3>
<div class="icode itheme syntax">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">.namaClass</span> <span class="token punctuation">{</span>
<span class="token property">Property</span><span class="token punctuation">:</span> Value<span class="token punctuation">;</span>  <span class="token comment">/* Deklarasi CSS */</span>
<span class="token punctuation">}</span></code>
</pre>
</div>
</section>

<section id="example">
  <h3 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh CSS <code>class</code></small>
  </h3>
   <p>Di dalam HTML tag, kita menuliskan <code>class</code>, kemudian tanda sama dengan (<code>=</code>) dan diikuti nama class yang kita inginkan yang diapit dengan tanda petik (<code>""</code>). Contoh pada html tag: <code>&lt;header&gt;</code> </p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>main-header<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
Belajar Web Design
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<p>Kemudian didalam CSS, kita mendeklarasikannya dengan tanda titik (.) kemudian diikuti dengan nama class yang telah disebutkan pada HTML element tersebut.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-css" aria-hidden="true"></i>
        <span>CSS</span>
      </div>
     <!-- <div class="icard-bar-right pull-right">
        <span>Example</span>
      </div> -->
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-css"><code data-language="css" class=" language-css"><span class="token selector">.main-header</span> <span class="token punctuation">{</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> Georgia, serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>
</pre>
  </div>
</div>
<p>Contoh lainnya yang lebih jelas dapat dilihat pada <i>demo editor</i> dibawah ini:</p>
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
        <a href="https://www.apacara.com/example/css/selector/class.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo CSS class Selector - apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
      <span class="token selector">.teks-hijau</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">}</span>
      <span class="token selector">.teks-merah</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">}</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Paragraf ini tidak memiliki <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>Class<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>teks-hijau<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Paragraf ini memiliki Class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>teks-hijau<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>teks-merah<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Paragraf ini memiliki Class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>teks-merah<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
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
<p>Untuk pembahasan selanjutnya, gunakan <em>Code Editor</em> diatas untuk uji coba dengan cara copy-paste kedalam editor tersebut, ataupun mengetiknya secara manual.</p>
  </div>
</div>
<section>
<h3 class="title-sub bd-danger bd-left bd-left-only">Multipple Class <br>
    <small><em>Class</em> lebih dari satu nilai (value)</small>
</h3>
<p>
    <em>Class</em> Attribute juga bisa memiliki value (nilai) lebih dari satu value yang ditulis dengan jarak (spasi) antara satu value dengan value lainnya, contohnya;
</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box hijau<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
Paragraf dengan kotak berwarna hijau
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<p>
Kode diatas memiliki dua nama class, yaitu <em>box</em> dan <em>hijau</em>, sehingga dalam css masing-masing bisa ditulis dengan style terpisah, contoh:
</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-css" aria-hidden="true"></i>
        <span>CSS</span>
      </div>
     <!-- <div class="icard-bar-right pull-right">
        <span>Example</span>
      </div> -->
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-css"><code data-language="css" class=" language-css"><span class="token comment">/* style untuk box */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token property">padding</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* style untuk hijau */</span>
<span class="token selector">.hijau</span> <span class="token punctuation">{</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> lightgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>
</pre>
  </div>
</div>
</section>

<!-- Article Aside -->

<!-- Browser Support -->
<aside id="browser">
<h3 class="title-sub bd-danger bd-left bd-left-only">Browser Support <br>
  <small>Status &amp; Dukungan Browser </small>
</h3>
<p>Berikut adalah keterangan mengenai dukungan (support) dari beberapa browser.</p>
<div class="uk-overflow-container">
  <table class="table uk-table uk-table-striped uk-table-bordered uk-text-nowrap full-width">
        <thead>
          <tr>
            <th>CSS</th>
            <th title="Chrome"><i class="fa fa-chrome fa-lg"></i></th>
            <th title="Safari"><i class="fa fa-safari fa-lg"></i></th>
            <th title="Firefox"><i class="fa fa-firefox fa-lg"></i></th>
            <th title="Opera"><i class="fa fa-opera fa-lg"></i></th>
            <th title="Internet Explorer"><i class="fa fa-internet-explorer fa-lg"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>selector</td>
            <td>Chrome</td>
            <td>Safari</td>
            <td>Firefox</td>
            <td>Opera</td>
            <td>IE</td>
          </tr>
          <tr>
            <td><code>.class</code></td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
          </tr>
        </tbody>
  </table>
</div>
</aside>