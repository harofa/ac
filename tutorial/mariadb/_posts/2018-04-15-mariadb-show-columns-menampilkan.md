---
layout: post_amp
template: post_amp
date: 10 April 2018


title: "MariaDB: SHOW COLUMNS - Menampilkan informasi Kolom"
short_title: "SHOW COLUMNS"
language: id

metadata:
  description: "Tutorial belajar bagaimana menggunakan perintah SHOW COLUMNS dalam database MariaDB atau MySQL yang digunakan untuk menampilkan kolom apa saja yang terdapat dalam sebuah tabel"

author: halwa
tags: mariadb, mariadbref
tag: [mariadb, mariadbref]
taxonomy:
  category: html
  tags: mariadb, mariadbref
  tag: [mariadb, mariadbref]
images:
  figure: "posts/mariadb-show-columns.png"
  thumb: "posts/thumbs/mariadb-show-columns.png"
---
<p class="lead">Tutorial ini, akan memandu kita bagaimana menggunakan perintah "SHOW COLUMNS" dalam database MariaDB atau MySQL yang digunakan untuk menampilkan kolom apa saja yang terdapat dalam sebuah tabel tertentu. Kita nanti akan mengetahui nama-nama kolom yang terdapat dalam nama tabel yang kita tentukkan tersebut lengkap beserta tipe data dan rincian lainnya.</p>
<hr />
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">SHOW</span> <span class="token punctuation">[</span><span class="token keyword">FULL</span><span class="token punctuation">]</span> {<span class="token keyword">COLUMNS</span> <span class="token operator">|</span> <span class="token keyword">FIELDS</span>} <span class="token keyword">FROM</span> tbl_name <span class="token punctuation">[</span><span class="token keyword">FROM</span> db_name<span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token operator">LIKE</span> <span class="token string">'pattern'</span> <span class="token operator">|</span> <span class="token keyword">WHERE</span> expr<span class="token punctuation">]</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code>
</pre>
  </div>
</div>

<h2>Penjelasan</h2>
<p><code>SHOW COLUMNS</code> pada MariaDB dapat digunakan untuk menampilkan informasi lebih detail mengenai kolom pada sebuah tabel. Jika diperhatikan pada syntax diatas, <code>LIKE</code> dan <code>WHERE</code> digunakan pada sebuah kondisi "SEPERTI" apa? dan "YANG MANA.."</p>

<p>Informasi untuk menampilkan detail kolom ini akan sering dilakukan jika kita lupa kolom apa saja yang ada dalam tabel tersebut, nama kolomnya apa? tipe datanya apa untuk masing-masing kolom atau field tersebut? dan informasi penting lainnya.</p>

<p><strong>SHOW COLUMNS</strong> tentunya hanya menampilkan detail kolom dalam sebuah table, berbeda dengan perintah <code>SHOW TABLES</code> yang akan menampilkan informasi mengenai tabel dalam sebuah database.</p>

<h2>Contoh</h2>
<p>Contoh sederhana dan singkatnya adalah sebagai berikut:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span></span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> namatabel <span class="token keyword">FROM</span> namadatabase<span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>
<p>Jika diterjemahkan, artinya: "TAMPILKAN SEMUA KOLOM DARI namatabel DARI namadatabase". <strong>namatabel</strong> dan <strong>namadatabase</strong> tentunya disesuaikan dengan nama tabel dan database yang ingin kita tampilkan informasinya.</p>

 <p>Contoh tersebut diatas, dapat ditulis lebih singkat lagi seperti berikut:</p>
 <div class="icard">
   <div class="icard-heading clearfix co-wh bg-in">
     <div class="icard-bar">
       <div class="icard-bar-left pull-left">
         <i class="fa fa-mariadb" aria-hidden="true"></i>
         <span>MariaDB</span>
       </div>
       <div class="icard-bar-right pull-right">
         <span></span>
       </div>
     </div>
   </div>
   <div class="icard-body icode itheme">
 <pre class="prettyprint linenums line-numbers highlight language-sql"> <code data-language="sql" class=" language-sql"><span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> namadatabase<span class="token punctuation">.</span>namatabel<span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
 </pre>
   </div>
 </div>
<p>Berikut sinomim atau varian lain dari <strong>SHOW COLUMNS</strong></p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span></span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">SHOW</span> <span class="token keyword">FIELDS</span> <span class="token keyword">FROM</span> namadatabase<span class="token punctuation">.</span>namatabel<span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>
<p><code>SHOW COLUMNS</code> dan <code>SHOW FIELDS</code> keduanya sama saja (sinonim). Anda boleh pilih salah satu bahasa yang Anda sukai.</p>

<h2>Contoh Lengkap</h2>
<p>Berikut adalah contoh dan hasil yang akan ditampilkan.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span></span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> kota<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">------------+----------+------+-----+---------+----------------+</span>
<span class="token operator">|</span> Field      <span class="token operator">|</span> <span class="token keyword">Type</span>     <span class="token operator">|</span> <span class="token boolean">Null</span> <span class="token operator">|</span> <span class="token keyword">Key</span> <span class="token operator">|</span> <span class="token keyword">Default</span> <span class="token operator">|</span> Extra          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------+----------+------+-----+---------+----------------+</span>
<span class="token operator">|</span> Id         <span class="token operator">|</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>  <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span> PRI <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span> <span class="token keyword">auto_increment</span> <span class="token operator">|</span>
<span class="token operator">|</span> Nama       <span class="token operator">|</span> char<span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span>     <span class="token operator">|</span>         <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">|</span> Negara     <span class="token operator">|</span> char<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span> UNI <span class="token operator">|</span>         <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">|</span> Provinsi   <span class="token operator">|</span> char<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">|</span> YES  <span class="token operator">|</span> MUL <span class="token operator">|</span>         <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">|</span> Populasi   <span class="token operator">|</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>  <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token number">0</span>       <span class="token operator">|</span>                <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------------+----------+------+-----+---------+----------------+</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<p>Contoh menggunakan kondisi:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span></span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">SHOW</span> <span class="token keyword">COLUMNS</span> <span class="token keyword">FROM</span> karyawan <span class="token keyword">WHERE</span> <span class="token keyword">Type</span> <span class="token operator">LIKE</span> <span class="token string">'Varchar%'</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------+-------------+------+-----+---------+-------+</span>
<span class="token operator">|</span> Field         <span class="token operator">|</span> <span class="token keyword">Type</span>        <span class="token operator">|</span> <span class="token boolean">Null</span> <span class="token operator">|</span> <span class="token keyword">Key</span> <span class="token operator">|</span> <span class="token keyword">Default</span> <span class="token operator">|</span> Extra <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------+-------------+------+-----+---------+-------+</span>
<span class="token operator">|</span> nama_awal     <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span> MUL <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> nama_akhir    <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> posisi        <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> alamat        <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> telpon        <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span>     <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">|</span> nik_karyawan  <span class="token operator">|</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">NO</span>   <span class="token operator">|</span> UNI <span class="token operator">|</span> <span class="token boolean">NULL</span>    <span class="token operator">|</span>       <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------+-------------+------+-----+---------+-------+</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<h3>Catatan Penting:</h3>
<p><code>SHOW COLUMNS</code> ini memang digunakan bersama dengan kondisi LIKE atau WHERE untuk menampilkan kolom yang lebih spesifik, karena kebanyakan database administrator lebih suka menggunakan perintah <code>DESCRIBE</code> dan <code>EXPLAIN</code> jika hanya ingin menampilkan semua kolom, dengan syntax yang lebih pendek dan mudah diingat tapi hasilnya sama saja. Semua itu kembali pada diri Anda lebih suka yang mana? Silahkan pelajari statement DESCRIBE dan EXPLAIN pada artikel khusus yang dibahas tersendiri.</p>

<h3>Reference:</h3>
<div class="sources bg-gr3 bordered p-space">
  <a rel="nofollow" href="https://mariadb.com/kb/en/mariadb/show-columns/" target="_blank" class="text-muted">https://mariadb.com/kb/en/mariadb/show-columns/</a>

</div>