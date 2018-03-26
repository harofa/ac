---
layout: post
title: "CSS id Selector"
short_title: "id"
language: id

metadata:
  description: "Belajar CSS id. Referensi, syntax dan contoh selektor id di dalam CSS. Panduan dan tutorial Bahasa Indonesia mengenai CSS id selector"

author: dul

tag: [css, cssselector]
taxonomy:
  category: css
  tag: [css, cssselector]
images:
  figure: "posts/css-selector-id.png"
  thumb: "posts/thumbs/css-selector-id.png"
---
<p class="lead">
ID Selector digunakan untuk menyeleksi elemen berdasarkan ID tertentu. Dalam penggunaannya, ID selector diawali dengan tanda pagar (#) atau <em>hash</em>. Contoh di dalam css: <code>#intro {color: blue}</code>. Contoh tersebut menyeleksi element yang memiliki attribute ID dengan value "intro" agar tulisannya berwarna biru dan didalam html, kita sisipkan attribute: <code>id="intro"</code>. Misalkan, kita ingin menyisipkannya pada sebuah elemen <code>&lt;p&gt;</code> maka, kita bisa menulis markup <code>&lt;p id="intro"&gt;...&lt;/p&gt;</code>.
</p>
<hr />
<p>Harap diperhatikan, dalam sebuah halaman atau dokumen tidak boleh terdapat lebih dari satu <em>id</em> dengan value yang sama. Artinya, nilai (value) dari sebuah <em>id</em> harus unik dan tidak boleh dideklarasikan lebih dari satu. Apabila sudah disisipkan pada elemen tertentu maka tidak boleh disisipkan pada elemen yang lain dalam satu halaman. </p>
<p>Dalam penamaan ID tidak boleh menggunakan angka pada awal nama ID, contoh <em>salah</em>: <code>id="3intro"</code>  tetapi, yang <em>benar</em> adalah: <code>id="intro3"</code> atau <code>id="intro3-teks"</code> (angka diakhir kata atau ditengah-tengah adalah benar.)
</p>
<p>ID Selector bersifat <em>Case-Sensitive</em>. <code>id="intro"</code> berbeda dengan <code>id="inTro"</code> karena perbedaan huruf <em>t</em> kecil dengan huruf <em>T</em> besar.</p>

<!-- Syntax  -->
<section id="syntax">
    <h3 class="title-sub bd-danger bd-left bd-left-only">Syntax <br>
    <small>Penggunaan Sintaksis CSS <code>id</code></small>
    </h3>
<div class="icard">
  <div class="icard-heading clearfix bg-default">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-code" aria-hidden="true"></i>
        <span>SYNTAX</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup">#ID {
Property: Value;  /* Deklarasi CSS */
}</code>
</pre>
  </div>
</div>
</section>

<!-- Example -->
<section id="example">
  <h3 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh CSS <code>id</code></small>
  </h3>
  <div class="dul-block">
<p>Di dalam HTML tag, kita menuliskan <code>id</code>, kemudian tanda sama dengan (<code>=</code>) dan diikuti nama id apa saja yang kita tentukkan yang diapit dengan tanda kutip (<code>""</code>). Contoh pada html tag: <code>&lt;article&gt;</code> </p>
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
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  Artikel Belajar CSS ID Selector
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<p>Kemudian didalam CSS, kita medeklarasikannya dengan tanda pagar (#) kemudian diikuti dengan nama id yang kita tentukkan pada HTML element tersebut.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-css" aria-hidden="true"></i>
        <span>CSS</span>
      </div>
     <!--  -->
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-css"><code data-language="css" class=" language-css"><span class="token selector">#content</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial, sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>
</pre>
  </div>
</div>
  </div>
  <p>Kode diatas dapat dilihat hasilnya pada contoh lengkap <i>demo editor</i> dibawah ini:</p>
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
        <a href="https://www.apacara.com/example/css/selector/id.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Tutorial CSS ID, Bahasa Indonesia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
      <span class="token selector">#content</span> <span class="token punctuation">{</span>
          <span class="token property">font-family</span><span class="token punctuation">:</span> Arial, sans-serif<span class="token punctuation">;</span>
          <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
          <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
           Artikel Belajar CSS ID Selector
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>

<p>ID selector, bisa juga digunakan sebagai jalan pintas menuju elemen atau bagian tertentu. Digunakan sebagai link yang  apabila diklik, maka akan menuju ke ID yang sebelumnya telah ditentukan. Ini, dilakukan sepenuhnya oleh HTML tanpa kode CSS.</p>
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
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token comment">&lt;!-- link/elemen yang digunakan sebagai jalan pintas --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#artikel<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Menuju Artikel ID Selector Bahasa Indonesia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- elemen yang ingin dituju --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>artikel<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Ini adalah Artikel ID Selector Bahasa Indonesia yang memiliki ID "artikel". Apa itu ID Selector? ID Selector adalah CSS Selector yang digunakan untuk menyeleksi element yang memiliki attribut ID dengan nilai (value) tertentu. Satu halaman hanya berlaku satu ID unik.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<!-- Browser Support -->
<aside id="browser">
<h3 class="title-sub bd-danger bd-left bd-left-only">Browser Support <br>
  <small>Status &amp; Dukungan Browser </small>
</h3>
<p>Berikut adalah keterangan mengenai dukungan (support) dari beberapa browser.</p>
<div class="table-responsive uk-overflow-container">
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
            <td><code>#id</code></td>
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