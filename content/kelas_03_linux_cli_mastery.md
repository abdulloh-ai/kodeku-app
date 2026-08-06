# 📚 KELAS 3: LINUX TERMINAL & COMMAND LINE (CLI) MASTERY

---

## 📌 INFORMASI KELAS

- **Deskripsi Kelas**: Menguasai navigasi terminal Linux, manipulasi file & direktori, pengelolaan user permissions (`chmod`, `chown`), environment variables, pencarian teks (`grep`/`awk`), pemantauan proses (`top`/`systemctl`), hingga pembuatan otomatisasi Bash Scripting.
- **Tujuan Belajar**: Terbiasa mengoperasikan server Linux tanpa antarmuka GUI dan mampu mengotomatiskan tugas-tugas server menggunakan Command Line Interface (CLI).
- **Prasyarat**: Menyelelesaikan Kelas 1 & Kelas 2.
- **Hasil Yang Dikuasai**: Mahir bernavigasi di terminal Linux, mengamankan file permission server, dan menyusun shell script otomasi.

---

# 📖 MODUL 1: PENGENALAN DISTRO LINUX & TERMINAL

### 1. Penjelasan Teori yang Mudah Dipahami
Linux bukanlah satu sistem operasi tunggal, melainkan sebuah **Kernel Open-Source** yang dikembangkan oleh Linus Torvalds pada tahun 1991. 

Berbagai perusahaan dan komunitas mengemas kernel Linux dengan software tambahan menjadi **Distro Linux (Distribusi Linux)**. 90%+ server cloud dunia (AWS, Google Cloud, Azure) menggunakan Linux.

### 2. Istilah Penting
- **Distro Linux**: Paket distribusi Linux (contoh: Ubuntu, Debian, CentOS/Rocky, Alpine).
- **Shell (Bash / Zsh)**: Program penterjemah perintah teks yang Anda ketikkan ke dalam kernel Linux.
- **Terminal**: Jendela aplikasi tempat Anda berinteraksi dengan Shell.

### 3. Penjelasan Mendalam
Distro Linux Populer di Industri:
- **Ubuntu Server / Debian**: Distro paling ramah developer, dukungan paket terbesar (`apt`).
- **Alpine Linux**: Distro ultra-ringan (hanya 5MB), sangat populer sebagai basis image Docker container (`apk`).
- **RedHat / Rocky Linux**: Distro standar perusahaan enterprise skala besar (`dnf`/`yum`).

### 4. Contoh Sederhana
Memilih Package Manager Berdasarkan Distro:
- **Ubuntu / Debian**: `sudo apt update && sudo apt install nginx`
- **Alpine Linux**: `apk add nginx`
- **CentOS / RHEL**: `sudo dnf install nginx`

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda menyewa server VPS di Hetzner atau DigitalOcean, server tersebut datang murni berupa terminal Linux tanpa tombol GUI. Anda harus mengatur server sepenuhnya via CLI.

### 6. Best Practice
- Selalu gunakan **Ubuntu Server LTS (Long Term Support)** untuk server produksi pertama Anda karena dokumentasi komunitasnya paling melimpah.

### 7. Kesalahan yang Sering Dilakukan
- Panik saat mengetikkan password di terminal Linux tidak muncul karakter `*` bintang. Di Linux, pengetikan password disembunyikan demi keamanan (tetap ketik lalu tekan Enter).

### 8. Tips
Tekan tombol `Tab` di keyboard untuk otomatis melengkapi (*auto-complete*) perintah atau nama file di terminal Linux.

### 9. Ringkasan
Linux mendominasi server cloud. Terminal berinteraksi via Shell (Bash/Zsh) menggunakan Package Manager sesuai distro.

---

### 📝 QUIZ MODUL 1 (10 Soal)

**Soal 1:** Pencipta utama Kernel Linux pada tahun 1991 adalah...  
A. Bill Gates | B. Linus Torvalds | C. Steve Jobs | D. Mark Zuckerberg

**Soal 2:** Program penterjemah perintah teks yang menghubungkan pengguna dengan Kernel Linux dinamakan...  
A. Browser | B. Shell (Bash / Zsh) | C. Compiler | D. BIOS

**Soal 3:** Distro Linux ultra-ringan berukuran ~5MB yang sering dijadikan basis Docker Container adalah...  
A. Ubuntu | B. Alpine Linux | C. Fedora | D. Windows Server

**Soal 4:** Perintah manajemen paket (*package manager*) yang digunakan pada distro Ubuntu/Debian adalah...  
A. `apt` | B. `apk` | C. `dnf` | D. `brew`

**Soal 5:** Mengapa password tidak menampilkan karakter bintang (`*`) saat diketikkan di terminal Linux?  
A. Karena keyboard rusak | B. Fitur keamanan bawaan Linux (*shoulder surfing protection*) | C. Karena terminal hang | D. Karena RAM penuh

**Soal 6:** Tombol keyboard yang digunakan untuk melengkapi nama file/perintah secara otomatis (*auto-complete*) di terminal adalah...  
A. Ctrl | B. Shift | C. Tab | D. Alt

**Soal 7:** Singkatan LTS pada Ubuntu Server LTS berarti...  
A. Long Term Support (Dukungan Keamanan Jangka Panjang) | B. Low Total Size | C. Linux Terminal System | D. Last Testing Stage

**Soal 8:** Perintah CLI untuk membersihkan tampilan layar terminal Linux adalah...  
A. `clean` | B. `clear` atau `Ctrl + L` | C. `delete` | D. `wipe`

**Soal 9:** Manakah di bawah ini yang BUKAN merupakan distro Linux?  
A. Ubuntu | B. Debian | C. macOS | D. Fedora

**Soal 10:** Shell default yang digunakan pada sebagian besar distro Linux server adalah...  
A. Bash (Bourne Again Shell) | B. CMD | C. PowerShell | D. Fish

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 1
1. **B (Linus Torvalds)** — Penemu Kernel Linux.
2. **B (Shell)** — Penterjemah perintah ke Kernel.
3. **B (Alpine Linux)** — Minimalis Docker base image.
4. **A (`apt`)** — Advanced Package Tool Ubuntu.
5. **B (Fitur keamanan bawaan)** — Mencegah pengintipan password.
6. **C (Tab)** — Auto-complete key.
7. **A (Long Term Support)** — Garansi update 5 tahun.
8. **B (`clear`)** — Clear terminal screen.
9. **C (macOS)** — macOS berbasis BSD UNIX, bukan Linux distribution.
10. **A (Bash)** — Standard default Linux shell.

---

### 🏋️ Latihan & Mini Project Modul 1
- **Latihan**: Buka terminal (WSL / Linux / macOS). Jalankan perintah `uname -a` dan `whoami`.
- **Mini Project**: Buat script sederhana untuk mengecek versi distro Linux yang sedang berjalan.

```bash
cat /etc/os-release
```

---
---

# 📖 MODUL 2: NAVIGASI DIREKTORI (`ls`, `cd`, `pwd`, `tree`)

### 1. Penjelasan Teori yang Mudah Dipahami
Di terminal Linux tanpa GUI, Anda tidak bisa mengklik folder pakai mouse. Anda bernavigasi antar direktori menggunakan perintah teks.

### 2. Istilah Penting
- **`pwd` (Print Working Directory)**: Menampilkan lokasi folder tempat Anda berada saat ini.
- **`ls` (List)**: Menampilkan daftar file dan folder di direktori aktif.
- **`cd` (Change Directory)**: Pindah dari satu folder ke folder lain.
- **Root Directory (`/`)**: Folder paling puncak dalam sistem operasi Linux.

### 3. Penjelasan Mendalam
Variasi Perintah Navigasi Penting:
- `ls -la`: Menampilkan SEMUA file (termasuk file tersembunyi berawalan `.`) beserta detail izin dan ukurannya.
- `cd ~`: Kembali langsung ke folder Home user (`/home/username`).
- `cd ..`: Naik 1 tingkat ke folder di atasnya.
- `cd -`: Kembali ke folder sebelumnya tempat Anda berada.

### 4. Contoh Sederhana
Memeriksa lokasi dan isi folder:
```bash
pwd
# Output: /home/ubuntu/projects

ls -la
# Output: drwxr-xr-x 2 ubuntu ubuntu 4096 Aug 3 2026 .env
```

### 5. Contoh Penggunaan di Dunia Nyata
Saat masuk ke server VPS via SSH, langkah pertama developer selalu menjalankan `pwd` dan `ls -la` untuk memeriksa posisi folder proyek web.

### 6. Best Practice
- Biasakan menambahkan flag `-la` saat menjalankan `ls` agar file konfigurasi tersembunyi (seperti `.env` atau `.gitignore`) terlihat.

### 7. Kesalahan yang Sering Dilakukan
- Mengetikkan `cd folder name` dengan spasi tanpa tanda petik. Di Linux, gunakan tanda petik atau escape character: `cd "folder name"` atau `cd folder\ name`.

### 8. Tips
Gunakan utilitas `tree` untuk melihat struktur hirarki pohon folder secara visual di terminal (`sudo apt install tree`).

### 9. Ringkasan
`pwd` untuk cek posisi, `ls -la` untuk lihat isi folder detail, `cd ..` untuk naik folder.

---

### 📝 QUIZ MODUL 2 (10 Soal)

**Soal 1:** Perintah CLI Linux untuk mengetahui lokasi direktori aktif saat ini adalah...  
A. `whereami` | B. `pwd` | C. `cd` | D. `dir`

**Soal 2:** Perintah untuk menampilkan semua file termasuk file tersembunyi berawalan titik (`.`) adalah...  
A. `ls` | B. `ls -a` atau `ls -la` | C. `ls -m` | D. `show`

**Soal 3:** Perintah `cd ..` berfungsi untuk...  
A. Menghapus folder | B. Naik 1 tingkat ke direktori induk di atasnya | C. Masuk ke root | D. Membuat folder

**Soal 4:** Simbol cacing (`~`) pada path Linux `cd ~` merepresentasikan...  
A. Folder Root (`/`) | B. Folder Home pengguna saat ini (`/home/username`) | C. Folder Temporary | D. Trash

**Soal 5:** Karakter pertama pada nama file di Linux yang menandakan bahwa file tersebut tersembunyi (*hidden*) adalah...  
A. Titik (`.`) | B. Bintang (`*`) | C. Pagar (`#`) | D. Dollar (`$`)

**Soal 6:** Perintah `cd -` di terminal Linux berfungsi untuk...  
A. Menghapus folder | B. Pindah ke direktori sebelumnya tempat Anda berada | C. Mematikan terminal | D. Menyegarkan layar

**Soal 7:** Perintah untuk menampilkan struktur folder berbentuk pohon hirarki adalah...  
A. `tree` | B. `branch` | C. `forest` | D. `map`

**Soal 8:** Folder paling puncak pada hirarki file system Linux disimbolkan dengan...  
A. `C:\` | B. Slash tunggal (`/`) | C. `home` | D. `root`

**Soal 9:** Cara berpindah ke folder yang nama foldernya memiliki spasi `Proyek Web` adalah...  
A. `cd Proyek Web` | B. `cd "Proyek Web"` atau `cd Proyek\ Web` | C. `cd Proyek+Web` | D. `cd Proyek_Web`

**Soal 10:** Flag `-h` pada perintah `ls -lh` berfungsi untuk...  
A. Menampilkan bantuan (*help*) | B. Menampilkan ukuran file dalam format yang mudah dibaca manusia (*Human readable: KB, MB, GB*) | C. Menghapus file | D. Mengunci file

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 2
1. **B (`pwd`)** — Print Working Directory.
2. **B (`ls -la`)** — List All (termasuk hidden files).
3. **B (Naik 1 tingkat)** — Parent directory.
4. **B (Folder Home pengguna)** — Tilde `~` singkatan home dir.
5. **A (Titik `.`)** — Hidden file prefix di Linux.
6. **B (Pindah ke direktori sebelumnya)** — Toggle previous directory.
7. **A (`tree`)** — Visual directory tree command.
8. **B (Slash `/`)** — Root directory di Linux.
9. **B (`cd "Proyek Web"`)** — Escaping spaces.
10. **B (Human readable format)** — KB, MB, GB format.

---

### 🏋️ Latihan & Mini Project Modul 2
- **Latihan**: Pindah ke folder `/tmp`, buat folder baru di sana, amati posisinya dengan `pwd`.
- **Mini Project**: Jalankan `tree` di folder proyek Anda untuk melihat struktur file.

```bash
cd /tmp && pwd && ls -la
```

---
---

# 📖 MODUL 3: MANAJEMEN FILE & FOLDER (`mkdir`, `cp`, `mv`, `rm`, `touch`)

### 1. Penjelasan Teori yang Mudah Dipahami
Perintah manajemen file digunakan untuk membuat, menyalin, memindahkan, mengubah nama, dan menghapus file/folder di Linux.

### 2. Istilah Penting
- **`mkdir` (Make Directory)**: Membuat folder baru.
- **`touch`**: Membuat file kosong baru.
- **`cp` (Copy)**: Menyalin file atau folder.
- **`mv` (Move)**: Memindahkan file atau mengubah nama file (*rename*).
- **`rm` (Remove)**: Menghapus file atau folder.

### 3. Penjelasan Mendalam
Variasi Perintah Penting:
- `mkdir -p projects/api/v1`: Membuat folder bersarang sekaligus (*parent directories*).
- `cp -r folder_asal folder_tujuan`: Menyalin folder beserta seluruh isinya secara rekursif (`-r`).
- `mv old_name.txt new_name.txt`: Mengubah nama file.
- `rm -rf folder_target`: Menghapus folder dan seluruh isinya secara paksa (`-r` rekursif, `-f` force).

### 4. Contoh Sederhana
Membuat struktur proyek web cepat:
```bash
mkdir -p myapp/src myapp/public
touch myapp/src/index.js myapp/public/index.html
```

### 5. Contoh Penggunaan di Dunia Nyata
Saat melakukan rilis baru di server, developer menyalin folder aplikasi lama sebagai backup sebelum menimpa dengan versi baru:
```bash
cp -r /var/www/html /var/www/html_backup_$(date +%Y%m%m)
```

### 6. Best Practice
- **BERHATI-HATILAH** saat menggunakan `rm -rf`. Di Linux tidak ada Recycle Bin / Tempat Sampah. File yang dihapus dengan `rm` akan hilang permanen!

### 7. Kesalahan yang Sering Dilakukan
- Menjalankan `rm -rf /` atau `rm -rf *` secara tidak sengaja di folder root yang dapat menghancurkan seluruh sistem operasi server.

### 8. Tips
Gunakan opsi `-i` pada `rm -i file.txt` agar Linux meminta konfirmasi `y/n` sebelum menghapus file.

### 9. Ringkasan
`mkdir` buat folder, `touch` buat file, `cp -r` salin folder, `mv` pindah/rename, `rm -rf` hapus folder (permanen).

---

### 📝 QUIZ MODUL 3 (10 Soal)

**Soal 1:** Perintah CLI Linux untuk membuat berkas file kosong baru adalah...  
A. `make` | B. `touch` | C. `new` | D. `create`

**Soal 2:** Perintah untuk membuat folder bersarang sekaligus (misal `a/b/c`) tanpa error adalah...  
A. `mkdir -p a/b/c` | B. `mkdir -all a/b/c` | C. `create a/b/c` | D. `md a/b/c`

**Soal 3:** Perintah `mv` di Linux memiliki dua kegunaan utama, yaitu...  
A. Memindahkan file dan Mengubah nama file (Rename) | B. Menghapus dan Menyalin | C. Mengunci dan Membuka | D. Membaca dan Menulis

**Soal 4:** Flag wajib yang harus ditambahkan pada perintah `cp` saat menyalin sebuah folder beserta isinya adalah...  
A. `-f` | B. `-r` (Recursive) | C. `-v` | D. `-x`

**Soal 5:** Perintah untuk menghapus folder beserta seluruh isinya secara paksa tanpa konfirmasi adalah...  
A. `rmdir` | B. `rm -rf nama_folder` | C. `delete` | D. `erase`

**Soal 6:** Di manakah lokasi Recycle Bin / Tempat Sampah default saat menghapus file via perintah `rm` di terminal Linux?  
A. Folder Trash | B. Tidak Ada (File langsung terhapus permanen) | C. Folder `/tmp` | D. RAM

**Soal 7:** Opsi `-i` pada `cp -i` atau `rm -i` berfungsi untuk...  
A. Meminta konfirmasi interaktif sebelum menimpa/menghapus file | B. Mengabaikan error | C. Mengubah isi file | D. Mengenkripsi file

**Soal 8:** Perintah untuk menyalin file `config.json` menjadi `config.json.bak` di folder yang sama adalah...  
A. `cp config.json config.json.bak` | B. `mv config.json config.json.bak` | C. `touch config.json.bak` | D. `duplicate config.json`

**Soal 9:** Perintah `rmdir` di Linux HANYA bisa digunakan untuk menghapus folder yang...  
A. Berisi file besar | B. Benar-benar kosong (tanpa file di dalamnya) | C. Terenkripsi | D. Milik root

**Soal 10:** Karakter wildcard `*` pada perintah `rm *.log` berfungsi untuk...  
A. Menghapus semua file yang memiliki ekstensi `.log` | B. Menghapus folder log | C. Menyalin file log | D. Menampilkan file log

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 3
1. **B (`touch`)** — Membuat file kosong.
2. **A (`mkdir -p`)** — Flag parent directory.
3. **A (Memindahkan & Rename)** — Dual fungsi `mv`.
4. **B (`-r`)** — Recursive copy for directories.
5. **B (`rm -rf`)** — Recursive force remove.
6. **B (Tidak ada / Permanen)** — Terminal hapus tanpa recycle bin.
7. **A (Meminta konfirmasi interaktif)** — Interactive prompt.
8. **A (`cp config.json config.json.bak`)** — Copy file.
9. **B (Benar-benar kosong)** — `rmdir` khusus empty dir.
10. **A (Menghapus semua file ekstensi `.log`)** — Wildcard matching.

---

### 🏋️ Latihan & Mini Project Modul 3
- **Latihan**: Buat folder `tes_project`, buat 3 file di dalamnya, lalu hapus folder tersebut dengan `rm -rf tes_project`.
- **Mini Project**: Buat script bash singkat untuk membuat struktur folder proyek web lengkap.

```bash
mkdir -p webapp/{css,js,images} && touch webapp/index.html webapp/css/style.css webapp/js/app.js
```

---
---

# 📖 MODUL 4: MENGELOLA FILE TEXT (`cat`, `nano`, `vim`, `grep`, `awk`)

### 1. Penjelasan Teori yang Mudah Dipahami
Di server Linux tanpa GUI, Anda membaca, mengecek log, dan mengedit file konfigurasi menggunakan pengolah teks terminal seperti **Nano** atau **Vim**, serta mencari teks menggunakan **Grep**.

### 2. Istilah Penting
- **`cat`**: Menampilkan seluruh isi file teks ke terminal.
- **`head` / `tail`**: Menampilkan beberapa baris pertama / terakhir dari file.
- **`grep`**: Algoritma pencarian baris teks berdasarkan pola (pattern matching).
- **`nano`**: Editor teks CLI yang mudah digunakan untuk pemula.
- **`vim`**: Editor teks CLI ultra-cepat pilihan profesional.

### 3. Penjelasan Mendalam
Penggunaan `grep` & `tail` untuk Monitoring Log Server:
- `tail -f /var/log/nginx/error.log`: Memantau error log server secara **real-time** saat terjadi trafik.
- `grep -i "error" server.log`: Mencari kata "error" (case-insensitive `-i`) di dalam file log.
- `grep -r "DATABASE_URL" src/`: Mencari teks "DATABASE_URL" di seluruh folder proyek secara rekursif.

### 4. Contoh Sederhana
Mengedit file di Nano:
- Buka file: `nano .env`
- Simpan file: Tekan `Ctrl + O` -> `Enter`
- Keluar: Tekan `Ctrl + X`

### 5. Contoh Penggunaan di Dunia Nyata
Saat backend web Anda error di server VPS:
Anda menjalankan `tail -n 100 /var/log/syslog | grep "node"` untuk langsung menemukan 100 baris log terakhir aplikasi Node.js Anda.

### 6. Best Practice
- Kuasai perintah dasar Vim (`i` untuk insert mode, `:wq` untuk simpan & keluar, `:q!` untuk keluar tanpa simpan) karena Vim selalu terpasang di semua server Linux tanpa perlu diinstal.

### 7. Kesalahan yang Sering Dilakukan
- Terjebak di dalam editor Vim dan tidak tahu cara keluar! (Tekan `Esc` -> ketik `:wq` -> tekan `Enter`).

### 8. Tips
Gunakan pipa (`|` pipe) untuk menggabungkan perintah, misal: `cat server.log | grep "404" | wc -l` (Menghitung berapa kali error 404 terjadi).

### 9. Ringkasan
`cat` lihat isi, `tail -f` monitor log real-time, `grep` cari teks, `nano`/`vim` edit file di terminal.

---

### 📝 QUIZ MODUL 4 (10 Soal)

**Soal 1:** Perintah untuk menampilkan isi file teks secara langsung di terminal adalah...  
A. `read` | B. `cat` | C. `view` | D. `show`

**Soal 2:** Perintah untuk memantau perubahan baris paling bawah dari file log secara real-time adalah...  
A. `head -f` | B. `tail -f` | C. `cat -live` | D. `watch -c`

**Soal 3:** Perintah CLI Linux yang paling populer digunakan untuk mencari kata/pola teks di dalam file adalah...  
A. `search` | B. `grep` | C. `findtext` | D. `scan`

**Soal 4:** Bagaimana cara menyimpan dan keluar dari editor teks **Nano**?  
A. `Ctrl + O` lalu `Ctrl + X` | B. `Ctrl + S` | C. `:wq` | D. `Alt + F4`

**Soal 5:** Bagaimana cara menyimpan dan keluar dari editor teks **Vim**?  
A. Tekan `Esc`, ketik `:wq` lalu `Enter` | B. `Ctrl + X` | C. `Exit` | D. `Ctrl + C`

**Soal 6:** Opsi `-i` pada perintah `grep -i "admin" users.txt` berfungsi untuk...  
A. Mengabaikan perbedaan huruf besar dan kecil (*case-insensitive*) | B. Menghapus kata admin | C. Mengubah kata | D. Menampilkan nomor baris

**Soal 7:** Perintah `head -n 20 file.txt` berfungsi untuk...  
A. Menampilkan 20 baris pertama dari file | B. Menampilkan 20 baris terakhir | C. Menghapus 20 baris | D. Menyalin 20 baris

**Soal 8:** Operator pipa (`|`) pada Linux berfungsi untuk...  
A. Mengarahkan output dari satu perintah menjadi input untuk perintah berikutnya | B. Menghapus file | C. Membuka 2 terminal | D. Mematikan proses

**Soal 9:** Di dalam editor Vim, tombol yang harus ditekan untuk masuk ke mode mengetik (*Insert Mode*) adalah...  
A. `i` | B. `a` | C. `Enter` | D. `Space`

**Soal 10:** Perintah `grep -r "Secret" .` artinya...  
A. Mencari teks "Secret" di folder saat ini secara rekursif di semua sub-folder | B. Menghapus file rahasia | C. Mengenkripsi file | D. Menampilkan file rahasia

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 4
1. **B (`cat`)** — Concatenate / view file.
2. **B (`tail -f`)** — Follow log real-time.
3. **B (`grep`)** — Global Regular Expression Print.
4. **A (`Ctrl + O` lalu `Ctrl + X`)** — WriteOut & Exit di Nano.
5. **A (`Esc` -> `:wq`)** — Write & Quit di Vim.
6. **A (Case-insensitive)** — Mengabaikan kapitalisasi.
7. **A (20 baris pertama)** — Head 20 lines.
8. **A (Mengarahkan output ke input selanjutnya)** — Piping command.
9. **A (`i`)** — Insert mode di Vim.
10. **A (Mencari rekursif di semua sub-folder)** — Recursive grep search.

---

### 🏋️ Latihan & Mini Project Modul 4
- **Latihan**: Buat file `notes.txt` menggunakan `nano`, isi 5 baris kata, lalu cari kata tertentu menggunakan `grep`.
- **Mini Project**: Cari jumlah kata "ERROR" di dalam file log.

```bash
grep -c "ERROR" /var/log/syslog
```

---
---

# 📖 MODUL 5: USER PERMISSION & FILE ACCESS (`chmod`, `chown`, `sudo`)

### 1. Penjelasan Teori yang Mudah Dipahami
Linux adalah OS multi-user yang sangat ketat menjaga keamanan file. Setiap file dan folder memiliki 3 lapisan hak akses:
1. **Owner (u)**: Pemilik file.
2. **Group (g)**: Kelompok pengguna.
3. **Others (o)**: Pengguna lain di luar kelompok.

### 2. Istilah Penting
- **Read (r - 4)**: Hak untuk membaca/melihat isi file.
- **Write (w - 2)**: Hak untuk mengedit/menghapus file.
- **Execute (x - 1)**: Hak untuk menjalankan file sebagai program/script.
- **`chmod`**: Perintah mengubah izin akses (*permissions*).
- **`chown`**: Perintah mengubah pemilik file (*ownership*).
- **`sudo`**: Menjalankan perintah dengan hak akses tertinggi (*Root / Superuser*).

### 3. Penjelasan Mendalam
Notasi Angka Permission (`chmod` Octal):
- `4` = Read (`r`)
- `2` = Write (`w`)
- `1` = Execute (`x`)

Contoh Kombinasi:
- `7` ($4+2+1$) = Full Access (Read, Write, Execute).
- `6` ($4+2$) = Read & Write.
- `5` ($4+1$) = Read & Execute.
- `4` ($4$) = Read Only.

Izin Akses Populer:
- `chmod 755 script.sh` -> Owner: Full (`7`), Group: Read+Exec (`5`), Others: Read+Exec (`5`). (Standar script).
- `chmod 600 id_rsa` -> Owner: Read+Write (`6`), Group: None (`0`), Others: None (`0`). (Standar kunci SSH rahasia).
- `chmod 777 file.txt` -> SANGAT BAHAYA! Semua orang bebas mengedit/menghapus.

### 4. Contoh Sederhana
Mengubah pemilik folder web ke user Nginx:
```bash
sudo chown -R www-data:www-data /var/www/html
```

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda mengunggah Kunci SSH (`id_rsa`) ke server, SSH akan menolak bekerja jika izin file tersebut terlalu terbuka. Anda WAJIB mengubahnya menjadi `chmod 600 id_rsa`.

### 6. Best Practice
- **HINDARI HINDARI HINDARI `chmod 777`** di server produksi! Itu memberi celah hacker mengeksekusi script berbahaya.
- Gunakan `sudo` hanya saat dibutuhkan (seperti menginstal aplikasi atau mengubah file `/etc/`).

### 7. Kesalahan yang Sering Dilakukan
- Menjalankan seluruh perintah aplikasi web sebagai `root`. Jika aplikasi diretas, hacker otomatis mendapatkan akses penuh ke seluruh server.

### 8. Tips
Jalankan `ls -l` untuk melihat format izin seperti `-rwxr-xr--`.

### 9. Ringkasan
`chmod` ubah hak baca/tulis/eksekusi ($r=4, w=2, x=1$). `chown` ubah pemilik. Jangan gunakan `chmod 777`.

---

### 📝 QUIZ MODUL 5 (10 Soal)

**Soal 1:** Perintah CLI Linux yang digunakan untuk mengubah izin hak akses file adalah...  
A. `chown` | B. `chmod` | C. `sudo` | D. `useradd`

**Soal 2:** Berapakah nilai angka (*octal*) untuk izin hak akses **Read (r)**?  
A. 1 | B. 2 | C. 4 | D. 7

**Soal 3:** Berapakah nilai angka (*octal*) untuk izin hak akses **Write (w)**?  
A. 1 | B. 2 | C. 4 | D. 7

**Soal 4:** Berapakah nilai angka (*octal*) untuk izin hak akses **Execute (x)**?  
A. 1 | B. 2 | C. 4 | D. 7

**Soal 5:** Angka `chmod 755` berarti pemilik (*Owner*) memiliki hak akses bernilai 7, yang artinya...  
A. Read Only | B. Full Access (Read, Write, Execute) | C. Write Only | D. No Access

**Soal 6:** Mengapa memberikan izin `chmod 777` pada folder web produksi dianggap SANGAT BERBAHAYA?  
A. Karena membuat server lambat | B. Karena siapa saja di internet dapat mengunggah dan mengeksekusi script berbahaya di server Anda | C. Karena memakan hardisk | D. Karena menghapus Nginx

**Soal 7:** Perintah untuk mengubah pemilik file `app.js` menjadi user `ubuntu` adalah...  
A. `sudo chown ubuntu app.js` | B. `chmod ubuntu app.js` | C. `useradd ubuntu app.js` | D. `grant ubuntu app.js`

**Soal 8:** Perintah `sudo` merupakan singkatan dari...  
A. SuperUser DO | B. System User Data | C. Secure User Drive | D. Speed Up Disk

**Soal 9:** Izin hak akses yang WAJIB diterapkan pada file Kunci Private SSH (`id_rsa`) agar aman adalah...  
A. `chmod 777` | B. `chmod 600` (Read-Write hanya untuk Owner) | C. `chmod 000` | D. `chmod 755`

**Soal 10:** Pada hasil `ls -l` berupa `-rwxr-xr--`, huruf `x` menandakan izin untuk...  
A. Read | B. Write | C. Execute (Menjalankan program) | D. Delete

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 5
1. **B (`chmod`)** — Change Mode (Permissions).
2. **C (4)** — Read = 4.
3. **B (2)** — Write = 2.
4. **A (1)** — Execute = 1.
5. **B (Full Access)** — $4+2+1 = 7$.
6. **B (Siapa saja bisa mengeksekusi script berbahaya)** — Celah keamanan fatal.
7. **A (`sudo chown ubuntu app.js`)** — Change Owner.
8. **A (SuperUser DO)** — Eksekusi dengan privilase root.
9. **B (`chmod 600`)** — Strict private key access.
10. **C (Execute)** — Hak eksekusi binary/script.

---

### 🏋️ Latihan & Mini Project Modul 5
- **Latihan**: Buat file `run.sh`, beri hak eksekusi dengan `chmod +x run.sh`, lalu periksa hasilnya dengan `ls -l run.sh`.
- **Mini Project**: Ubah izin file rahasia `.env` agar hanya bisa dibaca oleh Owner (`chmod 600 .env`).

```bash
touch .env && chmod 600 .env && ls -l .env
```

---
---

# 📖 MODUL 6: ENVIRONMENT VARIABLES (`export`, `.env`, `PATH`)

### 1. Penjelasan Teori yang Mudah Dipahami
**Environment Variables (Env Var)** adalah variabel global di tingkat Sistem Operasi yang menyimpan nilai konfigurasi (seperti PORT server, Password Database, API Keys) tanpa perlu menuliskannya secara mentah di dalam kode program (*hardcode*).

### 2. Istilah Penting
- **Environment Variable**: Variabel nilai konfigurasi OS.
- **`PATH`**: Variable environment khusus yang menyimpan daftar direktori tempat Linux mencari perintah CLI executable.
- **`.env`**: File standar tempat menyimpan variabel rahasia proyek.
- **`export`**: Perintah Linux untuk membuat/mengatur Environment Variable di sesi terminal.

### 3. Penjelasan Mendalam
Mengapa Harus Menggunakan `.env`?
- **Keamanan**: Mencegah Password Database atau API Key rahasia tersimpan di repositori GitHub publik.
- **Fleksibilitas**: Konfigurasi di komputer laptop (*Development*) beda dengan konfigurasi di server asli (*Production*).

### 4. Contoh Sederhana
Mengatur Environment Variable di Terminal:
```bash
export PORT=5000
export DB_HOST="localhost"
echo $PORT
# Output: 5000
```

### 5. Contoh Penggunaan di Dunia Nyata
Di Node.js / Next.js:
- Aplikasi membaca port dari variabel environment: `process.env.PORT || 3000`.
- Di file `.gitignore`, file `.env` **WAJIB dimasukkan** agar tidak terunggah ke GitHub.

### 6. Best Practice
- Buat file `.env.example` yang berisi daftar nama variabel tanpa nilai rahasia sebagai panduan developer lain.
- Jangan pernah melakukan *commit* file `.env` berisi password ke Git!

### 7. Kesalahan yang Sering Dilakukan
- Menuliskan kode rahasia langsung di program: `const apiKey = "sk-proj-9982371982"`. Jika ter-push ke GitHub, bot hacker akan mencuri API Key Anda dalam 5 detik!

### 8. Tips
Ketik `printenv` di terminal Linux untuk melihat seluruh daftar Environment Variables yang aktif.

### 9. Ringkasan
Env Var menyimpan nilai konfigurasi rahasia. Jangan hardcode password di kode. Masukkan `.env` ke `.gitignore`.

---

### 📝 QUIZ MODUL 6 (10 Soal)

**Soal 1:** Tempat terbaik untuk menyimpan Password Database dan API Key rahasia pada aplikasi web adalah...  
A. Di dalam kode file HTML | B. Di dalam Environment Variables (`.env`) | C. Di deskripsi GitHub | D. Di dalam file gambar

**Soal 2:** Perintah CLI Linux untuk menetapkan sebuah Environment Variable di terminal adalah...  
A. `export VAR_NAME=value` | B. `set VAR_NAME=value` | C. `make VAR_NAME=value` | D. `env VAR_NAME=value`

**Soal 3:** Perintah untuk menampilkan nilai dari sebuah variabel environment `PORT` di terminal Linux adalah...  
A. `echo $PORT` | B. `cat PORT` | C. `show PORT` | D. `print PORT`

**Soal 4:** Mengapa file `.env` WAJIB dimasukkan ke dalam file `.gitignore`?  
A. Agar file tidak terhapus | B. Mencegah password dan kredensial rahasia terunggah ke repositori publik GitHub | C. Agar file mengecil | D. Agar Node.js cepat

**Soal 5:** Fungsi utama dari variabel environment sistem `$PATH` adalah...  
A. Menyimpan daftar folder tempat Linux mencari perintah CLI executable | B. Menyimpan gambar wallpaper | C. Menyimpan IP Address | D. Menyimpan history browser

**Soal 6:** Cara membaca variabel environment `DATABASE_URL` di dalam aplikasi Node.js adalah...  
A. `process.env.DATABASE_URL` | B. `system.get("DATABASE_URL")` | C. `window.DATABASE_URL` | D. `env.read("DATABASE_URL")`

**Soal 7:** Perintah CLI Linux untuk menampilkan SELURUH daftar Environment Variables yang sedang aktif adalah...  
A. `printenv` atau `env` | B. `listvar` | C. `ls -env` | D. `showall`

**Soal 8:** Apa fungsi dari pembuat file `.env.example` pada proyek software?  
A. Sebagai contoh struktur nama variabel tanpa menyertakan isi password rahasianya | B. Sebagai cadangan otomatis | C. Sebagai file rilis | D. Sebagai gambar logo

**Soal 9:** Apa risiko utama membiarkan API Key OpenAI ter-commit di repositori GitHub publik?  
A. Repositori dihapus | B. Bot hacker akan otomatis mencuri API Key Anda dan menghabiskan saldo kredit Anda | C. Laptop mati | D. Internet terputus

**Soal 10:** Bagaimana cara menambahkan folder baru `/custom/bin` ke dalam variabel `$PATH` Linux?  
A. `export PATH=$PATH:/custom/bin` | B. `set PATH=/custom/bin` | C. `mkdir /custom/bin` | D. `path add /custom/bin`

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 6
1. **B (Di dalam Environment Variables `.env`)** — Best practice keamanan kredensial.
2. **A (`export VAR_NAME=value`)** — Command membuat env var di Bash.
3. **A (`echo $PORT`)** — Echo nilai variabel dengan `$`.
4. **B (Mencegah kredensial rahasia terunggah ke GitHub)** — Keamanan repository.
5. **A (Menyimpan daftar folder pencarian CLI executable)** — Pengatur eksekusi CLI.
6. **A (`process.env.DATABASE_URL`)** — Akses Env Var di Node.js.
7. **A (`printenv`)** — Print Environment Variables.
8. **A (Sebagai contoh struktur nama variabel)** — Template variabel non-sensitive.
9. **B (Bot hacker mencuri API Key & menghabiskan saldo)** — Ancaman nyata credential scraping.
10. **A (`export PATH=$PATH:/custom/bin`)** — Append folder ke PATH.

---

### 🏋️ Latihan & Mini Project Modul 6
- **Latihan**: Jalankan `export APP_ENV=production` di terminal, lalu tampilkan dengan `echo $APP_ENV`.
- **Mini Project**: Buat file `.env` dan script Node.js yang membaca nilai variabel tersebut.

```javascript
// app.js
console.log(`Port Server: ${process.env.PORT || 3000}`);
```

---
---

# 📖 MODUL 7: PROCESS MANAGEMENT (`ps`, `top`, `kill`, `systemctl`)

### 1. Penjelasan Teori yang Mudah Dipahami
Di server Linux, Anda harus memantau aplikasi mana yang memakan CPU/RAM berlebih dan menghentikan aplikasi yang macet (*hang*).

### 2. Istilah Penting
- **PID (Process ID)**: Nomor ID unik yang diberikan OS untuk setiap aplikasi yang berjalan.
- **`ps` (Process Status)**: Menampilkan snapshot aplikasi yang sedang berjalan.
- **`top` / `htop`**: Task Manager interaktif CLI real-time.
- **`kill`**: Menghentikan/melihat proses berdasarkan PID.
- **`systemctl`**: Mengelola layanan latar belakang (*Systemd Services* seperti Nginx, PostgreSQL).

### 3. Penjelasan Mendalam
Menghentikan Aplikasi yang Hang:
1. Cari PID aplikasi: `ps aux | grep "node"` (Misal PID: `4821`).
2. Hentikan aplikasi secara halus: `kill 4821`.
3. Hentikan aplikasi secara paksa jika membandel: `kill -9 4821` (Signal SIGKILL).

Mengelola Service Server dengan `systemctl`:
- Start Nginx: `sudo systemctl start nginx`
- Stop Nginx: `sudo systemctl stop nginx`
- Restart Nginx: `sudo systemctl restart nginx`
- Cek Status: `sudo systemctl status nginx`
- Otomatis Start saat Server Booting: `sudo systemctl enable nginx`

### 4. Contoh Sederhana
Memantau penggunaan CPU real-time:
```bash
htop
```

### 5. Contoh Penggunaan di Dunia Nyata
Saat Anda mengubah konfigurasi domain di Nginx server VPS, Anda wajib menguji dan merestart servicenya:
```bash
sudo nginx -t && sudo systemctl restart nginx
```

### 6. Best Practice
- Selalu gunakan `kill` (SIGTERM - Signal 15) terlebih dahulu agar aplikasi sempat menutup koneksi database dengan rapi sebelum menggunakan `kill -9` (SIGKILL).

### 7. Kesalahan yang Sering Dilakukan
- Ceroboh menggunakan `kill -9` pada proses database PostgreSQL, yang dapat menyebabkan kerusakan data (*data corruption*).

### 8. Tips
Gunakan `pgrep node` untuk menemukan PID aplikasi Node.js secara instan.

### 9. Ringkasan
`ps` & `htop` untuk lihat proses, `kill -9` untuk paksa mati PID, `systemctl` untuk kelola service background.

---

### 📝 QUIZ MODUL 7 (10 Soal)

**Soal 1:** Nomor ID unik yang diberikan Sistem Operasi Linux untuk mengidentifikasi setiap aplikasi aktif adalah...  
A. IP Address | B. PID (Process ID) | C. MAC Address | D. Port Number

**Soal 2:** Perintah CLI Linux untuk memantau penggunaan CPU, RAM, dan daftar proses secara interaktif real-time adalah...  
A. `top` atau `htop` | B. `ps` | C. `show` | D. `taskmon`

**Soal 3:** Perintah untuk menghentikan aplikasi secara paksa (*SIGKILL*) berdasarkan PID-nya adalah...  
A. `stop PID` | B. `kill -9 PID` | C. `delete PID` | D. `close PID`

**Soal 4:** Perintah untuk mengecek status kesehatan service web server Nginx di Linux adalah...  
A. `sudo systemctl status nginx` | B. `check nginx` | C. `nginx ping` | D. `ps nginx`

**Soal 5:** Perintah untuk memastikan service Nginx OTOMATIS berjalan saat server VPS pertama kali dinyalakan (*booting*) adalah...  
A. `sudo systemctl enable nginx` | B. `sudo systemctl start nginx` | C. `sudo systemctl auto` | D. `nginx boot`

**Soal 6:** Perintah untuk merestart service PostgreSQL setelah mengubah konfigurasi adalah...  
A. `sudo systemctl restart postgresql` | B. `reset postgresql` | C. `kill postgresql` | D. `boot postgresql`

**Soal 7:** Perintah `ps aux | grep "node"` berfungsi untuk...  
A. Menghapus Node.js | B. Mencari daftar proses aktif yang menjalankan aplikasi Node.js beserta nilai PID-nya | C. Menginstal Node.js | D. Mematikan Wi-Fi

**Soal 8:** Perbedaan utama sinyal `kill` biasa (SIGTERM) dan `kill -9` (SIGKILL) adalah...  
A. SIGTERM memberi waktu aplikasi menutup file/koneksi dengan rapi, sedangkan SIGKILL langsung mematikan paksa instan | B. SIGKILL lebih lambat | C. SIGTERM menghapus file | D. Sama saja

**Soal 9:** Tool pemantau proses versi modern berwarna-warni yang lebih canggih dibanding `top` adalah...  
A. `htop` | B. `nano` | C. `vim` | D. `cat`

**Soal 10:** Perintah `killall node` berfungsi untuk...  
A. Menghentikan SELURUH proses yang bernama "node" sekaligus | B. Menginstal Node.js | C. Menghapus folder node | D. Mematikan komputer

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 7
1. **B (PID - Process ID)** — Unik identitas proses.
2. **A (`top` / `htop`)** — Real-time interactive task manager.
3. **B (`kill -9 PID`)** — Force kill signal.
4. **A (`sudo systemctl status nginx`)** — Cek status Systemd service.
5. **A (`sudo systemctl enable nginx`)** — Enable auto-start on boot.
6. **A (`sudo systemctl restart postgresql`)** — Restart service.
7. **B (Mencari daftar proses aktif Node.js)** — Filter process with grep.
8. **A (SIGTERM rapi vs SIGKILL paksa instan)** — Graceful vs Force shutdown.
9. **A (`htop`)** — Enhanced color process viewer.
10. **A (Menghentikan SELURUH proses bernama node)** — Kill by process name.

---

### 🏋️ Latihan & Mini Project Modul 7
- **Latihan**: Jalankan `top` di terminal, tekan huruf `q` untuk keluar.
- **Mini Project**: Buat service Systemd buatan untuk aplikasi Node.js Anda agar otomatis berjalan saat server dinyalakan.

```ini
# /etc/systemd/system/kodeku.service
[Unit]
Description=KodeKu Node Server
After=network.target

[Service]
ExecStart=/usr/bin/node /var/www/kodeku/server.js
Restart=always
User=ubuntu

[Install]
WantedBy=multi-user.target
```

---
---

# 📖 MODUL 8: BASIC BASH SCRIPTING AUTOMATION (`.sh`)

### 1. Penjelasan Teori yang Mudah Dipahami
**Bash Scripting** adalah cara mengumpulkan deretan perintah terminal Linux ke dalam satu file berkas `.sh` agar dapat dieksekusi secara otomatis sekali klik tanpa mengetik ulang perintah satu per satu.

### 2. Istilah Penting
- **Shebang (`#!/bin/bash`)**: Baris pertama wajib di file script yang memberi tahu OS untuk mengeksekusi file memakai Shell Bash.
- **`.sh`**: Ekstensi file standar untuk script Bash.
- **Variables di Bash**: Menyimpan nilai (`NAME="Budi"`, dipanggil `$NAME`).
- **If-Else & Loops di Bash**: Kontrol logika pengkondisian dan pengulangan di script.

### 3. Penjelasan Mendalam
Sintaks Dasar Bash Script:
```bash
#!/bin/bash

# Variabel (TIDAK BOLEH ADA SPASI di sekitar tanda =)
NAMA_APLIKASI="KodeKu Backend"
PORT=3000

echo "Memulai rilis $NAMA_APLIKASI di Port $PORT..."

if [ -f "server.js" ]; then
  echo "File server.js ditemukan! Menjalankan aplikasi..."
  node server.js
else
  echo "Error: File server.js TIDAK ditemukan!"
  exit 1
fi
```

### 4. Contoh Sederhana
Membuat dan menjalankan script bash:
```bash
touch backup.sh
chmod +x backup.sh
./backup.sh
```

### 5. Contoh Penggunaan di Dunia Nyata
Setiap kali melakukan *deployment* rilis baru ke server VPS, developer menjalankan 1 script `deploy.sh` yang otomatis: `git pull` -> `npm install` -> `npm run build` -> `systemctl restart app`.

### 6. Best Practice
- **INGAT:** Penulisan variabel di Bash **TIDAK BOLEH PAKAI SPASI** disamping `=`. `VAR="isi"` (BENAR), `VAR = "isi"` (SALAH / ERROR).

### 7. Kesalahan yang Sering Dilakukan
- Lupa memberi hak akses eksekusi `chmod +x script.sh` sehingga muncul error `Permission denied` saat dijalankan.

### 8. Tips
Gunakan `set -e` di awal script Bash Anda agar script otomatis berhenti saat terjadi error di salah satu baris perintah.

### 9. Ringkasan
Bash Script (`.sh`) mengotomatiskan deretan perintah CLI. Wajib pakai Shebang `#!/bin/bash` & `chmod +x`.

---

### 📝 QUIZ MODUL 8 (10 Soal)

**Soal 1:** Baris pertama wajib pada file Bash Script yang menentukan interpreter dinamakan...  
A. Hashbang / Shebang (`#!/bin/bash`) | B. Header | C. Init | D. Root

**Soal 2:** Ekstensi berkas standar untuk file Bash Script adalah...  
A. `.js` | B. `.sh` | C. `.py` | D. `.exe`

**Soal 3:** Perintah wajib yang harus dijalankan agar file `script.sh` dapat dieksekusi adalah...  
A. `chmod +x script.sh` | B. `chmod 000 script.sh` | C. `chown root script.sh` | D. `make script.sh`

**Soal 4:** Cara penulisan variabel yang BENAR di dalam Bash Script adalah...  
A. `TARGET = "production"` | B. `TARGET="production"` (Tanpa spasi disamping `=`) | C. `variable TARGET "production"` | D. `TARGET : "production"`

**Soal 5:** Cara memanggil nilai dari variabel `DATABASE_NAME` di Bash Script adalah...  
A. `DATABASE_NAME` | B. `$DATABASE_NAME` | C. `get(DATABASE_NAME)` | D. `#DATABASE_NAME`

**Soal 6:** Perintah untuk menjalankan file script `deploy.sh` di folder saat ini adalah...  
A. `./deploy.sh` | B. `run deploy.sh` | C. `start deploy.sh` | D. `open deploy.sh`

**Soal 7:** Perintah `set -e` di bagian atas script Bash berfungsi untuk...  
A. Mengabaikan error | B. Otomatis menghentikan eksekusi script jika ada 1 perintah yang mengalami error | C. Menghapus file | D. Mematikan server

**Soal 8:** Perintah `echo "Hello World"` di Bash Script berfungsi untuk...  
A. Menampilkan teks ke terminal | B. Menghapus teks | C. Mengirim email | D. Membuka browser

**Soal 9:** Pengkondisian logika `if [ -d "dist" ]` di Bash berfungsi untuk mengecek...  
A. Apakah file "dist" ada | B. Apakah direktori/folder bernama "dist" ada | C. Apakah RAM penuh | D. Apakah user root

**Soal 10:** Karakter yang digunakan untuk menambahkan komentar (tidak dieksekusi) di Bash Script adalah...  
A. `//` | B. `#` | C. `<!-- -->` | D. `/* */`

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 8
1. **A (Shebang `#!/bin/bash`)** — Path interpreter.
2. **B (`.sh`)** — Shell script extension.
3. **A (`chmod +x script.sh`)** — Add execute permission.
4. **B (`TARGET="production"`)** — Strict no-space syntax.
5. **B (`$DATABASE_NAME`)** — Variable expansion.
6. **A (`./deploy.sh`)** — Execute local script.
7. **B (Otomatis berhenti jika ada error)** — Exit on error flag.
8. **A (Menampilkan teks ke terminal)** — Print text output.
9. **B (Mengecek apakah direktori ada)** — Directory check operator `-d`.
10. **B (`#`)** — Comment symbol di Bash.

---

### 🏋️ Latihan & Mini Project Modul 8
- **Latihan**: Buat file `sapa.sh`, isi `#!/bin/bash\necho "Halo KodeKu!"`, beri `chmod +x`, lalu jalankan.
- **Mini Project**: Buat script bash untuk membersihkan folder temp secara otomatis.

```bash
#!/bin/bash
echo "Clearing temp files..."
rm -rf /tmp/test_*
echo "Done!"
```

---
---

# 📖 MODUL 9: MINI PROJECT — OTOMATISASI BACKUP FOLDER MENGGUNAKAN SHELL SCRIPT

### 1. Deskripsi Mini Project
Pada modul penutup Kelas 3 ini, Anda akan membangun sebuah **Auto-Backup Shell Script (`auto_backup.sh`)** yang mengompres folder proyek web menjadi arsip `.tar.gz` berstempel tanggal/waktu dan membersihkan backup lama otomatis.

### 2. Tujuan Mini Project
Menggabungkan seluruh keterampilan dari Modul 1-8 (Linux CLI Navigation, File Management, Text Processing, Permissions, Environment Variables, dan Bash Scripting) untuk membuat otomasi DevOps dunia nyata.

### 3. Langkah-Langkah Pembuatan

#### Langkah 1: Buat File Script `auto_backup.sh`

```bash
#!/bin/bash

# Exit jika terjadi error
set -e

# Variable Konfigurasi
SOURCE_DIR="./project_data"
BACKUP_DIR="./backups"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_FILENAME="backup_${TIMESTAMP}.tar.gz"

echo "=========================================="
echo " 📦 KODEKU AUTOMATED BACKUP ENGINE"
echo "=========================================="
echo "Waktu       : $TIMESTAMP"
echo "Target Folder: $SOURCE_DIR"

# 1. Pastikan folder sumber ada
if [ ! -d "$SOURCE_DIR" ]; then
  echo "⚠️ Folder sumber '$SOURCE_DIR' tidak ada. Membuat folder sampel..."
  mkdir -p "$SOURCE_DIR"
  echo "Sampel data" > "$SOURCE_DIR/data.txt"
fi

# 2. Pastikan folder backup tersedia
mkdir -p "$BACKUP_DIR"

# 3. Kompresi Folder menggunakan tar
echo "🔄 Mengompresi data ke $BACKUP_DIR/$BACKUP_FILENAME..."
tar -czf "$BACKUP_DIR/$BACKUP_FILENAME" "$SOURCE_DIR"

echo "✅ Backup Berhasil Dibuat!"
echo "Ukuran File : $(du -h "$BACKUP_DIR/$BACKUP_FILENAME" | cut -f1)"

# 4. Hapus Backup Lama yang berusia lebih dari 7 hari (Housekeeping)
echo "🧹 Membersihkan arsip backup yang berusia lebih dari 7 hari..."
find "$BACKUP_DIR" -name "backup_*.tar.gz" -mtime +7 -exec rm {} \;

echo "=========================================="
echo "🎉 OTOMASI BACKUP SELESAI DENGAN SUKSES!"
echo "=========================================="
```

#### Langkah 2: Beri Hak Eksekusi & Jalankan
```bash
chmod +x auto_backup.sh
./auto_backup.sh
```

---

### 📝 QUIZ EVALUASI KELAS 3 (10 Soal)

**Soal 1:** Perintah Linux yang digunakan untuk mengompresi folder menjadi berkas `.tar.gz` adalah...  
A. `zip` | B. `tar -czf` | C. `compress` | D. `pack`

**Soal 2:** Perintah `date +"%Y-%m-%d"` akan menghasilkan stempel tanggal dengan format...  
A. `2026-08-03` | B. `03-08-2026` | C. `August 3` | D. `20260803`

**Soal 3:** Perintah `find ./backups -name "*.tar.gz" -mtime +7` berfungsi untuk mencari file...  
A. Yang baru dibuat hari ini | B. Yang dimodifikasi lebih dari 7 hari yang lalu | C. Berukuran 7MB | D. Milik 7 user

**Soal 4:** Perintah `du -h file.txt` berfungsi untuk...  
A. Menghapus file | B. Menampilkan ukuran penggunaan disk file dalam format human-readable | C. Menyalin file | D. Mengubah izin

**Soal 5:** Pengkondisian `if [ ! -d "$FOLDER" ]` berarti...  
A. Jika folder ADA | B. Jika folder TIDAK ADA | C. Jika folder kosong | D. Jika folder terkunci

**Soal 6:** Opsi `-z` pada perintah `tar -czf` berfungsi untuk...  
A. Mengompresi menggunakan algoritma GZIP | B. Menghapus file | C. Membuka arsip | D. Mengenkripsi

**Soal 7:** Opsi `-x` pada perintah `tar -xzf archive.tar.gz` berfungsi untuk...  
A. Membuat arsip | B. Mengekstrak / membongkar isi arsip | C. Menghapus arsip | D. Mematikan terminal

**Soal 8:** Tool scheduler bawaan Linux yang digunakan untuk menjalankan script `auto_backup.sh` otomatis setiap jam 2 malam adalah...  
A. Crontab (`cron`) | B. Task Scheduler | C. System Monitor | D. Timer CLI

**Soal 9:** Format sintaks Crontab `0 2 * * * /path/to/auto_backup.sh` berarti script dijalankan...  
A. Setiap 2 menit | B. Setiap hari pada pukul 02:00 malam | C. Setiap bulan | D. Setiap tanggal 2

**Soal 10:** Selamat! Setelah menyelesaikan Kelas 3, apa kompetensi utama yang Anda miliki?  
A. Mahir mengoperasikan terminal Linux, bernavigasi, mengelola permission, grep/log, env var, dan membuat otomatisasi Bash Scripting | B. Servis printer | C. Rakit PC | D. Main game Linux

---

#### 🔑 Jawaban & Pembahasan Quiz Evaluasi Kelas 3
1. **B (`tar -czf`)** — Tape Archive Gzip Compress.
2. **A (`2026-08-03`)** — Format Tahun-Bulan-Hari.
3. **B (Dimodifikasi lebih dari 7 hari lalu)** — Modified time operator.
4. **B (Menampilkan ukuran penggunaan disk)** — Disk Usage human-readable.
5. **B (Jika folder TIDAK ada)** — Negasi `-d` (not directory).
6. **A (Mengompresi dengan GZIP)** — Gzip flag di Tar.
7. **B (Mengekstrak / membongkar isi arsip)** — Extract flag di Tar.
8. **A (Crontab `cron`)** — Linux cron job scheduler.
9. **B (Setiap hari pukul 02:00 malam)** — Cron expression `0 2 * * *`.
10. **A (Mahir mengoperasikan terminal Linux...)** — Kompetensi Linux Terminal Mastery.

---

### 🎓 KESIMPULAN KELAS 3
Selamat! Anda telah menyelesaikan **Kelas 3: Linux Terminal & Command Line (CLI) Mastery**.
