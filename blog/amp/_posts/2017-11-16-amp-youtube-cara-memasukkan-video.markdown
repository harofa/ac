---
layout: post
title: "amp-youtube - Cara Memasukkan Video Youtube ke AMP HTML"
language: id

metadata:
  description: "amp-youtube tutorial. Bagaimana Memasukkan video youtube ke halaman AMP atau postingan blogger dengan template AMP HTML yang benar dan valid"

tag: [amp,ampelement]
taxonomy:
  category: amp
  tag: [amp,ampelement]  
images:
  figure: "amp-youtube.png"
  thumb: "amp-youtube.png"

dateCreated: "2017-10-31T00:00:00+07:00"
datePublished: "2017-10-31T00:00:00+07:00"
---
<p>Tutorial yang akan Anda pelajari dibawah ini, mengenai bagaimana menyisipkan (<em>embed</em>) video youtube ke dalam AMP HTML, atau lebih jelasnya, bagaimana posting video youtube di blogger atau wordpress dengan tema atau template AMP.</p>
<h2 class="title-sub bd-primary bd-left bd-left-only">Quick Example
<br /><small>Contoh</small>
</h2>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/amp-element/amp-youtube.html" target="_blank" rel="nofollow"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-youtube</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>480<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>270<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">data-videoid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>W70wivX4liU<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-youtube</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<!-- HR =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<hr />
<!-- *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<h2 class="title-sub bd-primary bd-left bd-left-only">Setup
<br /><small>Cara Penggunaan</small>
</h2>

<p>Langkah <strong>Pertama</strong> adalah menyisipkan script <code>amp-youtube</code>:</p>
<div class="icard">
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight language-markup"><code class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">custom-element</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>amp-youtube<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.ampproject.org/v0/amp-youtube-0.1.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<p>Script element tersebut diletakkan pada template atau tema blog Anda, tepatnya diantara &lt;head&gt; dan &lt;/head&gt; tag.</p>
<p>Langkah <strong>Kedua</strong>, tentunya mencari video yang ingin Anda posting dari <a target="_blank" rel="nofollow" href="https://www.youtube.com/halwarf">youtube.com</a>. kemudian cari <code>data-videoid</code> di URL video yang Anda cari tersebut. <code>data-videoid</code> dapat dilihat pada contoh gambar berikut:</p>
<amp-img alt="amp-youtube-data-videoid" layout="responsive" width="650" height="470"  tabindex="0" src="https://4.bp.blogspot.com/-TERpXH1p38M/WffoPVv4O6I/AAAAAAAAA_c/l2Ve4SvUUc8joj7L5DbkQtyCDK1kj3_WwCLcBGAs/s1600/amp-youtube-data-videoid.png" ><noscript><div class="img-responsive"><img src="https://4.bp.blogspot.com/-TERpXH1p38M/WffoPVv4O6I/AAAAAAAAA_c/l2Ve4SvUUc8joj7L5DbkQtyCDK1kj3_WwCLcBGAs/s1600/amp-youtube-data-videoid.png" alt="" /></div></noscript></amp-img>
<p>Pada contoh gambar tersebut, <em>data-videoid</em>-nya adalah: <code>wT21mmFrCdQ</code>, <em>data-videoid</em> ini, diperlukan untuk mengisi nilai <code>data-videoid</code> attribute didalam <code>amp-youtube</code>.</p>
<p>Langkah <strong>Ketiga</strong>, menyisipkan element <code>&lt;amp-youtube&gt;...&lt;/amp-youtube&gt;</code> dengan contoh di bawah ini:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject" aria-hidden="true"></i>
        <span>AMP</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-youtube</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>480<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>270<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">data-videoid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>DATA_VIDEO_ID_YOUTUBE<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-youtube</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<p>Dari kode diatas, Isi <strong>DATA_VIDEO_ID_YOUTUBE</strong> dengan <code>data-videoid</code> yang telah dijelaskan pada langkah kedua di atas.</p>

<p>Contoh lengkap dan valid AMP HTML dapat Anda lihat sebagai berikut:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/amp-element/amp-youtube.html" target="_blank" rel="nofollow"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">amp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>amp<span class="token punctuation">"</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>canonical<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/example/amp/amp-element/amp-youtube.html<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>amp-youtube demo example - apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Halwa RF, Fadlullah Fadul<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>publisher<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://plus.google.com/+HalwaRF<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width,minimum-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">amp-boilerplate</span><span class="token punctuation">&gt;</span></span><span class="token style language-css"><span class="token selector">body</span><span class="token punctuation">{</span><span class="token property">-webkit-animation</span><span class="token punctuation">:</span>-amp-start 8s <span class="token function">steps</span><span class="token punctuation">(</span>1,end<span class="token punctuation">)</span> 0s 1 normal both<span class="token punctuation">;</span><span class="token property">-moz-animation</span><span class="token punctuation">:</span>-amp-start 8s <span class="token function">steps</span><span class="token punctuation">(</span>1,end<span class="token punctuation">)</span> 0s 1 normal both<span class="token punctuation">;</span><span class="token property">-ms-animation</span><span class="token punctuation">:</span>-amp-start 8s <span class="token function">steps</span><span class="token punctuation">(</span>1,end<span class="token punctuation">)</span> 0s 1 normal both<span class="token punctuation">;</span><span class="token property">animation</span><span class="token punctuation">:</span>-amp-start 8s <span class="token function">steps</span><span class="token punctuation">(</span>1,end<span class="token punctuation">)</span> 0s 1 normal both<span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@-moz-keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@-ms-keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@-o-keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">amp-boilerplate</span><span class="token punctuation">&gt;</span></span><span class="token style language-css"><span class="token selector">body</span><span class="token punctuation">{</span><span class="token property">-webkit-animation</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">-moz-animation</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">-ms-animation</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">animation</span><span class="token punctuation">:</span>none<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">amp-custom</span><span class="token punctuation">&gt;</span></span><span class="token style language-css"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.ampproject.org/v0.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">custom-element</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>amp-youtube<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.ampproject.org/v0/amp-youtube-0.1.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-youtube</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>480<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>270<span class="token punctuation">"</span></span>
    <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-videoid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>W70wivX4liU<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-youtube</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<h2 class="title-sub bd-primary bd-left bd-left-only">Autoplay
<br /><small>Diputar Otomatis</small>
</h2>

<p>Kita bisa men-set video agar diputar langsung (otomatis) ketika layar browser mengarah ke video yang bersangkutan (layar digulir (scrolled)).</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/amp-element/amp-youtube-autoplay.html" target="_blank" rel="nofollow"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-youtube</span> <span class="token attr-name">autoplay</span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>480<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>270<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">data-videoid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wT21mmFrCdQ<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-youtube</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<h3>Additional Information and Resources</h3>
<div class="sources bg-gr3 bordered p-space-v">
  <ul>
    <li><a rel="nofollow" href="https://www.ampproject.org/docs/reference/components/amp-youtube" target="_blank" class="text-muted">https://www.ampproject.org/docs/reference/components/amp-youtube</a></li>
    <li><a rel="nofollow" href="https://ampbyexample.com/components/amp-youtube/" target="_blank" class="text-muted">https://ampbyexample.com/components/amp-youtube/</a></li>
  </ul>
</div>