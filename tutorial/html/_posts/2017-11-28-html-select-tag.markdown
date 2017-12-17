---
layout: post
title: "HTML select tag | belajar &lt;select&gt; element"
short_title: "HTML &lt;select&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;select&gt; tag. Tutorial dan panduan mengenai element &lt;select&gt;&lt;/select&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;select&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-select-tag.png"
  thumb: "posts/thumbs/html-select-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML select tag</strong>. Tutorial dan panduan mengenai element <code>&lt;select&gt;...&lt;/select&gt;</code> yang digunakan untuk menyeleksi opsi (daftar pilihan). Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;select&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">select</span></small>
</h2>
<p>
  <em>Select</em> berarti <em>memilih</em>. <strong>HTML <code>&lt;select&gt;</code> element</strong> merepresentasikan sebuah kontrol yang digunakan untuk menyeleksi (memilih) deretan opsi (daftar pilihan) yang diberikan baik satu ataupun lebih dari satu pilihan.
</p>
<p>Penggunaan element &lt;select&gt; dapat ditulis bersamaan dengan element <a href="https://www.apacara.com/blog/html-option-tag.php" title="HTML option element">&lt;option&gt;</a> yang berisi daftar pilihan (opsi) yang dapat ditulis beberapa item sebagai daftar pilihan yang akan diseleksi oleh user.</p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;select&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">autofocus</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menetapkan bahwa kontrol (element &lt;select&gt;) akan mendapatkan fokus (berada padanya) ketika halaman selesai dimuat.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>autofocus</code></p>
        </div>
    </div>

    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">disabled</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menonaktifkan (tidak dapat diseleksi) <code>&lt;select&gt;</code> element.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>disabled</code></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">form</code></span></div></div></div><div class="icard-body icode itheme">
        <p><code>&lt;select&gt;</code> element yang menyertakan attribute <code>form</code> dengan value nama <code>id</code> dari sebuah &lt;form&gt; element, menunjukkan element &lt;select&gt; tersebut dibuat untuknya (&lt;form&gt; dengan id tersebut).</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>form_id</i></p>
      </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">multiple</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bahwa user boleh menyeleksi lebih dari satu value (pilihan) dari daftar yang disediakan.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>multiple</code></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">name</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan nama untuk kontrol &lt;select&gt;.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: nama untuk kontrol</p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">required</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menetapkan bahwa user harus memilih satu atau lebih opsi yang diberikan pada kontrol <code>&lt;input&gt;</code>. Harus diisi dan tidak boleh diabaikan.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>required</code></p>
        </div>
    </div>
      </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">size</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan ukuran jumlah opsi yang dapat dilihat dari daftar yang diberikan.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i></p>
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
        <p>&lt;select&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
        <div class="footer-callout info">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-global-attribute.html">HTML Global Attribute</a></p>
        </div>
    </div>
</section>

<!-- Event Attributes -->
<section>
  <h2 class="title-sub bd-danger bd-left bd-left-only">Event Attributes <br>
    <small>Atribut event  (Peristiwa)</small>
  </h2>
    <div class="dul-callout dul-callout-warning">
        <p>&lt;select&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;select&gt;</code> element</small>
  </h2>
  <div class="dul-block">
  <h5>Contoh 1</h5>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,6"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pos<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>POS Indonesia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jne<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>JNE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tiki<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>TIKI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wahana<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Wahana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
<hr class="uk-article-divider">
  <h5>Contoh 2</h5>
  <p>Ketika tidak ada pilihan awal yang diberikan, maka dapat menggunakan alternatif keterangan tambahan. Pada contoh ini juga menggunakan attribute <code>required</code> yang mengharuskan user untuk memilih salah satu.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,7"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>kurir<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Pilih Jasa Kurir<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pos<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>POS Indonesia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jne<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>JNE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tiki<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>TIKI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wahana<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Wahana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
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
        <a href="https://www.apacara.com/example/html/tag/select.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML select tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>voting_kurir.php<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Jasa kirim/Kurir apa yang Anda gunakan?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Kurir:
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pos<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>POS Indonesia<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jne<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>JNE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tiki<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>TIKI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wahana<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Wahana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
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
            <td><code>&lt;select&gt;</code></td>
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
  <p>CSS untuk element <code>&lt;select&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>

</aside>