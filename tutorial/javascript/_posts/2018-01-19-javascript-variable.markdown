---
layout: post
title: "JavaScript Variable - Belajar JS Variabel"
short_title: "JavaScript Variable"
language: id

metadata:
  description: "Belajar JavaScript variable. Mengenal apa itu variable dalam javascript dan membahas JS dasar. Tutorial membuat, menamai dan deklarasi variable pada javascript"

author: dul

tag: [javascript, javascriptref]
taxonomy:
  category: javascript
  tag: [javascript, javascriptref]
images:
  figure: "posts/javascript-variable.png"
  thumb: "posts/thumbs/javascript-variable.png"
---
<p class="lead">Variable adalah temporal data yang disimpan dalam sebuah memory komputer. Oleh karenanya, ketika kita menentukkan nama sebuah variable dan menyimpan nilai (data) dalam variabel tersebut, kita pun bisa merubah datanya dengan data lain sesuai keinginan dalam waktu yang berbeda.</p>
<hr>
<h2 class="title-sub bd-danger bd-left bd-left-only">Variable
<br><small>Deklarasi variabel</small>
</h2>
<p><em>variable</em> adalah sebuah nama yang digunakan untuk menyimpan data (nilai atau ekspresi). Dalam javascript, nilai (value) dapat diubah sewaktu-waktu.</p>
<p>Contoh, membuat variable <var>namaLengkap</var> dan mengisinya dengan value "Ali Ahmad Kids Zaman Now":</p>
<div class="icode itheme">
<pre class="prettyprint highlight max-height language-javascript"><code data-language="javascript" class=" language-javascript"><span class="token keyword">let</span> namaLengkap <span class="token operator">=</span> <span class="token string">"Ali Ahmad Kids Zaman Now"</span> <span class="token punctuation">;</span></code>
</pre>
</div>
<p>Jika value (data) berupa string (teks) seperti diatas, maka value tersebut harus diapit dengan tanda kutip dan jangan lupa akhiri setiap baris statement dengan titik koma (;).</p>
<hr>
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
    <p>Keyword <code>let</code> digunakan untuk menetapkan (assign) variabel atau pada versi javascript sebelumnya kita mungkin lebih familiar dengan keyword <code>var</code>. <em>let</em> adalah keyword baru pada ECMAScript 6.</p>
  </div>
</div>
<p>Pada <i>statement</i> kode diatas, menyatakan dua hal: yaitu, mendeklarasikan (membuat) variable <em>namaLengkap</em> dan memberi nilai (data) awal dengan <em>Ali Ahmad Kids Zaman Now</em>.</p>
<h3 class="title-sub bd-primary bd-left bd-left-only">Example
<br><small>Contoh</small>
</h3>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html5" aria-hidden="true"></i>
        <span>Contoh</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/javascript/ref/variable.html" target="_blank"><span>editor</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo Javascript Variable - apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width,minimum-scale<span class="token punctuation">=</span>1,initial-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script">
      <span class="token keyword">let</span> namaLengkap <span class="token operator">=</span> <span class="token string">"Ali Ahmad Kids Zaman Now"</span><span class="token punctuation">;</span>

      <span class="token function">alert</span><span class="token punctuation">(</span>namaLengkap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<p>Selanjutnya, kita bisa merubah value pada variabel tersebut dengan data lain seperti contoh berikut:</p>

<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html5" aria-hidden="true"></i>
        <span>Contoh</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/javascript/ref/variable2.html" target="_blank"><span>editor</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo 2 Javascript Variable - apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width,minimum-scale<span class="token punctuation">=</span>1,initial-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script">
      <span class="token keyword">let</span> namaLengkap <span class="token operator">=</span> <span class="token string">"Ali Ahmad Kids Zaman Now"</span><span class="token punctuation">;</span>

      <span class="token function">alert</span><span class="token punctuation">(</span>namaLengkap<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// alert pertama</span>

      namaLengkap <span class="token operator">=</span> <span class="token string">"Midun bin Midin Bin Madun"</span><span class="token punctuation">;</span>  <span class="token comment">// namaLengkap berubah</span>

      <span class="token function">alert</span><span class="token punctuation">(</span>namaLengkap<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// alert kedua</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<p>Perhatikan kode diatas, pada baris ke-14 kita merubah value untuk variabel <em>namaLengkap</em> dengan nama lain sehingga data telah berubah. Disini, kita tidak perlu menulis ulang keyword <code>let</code> karena sebelumnya sudah dideklarasikan.</p>
<h3 class="title-sub bd-primary bd-left bd-left-only">Undefined Variable
<br><small>Variabel tidak/belum didefinisikan</small>
</h3>
<p>ketika kita mendeklarasikan varibel, kita juga tidak harus mengisi value (data) awal inisial. Artinya, value boleh kosong seperti ini:</p>
<div class="icode itheme">
<pre class="prettyprint highlight max-height language-javascript"><code data-language="javascript" class=" language-javascript"><span class="token keyword">let</span> namaLengkap<span class="token punctuation">;</span></code>
</pre>
</div>
<p><code>namaLengkap</code> belum memiliki nilai (value), sehingga variabel tersebut berstatus <em>undefined</em>. Terkadang kita belum mendefinisikan nilai untuk sebuah variable dalam kasus tertentu. Kode diatas sama dengan:</p>
<div class="icode itheme">
<pre class="prettyprint highlight max-height language-javascript"><code data-language="javascript" class=" language-javascript"><span class="token keyword">let</span> namaLengkap <span class="token operator">=</span> undefined<span class="token punctuation">;</span></code>
</pre>
</div>
<h3 class="title-sub bd-primary bd-left bd-left-only">Multiple Variables
<br><small>Deklarasi banyak variabel</small>
</h3>
<p>Kita juga dapat mendeklarasikan banyak variable dalam satu keyword (kata kunci). Menggunakan satu keyword <code>let</code> dengan beberapa variabel dipisahkan dengan koma (,) seperti berikut:</p>
<div class="icode itheme">
<pre class="prettyprint highlight max-height language-javascript"><code data-language="javascript" class=" language-javascript"><span class="token keyword">let</span> namaLengkap <span class="token operator">=</span> <span class="token string">"Dini Oh dini"</span><span class="token punctuation">,</span>
            usia <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">,</span>
            alamat <span class="token operator">=</span> <span class="token string">"Jakarta"</span> <span class="token punctuation">;</span></code>
</pre>
<p>Pada contoh diatas, kita mendeklarasikan 3 variable yang berbeda yaitu: <code>namaLengkap</code>, <code>usia</code> dan <code>alamat</code>.</p>
</div>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html5" aria-hidden="true"></i>
        <span>Contoh</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/javascript/ref/multiple-variable.html" target="_blank"><span>editor</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo JS Multiple Variable - apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width,minimum-scale<span class="token punctuation">=</span>1,initial-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script">
  <span class="token keyword">let</span> namaLengkap <span class="token operator">=</span> <span class="token string">"Dini Oh dini"</span><span class="token punctuation">,</span>
            usia <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">,</span>
            alamat <span class="token operator">=</span> <span class="token string">"Jakarta"</span> <span class="token punctuation">;</span>

  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Namanya adalah: "</span> <span class="token operator">+</span> namaLengkap <span class="token operator">+</span> <span class="token string">" Berusia: "</span> <span class="token operator">+</span> usia <span class="token operator">+</span> <span class="token string">" Tahun"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<h3 class="title-sub bd-primary bd-left bd-left-only">Variable Value
<br><small>Nilai variabel</small>
</h3>
<p>Nilai atau <em>value</em> dapat dikatakan data yang disimpan dalam sebuah variable, baik berupa teks, angka, tanggal atau lainnya. Kita dapat mengambil <em>value</em> dari suatu varibel yang tersedia dan menyimpannya ke variable lain yang berbeda. Contoh:</p>
<div class="icode itheme">
<pre class="prettyprint highlight max-height language-javascript"><code data-language="javascript" class=" language-javascript"><span class="token keyword">let</span> namaOrangPertama <span class="token operator">=</span> <span class="token string">"Dini Oh dini"</span><span class="token punctuation">,</span>
            usiaOrangPertama <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> namaOrangKedua <span class="token operator">=</span> <span class="token string">"Siti Aisyah"</span><span class="token punctuation">,</span>
                usiaOrangKedua <span class="token operator">=</span> usiaOrangPertama<span class="token punctuation">;</span>
            </code>
</pre>
</div>
<p>Pada contoh diatas <code>usiaOrangKedua</code> mengambil data dari <code>usiaOrangPertama</code> karena mungkin kita menemukan kasus bahwa dua orang tersebut usianya sama.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html5" aria-hidden="true"></i>
        <span>Contoh</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/javascript/ref/variable-value.html" target="_blank"><span>editor</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!doctype html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo JS Variable value - apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">=</span>device-width,minimum-scale<span class="token punctuation">=</span>1,initial-scale<span class="token punctuation">=</span>1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script">
    <span class="token keyword">let</span> namaOrangPertama <span class="token operator">=</span> <span class="token string">"Dini Oh dini"</span><span class="token punctuation">,</span>
                usiaOrangPertama <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> namaOrangKedua <span class="token operator">=</span> <span class="token string">"Siti Aisyah"</span><span class="token punctuation">,</span>
                    usiaOrangKedua <span class="token operator">=</span> usiaOrangPertama<span class="token punctuation">;</span>

    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"usiaOrangKedua adalah: "</span> <span class="token operator">+</span> usiaOrangKedua<span class="token punctuation">)</span><span class="token punctuation">;</span>

  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<h2 class="title-sub bd-danger bd-left bd-left-only">Variable Names
<br><small>Nama Variabel</small>
</h2>
<p>Ketika menamai (memberi nama) sebuah variable ada beberapa aturan yang harus terpenuhi, seperti nama variable tidak boleh diawali dengan angka juga kita tidak boleh menggunakan kata-kata yang sudah digunakan internal javascript sendiri, dikenal dengan istilah <em>reserved words</em>, seperti <em>with</em> dan <em>var</em> tidak boleh digunakan sebagai nama variable. </p>
<p>Lebih jelasnya, berikut aturan yang harus dipatuhi untuk memberi nama sebuah variabel:</p>
<ul>
  <li>Karakter yang digunakan adalah huruf, angka (digit), simbol <code>$</code> dan <code>_</code> </li>
  <li>Karakter pertama tidak boleh angka. Contoh SALAH: <code>4nama</code>. Yang BENAR: <code>n4ama</code> atau <code>nama4</code> (Asalkan angka tidak berada di awal kata)</li>
  <li><em>Reserved names</em> atau nama yang digunakan bahasa javascript sendiri, seperti <code>let</code>, <code>function</code>, <code>class</code> dan lainnya tidak boleh digunakan sebagai nama variable.</li>
</ul>