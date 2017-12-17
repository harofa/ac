---
layout: post
title: "amp-img (Image) - Cara Menyisipkan Gambar AMP HTML"
short_title: "&lt;amp-img&gt;"
language: id

metadata:
  description: "Tutorial bagaimana menyisipkan gambar (image) pada halaman AMP. Jika blog atau website Anda menggunakan AMP, maka Anda akan belajar memasukkan gambar menggunakan tag amp-img"

tag: [amp,ampelement]
taxonomy:
  category: amp
  tag: [amp,ampelement]
images:
  figure: "posts/amp-img.png"
  thumb: "posts/thumbs/amp-img.png"

dateCreated: "2017-10-30T00:00:00+07:00"
datePublished: "2017-10-30T00:00:00+07:00"
dateModified: "2017-12-17T00:00:00+00:00"
---

<p><code>amp-img</code> digunakan untuk menyisipkan gambar pada halaman <a href="https://www.ampproject.org" target="_blank" rel="nofollow">AMP</a> HTML. <code>&lt;amp-img&gt;</code> merupakan tag pengganti dari HTML &lt;img&gt; yang biasa digunakan pada halaman HTML biasa.</p>
<h2 class="title-sub bd-primary bd-left bd-left-only">Quick Example
<br><small>Contoh</small>
</h2>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/amp-element/amp-img.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>

      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>833<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/apple.jpg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<p><code>layout="responsive"</code> menunjukkan bahwa image (gambar) pada <code>amp-img</code> element tersebut akan mengikuti ukuran layar (browser), oleh karenanya dikenal dengan istilah "responsive"; ukuran gambar menyesuaikan layar ketika diperbesar atau diperkecil.</p>
<p><code>layout</code> attribute memiliki <em>value</em> (nilai) lain: <code>fill</code>, <code>fixed</code>, <code>fixed-height</code>, <code>flex-item</code>, <code>nodisplay</code>, atau <code>responsive</code>. Mengenai hal ini akan dibahas secara khusus pada artikel terpisah.</p>
<!-- HR =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<hr>
<!-- *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<h2 class="title-sub bd-primary bd-left bd-left-only">Description
<br><small>Penjelasan/Definisi</small>
</h2>
<p><code>amp-img</code> adalah sebuah komponen atau <em>tag</em> pada AMP HTML yang digunakan untuk menampilkan gambar. Pada AMP, tag <code>&lt;amp-img&gt;</code> memiliki tag penutup <code>&lt;/amp-img&gt;</code> dan harus ditulis secara eksplisit.</p>
<p><code>&lt;amp-img&gt;</code>...<code>&lt;/amp-img&gt;</code> merupakan tag pengganti HTML &lt;img /&gt;. Oleh karenanya, kita tidak bisa menggunakan HTML &lt;img /&gt; pada halaman AMP.</p>

<div class="icard">
  <div class="icard-heading clearfix co-wh bg-primary">
    <div class="icard-bar bar-lg">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
        <span>Perlu Diketahui</span>
      </div>
    </div>
  </div>
  <div class="icard-body bg-primary2">
    <p><code>amp-img</code> merupakan elemen level blok (block-level element) tidak seperti HTML <em>img</em> tag yang masuk kategori inline element.</p>
  </div>
</div>
<!-- HR =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<hr>
<!-- *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<h2 class="title-sub bd-primary bd-left bd-left-only">Setup
<br><small>Cara Penggunaan</small>
</h2>
<p>Secara <em>default</em> <code>amp-img</code> dapat digunakan langsung pada halaman AMP yang valid tanpa tambahan script khusus seperti komponen AMP pada umumnya.</p>
<!-- HR =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<hr>
<!-- *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<h2 class="title-sub bd-primary bd-left bd-left-only">Attributes
</h2>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>src</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
    <p><code>src</code> menunjukkan <em>source</em> atau "sumber" yang merujuk pada URL gambar disimpan (berada).</p>
    <p>Pada contoh dibawah ini, <code>src</code> merujuk pada sumber gambar (URL) yang saya simpan pada sebuah direktori lain.</p>
<!-- icard -->
<h3>Contoh</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/attributes/src.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>833<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/car.jpg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>srcset</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<p><code>srcset</code> digunakan untuk mereferensikan sumber gambar yang berbeda-beda berdasarkan ukuran layar dan <em>pixel density</em>. Attribute ini, sama dengan <em>srcset</em> pada attribute <em>img</em> tag di HTML biasa.</p>
<p>Perhatikan contoh dibawah ini dan coba utuk memperbesar dan memperkecil ukuran layar browser yang digunakan. Gambar akan berubah berdasarkan ukuran layar.</p>
<!-- icard -->
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/attributes/srcset.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/orange.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>
    https://www.apacara.com/media/images/orange.jpg 1200w,
    https://www.apacara.com/media/images/grape.jpg 992w,
    https://www.apacara.com/media/images/apple.jpg 768w<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>750<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nice fruits<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div id="sizes-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>sizes</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>

  <div class="icard-body icode itheme">
    <p><code>sizes</code> attribute sama dengan <em>size</em> atribut pada HTML &lt;img&gt; tag biasa, akan tetapi <code>sizes</code> pada AMP dapat digunakan pada semua element. <code>sizes</code> atribut dapat digunakan pada semua AMP elemen yang support (mendukung) <code>layout="responsive"</code>. </p>
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/sizes.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>

      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/cat.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>320<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>(min-width: 320px) 320px, 100vw<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>alt</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
    <p><code>alt</code> adalah attribute yang menunjukkan <em>alternate</em> text, yaitu teks yang menunjukkan alternatif atau pengganti gambar yang tidak bisa ditampikan (sumber tidak tersedia atau dihapus).</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/attributes/alt.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Funny Mouse<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>833<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/mouse.jpg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>attribution</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
    <p>Menunjukkan atribusi terhadap gambar yang kita publikasikan, karena mungkin gambar tersebut bersumber dari orang lain.</p>
<!-- icard -->
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/attributes/attribution.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
  <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
  <span class="token attr-name">attribution</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>originally from wikimedia.org - public domain license<span class="token punctuation">"</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/clock.gif<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>height</code> dan <code>width </code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
    <p><code>height</code> dan <code>width</code> digunakan untuk menentukkan tinggi dan lebar sebuah gambar. Jika menggunakan <code>layout="fixed"</code> maka gambar akan sesuai dengan <em>height</em> dan <em>width</em> yang kita tentukan, tetapi jika menggunkan <code>layout="responsive"</code> akan mempertahankan aspek rasio dari dari ukuran gambar tersebut.</p>
<!-- icard -->
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/attributes/width-height.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/banana.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>320<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span class="co-bl">Common attributes</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
    <p><em>Common Attributes</em> adalah beberapa <em>attribute umum</em> yang biasa digunakan dan berlaku untuk beberapa element AMP adalah: <code>fallback</code>, <code>heights</code>, <code>layout</code>, <code>media</code>, <code>noloading</code>, <code>on</code>, <code>placeholder</code>, <code>sizes</code>, <code>width</code>, and <code>height</code></p>
    <p>Untuk lebih jelasnya, bisa dilihat pada halaman <a href="https://www.apacara.com/2017/10/amp-common-attributes-atribut-umum-amp.html">AMP HTML Common attributes</a></p>
  </div>

</div>
<!-- HR =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<hr>
<!-- *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* -->
<h2 class="title-sub bd-primary bd-left bd-left-only">Example
<br><small>Contoh <code>amp-img</code></small>
</h2>
<p>Beberapa contoh yang yang dapat dipelajari dan digunakan.</p>
<h3 class="title-sub bd-danger bd-left bd-left-only">Example 1
<br><small>Contoh <code>amp-img</code> Responsive Image</small>
</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/amp-element/amp-img-responsive.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>833<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/camel.jpg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<h3 class="title-sub bd-danger bd-left bd-left-only">Example 2
<br><small>Contoh <code>amp-img</code> dengan noscript tag</small>
</h3>
<p>Pada contoh dibawah ini, <code>noscript</code> element digunakan untuk menampilkan alternatif gambar lain apabila script (javascript) dinon-aktifkan pada konfigurasi browser oleh user tertentu. Karena tidak menggunakan javascript, maka digunakan HTML &lt;img /&gt; biasa.</p>
<!-- INPUT OUTPUT -->
<!-- INPUT -->
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>INPUT</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/amp-element/noscript.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>833<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/grape.jpg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/grape.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<h3 class="title-sub bd-danger bd-left bd-left-only">Example 3
<br><small>Contoh <code>amp-img</code> dengan <em>fallback</em> Image</small>
</h3>
<p>Attribute <code>fallback</code> digunakan pada kondisi apabila gambar tidak bisa ditampilkan, maka fallback konten akan tampil sebagai gantinya. Biasanya digunakan untuk menampilkan teks pengganti yang menunjukkan offline atau user tidak terkoneksi dengan internet.</p>
<!-- INPUT OUTPUT -->
<!-- INPUT -->
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>INPUT</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/fallback.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-anim</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/clock.webp<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>580<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>580<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span> <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">fallback</span><span class="token punctuation">&gt;</span></span>
    Cannot play animated images - Gambar animasi GIF tidak bisa ditampilkan.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-anim</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<h2 class="title-sub bd-primary bd-left bd-left-only">Cara Memberi Style (CSS)
</h2>
<p><code>amp-img</code> dapat diberi style (CSS) seperti tag HTML pada umumnya dengan menggunakan property <em>amp-img</em>. Berikut contoh memberi efek <em>border</em> dan <em>border-radius</em> pada gambar dalam halaman AMP.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-css3 co-wh" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/amp-element/amp-img-styling.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-css"><code data-language="css" class="inline  language-css"><span class="token selector">amp-img</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code>
</pre>
  </div>
</div>
<h3>Additional Information and Resources</h3>
<div class="sources bg-gr3 bordered p-space-v">
  <ul>
    <li><a rel="nofollow" href="https://www.ampproject.org/docs/reference/components/amp-img" target="_blank" class="text-muted">https://www.ampproject.org/docs/reference/components/amp-img</a></li>
    <li><a rel="nofollow" href="https://ampbyexample.com/components/amp-img/" target="_blank" class="text-muted">https://ampbyexample.com/components/amp-img/</a></li>
  </ul>
</div>