---
layout: post_amp
template: post_amp
date: 10 April 2018

title: "Apa Itu CSS (Cascading Style Sheets)?"
short_title: "Apa itu CSS?"
language: id

metadata:
  description: "Mengenal apa itu CSS? yang berkaitan dengan web design. CSS adalah kepanjangan dari Cascading Style Sheets yang digunakan untuk mendesain halaman web supaya lebih menarik dan memiliki tampilan sesuai keinginan orang yang mendesainnya"

author: halwa
tags: apa, istilahweb
tag: [apa, istilahweb]
taxonomy:
  category: html
  tags: apa, istilahweb
  tag: [apa, istilahweb]
images:
  figure: "posts/apa-itu-css.png"
  thumb: "posts/thumbs/apa-itu-css.png"
---
<p class="lead">CSS merupakan bagian dari web desain yang tak terpisahkan. Dengan CSS kita bisa merubah perwajahan (front-end) atau tampilan sebuah halaman web. Jika sebuah halaman web tidak menggunakan CSS, maka tampilannya akan membosankan dan tidak menarik. Disini, akan akan dijelaskan mengenai CSS lebih detail.</p>
<hr />
<h2> Apa itu CSS?</h2>
<p><dfn><strong>CSS</strong></dfn> adalah kepanjangan dari "<em>Cascading Style Sheets</em>". Yaitu, bahasa yang digunakan untuk memberi sentuhan gaya atau corak tampilan (<em lang="en">style</em>) pada sebuah element atau struktur halaman web yang dibuat oleh <abbr title="HyperText Markup Language">HTML</abbr>.</p>

<p><em>CSS</em> dikembangkan oleh komunitas internasional yang disebut <em>World Wide Web Consortium (W3C)</em>, yang merupakan komunitas seluruh dunia yang bergabung untuk berkontribusi memberi masukan, menulis dan mengembangan spesifikasi dari CSS untuk mendefinisikan standar bahasa CSS yang akan digunakan oleh semua orang, juga agar vendor yang mengembangkan aplikasi web browser dapat mengimplementasikannya. Spesifikasi CSS pertama kali diperkenalkan pada tahun 1996.<br> </p>
<p>Untuk mempelajari CSS, tentunya kita harus mengetahui HTML dasar yang membentuk struktur halaman sebuah website yang dibuat oleh tag-tag atau elemen-elemen HTML. Dengan demikian, kita dapat mengaplikasikan <em>style</em> untuk masing-masing tag atau elemen tersebut.<br> </p>
<section>
    <h2>
Apa Fungsi (Kegunaan) CSS?</h2>
<div class="dul-callout dul-callout-success">
<p><em>CSS</em> mendeskripsikan presentasi atau tampilan sebuah halaman web. Sehingga, kode CSS digunakan untuk mempercantik dan memperbaiki tampilan antar muka sebuah website. Seperti, mewarnai tulisan, memberi background (latar) baik dengan warna ataupun gambar, menentukan font, memberi animasi, mengatur tampilan sesuai ukuran layar web browser yang digunakan, dan hal-hal lainnya yang berkaitan dengan desain sebuah website.</p></div>
</section>
  <section>
    <h2>
Apa itu CSS3?</h2>
<div class="dul-callout dul-callout-success">
<p><em>CSS3</em> adalah versi pengembangan dari CSS 2.1 dengan penambahan beberapa fitur baru yang canggih dan berguna untuk pengembangan website modern. Anda dapat mempelajari dan melihat pembaharuan atau perkembangannya di website resminya <a rel="nofollow" href="https://www.w3.org/Style/CSS/current-work" target="_blank">www.w3.org/Style/CSS/current-work</a>, yang mana berdasarkan spesifikasinya, CSS3 terbagi menjadi beberapa modul untuk dipelajari. Setiap modul merupakan spesifikasi tersendiri yang dibahas dan dikembangkan oleh beberapa penulis yang terpisah dari spesifikasi lainnya. Contohnya, modul CSS <em>selectors</em>, <em>text</em>, dan <em>background</em>. </p>
      </div>
</section>
  <section>
    <h2>
Apa bedanya (Perbedaan) CSS vs. CSS3 ?</h2>
<div class="dul-callout dul-callout-success">
<p><em>CSS</em> mendeskripsikan presentasi atau tampilan sebuah halaman web. Sehingga, kode CSS digunakan untuk mempercantik dan memperbaiki tampilan antar muka sebuah website. Seperti, mewarnai tulisan, memberi background (latar) baik dengan warna ataupun gambar, menentukan font, memberi animasi, mengatur tampilan sesuai ukuran layar web browser yang digunakan, dan hal-hal lainnya yang berkaitan dengan desain sebuah website.</p></div>
</section>
  <section>
    <h2>
Bagaimana Menulis kode CSS?</h2>
<div class="dul-callout dul-callout-danger">
<p>Menulis kode CSS dapat menggunakan aplikasi code editor, seperti <a rel="nofollow" href="https://notepad-plus-plus.org/" target="_blank" title="Notepad++ official site">notepad++</a>, <a rel="nofollow" href="https://www.sublimetext.com/" target="_blank" title="Sublime Text official site">Sublime Text</a>, dan lain sebagainya.
        </p></div>
</section>

  <section>
    <h3>
Contoh Kode "CSS"</h3>
<div class="dul-block">
<p>Berikut adalah contoh kode CSS yang dapat ditulis didalam element <code>&lt;style&gt;..&lt;/style&gt;</code> ataupun didalam file <code>.css</code> yang terpisah (eksternal).</p>
<!-- custom-title -->
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-tw">
    <div class="icard-bar">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-css3" aria-hidden="true"></i>
        <span>style.css</span>
      </div>
      <div class="icard-bar-right pull-right">
        <span>Example</span>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme">
<pre class="prettyprint linenums line-numbers highlight language-css"><code data-language="css" class=" language-css"><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Helvetica Neue"</span>, Helvetica, Arial, sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* ini adalah komentar */</span>

<span class="token comment">/* paragraf memiliki latar berwarna grey (abu-abu) */</span>
<span class="token selector">p</span> <span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> grey<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">}</span> <span class="token comment">/* link berwarna biru */</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>


</div>
</section>