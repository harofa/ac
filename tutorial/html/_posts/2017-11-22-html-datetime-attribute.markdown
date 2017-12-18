---
layout: post
title: "Belajar HTML datetime attribute"
short_title: "HTML datetime attribute"
language: id

metadata:
  description: "Referensi belajar HTML datetime attribute. Belajar memformat waktu dalam HTML yang digunakan untuk memberi keterangan tanggal dan waktu mengggunakan atribut datetime"

author: dul

tag: [html, htmlattribute]
taxonomy:
  category: html
  tag: [html, htmlattribute]
images:
  figure: "posts/html-datetime-attribute.png"
  thumb: "posts/thumbs/html-datetime-attribute.png"
---
<p class="lead text-muted">
    Referensi Belajar <strong>HTML <code>datetime</code> attribute</strong>. Tutorial dan panduan mengenai atribute <strong>datetime</strong> yang digunakan untuk menulis keterangan tanggal dan waktu dengan format tertentu.
</p>

<hr>
<h2 class="title-sub bd-primary bd-left bd-left-only">Deskripsi <br>
    <small>Pengertian &amp; Penjelasan <span class="highlight">datetime</span></small>
</h2>
<p>
  <strong>HTML <code>datetime</code> attribute</strong> digunakan untuk mengasosiasikan tanggal atau waktu dengan format yang berlaku (valid) sesuai dengan standar international (ISO 8601).
</p>
<p>Format penulisan tanggal yaitu diawali dengan tahun, bulan dan hari yang dipisahkan dengan tanda strip (-). Untuk tahun, ditulis sebanyak 4 karakter (contoh: 2015), sedangkan bulan dan hari masing-masing 2 karakter. Aturan selengkapnya dapat dilihat pada syntax dan contoh yang akan dijelaskan dibawah ini:</p>

<!-- Syntax  -->
<section id="syntax">
    <h3 class="title-sub bd-danger bd-left bd-left-only">Syntax <br>
    <small>Penggunaan Sintaksis</small>
    </h3>
  <div class="dul-callout dul-callout-warning">
  <p><strong>Syntax 1:</strong></p>
<div class="icode itheme syntax">
<pre class="prettyprint highlight language-markup"><code data-language="html" class="html  language-markup">datetime="YYYY-MM-DDThh:mm:ssTZD"</code>
</pre>
</div>
<p><strong>Keterangan:</strong></p>
<ul>
<li><strong>YYYY</strong> = Year (Menunjukkan <strong>Tahun</strong>), ditulis 4 digit</li>
<li><strong>MM</strong> = Month (Menunjukkan <strong>Bulan</strong>), ditulis 2 digit (contoh: 01 adalah bulan Januari)</li>
<li><strong>DD</strong> = Day (Menunjukkan <strong>Hari</strong> atau tepatnya tanggal), ditulis 2 digit</li>
<li><strong>T</strong> = Time (menunjukkan <strong>Waktu</strong>). Harus ditulis dengan huruf kapital (bukannya "t"). Keterangan ini dapat diganti dengan spasi. Jika ditulis, maka keterangan waktu harus ditulis dengan format berikut: </li>
<li><strong>hh</strong> = hours (menunjukkan <strong>Jam</strong>), ditulis dengan format 24 jam (contoh: 21 adalah jam 9 malam)</li>
<li><strong>mm</strong> = minutes (menunjukkan <strong>Menit</strong>), ditulis 2 digit</li>
<li><strong>ss</strong> = seconds (menunjukkan <strong>detik</strong>), ditulis 2 digit</li>
<li><strong>TZD</strong> = Time Zone Designator (menunjukkan zona waktu), contohnya: zona waktu Indonesia Bagian Barat (WIB) adalah <code>+07:00</code>, atau ditambah 7 jam (<a href="https://id.wikipedia.org/wiki/UTC%2B07:00" target="_blank" rel="nofollow">UTC+07:00</a>)</li>

</ul>
<p><strong>Contoh:</strong>
<code class="block inline language-markup">datetime="2015-05-06T20:00+07:00"</code>
Keterangannya adalah <mark>jam 8 malam WIB tanggal 6 bulan Mei tahun 2015</mark>.
Untuk keterangan waktu (T) dapat diganti dengan spasi, sehingga contoh diatas sama dengan contoh dibawah ini:<br>
<code class="block inline language-markup">datetime="2015-05-06 20:00+07:00"</code>
</p>
<hr>
<p><strong>Syntax 2:</strong></p>
<div class="icode itheme syntax">
<pre class="prettyprint highlight language-markup"><code data-language="html" class="html  language-markup">datetime="PTDHMS"</code>
</pre>
</div>
<p><strong>Keterangan:</strong></p>
<ul>
<li><strong>P</strong> = Period (Memberikan keterangan Periode waktu)</li>
<li><strong>T</strong> = Time (Memberikan keterangan waktu)</li>
<li><strong>D</strong> = Days (menunjukkan <strong>Hari</strong>)</li>
<li><strong>H</strong> = Hours (menunjukkan <strong>Jam</strong>)</li>
<li><strong>M</strong> = Minutes (menunjukkan <strong>Menit</strong>)</li>
<li><strong>S</strong> = Seconds (menunjukkan <strong>Detik</strong>)</li>
</ul>
<p><strong>Contoh:</strong>
<code class="block inline language-markup">datetime="PT12H30"</code>
Artinya, menunjukkan periode waktu selama 12 jam 30 menit.
</p>
</div>
</section>

<section class="benar">
    <h3 class="title-sub bd-danger bd-left bd-left-only">Contoh Penulisan <br>
      <small>Format Tanggal dan Waktu yang Benar</small>
    </h3>
<pre class="line-numbers prettyprint highlight language-markup"><code data-language="html" class="html inline language-markup">Format tanggal:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- artinya, tahun 2015 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- artinya, bulan Agustus (bulan 8) tahun 2015 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-17<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- artinya, tanggal 17 Agustus tahun 2015 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>08-17<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- atinya tanggal 17 bulan Agustus tahun berapapun --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-W20<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- artinya, minggu ke-20 pada tahun 2015 --&gt;</span>

Format Tanggal dan Waktu:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-17T07:00<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- artinya, jam 7 tanggal 17-08-2015 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-17 07:00<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- sama artinya, jam 7 tanggal 17-08-2015 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-17 07:00:15<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- dengan tambahan 15 detik --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-17 07:00:35.586<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- dg tambahan mili detik --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>07:00<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- artinya jam 7 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>07:00+07:00<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- artinya jam 7 WIB (UTC+7 jam)  --&gt;</span>

Durasi:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>P5D<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- artinya, durasi waktu selama 5 hari --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>PT12H15M<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment" >&lt;!-- artinya, durasi waktu 12 jam 15 menit --&gt;</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</section>

<!-- Example -->
<section id="example">
  <h3 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>datetime</code> attribute</small>
  </h3>
  <div class="dul-block">
  <p><strong>Contoh 1</strong></p>
  <p>Contoh pengunaan attribute <code>datetime</code> di dalam element &lt;time&gt;</p>
<!-- HTML Code Example -->
<div class="icode itheme html">
<pre class="line-numbers prettyprint highlight language-markup" data-line="2"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Acara dimulai pada:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-03-07<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>07 Maret 2015<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
</div>
  <p>Pelajari selengkapnya mengenai HTML <a href="https://www.apacara.com/tutorial/html/html-time-tag.html">&lt;time&gt;</a> element.</p>
  </div>

  <div class="dul-block">
  <p><strong>Contoh 2</strong></p>
  <p>Contoh pengunaan attribute <code>datetime</code> di dalam element &lt;del&gt; dan &lt;ins&gt;</p>
<!-- HTML Code Example -->
<div class="icode itheme html">
<pre class="line-numbers prettyprint highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span> Acara Malam ini adalah
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>del</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-22 21:21:05<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Menghadiri Pesta<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>del</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ins</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-22 21:23:30<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Menghadiri Ceramah di Masjid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ins</span><span class="token punctuation">&gt;</span></span>.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
  <p>Pelajari selengkapnya mengenai HTML <a href="https://www.apacara.com/tutorial/html/html-del-tag.html">&lt;del&gt;</a> dan <a href="https://www.apacara.com/tutorial/html/html-ins-tag.html">&lt;ins&gt;</a> element.</p>
  </div>
</section>
<h2 class="title-sub bd-danger bd-left bd-left-only">Contoh Lengkap
</h2>
<p>Contoh <em>source code</em> lengkap disertai dengan demo hasil output kode (preview).</p>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>SOURCE</span>
  </div>
  <div class="icard-bar-right pull-right">
    <a href="https://www.apacara.com/example/html/attribute/datetime.html" target="_blank" rel="nofollow"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
  </div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML datetime attribute<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Acara dimulai pada:
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-03-07<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>07 Maret 2015<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span> Acara Malam ini adalah
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>del</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-22 21:21:05<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Menghadiri Pesta<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>del</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ins</span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2015-08-22 21:23:30<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Menghadiri Ceramah di Masjid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ins</span><span class="token punctuation">&gt;</span></span>.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code>
</pre>
</div>
</div>


<!-- Browser Support -->
<aside id="browser">
<h3 class="title-sub bd-danger bd-left bd-left-only">Browser Support <br>
  <small>Status &amp; Dukungan Browser </small>
</h3>
<p>Berikut adalah keterangan mengenai dukungan (support) dari beberapa browser.</p>
<div class="uk-overflow-container">
  <table class="table uk-table uk-table-striped uk-table-bordered uk-text-nowrap full-width">
        <thead>
          <tr>
            <th>HTML</th>
            <th title="Chrome"><i class="fa fa-chrome fa-lg"></i></th>
            <th title="Safari"><i class="fa fa-safari fa-lg"></i></th>
            <th title="Firefox"><i class="fa fa-firefox fa-lg"></i></th>
            <th title="Opera"><i class="fa fa-opera fa-lg"></i></th>
            <th title="Internet Explorer"><i class="fa fa-internet-explorer fa-lg"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>attribute</td>
            <td>Chrome</td>
            <td>Safari</td>
            <td>Firefox</td>
            <td>Opera</td>
            <td>IE</td>
          </tr>
          <tr>
            <td><code>datetime</code></td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
            <td class="success">Ya</td>
          </tr>
        </tbody>
  </table>
</div>

</aside>