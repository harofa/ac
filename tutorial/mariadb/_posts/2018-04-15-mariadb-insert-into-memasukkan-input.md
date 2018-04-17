---
layout: post_amp
template: post_amp
date: 10 April 2018

title: "MariaDB: INSERT [INTO] - Memasukkan (Input) Data Baru"
short_title: "INSERT INTO"
language: id

metadata:
  description: "Tutorial belajar bagaimana menggunakan perintah INSERT INTO yang digunakan untuk memasukkan (menginput) data baru (record) dalam database MariaDB atau MySQL"

author: halwa
tags: mariadb, mariadbref
tag: [mariadb, mariadbref]
taxonomy:
  category: html
  tags: mariadb, mariadbref
  tag: [mariadb, mariadbref]
images:
  figure: "posts/mariadb-insert-into.png"
  thumb: "posts/thumbs/mariadb-insert-into.png"
---
<p class="lead">Untuk Memasukkan atau menambah data baru dalam sebuah tabel, gunakan perintah <code>INSERT INTO ...</code> diikuti beberapa nilai dan ekspresi lainnya. Kita akan belajar bersama  bagaimana input data dalam database <strong>SQL</strong>  (MariaDB khususnya). Tutorial ini tidak hanya untuk MariaDB saja tapi juga berlaku untuk MySQL. Jadi, meskipun database sistem Anda masih menggunakan <strong>MySQL</strong> Anda masih bisa mengikuti panduan di bawah ini:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">INSERT</span> <span class="token punctuation">[</span>LOW_PRIORITY <span class="token operator">|</span> <span class="token keyword">DELAYED</span> <span class="token operator">|</span> HIGH_PRIORITY<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">IGNORE</span><span class="token punctuation">]</span>
 <span class="token punctuation">[</span><span class="token keyword">INTO</span><span class="token punctuation">]</span> tbl_name <span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>partition_list<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>col<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
 {<span class="token keyword">VALUES</span> <span class="token operator">|</span> <span class="token keyword">VALUE</span>} <span class="token punctuation">(</span>{expr <span class="token operator">|</span> <span class="token keyword">DEFAULT</span>}<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
 <span class="token punctuation">[</span> <span class="token keyword">ON</span> <span class="token keyword">DUPLICATE KEY</span> <span class="token keyword">UPDATE</span>
   col<span class="token operator">=</span>expr
     <span class="token punctuation">[</span><span class="token punctuation">,</span> col<span class="token operator">=</span>expr<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<h2>Penjelasan</h2>
<p>Dalam sebuah database, kegiatan menambahkan data baru akan sering dilakukan karena database tanpa data (konten) tidaklah berarti. Untuk menambah (input) data kita akan selalu bertemu dengan perintah <code>INSERT</code>. Tambahan kata <code>INTO</code>, hanyalah bersifat opsional meskipun kita lupa menulisnya, perintah tetap akan dijalankan. Tapi, selalu dianjurkan untuk menulis kata <code>INTO</code> setelah <code>INSERT</code> Jadi tepatnya adalah <code>INSERT INTO</code>.</p>
<p><strong>Penting:</strong>  Agar dapat mengikuti tutorial ini, silahkan terlebih dahulu buat table dengan menjalankan perintah berikut:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">`</span>guru<span class="token punctuation">`</span> <span class="token punctuation">(</span>
  <span class="token punctuation">`</span>id<span class="token punctuation">`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>nama<span class="token punctuation">`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">`</span>tgl_lahir<span class="token punctuation">`</span> <span class="token keyword">date</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>id<span class="token punctuation">`</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">8</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>latin1<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<h2>Contoh Memasukkan / Tambah Data Baru</h2>
<p>Berikut beberapa contoh menggunakan <code>INSERT</code> untuk menambah data ke dalam database:</p>
<h3>Contoh Input Data Cuma Satu (Baris)</h3>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> guru <span class="token punctuation">(</span>id<span class="token punctuation">,</span> nama<span class="token punctuation">,</span> tgl_lahir<span class="token punctuation">)</span>
<span class="token keyword">VALUE</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'Sulaiman'</span><span class="token punctuation">,</span> <span class="token string">'1987-02-21'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code>
</pre>
  </div>
</div>

<p><em>id</em>, <em>nama</em>, <em>tgl_lahir</em> adalah contoh nama kolom. Jika kita tidak sebutkan nama-nama kolomnya seperti contoh di bawah ini, maka seluruh data (VALUE) untuk masing-masing kolom harus ditulis (disebutkan) sesuai urutan semua kolom yang ada dalam tabel tersebut.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> guru
<span class="token keyword">VALUE</span><span class="token punctuation">(</span><span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token string">'Jaka Tingkir'</span><span class="token punctuation">,</span> <span class="token string">'1987-02-21'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code>
</pre>
  </div>
</div>

<p>Contoh diatas, kita tidak menyebutkan spesifik kolom apa saya yang hendak ditulis (diisi konten). Dengan demikian, kita harus menulis seluruh Value dari kolom-kolom yang ada dalam tabel tersebut.</p>
<p>Pada contoh berikutnya, kita dapat menentukkan lebih spesifik kolom apa saja yang mau diisi datanya dengan menyebutkan nama-nama kolomnya didalam kurung setelah nama tabel.</p>

<h3>Contoh Input Data lebih dari Satu (Baris)</h3>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> namatabel <span class="token punctuation">(</span>kolom1<span class="token punctuation">,</span> kolom2<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'konten untuk kolom1'</span><span class="token punctuation">,</span> <span class="token string">'konten untuk kolom2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">'konten kedua untuk kolom1'</span><span class="token punctuation">,</span> <span class="token string">'konten kedua untuk kolom2'</span><span class="token punctuation">)</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<p>Harap diperhatikan. Pada contoh diatas, hanya sekedar contoh sintaks. Kenyataannya, konten harus diisi sesuai dengan tipe data yang digunakan pada masing-masing kolom. Untuk input data lebih dari satu (baris) gunakan pemisah koma (,) setelah dalam kurung, yang menunjukkan setiap kurung merupakan satu baris data.</p>
<p>Contoh ini tidak jauh berbeda dengan contoh pertama, hanya saja disini kita menginput data lebih dari satu (baris) yang dipisahkan dengan koma (,)  dan mengganti kata <em>VALUE</em> dengan <em>VALUES</em> (plural).</p>

<h2>INSERT INTO ... SET</h2>
<h3>Memasukkan Data Baru dengan Klausa SET</h3>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">INSERT</span> <span class="token punctuation">[</span>LOW_PRIORITY <span class="token operator">|</span> <span class="token keyword">DELAYED</span> <span class="token operator">|</span> HIGH_PRIORITY<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">IGNORE</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token keyword">INTO</span><span class="token punctuation">]</span> tbl_name <span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>partition_list<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">SET</span> col<span class="token operator">=</span>{expr <span class="token operator">|</span> <span class="token keyword">DEFAULT</span>}<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">[</span> <span class="token keyword">ON</span> <span class="token keyword">DUPLICATE KEY</span> <span class="token keyword">UPDATE</span>
      col<span class="token operator">=</span>expr
        <span class="token punctuation">[</span><span class="token punctuation">,</span> col<span class="token operator">=</span>expr<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<p>Menggunakan tambahan <code>SET</code>, pada dasarnya sama seperti kita menggunakan perintah <code>UPDATE</code> yang  digunakan untuk memeperbarui (update) data. Disini, kita men-set kolom =  diikuti data yang hendak kita input.</p>
<p>Contohnya adalah sebagai berikut:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> guru
<span class="token keyword">SET</span> nama <span class="token operator">=</span> <span class="token string">'Budi'</span><span class="token punctuation">,</span> tgl_lahir <span class="token operator">=</span> <span class="token string">'1982-02-11'</span><span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code>
</pre>
  </div>
</div>
<h2>INSERT INTO ... SELECT</h2>
<h3>Memasukkan Data Baru dengan Klausa SELECT</h3>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">INSERT</span> <span class="token punctuation">[</span>LOW_PRIORITY <span class="token operator">|</span> HIGH_PRIORITY<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">IGNORE</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token keyword">INTO</span><span class="token punctuation">]</span> tbl_name <span class="token punctuation">[</span><span class="token keyword">PARTITION</span> <span class="token punctuation">(</span>partition_list<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>col<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">[</span> <span class="token keyword">ON</span> <span class="token keyword">DUPLICATE KEY</span> <span class="token keyword">UPDATE</span>
      col<span class="token operator">=</span>expr
        <span class="token punctuation">[</span><span class="token punctuation">,</span> col<span class="token operator">=</span>expr<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">]</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<p>Perintah <code>SELECT</code> digunakan untuk menyeleksi tabel lain. Artinya, kita dapat memasukkan (input) data dari Table lain. Ini, dapat menghemat waktu kita sehingga tidak perlu menginput ulang data. Perlu diperhatikan tipe data yang digunakan juga harus sesuai pada kolom-kolom antara dua table tersebut.</p>
<p>Pada contoh dibawah ini, saya memiliki dua table (<em>guru</em> dan <em>staf</em>). Table guru sebelumnya sudah dibuat dan berisi data. tabel staf masih kosong kemudian saya isi datanya dengan cara menyalin dari table guru tersebut.</p>
<p>Pertama-tama, silahkan jalankan perintah berikut:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> staf <span class="token operator">LIKE</span> guru<span class="token punctuation">;</span> <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>
<p>Perintah diatas digunakan untuk membuat table baru <em>staf</em> dengan format (termasuk definisi dan tipe datanya) sama seperti table <em>guru</em>. Selanjutnya saya isi datanya dengan menyalin dari table <em>guru</em> yang memiliki kolom id=1.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> staf
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> guru <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code>
</pre>
  </div>
</div>
<h2>LOAD DATA INFILE</h2>
<h3>Menambahkan Data dari sebuah File</h3>
<p><code>LOAD DATA INFILE</code> adalah perintah yang digunakan untuk memasukkan data dari sebuah file terpisah. Agar file tersebut dapat dibaca dan bisa dimasukkan dalam database SQL, harus memiliki format yang sesuai.</p><p>Pada contoh dibawah ini, saya membuat sebuah file dengan notepad (text editor) dan saya simpan dengan format <code>.txt</code> kemudian saya simpan dalam drive <code>C:</code> (root). File tersebut saya beri nama <code>dataguru.txt</code> dan saya isi dengan data sebagai berikut:</p>
<div class="icard">
  <div class="icard-heading clearfix bg-default">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-file" aria-hidden="true"></i>
        <span>dataguru.txt</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span></span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint highlight language-markup"><code class="inline  language-markup">1	'Ahmad'	1989-03-20
2	'Andi'	1984-02-07</code>
</pre>
  </div>
</div>

<p>Data diatas, terlihat seperti terbagi dalam 3 kolom (id, nama, tgl_lahir). Dalam text editor (atau Notepad) setiap kolom cukup dipisahkan dengan menekan <kbd>tab</kbd> pada keyboard. Setiap baris, diakhiri dengan <kbd>Enter</kbd>.</p>

<p>Untuk mengimport (memasukkan) data dari file ke dalam database,  saya menjalankan  perintah berikut:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">INFILE</span> <span class="token string">'C:\dataguru.txt'</span>
<span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> guru<span class="token punctuation">(</span>id<span class="token punctuation">,</span> nama<span class="token punctuation">,</span> tgl_lahir<span class="token punctuation">)</span><span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code>
</pre>
  </div>
</div>

<p>Hasilnya terlihat seperti ini:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql">MariaDB <span class="token punctuation">[</span>belajar<span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">INFILE</span> <span class="token string">'C:\dataguru.txt'</span>
    <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> guru<span class="token punctuation">(</span>id<span class="token punctuation">,</span> nama<span class="token punctuation">,</span> tgl_lahir<span class="token punctuation">)</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">2</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.10</span> sec<span class="token punctuation">)</span>
Records: <span class="token number">2</span>  Deleted: <span class="token number">0</span>  Skipped: <span class="token number">0</span>  <span class="token keyword">Warnings</span>: <span class="token number">0</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<p>Kemudian, saya lihat hasilnya apakah benar data tersebut sudah masuk dalam database, dengan menjalankan perintah berikut:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> guru <span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>
<p>Hasilnya, ternyata sukses:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql">MariaDB <span class="token punctuation">[</span>belajar<span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> guru<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">----+---------+---------------+</span>
<span class="token operator">|</span> id <span class="token operator">|</span> nama    <span class="token operator">|</span> tgl_lahir     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+---------+---------------+</span>
<span class="token operator">|</span>  <span class="token number">1</span> <span class="token operator">|</span> <span class="token string">'Ahmad'</span> <span class="token operator">|</span> <span class="token number">1989</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">20</span>    <span class="token operator">|</span>
<span class="token operator">|</span>  <span class="token number">2</span> <span class="token operator">|</span> <span class="token string">'Andi'</span>  <span class="token operator">|</span> <span class="token number">1984</span><span class="token operator">-</span><span class="token number">02</span><span class="token operator">-</span><span class="token number">07</span>    <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----+---------+---------------+</span>
<span class="token number">2</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<h3>Reference:</h3>
<div class="sources bg-gr3 bordered p-space">
  <a rel="nofollow" href="https://mariadb.com/kb/en/mariadb/insert/" target="_blank" class="text-muted">https://mariadb.com/kb/en/mariadb/insert/</a>
</div>