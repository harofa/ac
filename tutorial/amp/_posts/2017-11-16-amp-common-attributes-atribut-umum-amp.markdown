---
layout: post
title: "AMP Common Attributes - Atribut Umum Pada AMP HTML"
language: id

metadata:
  description: "Referensi AMP Common Attributes. Semua atribut pada HTML AMP yang termasuk kategori umum atau global. AMP common attribute memiliki beberapa atribut yang berbeda dengan HTML biasa"

tag: [amp,ampattribute]
taxonomy:
  category: amp
  tag: [amp,ampattribute]
images:
  figure: "posts/amp-common-attributes.png"
  thumb: "posts/thumbs/amp-common-attributes.png"

dateCreated: "2017-10-29T00:00:00+07:00"
datePublished: "2017-10-29T00:00:00+07:00"
---
<p class="lead"><i>Common Attributes</i> adalah attibute yang secara umum dapat digunakan pada AMP Components (atau bisa juga pada HTML element). Pada HTML regular mungkin kita mengenalnya dengan istilah <i>global attribute</i> akan tetapi pada AMP<i>, common attribute</i> cakupannya lebih luas.</p>
<hr />
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div id="fallback-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>fallback</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>

  <div class="icard-body icode itheme">
    <p><code>fallback</code> attribute adalah atribut yang digunakan sebagai &quot;cadangan&quot; atau alternatif konten lain apabila konten utama yang dimaksud tidak didukung oleh browser atau tidak tersedia (mungkin terhapus). Contoh, kita mereferensikan gambar A, apabila gambar A tersebut tidak valid (terhapus atau tidak di-support browser) maka kita bisa berikan <i>fallback</i> gambar lain.</p>
<p><code>fallback</code> attribute tidak hanya bisa digunakan pada element AMP itu sendiri, akan tetapi juga dapat digunakan pada element HTML yang mana element HTML tersebut terletak didalam Element AMP (sebagai anak/child) dimana element AMP tersebut juga harus mendukung (Support) fallback attribute.</p>
<p>Attribute ini, bisanya digunakan untuk menangani gambar (images), animasi (animation), audio dan video. Lihat contoh Berikut:</p>
<!-- icard -->
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/fallback.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>

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
  </div>
</div>

<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div id="heights-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>heights</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
    <p><strong>height<i>s</i></strong> berbeda dengan <strong>height</strong>. <code>height</code> diisi langsung dengan nilai (value) berupa unit pixel (contoh: <code>height="680"</code>), sedangkan <code>heights</code> value berupa ekspresi berdasarkan media (@media) ekspresi. <code>heights</code> lebih mirip dengan <code>sizes</code> attribute pada HTML &lt;img&gt; tag.</p>
<!-- icard -->
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/heights.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>

      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/amp-bg.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>420<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>456<span class="token punctuation">"</span></span>
  <span class="token attr-name">heights</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>(min-width:500px) 300px, 70%<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div id="layout-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>layout</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>

  <div class="icard-body icode itheme">
    <p><code>layout</code> attribute digunakan untuk menentukkan susunan pada dokumen AMP. <i>Value</i> dari atribute <code>layout</code> dapat diisi dengan: <code>nodisplay</code>, <code>fixed</code>, <code>responsive</code>, <code>fixed-height</code>, <code>fill</code>, <code>container</code>, dan <code>flex-item</code>.</p>
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/layout.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>

      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/flower.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>750<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>562<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span>
  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>a flower<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div id="media-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>media</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>

  <div class="icard-body icode itheme">
    <p><code>media</code> attribute digunakan untuk menentukkan visibilitas AMP element berdasarkan <em>media query</em>. Contoh penggunaan attribute ini adalah jika Anda ingin mengampilkan gambar (picture) yang berbeda berdasarkan ukuran layar (<em>device viewport</em>). Ini berkaitan dengan CSS @media yang tentunya Anda harus memahaminya terlebih dahulu. Semua elemen AMP mendukung (support) <code>media</code> attribute</p>
<!-- icard -->
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/media.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span>
    <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>(min-width: 700px)<span class="token punctuation">"</span></span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/amp-bg.jpg<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>750<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span>
    <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>(max-width: 699px)<span class="token punctuation">"</span></span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/amp-bg-red.jpg<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>450<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div id="noloading-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>noloading</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
    <p><code>noloading</code> attribute digunakan apabila tidak ingin menampilkan <em>loading indicator</em> yang biasanya ditandai dengan animasi loading yang menunjukkan konten sedang dimuat. Seperti menggunakan <code>amp-img</code> untuk menampilkan gambar ; sebelum gambar dimuat/ditampilkan maka akan ditampikan <em>loading indicator</em> yang memberi tahu kita bahwa gambar mau ditampikan.</p>
<p>Umumnya atribut ini digunakan dan berkaitan dengan: gambar (<em>images</em>), animasi (<em>animations</em>), video dan ads (<code>amp-ad</code>).</p>
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/noloading.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>

      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/cloud.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">noloading</span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>750<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>562<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div id="on-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>on</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>

  <div class="icard-body icode itheme">
    <p>Sebagaimana dalam DOM (Document Object Model) kita mengenal <em>event handler</em>, maka <code>on</code> attribute digunakan dan hanya akan terjadi apabila ada interaksi dari user atau sumber lain. Contohnya, pada saat user mengklik tombol (button) di sebuah element, maka tampilkan kotak dialog dan sebagainya. </p>
    <p>Umumnya atribut ini digunakan dan berkaitan dengan: <em>lightboxes</em>, <em>sidebars</em>, <em>live lists</em>, dan <em>forms</em>. Mengenai istilah-istilah tersebut silahkan merujuk pada dokumentasi resmi AMP.</p>
<div class="icard">
  <div class="icard-heading clearfix bg-default">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-code" aria-hidden="true"></i>
        <span>SYNTAX</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight">
<code class="inline language-markup">eventName:targetId[.methodName[(arg1=value, arg2=value)]]</code>
</pre>
  </div>
</div>
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/on.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>

      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span>
    <span class="token attr-name">on</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tap:nama-lightbox<span class="token punctuation">"</span></span>
    <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>
    <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/amp-bg.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span>200</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span>100</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-image-lightbox</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nama-lightbox<span class="token punctuation">"</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nodisplay<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-image-lightbox</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>click or tap the image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div id="placeholder-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>placeholder</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>

  <div class="icard-body icode itheme">
    <p><code>placeholder</code> menunjukkan &quot;pengganti&quot;. Konten didalam atribut ini digunakan sebagai pengganti konten utama (induk) sebelum konten utama tersebut selesai dimuat atau ditampilkan. Atribut ini boleh digunakan pada HTML elemen biasa yang mana terletak di dalam AMP element (yang support <code>placeholder</code>). Jadi, <em>placeholder</em> akan tampil terlebih dahulu sebelum konten induk (parent). Ketika konten induk berhasil dimuat, maka <em>placeholder</em> akan disembunyikan.</p>
    <p>Umumnya atribut ini digunakan dan berkaitan dengan: <em>images</em>, <em>animations</em>, <em>videos</em>, dan <em>ads</em> (berkaitan dengan iklan <code>amp-ad</code>). Mengenai istilah-istilah tersebut silahkan merujuk pada dokumentasi resmi AMP.</p>
<!-- icard -->
<p>Contoh dibawah ini, menggunakan <code>placeholder</code> (Baris ke-6) dengan <code>&lt;amp-img&gt;</code> element. Apabila browser tidak support file &quot;clock.webp&quot; image, maka akan menggunakan file &quot;clock.gif&quot; sebagai gantinya.</p>
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/placeholder.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>

      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint linenums line-numbers highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-anim</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/clock.webp<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>580<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>580<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span>
  <span class="token attr-name">attribution</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>originally from wikimedia.org - public domain license<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">placeholder</span>
    <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>
    <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>580<span class="token punctuation">"</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>580<span class="token punctuation">"</span></span>
    <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/clock.gif<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>noscript</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/clock.gif<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>noscript</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-anim</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
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
    <p><code>sizes</code> attribute sama seperti <em>size</em> atribut pada HTML &lt;img&gt; tag, akan tetapi <code>sizes</code> pada AMP dapat digunakan pada semua element. <code>sizes</code> atribut dapat digunakan pada semua AMP elemen yang support (mendukung) <code>layout="responsive"</code>. </p>
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/sizes.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>

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
  <div id="width-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>width</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>

  <div class="icard-body icode itheme">
   <p><code>width</code> digunakan untuk menentukan &quot;lebar&quot; element. Sama seperti <code>width</code> pada attribute HTML biasa, akan tetapi pada AMP umumnya <code>width</code> harus ditulis secara eksplisit. Nilai yang berlaku adalah pixel (hanya angka saja).</p>
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/width.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>

      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/flash.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>320<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div id="height-attr" class="icard-heading clearfix co-wh bg-gr2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
       <span><code>height</code></span> <span class="co-gr">Attribute</span>
      </div>
    </div>
  </div>

  <div class="icard-body icode itheme">
  <p><code>height</code> digunakan untuk menentukan &quot;tinggi&quot; element. Sama seperti <code>height</code> pada attribute HTML biasa, akan tetapi pada AMP umumnya <code>height</code> harus ditulis secara eksplisit. Nilai yang berlaku adalah pixel (hanya angka saja).</p>
<h3>Example</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-ampproject co-primary" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/amp/common-attributes/height.html" target="_blank"><span>demo</span><i class="fa fa-external-link"></i></a>

      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight  language-markup"><code data-language="html" class="inline  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/car.jpg<span class="token punctuation">"</span></span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>320<span class="token punctuation">"</span></span>
  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fixed<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-img</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
  </div>
</div>

<h3>Additional Information and Resources</h3>
<div class="sources bg-gr3 bordered p-space">
  <a rel="nofollow" href="https://www.ampproject.org/docs/reference/common_attributes" target="_blank" class="text-muted">https://www.ampproject.org/docs/reference/common_attributes</a>
</div>