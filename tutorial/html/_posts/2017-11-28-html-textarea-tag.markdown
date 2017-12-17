---
layout: post
title: "HTML textarea tag | belajar &lt;textarea&gt; element"
short_title: "HTML &lt;textarea&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;textarea&gt; tag. Tutorial dan panduan mengenai element &lt;textarea&gt;&lt;/textarea&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;textarea&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-textarea-tag.png"
  thumb: "posts/thumbs/html-textarea-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML textarea tag</strong>. Tutorial dan panduan mengenai element <code>&lt;textarea&gt;...&lt;/textarea&gt;</code> yang digunakan untuk input data pada kotak area lebih dari satu baris. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;textarea&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">textarea</span></small>
</h2>
<p>
  <strong>HTML <code>&lt;textarea&gt;</code> element</strong> merepresentasikan input control yang memiliki area teks lebih dari satu baris. Untuk mengatur tinggi dan lebar dari area teks tersebut dapat digunakan attribute <code>rows</code> (untuk baris) dan <code>cols</code> (untuk kolom), atau lebih baik lagi dengan CSS <code>height</code> dan <code>width</code> property.
</p>
<p>Teks yang ditulis didalam element &lt;textarea&gt; merupakan teks dasar dengan karakter tanpa batas. teks tersebut dapat disisipkan secara langsung diantara tag pembuka (<code>&lt;textarea</code>) dan tag penutup (<code>&lt;/textarea&gt;</code>) sebagai awal konten.</p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;textarea&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">autofocus</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bahwa area teks secara otomatis harus fokus (berada padanya) ketika halaman dimuat.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i><code>autofocus</code></i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">cols</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan kolom. Menentukkan lebar dari textarea.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">disabled</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bahwa textarea nonaktif (tidak dapat diedit).</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i><code>disabled</code></i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">form</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan id dari form. textarea ditujukan untuk form dengan nama id yang sama.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>id dari form</i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">maxlength</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan maksimal jumlah karakter yang dapat diinput pada area teks tersebut.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">minlength</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan minimum jumlah karakter yang dapat diinput pada area teks tersebut.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">name</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan nama untuk textarea.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>teks</i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">placeholder</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan teks yang dijadikan bayangan sebagai kunci atau keterangan yang akan hilang dengan sendirinya ketika area teks diedit.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>teks</i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">readonly</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan bahwa textarea hanya dapat dibaca (tidak dapat dihapus atau diubah).</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i><code>readonly</code></i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">required</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan bahwa textarea wajib diisi, jika tidak diisi maka tindakan selanjutnya tidak akan diproses dan akan muncul pesan error.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i><code>required</code></i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">rows</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan jumlah baris pada textarea. semakin besar jumlahnya maka tinggi element textarea akan bertambah.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">wrap</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bagaimana area teks dilipat (wrap) ketika dikirimkan pada sebuah form.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i><code>hard</code></i> atau <i><code>soft</code></i></p>
        </div>
    </div>
  </div>
</section>

<hr class="uk-article-divider">
<!-- Global Attributes -->
<section id="global-attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Global Attributes <br>
    <small>Atribut Secara Global (Keseluruhan)</small>
  </h2>
    <div class="">
        <p>&lt;textarea&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
        <div class="footer-callout info">
          <p>Silahkan, lihat referensi mengenai <a href="http://www.apacara.com/blog/html-global-attribute.html">HTML Global Attribute</a></p>
        </div>
    </div>
</section>

<!-- Event Attributes -->
<section>
  <h2 class="title-sub bd-danger bd-left bd-left-only">Event Attributes <br>
    <small>Atribut event  (Peristiwa)</small>
  </h2>
    <div class="dul-callout dul-callout-warning">
        <p>&lt;textarea&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="http://www.apacara.com/blog/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;textarea&gt;</code> element</small>
  </h2>
  <div class="dul-block">
<!-- example HTML code -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>HTML</span>
  </div>
  <div class="icard-bar-right pull-right">
    <span>Example</span>
  </div>
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  Tulis Pesan Anda dengan Lengkap.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
  </div>
</section>
<h2 class="title-sub bd-danger bd-left bd-left-only">Contoh Lengkap
</h2>
<p>Contoh <em>source code</em> lengkap disertai dengan demo link untuk mencoba (try it) dan melihat hasil (preview) kode.</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-html5" aria-hidden="true"></i>
        <span>SOURCE</span>
      </div>
      <div class="icard-bar-right pull-right">
        <a href="https://www.apacara.com/example/html/tag/textarea.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML textarea tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Pesan:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Tulis Pesan Anda dengan Lengkap.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
  </div>
</div>
<!-- Article Aside -->

<!-- Browser Support -->
<aside id="browser">
<h2 class="title-sub bd-danger bd-left bd-left-only">Browser Support <br>
  <small>Status &amp; Dukungan Browser </small>
</h2>
<p>Berikut adalah keterangan mengenai dukungan (support) dari beberapa browser.</p>
<div class="table-responsive uk-overflow-container">
  <table class="table uk-table uk-text-nowrap full-width">
        <thead>
          <tr>
            <th>HTML</th>
            <th title="Chrome"><i class="fa fa-chrome fa fa-lg"></i></th>
            <th title="Safari"><i class="fa fa-safari fa fa-lg"></i></th>
            <th title="Firefox"><i class="fa fa-firefox fa fa-lg"></i></th>
            <th title="Opera"><i class="fa fa-opera fa fa-lg"></i></th>
            <th title="Internet Explorer"><i class="fa fa-internet-explorer fa fa-lg"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Element</td>
            <td>Chrome</td>
            <td>Safari</td>
            <td>Firefox</td>
            <td>Opera</td>
            <td>IE</td>
          </tr>
          <tr>
            <td><code>&lt;textarea&gt;</code></td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;textarea&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>

</aside>