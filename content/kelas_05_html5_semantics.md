# 📚 KELAS 5: HTML5 & WEB SEMANTICS MASTERCLASS

---

## 📌 INFORMASI KELAS (STANDAR INDUSTRI W3C 2026)

- **Deskripsi Kelas**: Kursus komprehensif menguasai HTML5 dari fondasi paling dasar hingga standar arsitektur Web Semantik industri, struktur dokumen bebas div-itis, formulir interaktif dengan validasi native, aksesibilitas web (A11y/ARIA WCAG 2.1 AA), SEO Meta Tags, dan Open Graph Social Protocol.
- **Tujuan Belajar**: Mampu membangun kerangka antarmuka dokumen web yang terstruktur dengan presisi tinggi, ramah mesin pencari Google (SEO), cepat di-render oleh engine browser (Blink/Gecko), serta dapat diakses secara sempurna oleh pengguna penyandang disabilitas (Screen Reader).
- **Prasyarat**: Menyelesaikan Kelas 1 s/d 4 (Dasar Komputer, Cara Kerja Internet, Linux CLI, & Git GitHub).
- **Estimasi Waktu Belajar**: 16 Jam Belajar Total (10 Modul Pembelajaran Terstruktur).
- **Hasil Yang Dikuasai**: Mampu merancang dokumen HTML5 semantik tingkat lanjut yang siap diintegrasikan dengan framework modern (React, Next.js, Vue) dan memenuhi standar audit Lighthouse Google (Score 100).

---

# 📖 MODUL 1: PENGENALAN HTML, DOM TREE & ANATOMINYA

### 1. Penjelasan Teori yang Mudah Dipahami
**HTML (HyperText Markup Language)** adalah bahasa markah standar internasional yang dipublikasikan oleh W3C (*World Wide Web Consortium*) untuk memberikan struktur, kerangka, dan makna pada halaman web.

Tanpa HTML, browser web (seperti Google Chrome atau Mozilla Firefox) tidak akan tahu apakah sebuah teks berfungsi sebagai judul utama, paragraf artikel, gambar produk, atau tombol transaksi. HTML memberi tahu browser jenis dan fungsi dari setiap elemen melalui **Tag**.

### 2. Istilah Penting
- **HTML (HyperText Markup Language)**: Bahasa markah pengatur kerangka web.
- **Tag**: Kode sintaks khusus yang diapit oleh kurung siku siku (`<tagname>`).
- **Element**: Keseluruhan unit yang terdiri dari Tag Pembuka (*Opening Tag*), Konten Isi (*Content*), dan Tag Penutup (*Closing Tag*).
- **Attribute**: Nilai atribut properti tambahan di dalam tag pembuka untuk mengontrol perilaku atau identitas elemen (`id`, `class`, `src`, `href`).
- **DOM (Document Object Model)**: Struktur pohon hierarki memori yang dibentuk oleh browser dari kode HTML.
- **Void Element (Self-Closing Tag)**: Elemen HTML yang tidak memiliki konten isi dan tidak membutuhkan tag penutup (seperti `<img>`, `<input>`, `<br>`, `<hr>`).

### 3. Penjelasan Mendalam: Arsitektur Browser & DOM Tree
Saat Anda mengetikkan URL web dan browser menerima respons file HTML dari server, browser tidak langsung menampilkan gambar di layar. Browser melalui proses **HTML Parsing Engine**:

```
[ File HTML (Teks Polos) ] 
       │
       ▼ (HTML Parser)
[ Tokens & Nodes ] 
       │
       ▼ (DOM Tree Generation)
[ Document Object Model (DOM) ] ──── (CSSOM) ───► [ Render Tree ] ───► [ Paint Screen ]
```

1. **Tokenization**: Browser membaca karakter teks HTML dan memecahnya menjadi token-token (Tag Pembuka, Tag Penutup, Atribut).
2. **Node Creation**: Token diubah menjadi objek memori bernama **Node**.
3. **DOM Tree Construction**: Node-node tersebut disusun menjadi pohon hirarki **DOM Tree** berakar pada objek `document`.

#### Anatomi Presisi Elemen HTML:
```html
  Atribut Name     Nilai Atribut
     ┌───┴───┐       ┌───┴───┐
  <p class="deskripsi-produk" id="p-01">Sepatu Lari Ultralight 2026</p>
  └───┬───┘                             └────────────┬────────────┘ └───┬───┘
 Tag Pembuka                                 Konten Teks         Tag Penutup
└───────────────────────────────────┬───────────────────────────────────┘
                            Elemen HTML Utuh
```

### 4. Contoh Sederhana
```html
<!-- Elemen Berpasangan (Memiliki Tag Penutup) -->
<h1 id="judul-utama">Selamat Datang di KodeKu.id</h1>
<p>Ini adalah paragraf materi pelajaran pertama Anda.</p>

<!-- Void Element / Self-Closing Tag (Tanpa Tag Penutup) -->
<img src="banner.jpg" alt="Banner Promo KodeKu" />
<hr />
<br />
```

### 5. Contoh Penggunaan di Dunia Nyata
Perusahaan raksasa seperti **Google**, **Tokopedia**, dan **Netflix** menuliskan kode HTML dengan atribut `id` dan `class` yang konsisten agar tim JavaScript dapat mengambil data dari DOM Tree dengan cepat (`document.getElementById('tombol-beli')`) tanpa lag.

### 6. Best Practice (Praktik Terbaik Industri)
- **Gunakan Huruf Kecil (*Lowercase*)**: Selalu tuliskan nama tag dan atribut dengan huruf kecil (`<div class="box">` BENAR, `<DIV CLASS="BOX">` BURUK).
- **Selalu Tutup Tag Berpasangan**: Membiarkan tag `<p>` tanpa penutup `</p>` dapat memicu eror rendering pada parser browser lama.
- **Gunakan Tanda Kutip Ganda (`"..."`)** pada Nilai Atribut (`class="btn"` BENAR, `class=btn` BURUK).

### 7. Kesalahan yang Sering Dilakukan Pemula
- **Kebalik Menutup Tag Bersarang (*Mismatched Nesting*)**:
  - ❌ SALAH: `<b><i>Teks Tebal Miring</b></i>` (Tag `<i>` ditutup di luar `<b>`).
  - ✅ BENAR: `<b><i>Teks Tebal Miring</i></b>` (Tag ditutup dari lapisan paling dalam ke luar).

### 8. Tips Efisiensi Developer
Gunakan shortcut **Emmet Abbreviation** di editor VS Code:
- Ketik `p.deskripsi#p1` lalu tekan `Tab` -> Otomatis menghasilkan `<p class="deskripsi" id="p1"></p>`.

### 9. Ringkasan Modul 1
HTML memberi struktur web via Tag, Element, dan Attribute. Browser mengubah kode HTML menjadi struktur memori **DOM Tree**. Tulis tag dengan huruf kecil dan gunakan tanda kutip ganda pada atribut.

---

### 📝 QUIZ EVALUASI MODUL 1 (10 Soal + Pembahasan Detail)

**Soal 1:** Singkatan resmi dari bahasa markah pengatur kerangka web HTML adalah...  
A. HyperText Markup Language | B. High Transfer Machine Language | C. Hyper Technical Marking Link | D. Home Tool Markup List  
*Kunci Jawaban:* **A**  
*Pembahasan:* HTML adalah singkatan dari HyperText Markup Language, bahasa markah standar W3C untuk membuat dokumen web.

**Soal 2:** Struktur memori berbentuk pohon hirarki yang dibentuk oleh browser dari parsing kode HTML dinamakan...  
A. CSSOM | B. DOM Tree (Document Object Model) | C. JSON Tree | D. AST Engine  
*Kunci Jawaban:* **B**  
*Pembahasan:* Browser memuat file HTML dan mengubahnya menjadi DOM Tree di dalam RAM sebagai jembatan bagi JavaScript untuk memanipulasi elemen.

**Soal 3:** Komponen HTML yang terdiri dari Tag Pembuka, Konten Isi, dan Tag Penutup dinamakan...  
A. Attribute | B. Element | C. Selector | D. Parameter  
*Kunci Jawaban:* **B**  
*Pembahasan:* Elemen HTML adalah keseluruhan unit dari tag pembuka hingga tag penutup beserta konten teks di dalamnya.

**Soal 4:** Manakah contoh elemen HTML yang tergolong sebagai *Void Element* (Self-Closing Tag tanpa tag penutup)?  
A. `<p>` | B. `<div>` | C. `<img>` | D. `<span>`  
*Kunci Jawaban:* **C**  
*Pembahasan:* Tag `<img>` tidak membungkus teks konten sehingga tidak memerlukan tag penutup `</img>`.

**Soal 5:** Penulisan atribut HTML yang BENAR sesuai rekomendasi W3C adalah...  
A. `<a Href="link.html">` | B. `<a href="link.html">` | C. `<a href=link.html>` | D. `<A HREF='link.html'>`  
*Kunci Jawaban:* **B**  
*Pembahasan:* Standar W3C merekomendasikan penulisan nama atribut dengan huruf kecil (*lowercase*) dan nilainya dibungkus tanda kutip ganda.

**Soal 6:** Apakah akibat dari kesalahan *Mismatched Nesting* (salah urutan menutup tag bersarang)?  
A. Browser merusak hirarki DOM Tree dan dapat menyebabkan hasil tampilan visual tidak sesuai harapan | B. Laptop mati | C. Server crash | D. File terhapus  
*Kunci Jawaban:* **A**  
*Pembahasan:* Mismatched nesting membingungkan HTML parser browser dalam menentukan hubungan induk-anak (*parent-child*) pada DOM Tree.

**Soal 7:** Atribut `id` pada elemen HTML digunakan khusus untuk...  
A. Memberikan identitas unik tunggal pada elemen di dalam halaman | B. Mewarnai teks | C. Menghapus elemen | D. Membesarkan ukuran  
*Kunci Jawaban:* **A**  
*Pembahasan:* Nilai atribut `id` harus bersifat unik dan tidak boleh ada 2 elemen dengan `id` sama dalam 1 halaman.

**Soal 8:** Atribut `class` pada elemen HTML digunakan khusus untuk...  
A. Mengelompokkan satu atau beberapa elemen agar memiliki gaya styling CSS yang sama | B. Menutup browser | C. Membuat server | D. Mengompresi gambar  
*Kunci Jawaban:* **A**  
*Pembahasan:* Atribut `class` dapat digunakan secara berulang pada banyak elemen untuk menerapkan styling CSS seragam.

**Soal 9:** Shortcut Emmet di VS Code untuk menghasilkan `<div class="container"></div>` secara instan adalah dengan mengetik...  
A. `.container` lalu `Tab` | B. `div-container` | C. `make container` | D. `new div`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Di VS Code Emmet, simbol titik (`.`) merepresentasikan class, sehingga `.container` + `Tab` otomatis menggenerasi tag `div` ber-class `container`.

**Soal 10:** Karakter sintaks yang membedakan tag pembuka `<section>` dan tag penutup `</section>` adalah...  
A. Karakter Slash (`/`) pada tag penutup | B. Titik dua | C. Tanda seru | D. Titik koma  
*Kunci Jawaban:* **A**  
*Pembahasan:* Slash (`/`) sebelum nama tag menandakan penutupan dari elemen berpasangan.

---

### 🏋️ LATIHAN PRAKTIKUM MODUL 1
1. Buka editor VS Code, buat file `modul1.html`.
2. Buat elemen `<h1>` berisi nama lengkap Anda, `<p>` berisi cita-cita Anda, dan tag `<img>` foto diri Anda.
3. Buka file tersebut di browser Chrome dan amati struktur DOM Tree menggunakan `F12` (Chrome DevTools -> Elements).

---
---

# 📖 MODUL 2: STUKTUR DOKUMEN HTML5 STANDAR W3C (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`)

### 1. Penjelasan Teori yang Mudah Dipahami
Setiap halaman web di internet harus dibangun di atas **Struktur Fondasi Standar W3C**. 

Struktur ini membagi halaman web menjadi 2 bagian utama: **Bagian Otak/Informasi Rahasia (`<head>`)** yang menyimpan konfigurasi metadata, dan **Bagian Tubuh Visual (`<body>`)** yang menampung seluruh gambar dan teks yang dilihat pengguna.

### 2. Istilah Penting
- **`<!DOCTYPE html>`**: Deklarasi W3C yang memberitahu browser bahwa dokumen ini ditulis menggunakan standar **HTML5**.
- **`<html>`**: Elemen paling atas (*Root Element*) pembungkus seluruh kode HTML.
- **`<head>`**: Container tempat menyimpan metadata, judul tab, ikon favicon, dan link file CSS/JS.
- **`<body>`**: Container tempat menyimpan seluruh tampilan visual yang terlihat di layar.
- **UTF-8 (Unicode Transformation Format 8-bit)**: Standar pengkodean karakter dunia untuk menampilkan huruf, bahasa, dan emoji.
- **Viewport**: Area tampilan layar perangkat yang terlihat oleh pengguna.

### 3. Penjelasan Mendalam: Struktur Dokumen Standar HTML5
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <!-- Enkripsi Karakter & Responsif Viewport -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Judul Tab Browser & Favicon -->
  <title>KodeKu.id — Master Fullstack & AI Engineer</title>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />

  <!-- Stylesheet Eksternal -->
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>

  <h1>Selamat Datang di Platform Edukasi KodeKu</h1>
  <p>Konten visual ini tampil di layar monitor pengguna.</p>

</body>
</html>
```

#### Mengapa Tag Meta Viewport Sangat Vital?
Tanpa tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, browser smartphone seluler akan menganggap web Anda sebagai web desktop 1920px. Akibatnya, tampilan web di HP akan menjadi **sangat kecil, menciut, dan tidak bisa dibaca**!

### 4. Contoh Sederhana
Fungsi Atribut `lang="id"` pada Tag `<html>`:
- Memberitahu Google Translate dan Screen Reader bahwa bahasa utama dokumen adalah **Bahasa Indonesia**.

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda membuka situs Vercel atau Google, baris pertama kodenya dipastikan selalu diawali oleh `<!DOCTYPE html>` untuk mencegah browser masuk ke **Quirks Mode** (Mode rendering lama yang membuat tampilan CSS rusak).

### 6. Best Practice (Praktik Terbaik Industri)
- Selalu tempatkan `<meta charset="UTF-8" />` di **baris pertama di dalam `<head>`** sebelum tag `<title>` agar browser dapat memproses judul ber-emoji atau huruf non-Latin secara instan.

### 7. Kesalahan yang Sering Dilakukan Pemula
- Menaruh tag visual seperti `<h1>` atau `<img>` di dalam bagian `<head>`. Semua elemen visual WAJIB berada di dalam `<body>`!

### 8. Tips Efisiensi Developer
Di VS Code, ketik `!` lalu tekan `Enter` / `Tab` untuk meng-generate templat struktur dasar HTML5 ini dalam 0.5 detik.

### 9. Ringkasan Modul 2
Dokumen HTML5 diawali `<!DOCTYPE html>`, dibungkus `<html lang="id">`, memiliki `<head>` (metadata & CSS) dan `<body>` (konten visual).

---

### 📝 QUIZ EVALUASI MODUL 2 (10 Soal + Pembahasan Detail)

**Soal 1:** Deklarasi wajib di baris pertama dokumen yang memberitahu browser bahwa kode menggunakan standar HTML5 adalah...  
A. `<!DOCTYPE html>` | B. `<html version="5">` | C. `<header>` | D. `<meta html5>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<!DOCTYPE html>` adalah deklarasi doctype resmi HTML5 W3C.

**Soal 2:** Apakah yang terjadi jika dokumen HTML tidak memiliki deklarasi `<!DOCTYPE html>`?  
A. Browser akan masuk ke Quirks Mode yang membuat rendering tata letak CSS tidak konsisten | B. Laptop mati | C. Server meledak | D. Internet terputus  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tanpa Doctype, browser menggunakan aturan emulator browser lama (Quirks Mode) yang merusak layout CSS modern.

**Soal 3:** Bagian dokumen yang berfungsi menyimpan metadata, judul tab, dan file CSS tanpa terlihat langsung di layar adalah...  
A. `<body>` | B. `<head>` | C. `<footer>` | D. `<main>`  
*Kunci Jawaban:* **B**  
*Pembahasan:* Tag `<head>` menampung semua konfigurasi dan informasi non-visual dokumen.

**Soal 4:** Tag meta yang WAJIB dipasang agar tampilan web dapat beradaptasi secara responsif dengan lebar layar HP adalah...  
A. `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | B. `<meta name="screen">` | C. `<meta name="mobile">` | D. `<meta name="phone">`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Meta viewport mengatur skala lebar tampilan agar sesuai dengan piksel fisik smartphone.

**Soal 5:** Tag meta `<meta charset="UTF-8">` berfungsi untuk...  
A. Mengatur standar enkripsi karakter huruf, simbol universal, dan emoji | B. Menghapus teks | C. Mematikan CSS | D. Mengubah warna  
*Kunci Jawaban:* **A**  
*Pembahasan:* UTF-8 menjamin seluruh karakter bahasa dunia dan emoji ditampilkan tanpa eror tulisan aneh.

**Soal 6:** Manakah tag pembungkus seluruh konten visual yang dilihat pengguna di layar monitor?  
A. `<head>` | B. `<body>` | C. `<meta>` | D. `<title>`  
*Kunci Jawaban:* **B**  
*Pembahasan:* Seluruh teks, gambar, video, dan tombol yang tampil di layar wajib diletakkan di dalam `<body>`.

**Soal 7:** Atribut `lang="id"` pada `<html lang="id">` bermanfaat untuk...  
A. Mengidentifikasi bahasa dokumen bagi Google Translate & Screen Reader | B. Mengubah font | C. Menghapus gambar | D. Mengunci web  
*Kunci Jawaban:* **A**  
*Pembahasan:* Atribut `lang` mengidentifikasi bahasa dokumen secara resmi bagi mesin pencari dan perangkat pembaca suara.

**Soal 8:** Ikon logo kecil yang muncul di sebelah judul pada tab browser dinamakan...  
A. Favicon | B. Thumbnail | C. Avatar | D. Hero Image  
*Kunci Jawaban:* **A**  
*Pembahasan:* Favicon adalah ikon tab browser yang dikaitkan melalui `<link rel="icon" href="...">`.

**Soal 9:** Di manakah posisi terbaik memasang tag `<link rel="stylesheet" href="style.css">`?  
A. Di dalam tag `<head>` | B. Di dalam `<body>` | C. Di dalam `<footer>` | D. Di luar `<html>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* File stylesheet CSS diletakkan di `<head>` agar browser mengunduh aturan style sebelum merender elemen visual `<body>`.

**Soal 10:** Shortcut Emmet VS Code untuk menghasilkan templat HTML5 lengkap adalah...  
A. Ketik `!` lalu tekan `Enter` | B. `Ctrl + S` | C. `Alt + F4` | D. `F5`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Ketik tanda seru `!` lalu `Enter` adalah shortcut standar Emmet untuk kerangka HTML5.

---

### 🏋️ LATIHAN PRAKTIKUM MODUL 2
1. Buat file `index.html` dengan kerangka HTML5 lengkap.
2. Atur judul tab browser menjadi `"Portfolio Saya — Fullstack Developer"`.
3. Pasang tag `<meta charset="UTF-8">` dan `<meta name="viewport">`.

---
---

# 📖 MODUL 3: HEADING HIERARCHY, PARAGRAPH & TEXT FORMATTING SEMANTICS

### 1. Penjelasan Teori yang Mudah Dipahami
Di dalam buku atau artikel surat kabar, informasi disusun berdasarkan hirarki judul bab (**Heading**) dan paragraf teks (**Paragraph**).

HTML menyediakan tag `<h1>` hingga `<h6>` untuk menunjukkan tingkat kepentingan judul, serta tag penekanan makna seperti `<strong>` (teks penting/tebal) dan `<em>` (teks penekanan nada bicara/miring).

### 2. Istilah Penting
- **`<h1>` - `<h6>`**: Tag hirarki judul (1 paling utama/terbesar, 6 paling rendah).
- **`<p>`**: Tag pembungkus paragraf teks.
- **`<strong>`**: Penekanan makna penting secara semantik (secara default tampil **tebal**).
- **`<em>`**: Penekanan penekanan nada bicara (secara default tampil *miring*).
- **`<code>`**: Tag penampil snippet potongan kode komputer dengan font Monospace.
- **`<blockquote>`**: Tag pembungkus kutipan teks panjang dari sumber eksternal.

### 3. Penjelasan Mendalam: Aturan Hirarki Heading & SEO
Algoritma Google Search Engine menggunakan hirarki tag Heading untuk memahami struktur artikel web:

```
[ <h1> ]  ───► HANYA BOLEH 1 PER HALAMAN! (Judul Utama Artikel)
   │
   ├── [ <h2> ]  ───► Judul Sub-Bab Utama
   │      │
   │      └── [ <h3> ]  ───► Sub-Bagian di dalam H2
   │
   └── [ <h2> ]  ───► Judul Sub-Bab Kedua
```

#### Perbedaan `<strong>` vs `<b>` dan `<em>` vs `<i>`:
- `<b>` dan `<i>` (HTML4 Lama): HANYA mengatur dekorasi visual (tebal/miring) tanpa makna semantik bagi mesin.
- `<strong>` dan `<em>` (HTML5 Modern): Memiliki **Makna Semantik Aksesibilitas**. Screen reader akan membaca teks `<strong>` dengan nada suara lebih tegas dan berat!

### 4. Contoh Sederhana
```html
<h1>Panduan Masterclass HTML5 & Web Semantics</h1>

<p>
  Belajar koding membutuhkan <strong>konsistensi harian</strong> dan pemahaman <em>arsitektur web</em>.
</p>

<h2>1. Instalasi Editor</h2>
<p>
  Jalankan perintah <code>npm install -g live-server</code> di terminal Anda.
</p>

<blockquote>
  "Software is eating the world." — Marc Andreessen
</blockquote>
```

### 5. Contoh Penggunaan di Dunia Nyata
Situs berita internasional seperti **BBC** dan **TechCrunch** mewajibkan penulisnya mengikuti hirarki Heading yang ketat agar artikel berita mereka menempati peringkat 1 di Google Search.

### 6. Best Practice (Praktik Terbaik Industri)
- **HANYA ADA TEPAT 1 TAG `<h1>` PER HALAMAN!**
- **Jangan Mengompat Hirarki Heading**: Jangan loncat dari `<h1>` langsung ke `<h3>` tanpa melewati `<h2>`.

### 7. Kesalahan yang Sering Dilakukan Pemula
- Menggunakan `<h1>` hanya karena ingin membuat teks biasa berukuran besar. Untuk mengubah ukuran teks biasa, gunakan CSS (`font-size`), BUKAN tag Heading!

### 8. Tips Efisiensi Developer
Gunakan tag `<mark>` untuk memberikan efek stabilo kuning pada kata kunci penting di dalam paragraf.

### 9. Ringkasan Modul 3
`<h1>` untuk 1 judul utama (SEO). `<p>` untuk paragraf. Gunakan `<strong>` dan `<em>` semantik (bukan `<b>`/`<i>`). `<code>` untuk kode.

---

### 📝 QUIZ EVALUASI MODUL 3 (10 Soal + Pembahasan Detail)

**Soal 1:** Tag Heading yang memiliki hirarki tertinggi dan paling utama untuk optimasi SEO adalah...  
A. `<h1>` | B. `<h3>` | C. `<h6>` | D. `<header>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<h1>` adalah heading utama nomor 1 yang dibaca oleh mesin pencari Google.

**Soal 2:** Berapakah jumlah maksimal tag `<h1>` yang direkomendasikan W3C & SEO dalam 1 halaman web?  
A. Tepat 1 saja per halaman | B. Bebas 100 kali | C. Minimal 5 | D. Tidak boleh ada  
*Kunci Jawaban:* **A**  
*Pembahasan:* 1 Halaman web idealnya hanya memiliki 1 `<h1>` sebagai judul utama topik.

**Soal 3:** Perbedaan utama antara tag `<strong>` dan tag `<b>` di HTML5 adalah...  
A. `<strong>` memiliki makna semantik penting bagi SEO & Screen Reader, sedangkan `<b>` hanya gaya visual tanpa makna | B. `<b>` lebih besar | C. `<strong>` berwarna merah | D. Sama saja  
*Kunci Jawaban:* **A**  
*Pembahasan:* HTML5 memprioritaskan tag semantik `<strong>` untuk menandaskan konten penting.

**Soal 4:** Perbedaan utama antara tag `<em>` dan tag `<i>` di HTML5 adalah...  
A. `<em>` memiliki makna semantik penekanan nada bicara, sedangkan `<i>` hanya dekorasi visual miring | B. `<i>` lebih tebal | C. `<em>` menghapus teks | D. Sama saja  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<em>` (Emphasis) memberikan bobot penekanan semantik pada kalimat.

**Soal 5:** Tag yang digunakan untuk membungkus paragraf teks biasa di HTML adalah...  
A. `<p>` | B. `<text>` | C. `<para>` | D. `<span>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag `<p>` (Paragraph) adalah elemen standar pembungkus teks.

**Soal 6:** Tag HTML yang digunakan untuk menampilkan snippet potongan perintah koding dengan font Monospace adalah...  
A. `<code>` | B. `<script>` | C. `<cmd>` | D. `<terminal>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag `<code>` menyajikan teks koding dengan font monospace.

**Soal 7:** Tag yang digunakan untuk memberi efek warna stabilo (*highlight*) kuning pada kata penting adalah...  
A. `<mark>` | B. `<yellow>` | C. `<color>` | D. `<style>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag `<mark>` memberikan efek visual stabilo highlight.

**Soal 8:** Tag yang digunakan khusus untuk membungkus kutipan teks panjang dari sumber buku/situs lain adalah...  
A. `<blockquote>` | B. `<quote>` | C. `<cite>` | D. `<copy>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<blockquote>` menyajikan blok kutipan eksternal.

**Soal 9:** Mengapa memperbesar teks biasa menggunakan tag `<h1>` dianggap sebagai praktik buruk?  
A. Merusak struktur hirarki semantik SEO; gunakan CSS `font-size` untuk mengatur ukuran visual | B. Membuat browser crash | C. Dilarang Windows | D. Menghapus gambar  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag HTML mengatur fungsi semantik, sedangkan ukuran visual diatur oleh CSS.

**Soal 10:** Tag `<sub>` dan `<sup>` masing-masing digunakan untuk...  
A. Subscript (teks di bawah seperti $\text{H}_2\text{O}$) dan Superscript (teks di atas seperti $x^2$) | B. Gambar | C. Link | D. Header  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<sub>` untuk teks di bawah (*subscript*) dan `<sup>` untuk teks di atas (*superscript*).

---

### 🏋️ LATIHAN PRAKTIKUM MODUL 3
1. Buat struktur artikel dengan 1 `<h1>`, 2 `<h2>`, dan 3 paragraf `<p>`.
2. Gunakan kata `<strong>`, `<em>`, dan `<code>` di dalam paragraf.

---
---

# 📖 MODUL 4: HYPERLINK (`<a>`) & MEDIA ELEMENTS (`<img>`, `<picture>`, `<video>`, `<audio>`)

### 1. Penjelasan Teori yang Mudah Dipahami
Website terhubung satu sama lain melalui **Hyperlink (`<a>`)**. Tanpa link, tidak ada jaringan "World Wide Web".

Untuk menyajikan media visual dan audio, HTML5 menyediakan tag `<img>`, elemen adaptif `<picture>`, serta media player bawaan `<video>` dan `<audio>`.

### 2. Istilah Penting
- **`<a>` (Anchor Tag)**: Elemen pembuat link tautan halaman.
- **`href` (Hypertext Reference)**: Atribut alamat URL tujuan link.
- **`target="_blank"`**: Atribut untuk membuka link di tab browser baru.
- **`alt` (Alternative Text)**: Deskripsi teks gambar untuk SEO dan pengguna penyandang tunanetra (Screen Reader).
- **Lazy Loading (`loading="lazy"`)**: Teknik memuat gambar hanya saat gambar akan terlihat di layar scroll.

### 3. Penjelasan Mendalam: Keamanan Link & Gambar Adaptif
```html
<!-- Link Buka Tab Baru Aman (Wajib rel="noopener noreferrer") -->
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  Kunjungi Profil GitHub KodeKu
</a>

<!-- Gambar Adaptif Modern (<picture> dengan Fallback) -->
<picture>
  <source srcset="images/banner.webp" type="image/webp" />
  <img src="images/banner.jpg" alt="Banner Utama KodeKu" width="1200" height="600" loading="lazy" />
</picture>

<!-- Media Video HTML5 Native -->
<video controls width="640" poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4" />
  Browser Anda tidak mendukung pemutar video HTML5.
</video>
```

#### Mengapa Wajib Menambahkan `rel="noopener noreferrer"` saat `target="_blank"`?
Tanpa atribut ini, halaman baru yang dibuka di tab lain dapat mengakses objek JavaScript `window.opener` dari halaman Anda dan melakukan peretasan **Tabnabbing / Phishing**!

### 4. Contoh Sederhana
Link Anchor Internal (Melompat ke bagian bawah halaman):
```html
<a href="#bagian-kontak">Lompat ke Form Kontak</a>
...
<section id="bagian-kontak">
  <h2>Formulir Kontak</h2>
</section>
```

### 5. Contoh Penggunaan di Dunia Nyata
Situs e-commerce raksasa seperti **Amazon** dan **Shopee** menerapkan `loading="lazy"` pada ribuan foto produk katalog agar halaman awal dapat terbuka dalam waktu di bawah 1 detik di koneksi 4G/HP.

### 6. Best Practice (Praktik Terbaik Industri)
- **WAJIB SELALU MENGISI ATRIBUT `alt="..."`** pada setiap gambar! Tulis deskripsi gambar yang jelas (contoh: `alt="Foto Laptop MacBook Pro diatas meja"`).
- Selalu sertakan atribut `width` dan `height` pada `<img>` untuk mencegah keretakan tata letak (*Cumulative Layout Shift - CLS*).

### 7. Kesalahan yang Sering Dilakukan Pemula
- Membiarkan `alt=""` kosong atau hanya menuliskan `alt="image"`.

### 8. Tips Efisiensi Developer
Gunakan skema `mailto:` untuk link email (`<a href="mailto:info@kodeku.id">`) dan skema `https://wa.me/` untuk link WhatsApp instan.

### 9. Ringkasan Modul 4
`<a>` buat link (`href` & `target="_blank"` + `rel="noopener"`). `<img>` wajib `alt` & `loading="lazy"`. Gunakan `<picture>` untuk format WebP modern.

---

### 📝 QUIZ EVALUASI MODUL 4 (10 Soal + Pembahasan Detail)

**Soal 1:** Tag HTML yang digunakan untuk membuat hyperlink tautan adalah...  
A. `<link>` | B. `<a>` (Anchor) | C. `<url>` | D. `<href>`  
*Kunci Jawaban:* **B**  
*Pembahasan:* Tag `<a>` adalah elemen pembuat hyperlink.

**Soal 2:** Atribut yang menentukan alamat URL tujuan dari sebuah link adalah...  
A. `src` | B. `href` | C. `to` | D. `target`  
*Kunci Jawaban:* **B**  
*Pembahasan:* `href` (Hypertext Reference) menampung URL tujuan.

**Soal 3:** Atribut `target="_blank"` berfungsi untuk...  
A. Membuka link di tab browser baru | B. Menghapus link | C. Membuka halaman kosong | D. Mengirim email  
*Kunci Jawaban:* **A**  
*Pembahasan:* `target="_blank"` mengarahkan navigasi ke tab/jendela baru.

**Soal 4:** Atribut keamanan yang WAJIB dipasangkan bersama `target="_blank"` untuk mencegah peretasan tabnabbing adalah...  
A. `rel="noopener noreferrer"` | B. `secure="true"` | C. `auth="1"` | D. `safe="yes"`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `rel="noopener noreferrer"` memutus akses JavaScript `window.opener` dari tab baru.

**Soal 5:** Atribut WAJIB pada tag `<img>` yang menyediakan teks alternatif jika gambar gagal dimuat atau dibaca oleh screen reader adalah...  
A. `title` | B. `alt` | C. `src` | D. `name`  
*Kunci Jawaban:* **B**  
*Pembahasan:* `alt` (Alternative Text) wajib untuk aksesibilitas A11y dan SEO.

**Soal 6:** Atribut `loading="lazy"` pada gambar berfungsi untuk...  
A. Memuat gambar hanya saat di-scroll mendekati viewport layar (Lazy Loading) demi menghemat data | B. Membesarkan gambar | C. Mematikan gambar | D. Mengubah warna  
*Kunci Jawaban:* **A**  
*Pembahasan:* Performance lazy loading menghemat kuota pengguna.

**Soal 7:** Cara membuat link email yang otomatis membuka aplikasi email pengguna saat diklik adalah...  
A. `<a href="mailto:info@kodeku.id">` | B. `<a href="email:info@kodeku.id">` | C. `<a src="mailto">` | D. `<a send="email">`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Skema `mailto:` memicu aplikasi email client.

**Soal 8:** Elemen HTML5 modern yang digunakan untuk menyajikan gambar format adaptif (WebP dengan fallback JPG) adalah...  
A. `<picture>` dan `<source>` | B. `<media>` | C. `<canvas>` | D. `<svg>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Element `<picture>` menyajikan format gambar modern WebP/AVIF.

**Soal 9:** Mengapa mencantumkan atribut `width` dan `height` pada `<img>` sangat disarankan oleh Google Lighthouse?  
A. Mencegah pergeseran tata letak halaman yang mendadak saat gambar selesai diunduh (Cumulative Layout Shift - CLS) | B. Membesarkan file | C. Menghapus gambar | D. Mematikan CSS  
*Kunci Jawaban:* **A**  
*Pembahasan:* Mengalokasikan aspek rasio ruang kosong mencegah isu CLS di Google.

**Soal 10:** Tag HTML5 native yang digunakan untuk memutar video tanpa plugin Flash adalah...  
A. `<video>` | B. `<movie>` | C. `<media>` | D. `<player>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag `<video>` menyajikan pemutar video HTML5 native.

---

### 🏋️ LATIHAN PRAKTIKUM MODUL 4
1. Buat link tautan ke situs Google di tab baru yang aman dengan `rel="noopener noreferrer"`.
2. Tampilkan gambar produk dengan `alt` deskriptif dan `loading="lazy"`.

---
---

# 📖 MODUL 5: LISTS (`<ul>`, `<ol>`, `<dl>`) & TABULAR DATA (`<table>`)

### 1. Penjelasan Teori yang Mudah Dipahami
Informasi berbentuk daftar disajikan menggunakan **List**, sedangkan data terstruktur berbaris dan berkolom disajikan menggunakan **Tabel**.

### 2. Istilah Penting
- **`<ul>` (Unordered List)**: Daftar poin tanpa urutan angka.
- **`<ol>` (Ordered List)**: Daftar terurut nomor angka (`1, 2, 3...`).
- **`<li>` (List Item)**: Elemen item di dalam daftar.
- **`<table>`**: Container utama data tabel.
- **`<thead>` / `<tbody>` / `<tfoot>`**: Bagian kepala, badan, dan kaki tabel.
- **`<tr>` (Table Row)**: Baris tabel.
- **`<th>` / `<td>`**: Sel header (tebal & tengah) dan sel data biasa.

### 3. Penjelasan Mendalam: Struktur Tabel Semantik Standar
```html
<table border="1">
  <caption>Laporan Transaksi Pendaftaran KodeKu 2026</caption>
  <thead>
    <tr>
      <th>No</th>
      <th>Nama Siswa</th>
      <th>Kelas Pilihan</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Rian Pratama</td>
      <td>HTML5 & Web Semantics</td>
      <td>LULUS</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total Siswa Lulus</td>
      <td>1 Orang</td>
    </tr>
  </tfoot>
</table>
```

### 4. Contoh Sederhana
Daftar Definisi (`<dl>`, `<dt>`, `<dd>`):
```html
<dl>
  <dt>HTML5</dt>
  <dd>Bahasa markah pengatur struktur web.</dd>
  <dt>CSS3</dt>
  <dd>Bahasa pengatur tampilan visual web.</dd>
</dl>
```

### 5. Contoh Penggunaan di Dunia Nyata
Navigasi menu utama website (`<nav>`) di dunia nyata secara semantik dibuat menggunakan kombinasi `<ul>` dan `<li>` yang di-styling menggunakan CSS Flexbox.

### 6. Best Practice (Praktik Terbaik Industri)
- Selalu gunakan `<thead>` dan `<tbody>` di dalam tabel untuk keterbacaan struktur data bagi Screen Reader.

### 7. Kesalahan yang Sering Dilakukan Pemula
- **Mendesain Layout Halaman Web Menggunakan `<table>`**. Tabel HANYA untuk data tabular (seperti tabel harga/transaksi), BUKAN untuk tata letak halaman!

### 8. Tips Efisiensi Developer
Gunakan `colspan="2"` untuk menggabungkan 2 kolom secara horisontal, atau `rowspan="2"` untuk menggabungkan 2 baris secara vertikal.

### 9. Ringkasan Modul 5
`<ul>` daftar poin, `<ol>` daftar angka, `<li>` item. `<table>` gunakan `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`. `colspan`/`rowspan` gabungkan sel.

---

### 📝 QUIZ EVALUASI MODUL 5 (10 Soal + Pembahasan Detail)

**Soal 1:** Tag untuk membuat daftar berpoin tanpa urutan angka (Unordered List) adalah...  
A. `<ol>` | B. `<ul>` | C. `<li>` | D. `<list>`  
*Kunci Jawaban:* **B**  
*Pembahasan:* `<ul>` (Unordered List) menyajikan daftar poin bullet.

**Soal 2:** Tag untuk membuat daftar terurut nomor angka (Ordered List) adalah...  
A. `<ul>` | B. `<ol>` | C. `<li>` | D. `<num>`  
*Kunci Jawaban:* **B**  
*Pembahasan:* `<ol>` (Ordered List) menyajikan daftar terurut angka.

**Soal 3:** Tag WAJIB di dalam `<ul>` atau `<ol>` untuk membungkus setiap item daftar adalah...  
A. `<li>` | B. `<item>` | C. `<point>` | D. `<dt>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<li>` (List Item) adalah pembungkus item daftar.

**Soal 4:** Container utama untuk menyajikan data berbentuk baris dan kolom adalah...  
A. `<div>` | B. `<table>` | C. `<grid>` | D. `<sheet>`  
*Kunci Jawaban:* **B**  
*Pembahasan:* `<table>` menyajikan data berbentuk tabel.

**Soal 5:** Tag yang digunakan untuk menentukan satu Baris di dalam tabel adalah...  
A. `<td>` | B. `<tr>` | C. `<th>` | D. `<thead>`  
*Kunci Jawaban:* **B**  
*Pembahasan:* `<tr>` (Table Row) menentukan baris tabel.

**Soal 6:** Tag untuk membuat sel judul kolom (Header Cell) pada bagian atas tabel adalah...  
A. `<td>` | B. `<th>` | C. `<tr>` | D. `<caption>`  
*Kunci Jawaban:* **B**  
*Pembahasan:* `<th>` (Table Header) menyajikan sel judul yang tebal dan di tengah.

**Soal 7:** Tag untuk membuat sel data biasa di dalam baris tabel adalah...  
A. `<td>` | B. `<th>` | C. `<tr>` | D. `<sub>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<td>` (Table Data) menyajikan sel data biasa.

**Soal 8:** Atribut tabel untuk menggabungkan dua atau lebih Kolom secara horisontal adalah...  
A. `rowspan` | B. `colspan` | C. `merge` | D. `span`  
*Kunci Jawaban:* **B**  
*Pembahasan:* `colspan` menggabungkan kolom horisontal.

**Soal 9:** Atribut tabel untuk menggabungkan dua atau lebih Baris secara vertikal adalah...  
A. `colspan` | B. `rowspan` | C. `merge` | D. `group`  
*Kunci Jawaban:* **B**  
*Pembahasan:* `rowspan` menggabungkan baris vertikal.

**Soal 10:** Mengapa menggunakan `<table>` untuk membuat tata letak halaman web dianggap salah besar?  
A. Merusak aksesibilitas & SEO, serta menyulitkan pembuatan desain responsive di HP (Gunakan Flexbox/Grid CSS) | B. Menghapus teks | C. Dilarang Chrome | D. Tabel tidak punya warna  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tabel dirancang untuk data tabular, bukan layout antarmuka.

---

### 🏋️ LATIHAN PRAKTIKUM MODUL 5
1. Buat `<ol>` 3 langkah cara menginstal Git.
2. Buat tabel daftar 3 transaksi siswa dengan `<thead>` dan `<tbody>`.

---
---

# 📖 MODUL 6: FORMS, INPUT TYPES & NATIVE VALIDATION

### 1. Penjelasan Teori yang Mudah Dipahami
**Form** adalah sarana utama bagi pengguna untuk mengirimkan data ke server (seperti Form Login, Pendaftaran, atau Checkout Pembayaran).

### 2. Istilah Penting
- **`<form>`**: Container pengumpul input data.
- **`<label>`**: Label Teks keterangan untuk input field.
- **`<input>`**: Elemen bidang isian pengguna.
- **`placeholder`**: Teks petunjuk sementara di dalam kotak input.
- **`required`**: Atribut yang mewajibkan pengguna mengisi bidang input.

### 3. Penjelasan Mendalam: Form Aksesibel & Validasi Native
```html
<form action="/api/login" method="POST">
  <div>
    <label for="inputEmail">Email Aktif:</label>
    <input type="email" id="inputEmail" name="email" placeholder="nama@email.com" required />
  </div>
  <div>
    <label for="inputPassword">Kata Sandi:</label>
    <input type="password" id="inputPassword" name="password" minlength="8" required />
  </div>
  <button type="submit">Masuk Sekarang</button>
</form>
```

#### Tipe-Tipe Input HTML5 Penting:
- `type="text"`: Input teks pendek.
- `type="email"`: Input email dengan validasi format otomatis.
- `type="password"`: Input kata sandi (Karakter tersamar bulatan).
- `type="number"`: Input khusus angka dengan min/max.
- `type="date"`: Date picker kalender bawaan browser.
- `type="checkbox"`: Pilihan centang independen (bisa pilih banyak).
- `type="radio"`: Pilihan satu opsi tunggal (Opsi bulat).

### 4. Contoh Sederhana
```html
<!-- Dropdown Opsi -->
<select name="pilihanKelas">
  <option value="js">JavaScript ES6+</option>
  <option value="py">Python</option>
</select>

<!-- Teks Area Panjang -->
<textarea name="pesan" rows="4" placeholder="Tuliskan alamat lengkap..."></textarea>
```

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda melakukan Checkout Pembayaran di KodeKu.id, Anda mengisi Form dengan `type="email"`, `type="tel"`, dan `<select>` metode pembayaran Midtrans.

### 6. Best Practice (Praktik Terbaik Industri)
- **SELALU HUBUNGKAN `<label for="idInput">` dengan `<input id="idInput">`** agar saat pengguna mengetuk label teks, kursor otomatis masuk ke kotak input!

### 7. Kesalahan yang Sering Dilakukan Pemula
- Lupa memberi atribut `name="..."` pada elemen input. Tanpa atribut `name`, data input tidak akan ikut terkirim ke backend server saat tombol Submit diklik!

### 8. Tips Efisiensi Developer
Gunakan `type="search"` untuk bidang pencarian agar muncul tombol silang `x` otomatis di dalam kotak input.

### 9. Ringkasan Modul 6
`<form action="..." method="...">` membungkus input. Selalu gunakan `<label for="...">` & atribut `name="..."`.

---

### 📝 QUIZ EVALUASI MODUL 6 (10 Soal + Pembahasan Detail)

**Soal 1:** Tag container utama yang digunakan untuk mengumpulkan data isian pengguna adalah...  
A. `<form>` | B. `<input>` | C. `<label>` | D. `<data>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag `<form>` membungkus seluruh bidang input.

**Soal 2:** Atribut pada tag `<input>` yang menentukan jenis bidang isian adalah...  
A. `type` | B. `kind` | C. `format` | D. `class`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Atribut `type` menentukan tipe input (text, email, password, dll).

**Soal 3:** Mengapa menghubungkan `<label for="userEmail">` dengan `<input id="userEmail">` sangat penting?  
A. Meningkatkan aksesibilitas; saat label diklik, kursor otomatis aktif di bidang input | B. Membesarkan tombol | C. Menghapus data | D. Mencegah virus  
*Kunci Jawaban:* **A**  
*Pembahasan:* Menghubungkan label & input meningkatkan aksesibilitas A11y & UX.

**Soal 4:** Atribut yang WAJIB ada pada tag input agar datanya berhasil dikirimkan ke backend server adalah...  
A. `name` | B. `title` | C. `color` | D. `border`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Atribut `name` menjadi nama kunci variabel yang dibaca server backend.

**Soal 5:** Atribut yang mewajibkan bidang input diisi pengguna adalah...  
A. `required` | B. `mandatory` | C. `must` | D. `lock`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Atribut `required` memicu validasi native browser.

**Soal 6:** Tipe input yang menyamarkan karakter teks menjadi bulatan hitam rahasia adalah...  
A. `type="password"` | B. `type="hidden"` | C. `type="secret"` | D. `type="mask"`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `type="password"` menyamarkan karakter untuk keamanan kata sandi.

**Soal 7:** Tipe input pilihan bulat di mana pengguna HANYA bisa memilih SATU opsi dinamakan...  
A. `type="radio"` | B. `type="checkbox"` | C. `type="select"` | D. `type="button"`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `type="radio"` membatasi pilihan hanya 1 opsi dari grup ber-name sama.

**Soal 8:** Elemen HTML untuk memberikan kotak bidang isian teks panjang berbaris-baris adalah...  
A. `<textarea>` | B. `<input type="text">` | C. `<label>` | D. `<textbox>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<textarea>` menyediakan kotak input teks multi-baris.

**Soal 9:** Teks petunjuk sementara berwarna abu-abu di dalam kotak input sebelum diketikkan dinamakan...  
A. `placeholder` | B. `tooltip` | C. `value` | D. `hint`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Atribut `placeholder` memberikan petunjuk sementara.

**Soal 10:** Tipe tombol yang memicu pengiriman data form ke server adalah...  
A. `<button type="submit">` | B. `<button type="reset">` | C. `<button type="button">` | D. `<button type="cancel">`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<button type="submit">` memicu event submit pada form.

---

### 🏋️ LATIHAN PRAKTIKUM MODUL 6
1. Buat form pendaftaran dengan Input Nama (`text`), Email (`email`), dan Tombol Submit (`button`).
2. Lengkapi form dengan `<label>` ber-atribut `for` dan atribut `required`.

---
---

# 📖 MODUL 7: SEMANTIC HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)

### 1. Penjelasan Teori yang Mudah Dipahami
Di masa lalu (HTML4), developer membuat semua bagian web menggunakan tag generik `<div>` (`<div id="header">`, `<div id="footer">`). Ini membuat kode sulit dibaca oleh mesin pencari Google dan screen reader (*Div-itis*).

**HTML5 Semantik** memperkenalkan tag-tag bernama bermakna jelas untuk setiap bagian struktur tata letak halaman web.

### 2. Istilah Penting
- **Semantic HTML**: Tag HTML yang nama tag-nya mendeskripsikan makna konten di dalamnya.
- **`<header>`**: Bagian kepala web (Logo, Judul, Banner Utama).
- **`<nav>`**: Bagian navigasi tautan menu utama.
- **`<main>`**: Bagian tempat konten unik utama halaman berada.
- **`<article>`**: Blok konten mandiri yang dapat berdiri sendiri.
- **`<section>`**: Kelompok bagian topik spesifik di dalam halaman.
- **`<aside>`**: Bagian konten sampingan (Sidebar, Iklan, Link Terkait).
- **`<footer>`**: Bagian kaki web (Copyright, Link Sosial Media).

### 3. Penjelasan Mendalam: HTML4 vs HTML5 Semantik
```html
<!-- HTML5 SEMANTIK (MODERN, AKSISEL & SEO FRIENDLY) -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<main>
  <article>
    <h1>Judul Artikel Pelajaran</h1>
    <p>Isi bacaan materi...</p>
  </article>
  
  <aside>
    <h3>Daftar Modul Terkait</h3>
  </aside>
</main>

<footer>
  <p>© 2026 KodeKu.id Platform Edukasi</p>
</footer>
```

### 4. Contoh Sederhana
Gunakan tag `<main>` HANYA 1 kali di setiap halaman HTML!

### 5. Contoh Penggunaan di Dunia Nyata
Saat Google memindai halaman KodeKu.id, Google Bot langsung menuju tag `<main>` dan `<article>` untuk mengambil teks materi modul tanpa terganggu oleh menu di `<nav>` atau footer di `<footer>`.

### 6. Best Practice (Praktik Terbaik Industri)
- Gunakan `<div>` hanya sebagai container styling murni tanpa makna semantik (seperti wrapper flexbox/grid).

### 7. Kesalahan yang Sering Dilakukan Pemula
- Terkena penyakit *"Div-itis"* (Membungkus semua elemen dengan puluhan `<div class="...">` bersarang tanpa pernah menggunakan tag semantik).

### 8. Tips Efisiensi Developer
Gunakan extension Chrome "HTML5 Outliner" untuk melihat hirarki semantik web Anda.

### 9. Ringkasan Modul 7
HTML5 Semantik memberi makna pada layout: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`.

---

### 📝 QUIZ EVALUASI MODUL 7 (10 Soal + Pembahasan Detail)

**Soal 1:** Pengertian dari Semantic HTML adalah...  
A. Tag HTML yang namanya menjelaskan makna dan arti konten di dalamnya bagi manusia dan mesin | B. Tag berwarna-warni | C. Tag khusus game | D. Tag bergambar  
*Kunci Jawaban:* **A**  
*Pembahasan:* Semantic HTML memiliki arti makna fungsi konten secara jelas.

**Soal 2:** Tag semantik HTML5 untuk membungkus bagian kepala web (seperti logo & banner) adalah...  
A. `<header>` | B. `<head>` | C. `<top>` | D. `<banner>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<header>` membungkus bagian kepala halaman.

**Soal 3:** Tag semantik HTML5 untuk membungkus menu link navigasi utama adalah...  
A. `<nav>` | B. `<menu>` | C. `<links>` | D. `<navigation>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<nav>` membungkus daftar tautan navigasi.

**Soal 4:** Tag semantik HTML5 untuk membungkus konten utama unik halaman adalah...  
A. `<main>` | B. `<body>` | C. `<content>` | D. `<center>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<main>` membungkus konten utama unik.

**Soal 5:** Berapa kali tag `<main>` boleh hadir dalam satu dokumen halaman HTML?  
A. Tepat 1 kali saja per halaman | B. Bebas 100 kali | C. Harus 2 kali | D. Tidak boleh ada  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag `<main>` hanya boleh ada 1 per halaman.

**Soal 6:** Tag semantik HTML5 untuk membungkus blok artikel independen yang berdiri sendiri adalah...  
A. `<article>` | B. `<section>` | C. `<div>` | D. `<post>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<article>` membungkus konten mandiri.

**Soal 7:** Tag semantik HTML5 untuk membungkus konten sampingan seperti Sidebar atau Iklan adalah...  
A. `<aside>` | B. `<sidebar>` | C. `<next>` | D. `<subcontent>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<aside>` membungkus konten sampingan.

**Soal 8:** Tag semantik HTML5 untuk bagian kaki web tempat copyright dan kontak berada adalah...  
A. `<footer>` | B. `<bottom>` | C. `<end>` | D. `<copyright>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<footer>` membungkus bagian kaki web.

**Soal 9:** Istilah sindiran "Div-itis" di dunia web developer mengacu pada kebiasaan...  
A. Terlalu banyak menggunakan tag `<div>` secara berlebihan dan mengabaikan tag HTML5 Semantik | B. Terlalu banyak CSS | C. Lupa simpan file | D. Error terminal  
*Kunci Jawaban:* **A**  
*Pembahasan:* Div-itis adalah kebiasaan buruk mengabaikan tag semantik.

**Soal 10:** Mengapa penggunaan HTML5 Semantik sangat disukai oleh mesin pencari Google (SEO)?  
A. Memudahkan mesin pencari memahami struktur & indeks konten penting halaman secara presisi | B. Karena gratis | C. Karena membuat file kecil | D. Karena gambar cepat  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag semantik membantu web crawler mengindeks informasi penting.

---

### 🏋️ LATIHAN PRAKTIKUM MODUL 7
1. Ubah layout ber-`div` lama menjadi `<header>`, `<nav>`, `<main>`, dan `<footer>`.

---
---

# 📖 MODUL 8: WEB ACCESSIBILITY (ARIA ROLES, ALT TEXT, A11Y)

### 1. Penjelasan Teori yang Mudah Dipahami
**Web Accessibility (A11y)** adalah praktik merancang web agar dapat digunakan oleh semua orang, termasuk orang dengan disabilitas (seperti tunanetra yang menggunakan **Screen Reader** pembaca suara, atau pengguna yang hanya menavigasi web menggunakan keyboard tanpa mouse).

### 2. Istilah Penting
- **A11y**: Singkatan dari Accessibility.
- **Screen Reader**: Software pembaca teks suara untuk tunanetra (contoh: NVDA, VoiceOver).
- **ARIA (Accessible Rich Internet Applications)**: Atribut khusus (`role="..."`, `aria-label="..."`) untuk memberi informasi ekstra ke screen reader.
- **Focus State**: Indikator kotak garis biru saat tombol/link dipilih menggunakan tombol `Tab` keyboard.

### 3. Penjelasan Mendalam: Penggunaan Atribut ARIA
```html
<!-- Tombol Icon Tanpa Teks (Wajib beri aria-label) -->
<button aria-label="Tutup Modal" onclick="closeModal()">
  <span aria-hidden="true">✕</span>
</button>

<!-- Gambar Dekoratif yang Tidak Perlu Dibaca Screen Reader -->
<img src="divider.png" alt="" aria-hidden="true" />
```

### 4. Contoh Sederhana
Jangan pernah menghapus garis fokus keyboard dengan `outline: none` di CSS tanpa memberikan pengganti visual yang jelas!

### 5. Contoh Penggunaan di Dunia Nyata
Pemerintah dan perusahaan besar di dunia memiliki hukum wajib bahwa semua situs web publik harus lulus uji aksesibilitas standar **WCAG 2.1 Level AA**.

### 6. Best Practice (Praktik Terbaik Industri)
- Pastikan rasio kontras warna teks dengan background cukup tinggi (kontras minimal 4.5:1).

### 7. Kesalahan yang Sering Dilakukan Pemula
- Membuat tombol menggunakan tag `<div>` (`<div onclick="...">Klik</div>`) tanpa atribut `role="button"` dan `tabindex="0"`.

### 8. Tips Efisiensi Developer
Gunakan tool **Lighthouse** di Chrome DevTools untuk menguji skor aksesibilitas web Anda.

### 9. Ringkasan Modul 8
A11y membuat web ramah disabilitas. Gunakan tag semantik, atribut `alt`, `aria-label`, dan jangan hapus outline fokus keyboard.

---

### 📝 QUIZ EVALUASI MODUL 8 (10 Soal + Pembahasan Detail)

**Soal 1:** Singkatan industri untuk istilah Web Accessibility adalah...  
A. A11y | B. W3C | C. WebAcc | D. HTML5  
*Kunci Jawaban:* **A**  
*Pembahasan:* A11y singkatan dari Accessibility (A + 11 huruf + y).

**Soal 2:** Perangkat lunak yang digunakan oleh tunanetra untuk membacakan isi teks website dalam bentuk suara dinamakan...  
A. Screen Reader | B. Screen Saver | C. Magnifier | D. Translator  
*Kunci Jawaban:* **A**  
*Pembahasan:* Screen Reader membacakan teks antarmuka bagi tunanetra.

**Soal 3:** Singkatan dari ARIA pada atribut aksesibilitas HTML adalah...  
A. Accessible Rich Internet Applications | B. Auto Responsive Interactive App | C. Automated Reader Internal Access | D. Application Role Interface Access  
*Kunci Jawaban:* **A**  
*Pembahasan:* ARIA singkatan dari Accessible Rich Internet Applications.

**Soal 4:** Atribut ARIA untuk memberi label penjelasan pada tombol ikon tanpa teks adalah...  
A. `aria-label="Cari"` | B. `aria-hide="false"` | C. `role="search"` | D. `title="search"`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `aria-label` memberikan label deskriptif bagi Screen Reader.

**Soal 5:** Atribut ARIA `aria-hidden="true"` berfungsi untuk...  
A. Menyembunyikan elemen dari pembacaan Screen Reader (misal gambar dekoratif) | B. Menghapus elemen | C. Membesarkan teks | D. Mematikan CSS  
*Kunci Jawaban:* **A**  
*Pembahasan:* `aria-hidden="true"` mengabaikan elemen dekoratif dari Screen Reader.

**Soal 6:** Mengapa menghapus garis pembatas fokus keyboard (`outline: none`) di CSS tanpa pengganti visual dianggap BURUK?  
A. Merusak navigasi bagi pengguna yang menjelajahi web hanya menggunakan keyboard (`Tab`) | B. Membuat server crash | C. Dilarang Google | D. Gambar hilang  
*Kunci Jawaban:* **A**  
*Pembahasan:* Indikator fokus keyboard sangat vital bagi pengguna keyboard-only navigation.

**Soal 7:** Rasio kontras warna minimal yang direkomendasikan standar WCAG untuk keterbacaan teks biasa adalah...  
A. 4.5:1 | B. 1:1 | C. 100:1 | D. 0.5:1  
*Kunci Jawaban:* **A**  
*Pembahasan:* WCAG AA menetapkan rasio kontras 4.5:1.

**Soal 8:** Mengapa membuat tombol menggunakan `<button>` jauh lebih baik dibanding `<div onclick="...">`?  
A. Tag `<button>` secara alami memiliki fitur navigasi keyboard (Enter/Space) dan dikenali otomatis oleh Screen Reader | B. Tombol div lebih mahal | C. Div tidak bisa diberi warna | D. Button menghapus teks  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag `<button>` memiliki fitur aksesibilitas bawaan browser.

**Soal 9:** Tool audit bawaan di Chrome DevTools untuk mengecek skor Aksesibilitas web adalah...  
A. Lighthouse | B. Network | C. Application | D. Security  
*Kunci Jawaban:* **A**  
*Pembahasan:* Lighthouse menguji skor aksesibilitas A11y.

**Soal 10:** Tombol keyboard yang digunakan pengguna untuk melompati elemen interaktif di web adalah...  
A. Tab | B. Shift | C. Enter | D. Esc  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tombol `Tab` memindahkan fokus navigasi keyboard.

---

### 🏋️ LATIHAN PRAKTIKUM MODUL 8
1. Jalankan audit Aksesibilitas menggunakan Chrome DevTools Lighthouse pada halaman HTML Anda.

---
---

# 📖 MODUL 9: SEO META TAGS & OPEN GRAPH PROTOCOL

### 1. Penjelasan Teori yang Mudah Dipahami
Bagaimana Google mengetahui ringkasan isi web Anda? Dan bagaimana WhatsApp / Facebook / X menampilkan gambar kartu pratinjau (*preview card*) yang indah saat link web Anda dibagikan?

melalui **SEO Meta Tags** dan **Open Graph (OG) Protocol** yang dipasang di bagian `<head>` dokumen HTML.

### 2. Istilah Penting
- **SEO (Search Engine Optimization)**: Teknik mengoptimalkan web agar berada di halaman 1 Google.
- **Meta Description**: Teks ringkasan web yang tampil di hasil pencarian Google.
- **Open Graph (`og:image`, `og:title`)**: Protokol buatan Facebook untuk menampilkan preview kartu saat link dibagikan di media sosial / WA.
- **Favicon**: Ikon logo kecil yang tampil di tab browser.

### 3. Penjelasan Mendalam: Pengaturan Tag SEO & Open Graph di `<head>`
```html
<head>
  <!-- SEO Dasar -->
  <title>Master AI & Fullstack Web Dev — KodeKu.id</title>
  <meta name="description" content="Belajar koding terstruktur dari dasar sampai mahir dengan modul teks interaktif dan sertifikat resmi." />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph / WhatsApp / Facebook Preview Card -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Master AI & Fullstack Web Dev — KodeKu.id" />
  <meta property="og:description" content="Belajar koding terstruktur dari dasar sampai mahir." />
  <meta property="og:image" content="https://kodeku.id/images/og-banner.png" />
  <meta property="og:url" content="https://kodeku.id" />

  <!-- Favicon Logo Tab -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</head>
```

### 4. Contoh Sederhana
Panjang karakter `meta description` ideal adalah antara **120 - 160 karakter**.

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda membagikan link halaman kursus KodeKu.id di grup WhatsApp, WhatsApp otomatis mengunduh tag `og:image` dan menampilkan gambar banner kursus berukuran besar beserta judul dan deskripsinya.

### 6. Best Practice (Praktik Terbaik Industri)
- Pastikan ukuran gambar `og:image` idealnya **1200 x 630 pixel**.

### 7. Kesalahan yang Sering Dilakukan Pemula
- Menggunakan nilai URL relatif pada `og:image` (`og:image="/banner.png"` SALAH!). URL gambar `og:image` **WAJIB MENGGUNAKAN URL ABSOLUT LENGKAP** dengan `https://` (`og:image="https://domain.com/banner.png"` BENAR!).

### 8. Tips Efisiensi Developer
Gunakan situs **Open Graph Checker** (`opengraph.dev`) untuk menguji kartu preview sosial media.

### 9. Ringkasan Modul 9
Meta Description untuk deskripsi Google SEO. Open Graph (`og:image`) untuk tampilan kartu preview link di WhatsApp/Medsos.

---

### 📝 QUIZ EVALUASI MODUL 9 (10 Soal + Pembahasan Detail)

**Soal 1:** Tag meta yang digunakan untuk menyajikan deskripsi ringkasan web pada hasil pencarian Google dinamakan...  
A. `<meta name="description">` | B. `<meta name="summary">` | C. `<meta name="seo">` | D. `<meta name="info">`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<meta name="description">` menyajikan deskripsi di Google Search.

**Soal 2:** Protokol untuk mengontrol tampilan kartu pratinjau saat link dibagikan di WhatsApp/Facebook adalah...  
A. Open Graph Protocol (`og:`) | B. TCP Protocol | C. HTTP Protocol | D. DNS Protocol  
*Kunci Jawaban:* **A**  
*Pembahasan:* Open Graph Protocol mengontrol social preview cards.

**Soal 3:** Tag Open Graph untuk menentukan gambar banner preview saat link dibagikan adalah...  
A. `<meta property="og:image" content="...">` | B. `<meta name="picture">` | C. `<link rel="image">` | D. `<meta og="photo">`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `og:image` menentukan gambar kartu preview.

**Soal 4:** Manakah syarat penulisan URL gambar `og:image` yang BENAR agar dapat terbaca oleh WhatsApp?  
A. Harus menggunakan Absolute URL lengkap dengan `https://` | B. Boleh relative URL `/banner.png` | C. Cukup nama file `banner.png` | D. Tanpa domain  
*Kunci Jawaban:* **A**  
*Pembahasan:* WhatsApp mewajibkan Absolute URL lengkap ber-`https://`.

**Soal 5:** Ukuran dimensi gambar `og:image` yang direkomendasikan adalah...  
A. 1200 x 630 pixel | B. 100 x 100 pixel | C. 4000 x 4000 pixel | D. 10 x 10 pixel  
*Kunci Jawaban:* **A**  
*Pembahasan:* 1200 x 630px adalah rasio ideal 1.91:1 untuk social card.

**Soal 6:** Panjang karakter teks `meta description` yang ideal untuk hasil pencarian Google adalah...  
A. 120 - 160 karakter | B. 5.000 karakter | C. 5 karakter | D. 1.000 karakter  
*Kunci Jawaban:* **A**  
*Pembahasan:* 120-160 karakter mencegah deskripsi terpotong tanda `...`.

**Soal 7:** Tag meta `<meta name="robots" content="index, follow">` memberitahu bot Google untuk...  
A. Mengindeks halaman ini dan mengikuti semua link di dalamnya | B. Blokir halaman | C. Menghapus web | D. Mematikan gambar  
*Kunci Jawaban:* **A**  
*Pembahasan:* `index, follow` memberikan izin penuh pencarian Google.

**Soal 8:** Ikon logo kecil yang tampil di tab browser dinamakan...  
A. Favicon | B. Avatar | C. Thumbnail | D. Banner  
*Kunci Jawaban:* **A**  
*Pembahasan:* Favicon adalah ikon kecil tab browser.

**Soal 9:** Tag HTML untuk mengaitkan file Favicon di bagian `<head>` adalah...  
A. `<link rel="icon" href="favicon.ico">` | B. `<meta icon="favicon.ico">` | C. `<img src="favicon.ico">` | D. `<title icon>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<link rel="icon">` mengaitkan ikon favicon.

**Soal 10:** Tool online untuk menguji tampilan preview link Open Graph sosial media adalah...  
A. OpenGraph.dev / Facebook Sharing Debugger | B. Speedtest | C. Ping CLI | D. Notepad  
*Kunci Jawaban:* **A**  
*Pembahasan:* OpenGraph.dev menguji simulasi kartu preview sosial media.

---

### 🏋️ LATIHAN PRAKTIKUM MODUL 9
1. Tambahkan `<meta name="description">` 140 karakter di dokumen HTML Anda.

---
---

# 📖 MODUL 10: MINI PROJECT — MEMBANGUN STRUKTUR DOKUMEN PORTFOLIO & RESUME HTML SEMANTIK

### 1. Deskripsi Mini Project
Pada modul penutup Kelas 5 ini, Anda akan membangun sebuah **Dokumen HTML5 Semantik Portfolio & Resume Developer** yang utuh, ramah SEO, memiliki Meta Tags, Form Kontak Aksesibel, dan mengikuti seluruh standar W3C.

### 2. Tujuan Mini Project
Mengintegrasikan seluruh pemahaman dari Modul 1-9 (Struktur Dokumen, Text Formatting, Images/Links, Lists/Tables, Forms, Semantic Tags, Accessibility, dan SEO Meta Tags).

### 3. Kode Lengkap Mini Project (`portfolio.html`):

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <!-- 1. SEO & METADATA -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rian Pratama — Fullstack Developer & AI Engineer Portfolio</title>
  <meta name="description" content="Portfolio resmi Rian Pratama, Fullstack Developer berpengalaman dalam membangun aplikasi web modern Next.js, Node.js, dan AI Integration." />
  <meta name="robots" content="index, follow" />

  <!-- 2. OPEN GRAPH SOCIAL CARDS -->
  <meta property="og:type" content="profile" />
  <meta property="og:title" content="Rian Pratama — Fullstack Developer Portfolio" />
  <meta property="og:description" content="Lihat proyek dan keahlian koding Rian Pratama." />
  <meta property="og:image" content="https://kodeku.id/images/rian-avatar.jpg" />
  <meta property="og:url" content="https://kodeku.id/rian" />

  <link rel="icon" href="/favicon.ico" />
</head>
<body>

  <!-- 3. HEADER & NAVIGASI SEMANTIK -->
  <header>
    <a href="#" class="logo"><strong>RianPratama.dev</strong></a>
    <nav aria-label="Navigasi Utama">
      <ul>
        <li><a href="#tentang">Tentang Saya</a></li>
        <li><a href="#keahlian">Keahlian</a></li>
        <li><a href="#proyek">Proyek</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </nav>
  </header>

  <!-- 4. KONTEN UTAMA SEMANTIK -->
  <main>

    <!-- HERO SECTION -->
    <section id="tentang">
      <h1>Halo, Saya Rian Pratama 👋</h1>
      <p>Saya seorang <strong>Fullstack Web Developer & AI Engineer</strong> yang berfokus membangun aplikasi web terstruktur, cepat, dan aman.</p>
      <img src="https://via.placeholder.com/150" alt="Foto Profil Rian Pratama sedang memegang laptop" width="150" height="150" loading="lazy" />
    </section>

    <!-- KEAHLIAN SECTION -->
    <section id="keahlian">
      <h2>Keahlian Utama (Technical Skills)</h2>
      <ul>
        <li>Frontend: <strong>HTML5, CSS3, Tailwind, React.js, Next.js</strong></li>
        <li>Backend: <strong>Node.js, Express.js, TypeScript, REST API</strong></li>
        <li>Database: <strong>PostgreSQL, Prisma ORM, MongoDB</strong></li>
        <li>DevOps & AI: <strong>Linux CLI, Docker, Git/GitHub, Prompt Engineering</strong></li>
      </ul>
    </section>

    <!-- PROYEK SECTION -->
    <section id="proyek">
      <h2>Proyek Pilihan</h2>
      <article>
        <h3>1. Platform Kursus IT KodeKu.id</h3>
        <p>Membangun platform edukasi koding terstruktur berbasis teks interaktif, live sandbox code, dan sertifikat resmi.</p>
        <p>Teknologi: <code>Next.js</code>, <code>TypeScript</code>, <code>PostgreSQL</code>, <code>Midtrans API</code></p>
        <a href="https://github.com/username/kodeku" target="_blank" rel="noopener noreferrer">Lihat Kode di GitHub →</a>
      </article>
    </section>

    <!-- RIWAYAT PENDIDIKAN TABEL -->
    <section id="pendidikan">
      <h2>Riwayat Sertifikasi</h2>
      <table>
        <thead>
          <tr>
            <th>Nama Sertifikasi</th>
            <th>Penerbit</th>
            <th>Tahun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fullstack Web Developer & AI Engineer</td>
            <td>KodeKu.id Indonesia</td>
            <td>2026</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- FORM KONTAK AKSESIBEL -->
    <section id="kontak">
      <h2>Hubungi Saya</h2>
      <form action="/api/contact" method="POST">
        <div>
          <label for="namaLengkap">Nama Lengkap:</label>
          <input type="text" id="namaLengkap" name="nama" placeholder="Masukkan nama Anda" required />
        </div>
        <div>
          <label for="emailUser">Email Aktif:</label>
          <input type="email" id="emailUser" name="email" placeholder="nama@email.com" required />
        </div>
        <div>
          <label for="pesanUser">Pesan:</label>
          <textarea id="pesanUser" name="pesan" rows="4" placeholder="Tuliskan pesan proyek..." required></textarea>
        </div>
        <button type="submit">Kirim Pesan Sekarang →</button>
      </form>
    </section>

  </main>

  <!-- 5. FOOTER SEMANTIK -->
  <footer>
    <p>© 2026 Rian Pratama. Dibuat dengan HTML5 Semantik Standar W3C.</p>
  </footer>

</body>
</html>
```

---

### 📝 QUIZ EVALUASI KELAS 5 (10 Soal + Pembahasan Detail)

**Soal 1:** Mengapa dokumen di atas memasukkan atribut `loading="lazy"` pada foto profil?  
A. Agar foto dimuat hanya saat akan terlihat di layar, menghemat penggunaan data kuota pengguna | B. Mengubah warna foto | C. Menghapus foto | D. Membesarkan foto  
*Kunci Jawaban:* **A**  
*Pembahasan:* Lazy loading menunda pemuatan gambar hingga mendekati viewport.

**Soal 2:** Mengapa link GitHub di atas menyertakan `target="_blank"` dan `rel="noopener noreferrer"`?  
A. Membuka link di tab baru secara aman tanpa celah keamanan tabjacking | B. Menghapus link | C. Mematikan CSS | D. Mengunci browser  
*Kunci Jawaban:* **A**  
*Pembahasan:* Target _blank dengan rel noopener mencegah kerentanan keamanan tabnabbing.

**Soal 3:** Tag semantik yang membungkus bagian item proyek individual di atas adalah...  
A. `<article>` | B. `<div>` | C. `<span>` | D. `<b>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag `<article>` membungkus bagian item independen.

**Soal 4:** Mengapa atribut `for="namaLengkap"` pada label harus bernilai sama persis dengan `id="namaLengkap"` pada input?  
A. Agar label dan input terhubung secara resmi untuk aksesibilitas dan fokus kursor | B. Syarat dari Windows | C. Agar tombol berwarna merah | D. Tidak berpengaruh  
*Kunci Jawaban:* **A**  
*Pembahasan:* Menghubungkan atribut `for` dan `id` menjamin fokus aksesibilitas kursor.

**Soal 5:** Elemen apa yang membungkus navigasi menu utama di bagian atas?  
A. `<header>` dan `<nav>` | B. `<footer>` | C. `<aside>` | D. `<main>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<header>` dan `<nav>` membungkus navigasi bagian atas.

**Soal 6:** Berapa jumlah tag `<h1>` yang ada pada dokumen portfolio profesional di atas?  
A. Tepat 1 saja ("Halo, Saya Rian Pratama 👋") | B. 10 | C. 0 | D. 5  
*Kunci Jawaban:* **A**  
*Pembahasan:* Halaman web profesional hanya memiliki 1 `<h1>`.

**Soal 7:** Atribut `name="..."` pada setiap bidang input form berfungsi untuk...  
A. Menjadi kunci nama variabel data yang dikirimkan ke backend server saat form di-submit | B. Mengubah font | C. Menghapus input | D. Membuat garis border  
*Kunci Jawaban:* **A**  
*Pembahasan:* Atribut `name` menetapkan nama kunci pengiriman data ke server.

**Soal 8:** Di manakah lokasi terbaik meletakkan tag `<meta name="description">` dan Open Graph?  
A. Di dalam tag `<head>` | B. Di dalam `<body>` | C. Di `<footer>` | D. Di luar `<html>`  
*Kunci Jawaban:* **A**  
*Pembahasan:* Tag meta diletakkan di dalam `<head>`.

**Soal 9:** Mengapa daftar keahlian dibuat menggunakan tag `<ul>` dan `<li>`?  
A. Menyajikan daftar poin tanpa urutan angka secara semantik rapi | B. Karena terpaksa | C. Dilarang pakai p | D. Agar file kecil  
*Kunci Jawaban:* **A**  
*Pembahasan:* `<ul>` dan `<li>` menyajikan daftar poin secara semantik.

**Soal 10:** Selamat! Setelah menyelesaikan Kelas 5, apa kompetensi utama yang Anda miliki?  
A. Mahir merancang dokumen web HTML5 semantik standar W3C, ramah SEO, ber-meta tags, ber-form aksesibel, dan bebas dari div-itis | B. Buat kabel LAN | C. Servis HP | D. Edit foto Photoshop  
*Kunci Jawaban:* **A**  
*Pembahasan:* HTML5 Semantik Masterclass memberikan pemahaman web terstruktur bebas div-itis.

---

### 🎓 KESIMPULAN KELAS 5
Selamat! Anda telah menyelesaikan **Kelas 5: HTML5 & Web Semantics Masterclass**.
