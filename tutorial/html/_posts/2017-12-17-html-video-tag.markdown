---
layout: post
title: "HTML video tag | belajar &lt;video&gt; element"
short_title: "HTML &lt;video&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;video&gt; tag. Tutorial dan panduan mengenai element &lt;video&gt;&lt;/video&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;video&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-video-tag.png"
  thumb: "posts/thumbs/html-video-tag.png"
---

<p class="text-muted">
    Referensi Belajar <strong>HTML video tag</strong>. Tutorial dan panduan mengenai element <code>&lt;video&gt;...&lt;/video&gt;</code> yang digunakan untuk memutar video. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;video&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">video</span></small>
</h2>
<p>
  <strong>HTML <code>&lt;video&gt;</code> element</strong> digunakan untuk merujuk sumber file video, sehingga dapat diputar (dimainkan) pada halaman web.
</p>
<p>Dalam merujuk sumber file video, digunakan attribute <code>src</code> yang menunjukkan <em>source</em> (sumber) yang mengarah pada link file video tersebut berada (disimpan), ditulis baik didalam element <code>&lt;video&gt;</code> itu sendiri atau didalam element <code>&lt;source&gt;</code> yang merepresentasikan sumber video lebih dari satu format, sehingga browser dapat memilih format video yang tepat (didukung).</p>
<p>Didalam element <code>&lt;video&gt;</code> dapat ditulis konten (teks), untuk browser lawas yang tidak mendukung HTML5 video. Teks ini, akan tampil sebagai ganti dari video yang tidak dapat diputar.</p>
<p>HTML <code>&lt;video&gt;</code> merupakan tag yang baru diperkenalkan pada HTML5.</p>
<hr class="uk-article-divider">

<section>
  <h2 class="title-sub bd-danger bd-left bd-left-only">Video Formats <br>
    <small>Beberapa format video yang didukung oleh HTML <code>&lt;video&gt;</code> element.</small>
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
        <td>MP4</td>
        <td>File MPEG 4, dengan video codec H264, dan audio codec AAC.</td>
        <td>.mp4</td>
        <td>video/mp4</td>
      </tr>
      <tr>
        <td>Ogg Theora</td>
        <td>File Ogg, dengan video codec Theora  dan audio codec Vorbis.</td>
        <td>.ogm / .ogv / .ogg</td>
        <td>video/ogg</td>
      </tr>
      <tr>
        <td>WebM</td>
        <td>File WebM dengan video codec VP8 dan audio codec Vorbis.</td>
        <td>.webm</td>
        <td>video/webm</td>
      </tr>
    </tbody>
  </table>
</div>
<p>Adapun untuk dukungan format video setiap browser berbeda-beda.</p>
<div class="table-responsive uk-overflow-container">
  <table class="table uk-table uk-text-nowrap full-width">
    <thead>
      <tr>
        <th>Browser</th>
        <th>MP4</th>
        <th>Ogg</th>
        <th>WebM</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><i class="fa fa-chrome"></i>&nbsp;Chrome</td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
      </tr>
      <tr>
        <td><i class="fa fa-firefox"></i>&nbsp;Firefox</td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
      </tr>
      <tr>
        <td><i class="fa fa-internet-explorer"></i>&nbsp;Internet Explorer</td>
        <td><i class="fa fa-check co-wa" title="Ya"></i>.</td>
        <td><i class="fa fa-close co-pi" title="Tidak"></i></td>
        <td><i class="fa fa-close co-pi" title="Tidak"></i></td>
      </tr>
      <tr>
        <td><i class="fa fa-safari"></i>&nbsp;Safari</td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
        <td><i class="fa fa-close co-pi" title="Tidak"></i></td>
        <td><i class="fa fa-close co-pi" title="Tidak"></i></td>
      </tr>
      <tr>
        <td><i class="fa fa-opera"></i>&nbsp;Opera</td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
        <td><i class="fa fa-check co-wa" title="Ya"></i></td>
      </tr>

    </tbody>
  </table>
</div>
</section>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;video&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">autoplay</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menginstruksikan browser untuk mulai memutar video secara otomatis sesegera mungkin tanpa berhenti.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>autoplay</code> atau (dikosongkan)</p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">controls</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menginstruksikan browser untuk menampilkan antarmuka (user interface) untuk video control (seperti menampilkan tombol putar (play), kontrol volume dan lain sebagainya).</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>controls</code> atau (dikosongkan)</p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">height</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menentukan (ukuran) tinggi pemutar video (video player).</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>Pixels</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">loop</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menginstruksikan browser untuk memutar ulang video ketika selesai (mencapai waktu akhir putar).</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>loop</code> atau (dikosongkan)</p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">muted</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menginstruksikan browser untuk membisukan (tanpa suara) video.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>muted</code> atau (dikosongkan)</p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">poster</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menentukkan URL yang merujuk sebuah gambar yang akan dijadikan <em>poster frame</em> yang akan tampil sebelum video diputar (mengklik tombol "play").</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>URL</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">preload</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menginstruksikan browser untuk menentukkan jika dan bagaimana penulis memuat video ketika halaman web dimuat (termasuk mengunduh (download) video dan metadata-nya) demi pengalaman menjelajah yang baik untuk user.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>auto</code> | <code>metadata</code> | <code>none</code> atau (dikosongkan)</p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">src</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menentukkan URL yang mengarah pada sumber video file berada (disimpan).</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>URL</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">width</code></span></div></div></div><div class="icard-body icode itheme">
      <p>Menentukkan (ukuran) lebar pemutar video (video player).</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>Pixels</i></p>
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
        <p>&lt;video&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
        <div class="footer-callout info">
          <p>Silahkan, lihat referensi mengenai <a href="http://www.apacara.com/blog/html-global-attribute.html">HTML Global Attribute</a></p>
        </div>
    </div>
</section>

<!-- Event Attributes -->
<section>
  <h2 class="title-sub bd-danger bd-left bd-left-only">Event Attributes <br>
    <small>Atribut event  (Peristiwa)</small>
  </h2>
    <div class="dul-callout dul-callout-warning">
        <p>&lt;video&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="http://www.apacara.com/blog/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;video&gt;</code> element</small>
  </h2>
<div class="dul-block">
  <h5>Contoh 1:</h5>
  <p>HTML <code>video</code> element sederhana.</p>
<!-- HTML Code Example -->
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.apacara.com/editor/media/video/video.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code>
</pre>
</div>
</div>
  </div>

  <div class="dul-block">
  <h5>Contoh 2:</h5>
  <p>HTML <code>video</code> element yang merujuk format video lebih dari satu didalam element &lt;source&gt; untuk dukungan browser yang berbeda-beda.</p>
<!-- HTML Code Example -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>HTML</span>
  </div>
  <div class="icard-bar-right pull-right">
    <a href="https://www.apacara.com/example/html/tag/video2.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
  </div>
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight no-room language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span> <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>metadata<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.apacara.com/editor/media/video/video.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.apacara.com/editor/media/video/video.webm<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>video/webm<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.apacara.com/editor/media/video/video.ogv<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>video/ogg<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
  </div>
</section>

<p>Dibawah ini, contoh berikut editor untuk <strong>belajar HTML video</strong> dengan track dan <a href="https://www.apacara.com/blog/apa-itu-webvtt.html">.vtt file</a> yang dapat digunakan untuk menulis <em>caption</em> atau judul video, dapat pula digunakan untuk menulis subtitle yang sering kita lihat pada video karaoke.</p>
<p>Untuk lebih jelasnya, silahkan pelajari juga mengenai <a href="https://www.apacara.com/blog/html-track-tag.html">HTML &lt;track&gt; element.</a></p>

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
        <a href="https://www.apacara.com/example/html/tag/video.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML video - by: apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
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
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>

<p><strong>Harap diperhatikan:</strong> Untuk contoh diatas, apabila subtitle tidak terlihat di dalam video, kemungkinan browser Anda tidak mendukung HTML &lt;track&gt; element. Gunakan browser (<cite>Google Chrome</cite>) terbaru untuk mencobanya.</p>

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
            <td><code>&lt;video&gt;</code></td>
            <td class="success">4.0</td>
            <td class="success">4.0</td>
            <td class="success">3.5</td>
            <td class="success">10.5</td>
            <td class="success">9.0</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;video&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>
</aside>