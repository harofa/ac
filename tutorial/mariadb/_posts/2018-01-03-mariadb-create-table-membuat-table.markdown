---
layout: post
title: "MariaDB: CREATE TABLE - Membuat Tabel"
short_title: "CREATE TABLE"
language: id

metadata:
  description: "Tutorial belajar bagaimana menggunakan perintah CREATE TABLE yang digunakan untuk membuat table baru dalam database MariaDB atau MySQL"

author: halwa
tag: [mariadb, maridbref]
taxonomy:
  category: mariadb
  tag: [mariadb, maridbref]
images:
  figure: "posts/mariadb-create-table.png"
  thumb: "posts/thumbs/mariadb-create-table.png"
---
<p class="lead">Disini, kita akan belajar bagaimana membuat table dalam sebuah database MariaDB atau mySQL. Ketika hendak "bikin" table dalam sebuah database, yang kita perlukan sebelumnya adalah pengetahuan tentang tipe data (Data Type) karena setiap table mungkin akan menggunakan tipe data yang berbeda-beda sesuai kebutuhan dan koten yang akan diisi.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token punctuation">[</span><span class="token operator">OR</span> REPLACE<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">TEMPORARY</span><span class="token punctuation">]</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> tbl_name
    <span class="token punctuation">(</span>create_definition<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>table_options    <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span>partition_options<span class="token punctuation">]</span>
<span class="token keyword">CREATE</span> <span class="token punctuation">[</span><span class="token operator">OR</span> REPLACE<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">TEMPORARY</span><span class="token punctuation">]</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> tbl_name
    <span class="token punctuation">[</span><span class="token punctuation">(</span>create_definition<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>table_options   <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">[</span>partition_options<span class="token punctuation">]</span>
    select_statement
<span class="token keyword">CREATE</span> <span class="token punctuation">[</span><span class="token operator">OR</span> REPLACE<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">TEMPORARY</span><span class="token punctuation">]</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span><span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span><span class="token punctuation">]</span> tbl_name
   { <span class="token operator">LIKE</span> old_table_name <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token operator">LIKE</span> old_table_name<span class="token punctuation">)</span> }

select_statement:
    <span class="token punctuation">[</span><span class="token keyword">IGNORE</span> <span class="token operator">|</span> REPLACE<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">AS</span><span class="token punctuation">]</span> <span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>   <span class="token punctuation">(</span><span class="token keyword">Some</span> legal <span class="token keyword">select</span> statement<span class="token punctuation">)</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<h2>Penjelasan</h2>
<p>Untuk membuat table dalam database, kita bisa menggunakan perintah <code>CREATE TABLE</code> diikuti dengan nama table yang kita tentukan, kemudian diikuti dengan definisi kolom (column definitions) sebagai berikut:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token operator">&lt;</span>column_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>data_type<span class="token operator">&gt;</span>
<span class="token punctuation">[</span><span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token operator">|</span> <span class="token boolean">NULL</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">DEFAULT</span> <span class="token operator">&lt;</span>default_value<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">UNIQUE</span> <span class="token punctuation">[</span><span class="token keyword">KEY</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token keyword">PRIMARY</span><span class="token punctuation">]</span> <span class="token keyword">KEY</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token keyword">COMMENT</span> <span class="token string">' &lt;string&gt;'</span> <span class="token punctuation">]</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<p>Definisi kolom ditulis dalam kurung <code>()</code> setelah nama table yang hendak dibuat. seperti: <code>CREATE TABLE namatable(column definitions);</code></p>
<p>Pada syntax tersebut, didalam tanda <code>&lt;&gt;</code> menunjukkan perintah yang harus kita tulis, sedangkan dalam <code>[]</code> adalah opsional, boleh ditulis ataupun tidak tergantung kebutuhan. Tanda <code>|</code> berarti 'atau' artinya, jika ditulis maka harus pilih salah satu tidak boleh ditulis dua-duanya.</p>
<hr>
<p>Sebelum membuat table, Anda harus membuat database atau menggunakan database yang ada, karena table dibuat di dalam database. Sebagai contoh saya membuat database dengan nama 'perusahaan', maka gunakan perintah berikut:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>

    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> perusahaan<span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>
<p>Setelah database dibuat, kemudian kita gunakan database tersebut sebagai pilihan <em>default</em>. untuk menggunakan database kita bisa menjalankan perintah:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>

    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">USE</span> perusahaan<span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>

<p>Panduan lengkap mengenai cara membuat database, bisa dilihat pada artikel di blog ini yang disajikan secara terpisah.</p>
<hr>
<h2>Contoh Membuat Table</h2>
<p>Setelah menggunakan database pilihan, selanjutnya kita ingin membuat table dalam database tersebut. Untuk membuat table, berikut contohnya:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>

    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> karyawan <span class="token punctuation">(</span>
id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
nama_awal <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
nama_akhir <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
tanggal_lahir <span class="token keyword">DATE</span> <span class="token keyword">COMMENT</span> <span class="token string">' tanggal lahir saja tanpa tempat'</span>
<span class="token punctuation">)</span> <span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<p>Pada contoh tersebut, pada baris pertama artinya BUAT TABLE dengan nama 'karyawan'. Atau kita bisa menentukkan nama database yang sudah ada, kemudian membuat table baru dalam database tersebut seperti berikut:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>

    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> perusahaan<span class="token punctuation">.</span>karyawan <span class="token punctuation">(</span>
id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
nama_awal <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
nama_akhir <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
tanggal_lahir <span class="token keyword">DATE</span> <span class="token keyword">COMMENT</span> <span class="token string">' tanggal lahir saja tanpa tempat'</span>
<span class="token punctuation">)</span> <span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<p>Pada contoh tersebut, pada baris pertama artinya BUAT TABLE di dalam database 'perusahaan' dengan nama table 'karyawan'.</p>
<p>Selanjutnya, untuk <em>id, nama_awal, nama_akhir dan tanggal_lahir</em> disebut dengan <strong>field</strong> atau <strong>column</strong>. Setelahnya, diikuti dengan tipe data dan definisi tambahan lain sesuai kebutuhan. Untuk nama column, boleh apa saja asal tidak sama dengan yang sudah ditentukan oleh SQL (Reserved), seperti <em>SQL statements, clauses</em> dan <em>functions</em>. Sebenarnya boleh saja, asal menggunakan <em>backtick</em> (<code>`</code>) untuk membedakannya.</p>
<p>Karena setiap kolom dapat berisi baris data yang bermacam-macam, baik teks, angka gambar dan lainnya, maka berlaku tipe data (data type) yang akan menentukan  masing-masing kolom tersebut diisi dengan tipe data apa yang sesuai? Tipe data akan dibahas secara terpisah.</p>
<p>Selanjutnya, jika kita ingin membuat table baru dengan nama table 'karyawan_baru' misalnya, kita bisa membuat copy (salinan) dari table 'karyawan' yang sudah dibuat tersebut termasuk <em>definisi, column, index dan options</em>-nya dengan menggunakan klausa <code>LIKE</code> seperti berikut:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>

    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> karyawan_baru <span class="token operator">LIKE</span> karyawan<span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>

<p>Gunakan <code>IF NOT EXISTS</code> untuk menghindari error dan menggantinya dengan warning (peringatan), seperti:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>

    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> karyawan<span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
  </div>
</div>
<p>Gunakan <code>CREATE TEMPORARY TABLE</code> untuk membuat table sementara:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>

    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLE</span> tabeltes <span class="token punctuation">(</span>
id <span class="token keyword">INT</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">,</span>
nama_awal <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
nama_akhir <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<hr>
<p>Gunakan <code>CREATE OR REPLACE TABLE</code> untuk menghapus table yang sudah ada dan menggantinya dengan table baru dengan nama yang sama. Ini, berlaku sejak MariaDB 10.0.8.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>

    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">CREATE</span> <span class="token operator">OR</span> REPLACE <span class="token keyword">TABLE</span> karyawan <span class="token punctuation">(</span>
nama <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<p>Kode tersebut, sama dengan:</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-in">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-mariadb" aria-hidden="true"></i>
        <span>MariaDB</span>
      </div>

    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-sql"><code data-language="sql" class=" language-sql"><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> karyawan<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> karyawan <span class="token punctuation">(</span>
nama <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<hr>

<h3>Reference:</h3>
<div class="sources bg-gr3 bordered p-space">
  <a rel="nofollow" href="https://mariadb.com/kb/en/mariadb/create-table/" target="_blank" class="text-muted">https://mariadb.com/kb/en/mariadb/create-table/</a>

</div>