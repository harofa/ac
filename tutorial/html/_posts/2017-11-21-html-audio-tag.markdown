---
layout: post
title: "HTML audio tag | belajar &lt;audio&gt; element"
short_title: "HTML &lt;audio&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;audio&gt; tag. Tutorial dan panduan mengenai element &lt;audio&gt;...&lt;/audio&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;audio&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-audio-tag.png"
  thumb: "posts/thumbs/html-audio-tag.png"
---
<p class="text-muted">
  Referensi Belajar <strong>HTML audio tag</strong>. Tutorial dan panduan mengenai element <code>&lt;audio&gt;...&lt;/audio&gt;</code>. Bagaimana memutar file audio seperti MP3, OGG dan WAV di dalam browser. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;audio&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
  <small>Penjelasan HTML <span class="highlight">audio</span></small>
</h2>
<p>
HTML <code>audio</code> element menunjukkan sebuah sound atau audio yang dapat disisipkan pada halaman web dan diputar untuk didengarkan.
</p>
<p>Modern browser mendukung beberapa format file audio diantaranya: mp3, ogg dan wav.</p>
<p>Konten lain (seperti teks) dapat disisipkan untuk browser yang tidak mendukung HTML5 audio, dan apabila audio file tidak dapat diputar, maka konten ini akan muncul sebagai gantinya (<em>fallback</em>).</p>
<hr class="uk-article-divider">

<section>
<h2 class="title-sub bd-danger bd-left bd-left-only">Media Formats <br>
  <small>Tipe Media untuk HMTL audio element</small>
</h2>
<div class="table-responsive uk-overflow-container">
<table class="table uk-table uk-text-nowrap full-width">
  <thead>
    <tr>
      <th>Format</th>
      <th>Penjelasan</th>
      <th>Extensi File</th>
      <th>MIME Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MP3</td>
      <td>MP3 adalah MPEG-1 atau MPEG-2 Audio Layer III, merupakan format audio paling terkenal yang menggunakan format <em>lossy data compression</em>.</td>
      <td>.mp3</td>
      <td>audio/mp3</td>
    </tr>
    <tr>
      <td>Ogg Vorbis</td>
      <td>Format free, open standar yang menyuguhkan kualitas audio lebih baik dari MP3.</td>
      <td>.ogg</td>
      <td>audio/ogg</td>
    </tr>
    <tr>
      <td>WAV</td>
      <td>Format original untuk <em>raw digital audio</em>. Format WAV tidak menggunakan metode kompresi file sehingga ukurannya lebih besar dari format lainnya.</td>
      <td>.wav</td>
      <td>audio/wav</td>
    </tr>
  </tbody>
</table>
</div>
</section>

<!-- Attribute  -->
<section id="attribute">
<h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
  <small>Atribut HTML Tag <code>&lt;audio&gt;</code></small>
</h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
 <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">autoplay</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menentukkan bahwa audio akan diputar secara otomatis (langsung ketika halaman telah dimuat).</p>
      <p>Contoh:   <br>
      </p><div class="icard"><div class="icard-body icode itheme"><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">autoplay</span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span></code></pre></div></div>
      <p></p>
      <a target="_blank" href="https://www.apacara.com/example/html/tag/audio-autoplay.html">
      <span class="button button-clean absolute" title="Contoh lengkap dan hasilnya pada code editor">Lihat hasilnya</span>
      </a>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>autoplay</code></p>
      </div>
  </div>
  </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
 <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">controls</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menentukkan bahwa controls audio ditampilkan. Controls, dapat dilihat seperti player yang biasanya berisi perintah seperti tombol play/pause, slider, volume dan sebagainya. Setiap browser memiliki tampilan controls yang berbeda.</p>
      <p>Contoh:   <br>
      </p><div class="icard"><div class="icard-body icode itheme"><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span></code></pre></div></div>
      <p></p>
      <a target="_blank" href="https://www.apacara.com/example/html/tag/audio-controls.html">
      <span class="button button-clean absolute" title="Contoh lengkap dan hasilnya pada code editor">Lihat hasilnya</span>
      </a>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>controls</code></p>
      </div>
  </div>
  </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
 <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">loop</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Digunakan untuk memutar ulang audio ketika selesai.</p>
      <p>Contoh:   <br>
      </p><div class="icard"><div class="icard-body icode itheme"><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">loop</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span></code></pre></div></div>
      <p></p>
      <a target="_blank" href="https://www.apacara.com/example/html/tag/audio-loop.html">
      <span class="button button-clean absolute" title="Contoh lengkap dan hasilnya pada code editor">Lihat hasilnya</span>
      </a>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>loop</code></p>
      </div>
  </div>
  </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
 <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">muted</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Digunakan untuk membisukkan suara, artinya audio akan diputar tanpa suara pada awal inisial.</p>
      <p>Contoh:   <br>
      </p><div class="icard"><div class="icard-body icode itheme"><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">muted</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span></code></pre></div></div>
      <p></p>
      <a target="_blank" href="https://www.apacara.com/example/html/tag/audio-muted.html">
      <span class="button button-clean absolute" title="Contoh lengkap dan hasilnya pada code editor">Lihat hasilnya</span>
      </a>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>muted</code></p>
      </div>
  </div>
  </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
 <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">preload</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menunjukkan seberapa penting audio harus diload ketika halaman web dimuat.</p>
      <p>Contoh:   <br>
      </p><div class="icard"><div class="icard-body icode itheme"><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>metadata<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span></code></pre></div></div>
      <p></p>
      <a target="_blank" href="https://www.apacara.com/example/html/tag/audio-preload.html">
      <span class="button button-clean absolute" title="Contoh lengkap dan hasilnya pada code editor">Lihat hasilnya</span>
      </a>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>auto</code> | <code>metadata</code> | <code>none</code></p>
      </div>
  </div>
  </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
 <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">src</code></span></div></div></div><div class="icard-body icode itheme">
      <p><code>src</code> menunjukkan source yaitu sumber file audio ditempatkan atau URL yang menunjukkan keberadaan audio file tersebut. Dapat pula menggunakan element &lt;source&gt; (lihat Contoh 2 dibawah).</p>
      <p>Contoh:   <br>
      </p><div class="icard"><div class="icard-body icode itheme"><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span></code></pre></div></div>
      <p></p>
      <a target="_blank" href="https://www.apacara.com/example/html/tag/audio-src.html">
      <span class="button button-clean absolute" title="Contoh lengkap dan hasilnya pada code editor">Lihat hasilnya</span>
      </a>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>auto</code> | <code>metadata</code> | <code>none</code></p>
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
      <p>&lt;audio&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
      <p>&lt;audio&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
      <div class="footer-callout warning">
        <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
      </div>
  </div>
</section>

<!-- Example -->
<section id="example">
<h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
  <small>Contoh HTML <code>&lt;audio&gt;</code> element</small>
</h2>
<div class="dul-block">
<h5>Contoh 1:</h5>
<p>HTML <code>audio</code> dengan satu sumber file audio (.mp3) dan konten paragraf (&lt;p&gt;) yang akan muncul apabila browser tidak mendukung html audio.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,5"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Download File: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>"MP3"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
</div>

<div class="dul-block">
<h5>Contoh 2:</h5>
<p>HTML <code>audio</code> element yang merujuk format audio lebih dari satu didalam element &lt;source&gt; untuk dukungan browser yang berbeda-beda.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,9"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audio/mpeg<span class="token punctuation">"</span></span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.ogg<span class="token punctuation">"</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audio/ogg<span class="token punctuation">"</span></span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.wav<span class="token punctuation">"</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audio/wav<span class="token punctuation">"</span></span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Download Audio:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
Format:  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>"MP3"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
Format:  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.ogg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>"Ogg"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
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
        <a href="https://www.apacara.com/example/html/tag/audio.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Contoh Cross browser audio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Contoh HTML audio element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Contoh HMTL audio element dengan beberapa format audio.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span> <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audio/mpeg<span class="token punctuation">"</span></span> <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.ogg<span class="token punctuation">"</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audio/ogg<span class="token punctuation">"</span></span> <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.wav<span class="token punctuation">"</span></span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>audio/wav<span class="token punctuation">"</span></span> <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Download Audio:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
        Format:  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.mp3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>"MP3"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
        Format:  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/audio/kucing.ogg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>"Ogg"<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
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
          <td><code>&lt;audio&gt;</code></td>
        <td class="success">4</td>
        <td class="success">4</td>
        <td class="success">3.5</td>
        <td class="success">10.5</td>
        <td class="success">9</td>
        </tr>
        <tr>
          <td><code>.mp3</code></td>
        <td class="success">8.0</td>
        <td class="success">5.0.3 (+ quicktime)</td>
        <td class="success">37</td>
        <td class="danger">?</td>
        <td class="success">9</td>
        </tr>
        <tr>
          <td><code>.wav</code></td>
        <td class="success">8.0</td>
        <td class="success">5.0.3 (+ quicktime)</td>
        <td class="success">3.6</td>
        <td class="success">10.63</td>
        <td class="success">9</td>
        </tr>
        <tr>
          <td><code>.ogg</code></td>
        <td class="success">8.0</td>
        <td class="danger">?</td>
        <td class="success">3.6</td>
        <td class="success">10.63</td>
        <td class="danger">?</td>
        </tr>
      </tbody>
</table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
<h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
<p>CSS untuk element <code>&lt;audio&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
<div class="icode itheme css">
  <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>
</aside>