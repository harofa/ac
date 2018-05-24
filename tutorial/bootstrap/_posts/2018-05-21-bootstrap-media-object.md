---
layout: post
template: post
date: 21 May 2018
prism: true

title: "Bootstrap 4 Media Object"
short_title: "Bootstrap 4 - Media Object"
language: id

metadata:
  description: "Bootstrap Media Object tutorial. Referensi Belajar Bootstrap, pembahasan secara detail mengenai fitur dan komponen yang ada pada  framework twitter bootstrap. mengenai Bootstrap 4 media objek."

author: dul

tags: bootstrap,bootstrap4
tag: [bootstrap,bootstrap4]
taxonomy:
  category: bootstrap
  tags: bootstrap,bootstrap4
  tag: [bootstrap,bootstrap4]
images:
  figure: "bootstrap/media-object.png"
  thumb: "bootstrap/thumbs/media-object.png"
---
<p class="lead demo"><em>Media object</em> merupakan bagian dari bootstrap layout yang berguna untuk menempatkan beberapa komponen dan media (seperti gambar, video dan lainnya) agar memiliki tata letak yang sejajar dengan konten-nya. Layout untuk objek media seperti ini, dimaksudkan untuk membuat stayle sejenis agar dapat digunakan secara berulang (terus-menerus) beberapa kali sesuai kebutuhan. Sehingga, dapat diaplikasikan pada komponen yang kompleks sekalipun</p>
<hr/>
<p>Penggunaan <strong>Bootstrap media object</strong> sering kita lihat pada layout komentar (comment) yang biasanya terdapat dalam sebuah halaman blog. Bootstrap media object juga bisa digunakan untuk aplikasi lainnya sesuai kebutuhan.</p>

<h2 class="title-sub bd-danger bd-left bd-left-only">Cara Menggunakan
<br /><small>Bootstrap Media Object</small>
</h2>
<p>Untuk menggunakan bootstrap media object hanya dibutuhkan dua nama class, yaitu <code>media</code> dan <code>media-body</code>. class media digunakan sebagai induk objek atau sebuah kontainer yang menampung media. Adapun, <code>media-body</code> adalah konten yang berdampingan dengan media tersebut.</p>
<p>Untuk penataan yang lebih baik dan mengatur spasi (jarak) antar element, Anda juga dapat menggunakan <em>spacing utilities</em> bawaan bootstrap. Akan tetapi, jika Anda memiliki style khusus sendiri maka utilities tersebut tidak diperlukan.</p>

<h2 class="title-sub bd-danger bd-left bd-left-only">Contoh
</h2>
<p>Beberapa contoh berikut langsung dapat Anda praktekkan. dengan editor khusus dari kami, Anda bisa koding langsung di browser dan melihat hasilnya secara realtime.</p>
<p><strong>Contoh 1:</strong></p>
<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-media-object-example.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;div class=&quot;media&quot;&gt;
  &lt;img class=&quot;mr-3&quot; src=&quot;/media/wiki/kartini-64.jpg&quot; alt=&quot;Raden Ajeng Kartini&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5 class=&quot;mt-0&quot;&gt;Raden Ajeng Kartini&lt;/h5&gt;
    &lt;p&gt;Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.&lt;/p&gt;
&lt;/div&gt;
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
<div class="media">
  <img class="mr-3" src="/media/wiki/kartini-64.jpg" alt="Raden Ajeng Kartini">
  <div class="media-body">
    <h5 class="mt-0">Raden Ajeng Kartini</h5>
    <p>Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.</p>
</div>
</div>
</div>
</div>
</div>

<hr/>
<p>Pada contoh tersebut, keterangannya adalah sebagai berikut:</p>
<ul>
  <li><strong>Baris ke-1</strong>: menulis HTML element <a href="/tutorial/html/html-div-tag.html">&lt;div&gt;</a>  dengan nama class <code>media</code> diakhiri dengan tag penutup <code>&lt;/div&gt; dibaris ke-6.</code></li>
  <li><strong>Baris ke-2</strong>: Menulis HTML <a href="/tutorial/html/html-img-tag.html">&lt;img&gt;</a> tag,  Pada contoh tersebut media yang digunakan adalah sebuah gambar. class <code>mr-3</code> digunakan untuk memberi spasi margin kanan(margin-right).</li>
  <li><strong>Baris ke-3</strong>: menulis tag &lt;div&gt; dengan tambahan nama class <code>.media-body</code> yang dapat diisi dengan konten (teks) yang bersebelahan dengan objek media.</li>
  <li>class <code>mt-0</code> digunakan untuk memberi spasi margin atas (margin-top)</li>
</ul>
<hr>
<h2 class="title-sub bd-danger bd-left bd-left-only">Nested (Bersarang) / Bertumpuk
</h2>
<p>Dalam sebuah media objek dapat ditulis media objek lain secara bertumpuk. Untuk menggunakannya, buat contoh pertama diatas sebanyak dua kali, kemudian objek kedua letakkan di dalam class <code>.media-body</code> objek pertama. Berikut contohnya:</p>
<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-media-object-nested.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;div class=&quot;media&quot;&gt;
  &lt;img class=&quot;mr-3&quot; src=&quot;/media/wiki/kartini-64.jpg&quot; alt=&quot;Raden Ajeng Kartini&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5 class=&quot;mt-0&quot;&gt;Raden Ajeng Kartini&lt;/h5&gt;
    &lt;p&gt;Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.&lt;/p&gt;
    &lt;div class=&quot;media&quot;&gt;
      &lt;img class=&quot;mr-3&quot; src=&quot;/media/wiki/cut-nyak-dhien-64.jpg&quot; alt=&quot;Cut Nyak Dhien&quot;&gt;
      &lt;div class=&quot;media-body&quot;&gt;
        &lt;h5 class=&quot;mt-0&quot;&gt;Cut Nyak Dhien&lt;/h5&gt;
        &lt;p&gt;Cut Nyak Dhien lahir di Aceh, tahun 1848. Ia meninggal di Sumedang, Jawa Barat, 6 November 1908 pada umur 59-60 tahun dan dimakamkan di Gunung Puyuh, Sumedang. Kini namanya pun dikenang sebagai pahlawan nasional, dan diabadikan sebagai Bandar Udara Cut Nyak Dhien Nagan Raya di Meulaboh.&lt;/p&gt;
    &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
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
<div class="media">
  <img class="mr-3" src="/media/wiki/kartini-64.jpg" alt="Raden Ajeng Kartini">
  <div class="media-body">
    <h5 class="mt-0">Raden Ajeng Kartini</h5>
    <p>Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.</p>
    <div class="media">
      <img class="mr-3" src="/media/wiki/cut-nyak-dhien-64.jpg" alt="Cut Nyak Dhien">
      <div class="media-body">
        <h5 class="mt-0">Cut Nyak Dhien</h5>
        <p>Cut Nyak Dhien lahir di Aceh, tahun 1848. Ia meninggal di Sumedang, Jawa Barat, 6 November 1908 pada umur 59-60 tahun dan dimakamkan di Gunung Puyuh, Sumedang. Kini namanya pun dikenang sebagai pahlawan nasional, dan diabadikan sebagai Bandar Udara Cut Nyak Dhien Nagan Raya di Meulaboh.</p>
    </div>
    </div>
</div>
</div>
</div>
</div>
</div>
<hr>
<h2 class="title-sub bd-danger bd-left bd-left-only">Penataan (Alignment) Media
</h2>
<p>Karena Bootstrap 4 menggunakan flex, maka kita juga dapat menggunakan <em>flex utilities</em> bawaan bootstrap untuk mengatur perataan objek media supaya rata atas, tengah atau bawah.</p>
<p>Berikut contoh lengkapnya dibawah ini, perhatikan penataan pada media gambarnya.</p>
<h3 class="title-sub bd-primary bd-left bd-left-only">Rata Atas (top-aligned) Media
</h3>
<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-media-object-top-aligned.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;div class=&quot;media&quot;&gt;
  &lt;img class=&quot;align-self-start mr-3&quot; src=&quot;/media/wiki/kartini-64.jpg&quot; alt=&quot;Raden Ajeng Kartini&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5 class=&quot;mt-0&quot;&gt;Raden Ajeng Kartini&lt;/h5&gt;
    &lt;p&gt;Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.&lt;/p&gt;
&lt;/div&gt;
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
<div class="media">
  <img class="align-self-start mr-3" src="/media/wiki/kartini-64.jpg" alt="Raden Ajeng Kartini">
  <div class="media-body">
    <h5 class="mt-0">Raden Ajeng Kartini</h5>
    <p>Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.</p>
</div>
</div>
</div>
</div>
</div>
<hr/>
<h3 class="title-sub bd-primary bd-left bd-left-only">Rata Tengah (center-aligned) Media
</h3>
<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-media-object-center-aligned.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;div class=&quot;media&quot;&gt;
  &lt;img class=&quot;align-self-center mr-3&quot; src=&quot;/media/wiki/kartini-64.jpg&quot; alt=&quot;Raden Ajeng Kartini&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5 class=&quot;mt-0&quot;&gt;Raden Ajeng Kartini&lt;/h5&gt;
    &lt;p&gt;Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.&lt;/p&gt;
&lt;/div&gt;
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
<div class="media">
  <img class="align-self-center mr-3" src="/media/wiki/kartini-64.jpg" alt="Raden Ajeng Kartini">
  <div class="media-body">
    <h5 class="mt-0">Raden Ajeng Kartini</h5>
    <p>Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.</p>
</div>
</div>
</div>
</div>
</div>
<hr/>
<h3 class="title-sub bd-primary bd-left bd-left-only">Rata Bawah (bottom-aligned) Media
</h3>
<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-media-object-bottom-aligned.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;div class=&quot;media&quot;&gt;
  &lt;img class=&quot;align-self-end mr-3&quot; src=&quot;/media/wiki/kartini-64.jpg&quot; alt=&quot;Raden Ajeng Kartini&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5 class=&quot;mt-0&quot;&gt;Raden Ajeng Kartini&lt;/h5&gt;
    &lt;p&gt;Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.&lt;/p&gt;
&lt;/div&gt;
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
<div class="media">
  <img class="align-self-end mr-3" src="/media/wiki/kartini-64.jpg" alt="Raden Ajeng Kartini">
  <div class="media-body">
    <h5 class="mt-0">Raden Ajeng Kartini</h5>
    <p>Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.</p>
</div>
</div>
</div>
</div>
</div>
<hr/>
<h2 class="title-sub bd-danger bd-left bd-left-only">Order (Pengurutan)
</h2>
<p>Media (gambar dan lainnya) selain diposisikan di sebelah kiri, kita juga dapat menempatkannya di posisi kanan dan konten-nya disebelah kiri (dibalik).</p>
<p>Caranya, kita dapat memindahkan element (<code>&lt;img&gt;</code>) di akhir. Atau kita juga dapat menggunakan kode CSS flexbox sendiri.</p>
<p>Perhatikan contoh dibawah ini:</p>
<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-media-object-order.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;div class=&quot;media&quot;&gt;
  &lt;div class=&quot;media-body&quot;&gt;
    &lt;h5 class=&quot;mt-0 mb-1&quot;&gt;Raden Ajeng Kartini&lt;/h5&gt;
    &lt;p&gt;Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.&lt;/p&gt;
  &lt;/div&gt;
  &lt;img class=&quot;mr-l&quot; src=&quot;/media/wiki/kartini-64.jpg&quot; alt=&quot;Raden Ajeng Kartini&quot;&gt;
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
<div class="media">
  <div class="media-body">
    <h5 class="mt-0 mb-1">Raden Ajeng Kartini</h5>
    <p>Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.</p>
  </div>
  <img class="mr-l" src="/media/wiki/kartini-64.jpg" alt="Raden Ajeng Kartini">
</div>
</div>
</div>
</div>
<hr/>
<h2 class="title-sub bd-danger bd-left bd-left-only">Media List
</h2>
<p><em>Media list</em> adalah media object yang ditempatkan pada HTML list element seperti
<a href="/tutorial/html/html-ul-tag.html">&lt;ul&gt;</a> dan <a href="/tutorial/html/html-ol-tag.html">&lt;ol&gt;</a></p>
<p>Untuk menggunakannya, tambahkan class <code>.list-unstyled</code> pada <code>ul</code> atau <code>ol</code> element tersebut. Kemudian class <code>.media</code> ditulis didalam element <strong>&lt;li&gt;</strong>.</p>
<p>Untuk memahaminya, berikut contoh lengkapnya:</p>
<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-media-list.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;ul class=&quot;list-unstyled&quot;&gt;
  &lt;li class=&quot;media&quot;&gt;
    &lt;img class=&quot;mr-3&quot; src=&quot;/media/wiki/cut-nyak-dhien-64.jpg&quot; alt=&quot;Cut Nyak Dhien&quot;&gt;
    &lt;div class=&quot;media-body&quot;&gt;
      &lt;h5 class=&quot;mt-0 bt-1&quot;&gt;Cut Nyak Dhien&lt;/h5&gt;
      &lt;p&gt;Cut Nyak Dhien lahir di Aceh, tahun 1848. Ia meninggal di Sumedang, Jawa Barat, 6 November 1908 pada umur 59-60 tahun dan dimakamkan di Gunung Puyuh, Sumedang. Kini namanya pun dikenang sebagai pahlawan nasional, dan diabadikan sebagai Bandar Udara Cut Nyak Dhien Nagan Raya di Meulaboh.&lt;/p&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;li class=&quot;media my-4&quot;&gt;
    &lt;img class=&quot;mr-3&quot; src=&quot;/media/wiki/kartini-64.jpg&quot; alt=&quot;Raden Ajeng Kartini&quot;&gt;
    &lt;div class=&quot;media-body&quot;&gt;
      &lt;h5 class=&quot;mt-0 bt-1&quot;&gt;Raden Ajeng Kartini&lt;/h5&gt;
      &lt;p&gt;Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.&lt;/p&gt;
  &lt;/div&gt;
  &lt;/li&gt;
  &lt;li class=&quot;media my-4&quot;&gt;
    &lt;img class=&quot;mr-3&quot; src=&quot;/media/wiki/tuanku-imam-bonjol-64.jpg&quot; alt=&quot;Tuanku Imam Bonjol&quot;&gt;
    &lt;div class=&quot;media-body&quot;&gt;
      &lt;h5 class=&quot;mt-0 bt-1&quot;&gt;Tuanku Imam Bonjol&lt;/h5&gt;
      &lt;p&gt;Tuanku Imam Bonjol lahir di Bonjol, Pasaman, Sumatera Barat, Indonesia pada 1 Januari 1772. Beliau wafat dalam pengasingan dan dimakamkan di Lotak, Pineleng, Minahasa, pada 6 November 1864. Beliau adalah salah seorang ulama, pemimpin dan pejuang yang berperang melawan Belanda dalam peperangan yang dikenal dengan nama Perang Padri pada tahun 1803-1838.&lt;/p&gt;
  &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code>
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
<ul class="list-unstyled">
  <li class="media">
    <img class="mr-3" src="/media/wiki/cut-nyak-dhien-64.jpg" alt="Cut Nyak Dhien">
    <div class="media-body">
      <h5 class="mt-0 bt-1">Cut Nyak Dhien</h5>
      <p>Cut Nyak Dhien lahir di Aceh, tahun 1848. Ia meninggal di Sumedang, Jawa Barat, 6 November 1908 pada umur 59-60 tahun dan dimakamkan di Gunung Puyuh, Sumedang. Kini namanya pun dikenang sebagai pahlawan nasional, dan diabadikan sebagai Bandar Udara Cut Nyak Dhien Nagan Raya di Meulaboh.</p>
  </div>
  </li>
  <li class="media my-4">
    <img class="mr-3" src="/media/wiki/kartini-64.jpg" alt="Raden Ajeng Kartini">
    <div class="media-body">
      <h5 class="mt-0 bt-1">Raden Ajeng Kartini</h5>
      <p>Raden Adjeng Kartini / Raden Ayu Kartini merupakan salah seorang pahlawan nasional perempuan yang telah menghabiskan sebagian hidupnya untuk memperjuangkan kesetaraan hak kaumnya dan dikenal sebagai pelopor kebangkitan perempuan pribumi.</p>
  </div>
  </li>
  <li class="media my-4">
    <img class="mr-3" src="/media/wiki/tuanku-imam-bonjol-64.jpg" alt="Tuanku Imam Bonjol">
    <div class="media-body">
      <h5 class="mt-0 bt-1">Tuanku Imam Bonjol</h5>
      <p>Tuanku Imam Bonjol lahir di Bonjol, Pasaman, Sumatera Barat, Indonesia pada 1 Januari 1772. Beliau wafat dalam pengasingan dan dimakamkan di Lotak, Pineleng, Minahasa, pada 6 November 1864. Beliau adalah salah seorang ulama, pemimpin dan pejuang yang berperang melawan Belanda dalam peperangan yang dikenal dengan nama Perang Padri pada tahun 1803-1838.</p>
  </div>
  </li>
</ul>
  </div>
</div>
</div>

<hr/>

<h4>Additional Information and Resources</h4>
<div class="sources bg-gr3 bordered p-space-v">
  <a rel="nofollow" href="http://getbootstrap.com/docs/4.1/layout/media-object/" target="_blank" class="text-muted">http://getbootstrap.com/docs/4.1/layout/media-object/</a>
</div>

