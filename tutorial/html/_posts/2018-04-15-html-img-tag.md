---
layout: post_amp
template: post_amp
date: 10 April 2018

title: "HTML img tag | belajar &lt;img&gt; element"
short_title: "HTML &lt;img&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;img&gt; tag. Tutorial dan panduan mengenai element &lt;img /&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;img&gt;"

author: dul

tags: html, htmltag
tag: [html, htmltag]
taxonomy:
  category: html
  tags: html, htmltag
  tag: [html, htmltag]
images:
  figure: "posts/html-img-tag.png"
  thumb: "posts/thumbs/html-img-tag.png"
---
<p class="text-muted">
    Referensi <strong>belajar HTML image (img)</strong> tag. Tutorial dan panduan mengenai element <code>&lt;img /&gt;</code> yang digunakan untuk memasukkan gambar di dalam dokumen HTML. Mencakup pembahasan lebih detail dan lengkap yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;img&gt; (image).
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="html-tag">img</span> (image) tag</small>
</h2>
<p><strong>img</strong> menunjukkan <strong>image</strong> yang berarti <strong>gambar</strong> dan oleh karenanya digunakan untuk menyisipkan gambar. Gambar didalam sebuah dokumen HTML tidak dimasukkan sepenuhnya pada file (<code>.html</code>, misalnya) akan tetapi, hanya merujukkan file sumber gambar tersebut berada (disimpan).</p>
<p><code>img</code> element, ibarat sebuah rumah atau penampung (container) bagi sebuah file gambar (picture). Anda dapat memasukkan file gambar seperti <code>.jpg</code>, <code>.gif</code> dan <code>.png</code> didalam element <code>img</code> dengan merujukkan (link) file gambar tersebut yang di ditulis pada <code>src</code> attribute.</p>
<p>
  <strong>HTML <code>&lt;img&gt;</code> element</strong> memiliki beragam attribute yang dapat ditulis sesuai kebutuhan. Akan tetapi, hanya dua attribute yang wajib ditulis pada setiap <code>&lt;img /&gt;</code> element, yaitu <code>src</code> dan <code>alt</code> attribute. <code>src</code> attribute menujukkan sumber file tersebut berada, sedangkan <code>alt</code> menujukkan alternatif text yang akan muncul sebagai pengganti apabila gambar tersebut tidak dapat ditampilkan.
</p>
<p>HMTL <code>img</code> element, tidak memiliki tag penutup (end/closing tag), jadi hanya ditulis <code>&lt;img /&gt;</code> bukannya <del><code>&lt;img&gt;&lt;/img&gt;</code></del>.</p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;img&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">alt</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan sebuah <em>alternate text (teks pengganti)</em> yang akan muncul apabila gambar tidak dapat ditampilkan.</p>
      <!-- contoh -->
      <p>Contoh: </p> <pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logo apacara.com<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span></code></pre>

      <p>tulisan "logo apacara.com" akan muncul apabila gambar <code>logo.png</code> tidak dapat ditampilkan.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>teks</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">crossorigin</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Mengijinkan website pihak ketiga untuk memperbolehkan akses <em>cross-origin</em> yang dapat digunakan kembali didalam element <code>&lt;canvas&gt;</code>.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code><i>anonymous</i></code> | <code><i>use-credentials</i></code></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">height</code></span></div></div></div><div class="icard-body icode itheme">
        <p><em>height</em> berarti <em>tinggi</em>, digunakan untuk menentukkan tinggi gambar.</p>
      <!-- contoh -->
      <p>Contoh: </p><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>90<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span></code></pre>
      <p>menentukkan tinggi gambar <code>logo.png</code> diatas, menjadi 90px. Di dalam HTML, hanya ditulis angka saja tanpa akhiran <code>px</code>.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>pixels</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">ismap</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan bahwa gambar (image) adalah bagian dari gambar peta sisi server (<em>server-side image-map</em>). Jika ditulis, maka koordinat tertentu yang diklik akan dikirim ke server.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code><i>ismap</i></code></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">sizes</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan daftar ukuran gambar berdasarkan jendela layar browser yang ditampilkan. Melibatkan media query dan ukuran gambar (source-size) yang ingin ditampilkan sesuai kondisi tertentu.</p>
      <!-- contoh -->
      <p>Contoh: </p><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/media/images/orange.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/media/images/apple.jpg 1024w, /media/images/grape.jpg 640w, /media/images/banana.jpg 320w<span class="token punctuation">"</span></span>
  <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>(min-width: 900px) 50vw, 100vw<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
      <a target="_blank" href="/example/html/attribute/img-srcset.html">
        <span class="button button-clean absolute" title="Contoh lengkap dan hasilnya pada code editor">Lihat hasilnya</span>
      </a>
      <p>Attribute <code>sizes</code> pada contoh diatas, berarti: Apabila layar browser lebih lebar dari 900px, maka ukuran (size) gambar akan ditampilkan 50 persen, atau 50 viewport width (50 persen dari lebar layar). Jika sebaliknya (kurang dari 900px) maka akan ditampilkan 100 (persen) atau sepenuh gambar.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>media-query source-size, source-size</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">src</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Attribute ini wajib ditulis untuk menentukkan <em>source</em> atau sumber alamat (lokasi) dimana  gambar tersebut dimpan (berada).</p>
      <!-- contoh -->
      <p>Contoh: </p><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/media/images/banana.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span></code></pre>
      <p>Dari contoh diatas, file gambar yang ingin ditampilkan adalah "banana.png" yang berada pada direktori "media/images/" di website (URL) www.apacara.com .</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>URL</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">srcset</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Memasukkan deretan gambar pilihan yang dapat digunakan oleh browser sesuai kebutuhan atau situasi tertentu (Misalnya, untuk layar kecil, layar dengan resolusi tinggi, dan sebagainya.). Penulisannya, dipisahkan dengan tanda koma (,) per-item gambar.</p>
      <!-- contoh -->
      <p>Contoh: </p><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gambar-src.png<span class="token punctuation">"</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gambar-1x.png 1x, gambar-2x.png 2x,
                             gambar-3x.png 3x, gambar-4x.png 4x<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>URL width-descriptor/pixel-density-descriptor</i>, width-descriptor/pixel-density-descriptor</p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">usemap</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Mengasosiasikan nama dari peta gambar (image map) yang ditulis dengan diawali tanda pagar (#). Attribute ini tidak dapat digunakan apabila &lt;img&gt; ditulis didalam &lt;a&gt; atau &lt;button&gt; element.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>#mapname</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">width</code></span></div></div></div><div class="icard-body icode itheme">
        <p><em>width</em> berarti <em>lebar</em>, digunakan untuk menentukkan lebar gambar.</p>
      <!-- contoh -->
      <p>Contoh: </p><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span></code></pre>
      <p>menentukkan lebar gambar <code>logo.png</code> diatas, menjadi 160px. Di dalam HTML, hanya ditulis angka saja tanpa akhiran <code>px</code>.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>pixels</i></p>
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
        <p>&lt;img&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
        <div class="footer-callout info">
          <p>Silahkan, lihat referensi mengenai <a href="/tutorial/html/html-global-attribute.html">HTML Global Attribute</a></p>
        </div>
    </div>
</section>

<!-- Event Attributes -->
<section>
  <h2 class="title-sub bd-danger bd-left bd-left-only">Event Attributes <br>
    <small>Atribut event  (Peristiwa)</small>
  </h2>
    <div class="dul-callout dul-callout-warning">
        <p>&lt;img&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- begin sl-featured -->
<div class="row sl-featured"><div id="sl-in-ar" class="col-xs-12"><amp-ad layout="responsive" width="500" height="350" data-ad-layout="in-article" data-ad-format="fluid" type="adsense" data-ad-client="ca-pub-3288866780282962" data-ad-slot="7963371614"></amp-ad></div></div>
<!-- end sl-featured -->
<!-- Example -->
<article id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Contoh<br>
    <small>Memasukkan image (gambar) di dalam HTML</small>
  </h2>
  <div class="dul-block">
  <p>Bagaimana <strong>memasukkan gambar dalam HTML</strong>?</p>
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
<pre class="prettyprint linenums line-numbers highlight  language-markup"><code data-language="html" class="html inline language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/images/anak-lucu.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>anak lucu usia 3 tahun<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
</div>
</div>
  <p>Anda dapat memasukkan gambar pada sebuah halaman HTML dengan menggunakan tag <code>&lt;img</code> kemudian diikuti dengan <code>src</code> attribute, tanda <code>=</code>, dan tanda petik ganda (<code>""</code>). Didalam tanda petik ganda merupakan letak file gambar yang ingin kita tampilkan pada halaman web (HTML). Tulis juga <code>alt</code> attribute untuk menentukkan alternatif teks yang mewakili gambar tersebut. Terakhir, yaitu penutup (<code>/&gt;</code>).</p>
  <p>Contoh diatas, dapat diedit sendiri dan dilihat hasilnya pada demo editor dibawah ini (klik <em>demo</em> link).</p>
  </div>
</article>
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
        <a href="/example/html/tag/img.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML img tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/media/images/mouse.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gambar tikus lucu<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>

<article>
  <h2 class="title-sub bd-danger bd-left bd-left-only">Contoh 2<br>
    <small>Link dengan image (gambar)</small>
  </h2>
  <p>Bagaimana <strong>membuat link gambar</strong>? atau gambar yang dapat diklik dan menuju halaman/website lain.</p>
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
<pre class="prettyprint linenums line-numbers highlight no-room language-markup"><code data-language="html" class="html inline language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.apacara.com<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/media/images/apacaracom.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>apacara.com home<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
</article>
<p>Untuk membuat link pada sebuah gambar, tulis/tempatkan <code>&lt;img&gt;</code> didalam <code>&lt;a&gt;</code> element.</p>

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
            <td><code>&lt;img&gt;</code></td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;img&gt;</code> yang mungkin akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">img</span> <span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</div>

</aside>
<hr/>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-primary">
    <div class="icard-bar bar-lg">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
        <span>INFO</span>
      </div>
    </div>
  </div>
  <div class="icard-body bg-primary2">
<p>Jika halaman web Anda menggunakan <a target="_blank" rel="nofollow" href="https://www.ampproject.org/">AMP HTML</a>, maka Anda harus menggunakan <a href="/tutorial/amp/amp-img-image-cara-menyisipkan-gambar.html">&lt;amp-img&gt;</a> tag sebagai ganti HTML &lt;img&gt; tag</p>
  </div>
</div>