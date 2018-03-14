---
layout: post
title: "Belajar Bootstrap Untuk Pemula. Apa itu Bootstrap?"
short_title: "Bootstrap Memulai Belajar"
language: id

metadata:
  description: "Belajar Bootstrap Untuk Pemula. Apa itu Bootstrap? Untuk Apa itu Bootstrap? Bagaimana Belajar Bootstrap dari dasar untuk pemula?"

author: dul

tag: [bootstrap3, bootstrap3ref]
taxonomy:
  category: bootstrap3
  tag: [bootstrap3, bootstrap3ref]
images:
  figure: "posts/bootstrap3-apa-mulai-belajar.png"
  thumb: "posts/thumbs/bootstrap3-apa-mulai-belajar.png"
---
<h2 class="title-sub bd-danger bd-left bd-left-only">Apa Itu Bootstrap?</h2>
<p class="lead">
<dfn title="front-end framework yang terdiri dari HTML, CSS dan Javascript untuk membuat responsive website">Bootstrap</dfn> adalah front-end framework  yang solek, bagus dan luar biasa yang mengedapankan tampilan untuk mobile device (Handphone, smartphone dll.) guna mempercepat dan mempermudah pengembangan website. Bootstrap menyediakan HTML, CSS dan Javascript siap pakai dan mudah untuk dikembangkan.
</p>
<hr />
<div>
<h2 class="title-sub bd-danger bd-left bd-left-only">Untuk Apa itu bootstrap?</h2>
<p><strong>Bootstrap</strong> merupakan framework untuk membangun desain web secara responsif. Artinya, tampilan web yang dibuat oleh bootstrap akan menyesuaikan ukuran layar dari browser yang kita gunakan baik di desktop, tablet ataupun mobile device. Fitur ini bisa diaktifkan ataupun dinon-aktifkan sesuai dengan keinginan kita sendiri. Sehingga, kita bisa membuat web untuk tampilan desktop saja dan apabila dirender oleh mobile browser maka tampilan dari web yang kita buat tidak bisa beradaptasi sesuai layar. Dengan bootstrap kita juga bisa membangun web dinamis ataupun statis. </p>
<h2 class="title-sub bd-danger bd-left bd-left-only">Bagaimana Belajar Bootstrap untuk pemula?</h2>
<p>Untuk memulai belajar Bootstrap, Anda harus mempersiapkan bahan dan tools pendukung untuk melengkapi kegiatan belajar tersebut. Baiklah, langsung saja kita mulai dengan mengikuti langkah-langkah sebagai berikut.</p>
<h3 class="title-sub bd-primary bd-left bd-left-only">Persiapan (Step-by-Step):</h3>
<ol>
<li> <strong>Anda Harus memiliki file distribusi Bootstrap</strong>
<p><a class="button" rel="nofollow" target="_blank" href="https://github.com/twbs/bootstrap/releases/download/v3.3.7/bootstrap-3.3.7-dist.zip">Download Bootstrap 3 (v3.7.7)</a></p>
<p>Jika link download tersebut tidak tersedia, kunjungi situs resminya di  <a rel="nofollow" target="_blank" href="http://getbootstrap.com/docs/3.3/getting-started/#download">getbootstrap.com</a> kemudian pilih link atau klik tombol <q>Download Bootstrap</q>.</p>
<p>Untuk menggunakan bootstrap, terlebih dahulu Anda harus mendownload resource file atau file distribusi yang disediakan oleh bootstrap di situs resminya getbootstrap.com. Karena pada tutorial ini kita akan menggunakan bootstrap 3 maka kita menuju halaman download untuk bootstrap 3 dari link pada tomblo diatas.</p>
<p>Setelah didownload, kemudian extract menggunakan program seperti <a rel="nofollow" target="_blank" href="http://www.7-zip.org/">7zip (Gratis)</a> atau <em>winRAR (shareware)</em>. Sebetulnya, Anda juga bisa membuka file tersebut dengan aplikasi bawaan windows dengan cara membuka file tersebut, kemudian copy seluruh file dan paste-kan ke folder lain.</p>
</li>
<li><strong>Download jQuery Library Untuk Bekerja Offline</strong>
<p><a class="button" rel="nofollow" target="_blank" href="https://code.jquery.com/jquery-3.2.1.min.js" download="download">Download jQuery (v3.2.1)</a></p>
<p>Jika link download tersebut tidak tersedia, kunjungi situs resminya di  <a rel="nofollow" target="_blank" href="http://jquery.com/download/">jquery.com</a> kemudian pilih link <q>Download the compressed, production jQuery 3.2.1</q>.</p>
<p>Untuk bisa mengaplikasikan bootstrap component seperti modal dialog, navigation bar dan lainnya yang membutuhkan boostrap JS, Bootstrap JS juga membutuhkan jQuery library agar bisa berjalan normal. Bootstrap tidak menyertakan jQuery di dalam file download-nya untuk itu, kita harus mendownloadnya secara terpisah. Hal ini dilakukan agar kita bisa bekerja dan menggunakannya secara offline (tanpa koneksi internet).</p>
</li>
<li><strong>Anda harus memiliki code editor.</strong>
<p><a class="button" rel="nofollow" target="_blank" href="https://notepad-plus-plus.org/repository/7.x/7.5.3/npp.7.5.3.Installer.exe" download="download">Download Notepad++  (v7.5.3)</a></p>
<p>Jika link download tersebut tidak tersedia, kunjungi situs resminya di  <a rel="nofollow" target="_blank" href="https://notepad-plus-plus.org/">notepad-plus-plus.org</a> kemudian pilih link atau klik <q>Download</q> yang ada di panel kiri halaman paling bawah.</p>
<p>Code editor penting sekali untuk memanipulasi file yang akan kita kembangkan khususnya file HTML, CSS dan Javascript  sebagaimana file tersebut terdapat pada bootstrap. Anda juga bisa menggunakan <a href="#bootstrapplay">Bootstrap Play</a> dari kami yang dibuat untuk tes atau uji coba kode, baik Bootstrap, HTML, CSS dan Javascript langsung dalam satu editor. Jangan pernah menggunakan Word processor (Microsoft Word, dll) ataupun notepad untuk memanipulasi file-file tersebut. Karena aplikasi tersebut tidak cocok dan terdapat banyak kekurangan yang akan membingungkan kita sendiri nantinya.</p>
<p>Ada banyak sekali code editor yang tersebar di internet yang dapat kita gunakan baik yang gratis maupun yang berbayar. Sebagai pemula, mungkin kita bisa memulai dengan menggunakan Notepad++. Aplikasi ini gratis dan banyak digunakan oleh developer.</p>
</li>

</ol>
<h3 class="title-sub bd-primary bd-left bd-left-only">Memulai...</h3>
<p>Setelah semua dipersiapkan saatnya memulai untuk belajar bootstrap. Baik, ikuti tahap-tahapnya berikut ini: </p>
<ol>
<li><strong>Buat Folder Baru</strong>
<p>Buatlah folder baru, beri nama "Belajar_Bootstrap". </p></li>
<li><strong>Copy seluruh file Bootstrap ke dalam Folder Baru Tersebut</strong>
<p>Copy folder <em>css</em>, <em>fonts</em> dan <em>js</em> yang ada pada Bootstrap yang telah kita download tadi, ke dalam folder baru tersebut (Belajar_Bootstrap)</p></li>
<li> <strong>Copy file jQuery ke dalam folder js</strong>
<p>Copy dan Gabungkan file <strong>jquery-1.12.0.min.js</strong> yang telah kita download kedalam folder <em>js</em> punya bootstrap tadi, hal ini dilakukan untuk mempermudah proses pembelajaran.</p>
</li>
<li><strong>Buat file HTML</strong>
<p>Buat file baru di notepadd++ (atau code editor kesayangan Anda) kemudian copy code snippet yang saya sediakan dibawah ini, kemudian save dan berilah nama: <em>index.html</em> dan simpanlah file tersebut ke folder "Belajar_Bootstrap" yang telah dibuat diatas. Berikut kodenya: </p>
</li>

</ol>
<div class="row sl-featured">
<div id="sl-in-ar" class="col-xs-12">
<amp-ad
layout="responsive"
width="500"
height="350"
data-ad-layout="in-article"
data-ad-format="fluid"
type="adsense"
data-ad-client="ca-pub-3288866780282962"
data-ad-slot="7963371614">
</amp-ad>
</div>
</div>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>index.html</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/bootstrap/ref/bootstrap-template-dasar.html" target="_blank"><span>editor</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Bootstrap 3.3.7 Starter Template - by apacara.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Bootstrap css --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>css/bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries --&gt;</span>
    <span class="token comment">&lt;!-- WARNING: Respond.js doesn't work if you view the page via file:// --&gt;</span>
    <span class="token comment">&lt;!--[if lt IE 9]&gt;
      &lt;script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"&gt;&lt;/script&gt;
      &lt;script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- AWAL CONTENT  -- hapus dari sini kebawah (sampai AKHIR CONTENT) --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Apa Kabar Dunia?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- Small modal --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-danger<span class="token punctuation">"</span></span> <span class="token attr-name">data-toggle</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span> <span class="token attr-name">data-target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>.bs-example-modal-sm<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Klik Aku<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal fade bs-example-modal-sm<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dialog<span class="token punctuation">"</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mySmallModalLabel<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-dialog modal-sm<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-content<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-header<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span> <span class="token attr-name">data-dismiss</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>x<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sr-only<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-title<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mySmallModalLabel<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Small modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-body<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
              Hai... salam kenal dari <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>dul<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span> (apacara.com). Jika dialog ini muncul dan Anda bisa baca tulisan ini berarti Bootstrap berhasil di load dan terintegrasi dengan baik. Selamat Belajar
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- AKHIR CONTENT - dari sini kebawah jgn dihapus --&gt;</span>
    <span class="token comment">&lt;!-- jQuery (dibutuhkan oleh Bootstrap's JavaScript plugins) --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/jquery-3.2.1.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Bootstrap js dan semua plugins diletakkkan dibawahnya --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>js/bootstrap.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<h3 class="title-sub bd-primary bd-left bd-left-only">Struktur File dan Folder:</h3>
<p>Setelah Anda melakukan langkah-langkah yang telah dijabarkan di atas, maka file dan folder seharusnya mengikuti struktur sebagai berikut:</p>
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup">Belajar_Bootstrap/
&#x251c;&#x2500;&#x2500; index.html
&#x251c;&#x2500;&#x2500; css/
&#x2502;   &#x251c;&#x2500;&#x2500; bootstrap.css
&#x2502;   &#x251c;&#x2500;&#x2500; bootstrap.css.map
&#x2502;   &#x251c;&#x2500;&#x2500; bootstrap.min.css
&#x2502;   &#x251c;&#x2500;&#x2500; bootstrap.min.css.map
&#x2502;   &#x251c;&#x2500;&#x2500; bootstrap-theme.css
&#x2502;   &#x251c;&#x2500;&#x2500; bootstrap-theme.css.map
&#x2502;   &#x251c;&#x2500;&#x2500; bootstrap-theme.min.css
&#x2502;   &#x2514;&#x2500;&#x2500; bootstrap-theme.min.css.map
&#x251c;&#x2500;&#x2500; js/
&#x2502;   &#x251c;&#x2500;&#x2500; bootstrap.js
    &#x251c;&#x2500;&#x2500; bootstrap.min.js
    &#x251c;&#x2500;&#x2500; jquery-3.2.1.min.js
&#x2502;   &#x2514;&#x2500;&#x2500; npm.js
&#x2514;&#x2500;&#x2500; fonts/
    &#x251c;&#x2500;&#x2500; glyphicons-halflings-regular.eot
    &#x251c;&#x2500;&#x2500; glyphicons-halflings-regular.svg
    &#x251c;&#x2500;&#x2500; glyphicons-halflings-regular.ttf
    &#x251c;&#x2500;&#x2500; glyphicons-halflings-regular.woff
    &#x2514;&#x2500;&#x2500; glyphicons-halflings-regular.woff2</code></pre>
<p>Jika sudah benar, maka kita akan mulai mencoba dan belajar bootstrap pada step berikutnya.</p>
<h3 class="title-sub bd-primary bd-left bd-left-only">Saatnya untuk Uji Coba:</h3>
<p>Buka file "index.html" yang telah dibuat dengan code snippet diatas, buka dengan browser terbaru misalkan Google Chrome atau Firefox <del> jangan gunakan internet explorer</del>. Jika file <em>Bootstrap.css</em> berhasil di-load, maka tombol button akan memiliki style ala bootstrap seperti pada demo <a href="https://www.apacara.com/example/bootstrap/ref/bootstrap-template-dasar.html" target="_blank"><span>disini </span><i class="fa fa-external-link" role="button"></i></a> </p>
<p>Kita coba lagi apakah <em>bootstrap.js</em> berhasil di load dengan cara mengklik tombol "Klik Aku" tersebut. Apabila muncul dialog box, maka <em>bootstrap.js</em> juga berhasil di load dan siap digunakan sebagai template. Gunakan template ini untuk setiap materi pembelajaran bootstrap dan hapuslah AWAL CONTENT sampai AKHIR CONTENT untuk memulai file baru kosong tanpa konten.</p>
<div class="dul-callout dul-callout-success">
<hr>
<h2 class="title-sub bd-danger bd-left bd-left-only">Tidak mau repot? Pengen Instant? Download Aja!</h2>
<p>Nggak mau ngikutin step-step yang sudah diuraikan diatas. Baik, <span class="text-dul text-dul-inline">dul</span> akan share link download siap saji yang bisa digunakan untuk memulai belajar bootstrap. Ini adalah bootstrap <del>v3.2.0</del> <del>3.3.0</del> <del>3.3.1</del> <del>3.3.5</del> <del>3.3.6</del> <ins>3.3.7</ins> yang didalamnya sudah <span class="text-dul text-dul-inline">dul</span> berikan template seperti diatas. <a rel="nofollow" target="_blank" class="button button-primary" href="https://goo.gl/UBEyLG">Download disini</a> </p>
</div>
<h2 class="title-sub bd-danger bd-left bd-left-only">Langkah Selanjutnya Apa?</h2>
<p>Langkah selanjutnya mungkin Anda harus sering-sering mengunjungi situs resmi bootstrap di getbootstrap.com dan mempelajari dokumentasi yang telah disediakan. disini, kami sediakan tutorial bootstrap berbahasa Indonesia secara bertahap. Nantikan Artikel menarik lainnya mengenai Bootstrap. </p>

</div>
<div id="bootstrapplay">
<h2 class="title-sub bd-danger bd-left bd-left-only">Bermain dengan Bootstrap</h2>
<p>Untuk belajar, mencoba kode dan bermain dengan bootstrap, klik tombol dibawah ini:</p>
<p><a class="button" href="https://www.apacara.com/playground/edit/bootstrap3.html">Bootstrap 3 Play</a></p>
<p><a class="button" href="https://www.apacara.com/playground/edit/bootstrap4.html">Bootstrap 4 Play</a></p>
</div>
<hr>
<h2 class="title-sub bd-danger bd-left bd-left-only">Update:</h2>
<p>Bootstrap saat ini telah memiliki versi baru yaitu: Bootstrap 4 (Versi 4). Setelah versi final-nya release, dul akan mencoba membahasnya disini. Untuk info selengkapnya, silahkan kunjungi situs resminya di getbootstrap.com</p>

<h2 class="title-sub bd-danger bd-left bd-left-only">Belajar Bootstrap Itu Mudah</h2>
<p>Belajar bootstrap itu mudah, tapi memang dibutuhkan pengetahuan dasar tentang HTML, CSS dan Javascript. Itu semua bisa Anda pelajari langkah demi langkah yang akan dibahas disini.</p>
<hr>
<h4 class="uk-text-success">Link Artikel ini: </h4>
<p>Jika Anda ingin mereferensikan artikel halaman ini, gunakan link berikut:</p>
<div class="icard">
<div class="icard-body icode itheme">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="html  language-markup">https://www.apacara.com/tutorial/bootstrap3/belajar-bootstrap-untuk-pemula.html</code>
</pre>
</div>
</div>
<h3>Additional Information and Resources</h3>
<div class="sources bg-gr3 bordered p-space-v">
  <ul>
    <li><a rel="nofollow" href="http://getbootstrap.com" target="_blank" class="text-muted"> http://getbootstrap.com</a></li>
    <li><a rel="nofollow" href="https://www.w3schools.com/bootstrap/" target="_blank" class="text-muted"> https://www.w3schools.com/bootstrap/</a></li>
    <li><a rel="nofollow" href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" class="text-muted"> https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/</a></li>
  </ul>
</div>