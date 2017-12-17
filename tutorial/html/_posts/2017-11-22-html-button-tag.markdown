---
layout: post
title: "HTML button tag | belajar &lt;button&gt; element"
short_title: "HTML &lt;button&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;button&gt; tag. Tutorial dan panduan mengenai element &lt;button&gt;..&lt;/button&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;button&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-button-tag.png"
  thumb: "posts/thumbs/html-button-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML button tag</strong>. Tutorial dan panduan mengenai element <code>&lt;button&gt;...&lt;/button&gt;</code>. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;button&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">button</span></small>
</h2>
<p>
  <em>Button</em> dapat diartikan dengan <em>tombol</em>.
</p>
<p>HTML element <code>button</code> menunjukkan sebuah tombol yang secara umum memiliki style layaknya sebuah tombol yang dapat diklik untuk menjalankan tindakan tertentu.
</p>
<p>Konten/teks didalam element <code>button</code> merupakan label dari tombol tersebut. Pada &lt;button&gt; element, dapat pula dimasukkan gambar sebagai tampilan dari tombol itu sendiri, ini yang membedakan antara tombol yang dibuat dengan element &lt;button&gt; dan element &lt;input&gt;.
</p>
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-success">
    <div class="icard-bar bar-lg">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        <span>TIPS</span>
      </div>
    </div>
  </div>
  <div class="icard-body bg-success2">
<p class="uk-text-left">Setiap browser memiliki tampilan (style) tombol yang berbeda-beda, yang dibuat oleh &lt;button&gt; element. Sebaiknya, tuliskan attribute <code>type</code> yang sesuai sebagaimana dijelaskan dibawah, ketika menuliskan element &lt;button&gt;.
</p>
<p class="uk-text-left">Didalam sebuah element <code>form</code>, sebaiknya gunakan &lt;input&gt; sebagai pengganti dari &lt;button&gt; yang digunakan untuk mengirim data form, karena setiap browser memiliki perbedaan hasil submit form jika menggunakan element &lt;button&gt;.
</p>
  </div>
</div>
<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;button&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">autofocus</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Ini merupakan HTML5 Boolean attribute yang digunakan untuk menentukkan bahwa button (tombol) mendapatkan fokus ketika halaman dimuat.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>autofocus</code></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">disabled</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menunjukkan bahwa element <code>button</code> tersebut "disabled" (Tidak dapat diklik).</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>disabled</code></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">form</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menentukkan id element <code>form</code> yang dikaitkan dengan element <code>button</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <em>id_form</em></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formaction</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menentukkan URL yang memproses data form ketika form dikirim. Berlaku untuk attribute <code>type="submit"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: URL</p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formenctype</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan <em>form encoded type</em> yang digunakan untuk menentukkan tipe content yang digunakan ketika mengirim form pada server. Berlaku untuk attribute <code>type="submit"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value:</p>
            <ul>
              <li><code>application/x-www-form-urlencoded</code> : <em>default value</em> apabila attribute <em>formenctype</em> tidak disebutkan.</li>
              <li><code>multipart/form-data</code> : digunakan apabila menggunakan element &lt;input type="file"&gt;</li>
              <li><code>text/plain</code></li>
            </ul>

        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formmethod</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menentukkan <em>HTTP method</em> yang dipakai oleh browser untuk mengirimkan data form. Berlaku untuk attribute <code>type="submit"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>get</code> | <code>post</code></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formnovalidate</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menunjukkan bahwa data form tidak harus di-validasi terlebih dahulu sebelum dikirim. Berlaku untuk attribute <code>type="submit"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>formnovalidate</code></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formtarget</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menentukkan target tampilan setelah data form dikirim. Berlaku untuk attribute <code>type="submit"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>_blank</code> | <code>_self</code> | <code>_parent</code> | <code>_top</code> | namaframe</p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">name</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menentukkan nama button yang berkaitan dengan data form yang akan dikirim.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: namabutton</p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">type</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menentukkan tipe (Jenis) dari button.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>button</code> | <code>reset</code> | <code>submit</code> </p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">value</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menentukkan <em>initial value</em> sebuah button.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: teks</p>
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
        <p>&lt;button&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
        <p>&lt;button&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;button&gt;</code> element</small>
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
<pre class="prettyprint highlight language-markup"><code data-language="html" class="html inline language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Klik Aku!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code>
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
        <a href="https://www.apacara.com/example/html/tag/button.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">
  <span class="token comment" >/* style untuk contoh 3 */</span>
  <span class="token selector">button.button-gue</span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">button.button-gue:hover</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> .8<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment" >/* dul button. style untuk contoh 4 */</span>
   <span class="token selector">.btn-dul</span><span class="token punctuation">{</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span>.1em<span class="token punctuation">;</span><span class="token property">cursor</span><span class="token punctuation">:</span>pointer<span class="token punctuation">;</span><span class="token property">-webkit-transition</span><span class="token punctuation">:</span>.4s<span class="token punctuation">;</span><span class="token property">-moz-transition</span><span class="token punctuation">:</span>.4s<span class="token punctuation">;</span><span class="token property">-ms-transition</span><span class="token punctuation">:</span>.4s<span class="token punctuation">;</span><span class="token property">-o-transition</span><span class="token punctuation">:</span>.4s<span class="token punctuation">;</span><span class="token property">transition</span><span class="token punctuation">:</span>.4s<span class="token punctuation">;</span><span class="token property">vertical-align</span><span class="token punctuation">:</span>middle<span class="token punctuation">;</span><span class="token property">min-height</span><span class="token punctuation">:</span>1em<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>10px 13px<span class="token punctuation">;</span><span class="token property">text-decoration</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">border-radius</span><span class="token punctuation">:</span>2px<span class="token punctuation">;</span><span class="token property">outline</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">border-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span><span class="token property">border-width</span><span class="token punctuation">:</span>1px<span class="token punctuation">}</span><span class="token selector">.btn-dul-default</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#555<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#f7f7f7<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#f2f2f2<span class="token punctuation">;</span><span class="token property">text-shadow</span><span class="token punctuation">:</span>0 1px 0 #fafafa<span class="token punctuation">}</span><span class="token selector">.btn-dul-default:hover</span><span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span>#f2f2f2<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#ebebeb<span class="token punctuation">}</span><span class="token selector">.btn-dul-primary</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#00a9df<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#00a9df<span class="token punctuation">;</span><span class="token property">text-shadow</span><span class="token punctuation">:</span>0 1px 0 #a3a3a3<span class="token punctuation">}</span><span class="token selector">.btn-dul-primary:hover</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#009acb<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#009acb<span class="token punctuation">}</span><span class="token selector">.btn-dul-info</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#5ec8ff<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>#FFF<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#44bfff<span class="token punctuation">}</span><span class="token selector">.btn-dul-info:hover</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#2ab6ff<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>#FFF<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#00a1f6<span class="token punctuation">}</span><span class="token selector">.btn-dul-success</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#8dc838<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#8dc838<span class="token punctuation">}</span><span class="token selector">.btn-dul-success:hover</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#7fb532<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#7fb532<span class="token punctuation">}</span><span class="token selector">.btn-dul-warning</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#fcca03<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#fcca03<span class="token punctuation">}</span><span class="token selector">.btn-dul-warning:hover</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#fcb603<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#fcb603<span class="token punctuation">}</span><span class="token selector">.btn-dul-danger</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#dd1812<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#dd1812<span class="token punctuation">}</span><span class="token selector">.btn-dul-danger:hover</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>#c90e08<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#c90e08<span class="token punctuation">}</span><span class="token selector">.btn-dul-clean</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#6f6f6f<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">}</span><span class="token selector">.btn-dul-clean:hover</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>#00a9df<span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#00a9df<span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 1: button default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-kirim-pesan<span class="token punctuation">"</span></span>
<span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Kirim Pesan<span class="token punctuation">"</span></span>
<span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Kirim Pesan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 2: button dengan javascript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>
  <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>jalankanScript();<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Klik Aku<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 3: button dengan gambar (img)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button-gue<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.apacara.com/media/images/content/button-download-katalog.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Download<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment" >&lt;!-- script untuk contoh 2 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token keyword">function</span> <span class="token function">jalankanScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hallo Sobat!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Contoh 4: button yang diberi style CSS <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn-dul btn-dul-default<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
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
            <td><code>&lt;button&gt;</code></td>
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
  <p>CSS untuk element <code>&lt;button&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>
</aside>