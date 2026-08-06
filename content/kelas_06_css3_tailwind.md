# 📚 KELAS 6: CSS3, MODERN LAYOUTS & TAILWIND CSS

---

## 📌 INFORMASI KELAS

- **Deskripsi Kelas**: Menguasai styling web dari dasar CSS3, Specificity, Box Model, Flexbox, CSS Grid, Media Queries Responsive Design, Animasi CSS, hingga framework utility-first Tailwind CSS modern.
- **Tujuan Belajar**: Mampu mengubah dokumen HTML biasa menjadi antarmuka web modern, indah, adem dipandang, dan responsive di semua perangkat (Desktop, Tablet, Mobile).
- **Prasyarat**: Menyelelesaikan Kelas 5 (HTML5 & Web Semantics).
- **Hasil Yang Dikuasai**: Mahir merancang layout web kompleks menggunakan Flexbox/Grid CSS dan Tailwind CSS.

---

# 📖 MODUL 1: PENGENALAN CSS, SELECTORS, SPECIFICITY & CASCADE

### 1. Penjelasan Teori yang Mudah Dipahami
Jika HTML adalah **Tulang/Struktur** bangunan web, maka **CSS (Cascading Style Sheets)** adalah **Cat, Dekorasi, dan Desain Interior** yang membuat web tampak indah.

### 2. Istilah Penting
- **Selector**: Target elemen HTML yang ingin diberi gaya styling (contoh: `.btn`, `#header`, `h1`).
- **Property & Value**: Atribut gaya dan nilainya (contoh: `color: blue;`).
- **Specificity**: Aturan bobot prioritas CSS jika ada dua gaya bentrok.
- **Cascade**: Sifat CSS yang mengalir dari atas ke bawah (aturan di bawah menimpa aturan di atas).

### 3. Penjelasan Mendalam
Hirarki Bobot Specificity (Dari Terlemah ke Terkuat):
1. **Element Selector** (`p`, `h1`): Bobot `0,0,1`
2. **Class Selector** (`.card`, `.btn`): Bobot `0,1,0`
3. **ID Selector** (`#navbar`): Bobot `1,0,0`
4. **Inline Style** (`style="color:red"`): Bobot `1,0,0,0`
5. **`!important`**: Menimpa SEMUA aturan di atas (Gunakan secara sangat bijak!).

### 4. Contoh Sederhana
Aturan Sintaks CSS:
```css
/* Selector Class */
.btn-primary {
  background-color: #2563eb;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 6px;
}
```

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda mengubah tema web dari terang (Light Mode) ke gelap (Dark Mode), CSS mengubah variabel warna `.dark { background-color: #0f172a; }` di seluruh halaman web.

### 6. Best Practice
- Hindari penggunaan ID Selector (`#id`) untuk styling CSS! Gunakan Class Selector (`.class`) agar gaya dapat digunakan kembali (*reusable*).

### 7. Kesalahan yang Sering Dilakukan
- Terlalu sering menggunakan `!important` untuk memenangkan bentrok style. Ini membuat CSS menjadi sangat sulit di-maintenance di masa depan!

### 8. Tips
Gunakan BEM Naming Convention (`.card`, `.card__title`, `.card__button--active`) agar nama Class CSS terstruktur rapi.

### 9. Ringkasan
CSS menghias HTML. Specificity menentukan prioritas (Inline > ID > Class > Element). Utamakan Class.

---

### 📝 QUIZ MODUL 1 (10 Soal)

**Soal 1:** Singkatan resmi dari CSS adalah...  
A. Cascading Style Sheets | B. Creative Style System | C. Computer Style Sheet | D. Custom Style Sheet

**Soal 2:** Bagian dari aturan CSS yang digunakan untuk menentukan elemen HTML mana yang ingin diberi style dinamakan...  
A. Selector | B. Property | C. Value | D. Declaration

**Soal 3:** Manakah selector CSS yang memiliki bobot prioritas (*Specificity*) PALING TINGGI di antara pilihan berikut?  
A. Element Selector (`p`) | B. Class Selector (`.btn`) | C. ID Selector (`#submit-btn`) | D. Universal Selector (`*`)

**Soal 4:** Simbol titik (`.`) pada selector `.title` menandakan bahwa kita menargetkan elemen HTML berdasarkan atribut...  
A. ID | B. Class | C. Name | D. Type

**Soal 5:** Simbol pagar (`#`) pada selector `#header` menandakan bahwa kita menargetkan elemen HTML berdasarkan atribut...  
A. Class | B. ID | C. Href | D. Alt

**Soal 6:** Aturan khusus di CSS yang dipasang di ujung nilai properti untuk menimpa semua urutan Specificity adalah...  
A. `!important` | B. `!priority` | C. `!force` | D. `!must`

**Soal 7:** Mengapa penggunaan ID Selector (`#id`) kurang disarankan untuk styling CSS biasa?  
A. Karena bobot Specificity-nya terlalu tinggi dan gayanya tidak dapat digunakan kembali (*not reusable*) pada elemen lain | B. Karena ID tidak punya warna | C. Dilarang oleh Chrome | D. Bikin file besar

**Soal 8:** Cara menghubungkan file CSS eksternal `style.css` ke dalam dokumen HTML di bagian `<head>` adalah...  
A. `<link rel="stylesheet" href="style.css">` | B. `<script src="style.css">` | C. `<style src="style.css">` | D. `<css href="style.css">`

**Soal 9:** Sifat *Cascade* pada CSS berarti jika ada dua aturan selector berbobot sama, maka aturan yang berlaku adalah...  
A. Aturan yang berada di baris paling bawah | B. Aturan yang berada di paling atas | C. Keduanya dihapus | D. Error

**Soal 10:** Selector bintang (`*`) di dalam CSS biasa digunakan untuk menargetkan...  
A. SELURUH elemen HTML di dalam dokumen | B. Hanya elemen gambar | C. Hanya link | D. Hanya teks

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 1
1. **A (Cascading Style Sheets)** — Definisi CSS.
2. **A (Selector)** — Pengertian selector CSS.
3. **C (ID Selector `#submit-btn`)** — ID Memiliki specificty 1,0,0.
4. **B (Class)** — Dot prefix for class selector.
5. **B (ID)** — Hash prefix for ID selector.
6. **A (`!important`)** — Force override flag.
7. **A (Specificity terlalu tinggi & not reusable)** — Reusability best practice.
8. **A (`<link rel="stylesheet" href="style.css">`)** — External CSS link syntax.
9. **A (Aturan di baris paling bawah)** — Cascade down rule.
10. **A (SELURUH elemen HTML)** — Universal selector `*`.

---

### 🏋️ Latihan & Mini Project Modul 1
- **Latihan**: Buat file `style.css`, hubungkan ke `index.html`, beri warna merah pada `.text-red`.
- **Mini Project**: Terapkan CSS Reset dasar (`* { box-sizing: border-box; margin: 0; padding: 0; }`).

---
---

# 📖 MODUL 2: CSS COLORS, TYPOGRAPHY & UNITS (`px`, `rem`, `em`, `vh`, `vw`)

### 1. Penjelasan Teori yang Mudah Dipahami
Di dalam CSS, Anda harus mengatur warna visual, ukuran teks (Typography), dan satuan ukuran (*Units*).

Ukuran di CSS dibagi 2 jenis:
1. **Satuan Absolut (`px`)**: Ukurannya tetap kaku (16px selalu 16px).
2. **Satuan Relatif (`rem`, `em`, `%`, `vh`, `vw`)**: Ukurannya fleksibel menyesuaikan layar atau ukuran font induk.

### 2. Istilah Penting
- **HEX Color**: Format warna 6 digit hex (contoh: `#2563eb`).
- **HSL Color**: Format warna Hue, Saturation, Lightness (contoh: `hsl(217, 91%, 60%)`).
- **`rem` (Root EM)**: Satuan relatif terhadap ukuran font di root `<html>` (1rem default = 16px).
- **`vh` / `vw` (Viewport Height / Width)**: Satuan relatif terhadap 1% tinggi/lebar layar monitor.

### 3. Penjelasan Mendalam
Mengapa Industri Menggunakan `rem` Dibanding `px`?
- Jika pengguna tunanetra memperbesar default font browser di HP-nya dari 16px ke 24px:
  - Teks bernilai `px` **TIDAK AKAN MEMBESAR** (Tatap kaku).
  - Teks bernilai `rem` **OTOMATIS IKUT MEMBESAR** proporsional demi aksesibilitas!

Konversi Satuan `rem` (Default 1rem = 16px):
- `8px` = `0.5rem`
- `16px` = `1rem`
- `24px` = `1.5rem`
- `32px` = `2rem`

### 4. Contoh Sederhana
Styling Teks & Hero Banner Fullscreen:
```css
.hero-banner {
  min-height: 100vh; /* Setinggi 100% layar monitor */
  background-color: #0f172a;
  color: #f8fafc;
}

.heading {
  font-size: 2rem; /* 32px */
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1.5;
}
```

### 5. Contoh Penggunaan di Dunia Nyata
Landing page modern menggunakan `min-height: 100vh` pada section awal agar tampilan banner utama selalu pas memenuhi 1 layar monitor pengguna baik di laptop 13 inch maupun monitor 27 inch.

### 6. Best Practice
- Selalu gunakan `rem` untuk `font-size`, `margin`, dan `padding` demi aksesibilitas responsif.
- Gunakan font web modern seperti **Inter** atau **Plus Jakarta Sans** dari Google Fonts.

### 7. Kesalahan yang Sering Dilakukan
- Menuliskan `font-size: 16px` di semua tempat secara kaku.

### 8. Tips
Gunakan nilai warna **HSL** untuk dengan mudah membuat variasi warna hover yang lebih gelap/terang hanya dengan mengubah persentase Lightness.

### 9. Ringkasan
Gunakan `rem` untuk font/spacing (1rem = 16px). Gunakan `vh`/`vw` untuk ukuran layar. Pilih HEX/HSL untuk warna.

---

### 📝 QUIZ MODUL 2 (10 Soal)

**Soal 1:** Satuan ukuran CSS yang bersifat **Absolut** (nilainya tetap kaku tidak peduli ukuran layar) adalah...  
A. `px` | B. `rem` | C. `em` | D. `vh`

**Soal 2:** Satuan ukuran `1rem` secara default pada mayoritas browser bernilai setara dengan berapa pixel?  
A. 10px | B. 12px | C. 16px | D. 20px

**Soal 3:** Mengapa developer profesional lebih menyukai `rem` dibanding `px` untuk ukuran font?  
A. Mendukung aksesibilitas; ukuran font otomatis menyesuaikan pengaturan preferensi browser pengguna | B. Karena rem lebih murah | C. Karena px menghapus warna | D. Agar file kecil

**Soal 4:** Nilai `100vh` pada CSS berarti elemen tersebut memiliki tinggi setara dengan...  
A. 100 Pixel | B. 100% dari tinggi layar (*Viewport Height*) monitor saat ini | C. 100 mm | D. 100% dari lebar layar

**Soal 5:** Nilai `50vw` pada CSS berarti elemen memiliki lebar setara dengan...  
A. 50% dari lebar layar (*Viewport Width*) monitor saat ini | B. 50 Pixel | C. 50 Rem | D. 50% dari tinggi

**Soal 6:** Format kode warna `#ffffff` mewakili warna...  
A. Hitam | B. Merah | C. Putih | D. Biru

**Soal 7:** Format kode warna `#000000` mewakili warna...  
A. Hitam | B. Putih | C. Hijau | D. Kuning

**Soal 8:** Properti CSS yang digunakan untuk menentukan jenis font tulisan adalah...  
A. `font-family` | B. `font-style` | C. `font-weight` | D. `text-align`

**Soal 9:** Properti CSS `line-height: 1.6` berfungsi untuk mengatur...  
A. Ukuran huruf | B. Jarak spasi antar baris kalimat teks (*Leading*) | C. Lebar huruf | D. Warna teks

**Soal 10:** Berapakah nilai `rem` jika kita ingin mengatur ukuran font sebesar `24px`?  
A. `1rem` | B. `1.5rem` | C. `2rem` | D. `2.5rem`

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 2
1. **A (`px`)** — Absolute pixel unit.
2. **C (16px)** — Default 1rem = 16px.
3. **A (Mendukung aksesibilitas browser zoom)** — Accessibility rem benefit.
4. **B (100% dari tinggi layar Viewport Height)** — 100vh definition.
5. **A (50% dari lebar layar Viewport Width)** — 50vw definition.
6. **C (Putih)** — Hex `#ffffff` is White.
7. **A (Hitam)** — Hex `#000000` is Black.
8. **A (`font-family`)** — Font family property.
9. **B (Jarak spasi antar baris kalimat teks)** — Line height property.
10. **B (`1.5rem`)** — $24 / 16 = 1.5\text{rem}$.

---

### 🏋️ Latihan & Mini Project Modul 2
- **Latihan**: Setel `font-size: 1.5rem` dan `line-height: 1.6` pada judul artikel.
- **Mini Project**: Buat banner fullscreen dengan `min-height: 100vh` dan warna background `#0f172a`.

---
---

# 📖 MODUL 3: BOX MODEL (CONTENT, PADDING, BORDER, MARGIN, `box-sizing`)

### 1. Penjelasan Teori yang Mudah Dipahami
Setiap elemen di HTML (dari teks, gambar, hingga tombol) dibungkus oleh sebuah **Kotak Khusus (Box Model)**.

Box Model terdiri dari 4 lapisan (dari dalam ke luar):
1. **Content**: Isi materi asli (teks/gambar).
2. **Padding**: Ruang jarak di DALAM kotak (antara isi dengan garis tepi).
3. **Border**: Garis tepi pembatas kotak.
4. **Margin**: Ruang jarak di LUAR kotak (antara kotak dengan elemen tetangga).

### 2. Istilah Penting
- **Padding**: Jarak dalam kotak.
- **Margin**: Jarak luar antar kotak.
- **Border**: Garis pembatas.
- **`box-sizing: border-box`**: Aturan penting yang membuat `width` elemen sudah mencakup padding dan border tanpa membesar melar out-of-control.

### 3. Penjelasan Mendalam
Masalah Tanpa `border-box`:
- Jika kotak diberi `width: 200px` dan `padding: 20px`, maka lebar fisik total kotak akan membengkak menjadi `240px` ($200 + 20 + 20$)!

Solusi:
```css
/* Wajib dipasang di setiap proyek CSS Reset */
* {
  box-sizing: border-box;
}
```
Dengan `border-box`, kotak dengan `width: 200px` dan `padding: 20px` akan TETAP berlebar fisik total `200px`.

### 4. Contoh Sederhana
Aturan Penulisan Singkat (*Shorthand*):
- `margin: 20px;` (Atas, Kanan, Bawah, Kiri = 20px).
- `margin: 10px 20px;` (Atas-Bawah = 10px, Kanan-Kiri = 20px).
- `margin: 10px 20px 30px 40px;` (Searah jarum jam: Atas=10, Kanan=20, Bawah=30, Kiri=40).

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda membuat tombol yang nyaman diketik di HP: Anda memberi `padding: 12px 24px` di dalam tombol agar area sentuh jari pengguna menjadi luas.

### 6. Best Practice
- Selalu cantumkan `* { box-sizing: border-box; }` pada baris pertama file CSS Anda!

### 7. Kesalahan yang Sering Dilakukan
- Kebalik mengacaukan fungsi `margin` dan `padding`. `padding` membesarkan area dalam kotak, `margin` memberi jarak ke luar kotak.

### 8. Tips
Gunakan `margin: 0 auto;` pada elemen ber-`width` untuk meletakkannya tepat di tengah-tengah halaman secara horisontal.

### 9. Ringkasan
Box Model = Content -> Padding (dalam) -> Border (garis) -> Margin (luar). Wajib pakai `box-sizing: border-box`.

---

### 📝 QUIZ MODUL 3 (10 Soal)

**Soal 1:** Urutan 4 lapisan CSS Box Model dari lapisan paling dalam ke paling luar adalah...  
A. Content -> Padding -> Border -> Margin | B. Margin -> Border -> Padding -> Content | C. Border -> Content -> Margin -> Padding | D. Padding -> Margin -> Border -> Content

**Soal 2:** Ruang jarak kosong yang berada di DALAM kotak (antara konten dengan garis tepi) dinamakan...  
A. Margin | B. Padding | C. Border | D. Outline

**Soal 3:** Ruang jarak kosong yang berada di LUAR kotak (mendorong jarak ke elemen tetangga) dinamakan...  
A. Padding | B. Margin | C. Content | D. Radius

**Soal 4:** Efek utama dari penerapan aturan CSS `* { box-sizing: border-box; }` adalah...  
A. Ukuran `width` yang kita tentukan sudah mencakup `padding` dan `border` sehingga ukuran kotak tidak membengkak melar | B. Menghapus margin | C. Mengubah warna | D. Mematikan font

**Soal 5:** Penulisan shorthand `padding: 10px 20px;` berarti...  
A. Padding Atas-Bawah 10px, Kanan-Kiri 20px | B. Atas 10px, Kanan 20px | C. Semua sisi 10px | D. Kiri 20px

**Soal 6:** Penulisan shorthand `margin: 10px 20px 30px 40px;` mengikuti urutan arah...  
A. Searah Jarum Jam (Atas -> Kanan -> Bawah -> Kiri) | B. Berlawanan jarum jam | C. Bebas | D. Kiri ke Kanan

**Soal 7:** Trik CSS `margin: 0 auto;` pada elemen ber-width berfungsi untuk...  
A. Meletakkan elemen tepat di tengah-tengah halaman secara horisontal | B. Menghapus padding | C. Membesarkan border | D. Mematikan tombol

**Soal 8:** Properti CSS yang digunakan untuk membuat sudut kotak menjadi melengkung/membuat lingkaran dinamakan...  
A. `border-radius` | B. `border-style` | C. `box-corner` | D. `border-curve`

**Soal 9:** Nilai `border-radius: 50%` pada elemen berbentuk bujur sangkar ($100\times 100\text{px}$) akan menghasilkan bentuk...  
A. Lingkaran sempurna | B. Segitiga | C. Persegi panjang | D. Bintang

**Soal 10:** Properti CSS `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` digunakan untuk memberikan efek...  
A. Bayangan melayang di belakang kotak | B. Garis border tebal | C. Teks miring | D. Warna merah

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 3
1. **A (Content -> Padding -> Border -> Margin)** — Box model layers inside-out.
2. **B (Padding)** — Inner spacing.
3. **B (Margin)** — Outer spacing.
4. **A (Ukuran `width` sudah mencakup padding & border)** — Border-box property benefit.
5. **A (Padding Atas-Bawah 10px, Kanan-Kiri 20px)** — 2-value shorthand.
6. **A (Searah Jarum Jam: Top Right Bottom Left)** — 4-value clockwise rule.
7. **A (Meletakkan elemen tepat di tengah horisontal)** — Centering block trick.
8. **A (`border-radius`)** — Corner rounding property.
9. **A (Lingkaran sempurna)** — Circle shape via 50% radius.
10. **A (Bayangan melayang di belakang kotak)** — Box shadow effect.

---

### 🏋️ Latihan & Mini Project Modul 3
- **Latihan**: Buat elemen `.card` dengan `padding: 20px`, `border: 1px solid #ccc`, dan `border-radius: 8px`.
- **Mini Project**: Terapkan `box-shadow` halus untuk membuat efek kartu melayang.

---
---

# 📖 MODUL 4: POSITIONING (`static`, `relative`, `absolute`, `fixed`, `sticky`)

### 1. Penjelasan Teori yang Mudah Dipahami
Secara default, elemen di HTML mengalir dari atas ke bawah. Properti **Position** digunakan untuk mencabut atau mengontrol posisi elemen di layar.

### 2. Istilah Penting
- **`position: static`**: Posisi default bawaan aliran dokumen normal.
- **`position: relative`**: Posisi berpatokan pada lokasi aslinya sendiri.
- **`position: absolute`**: Posisi melayang bebas berpatokan pada induk terdekat yang ber-`position: relative`.
- **`position: fixed`**: Posisi mengunci tetap di layar monitor, tidak ikut bergerak saat di-scroll.
- **`position: sticky`**: Posisi menempel saat di-scroll mencapai batas tertentu (kombinasi relative + fixed).

### 3. Penjelasan Mendalam
Trik Pasangan Wajib (`relative` & `absolute`):
```css
/* Container Induk */
.card {
  position: relative; /* Wajib dipasang sebagai patokan */
  width: 300px;
}

/* Badge Melayang di Pojok Kanan Atas Kartu */
.card-badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

### 4. Contoh Sederhana
Sticky Header Navigasi:
```css
.navbar {
  position: sticky;
  top: 0; /* Menempel di paling atas layar saat di-scroll */
  z-index: 100;
}
```

### 5. Contoh Penggunaan di Dunia Nyata
- **Navbar Header KodeKu.id**: Menggunakan `position: sticky; top: 0` agar menu tetap terlihat di atas saat siswa membaca modul yang panjang.
- **Tombol Chat WhatsApp**: Menggunakan `position: fixed; bottom: 20px; right: 20px` mengunci di pojok kanan bawah HP.

### 6. Best Practice
- Gunakan `z-index` (misal `z-index: 10`) hanya pada elemen yang memiliki `position` selain `static` untuk menentukan tumpukan mana yang di atas.

### 7. Kesalahan yang Sering Dilakukan
- Lupa memasangkan `position: relative` pada parent induk saat menggunakan `position: absolute` pada anak. Akibatnya elemen anak melayang jauh ke ujung layar browser!

### 8. Tips
Gunakan `z-index: 9999` untuk modal popup dialog agar selalu tampil di paling depan menutupi seluruh konten.

### 9. Ringkasan
`relative` untuk patokan induk. `absolute` untuk melayang bebas di dalam induk. `fixed` mengunci layar. `sticky` menempel scroll.

---

### 📝 QUIZ MODUL 4 (10 Soal)

**Soal 1:** Nilai posisi default bawaan seluruh elemen HTML adalah...  
A. `position: static` | B. `position: relative` | C. `position: absolute` | D. `position: fixed`

**Soal 2:** Jenis posisi yang mengunci elemen tetap berada di koordinat layar monitor dan TIDAK ikut bergerak saat di-scroll dinamakan...  
A. `position: fixed` | B. `position: static` | C. `position: relative` | D. `position: flex`

**Soal 3:** Agar elemen anak ber-`position: absolute` melayang secara presisi di dalam kotak induknya, maka kotak induk WAJIB diberi properti...  
A. `position: relative` | B. `position: static` | C. `display: none` | D. `float: left`

**Soal 4:** Jenis posisi yang membuat navbar menempel di bagian atas layar saat pengguna melakukan scroll ke bawah adalah...  
A. `position: sticky; top: 0;` | B. `position: static` | C. `position: bottom` | D. `position: absolute`

**Soal 5:** Properti CSS yang digunakan untuk mengatur urutan tumpukan depan-belakang elemen yang melayang dinamakan...  
A. `z-index` | B. `order` | C. `stack-level` | D. `layer`

**Soal 6:** Koordinat yang digunakan untuk mengatur jarak posisi elemen melayang di CSS adalah...  
A. `top`, `bottom`, `left`, `right` | B. `x`, `y`, `z` | C. `width`, `height` | D. `padding`, `margin`

**Soal 7:** Tombol "Kembali ke Atas" di pojok kanan bawah layar yang terus muncul saat halaman di-scroll menggunakan posisi...  
A. `position: fixed; bottom: 20px; right: 20px;` | B. `position: static` | C. `position: relative` | D. `position: inline`

**Soal 8:** Apa yang terjadi jika dua elemen melayang memiliki `z-index: 1` dan `z-index: 10`?  
A. Elemen dengan `z-index: 10` akan tampil menutupi di atas elemen ber-`z-index: 1` | B. Elemen z-index 1 di atas | C. Keduanya hilang | D. Error

**Soal 9:** `position: absolute` mencabut elemen dari aliran dokumen normal, yang artinya...  
A. Elemen tidak lagi memakan ruang fisik di dalam aliran dokumen biasa | B. Elemen terhapus | C. Elemen jadi transparan | D. Elemen mengecil

**Soal 10:** Kapan properti `z-index` dapat bekerja?  
A. HANYA saat elemen memiliki `position` selain `static` (`relative`, `absolute`, `fixed`, `sticky`) | B. Selalu bekerja di semua elemen | C. Hanya di gambar | D. Hanya di link

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 4
1. **A (`position: static`)** — Default positioning.
2. **A (`position: fixed`)** — Screen locked position.
3. **A (`position: relative`)** — Relative parent anchor for absolute child.
4. **A (`position: sticky; top: 0;`)** — Scroll-matched sticky position.
5. **A (`z-index`)** — Stacking order property.
6. **A (`top`, `bottom`, `left`, `right`)** — Position offset properties.
7. **A (`position: fixed; bottom: 20px; right: 20px;`)** — Fixed widget placement.
8. **A (z-index 10 di atas z-index 1)** — Higher z-index stack priority.
9. **A (Elemen tidak memakan ruang fisik di aliran dokumen)** — Out-of-flow property.
10. **A (HANYA pada elemen non-static)** — Z-index requirement rule.

---

### 🏋️ Latihan & Mini Project Modul 4
- **Latihan**: Buat `.navbar` dengan `position: sticky; top: 0`.
- **Mini Project**: Buat kartu produk dengan badge "TERLARIS" melayang di pojok kanan atas menggunakan `position: absolute`.

---
---

# 📖 MODUL 5: FLEXBOX LAYOUT DEEP DIVE (`justify-content`, `align-items`, `flex-wrap`)

### 1. Penjelasan Teori yang Mudah Dipahami
**Flexbox (Flexible Box Layout)** adalah modul tata letak CSS 1-Dimensi yang dirancang untuk merapikan, meratakan, dan membagi ruang antar elemen di dalam container secara otomatis (searah baris horisontal atau kolom vertikal).

### 2. Istilah Penting
- **`display: flex`**: Mengaktifkan modul Flexbox pada container induk.
- **Main Axis**: Sumbu utama sejajar (default: Horisontal).
- **Cross Axis**: Sumbu tegak lurus (default: Vertikal).
- **`justify-content`**: Mengatur perataan elemen sepanjang Sumbu Utama (*Main Axis*).
- **`align-items`**: Mengatur perataan elemen sepanjang Sumbu Tegak Lurus (*Cross Axis*).

### 3. Penjelasan Mendalam
Aturan Perataan Flexbox:
- **`justify-content`**:
  - `flex-start`: Rata kiri.
  - `center`: Rata tengah horisontal.
  - `flex-end`: Rata kanan.
  - `space-between`: Jarak rata di antara elemen (ujung ke ujung).
- **`align-items`**:
  - `stretch`: Menarik tinggi elemen memenuhi container.
  - `center`: Rata tengah vertikal.

Contoh Meratakan Elemen Tepat di Tengah Layar (Centering Magic):
```css
.container-tengah {
  display: flex;
  justify-content: center; /* Tengah Horisontal */
  align-items: center;     /* Tengah Vertikal */
  min-height: 100vh;
}
```

### 4. Contoh Sederhana
Navigasi Navbar Flexbox Rata Kiri-Kanan:
```css
.navbar {
  display: flex;
  justify-content: space-between; /* Logo di kiri, Menu di kanan */
  align-items: center;
}
```

### 5. Contoh Penggunaan di Dunia Nyata
Seluruh bar navigasi (Navbar), daftar card produk, dan tombol aksi di aplikasi web modern dibangun menggunakan Flexbox.

### 6. Best Practice
- Gunakan properti `gap: 16px` di dalam container `flex` untuk memberikan jarak otomatis antar anak elemen tanpa perlu `margin` manual.

### 7. Kesalahan yang Sering Dilakukan
- Lupa memasang `flex-wrap: wrap` pada container flex yang menampung banyak card. Akibatnya card akan tergepeng gepeng dipaksa muat dalam 1 baris di HP!

### 8. Tips
Gunakan `flex: 1` pada elemen anak agar elemen tersebut otomatis membesar mengisi sisa ruang kosong container.

### 9. Ringkasan
`display: flex` aktifkan flexbox. `justify-content` atur horisontal, `align-items` atur vertikal. Pakai `gap` untuk jarak.

---

### 📝 QUIZ MODUL 5 (10 Soal)

**Soal 1:** Properti CSS untuk mengaktifkan modul tata letak Flexbox pada container induk adalah...  
A. `display: flex` | B. `layout: flex` | C. `flex: enable` | D. `box: flex`

**Soal 2:** Properti Flexbox yang digunakan untuk mengatur perataan elemen sepanjang sumbu utama (*Main Axis* / Horisontal) adalah...  
A. `justify-content` | B. `align-items` | C. `flex-direction` | D. `gap`

**Soal 3:** Properti Flexbox yang digunakan untuk mengatur perataan elemen secara vertikal (*Cross Axis*) adalah...  
A. `align-items` | B. `justify-content` | C. `flex-wrap` | D. `order`

**Soal 4:** Nilai `justify-content` yang menempatkan elemen di ujung kiri dan ujung kanan secara otomatis dengan jarak seimbang adalah...  
A. `space-between` | B. `center` | C. `flex-start` | D. `space-around`

**Soal 5:** Kombinasi properti Flexbox untuk membuat konten tepat di tengah-tengah layar secara horisontal DAN vertikal adalah...  
A. `justify-content: center; align-items: center;` | B. `text-align: center;` | C. `margin: auto;` | D. `float: center;`

**Soal 6:** Properti Flexbox yang membuat elemen otomatis pindah ke baris baru jika lebar layar tidak mencukupi adalah...  
A. `flex-wrap: wrap` | B. `flex-direction: row` | C. `flex: 1` | D. `overflow: scroll`

**Soal 7:** Properti CSS modern yang digunakan untuk memberi jarak antar anak elemen di dalam container Flexbox tanpa margin adalah...  
A. `gap` | B. `space` | C. `padding-between` | D. `dist`

**Soal 8:** Properti `flex-direction: column` akan mengubah sumbu utama (*Main Axis*) Flexbox menjadi mengalir ke arah...  
A. Vertikal dari atas ke bawah | B. Horisontal kiri ke kanan | C. Miring | D. Terbalik

**Soal 9:** Nilai `flex: 1` pada elemen anak flexbox berarti...  
A. Elemen fleksibel mengambil seluruh sisa ruang kosong yang tersedia di dalam container | B. Elemen berlebar 1px | C. Elemen disembunyikan | D. Elemen kaku

**Soal 10:** Flexbox dirancang paling ideal untuk menangani tata letak dimensi berapa?  
A. Tata Letak 1-Dimensi (Baris ATAU Kolom) | B. Tata Letak 3D | C. 2-Dimensi | D. 4D

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 5
1. **A (`display: flex`)** — Enable Flexbox.
2. **A (`justify-content`)** — Main axis alignment.
3. **A (`align-items`)** — Cross axis alignment.
4. **A (`space-between`)** — Edge-to-edge distribution.
5. **A (`justify-content: center; align-items: center;`)** — Perfect centering pair.
6. **A (`flex-wrap: wrap`)** — Multi-line flex wrapping.
7. **A (`gap`)** — Flex/Grid gap spacing property.
8. **A (Vertikal dari atas ke bawah)** — Column flex direction.
9. **A (Elemen mengambil sisa ruang kosong)** — Flex grow factor.
10. **A (1-Dimensi: Baris ATAU Kolom)** — 1D layout module specification.

---

### 🏋️ Latihan & Mini Project Modul 5
- **Latihan**: Buat `.navbar` dengan `display: flex; justify-content: space-between; align-items: center;`.
- **Mini Project**: Buat 3 kartu produk yang rapi sejajar menggunakan Flexbox dan `gap: 20px`.

---
---

# 📖 MODUL 6: CSS GRID LAYOUT DEEP DIVE (`grid-template-columns`, `gap`, `grid-area`)

### 1. Penjelasan Teori yang Mudah Dipahami
Jika Flexbox adalah spesialis 1-Dimensi, maka **CSS Grid** adalah raja tata letak **2-Dimensi (Baris DAN Kolom sekaligus)**. 

CSS Grid memungkinkan Anda membuat tata letak grid kompleks (seperti layout dashboard, galeri foto, majalah) hanya dengan beberapa baris kode.

### 2. Istilah Penting
- **`display: grid`**: Mengaktifkan modul CSS Grid pada container induk.
- **`grid-template-columns`**: Menentukan jumlah dan lebar kolom.
- **`fr` (Fractional Unit)**: Satuan porsi pembagi ruang kosong di CSS Grid.
- **`repeat(auto-fit, minmax(...))`**: Rumus ajaib CSS Grid untuk layout responsive otomatis tanpa media query!

### 3. Penjelasan Mendalam
Pengaturan Kolom Grid:
- `grid-template-columns: 200px 1fr 200px;` -> 3 Kolom: Kolom kiri 200px, Kolom tengah fleksibel mengisi sisa ruang, Kolom kanan 200px.
- `grid-template-columns: repeat(3, 1fr);` -> 3 Kolom sama besar.

Rumus Grid Responsive Otomatis (Tanpa Media Query!):
```css
.grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
```

### 4. Contoh Sederhana
Layout Dashboard 3 Kolom:
```css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

### 5. Contoh Penggunaan di Dunia Nyata
Katalog Produk E-Commerce (Shopee / Tokopedia / KodeKu) menggunakan CSS Grid agar di layar laptop tampil 4 kolom, di tablet 2 kolom, dan di HP 1 kolom secara sangat simetris.

### 6. Best Practice
- Gunakan satuan `fr` (*Fractional Unit*) daripada persentase `%` saat membagi kolom CSS Grid.

### 7. Kesalahan yang Sering Dilakukan
- Menggunakan Flexbox secara dipaksa bersarang-sarang rumit untuk membuat layout galeri 2-Dimensi, padahal CSS Grid bisa menyelesaikannya dalam 2 baris kode.

### 8. Tips
Gunakan `grid-template-areas` jika ingin merancang layout halaman (Header, Sidebar, Main, Footer) dengan visual nama area yang sangat mudah dibaca.

### 9. Ringkasan
`display: grid` untuk layout 2D. `grid-template-columns: repeat(3, 1fr)` buat 3 kolom. Gunakan `gap` untuk jarak.

---

### 📝 QUIZ MODUL 6 (10 Soal)

**Soal 1:** Perbedaan utama antara Flexbox dan CSS Grid adalah...  
A. Flexbox dirancang untuk 1-Dimensi, sedangkan CSS Grid dirancang untuk 2-Dimensi (Baris & Kolom sekaligus) | B. Grid lebih lambat | C. Flexbox tidak punya gap | D. Sama saja

**Soal 2:** Properti CSS untuk mengaktifkan modul CSS Grid pada container adalah...  
A. `display: grid` | B. `layout: grid` | C. `grid: true` | D. `box: grid`

**Soal 3:** Satuan khusus CSS Grid yang mewakili porsi bagian dari sisa ruang kosong adalah...  
A. `fr` (Fractional Unit) | B. `px` | C. `rem` | D. `pt`

**Soal 4:** Aturan `grid-template-columns: repeat(4, 1fr);` akan menghasilkan...  
A. 4 Kolom dengan lebar sama besar | B. 1 Kolom berlebar 4px | C. 4 Baris | D. 16 Kolom

**Soal 5:** Rumus `repeat(auto-fit, minmax(250px, 1fr))` pada CSS Grid berguna untuk...  
A. Membuat layout grid responsive otomatis yang menyesuaikan jumlah kolom di layar HP/Desktop tanpa media query | B. Menghapus gambar | C. Mematikan grid | D. Membesarkan font

**Soal 6:** Properti yang digunakan untuk memberikan jarak antar sel kolom dan baris pada CSS Grid adalah...  
A. `gap` | B. `cell-padding` | C. `grid-margin` | D. `border-spacing`

**Soal 7:** Atribut CSS Grid untuk membuat satu item kartu membentang memakan 2 kolom sekaligus adalah...  
A. `grid-column: span 2;` | B. `colspan="2"` | C. `grid-width: 2` | D. `span: 2`

**Soal 8:** Fitur CSS Grid yang memungkinkan kita merancang tata letak berdasarkan peta area nama string (seperti `"header header" "sidebar main"`) dinamakan...  
A. `grid-template-areas` | B. `grid-map` | C. `grid-name` | D. `grid-layout`

**Soal 9:** Properti `grid-template-rows` digunakan untuk menentukan...  
A. Jumlah dan tinggi Baris grid | B. Jumlah Kolom | C. Jarak antar sel | D. Warna grid

**Soal 10:** Di Chrome DevTools, saat kita memilih elemen `display: grid`, browser menampilkan alat bantu visual berupa...  
A. Garis penunjuk jaringan Grid (*Grid Overlay Inspector*) | B. Terminal | C. Gambar 3D | D. Video

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 6
1. **A (Flexbox 1D vs CSS Grid 2D)** — Core distinction.
2. **A (`display: grid`)** — Enable CSS Grid.
3. **A (`fr`)** — Fractional unit.
4. **A (4 Kolom dengan lebar sama besar)** — Repeat 4 equal columns.
5. **A (Membuat layout grid responsive otomatis tanpa media query)** — Auto-fit minmax responsiveness.
6. **A (`gap`)** — Grid gap spacing.
7. **A (`grid-column: span 2;`)** — Grid column span.
8. **A (`grid-template-areas`)** — Template areas mapping.
9. **A (Jumlah dan tinggi Baris grid)** — Grid template rows.
10. **A (Garis penunjuk jaringan Grid Overlay Inspector)** — DevTools grid overlay.

---

### 🏋️ Latihan & Mini Project Modul 6
- **Latihan**: Buat `.grid-container` 3 kolom dengan `grid-template-columns: repeat(3, 1fr)` dan `gap: 20px`.
- **Mini Project**: Terapkan rumus `repeat(auto-fit, minmax(280px, 1fr))` pada katalog produk Anda.

---
---

# 📖 MODUL 7: RESPONSIVE WEB DESIGN & MEDIA QUERIES

### 1. Penjelasan Teori yang Mudah Dipahami
Saat ini web dibuka di berbagai ukuran layar: Smartphone (375px), Tablet (768px), Laptop (1024px), hingga Monitor 4K.

**Responsive Web Design (RWD)** adalah teknik merancang web agar otomatis beradaptasi mengubah tata letak tampilannya sesuai ukuran layar perangkat yang digunakan pengguna.

### 2. Istilah Penting
- **Responsive Design**: Desain web fleksibel multi-perangkat.
- **Media Queries (`@media`)**: Aturan CSS khusus yang aktif hanya pada ukuran layar tertentu.
- **Breakpoints**: Titik ambang ukuran layar di mana tata letak web berubah (misal: 768px).
- **Mobile-First Approach**: Strategi mendesain CSS untuk layar HP terlebih dahulu, lalu menambahkan style untuk layar besar.

### 3. Penjelasan Mendalam
Standard Ambang Breakpoints Industri:
- **Mobile (Default)**: `< 640px` (1 Kolom).
- **Tablet (`md`)**: `≥ 768px` (2 Kolom).
- **Desktop (`lg`)**: `≥ 1024px` (3 - 4 Kolom).

Sintaks Media Queries (Mobile-First):
```css
/* Styling Default (Mobile HP) */
.card-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 Kolom di HP */
  gap: 16px;
}

/* Tablet (Layar >= 768px) */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 Kolom di Tablet */
  }
}

/* Desktop (Layar >= 1024px) */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 Kolom di Desktop */
  }
}
```

### 4. Contoh Sederhana
Menyembunyikan Menu Hamburger di Desktop:
```css
.hamburger-menu {
  display: block; /* Tampil di HP */
}

@media (min-width: 1024px) {
  .hamburger-menu {
    display: none; /* Sembunyikan di Desktop */
  }
}
```

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda membuka KodeKu.id di HP, menu navigasi berubah menjadi tombol Hamburger `☰`. Saat dibuka di Laptop, menu tersebut berubah menjadi deretan link horizontal yang rapi.

### 6. Best Practice
- Gunakan pendekatan **Mobile-First (`min-width`)** daripada Desktop-First (`max-width`) karena penulisan kodenya jauh lebih bersih dan efisien di era mobile saat ini.

### 7. Kesalahan yang Sering Dilakukan
- Lupa memasang tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` di HTML. Tanpa tag ini, Media Queries CSS **TIDAK AKAN BEKERJA** di HP!

### 8. Tips
Gunakan **Device Mode** di Chrome DevTools (`Ctrl + Shift + M`) untuk menguji tampilan web Anda di berbagai jenis HP (iPhone, Samsung Galaxy, iPad) secara instant.

### 9. Ringkasan
Responsive Design menyesuaikan layar. Gunakan `@media (min-width: 768px)` (Mobile-First) untuk mengubah layout di layar lebar.

---

### 📝 QUIZ MODUL 7 (10 Soal)

**Soal 1:** Teknik merancang web agar tampilan antarmukanya dapat menyesuaikan berbagai ukuran layar perangkat dinamakan...  
A. Responsive Web Design (RWD) | B. Flat Design | C. Static Design | D. Native Design

**Soal 2:** Fitur CSS yang digunakan untuk menerapkan aturan style khusus berdasarkan kondisi ukuran layar adalah...  
A. `@media` Queries | B. `@import` | C. `@keyframes` | D. `@font-face`

**Soal 3:** Batas ukuran layar tertentu di mana tata letak web berubah dinamakan...  
A. Breakpoints | B. Stop-points | C. Cut-points | D. Endpoints

**Soal 4:** Strategi mendesain CSS dasar untuk layar Smartphone (HP) terlebih dahulu, baru kemudian menambahkan breakpoint layar besar dinamakan...  
A. Mobile-First Approach | B. Desktop-First | C. Tablet-First | D. Code-First

**Soal 5:** Penulisan Media Query `min-width: 768px` berarti aturan CSS di dalamnya akan aktif pada layar...  
A. Dengan lebar minimal 768px ke atas (Tablet & Desktop) | B. Layar di bawah 768px | C. Layar 768px saja | D. Layar HP kecil

**Soal 6:** Mengapa tag `<meta name="viewport" ...>` sangat vital untuk Responsive Web Design?  
A. Memberi tahu browser seluler untuk menyesuaikan skala viewport dengan lebar fisik layar perangkat | B. Membesarkan gambar | C. Mematikan CSS | D. Menghapus teks

**Soal 7:** Shortcut keyboard di Chrome DevTools untuk membuka simulator pengujian tampilan perangkat seluler (*Device Toolbar*) adalah...  
A. `Ctrl + Shift + M` (atau `Cmd + Shift + M`) | B. `Ctrl + P` | C. `F11` | D. `Alt + Tab`

**Soal 8:** Berapakah ukuran breakpoint standar industri yang umumnya menandakan layar Tablet?  
A. `768px` | B. `200px` | C. `4000px` | D. `50px`

**Soal 9:** Berapakah ukuran breakpoint standar industri yang umumnya menandakan layar Laptop/Desktop?  
A. `1024px` | B. `320px` | C. `500px` | D. `100px`

**Soal 10:** Bagaimana cara menyembunyikan elemen sidebar di layar HP seluler?  
A. Setel `.sidebar { display: none; }` pada styling mobile, lalu setel `display: block;` di `@media (min-width: 1024px)` | B. Menghapus file | C. Mengubah warna | D. Mengunci HP

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 7
1. **A (Responsive Web Design - RWD)** — RWD definition.
2. **A (`@media` Queries)** — CSS Media query feature.
3. **A (Breakpoints)** — Responsive breakpoint term.
4. **A (Mobile-First Approach)** — Mobile-first strategy.
5. **A (Lebar minimal 768px ke atas)** — Min-width media query logic.
6. **A (Memberi tahu browser seluler menyesuaikan skala viewport)** — Viewport meta importance.
7. **A (`Ctrl + Shift + M`)** — Chrome Device Toolbar shortcut.
8. **A (`768px`)** — Standard tablet breakpoint.
9. **A (`1024px`)** — Standard desktop breakpoint.
10. **A (Setel `display: none` di mobile, `display: block` di desktop)** — Responsive toggle pattern.

---

### 🏋️ Latihan & Mini Project Modul 7
- **Latihan**: Buat media query `@media (min-width: 768px)` untuk mengubah warna background dari biru ke hitam.
- **Mini Project**: Buat grid produk 1 kolom di HP dan 3 kolom di Desktop menggunakan Media Queries Mobile-First.

---
---

# 📖 MODUL 8: CSS TRANSITIONS, ANIMATIONS & KEYFRAMES

### 1. Penjelasan Teori yang Mudah Dipahami
Web yang hidup dan menyenangkan digunakan dilengkapi **Mikro-Animasi**. 

CSS menyediakan properti **Transition** untuk efek perubahan halus saat tombol di-hover, serta **Keyframes Animation** untuk animasi bergerak kompleks secara berulang.

### 2. Istilah Penting
- **`transition`**: Mengatur perubahan properti CSS secara halus dalam durasi waktu tertentu.
- **`hover`**: Pseudo-class saat kursor mouse berada di atas elemen.
- **`transform`**: Mengubah posisi, skala ukuran, atau rotasi elemen (`scale`, `translate`, `rotate`).
- **`@keyframes`**: Aturan yang mendefinisikan langkah-langkah bingkai animasi.

### 3. Penjelasan Mendalam
Efek Hover Tombol Halus (Transition & Transform):
```css
.btn-modern {
  background-color: #2563eb;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  /* Transisi halus selama 0.3 detik */
  transition: all 0.3s ease-in-out;
}

.btn-modern:hover {
  background-color: #1d4ed8;
  transform: translateY(-3px); /* Terangkat naik 3px saat di-hover */
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
```

Animasi Loading Spinner Berputar (`@keyframes`):
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  /* Jalankan animasi spin selama 1 detik terus menerus */
  animation: spin 1s linear infinite;
}
```

### 4. Contoh Sederhana
Efek Perbesar Gambar saat Hover:
```css
.card-img {
  transition: transform 0.4s ease;
}
.card-img:hover {
  transform: scale(1.05); /* Membesar 5% */
}
```

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda mengarahkan kursor ke tombol "Daftar Sekarang" di KodeKu.id, tombol bergeser naik secara halus dan memancarkan bayangan glow neon.

### 6. Best Practice
- Selalu gunakan properti `transform` (`translate`, `scale`) dan `opacity` untuk animasi karena diproses langsung oleh GPU hardware (performa 60 FPS ultra-smooth).

### 7. Kesalahan yang Sering Dilakukan
- Melakukan animasi pada properti `width`, `height`, atau `margin` yang menyebabkan reflow layout dan membuat browser patah-patah (*lag*).

### 8. Tips
Gunakan `will-change: transform` pada elemen animasi kompleks untuk memberi tahu GPU browser agar menyiapkan akselerasi hardware.

### 9. Ringkasan
`transition` untuk perhalus hover (0.3s). `transform` untuk scale/translate. `@keyframes` & `animation` untuk animasi kompleks.

---

### 📝 QUIZ MODUL 8 (10 Soal)

**Soal 1:** Properti CSS yang digunakan untuk membuat perubahan nilai properti berlangsung secara halus dalam durasi waktu tertentu dinamakan...  
A. `transition` | B. `animation` | C. `transform` | D. `change`

**Soal 2:** Pseudo-class CSS yang aktif saat kursor mouse berada tepat di atas sebuah elemen adalah...  
A. `:hover` | B. `:active` | C. `:focus` | D. `:visited`

**Soal 3:** Properti CSS yang digunakan untuk menggeser, memutar, atau memperbesar skala elemen adalah...  
A. `transform` | B. `transition` | C. `translate` | D. `move`

**Soal 4:** Efek `transform: translateY(-5px);` akan membuat elemen...  
A. Terangkat naik ke atas sejauh 5 pixel | B. Geser ke kanan | C. Berputar 5 derajat | D. Membesar 5 kali

**Soal 5:** Efek `transform: scale(1.1);` akan membuat elemen...  
A. Membesar ukurannya 10% (1.1x) | B. Mengecil | C. Transparan | D. Berputar

**Soal 6:** Aturan CSS yang digunakan untuk mendefinisikan tahapan bingkai animasi berulang dinamakan...  
A. `@keyframes` | B. `@frames` | C. `@animate` | D. `@motion`

**Soal 7:** Nilai properti `animation-iteration-count: infinite;` akan membuat animasi berjalan...  
A. Terus-menerus tanpa henti secara berulang | B. Hanya 1 kali | C. 10 kali | D. Berhenti otomatis

**Soal 8:** Mengapa menganimasi properti `transform` dan `opacity` jauh lebih disukai dibanding `width` atau `left`?  
A. Karena diproses langsung oleh akselerasi GPU hardware sehingga menghasilkan animasi ultra-smooth 60 FPS tanpa lag | B. Karena lebih murah | C. Karena file kecil | D. Dilarang oleh Windows

**Soal 9:** Fungsi timing transisi `ease-in-out` berarti gerakan animasi dimulai dengan...  
A. Lambat di awal, cepat di tengah, dan melambat kembali di akhir | B. Kecepatan konstan kaku | C. Tiba-tiba meloncat | D. Berhenti di tengah

**Soal 10:** Properti `opacity: 0` pada CSS membuat elemen menjadi...  
A. Transparan tidak terlihat sama sekali (100% transparan) | B. Hitam pekat | C. Putih | D. Terhapus

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 8
1. **A (`transition`)** — CSS Transition property.
2. **A (`:hover`)** — Hover pseudo-class.
3. **A (`transform`)** — Transform matrix property.
4. **A (Terangkat naik ke atas 5px)** — Negative Y translate.
5. **A (Membesar ukurannya 10%)** — Scale up factor.
6. **A (`@keyframes`)** — Keyframes animation definition.
7. **A (Terus-menerus tanpa henti)** — Infinite iteration count.
8. **A (Diproses langsung oleh GPU hardware 60 FPS)** — Hardware acceleration best practice.
9. **A (Lambat di awal, melambat di akhir)** — Ease-in-out timing function.
10. **A (Transparan 100%)** — Full transparency opacity.

---

### 🏋️ Latihan & Mini Project Modul 8
- **Latihan**: Buat tombol dengan `transition: all 0.3s` dan `transform: scale(1.05)` saat hover.
- **Mini Project**: Buat animasi loading spinner berputar 360 derajat memakai `@keyframes`.

---
---

# 📖 MODUL 9: PENGENALAN TAILWIND CSS UTILITY-FIRST FRAMEWORK

### 1. Penjelasan Teori yang Mudah Dipahami
Menulis ribuan baris CSS manual di file `style.css` terpisah sering kali melelahkan. 

**Tailwind CSS** adalah framework CSS **Utility-First** paling populer di dunia saat ini. Dibanding membuat nama class buatan (`.btn-primary`), Tailwind menyediakan ribuan class utilitas siap pakai (seperti `flex`, `bg-blue-600`, `text-white`, `p-4`, `rounded-lg`) yang dituliskan **langsung di atribut class HTML**.

### 2. Istilah Penting
- **Tailwind CSS**: Utility-first CSS framework standar industri 2026.
- **Utility Class**: Class CSSatomik satu tugas (contoh: `p-4` = `padding: 1rem`).
- **JIT (Just-In-Time) Compiler**: Engine Tailwind yang mengekstrak dan mengompilasi CSS murni ultra-kecil secara otomatis.

### 3. Penjelasan Mendalam
Perbandingan CSS Manual vs Tailwind CSS:
```html
<!-- 1. CSS MANUAL (Butuh file style.css terpisah) -->
<button class="my-custom-btn">Daftar</button>

<!-- 2. TAILWIND CSS (Langsung di HTML, tanpa buat file CSS baru!) -->
<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition">
  Daftar Sekarang
</button>
```

Kamus Utilitas Utama Tailwind CSS:
- **Display**: `flex`, `grid`, `hidden`, `block`
- **Spacing (Padding/Margin)**: `p-4` (padding 1rem), `px-6` (padding horizontal), `mt-2` (margin top)
- **Sizing**: `w-full` (width 100%), `h-12`, `max-w-md`
- **Colors**: `bg-slate-900`, `text-blue-500`, `border-gray-200`
- **Typography**: `text-xl`, `font-bold`, `tracking-wide`
- **Borders & Shadows**: `rounded-xl`, `shadow-lg`, `border`

### 4. Contoh Sederhana
Kartu Produk Tailwind CSS dalam 1 Baris HTML:
```html
<div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl max-w-sm">
  <h3 class="text-xl font-bold text-white mb-2">Master Next.js 15</h3>
  <p class="text-slate-400 text-sm mb-4">Belajar Fullstack web dev modern.</p>
  <button class="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg font-medium">Beli Rp 199k</button>
</div>
```

### 5. Contoh Penggunaan di Dunia Nyata
Perusahaan raksasa seperti OpenAI (ChatGPT), Vercel, Shopify, dan KodeKu.id membangun seluruh antarmuka webnya menggunakan **Tailwind CSS** karena pengembangan UI menjadi **10x lebih cepat**!

### 6. Best Practice
- Gunakan ekstensi VS Code **Tailwind CSS IntelliSense** untuk mendapatkan fitur auto-complete class Tailwind saat mengetik.

### 7. Kesalahan yang Sering Dilakukan
- Takut kode HTML terlihat panjang oleh class utilitas. Jangan khawatir, Tailwind JIT compiler akan membuang semua class tidak terpakai sehingga ukuran bundle CSS akhir Anda menjadi super kecil (< 10KB)!

### 8. Tips
Gunakan prefiks `sm:`, `md:`, `lg:` untuk responsive design instant di Tailwind (misal: `grid-cols-1 md:grid-cols-3`).

### 9. Ringkasan
Tailwind CSS menyediakan class utilitas langsung di HTML (`bg-blue-500`, `flex`, `p-4`). Mempercepat pembuatan UI 10x lipat.

---

### 📝 QUIZ MODUL 9 (10 Soal)

**Soal 1:** Pengertian utama dari filosofi **Utility-First** pada Tailwind CSS adalah...  
A. Menyediakan ribuan class utilitas kecil satu tugas yang dipasang langsung di atribut class HTML tanpa perlu membuat file CSS kustom terpisah | B. Menghapus HTML | C. Menggunakan ID | D. Membuat file CSS raksasa

**Soal 2:** Class utilitas Tailwind untuk mengatur background berwarna biru 600 adalah...  
A. `bg-blue-600` | B. `color-blue` | C. `background-blue` | D. `blue-bg`

**Soal 3:** Class utilitas Tailwind `p-4` berarti memberikan...  
A. Padding 1rem (16px) di seluruh sisi | B. Position 4 | C. Page 4 | D. Pointer 4

**Soal 4:** Class utilitas Tailwind untuk membuat sudut elemen menjadi melengkung halus (*border-radius*) adalah...  
A. `rounded-lg` atau `rounded-xl` | B. `border-corner` | C. `radius-full` | D. `curve-md`

**Soal 5:** Class utilitas Tailwind `w-full` berarti memberikan lebar...  
A. Lebar 100% (*width: 100%*) | B. Lebar 10px | C. Lebar setengah | D. Lebar 0

**Soal 6:** Bagaimana cara memberikan efek warna saat kursor di-hover pada tombol menggunakan Tailwind CSS?  
A. `hover:bg-blue-700` | B. `:hover(blue)` | C. `onhover-blue` | D. `mouse:blue`

**Soal 7:** Class utilitas Tailwind `flex items-center justify-between` akan menghasilkan layout...  
A. Flexbox dengan perataan vertikal tengah dan jarak rata di antara ujung elemen | B. Grid 4 kolom | C. Teks miring | D. Gambar hilang

**Soal 8:** Ekstensi editor VS Code yang WAJIB diinstal untuk mendapatkan auto-complete class Tailwind saat mengetik adalah...  
A. Tailwind CSS IntelliSense | B. HTML Snippet | C. Python Extension | D. Live Server

**Soal 9:** Mengapa ukuran file produksi CSS dari Tailwind bisa sangat kecil (< 10KB)?  
A. Karena JIT Compiler Tailwind otomatis membuang semua class yang tidak digunakan dalam kode HTML | B. Karena gambar dihapus | C. Karena HTML dipadatkan | D. Dilarang oleh Chrome

**Soal 10:** Class utilitas Tailwind `text-2xl font-bold text-white` berarti...  
A. Teks berukuran besar (2xl), bercetak tebal (*bold*), dan berwarna putih | B. Teks kecil | C. Teks merah | D. Teks miring

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 9
1. **A (Menyediakan class utilitas kecil langsung di HTML)** — Utility-first philosophy.
2. **A (`bg-blue-600`)** — Tailwind background color class.
3. **A (Padding 1rem di seluruh sisi)** — Tailwind padding 4 (16px).
4. **A (`rounded-lg` atau `rounded-xl`)** — Tailwind border radius classes.
5. **A (Lebar 100%)** — Width full utility.
6. **A (`hover:bg-blue-700`)** — Hover state modifier.
7. **A (Flexbox perataan vertikal tengah & space-between)** — Flex layout utilities.
8. **A (Tailwind CSS IntelliSense)** — Essential VS Code extension.
9. **A (JIT Compiler membuang class yang tidak digunakan)** — Purging unused CSS.
10. **A (Teks besar, tebal, dan berwarna putih)** — Typography utility combo.

---

### 🏋️ Latihan & Mini Project Modul 9
- **Latihan**: Instal Tailwind CSS via CDN `<script src="https://cdn.tailwindcss.com"></script>` di HTML Anda.
- **Mini Project**: Buat tombol `bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl` dengan Tailwind.

---
---

# 📖 MODUL 10: CUSTOM CONFIG TAILWIND CSS & DARK MODE THEME SETUP

### 1. Penjelasan Teori yang Mudah Dipahami
Setiap brand memiliki identitas warna dan font sendiri. 

Tailwind CSS menyediakan berkas konfigurasi **`tailwind.config.js`** untuk menyesuaikan tema kustom (seperti warna brand KodeKu, font khusus, dan mengaktifkan **Dark Mode** berbasis class).

### 2. Istilah Penting
- **`tailwind.config.js`**: File konfigurasi utama Tailwind CSS.
- **Theme Extension (`theme.extend`)**: Menambahkan warna, font, atau spacing kustom tanpa merusak utilitas bawaan.
- **Dark Mode (`darkMode: 'class'`)**: Fitur pengubah tema gelap dengan menambahkan class `dark` pada tag `<html>`.

### 3. Penjelasan Mendalam
Pengaturan `tailwind.config.js` Kustom & Dark Mode:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Mengaktifkan Dark Mode berbasis Class
  content: ["./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6366f1', // Warna ungu indigo kustom KodeKu
          dark: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
```

Penggunaan Class Dark Mode di HTML:
```html
<!-- Saat tag <html> memiliki class="dark", styling gelap otomatis aktif! -->
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-6 transition-colors">
  <h2 class="text-2xl font-bold">Modul Belajar Dark Mode</h2>
  <p class="text-slate-600 dark:text-slate-400">Tampilan ini adem di mata saat malam hari.</p>
</div>
```

### 4. Contoh Sederhana
Tombol Switch Toggle Dark Mode dengan JavaScript:
```javascript
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
```

### 5. Contoh Penggunaan di Dunia Nyata
Platform KodeKu.id menggunakan `darkMode: 'class'` pada Tailwind CSS sehingga siswa dapat mengklik tombol "Mode Gelap" untuk kenyamanan membaca modul teks di malam hari.

### 6. Best Practice
- Selalu tambahkan `transition-colors duration-300` pada container utama agar perubahan warna saat switch Dark Mode terasa halus dan lembut.

### 7. Kesalahan yang Sering Dilakukan
- Lupa memasang prefiks `dark:` pada warna teks saat membuat background gelap (`dark:bg-slate-900`). Akibatnya teks menjadi hitam di atas background hitam!

### 8. Tips
Simpan preferensi tema pilihan user (Light/Dark) ke `localStorage.setItem('theme', 'dark')` agar saat halaman di-refresh, tema tidak kembali ke awal.

### 9. Ringkasan
Edit `tailwind.config.js` di `theme.extend` untuk warna brand. Aktifkan `darkMode: 'class'` dan gunakan prefiks `dark:bg-slate-900`.

---

### 📝 QUIZ MODUL 10 (10 Soal)

**Soal 1:** Nama file berkas konfigurasi utama untuk menyesuaikan tema dan warna kustom pada Tailwind CSS adalah...  
A. `tailwind.config.js` | B. `style.config.json` | C. `theme.css` | D. `config.html`

**Soal 2:** Bagian di dalam `tailwind.config.js` tempat menambahkan warna dan font kustom TANPA menghapus kelas utilitas bawaan adalah...  
A. `theme.extend` | B. `theme.replace` | C. `colors.clear` | D. `plugins`

**Soal 3:** Opsi konfigurasi untuk mengaktifkan fitur Dark Mode berbasis sakelar class di Tailwind adalah...  
A. `darkMode: 'class'` | B. `darkMode: true` | C. `theme: 'dark'` | D. `colorMode: 'night'`

**Soal 4:** Prefiks utilitas Tailwind yang digunakan untuk memberikan warna khusus saat Mode Gelap (*Dark Mode*) aktif adalah...  
A. `dark:` (contoh: `dark:bg-slate-900`) | B. `night:` | C. `black:` | D. `darkmode:`

**Soal 5:** Kode JavaScript untuk menyalakan/matikan class `dark` pada tag `<html>` adalah...  
A. `document.documentElement.classList.toggle('dark')` | B. `document.body.dark()` | C. `window.setDark()` | D. `theme.dark()`

**Soal 6:** Mengapa kita menyimpan preferensi tema pilihan pengguna ke `localStorage`?  
A. Agar pilihan tema (Dark/Light) pengguna tetap tersimpan dan tidak reset saat halaman di-refresh | B. Membesarkan RAM | C. Menghapus cookie | D. Mencegah virus

**Soal 7:** Class utilitas Tailwind `transition-colors duration-300` berguna untuk...  
A. Membuat animasi perubahan warna tema (Dark/Light Mode) berlangsung secara halus selama 300 milidetik | B. Mematikan warna | C. Mengubah font | D. Menghapus teks

**Soal 8:** Apa yang terjadi jika kita menulis `class="bg-white dark:bg-slate-900"`?  
A. Background berwarna putih pada mode terang, dan otomatis berubah menjadi biru slate gelap pada mode gelap | B. Background selalu merah | C. Error | D. Gambar hilang

**Soal 9:** Di bagian manakah tempat kita mendefinisikan nama font kustom bawaan seperti `'Plus Jakarta Sans'` di Tailwind Config?  
A. `theme.extend.fontFamily` | B. `plugins` | C. `colors` | D. `content`

**Soal 10:** Atribut `content` pada `tailwind.config.js` berfungsi untuk...  
A. Menentukan jalur file HTML/JS tempat Tailwind harus memindai (*scan*) penggunaan class utilitas | B. Menyimpan teks | C. Menghapus file | D. Menutup server

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 10
1. **A (`tailwind.config.js`)** — Tailwind config file name.
2. **A (`theme.extend`)** — Safely extend theme configuration.
3. **A (`darkMode: 'class'`)** — Class-based dark mode setting.
4. **A (`dark:`)** — Dark mode variant prefix.
5. **A (`document.documentElement.classList.toggle('dark')`)** — JS toggle dark class on html root.
6. **A (Agar pilihan tema pengguna tetap tersimpan saat refresh)** — LocalStorage theme persistence.
7. **A (Membuat animasi perubahan warna berlangsung halus 300ms)** — Smooth color transition.
8. **A (Putih di mode terang, slate gelap di mode gelap)** — Responsive dark mode bg logic.
9. **A (`theme.extend.fontFamily`)** — Custom font configuration option.
10. **A (Menentukan jalur file tempat Tailwind memindai class)** — Content paths array for JIT purging.

---

### 🏋️ Latihan & Mini Project Modul 10
- **Latihan**: Tambahkan warna brand kustom `brand-indigo: '#4f46e5'` di `tailwind.config.js`.
- **Mini Project**: Buat sakelar tombol Toggle Dark Mode dengan atribut `dark:bg-slate-900`.

---
---

# 📖 MODUL 11: MINI PROJECT — MEMBANGUN LANDING PAGE E-COMMERCE RESPONSIVE DENGAN TAILWIND CSS

### 1. Deskripsi Mini Project
Pada modul penutup Kelas 6 ini, Anda akan membangun sebuah **Landing Page E-Commerce Kategori Kursus IT Responsive dengan Tailwind CSS** lengkap dengan Navbar Sticky, Hero Section, Cards Grid Responsive, Dark Mode Toggle, dan Footer.

### 2. Tujuan Mini Project
Mengintegrasikan seluruh pemahaman dari Modul 1-10 (CSS Selectors, Typography, Box Model, Positioning, Flexbox, CSS Grid, Responsive Breakpoints, Transitions, dan Tailwind CSS).

### 3. Langkah-Langkah Pembuatan

#### Kode Lengkap (`landing.html`):

```html
<!DOCTYPE html>
<html lang="id" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KodeKu.id — Katalis Karir IT & AI 2026</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              500: '#6366f1',
              600: '#4f46e5',
            }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans">

  <!-- 1. STICKY NAVBAR -->
  <nav class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="bg-brand-500 text-white font-bold px-3 py-1 rounded-lg text-xl">K</div>
        <span class="text-xl font-bold tracking-tight">KodeKu.id</span>
      </div>

      <!-- Links Navigasi Desktop -->
      <div class="hidden md:flex items-center gap-8 font-medium text-sm">
        <a href="#home" class="hover:text-brand-500 transition">Home</a>
        <a href="#courses" class="hover:text-brand-500 transition">Katalog Kelas</a>
        <a href="#features" class="hover:text-brand-500 transition">Keunggulan</a>
      </div>

      <!-- Buttons & Dark Mode Toggle -->
      <div class="flex items-center gap-3">
        <button onclick="document.documentElement.classList.toggle('dark')" class="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
          🌙 / ☀️
        </button>
        <a href="#courses" class="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-brand-500/30 transition transform hover:-translate-y-0.5">
          Mulai Belajar
        </a>
      </div>
    </div>
  </nav>

  <!-- 2. HERO SECTION -->
  <section id="home" class="max-w-7xl mx-auto px-6 py-20 text-center">
    <span class="inline-block bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
      ⚡ REVOLUSI BELAJAR CODING & AI 2026
    </span>
    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
      Kuasai Skill Koding & AI.<br/>
      <span class="bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">
        Dapatkan Karir Developer Impian.
      </span>
    </h1>
    <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
      Modul pembelajaran berbasis teks interaktif terstruktur, live sandbox editor di browser, dan sertifikat resmi terverifikasi.
    </p>
    <div class="flex justify-center gap-4 flex-wrap">
      <a href="#courses" class="bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-xl shadow-brand-500/25 transition">
        Lihat 33 Kelas Terstruktur →
      </a>
    </div>
  </section>

  <!-- 3. KATALOG KELAS GRID RESPONSIVE -->
  <section id="courses" class="max-w-7xl mx-auto px-6 py-12">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h2 class="text-2xl md:text-3xl font-bold">Katalog Kelas Populer</h2>
        <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Dipilih oleh 50.000+ siswa di seluruh Indonesia.</p>
      </div>
    </div>

    <!-- GRID 1 Kolom di HP, 2 di Tablet, 3 di Desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <!-- CARD 1 -->
      <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center mb-4">
            <span class="bg-emerald-500/10 text-emerald-500 text-xs font-bold px-3 py-1 rounded-md">LEVEL 1 — PEMULA</span>
            <span class="text-xs text-slate-400">⏱ 16 Jam</span>
          </div>
          <h3 class="text-xl font-bold mb-2">CSS3, Modern Layouts & Tailwind CSS</h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
            Menguasai Flexbox, CSS Grid, Responsive Media Queries, hingga Tailwind CSS framework.
          </p>
        </div>
        <div class="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
          <div>
            <div class="text-xs text-slate-400">Investasi Skill</div>
            <div class="text-lg font-extrabold text-brand-500">Rp 149.000</div>
          </div>
          <button class="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition">
            Daftar Kelas
          </button>
        </div>
      </div>

      <!-- CARD 2 -->
      <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center mb-4">
            <span class="bg-amber-500/10 text-amber-500 text-xs font-bold px-3 py-1 rounded-md">LEVEL 2 — MENENGAH</span>
            <span class="text-xs text-slate-400">⏱ 28 Jam</span>
          </div>
          <h3 class="text-xl font-bold mb-2">Next.js App Router & Server Actions</h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
            Membangun web app Fullstack Next.js 15, SSR, SSG, Server Components, dan Prisma ORM.
          </p>
        </div>
        <div class="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
          <div>
            <div class="text-xs text-slate-400">Investasi Skill</div>
            <div class="text-lg font-extrabold text-brand-500">Rp 249.000</div>
          </div>
          <button class="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition">
            Daftar Kelas
          </button>
        </div>
      </div>

      <!-- CARD 3 -->
      <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center mb-4">
            <span class="bg-rose-500/10 text-rose-500 text-xs font-bold px-3 py-1 rounded-md">LEVEL 3 — MAHIR</span>
            <span class="text-xs text-slate-400">⏱ 28 Jam</span>
          </div>
          <h3 class="text-xl font-bold mb-2">Autonomous AI Agents dengan LangChain</h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
            Merancang AI Agent otonom yang bisa merencanakan tugas, mengeksekusi kode, dan riset mandiri.
          </p>
        </div>
        <div class="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
          <div>
            <div class="text-xs text-slate-400">Investasi Skill</div>
            <div class="text-lg font-extrabold text-brand-500">Rp 349.000</div>
          </div>
          <button class="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition">
            Daftar Kelas
          </button>
        </div>
      </div>

    </div>
  </section>

  <!-- 4. FOOTER -->
  <footer class="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
    <p>© 2026 KodeKu.id Platform Edukasi Programming & AI Modern. All rights reserved.</p>
  </footer>

</body>
</html>
```

---

### 📝 QUIZ EVALUASI KELAS 6 (10 Soal)

**Soal 1:** Class Tailwind `sticky top-0 z-50` pada navbar berfungsi untuk...  
A. Menempelkan navbar di paling atas layar saat di-scroll dengan tumpukan terdepan | B. Menghapus navbar | C. Mematikan warna | D. Menghapus gambar

**Soal 2:** Class Tailwind `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` akan menghasilkan layout...  
A. Grid 1 kolom di HP, 2 kolom di Tablet (md), dan 3 kolom di Desktop (lg) | B. 1 Kolom terus | C. 10 Kolom | D. Error

**Soal 3:** Class Tailwind `bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent` digunakan untuk membuat...  
A. Efek teks gradasi warna modern dari ungu indigo ke cyan | B. Gambar pecah | C. Teks miring | D. Background hitam

**Soal 4:** Class Tailwind `backdrop-blur-md` pada navbar transparan berfungsi untuk memberikan efek visual...  
A. Kaca buram (*Glassmorphism*) pada background di belakang navbar | B. Bayangan tebal | C. Teks tebal | D. Garis bawah

**Soal 5:** Class Tailwind `hover:-translate-y-1` pada tombol/card memberikan efek mikro-animasi...  
A. Terangkat naik sedikit ke atas sejauh 4px saat kursor di-hover | B. Membesar 2x | C. Berputar | D. Transparan

**Soal 6:** Mengapa menambahkan `class="dark"` pada tag `<html>` otomatis mengubah seluruh warna komponen ber-prefiks `dark:` di Tailwind?  
A. Karena fitur Dark Mode Tailwind berbasis sakelar Class (`darkMode: 'class'`) aktif | B. Karena fitur Windows | C. Karena RAM penuh | D. Karena browser crash

**Soal 7:** Class Tailwind `line-clamp-2` pada paragraf deskripsi card berfungsi untuk...  
A. Memotong teks otomatis jika lebih dari 2 baris dan memberikan tanda titik-titik `...` | B. Menghapus teks | C. Membesarkan teks | D. Mengubah font

**Soal 8:** Class Tailwind `shadow-lg shadow-brand-500/30` akan memberikan...  
A. Bayangan berwarna indigo transparan 30% (*Color Glow Shadow*) | B. Bayangan hitam pekat | C. Border merah | D. Gambar melayang

**Soal 9:** Class Tailwind `max-w-7xl mx-auto px-6` pada container utama berguna untuk...  
A. Membatasi lebar maksimal container dan meletakkannya tepat di tengah halaman secara simetris | B. Menghapus margin | C. Membesarkan layar | D. Mematikan grid

**Soal 10:** Selamat! Setelah menyelesaikan Kelas 6, apa kompetensi utama yang Anda miliki?  
A. Mahir menguasai CSS3 dasar, Box Model, Flexbox 1D, CSS Grid 2D, Responsive Media Queries, Animasi 60FPS, hingga Tailwind CSS Utility-First Framework kustom | B. Servis TV | C. Buat kabel telepon | D. Edit video

---

#### 🔑 Jawaban & Pembahasan Quiz Evaluasi Kelas 6
1. **A (Menempelkan navbar di atas layar dengan tumpukan terdepan)** — Sticky navbar utilities.
2. **A (Grid 1 kolom di HP, 2 di Tablet, 3 di Desktop)** — Responsive grid breakpoint flow.
3. **A (Efek teks gradasi warna modern)** — Gradient text clip utility.
4. **A (Kaca buram Glassmorphism)** — Backdrop blur glassmorphism.
5. **A (Terangkat naik 4px saat di-hover)** — Hover Y translate effect.
6. **A (Fitur Dark Mode Tailwind berbasis sakelar Class aktif)** — Dark mode class mechanism.
7. **A (Memotong teks otomatis jika lebih dari 2 baris)** — Line clamp utility.
8. **A (Bayangan berwarna indigo transparan 30%)** — Colored shadow opacity utility.
9. **A (Membatasi lebar maksimal & meletakkannya di tengah)** — Centered container layout.
10. **A (Mahir menguasai CSS3 & Tailwind CSS Mastery...)** — CSS3 & Tailwind Mastery.

---

### 🎓 KESIMPULAN KELAS 6
Selamat! Anda telah menyelesaikan seluruh kelas di **LEVEL 1 (PEMULA)** hingga **Kelas 6: CSS3, Modern Layouts & Tailwind CSS**.
