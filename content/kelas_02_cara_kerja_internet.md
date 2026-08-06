# 📚 KELAS 2: CARA KERJA INTERNET & PROTOKOL WEB

---

## 📌 INFORMASI KELAS

- **Deskripsi Kelas**: Mempelajari alur pengiriman data jaringan global dari IP Address, DNS Lookup, arsitektur Client-Server, Anatomi HTTP Request/Response, Header, Cookie, SSL/TLS Encryption, hingga HTTP/3.
- **Tujuan Belajar**: Memahami perjalanan paket data dari browser pengguna sampai ke server dan sebaliknya secara aman & efisien.
- **Prasyarat**: Menyelelesaikan Kelas 1 (Dasar Komputer).
- **Hasil Yang Dikuasai**: Mampu melakukan debugging jaringan web, memahami HTTP status codes, menganalisis header keamanan, serta menguasai alur HTTPS.

---

# 📖 MODUL 1: PENGENALAN JARIKAN KOMPUTER & MODEL OSI

### 1. Penjelasan Teori yang Mudah Dipahami
Jaringan komputer adalah kumpulan komputer dan perangkat yang saling terhubung untuk berbagi data. Untuk mengorganisir bagaimana data dikirim dari satu komputer ke komputer lain di belahan dunia lain, diciptakanlah standar **Model OSI (Open Systems Interconnection)** yang terdiri dari **7 Layer**.

### 2. Istilah Penting
- **OSI Layer**: Standar konseptual 7 lapisan komunikasi jaringan.
- **Packet (Paket Data)**: Potongan-potongan kecil berkas data yang dikirim melalui jaringan.
- **Bandwidth**: Kapasitas maksimal transfer data dalam satuan detik (Mbps).
- **Latency (Ping)**: Waktu yang dibutuhkan paket data untuk bepergian dari pengirim ke penerima (dalam milidetik).

### 3. Penjelasan Mendalam
7 Lapisan OSI Model (dari bawah ke atas):
1. **Physical Layer**: Kabel fisik, fiber optic, gelombang Wi-Fi.
2. **Data Link Layer**: Alamat fisik MAC Address dan Switch.
3. **Network Layer**: Alamat IP Address dan Router (Pengarah rute paket).
4. **Transport Layer**: Protokol TCP / UDP (Port & Kontrol pengiriman data).
5. **Session Layer**: Pengelola sesi koneksi antar komputer.
6. **Presentation Layer**: Enkripsi SSL/TLS & Format Data (JSON, HTML, JPEG).
7. **Application Layer**: Protokol aplikasi pengguna (HTTP, HTTPS, FTP, SSH).

### 4. Contoh Sederhana
Analogi Pengiriman Surat Pos:
- **Application Layer**: Surat yang Anda tulis di kertas.
- **Transport Layer**: Memasukkan surat ke dalam amplop berlabel nomor port.
- **Network Layer**: Menuliskan alamat IP jalan rumah penerima.
- **Physical Layer**: Jalan raya dan mobil pos yang membawa surat.

### 5. Contoh Penggunaan di Dunia Nyata
Saat panggilan video (Zoom / WhatsApp Call) mengalami patah-patah, artinya terjadi **High Latency (Ping Tinggi)** atau **Packet Loss** di Transport Layer jaringan internet Anda.

### 6. Best Practice
- Sebagai Web Developer, fokus utama Anda berada di **Layer 7 (Application Layer - HTTP/HTTPS)** dan **Layer 4 (Transport Layer - TCP/UDP)**.

### 7. Kesalahan yang Sering Dilakukan
- Mengira `Latency` sama dengan `Bandwidth`. Memiliki bandwidth 100 Mbps tidak menjamin Latency game/panggilan video Anda menjadi 1ms jika jarak server sangat jauh.

### 8. Tips
Gunakan perintah `ping google.com` di terminal untuk mengecek Latency (waktu respon) jaringan Anda saat ini.

### 9. Ringkasan
Jaringan mengatur transfer data melalui 7 Layer OSI. Web Developer bekerja dominan di Application Layer (HTTP/HTTPS) dan Transport Layer (TCP/UDP).

---

### 📝 QUIZ MODUL 1 (10 Soal)

**Soal 1:** Berapa jumlah lapisan (*layer*) pada standar konseptual OSI Model?  
A. 4 | B. 5 | C. 7 | D. 10

**Soal 2:** Lapisan OSI tempat protokol HTTP dan HTTPS bekerja adalah...  
A. Physical Layer | B. Network Layer | C. Application Layer (Layer 7) | D. Data Link Layer

**Soal 3:** Waktu yang dibutuhkan paket data untuk bepergian dari pengirim ke penerima disebut...  
A. Bandwidth | B. Latency (Ping) | C. Throughput | D. Firewall

**Soal 4:** Protokol yang bertugas menentukan rute pengiriman paket berdasarkan IP Address berada di layer...  
A. Network Layer (Layer 3) | B. Application Layer | C. Physical Layer | D. Session Layer

**Soal 5:** Satuan potongan data yang dikirim melalui jaringan disebut...  
A. Bit | B. Packet | C. Byte | D. Signal

**Soal 6:** Alamat fisik unik yang tertanam pada kartu NIC hardware Wi-Fi/LAN dinamakan...  
A. IP Address | B. MAC Address | C. Port Number | D. Domain Name

**Soal 7:** Lapisan OSI yang menangani enkripsi SSL/TLS dan format data JSON adalah...  
A. Presentation Layer (Layer 6) | B. Physical Layer | C. Transport Layer | D. Network Layer

**Soal 8:** Perangkat jaringan yang berfungsi mengarahkan rute paket data antar jaringan yang berbeda adalah...  
A. Switch | B. Router | C. Hub | D. Cable

**Soal 9:** Mengapa aplikasi panggilan suara (VoIP) sering menggunakan protokol UDP dibanding TCP?  
A. Karena UDP mengutamakan kecepatan tanpa menunggu konfirmasi pengiriman ulang | B. Karena UDP lebih mahal | C. Karena UDP membesarkan gambar | D. Karena TCP dilarang di internet

**Soal 10:** Perintah terminal untuk mengecek Latency koneksi ke sebuah server adalah...  
A. `ping` | B. `ipconfig` | C. `mkdir` | D. `clear`

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 1
1. **C (7)** — OSI Model memiliki 7 lapisan.
2. **C (Application Layer)** — Layer 7 untuk HTTP/HTTPS.
3. **B (Latency / Ping)** — Ukuran waktu tempuh data (ms).
4. **A (Network Layer)** — Layer 3 mengelola IP Routing.
5. **B (Packet)** — Data dipotong menjadi paket.
6. **B (MAC Address)** — Media Access Control Address.
7. **A (Presentation Layer)** — Layer 6 mengelola enkripsi & format.
8. **B (Router)** — Router mengarahkan rute IP.
9. **A (UDP mengutamakan kecepatan)** — Tanpa overhead retransmission.
10. **A (`ping`)** — Perintah cek responsivitas jaringan.

---

### 🏋️ Latihan & Mini Project Modul 1
- **Latihan**: Jalankan perintah `ping 8.8.8.8` di terminal Anda. Catat rata-rata waktu Latency (ms).
- **Mini Project**: Buat script Node.js untuk melakukan ping kesehatan server dan mengukur latency koneksi.

```javascript
const http = require('http');

function cekKesehatanServer(url) {
  const mulai = Date.now();
  http.get(url, (res) => {
    const selesai = Date.now();
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`LATENCY: ${selesai - mulai} ms`);
  }).on('error', (e) => console.error(`Error: ${e.message}`));
}

cekKesehatanServer('http://google.com');
```

---
---

# 📖 MODUL 2: IP ADDRESS, SUBNETTING & PORT JARINGAN

### 1. Penjelasan Teori yang Mudah Dipahami
Jika **IP Address** adalah **Nomor Rumah/Gedung** komputer Anda di internet, maka **Port Jaringan** adalah **Nomor Pintu Kamar/Loker** spesifik di dalam rumah tersebut.

Satu komputer dengan 1 IP Address bisa menjalankan aplikasi web di **Port 80**, database di **Port 5432**, dan SSH di **Port 22** secara bersamaan tanpa bentrok.

### 2. Istilah Penting
- **IPv4**: Format IP Address 32-bit (contoh: `192.168.1.1`).
- **IPv6**: Format IP Address 128-bit terbaru (contoh: `2001:0db8:85a3::8a2e:0370:7334`).
- **Port**: Angka 1-65535 yang mengidentifikasi aplikasi spesifik di komputer.
- **Localhost (`127.0.0.1`)**: Alamat IP khusus yang menunjuk ke komputer Anda sendiri.

### 3. Penjelasan Mendalam
Port Standar Industri yang Wajib Dihafal:
- **Port 80**: HTTP (Web unencrypted)
- **Port 443**: HTTPS (Web encrypted SSL)
- **Port 22**: SSH (Secure Remote Server Access)
- **Port 3000 / 5000 / 8080**: Port Development Web App (Node.js / React / Python)
- **Port 5432**: PostgreSQL Database
- **Port 3306**: MySQL Database
- **Port 6379**: Redis In-Memory Cache

### 4. Contoh Sederhana
Membuka URL di browser:
- `http://localhost:3000` = Buka web dev di komputer sendiri pada **Port 3000**.
- `https://google.com` = Secara implisit membuka `https://google.com:443`.

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda menginstal database PostgreSQL dan server Node.js di server VPS yang sama:
- Server Node.js berjalan di `localhost:3000`.
- Node.js terhubung ke PostgreSQL di `localhost:5432`.

### 6. Best Practice
- Hindari menyebarkan port database (`5432` / `3306`) ke akses publik internet tanpa proteksi firewall (`ufw`).

### 7. Kesalahan yang Sering Dilakukan
- Menjalankan dua aplikasi di nomor Port yang sama di satu komputer, yang menghasilkan error `EADDRINUSE: address already in use :::3000`.

### 8. Tips
Gunakan perintah `lsof -i :3000` atau `netstat -ano` untuk menemukan aplikasi mana yang sedang memakai Port 3000.

### 9. Ringkasan
IP Address mengidentifikasi komputer di jaringan, sedangkan Port mengidentifikasi aplikasi spesifik di komputer tersebut.

---

### 📝 QUIZ MODUL 2 (10 Soal)

**Soal 1:** Alamat IP khusus yang selalu menunjuk ke komputer lokal Anda sendiri adalah...  
A. `192.168.1.1` | B. `127.0.0.1` (Localhost) | C. `8.8.8.8` | D. `255.255.255.0`

**Soal 2:** Nomor Port standar yang digunakan oleh protokol HTTPS adalah...  
A. 80 | B. 22 | C. 443 | D. 5432

**Soal 3:** Nomor Port default yang digunakan oleh database PostgreSQL adalah...  
A. 3306 | B. 5432 | C. 6379 | D. 27017

**Soal 4:** Apa penyebab utama munculnya pesan error `EADDRINUSE: port 3000` saat menjalankan aplikasi?  
A. Internet mati | B. Port 3000 sudah digunakan oleh aplikasi lain | C. Hardisk penuh | D. RAM rusak

**Soal 5:** Berapa batas maksimal nomor Port yang dapat digunakan pada satu sistem komputer?  
A. 1.024 | B. 32.768 | C. 65.535 | D. 1.000.000

**Soal 6:** Format penulisan IPv4 terdiri dari angka 32-bit yang dibagi menjadi berapa bagian (*octet*)?  
A. 2 | B. 4 (contoh: `192.168.1.10`) | C. 6 | D. 8

**Soal 7:** Nomor Port standar yang digunakan untuk Secure Shell (SSH) remote server adalah...  
A. 21 | B. 22 | C. 25 | D. 80

**Soal 8:** Alasan utama dikembangkannya format IPv6 adalah...  
A. IPv4 sudah kehabisan kombinasi alamat untuk miliaran perangkat | B. IPv6 lebih murah | C. IPv4 tidak bisa pakai Wi-Fi | D. IPv6 menghapus port

**Soal 9:** Nomor Port standar yang digunakan untuk protokol web HTTP unencrypted adalah...  
A. 22 | B. 80 | C. 443 | D. 8080

**Soal 10:** Nomor Port default yang digunakan oleh Redis Cache adalah...  
A. 6379 | B. 3306 | C. 5432 | D. 22

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 2
1. **B (`127.0.0.1`)** — Loopback address / Localhost.
2. **C (443)** — Port HTTPS terenkripsi.
3. **B (5432)** — Default PostgreSQL Port.
4. **B (Port sudah terpakai)** — Bentrok alokasi port.
5. **C (65.535)** — Total max port $2^{16} - 1$.
6. **B (4 octet)** — Dipisahkan oleh titik.
7. **B (22)** — Port SSH Remote.
8. **A (IPv4 kehabisan alamat)** — IPv6 (128-bit) menyediakan miliaran alamat baru.
9. **B (80)** — Default HTTP Port.
10. **A (6379)** — Default Redis Port.

---

### 🏋️ Latihan & Mini Project Modul 2
- **Latihan**: Buka terminal dan jalankan `curl http://localhost:3000` saat server berjalan.
- **Mini Project**: Buat script Node.js yang mengecek apakah Port 3000 sedang terbuka atau terpakai.

```javascript
const net = require('net');

function CekPort(port) {
  const server = net.createServer();
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} SEDANG TERPAKAI!`);
    }
  });
  server.once('listening', () => {
    console.log(`Port ${port} BEBAS / TERSEDIA!`);
    server.close();
  });
  server.listen(port);
}

CekPort(3000);
```

---
---

# 📖 MODUL 3: CARA KERJA DNS (DOMAIN NAME SYSTEM)

### 1. Penjelasan Teori yang Mudah Dipahami
Manusia sulit mengingat angka IP Address seperti `142.250.190.46`. Manusia lebih mudah mengingat nama seperti `google.com` atau `kodeku.id`.

**DNS (Domain Name System)** adalah **Buku Telepon Raksasa Internet** yang menerjemahkan nama domain (seperti `kodeku.id`) menjadi alamat IP server fisik.

### 2. Istilah Penting
- **DNS Lookup**: Proses pencarian alamat IP dari nama domain.
- **A Record**: Record DNS yang memetakan nama domain ke IPv4.
- **AAAA Record**: Record DNS yang memetakan nama domain ke IPv6.
- **CNAME Record**: Alias yang mengarahkan satu domain ke domain lain.
- **TTL (Time to Live)**: Durasi cache DNS disimpan di komputer/resolver sebelum diperbarui.

### 3. Penjelasan Mendalam
Alur 4 Langkah DNS Resolution:
1. **DNS Recursor**: Komputer bertanya ke ISP/Resolver (misal: Cloudflare `1.1.1.1` atau Google `8.8.8.8`).
2. **Root Nameserver**: Meneruskan ke pengelola TLD (`.com`, `.id`).
3. **TLD Nameserver**: Meneruskan ke Authoritative Nameserver spesifik domain.
4. **Authoritative Nameserver**: Mengembalikan nilai IP Address asli (`104.21.80.12`).

### 4. Contoh Sederhana
Mengubah Domain di File `hosts` Komputer:
- Mengarahkan `myapp.local` ke `127.0.0.1` di file `C:\Windows\System32\drivers\etc\hosts` (Windows) atau `/etc/hosts` (Linux/macOS).

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda membeli domain `kodeku.id` di Niagahoster dan mengarahkannya ke server Vercel/VPS: Anda memasukkan **Nameserver Cloudflare** atau menambahkan **A Record** bernilai IP VPS Anda.

### 6. Best Practice
- Gunakan Cloudflare DNS untuk manajemen DNS gratis, SSL otomatis, dan perlindungan DDoS Edge.
- Setel nilai TTL rendah (300 detik) saat merencanakan migrasi IP server agar propagate cepat.

### 7. Kesalahan yang Sering Dilakukan
- Panik saat perubahan DNS belum berefek. Proses penyebaran DNS (*DNS Propagation*) membutuhkan waktu antara 5 menit hingga 24 jam tergantung TTL.

### 8. Tips
Gunakan perintah `nslookup kodeku.id` atau `dig kodeku.id` di terminal untuk melihat IP Address di balik domain secara instant.

### 9. Ringkasan
DNS adalah penerjemah nama domain menjadi IP Address server. A Record memetakan IP IPv4, CNAME memetakan alias domain.

---

### 📝 QUIZ MODUL 3 (10 Soal)

**Soal 1:** Fungsi utama dari DNS (Domain Name System) adalah...  
A. Menghapus virus | B. Menerjemahkan nama domain menjadi IP Address | C. Mempercepat CPU | D. Menyimpan file gambar

**Soal 2:** Jenis record DNS yang digunakan untuk memetakan nama domain ke alamat IPv4 adalah...  
A. CNAME Record | B. A Record | C. MX Record | D. TXT Record

**Soal 3:** Jenis record DNS yang digunakan sebagai alias untuk mengarahkan domain ke nama domain lain adalah...  
A. A Record | B. CNAME Record | C. AAAA Record | D. NS Record

**Soal 4:** Alamat IP DNS Resolver publik cepat buatan Cloudflare adalah...  
A. `8.8.8.8` | B. `1.1.1.1` | C. `127.0.0.1` | D. `192.168.0.1`

**Soal 5:** Durasi waktu simpan cache DNS di resolver dinamakan...  
A. Latency | B. TTL (Time to Live) | C. Bandwidth | D. Ping

**Soal 6:** Jenis record DNS yang digunakan khusus untuk mengarahkan alamat server Email adalah...  
A. MX Record | B. A Record | C. TXT Record | D. CNAME

**Soal 7:** Perintah CLI di terminal untuk mengecek detail DNS record sebuah domain adalah...  
A. `ping` | B. `nslookup` atau `dig` | C. `ls` | D. `mkdir`

**Soal 8:** Lokasi file lokal di Windows/Linux untuk memasukkan mapping domain buatan tanpa internet adalah...  
A. File `hosts` | B. File `desktop.ini` | C. File `config.sys` | D. File `index.html`

**Soal 9:** Waktu penyebaran perubahan DNS ke seluruh dunia disebut...  
A. DNS Propagation | B. DNS Encryption | C. DNS Formatting | D. DNS Overload

**Soal 10:** Record DNS yang digunakan untuk verifikasi pemilik domain (misal verifikasi Google Search Console) adalah...  
A. TXT Record | B. A Record | C. PTR Record | D. SOA Record

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 3
1. **B (Menerjemahkan domain ke IP)** — Penerjemah nama ke IP.
2. **B (A Record)** — Address Record untuk IPv4.
3. **B (CNAME Record)** — Canonical Name (Alias).
4. **B (`1.1.1.1`)** — Cloudflare Public DNS Resolver.
5. **B (TTL - Time to Live)** — Masa berlaku cache DNS.
6. **A (MX Record)** — Mail Exchange Record.
7. **B (`nslookup` / `dig`)** — Tool query DNS.
8. **A (File `hosts`)** — Local host override file.
9. **A (DNS Propagation)** — Waktu penyebaran cache DNS.
10. **A (TXT Record)** — Text Record untuk verifikasi metadata.

---

### 🏋️ Latihan & Mini Project Modul 3
- **Latihan**: Buka terminal dan ketik `nslookup google.com`. Catat alamat IP yang dihasilkan.
- **Mini Project**: Buat script Node.js untuk melakukan DNS lookup dan mengecek A Record & MX Record sebuah domain.

```javascript
const dns = require('dns');

function cekDnsDomain(domain) {
  dns.resolve4(domain, (err, addresses) => {
    if (err) return console.error(err);
    console.log(`IP IPv4 (A Record) ${domain}:`, addresses);
  });

  dns.resolveMx(domain, (err, addresses) => {
    if (err) return console.error(err);
    console.log(`Mail Server (MX Record) ${domain}:`, addresses);
  });
}

cekDnsDomain('github.com');
```

---
---

# 📖 MODUL 4: PROTOKOL HTTP/1.1, HTTP/2 & HTTP/3

### 1. Penjelasan Teori yang Mudah Dipahami
**HTTP (HyperText Transfer Protocol)** adalah bahasa kesepakatan antara browser (Client) dan web server untuk meminta dan mengoperkan halaman website.

Seiring perkembangan zaman, protokol HTTP terus dievolusi agar website memuat jauh lebih cepat:
- **HTTP/1.1**: Mengirimkan request satu per satu (Sekuensial).
- **HTTP/2**: Mengirimkan banyak request sekaligus dalam 1 koneksi (Multiplexing).
- **HTTP/3**: Berjalan di atas protokol UDP (QUIC) untuk kecepatan tanpa hambatan *Head-of-Line Blocking*.

### 2. Istilah Penting
- **Client-Server Architecture**: Model di mana Client meminta data (Request) dan Server memberikan balasan (Response).
- **Multiplexing**: Kemampuan HTTP/2 mengirim banyak file (HTML, CSS, JS, Gambar) secara sejajar di 1 koneksi TCP.
- **QUIC Protocol**: Protokol baru berbasis UDP yang menjadi fondasi HTTP/3.

### 3. Penjelasan Mendalam
Perkembangan HTTP:
1. **HTTP/1.1 (1997)**: Tiap file gambar/CSS butuh koneksi TCP sendiri. Mengalami *Head-of-Line (HOL) Blocking* jika 1 file lambat.
2. **HTTP/2 (2015)**: Memakai format binary frame, kompresi header (HPACK), dan Multiplexing.
3. **HTTP/3 (2020+)**: Menghapus TCP HOL blocking dengan pindah ke QUIC (UDP) + TLS 1.3 terintegrasi bawaan.

### 4. Contoh Sederhana
Analogi Pengiriman Barang di Kasir Supermarket:
- **HTTP/1.1**: 1 Kasir melayani 1 antrean barang satu per satu.
- **HTTP/2**: 1 Kasir yang sangat cepat scan 10 barang sekaligus bersamaan.
- **HTTP/3**: Jalur express tanpa antrean kasir.

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda membuka website dengan 50 gambar kecil:
- Di **HTTP/1.1**, browser membuka 6 koneksi parallel (membutuhkan waktu ~2 detik).
- Di **HTTP/2 & HTTP/3**, 50 gambar dimuat secara serentak dalam 1 koneksi instant (< 300ms).

### 6. Best Practice
- Pastikan server web Anda (Nginx/Cloudflare) sudah mengaktifkan **HTTP/2** dan **HTTP/3 (QUIC)** secara default.

### 7. Kesalahan yang Sering Dilakukan
- Melakukan teknik lama seperti *Image Sprites* atau gabung semua JS jadi 1 file raksasa di era HTTP/2 & HTTP/3.

### 8. Tips
Buka tab **Network** di Chrome DevTools, klik kanan header kolom → centang **Protocol** untuk melihat apakah website memakai `h2` (HTTP/2) atau `h3` (HTTP/3).

### 9. Ringkasan
HTTP/2 memperkenalkan Multiplexing. HTTP/3 menggunakan QUIC (UDP) untuk kecepatan transfer data web yang ultra-cepat.

---

### 📝 QUIZ MODUL 4 (10 Soal)

**Soal 1:** Fitur utama HTTP/2 yang memungkinkan pengiriman banyak file sekaligus dalam 1 koneksi disebut...  
A. Serialization | B. Multiplexing | C. Formatting | D. Encapsulation

**Soal 2:** HTTP/3 tidak lagi menggunakan protokol TCP di Transport Layer, melainkan menggunakan...  
A. IPX | B. QUIC (berbasis UDP) | C. ICMP | D. FTP

**Soal 3:** Kendala utama pada HTTP/1.1 di mana request terhenti akibat 1 file lambat disebut...  
A. Head-of-Line (HOL) Blocking | B. Memory Leak | C. Buffer Overflow | D. Stack Crash

**Soal 4:** Protokol HTTP bekerja berdasarkan model arsitektur...  
A. Peer-to-Peer | B. Client-Server | C. Master-Master | D. Event-Loop

**Soal 5:** Kompresi header khusus yang diperkenalkan pada spesifikasi HTTP/2 dinamakan...  
A. GZIP | B. HPACK | C. Brotli | D. ZIP

**Soal 6:** Di Chrome DevTools, kode protokol `h2` menandakan penggunaan HTTP versi...  
A. HTTP/1.0 | B. HTTP/1.1 | C. HTTP/2 | D. HTTP/3

**Soal 7:** Fitur HTTP/2 di mana server dapat mengirimkan file CSS sebelum diminta browser disebut...  
A. Server Push | B. Auto Download | C. Client Pull | D. DNS Prefetch

**Soal 8:** Perbedaan utama HTTP/1.1 dan HTTP/2 dalam format pesan adalah...  
A. HTTP/1.1 berbasis Teks, HTTP/2 berbasis Binary Frames | B. HTTP/2 berbasis Teks | C. HTTP/1.1 tidak punya header | D. HTTP/2 tanpa URL

**Soal 9:** Penyebab utama HTTP/3 memiliki waktu SSL Handshake lebih cepat adalah...  
A. TLS 1.3 langsung terintegrasi di dalam QUIC handshake (0-RTT) | B. Tanpa enkripsi | C. Tanpa IP Address | D. Menghapus domain

**Soal 10:** Siapa yang bertindak sebagai **Client** dalam protokol HTTP web?  
A. Web Server (Nginx) | B. Web Browser (Chrome/Firefox) | C. Router | D. Data Center

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 4
1. **B (Multiplexing)** — Fitur unggulan HTTP/2.
2. **B (QUIC berbasis UDP)** — Fondasi utama HTTP/3.
3. **A (Head-of-Line Blocking)** — Antrean terhalang file lambat.
4. **B (Client-Server)** — Client request, Server response.
5. **B (HPACK)** — Algoritma kompresi header HTTP/2.
6. **C (HTTP/2)** — `h2` singkatan HTTP/2.
7. **A (Server Push)** — Server proaktif mengirim asset.
8. **A (HTTP/1.1 Text vs HTTP/2 Binary)** — Format biner lebih cepat diparse.
9. **A (TLS 1.3 terintegrasi di QUIC)** — Zero Round Trip Time (0-RTT).
10. **B (Web Browser)** — Browser adalah client HTTP.

---

### 🏋️ Latihan & Mini Project Modul 4
- **Latihan**: Buka Chrome DevTools di `google.com` -> Tab Network -> Lihat kolom Protocol (`h3` / `h2`).
- **Mini Project**: Buat HTTP/1.1 Web Server sederhana di Node.js.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Server HTTP KodeKu Berhasil Dibuat!</h1>');
});

server.listen(3000, () => console.log('Server berjalan di port 3000'));
```

---
---

# 📖 MODUL 5: ANATOMI HTTP REQUEST, HEADERS & RESPONSE STATUS CODE

### 1. Penjelasan Teori yang Mudah Dipahami
Setiap kali Anda menekan tombol di web, browser mengirimkan **HTTP Request** ke server. Server lalu merespon dengan **HTTP Response** yang berisi **Status Code** (penanda sukses/gagal).

### 2. Istilah Penting
- **HTTP Method**: Jenis aksi yang ingin dilakukan (`GET`, `POST`, `PUT`, `DELETE`).
- **Status Code**: Kode angka 3 digit dari server (200 OK, 404 Not Found, 500 Internal Error).
- **HTTP Headers**: Metadata tambahan (informasi browser, tipe data, cookie, token auth).
- **Request Body**: Data yang dikirim client ke server (misal: JSON form login).

### 3. Penjelasan Mendalam

#### A. HTTP Methods Utama:
- **GET**: Meminta/membaca data dari server.
- **POST**: Mengirim data baru ke server (misal: Register/Login).
- **PUT / PATCH**: Mengubah/mengupdate data yang sudah ada.
- **DELETE**: Menghapus data di server.

#### B. Pengelompokan HTTP Status Codes:
- **1xx (Informational)**: Request diterima, sedang diproses.
- **2xx (Success)**: 
  - `200 OK`: Request sukses.
  - `201 Created`: Data baru berhasil dibuat.
- **3xx (Redirection)**: 
  - `301 Moved Permanently`: Halaman pindah permanen.
  - `304 Not Modified`: Gunakan data dari cache browser.
- **4xx (Client Error)**: 
  - `400 Bad Request`: Input client salah.
  - `401 Unauthorized`: Belum login.
  - `403 Forbidden`: Sudah login tapi tidak punya hak akses (Bukan Admin).
  - `404 Not Found`: Halaman/data tidak ditemukan.
- **5xx (Server Error)**: 
  - `500 Internal Server Error`: Kodingan backend crash/error.
  - `502 Bad Gateway`: Server proxy Nginx gagal terhubung ke Node.js.
  - `503 Service Unavailable`: Server kelebihan beban/down.

### 4. Contoh Sederhana
Header HTTP Penting:
- `Content-Type: application/json` = Mengirim/menerima data format JSON.
- `Authorization: Bearer <TOKEN>` = Mengirim token JWT login.

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda mengisi form login di KodeKu.id:
1. Browser mengirim `POST /api/auth/login` dengan Request Body `{ email, password }`.
2. Jika sukses, server mengembalikan status `200 OK` + token JWT. Jika password salah, server mengembalikan status `401 Unauthorized`.

### 6. Best Practice
- Selalu kembalikan HTTP Status Code yang tepat sesuai hasil pemrosesan API. Jangan mengembalikan `200 OK` jika terjadi error backend!

### 7. Kesalahan yang Sering Dilakukan
- Menggunakan method `GET` untuk transaksi sensitif seperti mengubah password atau menghapus data.

### 8. Tips
Gunakan cURL di terminal `curl -I https://kodeku.id` untuk melihat HTTP Response Headers sebuah website dengan cepat.

### 9. Ringkasan
Request berisi Method & Headers. Response berisi Status Code (2xx sukses, 4xx client error, 5xx server error) dan Body Data.

---

### 📝 QUIZ MODUL 5 (10 Soal)

**Soal 1:** HTTP Method yang digunakan khusus untuk meminta/membaca data dari server adalah...  
A. POST | B. GET | C. DELETE | D. PUT

**Soal 2:** HTTP Status Code `404` menandakan bahwa...  
A. Server sukses | B. Resource / Halaman tidak ditemukan | C. Server crash | D. Belum bayar

**Soal 3:** HTTP Status Code `201 Created` mengindikasikan bahwa...  
A. Data baru berhasil dibuat di server | B. Server error | C. Halaman dipindah | D. Request ditolak

**Soal 4:** HTTP Status Code `500 Internal Server Error` mengindikasikan kesalahan yang terjadi di sisi...  
A. Client / Browser | B. Backend Server | C. Kabel Wi-Fi | D. Laptop user

**Soal 5:** HTTP Method yang digunakan untuk mengirim data baru (seperti registrasi user) adalah...  
A. GET | B. POST | C. OPTIONS | D. HEAD

**Soal 6:** Status code `401 Unauthorized` berarti...  
A. User belum terautentikasi / belum login | B. Server mati | C. Data berhasil terhapus | D. Sukses

**Soal 7:** Header `Content-Type: application/json` memberitahu server bahwa payload data berbentuk...  
A. Teks biasa | B. Format JSON | C. Gambar PNG | D. File PDF

**Soal 8:** Status code `403 Forbidden` berarti...  
A. User tidak ditemukan | B. User sudah login tetapi tidak memiliki wewenang/hak akses ke resource tersebut | C. Server hang | D. Koneksi terputus

**Soal 9:** HTTP Status Code `301` digunakan untuk...  
A. Bad Request | B. Pengalihan halaman permanen (Moved Permanently) | C. Unauthorized | D. Gateway Timeout

**Soal 10:** Kelompok HTTP Status Code yang diawali angka `2xx` menandakan...  
A. Error Client | B. Error Server | C. Request Berhasil / Sukses | D. Redireksi

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 5
1. **B (GET)** — Method membaca data.
2. **B (Resource tidak ditemukan)** — Not Found.
3. **A (Data baru berhasil dibuat)** — 201 Created.
4. **B (Backend Server)** — 5xx adalah Server Errors.
5. **B (POST)** — Method membuat data baru.
6. **A (User belum terautentikasi)** — Need Authentication.
7. **B (Format JSON)** — JavaScript Object Notation.
8. **B (User tidak memiliki hak akses)** — Forbidden Access (RBAC).
9. **B (Pengalihan halaman permanen)** — Permanent Redirect.
10. **C (Request Berhasil)** — 2xx = Success.

---

### 🏋️ Latihan & Mini Project Modul 5
- **Latihan**: Gunakan Postman / cURL untuk mengirim request `GET https://jsonplaceholder.typicode.com/posts/1`.
- **Mini Project**: Buat Express.js Route yang merespon dengan status code 200, 201, 400, dan 404.

```javascript
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/users', (req, res) => {
  res.status(200).json({ status: 'success', data: [] });
});

app.post('/api/users', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Nama wajib diisi' });
  }
  res.status(201).json({ message: 'User berhasil dibuat' });
});

app.listen(3000);
```

---
---

# 📖 MODUL 6: KEAMANAN HTTPS & SSL/TLS HANDSHAKE

### 1. Penjelasan Teori yang Mudah Dipahami
Pada **HTTP polos**, data yang Anda ketik (seperti password & kartu kredit) dikirim dalam bentuk **teks biasa**. Siapa saja di Wi-Fi publik bisa mengintip data tersebut (*Eavesdropping*).

**HTTPS (HTTP Secure)** membungkus data dengan enkripsi **SSL/TLS**. Data diacak sehingga hacker yang mengintip hanya melihat karakter acak tak terbaca.

### 2. Istilah Penting
- **HTTPS**: Kombinasi HTTP + Enkripsi TLS.
- **SSL/TLS**: Protokol kriptografi pengacak data.
- **Symmetric Encryption**: Enkripsi cepat memakai 1 kunci rahasia yang sama.
- **Asymmetric Encryption**: Enkripsi menggunakan sepasang kunci (Public Key & Private Key).
- **Certificate Authority (CA)**: Lembaga penerbit sertifikat SSL terpercaya (misal: Let's Encrypt, Cloudflare).

### 3. Penjelasan Mendalam
Alur TLS 1.3 Handshake (Pengacakan Data):
1. **Client Hello**: Browser mengirim daftar algoritma enkripsi yang didukung.
2. **Server Hello + Certificate**: Server mengirim sertifikat SSL publik milik domain.
3. **Key Exchange**: Browser & Server membuat *Session Key* simetris rahasia menggunakan pertukaran kunci Asimetris (Diffie-Hellman).
4. **Encrypted Session**: Semua komunikasi selanjutnya diacak menggunakan *Session Key* yang super cepat.

### 4. Contoh Sederhana
Gembok & Kunci:
- **Public Key**: Gembok terbuka yang bisa diberikan ke siapa saja. Siapa pun bisa memasukkan surat ke kotak lalu menguncinya dengan gembok ini.
- **Private Key**: Kunci fisik yang hanya dipegang oleh pemilik server untuk membuka gembok tersebut.

### 5. Contoh Penggunaan di Dunia Nyata
Ikon **Gembok Hijau / Safe** di address bar browser menandakan bahwa koneksi Anda ke `https://kodeku.id` dienkripsi dengan SSL/TLS valid buatan Let's Encrypt.

### 6. Best Practice
- Gunakan Certbot (Let's Encrypt) untuk memasang sertifikat SSL gratis yang otomatis terbarui di server VPS Nginx Anda.
- Aktifkan HTTP Strict Transport Security (HSTS) agar browser menolak koneksi HTTP biasa.

### 7. Kesalahan yang Sering Dilakukan
- Membiarkan sertifikat SSL kedaluwarsa. Browser akan menampilkan peringatan merah raksasa `Your Connection is Not Private` yang membuat pengguna kabur.

### 8. Tips
Gunakan situs SSL Labs (`ssllabs.com/ssltest`) untuk menguji skor keamanan SSL/TLS server Anda.

### 9. Ringkasan
HTTPS melindungi data dari pengintip via enkripsi SSL/TLS (Public Key & Session Key).

---

### 📝 QUIZ MODUL 6 (10 Soal)

**Soal 1:** Tujuan utama penggunaan protokol HTTPS dibanding HTTP biasa adalah...  
A. Menghapus gambar | B. Mengenkripsi komunikasi data antara browser dan server | C. Mempercepat warna web | D. Menghemat RAM

**Soal 2:** Jenis enkripsi yang menggunakan sepasang kunci (Public Key & Private Key) dinamakan...  
A. Symmetric Encryption | B. Asymmetric Encryption | C. Hashing | D. Encoding

**Soal 3:** Kunci enkripsi publik (Public Key) berfungsi untuk...  
A. Mengenkripsi data (Siapa saja boleh memegang) | B. Membuka semua bank | C. Menghapus server | D. Mematikan Wi-Fi

**Soal 4:** Kunci rahasia yang HANYA boleh disimpan di server dan tidak boleh bocor adalah...  
A. Public Key | B. Private Key | C. Session Key | D. Master Code

**Soal 5:** Lembaga penyedia sertifikat SSL terpercaya gratis yang sangat populer di industri adalah...  
A. Let's Encrypt | B. Windows Update | C. Google Drive | D. Adobe

**Soal 6:** Peringatan browser `Your Connection is Not Private` biasanya disebabkan oleh...  
A. Sertifikat SSL kedaluwarsa atau tidak valid | B. Laptop mati | C. Mouse rusak | D. Internet terlalu cepat

**Soal 7:** Proses pertukaran kunci rahasia sebelum data terenkripsi dikirim dinamakan...  
A. TLS Handshake | B. TCP Delete | C. DNS Query | D. Port Scan

**Soal 8:** Header keamanan yang memaksa browser untuk SELALU menggunakan HTTPS adalah...  
A. HSTS (HTTP Strict Transport Security) | B. CORS | C. Content-Type | D. Authorization

**Soal 9:** Serangan pengintipan data pada Wi-Fi publik tanpa HTTPS dinamakan...  
A. Man-in-the-Middle (MitM) / Eavesdropping | B. SQL Injection | C. Phishing | D. DDOS

**Soal 10:** Enkripsi cepat yang digunakan SELAMA sesi komunikasi web berlangsung setelah handshake adalah...  
A. Symmetric Encryption (Session Key) | B. Asymmetric Only | C. ROT13 | D. Base64

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 6
1. **B (Mengenkripsi komunikasi data)** — Keamanan HTTPS.
2. **B (Asymmetric Encryption)** — Public & Private Key.
3. **A (Mengenkripsi data)** — Public key boleh disebar.
4. **B (Private Key)** — Private Key wajib rahasia.
5. **A (Let's Encrypt)** — Provider SSL gratis ternama.
6. **A (Sertifikat SSL kedaluwarsa)** — Invalid SSL Cert.
7. **A (TLS Handshake)** — Proses pembuatan session key.
8. **A (HSTS)** — Strict HTTPS Enforcement.
9. **A (Man-in-the-Middle)** — Penyadapan data tanpa enkripsi.
10. **A (Symmetric Encryption)** — Session key simetris ultra-cepat.

---

### 🏋️ Latihan & Mini Project Modul 6
- **Latihan**: Klik ikon gembok di address bar browser Anda saat membuka `https://google.com`. Lihat detail sertifikat SSL (Penerbit & masa berlaku).
- **Mini Project**: Buat HTTPS Web Server lokal di Node.js menggunakan self-signed certificate.

```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('<h1>Server HTTPS Aman KodeKu Berhasil Dibuat!</h1>');
}).listen(8443, () => console.log('HTTPS Server di port 8443'));
```

---
---

# 📖 MODUL 7: MINI PROJECT — NETWORK TRACKING MENGGUNAKAN DEVTOOLS & CURL

### 1. Deskripsi Mini Project
Pada modul penutup Kelas 2 ini, Anda akan melakukan **Debugging & Inspection Jaringan Web** menggunakan cURL CLI dan Chrome DevTools Network Tab untuk menganalisis Latency, HTTP Status Code, Request/Response Headers, dan SSL Certificate.

### 2. Tujuan Mini Project
Menggabungkan pemahaman dari Modul 1-6 (OSI Model, IP & Port, DNS, HTTP/2, Headers, dan HTTPS) ke dalam keterampilan praktis inspeksi jaringan web standar software engineer.

### 3. Langkah-Langkah Pembuatan

#### Langkah 1: Inspeksi Header Menggunakan cURL Terminal
Buka terminal Anda dan jalankan perintah cURL berikut untuk mengambil HTTP Header dari `https://kodeku.id`:

```bash
curl -I -v https://google.com
```

**Amati Output:**
- `* Connected to google.com (142.250.190.46) port 443` -> Menampilkan IP & Port 443.
- `* TLSv1.3 (OUT), TLS handshake` -> Menampilkan enkripsi TLS 1.3.
- `< HTTP/2 200` -> Menampilkan Protokol HTTP/2 dan Status Code `200 OK`.

#### Langkah 2: Script Node.js Network Inspector (`inspector.js`)

Buat file `inspector.js` dengan kode berikut:

```javascript
const https = require('https');
const url = require('url');

function inspeksiWeb(targetUrl) {
  console.log(`\n==========================================`);
  console.log(` 🔍 KODEKU NETWORK INSPECTOR: ${targetUrl}`);
  console.log(`==========================================`);

  const parsedUrl = url.parse(targetUrl);
  const waktuMulai = Date.now();

  const options = {
    host: parsedUrl.host,
    port: 443,
    method: 'GET',
    path: parsedUrl.path,
    headers: {
      'User-Agent': 'KodeKu-Network-Inspector/1.0'
    }
  };

  const req = https.request(options, (res) => {
    const waktuRespon = Date.now() - waktuMulai;
    
    console.log(`✅ Status Code   : ${res.statusCode} ${res.statusMessage}`);
    console.log(`⏱️ Latency       : ${waktuRespon} ms`);
    console.log(`🔒 SSL Cypher    : ${res.socket.getCipher().name}`);
    console.log(`🌐 HTTP Version  : ${res.httpVersion}`);
    console.log(`------------------------------------------`);
    console.log(`📋 RESPONSE HEADERS:`);
    console.log(`- Content-Type   : ${res.headers['content-type']}`);
    console.log(`- Server         : ${res.headers['server'] || 'Protected'}`);
    console.log(`- Strict-Transport: ${res.headers['strict-transport-security'] || 'Not Set'}`);
    console.log(`==========================================\n`);
  });

  req.on('error', (e) => {
    console.error(`❌ Error Inspection: ${e.message}`);
  });

  req.end();
}

inspeksiWeb('https://github.com');
```

#### Langkah 3: Jalankan Script
```bash
node inspector.js
```

---

### 📝 QUIZ EVALUASI KELAS 2 (10 Soal)

**Soal 1:** Opsi `-I` pada perintah cURL berfungsi untuk...  
A. Menghapus data | B. Mengambil Response Header saja tanpa mendownload Body | C. Mematikan internet | D. Mengganti IP

**Soal 2:** Manakah komponen yang TIDAK dapat diinspeksi pada tab Network Chrome DevTools?  
A. Response Status Code | B. Request Headers | C. Isi Fisik Transistor CPU | D. Time Latency

**Soal 3:** Komponen `User-Agent` pada HTTP Request Header berfungsi untuk...  
A. Memberi tahu server identitas jenis browser & OS client | B. Menghapus cookie | C. Menyimpan password | D. Mematikan Wi-Fi

**Soal 4:** Jika hasil inspeksi menunjukkan `Strict-Transport-Security: max-age=31536000`, artinya server memaksa HTTPS selama...  
A. 1 Jam | B. 1 Hari | C. 1 Tahun (31.536.000 detik) | D. 10 Tahun

**Soal 5:** Apa fungsi utama dari pemetaan `User-Agent` oleh web server?  
A. Menampilkan layout tampilan sesuai jenis perangkat (Mobile vs Desktop) | B. Mematikan laptop | C. Menghapus akun | D. Mengubah DNS

**Soal 6:** Saat menguji API, HTTP Method yang digunakan untuk menghapus suatu resource adalah...  
A. GET | B. DELETE | C. POST | D. OPTIONS

**Soal 7:** Apa yang diindikasikan oleh status code `304 Not Modified` pada tab Network DevTools?  
A. File terhapus | B. File tidak berubah, browser menggunakan versi lokal dari Cache | C. Server crash | D. Password salah

**Soal 8:** Tab mana di Chrome DevTools yang digunakan khusus untuk memantau trafik request HTTP?  
A. Console | B. Network | C. Elements | D. Memory

**Soal 9:** Apa keuntungan menggunakan cURL dibanding browser untuk testing API?  
A. Lebih cepat, tanpa overhead render UI/HTML browser | B. cURL punya layar warna-warni | C. cURL tidak pakai internet | D. cURL gratis

**Soal 10:** Selamat! Setelah menyelesaikan Kelas 2, apa kompetensi utama yang Anda miliki?  
A. Memahami alur kerja jaringan internet dari IP, DNS, HTTP/2, Headers, HTTPS hingga debugging jaringan | B. Menjual router | C. Memperbaiki printer | D. Membuat game 3D

---

#### 🔑 Jawaban & Pembahasan Quiz Evaluasi Kelas 2
1. **B (Mengambil Response Header saja)** — Head request flag.
2. **C (Isi Fisik Transistor CPU)** — DevTools hanya menganalisis software/network.
3. **A (Memberi tahu identitas browser & OS)** — User-Agent string.
4. **C (1 Tahun)** — HSTS 1 tahun dalam detik.
5. **A (Menampilkan layout sesuai perangkat)** — Device targeting.
6. **B (DELETE)** — Method penghapusan resource.
7. **B (Browser menggunakan versi dari Cache)** — HTTP Caching 304.
8. **B (Network)** — Tab khusus inspeksi request HTTP.
9. **A (Lebih cepat tanpa overhead render UI)** — Direct CLI HTTP client.
10. **A (Memahami alur kerja jaringan internet...)** — Kompetensi arsitektur jaringan web.

---

### 🎓 KESIMPULAN KELAS 2
Selamat! Anda telah menyelesaikan **Kelas 2: Cara Kerja Internet & Protokol Web**.
