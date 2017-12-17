---
layout: post
title: "Belajar HTML Global Attributes"
short_title: "HTML Global Attributes"
language: id

metadata:
  description: "Belajar Mengenai HTML global attributes. Referensi, penggunaan dan penjelasan berkaitan dengan HTML global attribute"

author: dul  

tag: [html, htmlattribute]
taxonomy:
  category: html
  tag: [html, htmlattribute]
images:
  figure: "posts/html-global-attributes.png"
  thumb: "posts/thumbs/html-global-attributes.png"
---
<p class="text-muted" class="description">
<em>Global attribute</em> adalah HTML atribut yang secara umum dapat digunakan pada semua elemen HTML.
</p>

<hr />
<h2 class="title-sub bd-primary bd-left bd-left-only">Deskripsi <br />
<small>Mengenai Global Attributes</small>
</h2>
<p>
<em>Global Attributes</em> merupakan attribute yang digunakan untuk semua element HTML, meskipun atribut tersebut tidak memiliki peranan (pengaruh) terhadap beberapa element.
</p>
<p>
<em>Global Attribute</em> bisa saja digunakan pada sebuah element yang bukan standar. Artinya, element yang tidak sesuai dengan standard tetap dapat menggunakan attribute global ini walaupun tidak valid. Contoh, saya menulis <code>&lt;elemenku&gt;</code> dan jelas sekali elemen ini tidak ada (tidak valid) tetapi, HTML attribute dapat digunakan pada element tersebut. Sehingga, jika ditulis <code>&lt;elemenku hidden&gt;Hai Semuanya&lt;elemenku&gt;</code>, maka tulisan &quot;Hai Semuanya&quot; akan di-<em>hidden (sembunyikan)</em>. Attribute <code>hidden</code> merupakan salah satu dari <em>HTML Global Attribute</em> yang digunakan untuk menyembunyikan element.
</p>
<hr />
<section>
<h3 class="title-sub bd-danger bd-left bd-left-only">HTML Global Attribute <br />
<small>Atribut Global di dalam <code>HTML</code></small>
</h3>
<div class="icode itheme">
<pre class="prettyprint highlight ">
<code data-language="html" class="html language-markup">accesskey="tombol pintas dari papan kunci"
class="nama class"
contenteditable="true | false | inherit"
contextmenu="id dari sebuah menu"
data-*="attribute data yang ditentukan oleh user"
dir="ltr | rtl | auto"
draggable="true | false | auto"
dropzone="copy | move | link"
hidden="hidden"
id="nama id"
itemid="microdata dalam format URL"
itemprop="value tertentu yang berkaitan dengan microdata"
itemref="id yang berisi microdata"
itemscope="jangkauan item pada sebuah microdata"
itemtype="tipe microdata dalam format URL"
lang="kode bahasa"
spellcheck="true | false"
style="kode css style"
tabindex="nomor index"
title="judul untuk sebuah element"
translate="yes | no"

/* Untuk microdata, dapat dipelajari melalui http://schema.org */</code>
</pre>
</div>
</section>

<hr />
<!-- Penjelasan dan Contoh Penggunaan -->
<h2 class="title-sub bd-primary bd-left bd-left-only">Penjelasan &amp; Contoh
<br /><small>Macam-macam Global Attribute</small>
</h2>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>accesskey</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p>Menentukan <em>shortcut key (tombol pintas)</em> pada keyboard untuk mengaktifkan elemen atau fokus pada element. Dalam penggunaan tombol pintas, berbeda-beda pada setiap browser. </p>
<!-- icard -->
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html5" aria-hidden="true"></i>
<span>SOURCE</span>
</div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight ">
<code data-language="html" class="inline language-markup">Menuju &lt;a href="https://www.google.com" accesskey="g"&gt;google.com&lt;/a&gt;</code>
</pre>
</div>
</div>
<div class="icard">
<div class="icard-heading clearfix bg-gr">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html co-danger" aria-hidden="true"></i>
<span>PREVIEW</span>
</div>
<div class="icard-bar-right pull-right condensed">
<span class="fa fa-circle co-success"></span>
<span class="fa fa-circle co-warning"></span>
<span class="fa fa-circle co-danger"></span>
</div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
Menuju <a href="https://www.google.com" accesskey="g">google.com</a>
</div>
</div>
</div>
</div>
<p>Dari hasil kode HTML diatas, untuk menuju google.com, bagi pengguna browser Chrome, IE, dan Safari (Webkit) gunakan kombinasi keyboard <kbd>Alt + g</kbd> yang mana <kbd>g</kbd> adalah value dari <code>accesskey</code> yang kita tentukan, dan untuk pengguna Firefox adalah <kbd>Alt + Shift + g</kbd></p>

<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>class</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>class</code> attribute digunakan untuk menentukan nama class pada sebuah element. Penggunaannya boleh lebih dari satu nama class dalam satu element. Silahkan, pelajari juga <a href="../../css/selector/class-selector.html">CSS Class Selector</a> .</p>
<pre class="prettyprint highlight">
<code data-language="html" class="html language-markup inline">&lt;div class="container"&gt;
&lt;p class="artikel intro"&gt; Intro Artikel &lt;/p&gt;
&lt;/div&gt;</code>
</pre>
</div>
</div>

<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>contenteditable</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p>Atribut <code>contenteditable</code> digunakan untuk menentukkan sebuah elemen HTML apakah dapat diedit secara langsung atau tidak. Pilihan <em>value</em>-nya adalah sebagai berikut:</p>
<ul>
<li><em>true</em> atau tanpa value (kosong), yang menunjukkan bahwa element dapat diedit;</li>
<li><em>false</em>, yang menunjukkan bahwa element tidak dapat diedit.</li>
</ul>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html5" aria-hidden="true"></i>
<span>SOURCE</span>
</div>
<div class="icard-bar-right pull-right">
<a href="https://www.apacara.com/example/html/attribute/contenteditable.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
</div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight">
<code data-language="html" class="html language-markup inline">&lt;p&gt;Paragraf ini tidak bisa diedit.&lt;/p&gt;
&lt;p contenteditable="true"&gt;Paragraf ini bisa diedit, silahkan klik aku!&lt;/p&gt;</code>
</pre>
</div>
</div>
</div>
</div>

<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>contextmenu</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>contextmenu</code> attribute adalah atribut HTML yang digunakan untuk memberikan menu konteks (context menu) pada sebuah element ketika ada interaksi dari user, seperti mengklik kanan dengan mouse. Value dari <code>contextmenu</code> merupakan nama id yang terdapat pada HTML tag &lt;menu&gt; sebagai rujukan daftar menu yang akan diintegrasikan pada atribut contexmenu tersebut.</p>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html" aria-hidden="true"></i>
<span>HTML</span>
</div>
<div class="icard-bar-right pull-right">
<a href="https://www.apacara.com/example/html/attribute/contextmenu.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint highlight line-numbers" data-line="1,3">
<code data-language="html" class="html language-markup inline">&lt;div contextmenu="ukuranFont" id="ubahFont"&gt;
Klik kanan pada kotak ini, Temukan menu tambahan untuk memperbesar dan memperkecil font. Telah dicoba pada browser mozilla firefox terbaru dan berjalan lancar.
&lt;menu type="context" id="ukuranFont"&gt;
&lt;menuitem label="Perbesar Ukuran Font" onclick="perbesarFont()"&gt;&lt;/menuitem&gt;
&lt;menuitem label="Perkecil Ukuran Font" onclick="perkecilFont()"&gt;&lt;/menuitem&gt;
&lt;/menu&gt;
&lt;/div&gt;</code>
</pre>
</div>
</div>

</div>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-tw">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-css" aria-hidden="true"></i>
<span>CSS</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<pre class="line-numbers prettyprint highlight">
<code data-language="css" class="language-css">div#ubahFont{
width: 100%;
height: 100%;
border: 1px solid #555;
padding: 1em;
}</code>
</pre>
</div>
</div>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-rs2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-javascript" aria-hidden="true"></i>
<span>JavaScript</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<pre class="line-numbers prettyprint highlight">
<code class="language-javascript">function perbesarFont(){
document.getElementById("ubahFont").style.fontSize="larger";
}
function perkecilFont(){
document.getElementById("ubahFont").style.fontSize="smaller";
}</code>
</pre>
</div>
</div>
</div>

<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>data-*</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>data-*</code> attribute digunakan untuk menyisipkan nama attribute yang dapat kita tentukan sendiri setelah kata &quot;data-&quot;. Nama attribute tidak boleh mengandung huruf kapital dan jarak (spasi). Ini, biasanya digunakan pada sebuah aplikasi atau halaman khusus yang mana akan dieksekusi oleh javascript.</p>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html5" aria-hidden="true"></i>
<span>HTML</span>
</div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight">
<code data-language="html" class="html language-markup inline">&lt;p data-artikel="Artikel Bebas"&gt;Ini adalah:  &lt;/p&gt;
</code>
</pre>
</div>
</div>
</div>
<p>Contoh Data Attribute yang diterapkan pada CSS style:</p>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-tw">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-css" aria-hidden="true"></i>
<span>CSS</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<pre class="line-numbers prettyprint highlight">
<code data-language="css" class="language-css">/* attribute selector */
p[data-artikel]:after {
/* tambahkan konten setelah &lt;/p&gt; yang diambil dari value "data-artikel" */
content: attr(data-artikel);
color: green;
}</code>
</pre>
</div>
</div>
<div class="icard">
<div class="icard-heading clearfix bg-gr">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html co-danger" aria-hidden="true"></i>
<span>PREVIEW</span>
</div>
<div class="icard-bar-right pull-right condensed">
<span class="fa fa-circle co-success"></span>
<span class="fa fa-circle co-warning"></span>
<span class="fa fa-circle co-danger"></span>
</div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<div class="example-code-output">
<p data-artikel="Artikel Bebas">Ini adalah:  </p>
</div>
</div>
</div>
</div>

<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>dir</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>dir</code> attribute digunakan untuk menentukan arah tulisan konten/teks pada sebuah element. Contohnya, Bahasa Indonesia ditulis dari kiri ke kanan, sedangkan Bahasa Arab ditulis dari kanan ke kiri.</p>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html" aria-hidden="true"></i>
<span>HTML</span>
</div>
<div class="icard-bar-right pull-right">
<span>Example</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<pre class="prettyprint highlight">
<code data-language="html" class="html language-markup inline">&lt;p &gt;Allah Maha Besar&lt;/p&gt;
&lt;p lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;&#x0627;&#x0644;&#x0644;&#x0647;&#x064f; &#x0623;&#x064e;&#x0643;&#x0652;&#x0628;&#x064e;&#x0631;&#x064f;&lt;/p&gt;
</code>
</pre>
</div>
</div>
</div>
<div class="icard">
<div class="icard-heading clearfix bg-gr">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html co-danger" aria-hidden="true"></i>
<span>PREVIEW</span>
</div>
<div class="icard-bar-right pull-right condensed">
<span class="fa fa-circle co-success"></span>
<span class="fa fa-circle co-warning"></span>
<span class="fa fa-circle co-danger"></span>
</div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<div class="example-code-output">
<p>Allah Maha Besar</p>
<p lang="ar" dir="rtl">&#x0627;&#x0644;&#x0644;&#x0647;&#x064f; &#x0623;&#x064e;&#x0643;&#x0652;&#x0628;&#x064e;&#x0631;&#x064f;</p>
</div>
</div>
</div>
</div>
<p>Pada contoh diatas, tulisan Allah Maha Besar (Bahasa Indonesia) berada disisi kiri, tepatnya dari kiri ke kanan (left-to-right). Sedangkan, tulisan Bahasa Arab berada disisi kanan (right-to-left)</p>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>draggable</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>draggable</code> attribute digunakan untuk menentukan apakah sebuah element dapat di-drag (diseret dan dipindahkan) atau tidak.</p>
<!-- icard -->

</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>dropzone</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>dropzone</code> attribute digunakan untuk menentukan jenis konten apa yang dapat di-drop pada sebuah element. Adapun value-nya adalah sebagai berikut: </p>
<ul>
<li><code>copy</code>, menunjukkan tindakan mendrop element yang menghasilkan salinan (copy) element yang di-drag.
</li>
<li><code>move</code>, menunjukkan element yang di-drag akan dipindahkan ke lokasi element yang di-drop.
</li>
<li><code>link</code>, akan menghasilkan sebuah link yang akan merujuk pada data yang di-drag.
</li>
</ul>
<!-- icard -->

</div>
</div>

<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>hidden</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p></p>
<!-- icard -->
<p><code>hidden</code> attribute digunakan untuk menyembunyikan sebuah element. Element yang disembunyikan tersebut dengan maksud sudah tidak relevan dengan konten sekitarnya.</p>
</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>id</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>id</code> merupakan attribute unik yang mana dalam sebuah dokumen (halaman web) hanya terdapat satu nama id dan tidak boleh lebih dari satu nama id yang sama.</p>
<!-- icard -->

</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>lang</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>lang</code> attribute digunakan untuk menentukan bahasa apa yang ditulis pada sebuah konten di dalam element.</p>
<p>Berikut contoh ucapan <em>&quot;Aku Cinta Kamu&quot;</em> dalam Berbagai Bahasa yang menggunakan attribut <code>lang</code> dengan value sesuai dengan kode bahasa masing-masing.</p>

<pre class="prettyprint highlight line-numbers">
<code data-language="html" class="html language-markup inline">&lt;p lang=&quot;id&quot;&gt;Aku Cinta Kamu&lt;/p&gt;       &lt;!-- Bahasa Indonesia --&gt;
&lt;p lang=&quot;jv&quot;&gt;Aku Tresno Karo Koe&lt;/p&gt;   &lt;!-- Bahasa Jawa --&gt;
&lt;p lang=&quot;su&quot;&gt;Abdi bogoh ka Anjeun&lt;/p&gt;   &lt;!-- Bahasa Sunda --&gt;
&lt;p lang=&quot;en&quot;&gt;I Love You&lt;/p&gt;            &lt;!-- Bahasa Inggris (English)--&gt;
&lt;p lang=&quot;ar&quot; dir=&quot;rtl&quot;&gt;&#x0623;&#x064e;&#x0646;&#x0627;&#x064e; &#x0623;&#x064f;&#x062d;&#x0650;&#x0628;&#x0651;&#x064f;&#x0643;&#x0652;&lt;/p&gt;   &lt;!-- Bahasa Arab (Arabic)--&gt;
&lt;p lang=&quot;zh&quot;&gt;&#x6211;&#x611b;&#x4f60; (g&oacute;a &agrave;i l&igrave;)&lt;/p&gt;    &lt;!-- Chinese (Taiwanese) --&gt;
&lt;p lang=&quot;fr&quot;&gt;Je t'aime, Je t'adore&lt;/p&gt; &lt;!-- Bahasa Prancis (French) --&gt;
&lt;p lang=&quot;ja&quot;&gt;&#x597d;&#x304d;&#x3067;&#x3059; (suki desu)&lt;/p&gt;   &lt;!-- Bahasa Jepang (Japanese) --&gt;
&lt;p lang=&quot;de&quot;&gt;Ich liebe dich&lt;/p&gt; </code>
</pre>
</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>spellcheck</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>spellcheck</code> attribute digunakan untuk menentukan apakah sebuah text harus dicek kebenaran atas ejaan dan tata bahasa (grammar)-nya atau tidak.</p>
<div class="icard">
<div class="icard-heading clearfix co-wh bg-pi2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html" aria-hidden="true"></i>
<span>HTML</span>
</div>
</div>
</div>
<pre class="prettyprint highlight line-numbers"  data-line="2,4">
<code data-language="html" class="html language-markup inline">&lt;p&gt;Perbedaan Teks area dengan spellcheck &lt;strong&gt;true&lt;/strong&gt; dan &lt;strong&gt;false&lt;/strong&gt;&lt;/p&gt;
&lt;textarea &gt;Click Me! I loooove you. spell check="true"
&lt;/textarea&gt;
&lt;textarea spellcheck="false"&gt;Click Me! I loooove you. spellcheck="false"
&lt;/textarea&gt;
&lt;p&gt;
Secara default, pada sebuah textarea browser akan mengecek ejaan tulisan. Jika salah, maka ditandai dengan warna garis merah bawah. pada textarea dengan spellcheck="false" artinya, jangan ditandai (garis merah bawah) meskipun salah ejaan.
&lt;/p&gt;</code>
</pre>
</div>
</div>
<div class="icard">
<div class="icard-heading clearfix bg-gr">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<i class="fa fa-html co-danger" aria-hidden="true"></i>
<span>PREVIEW</span>
</div>
<div class="icard-bar-right pull-right condensed">
<span class="fa fa-circle co-success"></span>
<span class="fa fa-circle co-warning"></span>
<span class="fa fa-circle co-danger"></span>
</div>
</div>
</div>
<div class="icard-body icode itheme bg-gr3">
<div class="example-code-output">
<p>
Perbedaan Teks area dengan spellcheck <strong>true</strong> dan <strong>false</strong>
</p>
<textarea  class="cek-ejaan">Click Me! I loooove you. spell check="true"
</textarea>
<textarea spellcheck="false" class="cek-ejaan">Click Me! I loooove you. spellcheck="false"
</textarea>
</div>
</div>
</div>
</div>
<p>
Secara default, pada sebuah textarea browser akan mengecek ejaan tulisan. Jika salah, maka ditandai dengan warna garis merah bawah. pada textarea dengan spellcheck="false" artinya, jangan ditandai (garis merah bawah) meskipun salah ejaan.
</p>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>style</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>style</code> merupakan attribute HTML yang digunakan untuk menyisipkan style (CSS) khusus untuk element itu sendiri, juga dinamakan inline style.</p>
<!-- icard -->

</div>
</div>

<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>tabindex</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>tabindex</code> digunakan untuk menentukan urutan penggunaan <kbd>tab</kbd> pada sebuah papan tombol (keyboard) dalam mengakses sebuah element.</p>
<!-- icard -->

</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>title</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>title</code> digunakan sebagai judul informasi tambahan pada sebuah element. Biasanya ketika pointer menyentuh / berada diatas element tersebut maka akan muncul sebuah teks sesuai dengan value yang ditulis pada attribute title tersebut.</p>
<!-- icard -->

</div>
</div>
<!-- ATTRIBUTES -->
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
<div class="icard-bar">
<div class="icard-bar-left pull-left">
<span><code>translate</code></span> <span class="co-gr">Attribute</span>
</div>
</div>
</div>
<div class="icard-body icode itheme">
<p><code>translate</code> digunakan untuk menentukan apakah sebuah konten dari element harus diterjemahkan (translate) atau tidak.</p>
<!-- icard -->

</div>
</div>