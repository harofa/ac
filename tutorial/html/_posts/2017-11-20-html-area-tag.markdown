---
layout: post
title: "HTML area tag | belajar &lt;area&gt; element"
short_title: "HTML &lt;area&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;area&gt; tag. Tutorial dan panduan mengenai element &lt;area /&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;area&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-area-tag.png"
  thumb: "posts/thumbs/html-area-tag.png"
---
<p class="text-muted">
Referensi Belajar <strong>HTML area tag</strong>. Tutorial dan panduan mengenai element <code>&lt;area /&gt;</code>. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;area&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
<small>Penjelasan HTML <span class="highlight">area</span></small>
</h2>
<p>
<code>area</code> element digunakan untuk menunjukkan area (daerah), baik sebuah teks hyperlink dan area tertentu di dalam <em>image map (peta gambar)</em>. <em>image map</em> adalah gambar pemetaan yang dapat diklik pada area tertentu didalam gambar itu sendiri.
</p>
<p>Jika <code>area</code> element tidak dituliskan <code>href</code> attribute-nya, maka area (image map) dari element tersebut tidak bisa terseleksi, maka <code>alt</code> attribute tidak boleh ditulis.</p>
<p>Attribute <code>target, download, rel, hreflang</code> dan <code>type</code> tidak boleh digunakan jika pada element <code>area</code> tersebut tidak disebutkan <code>href</code> attribute.</p>
<p>Jika <code>itemprop</code> attribute disebutkan (ditulis) pada <code>area</code> element, maka <code>href</code>attribute juga harus ditulis pada element tersebut.</p>

<!-- Attribute  -->
<section id="attribute">
<h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
<small>Atribut HTML Tag <code>&lt;area&gt;</code></small>
</h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">alt</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menunjukkan sebuah <em>alternate text (teks pengganti)</em> untuk area element.</p>
<div class="icard-footer clearfix bg-gr2 icode itheme">
<p>Value: (text)</p>
</div>
</div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">coords</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menentukkan sebuah <em>coordinates (koordinat) sebuah area</em>.</p>
<div class="table-responsive uk-overflow-container">
<table class="table uk-table uk-text-nowrap full-width">
<thead>
<tr>
<th>Value</th>
<th>Untuk</th>
<th>Penjelasan</th>
</tr>
</thead>
<tbody>
<tr>
<td>X1,Y1,X2,Y2</td>
<td><code>shape="rect"</code></td>
<td>Menentukkan koordinat dari kiri, atas, kanan dan bawah sudut persegi panjang (rectangle)</td>
</tr>
<tr>
<td>X,Y,radius</td>
<td><code>shape="circle"</code></td>
<td>Menentukkan koordinat pusat lingkaran (circle) dan radius </td>
</tr>
<tr>
<td>X1,Y1,X2,Y2,..,Xn,Yn</td>
<td><code>shape="poly"</code></td>
<td>Menentukkan koordinat tepi dari polygon (poligon=segi banyak). Jika pasangan koordinat pertama dan terakhir tidak sama, browser (user agent) akan menambahkan pasangan koordinat terakhir yang terdekat poligon.</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">download</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menunjukkan bahwa target dari link tersebut akan didownload ketika user mengkliknya.</p>
<div class="icard-footer clearfix bg-gr2 icode itheme">
<p>Value: (name file yang ingin di download)</p>
</div>
</div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">href</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menentukkan target dari alamat URL (Hyperlink).</p>
<div class="icard-footer clearfix bg-gr2 icode itheme">
<p>Value: (URL)</p>
</div>
</div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">hreflang</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menentukkan bahasa yang digunakan pada halaman yang di link.</p>
<div class="icard-footer clearfix bg-gr2 icode itheme">
<p>Value: (kode bahasa)</p>
</div>
</div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">media</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menentukkan media query yang digunakan pada dokumen yang dirujuk oleh link tersebut.</p>
<div class="icard-footer clearfix bg-gr2 icode itheme">
<p>Value: (media query)</p>
</div>
</div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">rel</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menentukkan hubungan (relationship) antara dokumen yang sedang dibuka dan dokumen lain yang dirujuk oleh link tersebut.
</p>
<div class="icard-footer clearfix bg-gr2 icode itheme">
<p>Value: <code>alternate</code> | <code>author</code> | <code>bookmark</code> | <code>help</code> | <code>license</code> | <code>next</code> | <code>nofollow</code> | <code>noreferrer</code> | <code>prefetch</code> | <code>prev</code> | <code>search</code> | <code>tag</code></p>
</div>
</div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">shape</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menentukkan shape (bentuk) dari area.</p>
<div class="icard-footer clearfix bg-gr2 icode itheme">
<p>Value: <code>default</code> | <code>rect</code> | <code>circle</code> | <code>poly</code></p>
</div>
</div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">target</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menentukkan konteks jelajah dokumen yang di link, bagaimana cara membuka halaman yang dirujuk dari link tersebut?</p>
<div class="icard-footer clearfix bg-gr2 icode itheme">
<p>Value: <code>_blank</code> | <code>_parent</code> | <code>_self</code> | <code>_top</code> | nama frame</p>
</div>
</div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">type</code></span></div></div></div><div class="icard-body icode itheme">
<p>Menentukkan tipe media dari halaman yang di link.
</p>
<div class="icard-footer clearfix bg-gr2 icode itheme">
<p>Value: (Tipe media (media_type))</p>
</div>
</div>
</div>
</section>

<!-- Global Attributes -->
<section id="global-attribute">
<h2 class="title-sub bd-danger bd-left bd-left-only">Global Attributes <br>
<small>Atribut Secara Global (Keseluruhan)</small>
</h2>
<div class="">
<p>&lt;area&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
<div class="footer-callout success info">
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
<p>&lt;area&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
<div class="footer-callout success warning">
<p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
</div>
</div>
</section>

<!-- Example -->
<section id="example">
<h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
<small>Contoh HTML <code>&lt;area&gt;</code> element</small>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="4,5"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Klik area gambar (smiley) untuk memperjelas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/posts/suasana-hati.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gambar suasana hati<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>185<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">border</span><span class="token punctuation">:</span>0</span><span class="token punctuation">"</span></span> <span class="token attr-name">usemap</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#suasanahati<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>suasanahati<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>83,110,8<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/example/html/embed/senang.html<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>senang<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>senang<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>104,110,8<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/example/html/embed/sedih.html<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sedih<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sedih<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
</div>
</div>
<p>Pada contoh diatas kita bisa mengklik area tertentu pada sebuah gambar (smiley) yang apabila diklik maka akan terbuka URL dari area shape yang kita tentukkan tersebut. lihat contoh lengkapnya dibawah ini.</p>
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
        <a href="https://www.apacara.com/example/html/tag/area.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Klik area gambar (smiley) untuk memperjelas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/posts/suasana-hati.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gambar suasana hati<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>185<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">border</span><span class="token punctuation">:</span>0</span><span class="token punctuation">"</span></span> <span class="token attr-name">usemap</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#suasanahati<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>suasanahati<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>83,110,8<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/example/html/embed/senang.html<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>senang<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>senang<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>104,110,8<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/example/html/embed/sedih.html<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sedih<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sedih<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">&gt;</span></span>
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
<td><code>&lt;area&gt;</code></td>
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
<p>CSS untuk element <code>&lt;area&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
<div class="icode itheme css">
<pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">area</span> <span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</div>

</aside>