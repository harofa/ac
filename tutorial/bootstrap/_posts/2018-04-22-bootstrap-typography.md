---
layout: post
template: post
date: 23 April 2018
prism: true

title: "Bootstrap 4 Typography (Tipografi)"
short_title: "Bootstrap 4 - Typography"
language: id

metadata:
  description: "Bootstrap Typography tutorial. Referensi Belajar Bootstrap, pembahasan secara detail mengenai fitur dan komponen yang ada pada  framework twitter bootstrap. mengenai Bootstrap 4 tipografi."

author: dul

tags: bootstrap,bootstrap4
tag: [bootstrap,bootstrap4]
taxonomy:
  category: bootstrap
  tags: bootstrap,bootstrap4
  tag: [bootstrap,bootstrap4]
images:
  figure: "bootstrap/typography.png"
  thumb: "bootstrap/thumbs/typography.png"
---
<p class="lead demo">Jika kita menggunakan bootstrap, kemudian menulis sebuah postingan (artikel) untuk publikasi online, tepatnya menggunakan kode HTML untuk format tulisan kita, maka kita perlu memahami <em>typography</em> (<mark title="ilmu cetak, seni percetakan">tipografi</mark>) yang disediakan oleh bootstrap.</p>
<hr/>
<p>Bootstrap tipografi adalah semua hal yang berkaitan dengan pengaturan umum teks dan tulisan, mencakup pengaturan umum kepala tulisan (heading), teks bodi (body text), daftar (list) dan lainnya.</p>
<h2 class="title-sub bd-danger bd-left bd-left-only">Heading
</h2>
<p><strong>Heading</strong> adalah bagian kepala tulisan yang biasanya memiliki ukuran teks lebih besar dari teks normal lainnya. <em>Heading</em> biasa digunakan untuk sebuah judul atau sub-sub judul, mencakup HTML tag <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code>.</p>
<p>Bootstrap memiliki style tersendiri untuk element <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code> dari yang terbesar (&lt;h1&gt;) hingga terkecil (&lt;h6&gt;).</p>
<p>Berikut contohnya:</p>
<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-typography-heading.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;h1&gt;h1. Bootstrap heading&lt;/h1&gt;
&lt;h2&gt;h2. Bootstrap heading&lt;/h2&gt;
&lt;h3&gt;h3. Bootstrap heading&lt;/h3&gt;
&lt;h4&gt;h4. Bootstrap heading&lt;/h4&gt;
&lt;h5&gt;h5. Bootstrap heading&lt;/h5&gt;
&lt;h6&gt;h6. Bootstrap heading&lt;/h6&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
  </div>
</div>
</div>
<hr/>
<p>Perhatikan contoh diatas, judul utama diletakkan didalam element <code>&lt;h1&gt;</code>...<code>&lt;h1&gt;</code>, adapun untuk sub-sub judul dapat disesuaikan dengan menggunakan tag <code>&lt;h2&gt;</code> sampai <code>&lt;h6&gt;</code>.</p>

<p>Selain menggunakan element heading langsung seperti contoh di atas, kita juga dapat menggunakan nama class: <code>.h1</code>,<code>.h2</code>,<code>.h3</code>,<code>.h4</code>,<code>.h5</code>,<code>.h6</code> untuk mendapatkan style heading yang sama. Seperti contoh dibawah ini, meskipun saya menggunakan element <code>&lt;p&gt;</code> karena saya menggunakan nama class <code>.h2</code> maka akan memilik style layaknya element &lt;h2&gt;.</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;p class=&quot;h2&quot;&gt;Ini adalah sebuah Paragraf yang seperti element h2&lt;/p&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<p class="h2">Ini adalah sebuah Paragraf yang seperti element h2</p>  </div>
</div>
</div>
<hr/>

<h3 class="title-sub bd-primary bd-left bd-left-only">Contoh Judul
<br><small>Bootstrap Custom Heading</small>
</h3>

<p>Bootstrap menyediakan style untuk sebuah judul yang menarik dengan memberikan tambahan sub-teks yang ukurannya lebih kecil dari teks judul utama dan warna yang memudar.</p>
<p>Caranya, tulis HTML <a href="/tutorial/html/html-small-tag.html">&lt;small&gt;</a> tag didalam element heading (h1-h6) dengan tambahan class <code>.text-muted</code>. Berikut contoh lebih jelasnya:</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;h3&gt;Ini Contoh Judul Asal &lt;small  class=&quot;text-muted&quot;&gt;namanya juga contoh&lt;/small&gt;&lt;/h3&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<h3>Ini Contoh Judul Asal <small  class="text-muted">namanya juga contoh</small></h3>
  </div>
</div>
</div>
<hr/>

<h2 class="title-sub bd-danger bd-left bd-left-only">Display Heading
<br><small>Judul dengan teks super besar</small>
</h2>

<p>Untuk menulis teks heading dengan ukuran besar, gunakan tambahan class <code>.display-1</code>,<code>.display-2</code>,<code>.display-3</code>,<code>.display-4</code>. class <code>display-1</code> menunjukkan ukuran teks paling besar.</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;h1 class=&quot;display-1&quot;&gt;Display 1&lt;/h1&gt;
&lt;h1 class=&quot;display-2&quot;&gt;Display 2&lt;/h1&gt;
&lt;h1 class=&quot;display-3&quot;&gt;Display 3&lt;/h1&gt;
&lt;h1 class=&quot;display-4&quot;&gt;Display 4&lt;/h1&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-body my-3 demo">
<p class="display-1">Display 1</p>
<p class="display-2">Display 2</p>
<p class="display-3">Display 3</p>
<p class="display-4">Display 4</p>
  </div>
</div>
</div>
<hr/>

<h2 class="title-sub bd-danger bd-left bd-left-only">Lead
</h2>

<p>Tambahkan class <code>.lead</code> pada tag <code>&lt;p&gt;</code> untuk menambahkan style khusus. Ini biasanya digunkan pada sebuah teks pengantar atau <em>mukadimah</em>.</p>
<div class="source-preview">
<div class="icard">
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;p class=&quot;lead&quot;&gt;Sultan Ageng Tirtayasa atau Pangeran Surya (Lahir di Kesultanan Banten, 1631 - meninggal di Batavia, Hindia Belanda, 1692 pada umur 60 - 61 tahun) adalah Sultan Banten ke-6.&lt;/p&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<p class="lead demo">Sultan Ageng Tirtayasa atau Pangeran Surya (Lahir di Kesultanan Banten, 1631 - meninggal di Batavia, Hindia Belanda, 1692 pada umur 60 - 61 tahun) adalah Sultan Banten ke-6.</p>
  </div>
</div>
</div>

<hr/>

<h2 class="title-sub bd-danger bd-left bd-left-only">Inline text elements
<br><small>Beberapa style teks inline</small>
</h2>
<p>Beberapa style <em>custom</em> yang dibuat oleh bootstrap untuk memberi sentuhan (css) khusus pada kategory <em>HTML inline elements.</em></p>

<p><em>Inline element</em> adalah kebalikan <em>block element</em>. Blok memiliki struktur tegak, berdiri sendiri. Adapun <em>inline</em> adalah kebalikannya.</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;p&gt;Kamus bisa menggunakan mark tag untuk &lt;mark&gt;highlight&lt;/mark&gt; text.&lt;/p&gt;
&lt;p&gt;&lt;del&gt;Baris Teks ini dimaksudkan untuk menunjukkan teks yang telah dihapus&lt;/del&gt;&lt;/p&gt;
&lt;p&gt;&lt;s&gt;Baris teks ini dimaksudkan untuk menunjukkan sesuatu yang sudah tidak akurat&lt;/s&gt;&lt;/p&gt;
&lt;p&gt;&lt;ins&gt;Teks ini menunjukan tambahan yang disipkan pada dokumen&lt;/ins&gt;&lt;/p&gt;
&lt;p&gt;&lt;u&gt;Teks ini akan memiliki garis bawah&lt;/u&gt;&lt;/p&gt;
&lt;p&gt;&lt;small&gt;Teks ini menunjukkan teks kecil (fine print)&lt;/small&gt;&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;Teks ini menunjukkan bold text (cetak tebal).&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;&lt;em&gt;Teks ini menunjukkan teks miring (italicized text).&lt;/em&gt;&lt;/p&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<p>Kamus bisa menggunakan mark tag untuk <mark>highlight</mark> text.</p>
<p><del>Baris Teks ini dimaksudkan untuk menunjukkan teks yang telah dihapus</del></p>
<p><s>Baris teks ini dimaksudkan untuk menunjukkan sesuatu yang sudah tidak akurat</s></p>
<p><ins>Teks ini menunjukan tambahan yang disipkan pada dokumen</ins></p>
<p><u>Teks ini akan memiliki garis bawah</u></p>
<p><small>Teks ini menunjukkan teks kecil (fine print)</small></p>
<p><strong>Teks ini menunjukkan bold text (cetak tebal).</strong></p>
<p><em>Teks ini menunjukkan teks miring (italicized text).</em></p>
  </div>
</div>
</div>

<hr/>
<p>Sebagai tambahan, Anda juga bisa menggunakan class <code>.mark</code> dan <code>.small</code> untuk mendapatkan style yang sama dengan element <code>&lt;mark&gt;</code> dan <code>&lt;small&gt;</code>. Berikut contohny:  </p>

<div class="source-preview">
<div class="icard">
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;p class=&quot;small&quot;&gt;Saya &amp;lt;p&amp;gt; tapi memili style yang sama dengan &amp;lt;small&amp;gt;&lt;/p&gt;
&lt;p class=&quot;mark&quot;&gt;Saya &amp;lt;p&amp;gt; tapi memili style yang sama dengan &amp;lt;mark&amp;gt;&lt;/p&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<p class="small">Saya &lt;p&gt; tapi memili style yang sama dengan &lt;small&gt;</p>
<p class="mark">Saya &lt;p&gt; tapi memili style yang sama dengan &lt;mark&gt;</p>
  </div>
</div>
</div>

<hr/>

<h2 class="title-sub bd-danger bd-left bd-left-only">Text Utilites
<br><small>Bootstrap Teks utiliti</small>
</h2>

<p>Bootstrap menambahkan style (CSS) untuk penataan teks gaya ketebalan tulisan, warna dan lainnya yang lebih detail dijelaskan pada <strong>teks utilities</strong> dan <strong>Color utilities</strong>.</p>

<h3 class="title-sub bd-primary bd-left bd-left-only">Abbreviation (Singkatan)
</h3>

<p>Bagaimana menulis singkatan dalam HTML? Jika Anda belum tahu, silahkan pelajari <a href="/tutorial/html/html-abbr-tag.html">HTML &lt;abbr&gt; Tag</a> untuk pembahasan lebih lengkap. Berikut langsung ke contoh berikut tambahan nama class <code>.initialism</code> bawaan bootstrap untuk membuat tulisan lebih kecil.</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;p&gt;Donor darah ke: &lt;abbr title=&quot;Palang Merah Indonesia&quot;&gt;PMI&lt;/abbr&gt;.
&lt;/p&gt;

&lt;p&gt;&lt;abbr title=&quot;HyperText Markup Language&quot; class=&quot;initialism&quot;&gt;HTML&lt;/abbr&gt;&lt;/p&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<p>Donor darah ke: <abbr title="Palang Merah Indonesia">PMI</abbr>.
</p>

<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
  </div>
</div>
</div>
<hr/>

<h3 class="title-sub bd-primary bd-left bd-left-only">Blockquotes
</h3>
<p>Untuk menulis blok teks kutipan (quotes) dari sumber lain, gunakan HTML <a href="/tutorial/html/html-blockquote-tag.html">&lt;blockquote&gt;</a> dengan nama class <code>.blockquote</code> seperti ini: <code>&lt;blockquote class="blockquote"&gt;</code>...<code>&lt;/blockquote&gt;</code>.</p>

<h4 class="title-sub bd-success bd-left bd-left-only">Contoh 1
<br/><small>Contoh Sederhana</small>
</h4>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-typography-blockquote.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;blockquote class=&quot;blockquote&quot;&gt;
  &lt;p&gt;Hiduplah dalam pekerjaan yang disemangati oleh impian, karena impianmu adalah gambaran tentang keindahan masa depanmu.&lt;/p&gt;
&lt;/blockquote&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<blockquote class="blockquote">
  <p>Hiduplah dalam pekerjaan yang disemangati oleh impian, karena impianmu adalah gambaran tentang keindahan masa depanmu.</p>
</blockquote>
  </div>
</div>
</div>
<hr/>

<h4 class="title-sub bd-success bd-left bd-left-only">Contoh 2
<br/><small>Kutipan dengan Sumbernya</small>
</h4>
<p>Untuk menulis kutipan lengkap dengan sumbernya, tuliskan tambahan HTML </p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-typography-blockquote-footer.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;blockquote class=&quot;blockquote&quot;&gt;
  &lt;p&gt;Bagi saya, Ibu adalah segalanya&lt;/p&gt;
  &lt;p&gt;Bila kita benar-benar berbakti kepada Ibu sepenuh hati dan ikhlas, maka surga akan kita gapai di dunia.&lt;/p&gt;
  &lt;footer class=&quot;blockquote-footer&quot;&gt;Chairul Tanjung dalam buku &lt;cite title=&quot;Buku Chairul Tanjung Si Anak Singkong&quot;&gt;Chairul Tanjung Si Anak Singkong&lt;/cite&gt;
  &lt;/footer&gt;
&lt;/blockquote&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<blockquote class="blockquote">
  <p>Bagi saya, Ibu adalah segalanya</p>
  <p>Bila kita benar-benar berbakti kepada Ibu sepenuh hati dan ikhlas, maka surga akan kita gapai di dunia.</p>
  <footer class="blockquote-footer">Chairul Tanjung dalam buku <cite title="Buku Chairul Tanjung Si Anak Singkong">Chairul Tanjung Si Anak Singkong</cite>
  </footer>
</blockquote>
  </div>
</div>
</div>

<h4 class="title-sub bd-success bd-left bd-left-only">Contoh 3
<br/><small>Kutipan di Tengah-tengah (Rata Tengah)</small>
</h4>

<div class="source-preview">
<div class="icard">
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;blockquote class=&quot;blockquote text-center&quot;&gt;
  &lt;p&gt;Hiduplah dalam pekerjaan yang disemangati oleh impian, karena impianmu adalah gambaran tentang keindahan masa depanmu.&lt;/p&gt;
&lt;/blockquote&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<blockquote class="blockquote text-center">
  <p>Hiduplah dalam pekerjaan yang disemangati oleh impian, karena impianmu adalah gambaran tentang keindahan masa depanmu.</p>
  <footer class="blockquote-footer"><cite>Mario Teguh</cite></footer>
</blockquote>
  </div>
</div>
</div>
<hr/>

<h4 class="title-sub bd-success bd-left bd-left-only">Contoh 4
<br/><small>Kutipan Rata Kanan</small>
</h4>

<div class="source-preview">
<div class="icard">
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;blockquote class=&quot;blockquote text-right&quot;&gt;
  &lt;p&gt;Hiduplah dalam pekerjaan yang disemangati oleh impian, karena impianmu adalah gambaran tentang keindahan masa depanmu.&lt;/p&gt;
&lt;/blockquote&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<blockquote class="blockquote text-right">
  <p>Hiduplah dalam pekerjaan yang disemangati oleh impian, karena impianmu adalah gambaran tentang keindahan masa depanmu.</p>
  <footer class="blockquote-footer"><cite>Mario Teguh</cite></footer>
</blockquote>
  </div>
</div>
</div>
<hr/>

<h2 class="title-sub bd-danger bd-left bd-left-only">Lists
<br><small>Menulis lis (daftar)</small>
</h2>

<p>Menulis daftar atau list. Baik daftar acak atau berurutan (penomoran otomatis)</p>

<h3 class="title-sub bd-primary bd-left bd-left-only">list-unstyled
<br><small>List tanpa style</small>
</h3>

<p>Menulis List (daftar) dengan HTML
<a href="/tutorial/html/html-ul-tag.html">&lt;ul&gt;</a> atau <a href="/tutorial/html/html-ol-tag.html">&lt;ol&gt;</a> tag dengan menambahkan class <code>list-unstyled</code>, maka Bootstrap akan menghilangkan style bawaan browser seperti CSS <code>margin</code> dan <code>list-style</code>. class <code>.list-unstyled</code> juga dapat digunakan secara turunan (<em>nested</em>) yaitu list di dalam list.</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-typography-list-unstyled.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;ul class=&quot;list-unstyled&quot;&gt;
  &lt;li&gt;Mobil&lt;/li&gt;
  &lt;li&gt;Motor
  &lt;ul&gt;
    &lt;li&gt;Yamaha&lt;/li&gt;
    &lt;li&gt;Honda
      &lt;ul&gt;
        &lt;li&gt;Beat&lt;/li&gt;
        &lt;li&gt;Vario&lt;/li&gt;
        &lt;li&gt;Supra X&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;Suzuki&lt;/li&gt;
  &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Sepeda&lt;/li&gt;
&lt;/ul&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<ul class="list-unstyled">
  <li>Mobil</li>
  <li>Motor
  <ul>
    <li>Yamaha</li>
    <li>Honda
      <ul>
        <li>Beat</li>
        <li>Vario</li>
        <li>Supra X</li>
      </ul>
    </li>
    <li>Suzuki</li>
  </ul>
  </li>
  <li>Sepeda</li>
</ul>
  </div>
</div>
</div>

<hr/>

<h3 class="title-sub bd-primary bd-left bd-left-only">list-inline
<br/><small>List sejajar (Menu)</small>
</h3>
<p>Selain kita mengetahui sebuah list terlihat vertikal, kita juga bisa membuatnya horizontal atau lebih tepatnya adalah <em>inline</em>. Contoh ini bisa diaplikasikan ketika membuat daftar link pada menu atas (header) ataupun daftar dengan tampilan berjajar.</p>
<p>Berikut contohnya:</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-typography-list-inline.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;ul class=&quot;list-inline&quot;&gt;
  &lt;li class=&quot;list-inline-item&quot;&gt;Utara&lt;/li&gt;
  &lt;li class=&quot;list-inline-item&quot;&gt;Barat&lt;/li&gt;
  &lt;li class=&quot;list-inline-item&quot;&gt;Selatan&lt;/li&gt;
  &lt;li class=&quot;list-inline-item&quot;&gt;Timur&lt;/li&gt;
&lt;/ul&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<ul class="list-inline">
  <li class="list-inline-item">Utara</li>
  <li class="list-inline-item">Barat</li>
  <li class="list-inline-item">Selatan</li>
  <li class="list-inline-item">Timur</li>
</ul>
  </div>
</div>
</div>
<hr/>

<h2 class="title-sub bd-danger bd-left bd-left-only">Description List
<br><small>Daftar dengan deskripsi</small>
</h2>

<p>Ialah daftar yang menjelaskan sebuah istilah dan deskripsi seperti pada sebuah kamus dan glosarium.</p>

<p>Sebagai tambahan, gunakan nama class <code>.text-truncate</code> untuk memotong teks yang panjang bila diperlukan.</p>

<div class="source-preview">
<div class="icard">
  <div class="icard-heading clearfix co-wh bg-pi2">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-html" aria-hidden="true"></i>
        <span>HTML</span>
      </div>
      <div class="icard-bar-right float-right">
        <a href="/example/bootstrap/ref/bootstrap-typography-description-list.html" target="_blank"><span>editor</span><i class="fa fa-external-link"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height">
<code data-language="html" class="html language-markup">&lt;dl class=&quot;row&quot;&gt;
  &lt;dt class=&quot;col-sm-3&quot;&gt;Zenit&lt;/dt&gt;
  &lt;dd  class=&quot;col-sm-9&quot;&gt;Titik khayal di langit yg tegak lurus di atas bumi thd cakrawala; titik puncak&lt;/dd&gt;
  &lt;dt class=&quot;col-sm-3 text-truncate&quot;&gt;mempertanggungjawabkan&lt;/dt&gt;
  &lt;dd  class=&quot;col-sm-9&quot;&gt;memberikan jawab dan menanggung segala akibatnya (kalau ada kesalahan); memberikan pertanggungjawaban: panitia harus ~ penggunaan dana yg dipungut dr masyarakat&lt;/dd&gt;
&lt;/dl&gt;</code>
</pre>
  </div>
</div>
<div class="icard">
  <div class="icard-heading clearfix bg-gr">
    <div class="icard-bar">
      <div class="icard-bar-left float-left">
        <i class="fa fa-hand-o-down co-danger" aria-hidden="true"></i>
        <span>PREVIEW</span>
      </div>
      <div class="icard-bar-right float-right condensed">
        <span class="fa fa-circle co-success"></span>
        <span class="fa fa-circle co-warning"></span>
        <span class="fa fa-circle co-danger"></span>
      </div>
    </div>
  </div>
  <div class="icard-body my-3 demo">
<dl class="row">
  <dt class="col-sm-3">Zenit</dt>
  <dd  class="col-sm-9">Titik khayal di langit yg tegak lurus di atas bumi thd cakrawala; titik puncak</dd>
  <dt class="col-sm-3 text-truncate">mempertanggungjawabkan</dt>
  <dd  class="col-sm-9">memberikan jawab dan menanggung segala akibatnya (kalau ada kesalahan); memberikan pertanggungjawaban: panitia harus ~ penggunaan dana yg dipungut dr masyarakat</dd>
</dl>
  </div>
</div>
</div>
<hr/>
<h4 class="ac-h4">Additional Information and Resources</h4>
<div class="sources bg-gr3 bordered p-space-v">
  <ul class="list-unstyled">
    <li><a rel="nofollow" href="http://getbootstrap.com/docs/4.1/content/typography/" target="_blank" class="text-muted">http://getbootstrap.com/docs/4.1/content/typography/</a></li>
  </ul>
</div>
