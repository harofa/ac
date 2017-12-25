---
layout: post
title: "CSS Type Selector"
short_title: "type selector"
language: id

metadata:
  description: "Belajar CSS type. Referensi, syntax dan contoh selektor type di dalam CSS. Panduan dan tutorial Bahasa Indonesia mengenai CSS type selector"

author: dul  

tag: [css, cssselector]
taxonomy:
  category: css
  tag: [css, cssselector]
images:
  figure: "posts/css-selector-type.png"
  thumb: "posts/thumbs/css-selector-type.png"
---
<p>
<em>Type Selector</em> digunakan untuk memberi style pada dokumen html berdasarkan tag / element tertentu, contoh: <code>p {color: green}</code> yang artinya, element <code>&lt;p&gt;...&lt;/p&gt;</code> akan memiliki teks berwarna hijau.
</p>

<p>Type selector terkadang disebut juga <em>element selector</em>.
<!-- Syntax  -->
<section id="syntax">
  <h3 class="title-sub bd-danger bd-left bd-left-only">Syntax <br>
<small>Penggunaan Sintaksis CSS Type Selector</small>
  </h3>
<div class="icode itheme syntax">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">Element</span> <span class="token punctuation">{</span>
<span class="token property">Property</span><span class="token punctuation">:</span> Value<span class="token punctuation">;</span>  <span class="token comment">/* Deklarasi CSS */</span>
<span class="token punctuation">}</span></code>
</pre>
</div>
</section>

<!-- Example -->
<section id="example">
<h3 class="title-sub bd-danger bd-left bd-left-only">Example<br>
  <small>Contoh CSS <code>type</code></small>
</h3>
<p>Contoh berikut, di dalam html terdapat dua element. Element pertama yaitu <code>&lt;h1&gt;...&lt;/h1&gt;</code> dan elemen kedua <code>&lt;section&gt;...&lt;/section&gt;</code> </p>
<div class="dul-block">
<!-- HTML Code -->
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
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Panduan CSS Type Selector<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>Ini adalah Section<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<p>Kemudian, didalam CSS, kita medeklarasikannya dengan nama element tersebut secara langsung.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-css" aria-hidden="true"></i>
        <span>CSS</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-css"><code data-language="css" class=" language-css"><span class="token selector">h1</span> <span class="token punctuation">{</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> Georgia, serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">section</span> <span class="token punctuation">{</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> Helvetica, Arial, sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>
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
        <a href="https://www.apacara.com/example/css/selector/type-selector.html" target="_blank"><span>editor</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Tutorial Type Selector Bahasa Indonesia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
    <span class="token selector">h2</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> tomato<span class="token punctuation">}</span>
    <span class="token selector">p</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">}</span>
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Tutorial Type Selector<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      Type Selector disebut juga <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>tag selector<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span> atau <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Element Selector<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> adalah selector paling sederhana untuk memberi style berdasarkan Element/tag tertentu.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<!-- Article Aside -->

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
          <td><code>selector</code></td>
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