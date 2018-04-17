---
layout: post_amp
template: post_amp
date: 10 March 2018

title: "MariaDB: DESCRIBE Untuk Menjelajah Struktur Tabel"
short_title: "DESCRIBE"
language: id

metadata:
  description: "Tutorial belajar menggunakan perintah DESCRIBE dalam database MariaDB atau MySQL yang digunakan untuk menampilkan deskripsi sebuah table dengan lengkap beserta rinciannya (lebih detail)"

author: halwa
tags: mariadb, mariadbref
tag: [mariadb, mariadbref]
taxonomy:
  category: html
  tags: mariadb, mariadbref
  tag: [mariadb, mariadbref]
images:
  figure: "posts/mariadb-describe.png"
  thumb: "posts/thumbs/mariadb-describe.png"
---
<p class="lead">Tutorial ini, akan memandu kita bagaimana menggunakan "DESCRIBE" dalam database MariaDB atau MySQL yang digunakan untuk menampilkan deskripsi sebuah table dengan rinci. Kita nanti akan mengetahui nama-nama kolom yang terdapat dalam tabel tersebut lengkap beserta tipe data dan rincian lainnya.</p>
<hr/>
<h2>Syntax</h2>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span>Syntax</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql">{<span class="token keyword">DESCRIBE</span> <span class="token operator">|</span> <span class="token keyword">DESC</span>} tbl_name <span class="token punctuation">[</span>col_name <span class="token operator">|</span> wild<span class="token punctuation">]</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>

<h2>Penjelasan</h2>
<p>Perintah <code>DESCRIBE</code> digunakan untuk mendeskripsikan struktur sebuah tabel. Informasi yang didapat adalah struktur kolom atau field apa saja yang terdapat dalam tabel tersebut berikut tipe data dan informasi lainnya yang ingin kita ketahui lebih detail berkaitan dengan kolom-kolom pada sebuah tabel.</p>
<p><code>DESCRIBE</code> akan memberikan informasi berkaitan dengan kolom-kolom dalam sebuah tabel. Perintah <code>DESCRIBE</code> lebih singkat ditulis jika dibandingkan dengan <a href="http://abc.web.id/2017/03/mariadb-show-columns-menampilkan.html" target="_blank">SHOW COLOMNS FROM</a>.</p>
<p>Kebutuhan menggunakan perintah <code>DESCRIBE</code> ini muncul apabila kita ingin mendapatkan informasi kolom apa saja yang terdapat dalam tabel tertentu? yang tentunya kita juga mungkin lupa tipe data apa dalam kolom tersebut.</p>
<p>Perlu diketahui, jika sebelumnya kita telah membuat table dan menyisipkan komentar pada baris tertentu, maka pada perintah DESCRIBE ini, komentar yang sebelumnya ditulis tidak akan ditampilkan.</p>
<h2>Contoh</h2>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span>Syntax</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">DESCRIBE</span> namatabel<span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>

<p>namatabel diganti dengan nama tabel yang ingin Anda lihat kolom-kolom apa saja yang terdapat dalam tabel tersbut berikut informasi tipe data dan lainnya akan ditampilkan.</p>
<h2>MariaDB DESC lebih singkat</h2>
<p>Contoh lainnya, lebih singkat:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span>Syntax</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">DESC</span> namatabel <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>

<p><em>DESC</em> merupakan singkatan untuk <em>DESCRIBE</em>. Jadi, hasilnya sama saja tapi penulisannya lebih singkat dan pendek.</p>
<h2>Contoh Lengkap</h2>
<p>Berikut ini contoh lengkapnya, kira-kira seperti inilah nanti hasil yang akan ditampilkan.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span>Example</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">DESCRIBE</span> kota<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------+----------+------+-----+---------+----------------+</span>
<span class="token operator">|</span> Field      <span class="token operator">|</span> <span class="token keyword">Type</span>     <span class="token operator">|</span> <span class="token boolean">Null</span> <span class="token operator">|</span> <span class="token keyword">Key</span> <span class="token operator">|</span> <span class="token keyword">Default</span> <span class="token operator">|</span> Extra          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------+----------+------+-----+---------+----------------+</span>
<span class="token operator">|</span> Id         <span class="token operator">|</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>  <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span> PRI <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span> <span class="token keyword">auto_increment</span> <span class="token operator">|</span>
<span class="token operator">|</span> Nama       <span class="token operator">|</span> char<span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">|</span> Negara     <span class="token operator">|</span> char<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span> UNI <span class="token operator">|</span>         <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">|</span> Daerah     <span class="token operator">|</span> char<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span> MUL <span class="token operator">|</span>         <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">|</span> Populasi   <span class="token operator">|</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>  <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------+----------+------+-----+---------+----------------+</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<p>Contoh diatas adalah menampilkan struktur atau deskripsi sebuah tabel dengan nama "kota". Kemudian pada <strong>Field</strong>" (kolom) contoh diatas, kita dapat lihat ada 5 nama kolom. Anda dapat melihat deskripsi tabel yang pernah Anda buat dengan cara seperti ini.</p>
<h3>Contoh Lainnya</h3>
<p>Berikut perlu diperhatikan juga, contoh yang dapat kita gunakan untuk mendeskripsikan kolom lebih khusus. Pada contoh dibawah ini, saya ingin mendeskripsikan kolom <strong>tanggal</strong> (misalnya) yang terdapat dalam sebuah tabel <strong>artikel</strong>, tapi hanya kolom ini saja yang ingin kita tampilkan (jadi lebih spesifik).</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span>Example</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">DESCRIBE</span> artikel tanggal<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----------+------+------+-----+---------+-------+</span>
<span class="token operator">|</span> Field    <span class="token operator">|</span> <span class="token keyword">Type</span> <span class="token operator">|</span> <span class="token boolean">Null</span> <span class="token operator">|</span> <span class="token keyword">Key</span> <span class="token operator">|</span> <span class="token keyword">Default</span> <span class="token operator">|</span> Extra <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+------+------+-----+---------+-------+</span>
<span class="token operator">|</span> tanggal  <span class="token operator">|</span> <span class="token keyword">date</span> <span class="token operator">|</span> YES  <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+------+------+-----+---------+-------+</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<p>Jadi, instruksinya adalah "tampilkan DESKRIPSI untuk kolom <strong>tanggal</strong> pada tabel <strong>artikel</strong> ".</p>

<h3>Reference:</h3>
<div class="sources bg-gr3 bordered p-space">
  <a rel="nofollow" href="https://mariadb.com/kb/en/describe/" target="_blank" class="text-muted">https://mariadb.com/kb/en/describe/</a>

</div>