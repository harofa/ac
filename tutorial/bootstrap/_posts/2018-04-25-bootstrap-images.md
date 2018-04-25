---
layout: post
template: post
date: 25 April 2018
prism: true

title: "Bootstrap 4 Images - Menyisipkan Gambar"
short_title: "Bootstrap 4 - Images"
language: id

metadata:
  description: "Bootstrap Images tutorial. Referensi Belajar Bootstrap, pembahasan secara detail mengenai fitur dan komponen yang ada pada  framework twitter bootstrap. mengenai Bootstrap 4 Images (Gambar). Bagaimana menyisipkan Gambar di Bootstrap."

author: dul

tags: bootstrap,bootstrap4
tag: [bootstrap,bootstrap4]
taxonomy:
  category: bootstrap
  tags: bootstrap,bootstrap4
  tag: [bootstrap,bootstrap4]
images:
  figure: "bootstrap/images.png"
  thumb: "bootstrap/thumbs/images.png"
---
<p class="lead demo">Belajar bagaimana menyisipkan gambar dalam sebuah dokumen HTML yang ditenagai oleh Bootstrap sekaligus gambar yang ditampilkan menyesuaikan ukuran layar browser (dikenal dengan istilah <em>responsive</em>). Sehingga, tidak masalah apabila dilihat dari perangkat apapun baik desktop, smartphone ataupun tablet.</p>
<hr/>

<h2 class="title-sub bd-danger bd-left bd-left-only">Responsive images
<br><small>Gambar Responsif</small>
</h2>

<p>Untuk menyisipkan gambar dalam sebuah dokumen HTML, gunakan element <a href="/tutorial/html/html-img-tag.html">&lt;img&gt;</a>. Agar gambarnya responsive sebagaimana dijelaskan di atas, tambahkan class <code>.img-fluid</code>, sehingga menjadi <code>&lt;img class="img-fluid"&gt;</code>.</p>

<p>Berikut contoh lengkapnya:</p>

<div class="source-preview my-3">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-image-responsive.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;img src=&quot;/media/images/cat.jpg&quot; class=&quot;img-fluid&quot; alt=&quot;Kucing Lucu&quot;&gt; </code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body">
<img src="/media/images/cat.jpg" class="img-fluid" alt="Kucing Lucu">
  </div>
</div>
</div>

<p>Perhatikan contoh di atas, dengan menggunakan class <code>.img-fluid</code> meskipun ukuran layar Browser diperbesar atau diperkecil, gambar akan tetap menyesuaikan layar.</p>

<h2 class="title-sub bd-danger bd-left bd-left-only">Image thumbnails
<br><small>Gambar thumbnail</small>
</h2>

<p>Gambar <em>thumbnail</em> biasanya digunakan untuk sebuah gambar dengan style khusus. Pada Bootstrap gambar thumbnail seperti sebuah portrait yang dibingkai.</p>

<p>Bootstrap Menyediakan style tersendiri untuk sebuah <em>thumbnail</em> yaitu dengan menggunakan nama class <code>.img-thumbnail</code> seperti contoh di bawah ini:</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-image-thumbnail.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;img src=&quot;/media/wiki/tuanku-imam-bonjol-100.jpg&quot; class=&quot;img-thumbnail&quot; alt=&quot;Tuanku Imam Bonjol&quot;&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<img src="/media/wiki/tuanku-imam-bonjol-100.jpg" class="img-thumbnail" alt="Tuanku Imam Bonjol">
  </div>
</div>
</div>

<h2 class="title-sub bd-danger bd-left bd-left-only">Mengatur Posisi Gambar
</h2>
<h3 class="title-sub bd-primary bd-left bd-left-only">Float Right
</h3>
<p>Atur posisi gambar agar terletak di sebelah kanan dari konten lain dengan menambahkan nama class <code>.float-right</code> seperti contoh berikut:</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-image-float-right.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;img src=&quot;/media/wiki/pangeran-diponegoro-100.jpg&quot; class=&quot;float-right&quot; alt=&quot;Pangeran Diponegoro&quot;&gt;

&lt;p&gt;Pangeran Diponegoro adalah putra sulung dari Sultan Hamengkubuwana III, raja ketiga di Kesultanan Yogyakarta. Lahir pada tanggal 11 November 1785 di Yogyakarta dengan nama Mustahar dari seorang selir bernama R.A. Mangkarawati, yaitu seorang garwa ampeyan (istri selir) yang berasal dari Pacitan.&lt;/p&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo clearfix">
<img src="/media/wiki/pangeran-diponegoro-100.jpg" class="float-right" alt="Pangeran Diponegoro">

<p>Pangeran Diponegoro adalah putra sulung dari Sultan Hamengkubuwana III, raja ketiga di Kesultanan Yogyakarta. Lahir pada tanggal 11 November 1785 di Yogyakarta dengan nama Mustahar dari seorang selir bernama R.A. Mangkarawati, yaitu seorang garwa ampeyan (istri selir) yang berasal dari Pacitan.</p>
  </div>
</div>
</div>
<hr/>

<h3 class="title-sub bd-primary bd-left bd-left-only">Float Left
</h3>
<p>Atur posisi gambar agar terletak di sebelah kiri dengan memberi nama class <code>.float-left</code> seperti berikut:</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-image-float-left.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;img src=&quot;/media/wiki/ki-hajar-dewantara-100.jpg&quot; class=&quot;float-left mr-3&quot; alt=&quot;Ki Hajar Dewantara&quot;&gt;

&lt;p&gt;Ki Hajar Dewantara lahir di Yogyakarta, 2 Mei 1889. Ia meninggal di Yogyakarta, 26 April 1959 pada umur 69 tahun. Setelah meninggal Ia dikukuhkan sebagai pahlawan nasional yang ke-2 oleh Presiden RI, Soekarno, pada 28 November 1959 (Surat Keputusan Presiden Republik Indonesia No. 305 Tahun 1959, tanggal 28 November 1959).&lt;/p&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo clearfix">
<img src="/media/wiki/ki-hajar-dewantara-100.jpg" class="float-left mr-3" alt="Ki Hajar Dewantara">

<p>Ki Hajar Dewantara lahir di Yogyakarta, 2 Mei 1889. Ia meninggal di Yogyakarta, 26 April 1959 pada umur 69 tahun. Setelah meninggal Ia dikukuhkan sebagai pahlawan nasional yang ke-2 oleh Presiden RI, Soekarno, pada 28 November 1959 (Surat Keputusan Presiden Republik Indonesia No. 305 Tahun 1959, tanggal 28 November 1959).</p>
  </div>
</div>
</div>
<hr/>

<h2 class="title-sub bd-danger bd-left bd-left-only">Center Image
<br/><small>Gambar Posisi Di Tengah</small>
</h2>
<p>Ada dua cara untuk memposisikan gambar agar berada Ditengah-tengah. Yang pertama, dengan menggabungkan beberapa nama class diantaranya: <code>class="mx-auto d-block"</code> seperti contoh berikut:</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-image-center.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;img src=&quot;/media/wiki/cut-nyak-dhien-100.jpg&quot; class=&quot;mx-auto d-block&quot; alt=&quot;cut nyak dhien&quot;&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<img src="/media/wiki/cut-nyak-dhien-100.jpg" class="mx-auto d-block" alt="cut nyak dhien">
  </div>
</div>
</div>

<hr/>

<p>Cara yang kedua adalah dengan menempatkan gambar di dalam element <a href="/tutorial/html/html-div-tag.html">&lt;div&gt;</a> dengan diberi nama class <code>.text-center</code> seperti contoh di bawah ini:</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-image-text-center.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;div class=&quot;text-center&quot;&gt;
  &lt;img src=&quot;/media/wiki/kartini-100.jpg&quot; alt=&quot;Ibu Kita Kartini&quot;&gt;
&lt;/div&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<div class="text-center">
  <img src="/media/wiki/kartini-100.jpg" alt="Ibu Kita Kartini">
</div>
  </div>
</div>
</div>
<hr/>
<h2 class="title-sub bd-danger bd-left bd-left-only">Gambar Sisi Bundar (Rounded Image)
</h2>

<p>Contoh gambar dengan sisi tumpul. Tambahkan nama class <code>.rounded</code> pada &lt;img&gt; element. seperti di bawah ini:</p>

 <div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-image-rounded.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;img src=&quot;/media/wiki/sultan-hasanuddin-200.jpg&quot; class=&quot;rounded&quot; alt=&quot;Sultan Banten Hasanuddin&quot;&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<img src="/media/wiki/sultan-hasanuddin-200.jpg" class="rounded" alt="Sultan Banten Hasanuddin">
  </div>
</div>
</div>

<hr>

<h2 class="title-sub bd-danger bd-left bd-left-only">Menggunakan Element Picture
<br><small>Sisip gambar dengan &lt;picture&gt; Tag</small>
</h2>

<p>Kita dapat menggunakan element <code>&lt;picture&gt;</code> yang biasa digunakan untuk merujuk gambar lebih dari satu. Gunakan tambahan kelas (nama class) sebagaimana dijabarkan diatas tepat di dalam element <code>&lt;img&gt;</code> tag bukan di dalam <code>&lt;picture&gt;</code> tag.</p>

<p>Untuk lebih jelasnya, perhatikan contoh di bawah ini:</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-image-picture.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;picture&gt;
  &lt;source media=&quot;(min-width: 992px)&quot; srcset=&quot;/media/images/camel.jpg&quot;&gt;
  &lt;source media=&quot;(min-width: 768px)&quot; srcset=&quot;/media/images/mouse.jpg&quot;&gt;
  &lt;img src=&quot;/media/images/horse.jpg&quot; class=&quot;img-fluid img-thumbnail&quot; alt=&quot;Horse&quot;&gt;
&lt;/picture&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<picture>
  <source media="(min-width: 992px)" srcset="/media/images/camel.jpg">
  <source media="(min-width: 768px)" srcset="/media/images/mouse.jpg">
  <img src="/media/images/horse.jpg" class="img-fluid img-thumbnail" alt="Horse">
</picture>
  </div>
</div>
</div>
<p>Pada contoh di atas, cobalah untuk memperbesar atau memperkecil ukuran layar browser. Gambar akan berubah pada ukuran layar yang berbeda.</p>
