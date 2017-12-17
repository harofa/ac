---
layout: post
title: "HTML content tag | belajar &lt;content&gt; element"
short_title: "HTML &lt;content&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;content&gt; tag. Tutorial dan panduan mengenai element &lt;content&gt;..&lt;/content&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;content&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-content-tag.png"
  thumb: "posts/thumbs/html-content-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML content tag</strong>. Tutorial dan panduan mengenai element <code>&lt;content&gt;...&lt;/content&gt;</code> yang digunakan bersama attribute <code>select</code> didalam Shadow DOM. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;content&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">content</span></small>
</h2>
<p>
  <strong>HTML <code>&lt;content&gt;</code> element</strong> digunakan untuk menyisipkan konten (isi, baik berupa teks maupun lainnya) didalam <em>Shadow DOM</em>.
</p>
<p><code>&lt;content&gt;</code> element tidak digunakan sebagaimana biasanya, seperti HTML element lainnya. Ia digunakan bersamaan dengan <em>Web Component</em>. Oleh karenanya, untuk menggunakan element ini dan agar kode berjalan dengan baik, maka browser yang digunakan harus mendukung (support) Web Components.</p>

<div class="icard">
  <div class="icard-heading clearfix co-wh bg-primary">
    <div class="icard-bar bar-lg">
      <div class="icard-bar-left pull-left">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
        <span>Ketahuilah</span>
      </div>
    </div>
  </div>
  <div class="icard-body bg-primary2">
<ul class="uk-text-left">
  <li>
    <p><strong>Web Components</strong> adalah teknologi web secara terbuka yang sudah tertanam dan menjadi bagian dari browser sehingga tidak memerlukan <em>library</em> lain, seperti jQuery dan Dojo.</p>
  </li>
  <li><strong>Shadow DOM</strong> merujuk pada kemampuan browser dalam me-<em>render</em> sebuah dokumen untuk menyertakan <em>subtree</em> dari DOM element, tetapi bukan didalam DOM tree dari dokumen utama.</li>

</ul>
  </div>
</div>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;content&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">select</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan selector (sama seperti CSS selector) yang ingin disisipkan kontennya. Jika lebih dari satu, maka gunakan tanda koma (,) sebagai pemisah dari beberapa selectors yang dipilih. </p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: Selector</p>
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
        <p>&lt;content&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
        <div class="footer-callout info">
          <p>Silahkan, lihat referensi mengenai <a href="http://www.apacara.com/blog/html-global-attribute.html">HTML Global Attribute</a></p>
        </div>
    </div>
</section>


<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;content&gt;</code> element</small>
  </h2>
  <p>Pada contoh dibawah ini, konten dari &lt;h1&gt; yaitu "Time is <span class="text-danger">Monkey</span>" jelas salah, bukan <em>Monkey (Monyet)</em> tapi <em>Money (Uang)</em>, sehingga menjadi "Time is Money" dan kita ingin merubah konten tersebut dengan script.</p>
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
<pre class="prettyprint linenums line-numbers highlight language-markup" data-line="15"><code data-language="html" class="html  language-markup"><span class="token comment" >&lt;!-- awalnya konten seperti ini (salah): --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Time is Monkey<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Waktu adalah Uang<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
<span class="token comment" >// Tentukkan &lt;div&gt; diatas yang mau diedit.</span>
<span class="token keyword">var</span> ubahTulisan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" >// Membuat sebuah shadow DOM pada &lt;div&gt; diatas</span>
<span class="token keyword">var</span> sumberBayangan <span class="token operator">=</span> ubahTulisan<span class="token punctuation">.</span><span class="token function">createShadowRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" >// &lt;h1&gt; diubah menjadi &lt;h2&gt;, begitu juga konten/isi-nya</span>
<span class="token comment" >// Mengambil konten dari &lt;p&gt; element</span>
sumberBayangan<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>
<span class="token string">'&lt;h2&gt;Time is Money&lt;/h2&gt; &lt;content select="p"&gt;&lt;/content&gt;'</span><span class="token punctuation">;</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code>
<div aria-hidden="true" class=" line-highlight" style="top: 336px;">
</div></pre>
</div>
</div>
<p>Dari contoh diatas, didalam element <code>&lt;div&gt;</code> (baris 2-5) terdapat element <code>&lt;h1&gt;</code> , kemudian diganti menjadi <code>&lt;h2&gt;</code> (lihat baris 15) dengan konten yang benar (Time is Money) ditambah dengan konten yang dipilih adalah element <code>&lt;p&gt;</code> (Waktu adalah Uang), sehingga hasilnya bisa dilihat pada <em>Code Editor</em> dibawah ini.</p>
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
        <a href="https://www.apacara.com/example/html/tag/content.html" target="_blank"><span>demo</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML content tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment" >&lt;!-- awalnya konten seperti ini (salah): --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Time is Monkey<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Waktu adalah Uang<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
      <span class="token comment" >// Tentukkan &lt;div&gt; diatas yang mau diedit.</span>
      <span class="token keyword">var</span> ubahTulisan <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment" >// Membuat sebuah shadow DOM pada &lt;div&gt; diatas</span>
      <span class="token keyword">var</span> sumberBayangan <span class="token operator">=</span> ubahTulisan<span class="token punctuation">.</span><span class="token function">createShadowRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment" >// &lt;h1&gt; diubah menjadi &lt;h2&gt;, begitu juga konten/isi-nya</span>
      <span class="token comment" >// Mengambil konten dari &lt;p&gt; element</span>
      sumberBayangan<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>
       <span class="token string">'&lt;h2&gt;Time is Money&lt;/h2&gt; &lt;content select="p"&gt;&lt;/content&gt;'</span><span class="token punctuation">;</span>
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
            <td><code>&lt;content&gt;</code></td>
          <td class="success">35</td>
          <td class="danger">?</td>
          <td class="success">28</td>
          <td class="success">26</td>
          <td class="danger">?</td>
          </tr>
        </tbody>
  </table>
</div>

<hr class="uk-article-divider">
<!-- Default CSS -->
<div class="dul-block">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Pengaturan awal CSS yang berlaku&nbsp;</h2>
  <p>CSS untuk element <code>&lt;content&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>
</aside>