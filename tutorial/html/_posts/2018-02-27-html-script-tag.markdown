---
layout: post
title: "HTML script tag | belajar &lt;script&gt; element"
short_title: "HTML &lt;script&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;script&gt; tag. Tutorial dan panduan mengenai element &lt;script&gt;&lt;/script&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;script&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-script-tag.png"
  thumb: "posts/thumbs/html-script-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML script tag</strong>. Tutorial dan panduan mengenai element <code>&lt;script&gt;...&lt;/script&gt;</code> yang digunakan untuk menulis script di dalam HTML atau merujuk file script eksternal. Mencakup pembahasan lebih detail dan lengkap yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;script&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="html-tag">script</span> tag</small>
</h2>
<p>
  <strong>HTML <code>&lt;script&gt;</code> element</strong> digunakan untuk menulis script, atau lebih tepatnya adalah untuk menyisipkan script (seperti JavaScript) pada sisi <em>client</em>, baik itu ditulis secara langsung di dalam element <code>&lt;script&gt;</code>, maupun merujuk sumber file eksternal dengan attribute <code>src</code>.
</p>
<p>Jika <code>src</code> attribute disebutkan (ditulis), maka &lt;script&gt; element, harus kosong (tidak boleh berisi konten apapun). Begitu juga sebaliknya, apabila script (javascript) tersebut ditulis langsung didalam element &lt;script&gt;, maka <code>src</code> attribute tidak boleh disebutkan.</p>
<p>&lt;script&gt; tanpa attribute <code>async</code> atau <code>defer</code> akan dijalankan (dieksekusi) secara langsung sebelum browser melanjutkan mengurai konten pada halaman tersebut (untuk lebih jelasnya, lihat pada attribute <a href="#async">async</a> dan <a href="#defer">defer</a>).</p>

<h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
<small>Atribut HTML Tag <code>&lt;script&gt;</code></small>
</h2>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
   <span><code>async</code></span> <span class="co-gr">Attribute</span>
  </div>
</div>
</div>
<div class="icard-body icode itheme">
<p>Menunjukkan <i>asynchronously</i> yang berarti <i>tidak serempak</i>. Attribute ini digunakan untuk menentukkan bahwa script akan dieksekusi sedangkan konten (halaman) akan terus dibaca/diurai (<i>parse</i>), sehingga berjalan masing-masing. Attribute ini berlaku untuk eksternal script.</p>
<div class="bg-gr2 p-space-h">
  <p><strong>Value:</strong> <code><i>async</i></code></p>
</div>
</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
   <span><code>charset</code></span> <span class="co-gr">Attribute</span>
  </div>
</div>
</div>
<div class="icard-body icode itheme">
<p>Menentukkan <i>character encoding</i> yang digunakan pada file eksternal script.</p>
<div class="bg-gr2 p-space-h">
  <p><strong>Value:</strong> <i>charset</i></p>
</div>
</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
   <span><code>defer</code></span> <span class="co-gr">Attribute</span>
  </div>
</div>
</div>
<div class="icard-body icode itheme">
<p><i>defer</i> berarti <i>tunda</i> atau <i>menangguhkan</i>. Attribute ini digunakan untuk menangguhkan (menunda) script supaya tidak dijalankan terlebih dahulu sebelum halaman selesai dibaca atau dimuat.</p>
<div class="bg-gr2 p-space-h">
  <p><strong>Value:</strong> <code>defer</code></p>
</div>
</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
   <span><code>src</code></span> <span class="co-gr">Attribute</span>
  </div>
</div>
</div>
<div class="icard-body icode itheme">
<p>Menentukkan link (URL) yang merujuk pada sumber file script external.</p>
<div class="bg-gr2 p-space-h">
  <p><strong>Value:</strong> <i>URL</i></p>
</div>
</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
   <span><code>type</code></span> <span class="co-gr">Attribute</span>
  </div>
</div>
</div>
<div class="icard-body icode itheme">
<p>Menentukkan tipe media yang digunakan untuk script tersebut.</p>
<div class="bg-gr2 p-space-h">
  <p><strong>Value:</strong> <i>media_type</i></p>
</div>
</div>
</div>


<hr class="uk-article-divider">
<!-- Global Attributes -->
<section id="global-attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Global Attributes <br>
    <small>Atribut Secara Global (Keseluruhan)</small>
  </h2>
  <div class="">
    <p>&lt;script&gt; tag mencakup <em>global attributes</em>.</p>
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
    <p>&lt;script&gt; tag mencakup <em>event attributes</em>. </p>
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
    <small>Contoh Bagaimana Menulis Script di dalam HTML?</small>
  </h2>
  <p>Bagaimana menysisipkan script (javascript) di dalam HTML? Lihat contoh dibawah ini, kemudian Anda dapat memasukkannya diantara element <code>&lt;head&gt;</code> dan <code>&lt;/head&gt;</code> ataupun diantara element <code>&lt;body&gt;</code> dan <code>&lt;/body&gt;</code>. Untuk lebih jelasnya, Anda dapat melihat sumber kode pada contoh lengkap <em>demo editor</em> di bawah.</p>
  <div class="dul-block">
  <p>Contoh HTML <code>&lt;script&gt;</code> tag - <em>Internal Script</em>: </p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"Selamat datang"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
  </div>
  <div class="dul-block">
  <p>Contoh HTML <code>&lt;script&gt;</code> tag - <em>External Script</em>: </p>
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
<pre class="prettyprint highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nama-script.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code>
</pre>
</div>
</div>
  </div>
  <p>Di dalam HTML5 Anda dapat menambahkan <code>type</code> attribute hanya sebagai pilihan opsional, tetapi dalam HTML4 dan (x)HMTL, attribute ini wajib ditulis. Contoh:</p>
  <div class="dul-block">
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
<pre class="prettyprint highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nama-script.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code>
</pre>
</div>
</div>
  </div>
</section>
<h2 class="title-sub bd-danger bd-left bd-left-only">Contoh Lengkap
</h2>
<p>Contoh <em>source code</em> lengkap disertai dengan link  &quot;editor&quot; untuk mencoba (try it) dan melihat hasil (preview) kode.</p>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
  <div class="icard-bar-left pull-left">
    <i class="fa fa-html5" aria-hidden="true"></i>
    <span>SOURCE</span>
  </div>
  <div class="icard-bar-right pull-right">
    <a href="https://www.apacara.com/example/html/tag/script.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
  </div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML script tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Kalimat dibawah ini, ditulis dengan javascript:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>contoh<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'contoh'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"&lt;h3&gt;Selamat Datang&lt;/h3&gt;"</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"di apacara.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
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
            <td><code>&lt;script&gt;</code></td>
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
  <p>CSS untuk element <code>&lt;script&gt;</code> yang mungkin akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">script</span> <span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</div>

</aside>