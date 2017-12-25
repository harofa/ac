---
layout: post
title: "CSS indeterminate Selector"
short_title: "indeterminate"
language: id

metadata:
  description: "Belajar CSS indeterminate. Referensi, syntax dan contoh selektor indeterminate di dalam CSS. Panduan dan tutorial Bahasa Indonesia mengenai CSS indeterminate selector"

author: dul  

tag: [css, cssselector]
taxonomy:
  category: css
  tag: [css, cssselector]
images:
  figure: "posts/css-selector-indeterminate.png"
  thumb: "posts/thumbs/css-selector-indeterminate.png"
---
<p>
Jika diartikan kedalam Bahasa Indonesia, <em>indeterminate</em> artinya adalah <em>yang tidak menentukan</em>. Di dalam CSS, <code>:indeterminate</code> adalah CSS pseudo-class yang digunakan untuk merepresentasikan element &lt;input type="checkbox"&gt; yang mana property indeterminate tersebut dinyatakan <em>true</em> dengan kode javascript. Artinya, style akan berlaku jika di<em>checked</em> dan dideklarasikan <em>true</em> oleh javascript. <code>:indeterminate</code> digunakan oleh beberapa browser bersamaan dengan element &lt;progress&gt; untuk menentukaan keadaan <em>indeterminate (yang tidak menentukan).</em>
    </p>

<!-- Syntax  -->
<section id="syntax">
    <h3 class="title-sub bd-danger bd-left bd-left-only">Syntax <br>
    <small>Penggunaan Sintaksis CSS <code>indeterminate</code></small>
    </h3>
    <div class="icard">
      <div class="icard-body icode itheme">
    <pre class="prettyprint highlight max-height language-markup">    <code data-language="html" class="html  language-markup">:indeterminate {
Property: Value;  /* Deklarasi CSS */
}</code></pre>
      </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h3 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh CSS <code>indeterminate</code></small>
  </h3>
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
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Laki-laki Idaman<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Kaya tapi pelit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Ganteng tapi miskin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ya<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Udah kaya, gak pelit, ganteng lagi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
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
<pre class="prettyprint highlight max-height language-css"><code data-language="css" class=" language-css"><span class="token selector">input, span.ya</span> <span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">:indeterminate + span</span> <span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span> red
<span class="token punctuation">}</span></code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-rs2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-javascript" aria-hidden="true"></i>
        <span>JavaScript</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-javascript"><code data-language="javascript" class=" language-javascript">document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>indeterminate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>indeterminate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></code>
</pre>
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
        <a href="https://www.apacara.com/example/css/selector/indeterminate.html" target="_blank"><span>editor</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo CSS indeterminate selector - apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
      <span class="token selector">input, span.ya</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">:indeterminate + span</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red
      <span class="token punctuation">}</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Laki-laki Idaman<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Kaya tapi pelit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Ganteng tapi miskin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ya<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Udah kaya, gak pelit, ganteng lagi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
    document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>indeterminate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>indeterminate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

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
          <td><code>:indeterminate</code></td>
          <td>Chrome</td>
          <td>Safari</td>
          <td>Firefox</td>
          <td>Opera</td>
          <td>IE</td>
        </tr>
        <tr>
          <td>type="checkbox"</td>
          <td class="success">Ya</td>
          <td class="success">3.0</td>
          <td class="success">3.6 (1.9.2)</td>
          <td class="success">10.60 (2.6)</td>
          <td class="success">9.0</td>
        </tr>
        <tr>
          <td>&lt;progress&gt;</td>
          <td class="success">6.0</td>
          <td class="success">5.2</td>
          <td class="success">6.0 (6.0)</td>
          <td class="success">?</td>
          <td class="success">10</td>
        </tr>
        </tbody>
  </table>
</div>
</aside>