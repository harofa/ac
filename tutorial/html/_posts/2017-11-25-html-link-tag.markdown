---
layout: post
title: "HTML link tag | belajar &lt;link&gt; element"
short_title: "HTML &lt;link&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;link&gt; tag. Tutorial dan panduan mengenai element &lt;link&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;link&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-link-tag.png"
  thumb: "posts/thumbs/html-link-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML link tag</strong>. Tutorial dan panduan mengenai element <code>&lt;link /&gt;</code> yang digunakan untuk menghubungkan file CSS. Mencakup pembahasan lebih detail dan lengkap yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;link&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="html-tag">link</span> tag</small>
</h2>
<p>
  <strong>HTML <code>&lt;link&gt;</code> element</strong> menunjukkan sebuah hubungan (link) antara dokumen (HTML) yang bersangkutan dengan sumber file dari luar (eksternal).
</p>
<p>&lt;link&gt; ditulis di dalam element &lt;head&gt;..&lt;/head&gt; tanpa tag penutup (<i>end tag</i>), juga merupakan element kosong tanpa konten apapun yang hanya berisi attribute saja. <code>&lt;link&gt;</code> element selalu digunakan untuk merujuk file CSS yang berekstensi <code>.css</code>, yang berisi aturan kode CSS, sehingga kode tersebut dapat diaplikasikan untuk mendesain dan memberi sentuhan tampilan yang menarik pada sebuah dokumen web yang merujuk file tersebut.</p>
<p>Element <code>&lt;link&gt;</code> dapat ditulis lebih dari satu kali, tergantung kebutuhan file CSS yang ingin dirujuk dan dipergunakan. Semakin banyak, tentunya semakin memperlambat <i>loading</i> halaman tersebut.</p>
<p>Jika Anda bermaksud ingin <strong>belajar HTML link</strong> yang merujuk (membuka) website atau dokumen lain ketika diklik, silahkan pelajari <a href="https://www.apacara.com/tutorial/html/html-a-tag.html">HTML &lt;a&gt; tag</a>.</p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;link&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">crossorigin</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bagaimana element &lt;link&gt; tersebut menangani permintaan <em>cross origin</em>.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>value:</b> <code>anonymous</code> | <code>use-credentials</code></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">href</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan lokasi file (CSS) atau dokumen yang di-link (dirujuk). Biasanya, sumber file CSS yang ingin diaplikasikan pada dokumen yang bersangkutan.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>value:</b> <i>URL</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">hreflang</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bahasa yang digunakan pada link yang dirujuk tersebut.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>value:</b> <i>kode_bahasa</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">media</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan target media atau alat yang ingin diberlakukan untuk dokumen yang merujuk file (CSS) tersebut.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>value:</b> <i>media_query</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">rel</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan hubungan (<i>relationship</i>) antara dokumen yang bersangkutan dengan dokumen yang di-<i>link</i>.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>value:</b> <code>alternate</code> | <code>archives</code> | <code>author</code> | <code>bookmark</code> | <code>external</code> | <code>first</code> | <code>help</code> | <code>icon</code> | <code>last</code> | <code>license</code> | <code>next</code> | <code>nofollow</code> | <code>noreferrer</code> | <code>pingback</code> | <code>prefetch</code> | <code>prev</code> | <code>search</code> | <code>sidebar</code> | <code>stylesheet</code> | <code>tag</code> | <code>up</code> | </p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">sizes</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan ukuran (<em>size</em>) dari sumber yang di-link. Hanya digunakan untuk &lt;link&gt; element yang memiliki attribute <code>rel="icon"</code>.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>value:</b> <i>HeightxWidth</i> (Tinggi x lebar)</p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">type</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan tipe media (<i>media type</i>) dari sumber yang di-link.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p><b>value:</b> <i>media_type</i> (tipe media)</p>
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
    <p>&lt;link&gt; tag mencakup <em>global attributes</em>.</p>
    <div class="collapse-global uk-hidden" aria-hidden="true">
      <p>Tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
      <div class="footer-callout info">
        <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-global-attribute.html">HTML Global Attribute</a></p>
      </div>
    </div>
  </div>
</section>

<!-- Event Attributes -->
<section>
  <h2 class="title-sub bd-danger bd-left bd-left-only">Event Attributes <br>
    <small>Atribut event  (Peristiwa)</small>
  </h2>
  <div class="dul-callout dul-callout-warning">
    <p>&lt;link&gt; tag mencakup <em>event attributes</em>. </p>
    <div>
      <p>Attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
      <div class="footer-callout warning">
        <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
      </div>
    </div>
  </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;link&gt;</code> element</small>
  </h2>
  <div class="dul-block">
  <p>Contoh <strong>memasukkan style (CSS) dalam dokumen HTML</strong>.</p>
  <p>Gunakan element &lt;link&gt; seperti berikut:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/assets/css/dul-button.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span></span></code>
</pre>
</div>
</div>
  <ul>
    <li>
    <code>rel="styesheet"</code> = Menunjukkan bahwa file yang dirujuk adalah file <i>stylesheet</i> (CSS).</li>
    <li><code>href</code> attribute digunakan untuk menentukkan lokasi file (CSS) yang ingin disisipkan. Pada contoh diatas file <code>dul-button.css</code> berada dalam folder <span class="uk-text-primary">assets/css/</span> yang terletak di website apacara.com.</li>
  </ul>
  <p>Selanjutnya, element &lt;link&gt; seperti contoh diatas, ditulis didalam element &lt;head&gt;..&lt;/head&gt; dalam sebuah dokumen HTML. Contoh lengkapnya, adalah sebagai berikut:</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/assets/css/dul-button.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
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
        <a href="https://www.apacara.com/example/html/tag/link.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML link tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/assets/css/dul-button.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Pada contoh berikut, terlihat tombol (button) yang telah diberi style dari dul-button.css diatas.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-dul btn-dul-default<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-dul btn-dul-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-dul btn-dul-success<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-dul btn-dul-info<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-dul btn-dul-warning<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-dul btn-dul-danger<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-dul btn-dul-clean<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>clean<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
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
            <th title="Edge"><i class="fa fa-edge fa fa-lg"></i></th>
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
            <td>Edge</td>
          </tr>
          <tr>
            <td><code>&lt;link&gt;</code></td>
            <td class="success">Ya</td>
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
  <p>CSS untuk element <code>&lt;link&gt;</code> yang mungkin akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">link</span> <span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</div>

</aside>