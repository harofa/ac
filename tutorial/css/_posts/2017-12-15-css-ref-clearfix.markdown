---
layout: post
title: "CSS Clearfix"
short_title: "CSS clearfix"
language: id

metadata:
  description: "Belajar CSS clearfix. Referensi, penggunaan dan penjelasan clearfix di dalam CSS. Panduan, tutorial CSS clearfix Bahasa Indonesia"

author: dul

tag: [css, cssref]
taxonomy:
  category: css
  tag: [css, cssref]
images:
  figure: "posts/css-ref-clearfix.png"
  thumb: "posts/thumbs/css-ref-clearfix.png"
---
<p>
Clearfix adalah cara praktis yang digunakan untuk <a href="https://www.apacara.com/tutorial/css/css-property-clear.html">clear</a> element yang sebelumnya mengalami <a href="https://www.apacara.com/tutorial/css/css-property-float.html">float</a>. Clearfix, biasanya digunakan sebagai nama class. Sehingga, kita bisa memanggil ulang kode tersebut dengan nama class di dalam markup.</p>
<p>
Clearfix sebenarnya metode lama dalam design layout CSS. Akan tetapi dalam kasus tertentu, teknik ini masih tetap digunakan oleh para web designer. Adapun teknik layout lain yang lebih fleksibel semacam ini, yaitu dengan CSS Flex (Flexbox). Silahkan pelajari selengkapnya mengenai <a href="https://www.apacara.com/tutorial/css/css-ref-flexbox.html">Belajar CSS Flexbox</a>.</p>

<p>Ada banyak metode <em>clearfix</em> yang bisa Anda gunakan. Berikut kami sediakan dua cara yang sering digunakan.</p>
<section id="example">
        <h3 class="title-sub bd-danger bd-left bd-left-only">Example 1<br>
        <small>Contoh CSS <code>clearfix</code></small>
        </h3>
<!-- Contoh kode CSS-->
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
<pre class="prettyprint highlight max-height language-css"><code data-language="css" class=" language-css"><span class="token selector">.clearfix:before, .clearfix:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
    *<span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>
</pre>
  </div>
</div>
</section>
<section id="example2">
        <h3 class="title-sub bd-danger bd-left bd-left-only">Example 2<br>
        <small>Contoh CSS <code>clearfix</code> metode lainnya</small>
        </h3>
        <div class="dul-block">
<!-- Contoh kode CSS-->
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
<pre class="prettyprint highlight max-height language-css"><code data-language="css" class=" language-css"><span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" "</span><span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token selector">* html .clearfix</span>             <span class="token punctuation">{</span> <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">/* IE6 */</span>
<span class="token selector">*:first-child+html .clearfix</span> <span class="token punctuation">{</span> <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">/* IE7 */</span></code>
</pre>
  </div>
</div>
<p>
  Untuk penggunaannya, Anda bisa melihat pada Contoh Sekaligus Editor yang kami sediakan di bawah ini. Silahkan Anda bereksplorasi. Gunakan salah satu dari dua cara diatas.
</p>
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
        <a href="https://www.apacara.com/example/css/ref/clearfix.html" target="_blank"><span>editor</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Contoh metode CSS clearfix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Belajar Web Design<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
      <span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">-moz-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
      <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">aside, article, section, header, footer, nav</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #FFF<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
      <span class="token property">font</span><span class="token punctuation">:</span> normal 14px Arial, Helvetica, sans-serif<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">header</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0,160,210, 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">header p</span> <span class="token punctuation">{</span>
      <span class="token property">font</span><span class="token punctuation">:</span> 110% Georgia, <span class="token string">"Times New Roman"</span>, Times, serif<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
      <span class="token property">letter-spacing</span><span class="token punctuation">:</span>.1em<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.container</span> <span class="token punctuation">{</span>
      <span class="token property">max-width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> .3em auto .3em<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>140,10,145, 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> .3em<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 1px 3px tomato, -1px -1px 3px tomato<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">#content</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #FFF<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5
      <span class="token punctuation">}</span>
      <span class="token selector">#sidebar</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #E0EFF1<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
      <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">footer</span> <span class="token punctuation">{</span>
      <span class="token property">max-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>30,70,165, .5<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0 2em<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">/* CLearfix */</span>
      <span class="token selector">.clearfix:before, .clearfix:after</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.clearfix:after</span> <span class="token punctuation">{</span>
      <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
      *<span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container clearfix<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Contoh CSS Clearfix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
        Ini adalah contoh design web dengan CSS float dan metode clearfix.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
        Cobalah hapus blok kode clearfix pada tab CSS, dan lihatlah perbedaannya .
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>float: left;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sidebar<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span>
    ini adalah sidebar dengan <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>float: right;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
    Elemen ini sudah normal, sebelumnya sudah clear  dengan metode clearfix. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">&gt;</span></span>Copyright&copy; 2016.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>