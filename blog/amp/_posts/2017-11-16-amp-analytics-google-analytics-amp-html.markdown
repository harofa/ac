---
layout: post
title: "amp-analytics - Google Analytics AMP HTML"
language: id

metadata:
  description: "Bagaimana menggunakan Google Analytics pada dokumen AMP HTML. Setup mudah dari awal hingga akhir tutorial belajar memasang dan menggunakan amp-analytics"

tag: [amp,ampelement]
taxonomy:
  category: amp
  tag: [amp,ampelement]
images:
  figure: "amp-analytics.jpg"
  thumb: "amp-analytics.jpg"

dateCreated: "2017-11-01T00:00:00+07:00"
datePublished: "2017-11-01T00:00:00+07:00"
---
<p>Sebuah website atau blog yang dikelola dengan baik dan sungguh-sungguh pasti butuh analisa untuk mengetahui seberapa banyak pengunjung yang singgah ke website kita, halaman apa saja yang paling banyak dikunjungi, halaman apa yang minim pengunjung dan lain sebagainya. Semua ini, butuh <em>tool</em> atau <em>widget</em> yang biasanya didapat dari pihak ketiga yang menangani pekerjaan itu dengan baik. Salah satu yang banyak digunakan adalah <em>Google analytics</em>.</p>

<h2 class="title-sub bd-primary bd-left bd-left-only">Cara Penggunaan
<br><small>amp-analytics dengan Google Analytics (GA)</small>
</h2>
<p><strong>Langkah Pertama</strong>. Hal yang paling pokok untuk dapat menggunakan <code>amp-analytics</code> adalah menyisipkan script berikut sebelum penutup &lt;/head&gt; tag pada template blog atau website Anda:</p>
<div class="icard">
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight language-markup"><code class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">custom-element</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>amp-analytics<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.ampproject.org/v0/amp-analytics-0.1.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<p><code>amp-analytics</code> sebenarnya tidak hanya dapat digunakan dengan <em>Google Analytics</em>, tetapi juga masih banyak pihak ketiga lainnya yang support. Pada tutorial ini hanya fokus bagaimana mengintegrasikan Google Analytics pada halaman web AMP.</p>

<p><strong>Langkah Kedua</strong>, Login sebagai admin ke web <a href="https://analytics.google.com/" target="_blank" rel="nofollow">Google Analytics</a>. Kemudian cari menu <strong>Admin</strong> Klik pada <strong>Property</strong>, pada pilihan <em>dropdown</em> klik <strong>Create New Property</strong>. Ini dilakukan jika sebelumnya Anda belum pernah memiliki property id untuk domain yang ingin didaftarkan.</p>

<p>Setelah berhasil membuat property id tersebut, Anda akan memperoleh <em>tracking ID</em> dengan format seperti berikut:</p>
<p><strong>UA-XXXXX-Y</strong></p>

<p>Simpan kode tersebut yang nantinya akan digunakan pada panduan berikutnya.</p>
<p><strong>Langkah Ketiga</strong>, gunakan contoh kode dibawah ini, ganti <em>UA-XXXXX-Y</em> dengan kode yang telah di dapatkan pada panduan langkah pertama diatas. Berikut kodenya:</p>
<div class="icard">
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight language-markup"><code class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-analytics</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>googleanalytics<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>application/json<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token punctuation">{</span>
<span class="token string">"vars"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
<span class="token string">"account"</span><span class="token punctuation">:</span> <span class="token string">"UA-XXXXX-Y"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string">"triggers"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
<span class="token string">"trackPageview"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
<span class="token string">"on"</span><span class="token punctuation">:</span> <span class="token string">"visible"</span><span class="token punctuation">,</span>
<span class="token string">"request"</span><span class="token punctuation">:</span> <span class="token string">"pageview"</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-analytics</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<p>Letakkan kode diatas setelah &lt;body&gt; tag pada template blog/website Anda. Tepatnya, langsung setelah tag pembuka &lt;body&gt; lihat contoh lengkapnya dibawah ini.</p>
<p>Kode diatas adalah contoh paling sederhana untuk <em>tracking</em> jumlah <em>viewer</em> masing-masing halaman web.</p>
<p>Contoh lengkap dan full valid AMP HTML yang bisa dijadikan panduan menggunakan <code>amp-analytics</code> adalah sebagai berikut:</p>
<div class="icard">
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-markup"><code class="inline  language-markup"><span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">amp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>amp<span class="token punctuation">"</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>canonical<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/embed/<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>amp-analytics example - apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Halwa RF<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>publisher<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://plus.google.com/+HalwaRF<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width,minimum-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">amp-boilerplate</span><span class="token punctuation">&gt;</span></span><span class="token style language-css"><span class="token selector">body</span><span class="token punctuation">{</span><span class="token property">-webkit-animation</span><span class="token punctuation">:</span>-amp-start 8s <span class="token function">steps</span><span class="token punctuation">(</span>1,end<span class="token punctuation">)</span> 0s 1 normal both<span class="token punctuation">;</span><span class="token property">-moz-animation</span><span class="token punctuation">:</span>-amp-start 8s <span class="token function">steps</span><span class="token punctuation">(</span>1,end<span class="token punctuation">)</span> 0s 1 normal both<span class="token punctuation">;</span><span class="token property">-ms-animation</span><span class="token punctuation">:</span>-amp-start 8s <span class="token function">steps</span><span class="token punctuation">(</span>1,end<span class="token punctuation">)</span> 0s 1 normal both<span class="token punctuation">;</span><span class="token property">animation</span><span class="token punctuation">:</span>-amp-start 8s <span class="token function">steps</span><span class="token punctuation">(</span>1,end<span class="token punctuation">)</span> 0s 1 normal both<span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@-webkit-keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@-moz-keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@-ms-keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@-o-keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token atrule"><span class="token rule">@keyframes</span> -amp-start</span><span class="token punctuation">{</span><span class="token selector">from</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">}</span><span class="token selector">to</span><span class="token punctuation">{</span><span class="token property">visibility</span><span class="token punctuation">:</span>visible<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">amp-boilerplate</span><span class="token punctuation">&gt;</span></span><span class="token style language-css"><span class="token selector">body</span><span class="token punctuation">{</span><span class="token property">-webkit-animation</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">-moz-animation</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">-ms-animation</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">animation</span><span class="token punctuation">:</span>none<span class="token punctuation">}</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.ampproject.org/v0.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">custom-element</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>amp-analytics<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://cdn.ampproject.org/v0/amp-analytics-0.1.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">amp-custom</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-analytics</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>googleanalytics<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>application/json<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
  <span class="token punctuation">{</span>
  <span class="token string">"vars"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token string">"account"</span><span class="token punctuation">:</span> <span class="token string">"UA-99999999-4"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"triggers"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token string">"trackPageview"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token string">"on"</span><span class="token punctuation">:</span> <span class="token string">"visible"</span><span class="token punctuation">,</span>
  <span class="token string">"request"</span><span class="token punctuation">:</span> <span class="token string">"pageview"</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-analytics</span><span class="token punctuation">&gt;</span></span>

KONTEN WEB SITE DISINI
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>

<!-- HR =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<hr>
<!-- *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->

<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix bg-pi3">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-blogger" aria-hidden="true"></i>
       <span>Blogger Zone</span>
      </div>
    </div>
  </div>

  <div class="icard-body icode itheme">
    <p>Jika Anda menggunakan blogger blogspot, mungkin kode-nya harus di-<em>escape</em> sebagai berikut:</p>
<!-- icard -->
<div class="icard">
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight language-markup"><code class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-analytics</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>analytics1<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>googleanalytics<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>application/json<span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token punctuation">{</span>
  <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>vars<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>account<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">:</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>UA<span class="token number">-99999999</span><span class="token operator">-</span><span class="token number">4</span><span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>triggers<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>defaultPageview<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>on<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">:</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>visible<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">,</span>
      <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>request<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span><span class="token punctuation">:</span> <span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>pageview<span class="token operator">&amp;</span>quot<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-analytics</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
  <div class="icard-footer clearfix bg-gr2 icode itheme">
<!-- icard -->

  </div>
</div>

<p><strong>Ingat</strong>, <em>UA-99999999-4</em> adalah contoh property id. Pada kenyataannya, harus diganti dengan property id milik Anda.</p>

<p>Selain kita dapat track <em>page views</em> (halaman dilihat) kita juga dapat melacak <em>events</em> atau peristiwa yang didapat dari interaksi user (pengunjung). Selengkapnya dapat dilihat pada dokumentasi resmi atau sumber yang kami berikan dibawah ini.</p>

<h3>Additional Information and Resources</h3>
<div class="sources bg-gr3 bordered p-space-v">
  <ul>
    <li><a rel="nofollow" href="https://www.ampproject.org/docs/reference/components/amp-analytics" target="_blank" class="text-muted">https://www.ampproject.org/docs/reference/components/amp-analytics</a></li>
    <li><a rel="nofollow" href="https://ampbyexample.com/components/amp-analytics/" target="_blank" class="text-muted">https://ampbyexample.com/components/amp-analytics/</a></li>
    <li><a rel="nofollow" href="https://developers.google.com/analytics/devguides/collection/amp-analytics/" target="_blank" class="text-muted">https://developers.google.com/analytics/devguides/collection/amp-analytics/</a></li>
  </ul>
</div>