---
layout: post
title: "HTML input tag | belajar &lt;input&gt; element"
short_title: "HTML &lt;input&gt; Tag"
language: id

metadata:
  description: "Referensi belajar HTML &lt;input&gt; tag. Tutorial dan panduan mengenai element &lt;input /&gt;, penjelasan dengan contoh kode penggunaan sebagai referensi belajar HTML &lt;input&gt;"

author: dul

tag: [html, htmltag]
taxonomy:
  category: html
  tag: [html, htmltag]
images:
  figure: "posts/html-input-tag.png"
  thumb: "posts/thumbs/html-input-tag.png"
---
<p class="text-muted">
    Referensi Belajar <strong>HTML input tag</strong>. Tutorial dan panduan mengenai element <code>&lt;input /&gt;</code> yang digunakan untuk menginput data yang biasanya dipakai dalam sebuah form. Mencakup penjelasan yang disertai contoh kode penggunaan sebagai rujukan untuk materi belajar HTML <span lang="id">elemen</span> &lt;input&gt;.
</p>
<hr class="uk-article-divider">

<h2 class="title-sub bd-danger bd-left bd-left-only">Deskripsi <br>
    <small>Penjelasan HTML <span class="highlight">input</span></small>
</h2>
<p>
  <strong>HTML <code>&lt;input&gt;</code> element</strong> digunakan untuk menunjukkan sebuah inputan (masukkan) dalam bentuk kotak dan sejenisnya yang dapat diedit/diketik untuk diisi data tertentu (seperti memasukkan data diri nama, email, tanggal dan lain sebagainya).
</p>
<p><code>&lt;input&gt;</code> merupakan element interaktif yang biasanya ditulis bersamaan dengan form control. </p>
<p>Arti <i>semantic</i> dan fungsi dari <code>&lt;input&gt;</code> element dapat beraneka ragam tergantung dari attribute <code>type</code> yang digunakan.</p>
<p><code>&lt;input&gt;</code> adalah element yang tidak memiliki tag penutup (<i>closing tag</i>) dan merupakan element kosong yang tidak memiliki konten, hanya terdapat attribute saja. </p>

<!-- Attribute  -->
<section id="attribute">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Attributes <br>
    <small>Atribut HTML Tag <code>&lt;input&gt;</code></small>
  </h2>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">accept</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Apabila <code>&lt;input&gt;</code> memiliki attribute <code>type="file"</code>, maka attribute <code>accept</code> digunakan untuk menentukkan tipe file yang diterima oleh server. Contohnya, ketika digunakan untuk upload sebuah file, attribute ini digunakan untuk membatasi tipe file apa saja yang boleh diupload.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: </p>
        <ul>
          <li><i>file extension</i>: yaitu extensi file yang diawali dengan tanda titik (contoh: <code>.doc</code> , <code>.jpg</code>)</li>
          <li><code>audio/*</code></li>
          <li><code>image/*</code></li>
          <li><code>video/*</code></li>
</ul>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">alt</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Jika <code>&lt;input&gt;</code> memiliki attribute <code>type="image"</code>, maka <code>alt</code> digunakan sebagai teks alternatif pengganti dari image/gambar tersebut.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>teks</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">autocomplete</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan apakah input (control) secara otomatis melengkapi konten yang sebelumnya telah ditulis atau tidak. Hal ini dilakukan otomatis (jika <code>on</code>) oleh browser untuk menampilkan tulisan yang sebelumnya telah diinput untuk menghindari penulisan berulang kali.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>on</code> atau <code>off</code></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">autofocus</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bahwa sebuah form harus fokus pada<code>&lt;input&gt;</code> element yang memiliki atribut <code>autofocus</code> ketika halaman dimuat.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>autofocus</code></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">checked</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Jika <code>&lt;input&gt;</code> memiliki attribute <code>type="radio"</code> atau <code>type="checkbox"</code>, maka <code>checked</code> digunakan untuk menentukkan bahwa pilihan dari element tersebut terseleksi pertama kali ketika halaman dimuat.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>checked</code></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">disabled</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menonaktifkan (tidak dapat diseleksi) <code>&lt;input&gt;</code> element.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>disabled</code></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">form</code></span></div></div></div><div class="icard-body icode itheme">
        <p><code>&lt;input&gt;</code> element yang menyertakan attribute <code>form</code> dengan value nama <code>id</code> dari sebuah &lt;form&gt; element, menunjukkan element input dibuat untuknya (&lt;form&gt; dengan id tersebut).</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>form_id</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formaction</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Jika <code>&lt;input&gt;</code> memiliki attribute <code>type="submit"</code> atau <code>type="image"</code>, maka <code>formaction</code> digunakan untuk menentukkan alamat URL sebuah file yang akan memproses input control tersebut ketika form dikirim.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <i>URL</i></p>
      </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formenctype</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan <i>encoding type</i>. Konten <i>MIME type</i> yang digunakan untuk mengirimkan data form pada sebuah server. Ini, hanya berlaku untuk <code>input</code> dengan attribute <code>type="submit"</code> dan <code>type="image"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value:</p>
          <ul>
            <li><code>application/x-www-form-urlencoded</code>: nilai bawaan (<i>default value</i>) jika attribute tidak disebutkan.</li>
            <li><code>multipart/form-data</code>: nilai ini hanya digunakan jika terdapat <code>&lt;input&gt;</code> element dengan tipe attribute <code>file</code>.</li>
            <li>teks (text/plain)</li>
          </ul>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formmethod</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Jika <code>&lt;input&gt;</code> memiliki attribute <code>type="submit"</code> atau <code>type="image"</code>, maka attribute ini digunakan untuk menentukkan HTPP method yang digunakan oleh browser untuk mengirim data form.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value:</p>
          <ul>
            <li><code>post</code>: berkaitan dengan HTTP POST&nbsp;method. Metode ini digunakan untuk mengirim data form yang disisipkan pada body form dan dikirim ke server.</li>
            <li><code>get</code>: berkaitan dengan HTTP GET&nbsp;method. Metode ini digunakan untuk mengirim data form yang disisipkan pada URI <code>action</code> attribute dengan tanda tanya (<code>?</code>) sebagai pemisah, kemudian dikirim ke server. Karakter yang digunakan adalah ASCII.</li>
          </ul>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formnovalidate</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menunjukkan bahwa element form tidak perlu divalidasi ketika dikirim pada sebuah server.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>formnovalidate</i></p>
        </div>
    </div>
    </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">formtarget</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan tempat (target) dari respon yang diterima setelah mengirim form. Hanya untuk <code>input</code> element yang memiliki attribute <code>type="submit"</code> dan <code>type="image"</code> </p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>_blank</code> | <code>_self</code> | <code>_parent</code> | <code>_top</code> | nama frame</p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">height</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan tinggi dari element <code>&lt;input&gt;</code>. Hanya untuk <code>input</code> element yang memiliki attribute <code>type="image"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>pixels</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">list</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk menentukkan <code>id</code> dari sebuah <code>&lt;datalist&gt;</code> element yang digunakan untuk memberi daftar inputan otomatis pilihan yang diberikan. Pelajari juga <a href="https://www.apacara.com/tutorial/html/html-datalist-tag.html">HTML &lt;datalist&gt; element</a>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>datalist_id</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">max</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan nomor atau tanggal maksimum yang boleh dimasukkan pada sebuah element <code>&lt;input&gt;</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i> dan <i>tanggal</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">maxlength</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan maksimum jumlah karakter yang boleh disisipkan pada <code>&lt;input&gt;</code> element. Digunakan pada <code>input</code> dengan attribute <code>type="text"</code>, <code>type="email"</code>, <code>type="search"</code>, <code>type="password"</code>, <code>type="tel"</code> dan <code>type="url"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">min</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan nomor atau tanggal minimum yang boleh dimasukkan pada sebuah element <code>&lt;input&gt;</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i> dan <i>tanggal</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">multiple</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bahwa user boleh menyisipkan lebih dari satu value/teks. Attribute ini hanya berlaku untuk input dengan attribute <code>type="email"</code> dan <code>type="file"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i> dan <i>tanggal</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">name</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan nama untuk sebuah control yang akan dikirim bersamaan dengan data form.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>teks</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">pattern</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan pola bahasa regular expression yang akan diberlakukan pada nilai untuk sebuah <code>&lt;input&gt;</code> element. Regular expression merupakan bahasa yang sama dengan javascript.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>regular expression</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">placeholder</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan teks yang dijadikan isyarat untuk user apa yang seharusnya mereka tulis. Teks ini biasanya terlihat untuk sementara dan apabila user hendak menyisipkan karakter didalam element <code>&lt;input&gt;</code>, teks akan menghilang dengan sendirinya atau berpindah tempat.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>teks</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">readonly</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bahwa <code>&lt;input&gt;</code> element hanya dapat dibaca (read only), tidak dapat diedit.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>readonly</code></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">required</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan bahwa konten didalam <code>&lt;input&gt;</code> element diperlukan, harus diisi dan tidak boleh dikosongkan sebelum data dikirim ke server.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <code>required</code></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">size</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan ukuran lebar sebuah kontrol dalam hitungan pixels. Nilai awal adalah 20</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">src</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Untuk input <code>type="image"</code>, nilai dari <code>src</code> attribute digunakan untuk merujuk (URL) file sumber gambar.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>URL</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">step</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan interval waktu atau jumlah dalam hitungan tertentu (penambahan atau kelipatannya). Attribute ini bekerja dengan attribute lain yaitu <code>min</code> dan <code>max</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>nomor</i></p>
        </div>
    </div>
  </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">type</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Tipe atau jenis dari control yang akan ditampilkan pada jendela browser. Jika attribute ini tidak disebutkan, maka nilainya adalah <code>text</code> secara <i>default</i>.</p>
      <div class="icard-footer clearfix bg-gr2 icode itheme">
        <p>Value: <code>button</code> | <code>checkbox</code> | <code>color</code> | <code>date</code> | <code>datetime</code> | <code>datetime-local</code> | <code>email</code> | <code>file</code> | <code>hidden</code> | <code>image</code> | <code>month</code> | <code>number</code> | <code>password</code> | <code>radio</code> | <code>range</code> | <code>reset</code> | <code>search</code> | <code>submit</code> | <code>tel</code> | <code>text</code> | <code>url</code> | <code>week</code></p>
      </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">value</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Menentukkan nilai/teks untuk sebuah kontrol <code>input</code>. Attribute ini hanya bersifat opsional (boleh ditulis atau tidak) kecuali untuk input dengan attribute <code>type="radio"</code> dan <code>type="checkbox"</code>.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>teks</i></p>
        </div>
    </div>
     </div>
<div class="icard bg-gr3 bd-primary bd-top bd-top-only">
<div class="icard-heading clearfix co-wh bg-gr2">
   <div class="icard-bar"><div class="icard-bar-left pull-left"><span><code class="txt-lg">width</code></span></div></div></div><div class="icard-body icode itheme">
        <p>Digunakan untuk input dengan attribute <code>type="image"</code> sehingga gambar dapat diperlebar atau dipersempit seperti sebuah tombol.</p>
        <div class="icard-footer clearfix bg-gr2 icode itheme">
          <p>Value: <i>pixels</i></p>
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
        <p>&lt;input&gt; tag mencakup <em>global attributes</em>, yang artinya tag tersebut dapat disisipkan semua attributes yang termasuk dalam global attributes yang secara umum berlaku untuk semua HTML tags.</p>
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
        <p>&lt;input&gt; tag mencakup <em>event attributes</em>, yang artinya attribute tersebut dijalankan ketika ada interaksi dari user atau dalam suatu peristiwa (kejadian). Contoh: menjalankan script (JavaScript) ketika halaman web pada jendela browser hendak ditutup, dan lain sebagainya.</p>
        <div class="footer-callout warning">
          <p>Silahkan, lihat referensi mengenai <a href="https://www.apacara.com/tutorial/html/html-event-attribute.html">HTML Events Attribute</a></p>
        </div>
    </div>
</section>

<div class="row sl-featured">
<div id="sl-in-ar" class="col-xs-12">
<amp-ad
layout="responsive"
width="700"
height="700"
data-ad-layout="in-article"
data-ad-format="fluid"
type="adsense"
data-ad-client="ca-pub-3288866780282962"
data-ad-slot="7963371614">
</amp-ad>
</div>
</div>
<!-- Example -->
<section id="example">
  <h2 class="title-sub bd-danger bd-left bd-left-only">Example<br>
    <small>Contoh HTML <code>&lt;input&gt;</code> element</small>
  </h2>
  <div class="dul-block">
  	<h5>Contoh 1</h5>
<!-- example HTML code -->
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email-kamu@domain.com<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code>
</pre>
</div>
</div>
  	<hr class="uk-article-divider">
   	<h5>Contoh 2</h5>
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
<pre class="prettyprint linenums line-numbers highlight language-markup"><code data-language="html" class="html  language-markup"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>formpendaftaran.php<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nama: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user_name<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Email/Surel: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user_email<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Kirim<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code>
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
        <a href="https://www.apacara.com/example/html/tag/input.html" target="_blank"><span>editor</span><i class="fa fa-external-link" role="button"></i></a>
      </div>
    </div>
  </div>
  <div class="icard-body icode itheme bg-gr3">
<pre class="prettyprint highlight max-height language-markup"><code data-language="html" class="inline  language-markup"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo HTML input tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style language-css">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Example 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email-kamu@domain.com<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Example 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>formpendaftaran.php<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Nama: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user_name<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Email/Surel: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>user_email<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Kirim<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Form di atas hanya contoh demo dan tidak bisa submit data<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
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
            <td><code>&lt;input&gt;</code></td>
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
  <p>CSS untuk element <code>&lt;input&gt;</code> yang akan diberlakukan ketika awal inisial.</p>
  <div class="icode itheme css">
    <pre class="prettyprint highlight language-css"><code data-language="css" class=" inline language-css"><span class="token comment" >/* Tidak Ada. Element ini tidak ada default style yang berlaku */</span></code></pre>
</div>
</div>

</aside>