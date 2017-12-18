---
layout: post
title: "HTML time tag | belajar &lt;time&gt; element"
short_title: "HTML &lt;time&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;time&gt; tag. Tutorial dan panduan mengenai element &lt;time&gt;&lt;/time&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;time&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-time-tag.png"
  thumb: "posts/thumbs/html-time-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML time tag</strong>. Tutorial dan panduan mengenai element <code>&lt;time&gt;...&lt;/time&gt;</code> yang digunakan untuk menginformasikan tanggal dan waktu. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;time&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">time</span></small>
</h2>
<p>
  <strong>HTML <code>&lt;time&gt;</code> element</strong> digunakan untuk merepresentasikan sebuah waktu 24-jam atau tanggal, tepatnya tanggal dalam sistem masehi (dikenal dengan nama "Gregorian Calendar") dengan tambahan waktu dan informasi zona waktu (timezone) yang dapat ditulis secara opsional.
</p>
<p>Element <code>&lt;time&gt;</code> sering digunakan bersama attribute <code>datetime</code> yang digunakan dengan maksud untuk menunjukkan waktu yang dapat dimengerti oleh mesin-pembaca (machine-readable) sehingga dapat dimanfaatkan oleh browser (user-agent) seperti untuk mengingat tanggal lahir user, tugas, acara dan kalender pengingat lainnya.</p>
<p>&lt;time&gt; yang tidak memiliki attribute <code>datetime</code> tidak boleh terdapat element apapun didalamnya dan hanya berisi dengan konten keterangan waktu sesuai format standard (ISO 8601).</p>
<p>Konten didalam <code>&lt;time&gt;</code> element diisi dengan tanggal, waktu, zona waktu atau durasi yang ditulis dengan format yang beraneka ragam. Contohnya dapat dilihat dibawah.</p>
<p>HTML <code>&lt;time&gt;</code> merupakan tag yang baru diperkenalkan pada HTML5.</p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;time&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">datetime</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan format tanggal dan waktu yang dapat dipahami oleh mesin-pembaca (machine-readable)</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: format penulisan tanggal dan waktu yang valid (ISO 8601)</p>
      </div>
      <!-- contoh -->
      <p>Contoh:</p><pre class="prettyprint highlight language-markup"><code class="block inline code-itheme language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1945-08-17<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Jumat, 17 Agustus 1945<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span></code></pre>

      <p>Penulisan tanggal untuk <code>datetime</code> menggunakan format standar international <a href="https://id.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> yang  diawali dengan tahun, bulan dan tanggal yang dipisahkan dengan tanda strip (-) seperti contoh diatas. Jika atribut <code>datetime</code> disebutkan, maka konten di dalam &lt;time&gt; dapat diisi dengan format tanggal yang relevan (contoh konten diatas adalah format penulisan tanggal Bahasa Indonesia). Untuk format selengkapnya, dapat dilihat pada pembahasan mengenai <a href="https://www.apacara.com/tutorial/html/html-datetime-attribute.html" title="belajar HTML datetime attribute">HTML datetime attribute</a>.</p>

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
        <p>&lt;time&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
        <p>&lt;time&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;time&gt;</code> element</small>
  </h2>
  <div class="dul-block">
  <p><strong>Example 1</strong></p>
  <p>Contoh HTML &lt;time&gt; element tanpa atribut <code>datetime</code>, oleh karenanya konten di dalam time harus sesuai dengan format standar (valid).</p>
<!-- HTML Code Example -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>HTML</span>
  </div>
  
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span> Saya mulai bekerja pada
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span><span class="token punctuation">&gt;</span></span>2012-06-01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
  <p>Jika format yang ditulis tidak valid, maka element &lt;time&gt; tidak menunjukkan waktu yang dapat diasosiasikan.</p>
  </div>

  <div class="dul-block">
  <p><strong>Example 2</strong></p>
  <p>Contoh HTML &lt;time&gt; element yang hanya menggunakan keterangan waktu (jam).</p>
<!-- HTML Code Example -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>HTML</span>
  </div>
  
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
Saya bekerja pada pukul <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span><span class="token punctuation">&gt;</span></span>08:00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span> dan pulang pukul <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span><span class="token punctuation">&gt;</span></span>17:00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
  </div>

  <div class="dul-block">
  <p><strong>Example 3</strong></p>
  <p>Contoh HTML &lt;time&gt; element yang digunakan untuk menulis tanggal dipublikasikannya sebuah artikel, lengkap dengan microdata schema.org.</p>
<!-- HTML Code Example -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>HTML</span>
  </div>
  
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">itemscope</span> <span class="token attr-name">itemtype</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://schema.org/Article<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>headline<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Cara Menyisipkan Tanggal di dalam HTML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>Ditulis Pada:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>datePublished<span class="token punctuation">"</span></span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-17<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Senin, 17 Agustus 2015<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Untuk menyisipkan tanggal dan waktu di dalam halaman HTML gunakan element <span class="token entity" title="<">&amp;lt;</span>time<span class="token entity" title=">">&amp;gt;</span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
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
        <a href="https://www.apacara.com/example/html/tag/time.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML time tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Example 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span> Saya mulai bekerja pada
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span><span class="token punctuation">&gt;</span></span>2012-06-01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Example 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
      Saya bekerja pada pukul <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span><span class="token punctuation">&gt;</span></span>08:00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span> dan pulang pukul <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span><span class="token punctuation">&gt;</span></span>17:00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Example 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">itemscope</span> <span class="token attr-name">itemtype</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://schema.org/Article<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>headline<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Cara Menyisipkan Tanggal di dalam HTML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>Ditulis Pada:
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>datePublished<span class="token punctuation">"</span></span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-17<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Senin, 17 Agustus 2015<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Untuk menyisipkan tanggal dan waktu di dalam halaman HTML gunakan element <span class="token entity" title="<">&amp;lt;</span>time<span class="token entity" title=">">&amp;gt;</span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>

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
            <td><code>&lt;time&gt;</code></td>
            <td class="success">33</td>
            <td class="success">7</td>
            <td class="success">22</td>
            <td class="success">22</td>
            <td class="success">9.0</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;time&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>
</aside>