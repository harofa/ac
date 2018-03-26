---
layout: post
title: "HTML fieldset tag | belajar &lt;fieldset&gt; element"
short_title: "HTML &lt;fieldset&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;fieldset&gt; tag. Tutorial dan panduan mengenai element &lt;fieldset&gt;..&lt;/fieldset&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;fieldset&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-fieldset-tag.png"
  thumb: "posts/thumbs/html-fieldset-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML fieldset tag</strong>. Tutorial dan panduan mengenai element <code>&lt;fieldset&gt;...&lt;/fieldset&gt;</code>. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;fieldset&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">fieldset</span></small>
</h2>
<p>
  <strong>HTML <code>&lt;fieldset&gt;</code> element</strong> digunakan untuk merepresentasikan pengelompokkan daftar input pada sebuah form.
</p>
<p>Daftar inputan dan konten sebuah form dapat dikelompokkan dalam satu group dan diberi nama tertentu menggunakan element <code>&lt;legend&gt;</code> yang ditulis langsung setelah element &lt;fieldset&gt;.</p>
<p>Penggunaan &lt;fieldset&gt; berkaitan dengan element <code>&lt;form&gt;</code> yang digunakan sebagai induk element dari &lt;fieldset&gt; itu sendiri.</p>

<!-- Attribute  -->
<section id="attribute">
      <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
        <small>Atribut HTML Tag <code>&lt;fieldset&gt;</code></small>
      </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix co-wh bg-gr2">
       <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">disabled</code></span></div></div></div><div class="icard-body icode itheme">
            <p>Menunjukkan control (Inputan) pada form dinon-aktifkan atau tidak dapat diedit (diketik).</p>
            <div class="icard-footer clearfix bg-gr2 icode itheme">
              <p>Value: <i>disabled</i></p>
            </div>
        </div>
        </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix co-wh bg-gr2">
       <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">form</code></span></div></div></div><div class="icard-body icode itheme">
            <p>Menentukkan nama <code>id</code> dari sebuah <code>&lt;form&gt;</code> element yang mana fieldset itu diperuntukkan.</p>
            <div class="icard-footer clearfix bg-gr2 icode itheme">
              <p>Value: <i>form_id</i></p>
            </div>
        </div>
</div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
  <div class="icard-heading clearfix co-wh bg-gr2">
       <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">name</code></span></div></div></div><div class="icard-body icode itheme">
            <p>Menentukkan nama untuk fieldset.</p>
            <div class="icard-footer clearfix bg-gr2 icode itheme">
              <p>Value: <i>teks</i></p>
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
        <p>&lt;fieldset&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
        <p>&lt;fieldset&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
<h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
  <small>Contoh HTML <code>&lt;fieldset&gt;</code> element</small>
</h2>
<div class="dul-block">
<h5>Contoh 1</h5>
<p>Contoh HTML element &lt;fieldset&gt; yang digunakan untuk mengelompokkan beberapa element menjadi satu grup dalam sebuah form</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="2,12"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span>Tampilan Layar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>txtHitamPutih</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>0</span> <span class="token attr-name">checked</span><span class="token punctuation">&gt;</span></span> Hitam Keputihan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>txtPutihKehitaman</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>1</span><span class="token punctuation">&gt;</span></span> Putih Kehitaman<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>checkbox</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>lblHitamPutih</span><span class="token punctuation">&gt;</span></span> Gunakan Hitam Putih<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Kontras Layar <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>range</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>lblKontras</span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation">=</span>contrast</span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation">=</span>0</span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span>100</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>0</span> <span class="token attr-name">step</span><span class="token attr-value"><span class="token punctuation">=</span>1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span>contrast</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span>Normal</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>0</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span>Maximum</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>100</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>

<hr class="uk-article-divider">
<h5>Contoh 2</h5>
<p>Contoh penggunaan fieldset dengan sebuah control checkbox yang menginstruksikan untuk mengaktifkan dan menon-aktifkan control inputan.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="1,9"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>memberfields<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>checkbox</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>member</span> <span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.memberfields.disabled <span class="token punctuation">=</span> !checked<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  Membership
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nama Anggota: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membername</span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nomor Anggota: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membernum</span> <span class="token attr-name">required</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[-0-9]+<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Berlaku Hingga: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>memberexp</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>date</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
</pre>
  </div>
</div>
<hr class="uk-article-divider">
<h5>Contoh 3</h5>
<p>Contoh &lt;fieldset&gt; element yang bersarang (nested), didalam sebuah element &lt;fieldset&gt; terdapat element &lt;fieldset&gt; yang lain.</p>
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
<pre class="prettyprint linenums line-numbers highlight max-height language-markup" data-line="1,21"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>memberfields<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>checkbox</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>member</span> <span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.memberfields.disabled <span class="token punctuation">=</span> !checked<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  Keanggotaan
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nama Anggota: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membername</span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>numfields<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>radio</span> <span class="token attr-name">checked</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membertype</span> <span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.numfields.disabled <span class="token punctuation">=</span> !checked<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
   Gunakan Nomor Kartu
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nomor Kartu: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membernum</span> <span class="token attr-name">required</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[-0-9]+<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>kodefields<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membertype</span> <span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.kodefields.disabled <span class="token punctuation">=</span> !checked<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
   Gunakan Kode Kartu
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Kode Kartu: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>memberkode</span> <span class="token attr-name">required</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[A-Za-z]+<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
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
        <a href="https://www.apacara.com/example/html/tag/fieldset.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML fieldset tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span>Tampilan Layar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>txtHitamPutih</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>0</span> <span class="token attr-name">checked</span><span class="token punctuation">&gt;</span></span> Hitam Keputihan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>txtPutihKehitaman</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>1</span><span class="token punctuation">&gt;</span></span> Putih Kehitaman<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>checkbox</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>lblHitamPutih</span><span class="token punctuation">&gt;</span></span> Gunakan Hitam Putih<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Kontras Layar <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>range</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>lblKontras</span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation">=</span>contrast</span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation">=</span>0</span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span>100</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>0</span> <span class="token attr-name">step</span><span class="token attr-value"><span class="token punctuation">=</span>1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span>contrast</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span>Normal</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>0</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span>Maximum</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span>100</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>memberfields<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>checkbox</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>member</span> <span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.memberfields.disabled <span class="token punctuation">=</span> !checked<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      Membership
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nama Anggota: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membername</span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nomor Anggota: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membernum</span> <span class="token attr-name">required</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[-0-9]+<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Berlaku Hingga: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>memberexp</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>date</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>memberfields<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>checkbox</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>member</span> <span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.memberfields.disabled <span class="token punctuation">=</span> !checked<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      Keanggotaan
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nama Anggota: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membername</span> <span class="token attr-name">required</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>numfields<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>radio</span> <span class="token attr-name">checked</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membertype</span> <span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.numfields.disabled <span class="token punctuation">=</span> !checked<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
       Gunakan Nomor Kartu
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nomor Kartu: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membernum</span> <span class="token attr-name">required</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[-0-9]+<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>kodefields<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
       <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span>radio</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>membertype</span> <span class="token attr-name">onchange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.kodefields.disabled <span class="token punctuation">=</span> !checked<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
       Gunakan Kode Kartu
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Kode Kartu: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span>memberkode</span> <span class="token attr-name">required</span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[A-Za-z]+<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">&gt;</span></span>

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
                <td><code>&lt;fieldset&gt;</code></td>
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
      <p>CSS untuk element <code>&lt;fieldset&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
      <div class="icode itheme css">
        <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token selector">fieldset</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 0.35em<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0.625em<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 0.75em<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 0.75em<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px groove <span class="token punctuation">(</span>internal value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
  </div>
    </div>

  </aside>