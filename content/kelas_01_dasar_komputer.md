# 📚 KELAS 1: DASAR KOMPUTER & ARSITEKTUR SISTEM

---

## 📌 INFORMASI KELAS

- **Deskripsi Kelas**: Mempelajari cara kerja internal komputer dari logika biner, transistor, pemrosesan CPU, perbedaan alokasi RAM vs Storage, cara kerja Operating System, manajemen memori, hingga eksekusi proses aplikasi.
- **Tujuan Belajar**: Memahami ekosistem komputasi dasar agar siap melangkah ke jaringan web dan pemrograman tanpa kebingungan tentang bagaimana kode dieksekusi oleh memori & CPU.
- **Prasyarat**: Tidak ada (Bisa diikuti oleh pemula dari nol).
- **Hasil Yang Dikuasai**: Mampu menganalisis alur pemrosesan data komputer, mengukur penggunaan RAM/CPU aplikasi, serta memahami interaksi antara software dan hardware.

---

# 📖 MODUL 1: PENGENALAN KOMPUTER & SISTEM BINER

### 1. Penjelasan Teori yang Mudah Dipahami
Komputer di tingkat paling dasar sebenarnya adalah rangkaian saklar elektronik raksasa yang disebut **Transistor**. Transistor hanya mengenal dua kondisi: **ADA ARUS LISTRIK (ON)** atau **TIDAK ADA ARUS LISTRIK (OFF)**. 

Untuk menerjemahkan kondisi listrik ini ke dalam bentuk data, digunakanlah **Sistem Biner (Binary System)**. Kondisi ON diwakili angka **1**, dan kondisi OFF diwakili angka **0**. Semua teks, gambar, lagu, hingga video game yang Anda lihat di layar komputer pada dasarnya adalah tumpukan angka `0` dan `1` yang diproses sangat cepat.

### 2. Istilah Penting
- **Bit (Binary Digit)**: Satuan data terkecil di komputer (bernilai `0` atau `1`).
- **Byte**: Kumpulan dari 8 Bit. 1 Byte dapat merepresentasikan 1 karakter huruf (misal: huruf `'A'`).
- **Transistor**: Komponen fisik mikro di CPU yang berfungsi sebagai saklar pemutus dan penyambung arus listrik.
- **ASCII / Unicode**: Standar pemetaan yang mengubah kode angka biner menjadi karakter huruf/simbol yang dibaca manusia.

### 3. Penjelasan Mendalam
Bagaimana angka biner `0` dan `1` bisa menjadi huruf `'A'`?
Komputer menggunakan standar kesepakatan internasional yang disebut **ASCII** (American Standard Code for Information Interchange). 

Sebagai contoh:
- Huruf besar `'A'` disepakati memiliki nilai desimal **65**.
- Dalam sistem biner 8-bit, angka **65** dituliskan sebagai `01000001`.
- Ketika Anda mengetik huruf `'A'` di keyboard, keyboard mengirim sinyal biner `01000001` ke komputer, dan monitor menyalakan piksel gambar huruf `'A'`.

### 4. Contoh Sederhana
Konversi Angka Desimal ke Biner:
- Angka `0` = `0000`
- Angka `1` = `0001`
- Angka `2` = `0010`
- Angka `3` = `0011`
- Angka `4` = `0100`
- Angka `8` = `1000`

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda mengunggah foto berukuran **2 Megabyte (MB)** ke internet:
1. `2 MB` = `2.048 Kilobyte (KB)` = `2.097.152 Byte`.
2. Total bit yang dikirimkan kabel/Wi-Fi adalah `2.097.152 × 8` = **16.777.216 Bit (sinyal 0 dan 1)**.

### 6. Best Practice
- Gunakan tipe data biner atau bitwise operations hanya saat membutuhkan efisiensi memori tingkat tinggi (seperti pada sistem IoT, game engine, atau kriptografi).
- Selalu pahami perbedaan ukuran bit sistem operasi (32-bit vs 64-bit).

### 7. Kesalahan yang Sering Dilakukan
- Menganggap `1 Kilobyte (KB)` sama dengan `1.000 Byte`. Di komputer biner, `1 KB` adalah **1.024 Byte** ($2^{10}$).
- Mengacaukan perbedaan antara **Bit (b kecil)** dan **Byte (B besar)**. Kecepatan internet biasanya dijual dalam Mbps (*Megabit per second*), bukan MBps (*Megabyte per second*).

### 8. Tips
Ingat rumus konversi kecepatan internet:
$$\text{Kecepatan Download Asli (MB/s)} = \frac{\text{Kecepatan Paket Internet (Mbps)}}{8}$$
Jika paket internet Anda 100 Mbps, maka kecepatan download maksimalnya adalah $100 / 8 = \mathbf{12.5\text{ MB/s}}$.

### 9. Ringkasan
Komputer bekerja berbasis listrik dengan dua kondisi (ON/OFF) yang direpresentasikan dalam angka Biner (`0` dan `1`). Data digabungkan dalam satuan Bit dan Byte untuk merepresentasikan huruf, angka, dan media.

---

### 📝 QUIZ MODUL 1 (10 Soal)

**Soal 1:** Satuan data terkecil pada sistem komputer adalah...  
A. Byte | B. Bit | C. RAM | D. Hertz

**Soal 2:** 1 Byte terdiri dari berapa Bit?  
A. 4 Bit | B. 8 Bit | C. 16 Bit | D. 32 Bit

**Soal 3:** Kondisi listrik ON pada transistor diwakili oleh angka biner...  
A. 0 | B. 1 | C. 2 | D. -1

**Soal 4:** Angka desimal 5 jika diubah ke dalam biner 4-bit adalah...  
A. 0101 | B. 0011 | C. 1001 | D. 0110

**Soal 5:** Mengapa 1 Kilobyte bernilai 1.024 Byte, bukan 1.000 Byte?  
A. Karena pembulatan sistem | B. Karena berbasis pangkat 2 ($2^{10}$) | C. Karena kesalahan pabrik | D. Karena standar ASCII

**Soal 6:** Standar internasional yang memetakan kode biner menjadi huruf adalah...  
A. HTTP | B. ASCII / Unicode | C. TCP/IP | D. BIOS

**Soal 7:** Jika kecepatan internet rumah Anda adalah 80 Mbps, berapa kecepatan download maksimal dalam MB/s?  
A. 80 MB/s | B. 40 MB/s | C. 10 MB/s | D. 8 MB/s

**Soal 8:** Karakter huruf besar 'A' dalam standar ASCII memiliki nilai desimal...  
A. 50 | B. 65 | C. 97 | D. 100

**Soal 9:** Perangkat fisik mikro di dalam CPU yang berfungsi sebagai saklar listrik adalah...  
A. Transistor | B. Capacitor | C. Hardisk | D. Resistor

**Soal 10:** Berapa pasang kombinasi nilai yang bisa disimpan oleh 2 Bit?  
A. 2 | B. 4 (`00`, `01`, `10`, `11`) | C. 8 | D. 16

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 1
1. **B (Bit)** — Bit (*Binary Digit*) adalah satuan data terkecil.
2. **B (8 Bit)** — 1 Byte dibentuk oleh 8 digit bit.
3. **B (1)** — Arus listrik ON disimbolkan dengan 1.
4. **A (0101)** — $4(1) + 2(0) + 1(1) = 5$.
5. **B ($2^{10}$)** — Komputer berbasis biner (kelipatan $2^{10} = 1024$).
6. **B (ASCII / Unicode)** — Standar pengkodean karakter.
7. **C (10 MB/s)** — $80\text{ Mbps} / 8 = 10\text{ MB/s}$.
8. **B (65)** — Nilai ASCII huruf 'A' adalah 65.
9. **A (Transistor)** — Komponen saklar mikro elektronik.
10. **B (4)** — Formula $2^n = 2^2 = 4$ kombinasi.

---

### 🏋️ Latihan & Mini Project Modul 1
- **Latihan**: Ubah angka desimal berikut ke bentuk biner 8-bit: `12`, `45`, `128`.
- **Mini Project**: Buat script JavaScript sederhana untuk mengonversi teks string biasa menjadi array angka biner ASCII.

```javascript
// Script Konversi Teks ke Biner
function teksKeBiner(teks) {
  return teks.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
}

console.log(teksKeBiner("KODE")); 
// Output: 01001011 01001111 01000100 01000101
```

- **Referensi Belajar Lanjutan**: *Book: "Code: The Hidden Language of Computer Hardware and Software" by Charles Petzold.*

---
---

# 📖 MODUL 2: ARSITEKTUR CPU, RAM & STORAGE

### 1. Penjelasan Teori yang Mudah Dipahami
Bayangkan komputer seperti sebuah **Dapur Restoran**:
- **CPU (Processor)** adalah **Koki Utama**. Koki ini yang mengeksekusi semua instruksi resep (kode program).
- **RAM (Random Access Memory)** adalah **Meja Potong Koki**. Meja ini tempat bahan makanan (data) diletakkan saat sedang dimasak. Meja ini sangat cepat diakses, tapi saat lampu mati (komputer mati), meja dibersihkan (data hilang / *volatile*).
- **Storage (SSD / Hardisk)** adalah **Kulkas / Gudang Penyimpanan**. Gudang ini tempat menyimpan bahan makanan jangka panjang. Kapasitasnya besar dan data tidak hilang saat listrik mati (*non-volatile*), tetapi butuh waktu lebih lama untuk mengambil barang dari gudang ke meja potong.

### 2. Istilah Penting
- **CPU (Central Processing Unit)**: Otak pemroses instruksi komputer.
- **Clock Speed (GHz)**: Kecepatan CPU mengeksekusi siklus instruksi per detik (1 GHz = 1 Miliar siklus/detik).
- **RAM (Volatile Memory)**: Penyimpanan sementara berkecepatan tinggi yang membutuhkan daya listrik.
- **SSD / NVMe (Non-Volatile Storage)**: Penyimpanan permanen berkapasitas besar berbasis chip flash memory.

### 3. Penjelasan Mendalam
Bagaimana instruksi kode dieksekusi? CPU bekerja dengan siklus **Fetch - Decode - Execute**:
1. **Fetch**: CPU mengambil instruksi program dari RAM.
2. **Decode**: CPU menerjemahkan instruksi tersebut di dalam *Control Unit*.
3. **Execute**: CPU menjalankan kalkulasi matematika/logika di dalam *ALU (Arithmetic Logic Unit)* dan menyimpan hasilnya kembali.

### 4. Contoh Sederhana
Perbandingan Kecepatan Akses Data:
- **CPU Register**: ~0.5 nanodetik (Sangat amat cepat)
- **RAM (DDR5)**: ~50 nanodetik
- **SSD NVMe**: ~50.000 nanodetik (0.05 milidetik)
- **Hardisk HDD Lama**: ~10.000.000 nanodetik (10 milidetik - Sangat lambat)

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda membuka aplikasi **VS Code**:
1. Berkas VS Code dibaca dari **SSD** dan dimuat ke dalam **RAM**.
2. **CPU** mengeksekusi baris kode perintah aplikasi VS Code dari RAM.
3. Saat Anda mengetik kode, data tersimpan sementara di **RAM**. Saat Anda menekan `Ctrl + S`, data dari RAM disalin permanen ke **SSD**.

### 6. Best Practice
- Pastikan kapasitas RAM mencukupi saat menjalankan banyak aplikasi developer (minimal 16GB RAM untuk web/AI dev).
- Gunakan SSD NVMe sebagai drive utama sistem operasi dan proyek koding.

### 7. Kesalahan yang Sering Dilakukan
- Membeli CPU dengan banyak Core tetapi RAM hanya 4GB. CPU cepat akan sia-sia jika RAM penuh (*bottleneck*).
- Mengira menambah RAM akan membuat koneksi internet lebih cepat.

### 8. Tips
Untuk mengecek bottleneck komputer Anda di Windows, tekan `Ctrl + Shift + Esc` (Task Manager) → tab **Performance**. Jika Memory mencapai 95-100%, komputer Anda melambat karena kehabisan tempat di RAM.

### 9. Ringkasan
CPU mengeksekusi instruksi dari RAM (penyimpanan sementara sangat cepat). SSD menyimpan data permanen tetapi lebih lambat dibanding RAM.

---

### 📝 QUIZ MODUL 2 (10 Soal)

**Soal 1:** Komponen komputer yang berfungsi mengeksekusi instruksi logika dan matematika adalah...  
A. SSD | B. CPU | C. Power Supply | D. GPU

**Soal 2:** Sifat utama memori RAM adalah *volatile*, artinya...  
A. Data tersimpan permanen | B. Data hilang saat daya listrik mati | C. Tahan air | D. Tidak bisa diisi data baru

**Soal 3:** Analogi RAM dalam dapur restoran adalah...  
A. Koki utama | B. Gudang penyimpanan | C. Meja potong kerja koki | D. Kompor

**Soal 4:** Siklus kerja utama CPU terdiri dari urutan...  
A. Read - Write - Delete | B. Fetch - Decode - Execute | C. Load - Save - Run | D. Compile - Build - Deploy

**Soal 5:** Komponen CPU yang melakukan kalkulasi aritmatika dan logika adalah...  
A. Control Unit | B. ALU (Arithmetic Logic Unit) | C. Cache | D. RAM

**Soal 6:** Jenis media penyimpanan permanen tercepat saat ini untuk laptop modern adalah...  
A. HDD IDE | B. SSD SATA | C. SSD NVMe M.2 | D. Disket

**Soal 7:** Kecepatan CPU 3.5 GHz berarti CPU mampu menjalankan siklus instruksi sebanyak...  
A. 3.5 Juta per detik | B. 3.5 Miliar per detik | C. 3.5 Ribu per detik | D. 350 per detik

**Soal 8:** Apa yang terjadi jika kapasitas RAM penuh saat Anda membuka aplikasi baru?  
A. Komputer terbakar | B. Sistem menggunakan Paging/Virtual Memory di Disk sehingga menjadi sangat lambat | C. Internet terputus | D. Aplikasi terhapus

**Soal 9:** Manakah hirarki penyimpanan yang paling cepat waktu aksesnya oleh CPU?  
A. CPU Register | B. RAM | C. SSD NVMe | D. HDD

**Soal 10:** Menekan tombol `Ctrl + S` pada pengolah kata berfungsi untuk...  
A. Memindahkan data dari RAM ke CPU | B. Menyimpan data dari RAM ke Storage Permanen (SSD/HDD) | C. Menghapus RAM | D. Mematikan CPU

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 2
1. **B (CPU)** — CPU adalah pemroses instruksi utama.
2. **B (Data hilang saat listrik mati)** — *Volatile* artinya butuh listrik konstan.
3. **C (Meja potong kerja koki)** — Tempat bahan dikerjakan sementara.
4. **B (Fetch - Decode - Execute)** — Siklus standar eksekusi CPU.
5. **B (ALU)** — *Arithmetic Logic Unit*.
6. **C (SSD NVMe M.2)** — Menggunakan jalur PCIe yang sangat cepat.
7. **B (3.5 Miliar per detik)** — 1 GHz = 1 Miliar siklus per detik.
8. **B (Virtual Memory/Paging)** — Komputer melambat karena Disk jauh lebih lambat dari RAM.
9. **A (CPU Register)** — Terletak langsung di dalam chip CPU.
10. **B (Menyimpan dari RAM ke SSD/HDD)** — Mengubah data volatil menjadi permanen.

---

### 🏋️ Latihan & Mini Project Modul 2
- **Latihan**: Buka Resource Monitor di komputer Anda. Catat berapa penggunaan RAM saat browser dibuka dengan 1 tab vs 10 tab.
- **Mini Project**: Buat script Node.js sederhana untuk menampilkan total memori RAM komputer dan penggunaan CPU secara real-time.

```javascript
const os = require('os');

function cekResourceKomputer() {
  const totalRamGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
  const freeRamGB = (os.freemem() / (1024 ** 3)).toFixed(2);
  const usedRamGB = (totalRamGB - freeRamGB).toFixed(2);
  
  console.log(`--- SISTEM RESOURCE INFO ---`);
  console.log(`OS Platform: ${os.platform()} (${os.arch()})`);
  console.log(`CPU Model  : ${os.cpus()[0].model}`);
  console.log(`Total RAM  : ${totalRamGB} GB`);
  console.log(`RAM Terpakai: ${usedRamGB} GB (${freeRamGB} GB Bebas)`);
}

cekResourceKomputer();
```

---
---

# 📖 MODUL 3: SISTEM OPERASI (WINDOWS, MACOS, LINUX)

### 1. Penjelasan Teori yang Mudah Dipahami
**Sistem Operasi (Operating System / OS)** adalah perangkat lunak utama yang bertindak sebagai **Penerjemah / Manajer** antara aplikasi yang Anda gunakan (seperti Chrome, VS Code, Game) dengan perangkat keras komputer (CPU, RAM, Hardisk, Monitor).

Tanpa Sistem Operasi, setiap pembuat aplikasi harus menulis kode rumit hanya untuk menyalakan layar atau menggerakkan kursor mouse.

### 2. Istilah Penting
- **Kernel**: Inti dari Sistem Operasi yang berhubungan langsung dengan hardware komputer.
- **GUI (Graphical User Interface)**: Tampilan antarmuka grafis (tombol, jendela, ikon) yang diklik menggunakan mouse.
- **CLI (Command Line Interface)**: Antarmuka berbasis teks di mana pengguna mengetikkan perintah kode.
- **POSIX**: Standar internasional yang mengatur kompatibilitas antar sistem operasi berbasis UNIX.

### 3. Penjelasan Mendalam
Tiga OS Utama di Dunia Software Engineering:
1. **Windows**: OS paling populer buatan Microsoft. Sangat bagus untuk pengguna umum & gaming, namun memiliki arsitektur file system berbeda (`C:\` vs `/`).
2. **macOS**: OS buatan Apple berbasis UNIX. Sangat stabil, disukai developer frontend & iOS karena konsistensi antarmuka dan terminal berbasis UNIX.
3. **Linux (Ubuntu, Debian, Fedora, Alpine)**: OS open-source berbasis UNIX. Digunakan oleh **90%+ server di seluruh dunia** dan cloud infrastructure karena sangat ringan, aman, dan dapat disesuaikan.

### 4. Contoh Sederhana
Perbandingan Jalur File System (Path):
- **Windows**: `C:\Users\Andi\Projects\app.js` (Menggunakan backslash `\`)
- **Linux / macOS**: `/home/andi/projects/app.js` (Menggunakan forward slash `/` dan diawali root `/`)

### 5. Contoh Penggunaan di Dunia Nyata
Sebagai Web Developer / AI Engineer:
- Anda mengetik kode program di laptop (Windows / macOS).
- Setelah selesai, kode program Anda **diunggah dan dijalankan di server produksi yang menggunakan Linux Ubuntu**.

### 6. Best Practice
- Pelajari perintah dasar terminal Linux/UNIX sejak dini karena semua server cloud menggunakan Linux.
- Gunakan WSL2 (*Windows Subsystem for Linux*) jika Anda menggunakan Windows untuk pengembangan software.

### 7. Kesalahan yang Sering Dilakukan
- Menuliskan jalur file (*file path*) dengan huruf kapital acak. Linux bersifat *case-sensitive* (`Gambar.png` beda dengan `gambar.png`).

### 8. Tips
Jalankan perintah `uname -a` di terminal Linux/macOS untuk melihat versi Kernel OS yang sedang berjalan.

### 9. Ringkasan
OS adalah pengelola sumber daya hardware. Windows dominan di desktop, sedangkan Linux/UNIX dominan di server dan ekosistem software engineering.

---

### 📝 QUIZ MODUL 3 (10 Soal)

**Soal 1:** Komponen paling inti dari Sistem Operasi yang mengontrol hardware adalah...  
A. Browser | B. Kernel | C. Antivirus | D. Explorer

**Soal 2:** Sistem Operasi yang digunakan oleh mayoritas server cloud di dunia adalah...  
A. Windows 11 | B. Linux | C. MS-DOS | D. macOS

**Soal 3:** Sifat penulisan nama file di Linux adalah *case-sensitive*, artinya...  
A. Nama file tidak boleh pakai angka | B. Huruf besar dan huruf kecil dianggap berbeda | C. Nama file harus kurang dari 5 karakter | D. File otomatis terhapus

**Soal 4:** Tampilan antarmuka berbasis tombol dan jendela visual disebut...  
A. CLI | B. GUI | C. API | D. SDK

**Soal 5:** Karakter pemisah jalur folder (*path*) di sistem operasi Linux/macOS adalah...  
A. Backslash (`\`) | B. Forward slash (`/`) | C. Titik dua (`:`) | D. Bintang (`*`)

**Soal 6:** Fitur di Windows 10/11 yang memungkinkan kita menjalankan terminal Linux Ubuntu asli adalah...  
A. CMD | B. WSL2 (Windows Subsystem for Linux) | C. Notepad | D. DirectX

**Soal 7:** Manakah di bawah ini yang merupakan sistem operasi berbasis UNIX?  
A. macOS & Linux | B. MS-DOS | C. Windows XP | D. Windows Server

**Soal 8:** Perintah CLI di Linux/macOS untuk melihat direktori saat ini adalah...  
A. `pwd` | B. `whoami` | C. `dir` | D. `cls`

**Soal 9:** Pengelola sistem operasi bertindak sebagai jembatan antara...  
A. Monitor dan Keyboard | B. Hardware dan Software Aplikasi | C. Internet dan Listrik | D. RAM dan Flashdisk

**Soal 10:** Sistem operasi open-source yang kode sumbernya gratis diubah dan didistribusikan adalah...  
A. Windows 11 | B. macOS | C. Linux | D. iOS

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 3
1. **B (Kernel)** — Kernel adalah jantung dari OS.
2. **B (Linux)** — Linux mendominasi 90%+ server cloud dunia.
3. **B (Huruf besar & kecil berbeda)** — `File.txt` != `file.txt`.
4. **B (GUI)** — *Graphical User Interface*.
5. **B (`/`)** — Linux/UNIX memakai forward slash.
6. **B (WSL2)** — *Windows Subsystem for Linux*.
7. **A (macOS & Linux)** — Keduanya menganut standar UNIX/POSIX.
8. **A (`pwd`)** — *Print Working Directory*.
9. **B (Hardware dan Software Aplikasi)** — OS adalah mediator utama.
10. **C (Linux)** — Linux berlisensi open-source (GPL).

---

### 🏋️ Latihan & Mini Project Modul 3
- **Latihan**: Buka Terminal (Linux/macOS) atau PowerShell (Windows). Jalankan perintah melihat versi OS dan direktori aktif.
- **Mini Project**: Buat script Node.js untuk mendeteksi sistem operasi pengguna dan menampilkan informasi jalurnya.

```javascript
const os = require('os');
const path = require('path');

console.log(`OS Type: ${os.type()}`);
console.log(`User Home Dir: ${os.homedir()}`);
console.log(`Contoh Path: ${path.join('projects', 'app', 'index.js')}`);
```

---
---

# 📖 MODUL 4: PENGELOLAAN MEMORI & PROCESS THREADING

### 1. Penjelasan Teori yang Mudah Dipahami
Saat Anda mengeklik ikon aplikasi di komputer, OS akan membuat sebuah **Process**. 

- **Process** adalah aplikasi yang sedang berjalan dan memiliki alokasi memori khusus.
- **Thread** adalah anak dari Process. Satu aplikasi (Process) bisa memiliki banyak **Thread** yang bekerja bersamaan (misal: Thread 1 mengurus tampilan UI, Thread 2 mendownload file di latar belakang).

### 2. Istilah Penting
- **Process**: Program yang sedang dieksekusi di RAM oleh OS.
- **Thread**: Unit eksekusi terkecil di dalam sebuah Process.
- **Multi-threading**: Kemampuan OS/aplikasi menjalankan banyak Thread sekaligus di CPU Multi-Core.
- **Memory Leak**: Kondisi bug di mana aplikasi lupa membersihkan RAM yang sudah tidak dipakai, sehingga RAM komputer lama-lama habis.

### 3. Penjelasan Mendalam
Bagaimana CPU dengan 4 Core bisa menjalankan 100 aplikasi sekaligus?
OS menggunakan teknik **Time-Slicing / Context Switching**. CPU berganti-ganti mengeksekusi instruksi dari ratusan Thread dalam hitungan milidetik secara bergiliran. Bagi manusia, aplikasi terlihat berjalan bersamaan (*concurrency*).

### 4. Contoh Sederhana
Web Browser (Google Chrome):
- **1 Tab Chrome** = 1 Process terpisah.
- Jika 1 Tab *crash*, tab lain tidak ikut mati karena memorinya terisolasi.

### 5. Contoh Penggunaan di Dunia Nyata
Node.js terkenal dengan arsitektur **Single-Threaded Event Loop**. Node.js menggunakan 1 Thread utama untuk menangani ribuan request koneksi web secara sangat efisien tanpa membuat Thread baru untuk tiap pengguna.

### 6. Best Practice
- Hapus event listener atau variabel besar yang tidak terpakai di kode untuk mencegah **Memory Leak**.
- Hindari membuat loop tak terbatas (`while(true)`) di Thread utama karena akan membuat tampilan aplikasi hang/freeze.

### 7. Kesalahan yang Sering Dilakukan
- Membiarkan koneksi database atau file terbuka tanpa ditutup (`close()`), menyebabkan kebocoran memori di server.

### 8. Tips
Gunakan Chrome Task Manager (`Shift + Esc` di Chrome) untuk melihat tab atau extension mana yang memakan RAM terbesar.

### 9. Ringkasan
Process adalah aplikasi di memori, Thread adalah sub-tugas di dalam Process. Manajemen memori yang buruk menyebabkan *Memory Leak*.

---

### 📝 QUIZ MODUL 4 (10 Soal)

**Soal 1:** Program aplikasi yang sedang dimuat dan dieksekusi di RAM oleh OS disebut...  
A. File | B. Process | C. Extension | D. Shortcut

**Soal 2:** Sub-tugas atau unit eksekusi terkecil di dalam sebuah Process disebut...  
A. Thread | B. Byte | C. Kernel | D. Driver

**Soal 3:** Kondisi di mana aplikasi terus memakan RAM tanpa melepaskannya hingga RAM habis disebut...  
A. Memory Leak | B. CPU Spike | C. Hard Crash | D. Overclock

**Soal 4:** Teknik CPU berganti-ganti tugas mengeksekusi Thread dalam waktu sangat cepat disebut...  
A. Context Switching | B. Formatting | C. Defragment | D. Overheating

**Soal 5:** Mengapa Google Chrome membuat Process terpisah untuk setiap Tab-nya?  
A. Agar boros baterai | B. Isolasi memori (Jika 1 tab crash, tab lain tidak mati) | C. Agar download lebih lambat | D. Persyaratan Windows

**Soal 6:** Arsitektur utama Node.js dalam menangani request web adalah...  
A. Multi-Process Heavy | B. Single-Threaded Event Loop | C. Block-Chain Thread | D. Zero-Memory Thread

**Soal 7:** Apa akibatnya jika Thread utama antarmuka (UI) mengalami loop tak terbatas (`while(true)`)?  
A. Aplikasi berjalan lebih cepat | B. Tampilan aplikasi membeku (freeze / Not Responding) | C. Komputer otomatis merestart | D. RAM berkurang 50%

**Soal 8:** Bagian memori tempat variabel lokal dan alur panggilan fungsi disimpan adalah...  
A. Stack | B. Heap | C. ROM | D. SSD

**Soal 9:** Bagian memori tempat objek dinamis berukuran besar disimpan adalah...  
A. Heap | B. CPU Cache | C. Register | D. BIOS

**Soal 10:** Bagaimana cara paling tepat mencegah Memory Leak pada aplikasi web?  
A. Mematikan komputer | B. Membersihkan timer, event listener, dan referensi objek yang tidak dipakai | C. Menginstall antivirus | D. Menambah kecepatan CPU

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 4
1. **B (Process)** — Program aktif di RAM.
2. **A (Thread)** — Unit eksekusi sub-proses.
3. **A (Memory Leak)** — Kebocoran alokasi memori RAM.
4. **A (Context Switching)** — Penggantian konteks eksekusi CPU.
5. **B (Isolasi memori)** — Keamanan & stabilitas antar tab.
6. **B (Single-Threaded Event Loop)** — Ciri khas Node.js.
7. **B (Tampilan aplikasi membeku)** — Event loop terblokir.
8. **A (Stack)** — Memori alokasi eksekusi fungsi.
9. **A (Heap)** — Memori alokasi objek dinamis.
10. **B (Membersihkan timer & event listener)** — Menghapus referensi memori.

---

### 🏋️ Latihan & Mini Project Modul 4
- **Latihan**: Jalankan kode `while(true){}` di console browser, amati CPU usage naik di Task Manager.
- **Mini Project**: Buat script Node.js memantau Memory Usage (Heap Used vs Heap Total) aplikasi.

```javascript
function pantauMemori() {
  const mem = process.memoryUsage();
  console.log(`Heap Total: ${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Heap Terpakai: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`);
}

pantauMemori();
```

---
---

# 📖 MODUL 5: FILE SYSTEM & INPUT/OUTPUT (I/O)

### 1. Penjelasan Teori yang Mudah Dipahami
**File System** adalah cara Sistem Operasi mengatur, memberi nama, dan menyimpan berkas di dalam media penyimpanan (SSD/Hardisk). Tanpa File System, SSD hanyalah miliaran deretan byte tanpa struktur folder atau nama file.

**Input/Output (I/O)** adalah proses transfer data antara komputer dengan dunia luar (seperti membaca file dari disk, mengetik di keyboard, atau mengirim data lewat kabel LAN/Wi-Fi).

### 2. Istilah Penting
- **File System**: Struktur pengorganisasian berkas (contoh: NTFS di Windows, ext4 di Linux, APFS di macOS).
- **Absolute Path**: Alur alamat file lengkap dari folder akar root (contoh: `/var/www/html/index.html`).
- **Relative Path**: Alur alamat file relatif terhadap posisi folder saat ini (contoh: `./images/logo.png`).
- **I/O Bound**: Kondisi di mana kecepatan aplikasi tertahan oleh kecepatan membaca file/jaringan, bukan oleh kecepatan CPU.

### 3. Penjelasan Mendalam
Operasi I/O (seperti membaca file 1GB dari SSD) sangat lambat dibanding kecepatan CPU. 

Ada dua cara menangani I/O:
1. **Synchronous (Blocking I/O)**: CPU berhenti dan menunggu sampai file selesai dibaca. Aplikasi membeku selama proses ini.
2. **Asynchronous (Non-blocking I/O)**: CPU menyuruh hardware storage membaca file, lalu CPU lanjut mengerjakan tugas lain. Saat file selesai dibaca, hardware memberi tahu CPU (*callback*).

### 4. Contoh Sederhana
Penggunaan Path di Node.js:
- `./script.js` = File `script.js` di folder yang sama.
- `../script.js` = File `script.js` di folder 1 tingkat di atasnya.

### 5. Contoh Penggunaan di Dunia Nyata
Web Server Node.js menangani 1.000 upload foto pengguna secara **Asynchronous I/O**. Server tidak akan membeku (*hang*) saat 1 foto besar sedang ditulis ke SSD.

### 6. Best Practice
- Selalu gunakan **Asynchronous I/O** saat membaca file atau query database di backend server.
- Gunakan module `path` bawaan Node.js untuk menggabungkan lokasi folder agar aman di Windows dan Linux (`path.join()`).

### 7. Kesalahan yang Sering Dilakukan
- Menuliskan jalur file secara manual dengan string (`"C:\\Users\\" + user`), yang akan error saat aplikasi di-deploy ke server Linux.

### 8. Tips
Gunakan perbandingan `path.join(__dirname, 'files', 'data.json')` agar aman cross-platform.

### 9. Ringkasan
File System mengorganisir data di disk. Operasi I/O sebaiknya dilakukan secara *asynchronous* agar aplikasi tidak membeku.

---

### 📝 QUIZ MODUL 5 (10 Soal)

**Soal 1:** Pengorganisasian berkas dan direktori pada media penyimpanan diatur oleh...  
A. File System | B. GPU | C. RAM | D. Power Supply

**Soal 2:** File system bawaan default pada sistem operasi Linux modern adalah...  
A. NTFS | B. FAT32 | C. ext4 | D. APFS

**Soal 3:** Alur alamat lokasi file yang ditulis lengkap dari folder akar (*root*) disebut...  
A. Relative Path | B. Absolute Path | C. Short Path | D. Hyperlink

**Soal 4:** Simbol `../` pada jalur direktori relatif berarti...  
A. Folder saat ini | B. Naik 1 tingkat folder di atasnya | C. Root direktori | D. Folder tersembunyi

**Soal 5:** Kondisi di mana kecepatan aplikasi tertahan oleh proses membaca/menulis file dinamakan...  
A. CPU Bound | B. I/O Bound | C. Memory Bound | D. GPU Bound

**Soal 6:** Kelemahan utama dari operasi **Synchronous (Blocking) I/O** adalah...  
A. Menghapus file | B. Menghentikan/membekukan eksekusi program sampai I/O selesai | C. Menghemat baterai | D. Merusak SSD

**Soal 7:** Mengapa aplikasi backend modern mengutamakan **Asynchronous (Non-blocking) I/O**?  
A. Agar CPU bisa mengerjakan tugas lain saat menunggu proses I/O | B. Agar file mengecil | C. Agar RAM penuh | D. Agar file tidak terenkripsi

**Soal 8:** Modul bawaan Node.js yang digunakan untuk menangani jalur direktori cross-platform adalah...  
A. `fs` | B. `path` | C. `http` | D. `os`

**Soal 9:** File system default yang digunakan oleh komputer Windows modern adalah...  
A. ext4 | B. NTFS | C. APFS | D. ExFAT

**Soal 10:** Kode `path.join('users', 'documents', 'file.txt')` di Linux akan menghasilkan path...  
A. `users\documents\file.txt` | B. `users/documents/file.txt` | C. `users:documents:file.txt` | D. `/users/file.txt`

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 5
1. **A (File System)** — Pengatur struktur berkas.
2. **C (ext4)** — Standard file system Linux.
3. **B (Absolute Path)** — Alamat mutlak dari root.
4. **B (Naik 1 tingkat folder di atasnya)** — Symbol parent directory.
5. **B (I/O Bound)** — Tertahan kecepatan baca/tulis I/O.
6. **B (Menghentikan/membekukan eksekusi program)** — Blocking execution.
7. **A (Agar CPU bisa mengerjakan tugas lain)** — Efisiensi concurrency.
8. **B (`path`)** — Module penanganan path cross-platform.
9. **B (NTFS)** — Standard file system Windows.
10. **B (`users/documents/file.txt`)** — Menggunakan slash `/` di Linux.

---

### 🏋️ Latihan & Mini Project Modul 5
- **Latihan**: Buat file `sample.txt`, baca isi file tersebut menggunakan Node.js secara Asynchronous (`fs.readFile`).
- **Mini Project**: Buat script Node.js untuk membaca semua file di dalam folder dan menampilkan ukurannya dalam KB.

```javascript
const fs = require('fs');
const path = require('path');

const targetDir = __dirname;

fs.readdir(targetDir, (err, files) => {
  if (err) return console.error(err);
  console.log(`--- DAFTAR FILE DI ${targetDir} ---`);
  files.forEach(file => {
    const filePath = path.join(targetDir, file);
    const stats = fs.statSync(filePath);
    console.log(`${file} - ${(stats.size / 1024).toFixed(2)} KB`);
  });
});
```

---
---

# 📖 MODUL 6: MINI PROJECT — ANALISIS RESOURCE & MEMORY USAGE APLIKASI

### 1. Deskripsi Mini Project
Pada modul penutup Kelas 1 ini, Anda akan membangun sebuah **Aplikasi System Resource Monitor** CLI berbasis Node.js yang memantau penggunaan RAM, status CPU, dan sisa memori sistem secara real-time.

### 2. Tujuan Mini Project
Menerapkan seluruh konsep dari Modul 1 sampai Modul 5 (Sistem Biner, CPU, RAM, OS, Process Memory, dan File System I/O) ke dalam satu proyek aplikasi nyata.

### 3. Langkah-Langkah Pembuatan

#### Langkah 1: Buat Folder Proyek
Buat folder bernama `sys-monitor` dan buat file `monitor.js`.

#### Langkah 2: Kode Program (`monitor.js`)

```javascript
const os = require('os');
const fs = require('fs');
const path = require('path');

function formatBytes(bytes) {
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}

function dapatkanStatusResource() {
  const totalRam = os.totalmem();
  const freeRam = os.freemem();
  const usedRam = totalRam - freeRam;
  const ramUsagePct = ((usedRam / totalRam) * 100).toFixed(1);

  const cpus = os.cpus();
  const cpuModel = cpus[0].model;
  const cpuCores = cpus.length;

  const systemStatus = {
    waktu: new Date().toLocaleString('id-ID'),
    platform: `${os.platform()} (${os.arch()})`,
    cpuModel: `${cpuModel} (${cpuCores} Cores)`,
    totalRAM: formatBytes(totalRam),
    usedRAM: formatBytes(usedRam),
    freeRAM: formatBytes(freeRam),
    ramUsagePct: `${ramUsagePct}%`
  };

  return systemStatus;
}

function cetakDanSimpanLog() {
  const status = dapatkanStatusResource();
  
  console.clear();
  console.log(`==========================================`);
  console.log(`    📊 KODEKU SYSTEM RESOURCE MONITOR     `);
  console.log(`==========================================`);
  console.log(`Waktu Scan   : ${status.waktu}`);
  console.log(`OS Platform  : ${status.platform}`);
  console.log(`CPU Model    : ${status.cpuModel}`);
  console.log(`Total RAM    : ${status.totalRAM}`);
  console.log(`RAM Terpakai : ${status.usedRAM} (${status.ramUsagePct})`);
  console.log(`RAM Bebas    : ${status.freeRAM}`);
  console.log(`==========================================`);

  // Simpan Log ke File log.txt secara Asynchronous I/O
  const logMessage = `[${status.waktu}] RAM Used: ${status.usedRAM} / ${status.totalRAM} (${status.ramUsagePct})\n`;
  const logPath = path.join(__dirname, 'system_monitor.log');
  
  fs.appendFile(logPath, logMessage, (err) => {
    if (err) console.error('Gagal menulis log:', err);
  });
}

// Jalankan monitor setiap 3 detik secara berulang
console.log('Memulai System Resource Monitor...');
setInterval(cetakDanSimpanLog, 3000);
```

#### Langkah 3: Jalankan Aplikasi
Buka terminal Anda di folder proyek dan ketik:
```bash
node monitor.js
```

---

### 📝 QUIZ EVALUASI KELAS 1 (10 Soal)

**Soal 1:** Fungsi `os.totalmem()` pada Node.js mengembalikan nilai memori dalam satuan...  
A. Gigabyte | B. Megabyte | C. Byte | D. Bit

**Soal 2:** Mengapa file log ditulis menggunakan `fs.appendFile` dan bukannya `fs.writeFileSync`?  
A. Agar tidak membekukan (blocking) thread utama saat menulis file log | B. Agar log terhapus | C. Karena sync tidak bisa menulis file | D. Agar CPU 100%

**Soal 3:** Persentase penggunaan RAM dihitung dengan rumus...  
A. `(Used RAM / Total RAM) * 100` | B. `(Free RAM / Used RAM) * 100` | C. `Total RAM * 1024` | D. `Used RAM / 8`

**Soal 4:** Metode `console.clear()` pada script monitor berfungsi untuk...  
A. Menghapus RAM | B. Membersihkan layar terminal sebelum mencetak status baru | C. Mematikan CPU | D. Menutup file log

**Soal 5:** Fungsi `setInterval(fn, 3000)` akan mengeksekusi fungsi `fn` setiap...  
A. 30 detik | B. 3 detik (3.000 milidetik) | C. 3 milidetik | D. 300 milidetik

**Soal 6:** File log `system_monitor.log` disimpan dengan menggunakan *relative path* `path.join(__dirname, 'system_monitor.log')`. `__dirname` mengacu pada...  
A. Folder root C:\ | B. Folder lokasi file script yang sedang dieksekusi | C. Folder RAM | D. Folder Downloads

**Soal 7:** Apa yang terjadi pada file `system_monitor.log` saat script monitor dijalankan berulang kali?  
A. Isi file lama tertimpa | B. Teks log baru ditambahkan ke baris paling bawah (*append*) | C. File terhapus | D. File berubah jadi PDF

**Soal 8:** Jika nilai `ramUsagePct` terus meningkat mendekati 100% saat aplikasi diam, ini mengindikasikan adanya...  
A. Kebocoran Memori (*Memory Leak*) | B. CPU Overclock | C. Koneksi internet cepat | D. Virus BIOS

**Soal 9:** Mengapa kita mengonversi nilai Byte ke GB dengan membaginya dengan `(1024 * 1024 * 1024)`?  
A. Karena $1\text{ GB} = 1024^3\text{ Byte}$ | B. Karena perintah Windows | C. Agar angka genap | D. Karena 1 Byte = 1000 Bit

**Soal 10:** Selamat! Setelah menyelesaikan Kelas 1, apa kompetensi utama yang Anda miliki?  
A. Mampu membongkar laptop | B. Memahami alur kerja komputasi dari biner, CPU, RAM, OS hingga eksekusi I/O file | C. Memasang kabel LAN | D. Meretas akun sosial media

---

#### 🔑 Jawaban & Pembahasan Quiz Evaluasi Kelas 1
1. **C (Byte)** — Method OS Node.js mengembalikan nilai Byte murni.
2. **A (Agar tidak membekukan thread utama)** — Asynchronous non-blocking I/O.
3. **A (`(Used RAM / Total RAM) * 100`)** — Rumus persentase standar.
4. **B (Membersihkan layar terminal)** — Memberikan tampilan dashboard CLI bersih.
5. **B (3 detik)** — 3.000 ms = 3 detik.
6. **B (Folder lokasi file script)** — Global variable Node.js `__dirname`.
7. **B (Teks log baru ditambahkan di baris bawah)** — Fungsi `appendFile`.
8. **A (Memory Leak)** — Gejala utama memori kebocoran.
9. **A ($1\text{ GB} = 1024^3\text{ Byte}$)** — Konversi Byte -> KB -> MB -> GB.
10. **B (Memahami alur kerja komputasi...)** — Pemahaman fondasi arsitektur komputasi dasar.

---

### 🎓 KESIMPULAN KELAS 1
Selamat! Anda telah menyelesaikan **Kelas 1: Dasar Komputer & Arsitektur Sistem**. Anda kini memiliki fondasi komputasi yang kuat tentang biner, pemrosesan CPU, RAM, OS, dan File System.
