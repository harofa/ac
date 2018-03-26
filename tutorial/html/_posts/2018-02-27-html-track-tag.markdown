---
layout: post
title: "HTML track tag | belajar &lt;track&gt; element"
short_title: "HTML &lt;track&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;track&gt; tag. Tutorial dan panduan mengenai element &lt;track&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;track&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-track-tag.png"
  thumb: "posts/thumbs/html-track-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML track tag</strong>. Tutorial dan panduan mengenai element <code>&lt;track&gt;</code> yang digunakan untuk menulis subtitle pada video dan tipe data lainnya untuk media element. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;track&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML</small>
</h2>
<p><strong>HTML <code>&lt;track&gt;</code> element</strong> digunakan untuk menampilkan teks berdasarkan waktu putar media (audio maupun video) atau tepatnya adalah <em lang="en">timed text tracks</em>. <code>&lt;track&gt;</code> tag ditulis di dalam media element, seperti <code>&lt;audio&gt;</code> dan <code>&lt;video&gt;</code>.</p>
<p><em>Track</em> dapat diartikan dengan sebuah <em>jejak</em>. Kita dapat mengatur jejak teks yang ingin ditampilkan pada sebuah media, ketika media tersebut diputar (dimainkan) berdasarkan durasi (Jam, menit, dan detik) waktu putar media tersebut.</p>
<p>Istilah <strong>track</strong> mungkin kita dapat memahaminya, ketika kita menonton video karaoke. Syair dalam sebuah video karaoke, akan muncul di layar pada waktu tertentu sesuai dengan vokal yang disuarakan oleh penyanyi. Ini, dinamakan juga <em>subtitle</em>. Teks yang muncul tersebut, dapat dikatakan sebuah teks track. Dalam HTML, Teks track ditulis pada sebuah file terpisah dengan format "<code>.vvt</code>" (WebVVT).</p>
<p>Dalam sebuah media element (<code>&lt;audio&gt;</code> dan <code>&lt;video&gt;</code>) dapat ditulis lebih dari satu <code>&lt;track&gt;</code> element. Akan tetapi, masing-masing element tersebut tidak boleh memiliki attribute <code>kind</code>, <code>srclang</code> dan <code>label</code> dengan konten value yang sama.</p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;track&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">default</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan bahwa track ini harus diberlakukan jika tidak ada pilihan lain yang tepat untuk user. Attribute ini hanya boleh ditulis satu kali dalam sebuah elemen &lt;track&gt; per media (audio atau video).</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code><i>default</i></code></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">kind</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan jenis track. Teks track yang ditulis dalam <code>.vtt</code> file dapat berisi beragam jenis konten, diantaranya adalah <code>captions</code> (judul), <code>chapters</code> (bab), <code>descriptions</code> (penjelasan), <code>metadata</code> dan <code>subtitles</code> (judul tambahan). </p>
      <ul>
        <li><strong>captions</strong> <br>
          Transkripsi atau terjemahan sebuah dialog, efek suara, isyarat musik terkait atau terjemahan audio dan informasi audio lainnya yang berkaitan. Tepatnya digunakan ketika track suara tidak tersedia.</li>
        <li><strong>chapters</strong> <br>
          Judul bab, digunakan dengan maksud untuk navigasi sumber media.</li>
        <li><strong>descriptions</strong> <br>
          Penjelasan tekstual dari konten video, ditujukan untuk audio sintesis, tepatnya untuk seorang tunanetra (buta) yang mana video tidak dapat ditonton.</li>
        <li><strong>metadata</strong> <br>
          Track yang digunakan oleh script, tidak nampak secara visual.</li>
        <li><strong>subtitles</strong> <br>
          Transkripsi atau terjemahan sebuah dialog. Tepatnya digunakan ketika suara (audio) terdengar tetapi tidak jelas.

        </li>

      </ul>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i><code>captions</code> | <code>chapters</code> | <code>descriptions</code> | <code>metadata</code> | <code>subtitles</code></i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">label</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukan (melabeli) judul untuk teks track. Contohnya, melabeli subtitle "Bahasa Indonesia" atau "English" yang dapat dipilih user sesuai keinginan.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>teks</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">src</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukan URL dari file track (.vtt file).</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>URL</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">srclang</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukan kode bahasa yang menunjukkan bahasa yang digunakan pada teks track. Kode bahasa yang digunakan harus valid <a href="https://r12a.github.io/app-subtags/" target="_blank" rel="nofollow" class="external">BCP 47</a>. Jika attribute <code>kind</code> yang digunakan pada &lt;track&gt; element adalah <code>subtitles</code>, maka attribute <code>srclang</code> wajib ditulis.</p>
      <!-- contoh -->
      <p>Contoh:</p><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>track</span> <span class="token attr-name">kind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>subtitles<span class="token punctuation">"</span></span> <span class="token attr-name">srclang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>subtitle-indo.vtt<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
      <p>
      "<code>id</code>" adalah kode untuk "Bahasa Indonesia".
      </p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>kode bahasa (language code)</i></p>
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
        <p>&lt;track&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
        <p>&lt;track&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;track&gt;</code> element</small>
  </h2>
  <div class="dul-block">
<!-- HTML Code Example -->
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>320<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>halwa.mp4<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>video/mp4; codecs<span class="token punctuation">=</span><span class="token punctuation">"</span>avc1.42E01E, mp4a.40.2<span class="token punctuation">"</span><span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>halwa.ogv<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>video/ogg; codecs<span class="token punctuation">=</span><span class="token punctuation">"</span>theora, vorbis<span class="token punctuation">"</span><span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>halwa.webm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>video/webm; codecs<span class="token punctuation">=</span><span class="token punctuation">"</span>vp8, vorbis<span class="token punctuation">"</span><span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>track</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Indonesian<span class="token punctuation">"</span></span> <span class="token attr-name">kind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>subtitles<span class="token punctuation">"</span></span> <span class="token attr-name">srclang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>subtitles-id.vtt<span class="token punctuation">"</span></span> <span class="token attr-name">default</span><span class="token punctuation">&gt;</span></span>
  Browser Anda tidak mendukung HTML video tag.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
<p><code>"subtitles-id.vtt"</code> adalah file webVTT yang dibuat untuk menulis format teks track atau <em>cues</em> dan sebagainya. Contohnya, adalah sebagai berikut:</p>
<div class="icode itheme" data-code="webVTT">
<pre class="prettyprint linenums line-numbers highlight language-none"><code class=" language-none">WEBVTT FILE

1
00:00:00.500 --&gt; 00:00:04.000
ih.... (ini contoh subtitle menggunakan .vvt)

2
00:00:04.500 --&gt; 00:00:06.300
ih.. ih.. A-ba-ta-tsa nih...!

3
00:00:07.000 --&gt; 00:00:09.000
kok! A-ba-ta-tsa...<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
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
        <a href="https://www.apacara.com/example/html/tag/track.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML track tag by:apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> verdana, sans-serif<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>2em auto<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span><span class="token property">margin-top</span><span class="token punctuation">:</span>3em<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token selector">video</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-box-reflect</span><span class="token punctuation">:</span> below 3px <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>top, transparent, transparent 80%, <span class="token function">rgba</span><span class="token punctuation">(</span>255,255,255,0.2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">::cue</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> verdana, sans-serif<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.1em<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 0 3px #000<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>320<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>https://www.apacara.com/media/video/halwa.mp4<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>video/mp4; codecs<span class="token punctuation">=</span><span class="token punctuation">"</span>avc1.42E01E, mp4a.40.2<span class="token punctuation">"</span><span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>https://www.apacara.com/media/video/halwa.ogv<span class="token punctuation">'</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>video/ogg; codecs<span class="token punctuation">=</span><span class="token punctuation">"</span>theora, vorbis<span class="token punctuation">"</span><span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/video/halwa.webm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>video/webm; codecs<span class="token punctuation">=</span><span class="token punctuation">"</span>vp8, vorbis<span class="token punctuation">"</span><span class="token punctuation">'</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>track</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>English<span class="token punctuation">"</span></span> <span class="token attr-name">kind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>subtitles<span class="token punctuation">"</span></span> <span class="token attr-name">srclang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span>
                                          <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/video/subtitles-en.vtt<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>track</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Indonesian<span class="token punctuation">"</span></span> <span class="token attr-name">kind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>subtitles<span class="token punctuation">"</span></span> <span class="token attr-name">srclang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>
                                             <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/video/subtitles-id.vtt<span class="token punctuation">"</span></span> <span class="token attr-name">default</span><span class="token punctuation">&gt;</span></span>
  Browser Anda tidak mendukung HTML video tag.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Contoh yang ini menggunakan dua <span class="token entity" title="<">&amp;lt;</span>track<span class="token entity" title=">">&amp;gt;</span> element dengan dua subtitle, Bahasa Indonesia dan Bahasa Inggris dengan sedikit tambahan CSS styles. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Perhatian<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>: Jika subtitle tidak muncul, kemungkinan browser tidak support track element.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
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
            <td><code>&lt;track&gt;</code></td>
            <td class="success">23</td>
            <td class="success">6</td>
            <td class="success">31.0</td>
            <td class="success">12.10</td>
            <td class="success">10</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;track&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>
</aside>