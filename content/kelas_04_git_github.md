# 📚 KELAS 4: GIT & GITHUB VERSION CONTROL

---

## 📌 INFORMASI KELAS

- **Deskripsi Kelas**: Menguasai sistem pengontrol versi kode (Version Control System) menggunakan Git dari staging area, commit history, branching, merge conflict resolution, hingga kolaborasi tim profesional di GitHub via Pull Requests.
- **Tujuan Belajar**: Mampu mengelola riwayat perubahan kode tanpa takut kehilangan kodingan lama, serta siap berkolaborasi dalam tim software engineering skala industri.
- **Prasyarat**: Menyelelesaikan Kelas 1, 2, dan 3.
- **Hasil Yang Dikuasai**: Mahir menggunakan Git CLI, menyelesaikan merge conflicts, membuat Pull Requests, dan mengelola portofolio repositori di GitHub.

---

# 📖 MODUL 1: PENGENALAN VERSION CONTROL & KONSEP GIT

### 1. Penjelasan Teori yang Mudah Dipahami
Bayangkan Anda mengetik dokumen penting dan membuat salinan file bernama `skripsi_v1.docx`, `skripsi_revisi.docx`, `skripsi_FIX_BISMILLAH.docx`. Cara ini sangat tidak efisien dan berantakan!

**Git (Version Control System)** adalah **Mesin Mesin Waktu Kode**. Git mencatat setiap perubahan kode dalam snapshot kecil yang rapi. Anda bisa kembali ke versi kode kapan saja tanpa perlu menggandakan file secara manual.

### 2. Istilah Penting
- **Git**: Software pengontrol versi lokal buatan Linus Torvalds.
- **GitHub**: Platform cloud berbasis web untuk menyimpan repositori Git dan berkolaborasi secara tim.
- **Repository (Repo)**: Folder proyek yang dilacak oleh Git.
- **Commit**: Rekaman snapshot perubahan kode yang disimpan ke riwayat Git.

### 3. Penjelasan Mendalam
Perbedaan Git vs GitHub:
- **Git**: Tool CLI lokal di komputer Anda untuk mencatat riwayat versi kode.
- **GitHub**: Situs web (seperti Google Drive khusus developer) untuk menyimpan cadangan repositori Git di cloud dan berkolaborasi dengan developer lain seluruh dunia.

### 4. Contoh Sederhana
Konfigurasi Awal Identitas Git (Wajib setelah instalasi):
```bash
git config --global user.name "Rian Pratama"
git config --global user.email "rian@kodeku.id"
```

### 5. Contoh Penggunaan di Dunia Nyata
Saat tim dev KodeKu bekerja merilis fitur kuis baru, 5 developer mengerjakan kodingan bersamaan di laptop masing-masing, lalu menggabungkan kodenya secara rapi di GitHub tanpa menimpa pekerjaan satu sama lain.

### 6. Best Practice
- Pastikan informasi nama dan email di `git config` sesuai dengan email akun GitHub Anda agar kontribusi commit tercatat di profil GitHub.

### 7. Kesalahan yang Sering Dilakukan
- Mengira Git dan GitHub adalah produk yang sama. Git adalah software lokal, sedangkan GitHub adalah layanan cloud host repo.

### 8. Tips
Jalankan `git config --list` untuk memeriksa identitas yang terpasang di komputer Anda.

### 9. Ringkasan
Git adalah mesin waktu kode lokal. GitHub adalah cloud hosting repositori Git.

---

### 📝 QUIZ MODUL 1 (10 Soal)

**Soal 1:** Fungsi utama dari Version Control System seperti Git adalah...  
A. Mempercepat koneksi internet | B. Mencatat riwayat perubahan kode dan memungkinkan perjalanan waktu ke versi sebelumnya | C. Menghapus virus | D. Mematikan CPU

**Soal 2:** Pencipta utama software Git pada tahun 2005 adalah...  
A. Linus Torvalds | B. Bill Gates | C. Mark Zuckerberg | D. Guido van Rossum

**Soal 3:** Perbedaan utama antara **Git** dan **GitHub** adalah...  
A. Git adalah tool CLI pengontrol versi lokal, sedangkan GitHub adalah platform cloud hosting repositori | B. Git lebih mahal | C. GitHub hanya untuk Windows | D. Sama saja

**Soal 4:** Perintah untuk mengonfigurasi nama pengguna global pada Git adalah...  
A. `git config --global user.name "Nama"` | B. `git set name "Nama"` | C. `git init "Nama"` | D. `git make user "Nama"`

**Soal 5:** Tempat penyimpan folder proyek beserta seluruh sejarah perubahan kodenya di sebut...  
A. Database | B. Repository (Repo) | C. Terminal | D. Hardisk

**Soal 6:** Rekaman snapshot perubahan kode yang disimpan ke dalam sejarah Git dinamakan...  
A. Save | B. Commit | C. Push | D. Branch

**Soal 7:** Opsi `--global` pada konfigurasi Git berarti...  
A. Konfigurasi berlaku untuk seluruh repositori di komputer Anda | B. Konfigurasi berlaku di seluruh dunia | C. Konfigurasi hanya 1 hari | D. Konfigurasi menghapus Git

**Soal 8:** Perintah CLI untuk mengecek daftar konfigurasi Git aktif adalah...  
A. `git config --list` | B. `git show` | C. `git check` | D. `git info`

**Soal 9:** Mengapa membuat file bernama `app_v1.js`, `app_v2.js` dianggap buruk di industri?  
A. Tidak rapi dan menyulitkan pelacakan histori perubahan disbanding menggunakan Git | B. Karena membuat hardisk penuh saja | C. Dilarang oleh Windows | D. Kode tidak bisa jalan

**Soal 10:** Manakah penyedia cloud hosting Git selain GitHub?  
A. GitLab & Bitbucket | B. Google Docs | C. Dropbox | D. Vercel Only

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
- **Latihan**: Buka terminal, atur `user.name` dan `user.email` Anda di Git.
- **Mini Project**: Tampilkan seluruh baris konfigurasi Git di terminal.

```bash
git config --list
```

---
---

# 📖 MODUL 2: INISIALISASI REPOSITORI (`git init`, `.gitignore`)

### 1. Penjelasan Teori yang Mudah Dipahami
Untuk mulai melacak sebuah folder proyek menggunakan Git, kita harus menginisialisasinya. Git akan membuat folder tersembunyi `.git` yang bertindak sebagai database riwayat.

### 2. Istilah Penting
- **`git init`**: Perintah menginisialisasi folder biasa menjadi repositori Git.
- **`.gitignore`**: File khusus yang berisi daftar file/folder yang TIDAK BOLEH dilacak oleh Git (seperti `node_modules` atau `.env`).
- **Working Directory**: Folder tempat Anda sedang mengedit kode proyek.

### 3. Penjelasan Mendalam
Mengapa `.gitignore` Sangat Krusial?
- Tanpa `.gitignore`, folder `node_modules` yang berisi ribuan file pustaka berukuran 500MB+ akan ikut terunggah ke Git.
- Tanpa `.gitignore`, file rahasia `.env` berisi password database akan bocor ke publik.

Contoh Isi File `.gitignore`:
```
# Abaikan folder dependensi
node_modules/
dist/
.next/

# Abaikan file rahasia & log
.env
*.log

# Abaikan file sistem OS
.DS_Store
Thumbs.db
```

### 4. Contoh Sederhana
Mengubah folder proyek biasa menjadi repo Git:
```bash
mkdir proyek-ku
cd proyek-ku
git init
# Output: Initialized empty Git repository in /proyek-ku/.git/
```

### 5. Contoh Penggunaan di Dunia Nyata
Setiap kali membuat proyek Node.js / React baru, langkah wajib pertama developer adalah membuat file `.gitignore` sebelum membuat commit pertama.

### 6. Best Practice
- Selalu gunakan template `.gitignore` resmi sesuai bahasa pemrograman (misal template `.gitignore` untuk Node.js / React).

### 7. Kesalahan yang Sering Dilakukan
- Lupa membuat `.gitignore` lalu secara tidak sengaja menambahkan `node_modules` ke commit (`git add .`).

### 8. Tips
Gunakan situs `gitignore.io` untuk menggenerasi isi file `.gitignore` otomatis berdasarkan framework yang Anda pakai.

### 9. Ringkasan
`git init` mengaktifkan pelacakan Git di folder (membuat `.git`). File `.gitignore` mencegah file rahasia / sampah terikut ke Git.

---

### 📝 QUIZ MODUL 2 (10 Soal)

**Soal 1:** Perintah CLI untuk menginisialisasi folder biasa menjadi repositori Git adalah...  
A. `git start` | B. `git init` | C. `git create` | D. `git new`

**Soal 2:** Nama folder tersembunyi yang dibuat otomatis oleh Git sebagai tempat menyimpan database riwayat adalah...  
A. `.git` | B. `.config` | C. `.svn` | D. `.history`

**Soal 3:** Nama file khusus yang digunakan untuk mengabaikan file/folder agar tidak dilacak oleh Git adalah...  
A. `.gitskip` | B. `.gitignore` | C. `.githide` | D. `ignore.txt`

**Soal 4:** Manakah file di bawah ini yang WAJIB dimasukkan ke dalam `.gitignore`?  
A. `index.html` | B. `.env` (File rahasia password) | C. `README.md` | D. `app.js`

**Soal 5:** Mengapa folder `node_modules/` harus dimasukkan ke dalam `.gitignore`?  
A. Karena ukurannya sangat besar dan dapat didownload ulang dengan `npm install` | B. Karena file rusak | C. Dilarang oleh GitHub | D. Membuat gambar pecah

**Soal 6:** Karakter wildcard `*.log` pada file `.gitignore` berarti mengabaikan...  
A. Semua file yang berakhiran ekstensi `.log` | B. Folder log saja | C. 1 file log | D. File text

**Soal 7:** Apa yang terjadi jika folder `.git` di dalam proyek terhapus secara tidak sengaja?  
A. Kode proyek terhapus | B. Riwayat versi dan commit Git akan hilang, proyek kembali jadi folder biasa | C. Laptop mati | D. Internet terputus

**Soal 8:** Karakter pertama pada nama file `.gitignore` diawali dengan titik (`.`), yang berarti file ini bersifat...  
A. Tersembunyi (*hidden file*) | B. Sementara | C. Read-only | D. Executable

**Soal 9:** Perintah untuk mengecek apakah sebuah folder sudah merupakan repositori Git aktif adalah...  
A. `ls -la` (Mengecek keberadaan folder `.git`) | B. `ping` | C. `whoami` | D. `cat`

**Soal 10:** Di manakah lokasi posisi file `.gitignore` sebaiknya diletakkan di dalam proyek?  
A. Di dalam folder `node_modules` | B. Di tingkat paling atas direktori utama proyek (*Root directory*) | C. Di folder Downloads | D. Bebas di mana saja

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 2
1. **B (`git init`)** — Inisialisasi repo.
2. **A (`.git`)** — Git internal database folder.
3. **B (`.gitignore`)** — Ignore file list.
4. **B (`.env`)** — Password & kredensial rahasia.
5. **A (Ukurannya sangat besar & bisa re-install)** — Dependency management best practice.
6. **A (Semua file ekstensi `.log`)** — Wildcard extension matching.
7. **B (Riwayat versi commit hilang)** — Repository database terhapus.
8. **A (Tersembunyi / Hidden file)** — Hidden file convention.
9. **A (`ls -la`)** — Cek folder `.git`.
10. **B (Di tingkat paling atas root directory)** — Root project placement.

---

### 🏋️ Latihan & Mini Project Modul 2
- **Latihan**: Buat folder `tes-git`, jalankan `git init`, lalu buat file `.gitignore`.
- **Mini Project**: Isi file `.gitignore` dengan aturan abaikan `.env` dan `node_modules/`.

```bash
mkdir tes-git && cd tes-git && git init
echo "node_modules/\n.env" > .gitignore
```

---
---

# 📖 MODUL 3: GIT WORKFLOW (`git status`, `git add`, `git commit`, `git log`)

### 1. Penjelasan Teori yang Mudah Dipahami
Git bekerja dengan 3 Area Kerja Utama:
1. **Working Directory**: Tempat Anda mengetik dan mengubah kode file.
2. **Staging Area (Index)**: Area persiapan tempat Anda memilih file mana saja yang siap disimpan.
3. **Repository (Local Commit)**: Database tempat rekaman snapshot tersimpan secara permanen.

### 2. Istilah Penting
- **`git status`**: Mengecek status perubahan file di Working Directory & Staging Area.
- **`git add`**: Memindahkan perubahan file dari Working Directory ke Staging Area.
- **`git commit`**: Menyimpan file di Staging Area ke dalam riwayat repositori beserta pesan penjelasan.
- **`git log`**: Menampilkan daftar riwayat commit yang pernah dibuat.

### 3. Penjelasan Mendalam
Alur Siklus 3 Langkah Git:
```
[ Working Directory ] --(git add)--> [ Staging Area ] --(git commit)--> [ Repository ]
```

Contoh Perintah:
- `git add index.html`: Memindahkan file `index.html` ke Staging.
- `git add .`: Memindahkan SEMUA perubahan file di folder ke Staging.
- `git commit -m "feat: tambah halaman login"`: Menyimpan commit dengan pesan bermakna.
- `git log --oneline`: Menampilkan riwayat commit ringkas 1 baris.

### 4. Contoh Sederhana
Langkah Commit Pertama:
```bash
git status
git add .
git commit -m "initial commit: struktur awal proyek"
git log --oneline
```

### 5. Contoh Penggunaan di Dunia Nyata
Setiap kali menyelesaikan 1 fitur kecil (seperti membuat tombol login), developer melakukan `git add .` dan `git commit -m "fix: perbaiki validasi email"` agar riwayat perubahan rapi dan mudah dilacak.

### 6. Best Practice
- Tuliskan pesan commit yang **jelas dan bermakna** (Gunakan standar Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`).
- Jangan menumpuk perubahan terlalu banyak sebelum melakukan commit. Buat commit kecil tapi sering (*commit early, commit often*).

### 7. Kesalahan yang Sering Dilakukan
- Menuliskan pesan commit yang asal-asalan seperti `git commit -m "update"` atau `git commit -m "asdfasdf"`. Ini menyusahkan pelacakan bug di masa depan!

### 8. Tips
Gunakan `git diff` untuk melihat detail perbedaan baris kode mana saja yang baru Anda ubah sebelum di-commit.

### 9. Ringkasan
`git status` cek status, `git add` pilih file ke staging, `git commit -m "pesan"` simpan snapshot, `git log` lihat riwayat.

---

### 📝 QUIZ MODUL 3 (10 Soal)

**Soal 1:** Area persiapan sementara tempat file dikumpulkan sebelum disimpan ke riwayat commit disebut...  
A. Working Directory | B. Staging Area (Index) | C. Cloud | D. Branch

**Soal 2:** Perintah CLI Git untuk mengecek file mana saja yang baru diubah atau belum di-staging adalah...  
A. `git status` | B. `git log` | C. `git check` | D. `git info`

**Soal 3:** Perintah untuk memindahkan SEMUA perubahan file di direktori saat ini ke Staging Area adalah...  
A. `git add .` | B. `git push` | C. `git save` | D. `git commit -a`

**Soal 4:** Flag `-m` pada perintah `git commit -m "pesan"` berfungsi untuk...  
A. Mematikan Git | B. Menyertakan pesan penjelasan (*message*) untuk commit tersebut | C. Mengubah cabang | D. Menghapus file

**Soal 5:** Perintah untuk melihat daftar sejarah riwayat commit yang pernah dibuat sebelumnya adalah...  
A. `git history` | B. `git log` | C. `git list` | D. `git status`

**Soal 6:** Perintah `git log --oneline` akan menampilkan riwayat commit dalam format...  
A. Ringkas (1 baris per commit) | B. Gambar grafik | C. Teks penuh 100 halaman | D. Format PDF

**Soal 7:** Kode hash unik berkarakter 40 digit (seperti `a1b2c3d...`) yang dimiliki setiap commit dinamakan...  
A. IP Hash | B. Commit SHA Hash | C. Password | D. Token

**Soal 8:** Perintah CLI Git untuk melihat perbedaan baris kode persis yang diubah sebelum di-commit adalah...  
A. `git diff` | B. `git compare` | C. `git view` | D. `git status`

**Soal 9:** Mengapa pesan commit seperti `git commit -m "fix bug login"` dianggap jauh lebih baik daripada `git commit -m "test"`?  
A. Karena memberi konteks penjelasan yang jelas bagi tim developer saat mencari titik kesalahan kode | B. Karena file jadi cepat | C. Karena wajib oleh terminal | D. Agar virus hilang

**Soal 10:** Berada di area manakah file saat status `git status` menampilkan warna MERAH (*Untracked / Modified*)?  
A. Repository | B. Working Directory (Belum di-add ke Staging Area) | C. Cloud GitHub | D. Trash

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 3
1. **B (Staging Area)** — Area persiapan staging.
2. **A (`git status`)** — Cek status repositori.
3. **A (`git add .`)** — Add all files to staging.
4. **B (Menyertakan pesan penjelasan)** — Commit message flag.
5. **B (`git log`)** — History log viewer.
6. **A (Ringkas 1 baris per commit)** — Concise log output.
7. **B (Commit SHA Hash)** — Unique commit identifier.
8. **A (`git diff`)** — Line-by-line code difference.
9. **A (Memberi konteks penjelasan yang jelas)** — Meaningful commit history.
10. **B (Working Directory)** — Warna merah = belum di-staging.

---

### 🏋️ Latihan & Mini Project Modul 3
- **Latihan**: Buat file `hello.txt`, tambahkan teks, jalankan `git status` -> `git add .` -> `git commit -m "feat: tambah hello.txt"`.
- **Mini Project**: Tampilkan riwayat commit Anda dalam format ringkas dengan `git log --oneline`.

```bash
git log --oneline -n 5
```

---
---

# 📖 MODUL 4: PENGELOLAAN CABANG (`git branch`, `git checkout`, `git switch`)

### 1. Penjelasan Teori yang Mudah Dipahami
Bayangkan Anda sedang membuat game dan ingin mencoba fitur eksperimen baru tanpa merusak game utama yang sedang dimainkan orang. 

Di Git, Anda membuat **Branch (Cabang)**. Branch adalah garis sejarah pengembangan terpisah dari cabang utama (`main` / `master`). Anda bebas bereksperimen di branch baru tanpa mengganggu kode di cabang utama.

### 2. Istilah Penting
- **`main` / `master`**: Cabang utama yang berisi kode stabil produksi.
- **Branch (Cabang)**: Garis pengembangan fitur terisolasi.
- **`git branch`**: Perintah membuat atau melihat daftar cabang.
- **`git switch` / `git checkout`**: Perintah berpindah dari satu cabang ke cabang lain.

### 3. Penjelasan Mendalam
Penggunaan Branching di Industri (Git Flow):
- **`main`**: Kode stabil produksi rilis.
- **`staging` / `develop`**: Kode pengujian integrasi.
- **`feature/login`**: Cabang khusus pembuatan fitur login.
- **`hotfix/bug-checkout`**: Cabang khusus perbaikan darurat bug.

Perintah Utama:
- `git branch feature/login`: Membuat cabang baru bernama `feature/login`.
- `git switch feature/login` (atau `git checkout feature/login`): Berpindah ke cabang `feature/login`.
- `git switch -c feature/register`: Membuat cabang baru SEKALIGUS langsung berpindah ke sana.

### 4. Contoh Sederhana
Membuat dan berpindah ke cabang fitur baru:
```bash
git switch -c feature/payment
git status
# Output: Switched to a new branch 'feature/payment'
```

### 5. Contoh Penggunaan di Dunia Nyata
Developer A mengerjakan fitur transaksi di branch `feature/payment`. Developer B mengerjakan fitur profil di branch `feature/profile`. Pekerjaan keduanya **tidak akan pernah bentrok atau saling menimpa** selama berada di branch berbeda!

### 6. Best Practice
- HINDARI KODING LANGSUNG DI CABANG `main`! Selalu buat branch baru untuk setiap fitur atau bugfix yang Anda kerjakan.

### 7. Kesalahan yang Sering Dilakukan
- Lupa di cabang mana sedang berada, lalu mengedit kode fitur di cabang `main` produksi.

### 8. Tips
Gunakan `git branch -a` untuk melihat seluruh daftar cabang lokal dan remote.

### 9. Ringkasan
Branch mengisolasi pekerjaan fitur baru dari cabang utama `main`. Gunakan `git switch -c nama-branch` untuk buat & pindah cabang.

---

### 📝 QUIZ MODUL 4 (10 Soal)

**Soal 1:** Cabang utama pada repositori Git yang berisi kode stabil produksi biasanya dinamakan...  
A. `dev` | B. `main` atau `master` | C. `test` | D. `temp`

**Soal 2:** Tujuan utama dari pembuatan **Branch (Cabang)** di Git adalah...  
A. Mengisolasi pengembangan fitur baru agar tidak merusak kode utama yang sedang berjalan | B. Menghapus kode lama | C. Mempercepat koneksi | D. Mengompresi file

**Soal 3:** Perintah CLI Git paling modern untuk berpindah ke cabang lain adalah...  
A. `git switch nama-branch` | B. `git move nama-branch` | C. `git open nama-branch` | D. `git change nama-branch`

**Soal 4:** Perintah untuk membuat cabang baru bernama `feature/cart` SEKALIGUS langsung berpindah ke sana adalah...  
A. `git switch -c feature/cart` (atau `git checkout -b feature/cart`) | B. `git new feature/cart` | C. `git make feature/cart` | D. `git branch -all feature/cart`

**Soal 5:** Perintah CLI untuk melihat daftar seluruh cabang yang ada di repositori lokal adalah...  
A. `git branch` | B. `git list` | C. `git show` | D. `git tree`

**Soal 6:** Tanda bintang (`*`) di samping nama cabang pada hasil `git branch` mengindikasikan...  
A. Cabang terhapus | B. Cabang aktif tempat Anda berada saat ini | C. Cabang error | D. Cabang utama

**Soal 7:** Perintah CLI untuk menghapus cabang lokal bernama `feature/old` yang sudah tidak terpakai adalah...  
A. `git branch -d feature/old` | B. `git delete feature/old` | C. `git rm feature/old` | D. `git kill feature/old`

**Soal 8:** Apa akibat buruk jika seorang developer koding dan eksperimen fitur langsung di cabang `main`?  
A. Kode produksi yang sedang berjalan di server bisa rusak (*crash*) jika eksperimen gagal | B. Hardisk terbakar | C. Internet terputus | D. Laptop mati

**Soal 9:** Istilah pembuatan cabang khusus untuk perbaikan bug darurat di produksi adalah...  
A. `hotfix` branch | B. `coldfix` branch | C. `slowfix` branch | D. `junk` branch

**Soal 10:** Perintah lama di Git yang juga digunakan untuk berpindah cabang (selain `git switch`) adalah...  
A. `git checkout` | B. `git goto` | C. `git jump` | D. `git select`

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 4
1. **B (`main` atau `master`)** — Standard production branch.
2. **A (Mengisolasi pengembangan fitur baru)** — Manfaat isolasi branch.
3. **A (`git switch nama-branch`)** — Modern Git switch command.
4. **A (`git switch -c feature/cart`)** — Create & Switch shortcut.
5. **A (`git branch`)** — List local branches.
6. **B (Cabang aktif tempat berada saat ini)** — Active branch indicator.
7. **A (`git branch -d feature/old`)** — Delete branch.
8. **A (Kode produksi di server bisa rusak jika eksperimen gagal)** — Alasan jangan dev di main.
9. **A (`hotfix` branch)** — Emergency fix branch naming.
10. **A (`git checkout`)** — Legacy checkout command.

---

### 🏋️ Latihan & Mini Project Modul 4
- **Latihan**: Buat cabang `feature/profile`, pindah ke sana, buat commit baru, lalu kembali ke `main`.
- **Mini Project**: Tampilkan daftar cabang aktif dengan `git branch`.

```bash
git switch -c feature/profile
touch profile.js && git add . && git commit -m "feat: tambah profile.js"
git switch main
```

---
---

# 📖 MODUL 5: PENGGABUNGAN KODE & CONFLICT RESOLUTION (`git merge`, `git rebase`)

### 1. Penjelasan Teori yang Mudah Dipahami
Setelah selesai membuat fitur baru di cabang `feature/login`, Anda harus menggabungkan kode tersebut kembali ke cabang utama `main`. Proses penggabungan ini dinamakan **Merge**.

Jika dua developer mengedit baris kode yang sama pada file yang sama secara bersamaan, Git akan menghentikan penggabungan dan meminta Anda melakukan **Conflict Resolution** (Resolusi Konflik).

### 2. Istilah Penting
- **`git merge`**: Penggabungan riwayat dari cabang fitur ke cabang target.
- **Merge Conflict**: Kondisi di mana Git tidak bisa menentukan kode mana yang benar karena perubahan bentrok di baris yang sama.
- **Fast-Forward Merge**: Merge cepat di mana cabang target hanya memajukan penunjuk commit tanpa mebuat commit merge baru.
- **`HEAD`**: Penunjuk lokasi commit/cabang aktif saat ini.

### 3. Penjelasan Mendalam
Tanda Merge Conflict di dalam File Teks:
```html
<<<<<<< HEAD (Cabang Saat Ini / main)
<h1>Selamat Datang di KodeKu Indonesia</h1>
=======
<h1>Selamat Datang di Platform Edukasi KodeKu</h1>
>>>>>>> feature/login (Cabang Yang Ingin Digabung)
```

Langkah Menyelesaikan Merge Conflict:
1. Buka file yang berkonflik di editor (VS Code akan memberi pilihan visual).
2. Pilih kode mana yang mau dipertahankan (Accept Current Change / Accept Incoming Change / Accept Both).
3. Hapus tanda penanda conflict (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Simpan file -> lakukan `git add .` -> jalankan `git commit -m "fix: resolve merge conflict"`.

### 4. Contoh Sederhana
Menggabungkan branch `feature/login` ke `main`:
```bash
git switch main
git merge feature/login
```

### 5. Contoh Penggunaan di Dunia Nyata
Di tim pengembang, konflik kode (*merge conflict*) adalah hal normal sehar-hari. Developer berpengalaman tidak akan panik saat ada conflict, melainkan mendiskusikannya dengan rekan tim untuk memilih kode mana yang benar.

### 6. Best Practice
- Sering-seringlah melakukan `git merge main` ke dalam branch fitur Anda selama masa pengerjaan agar branch Anda tidak tertinggal jauh dari kode utama.

### 7. Kesalahan yang Sering Dilakukan
- Panik dan menghapus folder proyek saat terjadi Merge Conflict! Konflik sangat mudah diselesaikan hanya dengan mengedit teks pilihan.

### 8. Tips
Gunakan perintah `git merge --abort` jika Anda ingin membatalkan proses merge yang sedang mengalami konflik dan mengembalikan keadaan seperti semula.

### 9. Ringkasan
`git merge` menggabungkan cabang. Jika terjadi konflik di baris sama, pilih kode yang benar, hapus tanda marker conflict, lalu commit.

---

### 📝 QUIZ MODUL 5 (10 Soal)

**Soal 1:** Perintah CLI Git untuk menggabungkan kode dari cabang fitur ke cabang aktif adalah...  
A. `git join` | B. `git merge` | C. `git combine` | D. `git connect`

**Soal 2:** Kondisi di mana Git tidak dapat menggabungkan kode secara otomatis karena terdapat perubahan di baris file yang sama dinamakan...  
A. Memory Leak | B. Merge Conflict | C. Hard Crash | D. Network Error

**Soal 3:** Penanda batas kode cabang saat ini pada tampilan file yang mengalami Merge Conflict disimbolkan dengan...  
A. `<<<<<<< HEAD` | B. `*******` | C. `#######` | D. `???????`

**Soal 4:** Penanda pemisah antara kode cabang saat ini dan kode cabang yang ingin digabung disimbolkan dengan...  
A. `=======` | B. `-------` | C. `+++++++` | D. `|||||||`

**Soal 5:** Langkah WAJIB yang harus dilakukan setelah menyelesaikan edit file konflik adalah...  
A. `git add .` lalu `git commit` | B. Mematikan laptop | C. `git init` | D. Menghapus folder `.git`

**Soal 6:** Perintah untuk membatalkan proses merge yang sedang mengalami konflik dan mengembalikan posisi sebelum merge adalah...  
A. `git merge --abort` | B. `git cancel` | C. `git stop` | D. `git reset --hard`

**Soal 7:** Jenis penggabungan di mana cabang target hanya memajukan penunjuk commit tanpa perlu commit merge tambahan disebut...  
A. Fast-Forward Merge | B. Slow Merge | C. Manual Merge | D. Hard Merge

**Soal 8:** Istilah `HEAD` pada repositori Git mengacu pada...  
A. Penunjuk lokasi commit / cabang aktif tempat Anda berada saat ini | B. Folder root | C. File paling atas | D. Server GitHub

**Soal 9:** Mengapa kita harus sesering mungkin menggabungkan kode terbaru dari cabang `main` ke branch fitur kita?  
A. Meminimalkan risiko penumpukan Merge Conflict besar di akhir pengerjaan | B. Membesarkan ukuran repo | C. Menghapus branch main | D. Agar cepat di-hire

**Soal 10:** Perintah alternatif penggabungan kode yang menyusun ulang riwayat commit secara linier adalah...  
A. `git rebase` | B. `git sort` | C. `git align` | D. `git clean`

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 5
1. **B (`git merge`)** — Merge branches command.
2. **B (Merge Conflict)** — Bentrokan baris perubahan kode.
3. **A (`<<<<<<< HEAD`)** — Conflict marker start (current change).
4. **A (`=======`)** — Conflict marker separator.
5. **A (`git add .` lalu `git commit`)** — Staging & commit conflict resolution.
6. **A (`git merge --abort`)** — Abort conflicting merge.
7. **A (Fast-Forward Merge)** — Clean linear pointer move.
8. **A (Penunjuk lokasi commit/cabang aktif)** — Current HEAD pointer.
9. **A (Meminimalkan penumpukan Merge Conflict)** — Continuous integration benefit.
10. **A (`git rebase`)** — Rebase commit history linear.

---

### 🏋️ Latihan & Mini Project Modul 5
- **Latihan**: Buat branch `fitur1`, ubah `index.html`. Kembali ke `main`, ubah `index.html` di baris yang sama. Lakukan `git merge fitur1`, amati conflict dan selesaikan!
- **Mini Project**: Selesaikan conflict dan lakukan `git commit -m "fix: resolve conflict"`.

---
---

# 📖 MODUL 6: REMOTE REPOSITORY (`git remote`, `git push`, `git pull`, `git fetch`)

### 1. Penjelasan Teori yang Mudah Dipahami
Sejauh ini repositori Git Anda hanya ada di laptop Anda sendiri. Jika laptop rusak, kode hilang!

**Remote Repository** (seperti GitHub / GitLab) adalah repositori versi cloud di internet. Anda mengunggah (*Push*) atau mendownload (*Pull*) riwayat commit dari cloud server.

### 2. Istilah Penting
- **`origin`**: Nama default bawaan untuk alamat remote repository cloud Anda.
- **`git remote add origin <URL>`**: Menghubungkan repositori lokal ke repositori cloud GitHub.
- **`git push`**: Mengunggah commit lokal ke cloud GitHub.
- **`git pull`**: Mendownload DAN menggabungkan commit terbaru dari cloud GitHub ke lokal.
- **`git fetch`**: Hanya mendownload informasi commit terbaru dari cloud TANPA langsung menggabungkannya.

### 3. Penjelasan Mendalam
Alur Hubungan Local & Remote:
- Mengunggah commit pertama kali: `git push -u origin main`
- Mengunggah commit berikutnya: `git push`
- Mengambil update dari cloud: `git pull origin main`

### 4. Contoh Sederhana
Menghubungkan repositori ke GitHub:
```bash
git remote add origin https://github.com/username/kodeku-app.git
git branch -M main
git push -u origin main
```

### 5. Contoh Penggunaan di Dunia Nyata
Setiap sore sebelum pulang kantor, seluruh developer menjalankan `git push` agar kodingan hari itu tersimpan aman di cloud server GitHub.

### 6. Best Practice
- Jalankan `git pull` setiap pagi sebelum memulai koding agar laptop Anda selalu memiliki versi kode terbaru yang di-push oleh rekan tim lain.

### 7. Kesalahan yang Sering Dilakukan
- Melakukan `git push` saat lokal Anda tertinggal dari remote. Git akan menolak `push rejected`. Anda harus `git pull` terlebih dahulu!

### 8. Tips
Gunakan `git remote -v` untuk melihat alamat URL repositori remote yang sedang terhubung.

### 9. Ringkasan
`git remote` hubungkan repo, `git push` upload commit ke cloud, `git pull` download update terbaru dari cloud.

---

### 📝 QUIZ MODUL 6 (10 Soal)

**Soal 1:** Nama panggilan standar bawaan (*alias*) untuk alamat URL remote repository pada Git adalah...  
A. `origin` | B. `master` | C. `cloud` | D. `server`

**Soal 2:** Perintah CLI Git untuk mengunggah commit dari laptop lokal ke server cloud GitHub adalah...  
A. `git push` | B. `git upload` | C. `git send` | D. `git export`

**Soal 3:** Perintah CLI Git untuk mendownload DAN langsung menggabungkan update commit terbaru dari GitHub ke laptop adalah...  
A. `git pull` | B. `git download` | C. `git fetch` | D. `git import`

**Soal 4:** Perbedaan utama antara `git fetch` dan `git pull` adalah...  
A. `git fetch` hanya mendownload informasi update tanpa menggabungkannya ke kode lokal, sedangkan `git pull` langsung melakukan merge | B. `git fetch` menghapus file | C. `git pull` lebih lambat | D. Sama saja

**Soal 5:** Perintah untuk menghubungkan repositori lokal ke URL repositori GitHub baru adalah...  
A. `git remote add origin <URL>` | B. `git connect <URL>` | C. `git link <URL>` | D. `git set-cloud <URL>`

**Soal 6:** Opsi `-u` pada perintah `git push -u origin main` berfungsi untuk...  
A. Menetapakan pelacakan hulu (*upstream tracking*) default sehingga di masa depan cukup mengetik `git push` | B. Menghapus cabang | C. Mengunci repo | D. Mengenkripsi

**Soal 7:** Perintah CLI untuk mengecek alamat URL remote repository yang sedang terhubung ke proyek Anda adalah...  
A. `git remote -v` | B. `git remote list` | C. `git check` | D. `git url`

**Soal 8:** Apa yang harus dilakukan jika `git push` ditolak (*rejected*) karena ada commit baru rekan tim di GitHub?  
A. Menghapus folder repo | B. Jalankan `git pull` terlebih dahulu untuk menggabungkan update terbaru, baru kemudian `git push` | C. Matikan laptop | D. Buat email baru

**Soal 9:** Perintah untuk mengkloning / mendownload seluruh repositori proyek GitHub ke komputer lokal untuk pertama kali adalah...  
A. `git clone <URL>` | B. `git copy <URL>` | C. `git download <URL>` | D. `git install <URL>`

**Soal 10:** Protokol aman yang paling direkomendasikan untuk autentikasi `git push` ke GitHub tanpa mengetik password berulang kali adalah...  
A. SSH Key atau Personal Access Token (PAT) | B. HTTP Polos | C. SMS OTP | D. Bluetooth

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 6
1. **A (`origin`)** — Default remote alias.
2. **A (`git push`)** — Upload commits to remote.
3. **A (`git pull`)** — Download & merge remote changes.
4. **A (`git fetch` tidak merge vs `git pull` auto-merge)** — Bedanya fetch & pull.
5. **A (`git remote add origin <URL>`)** — Add remote connection.
6. **A (Menetapkan upstream tracking default)** — Set upstream link.
7. **A (`git remote -v`)** — View remote URLs.
8. **B (Jalankan `git pull` terlebih dahulu)** — Resolve out-of-sync pushes.
9. **A (`git clone <URL>`)** — Clone repository.
10. **A (SSH Key atau Personal Access Token)** — Modern GitHub auth standards.

---

### 🏋️ Latihan & Mini Project Modul 6
- **Latihan**: Jalankan `git remote -v` di proyek Anda.
- **Mini Project**: Clone repositori sampel public dari GitHub ke komputer Anda (`git clone https://github.com/octocat/Spoon-Knife.git`).

---
---

# 📖 MODUL 7: GITHUB FUNDAMENTALS (ISSUES, PULL REQUESTS, REVIEWS)

### 1. Penjelasan Teori yang Mudah Dipahami
GitHub bukan sekadar tempat menaruh kode. GitHub adalah **Platform Kolaborasi Tim**.

- **Issues**: Papan laporan bug atau daftar tugas fitur yang harus dikerjakan.
- **Pull Request (PR)**: Permohonan dari seorang developer ke pemilik repositori untuk menggabungkan kode fitur barunya.
- **Code Review**: Proses di mana rekan tim memeriksa dan memberi komentar pada kode di PR sebelum disetujui (*Approved*).

### 2. Istilah Penting
- **Pull Request (PR)**: Permintaan penggabungan branch fitur ke `main`.
- **Code Review**: Peninjauan kualitas kode oleh tim senior.
- **Fork**: Membuat salinan repositori orang lain ke akun GitHub sendiri untuk bebas dimodifikasi (dasar kontribusi Open Source).
- **GitHub Actions**: Layanan otomatisasi CI/CD di GitHub.

### 3. Penjelasan Mendalam
Alur Kerja Industri Standard (Pull Request Workflow):
1. Developer membuat branch `feature/payment` lokal.
2. Selesai koding -> `git push origin feature/payment`.
3. Buka GitHub -> Klik **Create Pull Request**.
4. Senior Developer melakukan **Code Review** (Memberikan kritik/saran pada baris kode).
5. Setelah disetujui (*Approved*) & tes CI/CD hijau -> Klik **Merge Pull Request**.

### 4. Contoh Sederhana
Menutup Issue otomatis via Commit Message:
- Menuliskan `git commit -m "fix: perbaiki bug login (closes #12)"` akan otomatis menutup Issue nomor 12 di GitHub saat di-merge!

### 5. Contoh Penggunaan di Dunia Nyata
Dalam proyek open-source populer (seperti React / Next.js), ribuan developer dunia berkolaborasi mengirimkan perbaikan bug menggunakan **Fork & Pull Request**.

### 6. Best Practice
- Jangan me-merge Pull Request milik sendiri tanpa persetujuan / review minimal dari 1 rekan tim lain (*Peer Code Review*).

### 7. Kesalahan yang Sering Dilakukan
- Membuat Pull Request yang terlalu raksasa (mengubah 100 file sekaligus). Buatlah Pull Request yang terfokus pada 1 tugas spesifik agar mudah direview.

### 8. Tips
Gunakan fitur GitHub Discussions untuk ruang tanya-jawab ide fitur baru sebelum dibuatkan Issue resmi.

### 9. Ringkasan
Issues pelacak tugas/bug, Pull Request (PR) permohonan merge kode, Code Review penjamin kualitas kode sebelum merge.

---

### 📝 QUIZ MODUL 7 (10 Soal)

**Soal 1:** Fitur di GitHub yang digunakan untuk mencatat laporan bug, diskusi tugas, atau ide fitur baru dinamakan...  
A. GitHub Issues | B. GitHub Wallet | C. GitHub Storage | D. GitHub Terminal

**Soal 2:** Fitur utama GitHub yang digunakan developer untuk memohon penggabungan kodenya dari cabang fitur ke cabang utama dinamakan...  
A. Push Request | B. Pull Request (PR) | C. Merge Ask | D. Sync Code

**Soal 3:** Proses peninjauan dan pemeriksaan kualitas kode oleh tim lain pada sebuah Pull Request dinamakan...  
A. Code Review | B. Code Audit | C. Code Format | D. Code Lock

**Soal 4:** Membuat salinan repositori milik orang lain ke dalam akun GitHub sendiri untuk berkontribusi di proyek Open Source dinamakan...  
A. Clone | B. Fork | C. Copy | D. Branch

**Soal 5:** Pesan commit `git commit -m "fix: solved issue (closes #5)"` saat di-merge akan berdampak...  
A. Otomatis menutup Issue nomor 5 di GitHub | B. Menghapus repo | C. Membuat 5 branch | D. Error

**Soal 6:** Mengapa melakukan Code Review sangat penting dalam tim pengembang perangkat lunak?  
A. Mencegah bug, menjaga standar kualitas kode, dan transfer pengetahuan antar developer | B. Memperlama rilis | C. Agar file mengecil | D. Syarat dari Windows

**Soal 7:** Istilah *Approved* pada Pull Request GitHub menandakan bahwa...  
A. Kode telah ditinjau dan disetujui oleh reviewer untuk digabungkan | B. Kode ditolak | C. Kode terhapus | D. Server crash

**Soal 8:** Fitur tampilan grafik kontribusi berwarna hijau di profil akun GitHub menandakan...  
A. Jumlah commit, PR, dan aktivitas kontribusi koding harian Anda | B. Saldo bank | C. Kecepatan internet | D. Jumlah follower

**Soal 9:** Apa saran ukuran terbaik saat membuat sebuah Pull Request?  
A. Fokus dan berukuran kecil (mudah dibaca reviewer) | B. Sebesar 10.000 file sekaligus | C. Kosong tanpa kode | D. Tanpa deskripsi

**Soal 10:** Layanan otomatisasi CI/CD bawaan dari platform GitHub dinamakan...  
A. GitHub Actions | B. GitHub Pipeline | C. GitHub Auto | D. GitHub Runner

---

#### 🔑 Jawaban & Pembahasan Quiz Modul 7
1. **A (GitHub Issues)** — Task & Bug tracking system.
2. **B (Pull Request - PR)** — Core collaboration mechanism.
3. **A (Code Review)** — Quality assurance step.
4. **B (Fork)** — Copy repo to personal account for OSS contribution.
5. **A (Otomatis menutup Issue nomor 5)** — GitHub smart commit message keyword.
6. **A (Mencegah bug & menjaga standar kualitas kode)** — Value of code reviews.
7. **A (Kode telah ditinjau dan disetujui)** — Approval status.
8. **A (Jumlah commit & kontribusi koding harian)** — Contribution graph.
9. **A (Fokus dan berukuran kecil)** — PR best practice.
10. **A (GitHub Actions)** — GitHub built-in CI/CD platform.

---

### 🏋️ Latihan & Mini Project Modul 7
- **Latihan**: Buka repositori public di GitHub, buat sebuah Issue laporan bug eksperimen.
- **Mini Project**: Lakukan Fork pada salah satu repositori open-source sampel.

---
---

# 📖 MODUL 8: MINI PROJECT — KOLABORASI PROYEK TIM DI GITHUB & PULL REQUEST WORKFLOW

### 1. Deskripsi Mini Project
Pada modul penutup Kelas 4 ini, Anda akan mempraktikkan **Seluruh Alur Kolaborasi Tim Industri (GitHub PR Workflow)**: Membuat branch fitur, mengubah kode, men-push branch ke GitHub, membuat Pull Request (PR), dan meng-merge kode secara otomatis.

### 2. Tujuan Mini Project
Mengintegrasikan seluruh pemahaman dari Modul 1-7 (Git Config, Init, Commit, Branching, Merge, Remote Push, dan GitHub PR) ke dalam simulasi kerja tim developer profesional.

### 3. Langkah-Langkah Pembuatan

#### Langkah 1: Buat Repositori Baru di GitHub
1. Buka [GitHub.com](https://github.com) -> Klik **New Repository**.
2. Beri nama `kodeku-team-project` -> Centang **Add a README file** -> Klik **Create repository**.

#### Langkah 2: Clone ke Komputer Lokal
```bash
git clone https://github.com/username/kodeku-team-project.git
cd kodeku-team-project
```

#### Langkah 3: Buat Branch Fitur Baru (`feature/add-profile`)
```bash
git switch -c feature/add-profile
```

#### Langkah 4: Tambahkan Kode Fitur Baru (`profile.json`)
Buat file `profile.json`:
```json
{
  "name": "Rian Pratama",
  "role": "Fullstack Developer",
  "skills": ["JavaScript", "Linux", "Git", "GitHub"]
}
```

#### Langkah 5: Commit & Push Branch ke GitHub
```bash
git add .
git commit -m "feat: tambah berkas profil siswa"
git push -u origin feature/add-profile
```

#### Langkah 6: Buat & Merge Pull Request di GitHub Web
1. Buka halaman repositori di `GitHub.com`.
2. Klik tombol hijau **Compare & pull request**.
3. Tuliskan deskripsi: *"Menambahkan data profil siswa baru."*
4. Klik **Create pull request**.
5. Klik **Merge pull request** -> Klik **Confirm merge**.

#### Langkah 7: Sinkronkan Kembali Laptop Lokal Anda
```bash
git switch main
git pull origin main
```

---

### 📝 QUIZ EVALUASI KELAS 4 (10 Soal)

**Soal 1:** Perintah untuk mendownload repositori dari GitHub ke laptop untuk pertama kali adalah...  
A. `git clone` | B. `git pull` | C. `git fetch` | D. `git init`

**Soal 2:** Setelah melakukan `git push origin feature/profile`, langkah selanjutnya di GitHub Web adalah...  
A. Membuat Pull Request (PR) | B. Menghapus repo | C. Membuat issue | D. Logout

**Soal 3:** Mengapa kita harus menjalankan `git switch main` dan `git pull origin main` di lokal setelah PR di-merge di GitHub?  
A. Agar kode di laptop lokal kita terbarui secara otomatis dengan hasil merge terbaru dari GitHub | B. Mencegah virus | C. Agar RAM tidak penuh | D. Syarat dari Nginx

**Soal 4:** Perintah `git push -u origin feature/branch-name` berfungsi untuk...  
A. Mengunggah cabang lokal baru ke remote GitHub sekaligus mengeset pelacakan hulu (*upstream*) | B. Menghapus cabang | C. Mengunci file | D. Menghapus commit

**Soal 5:** Tombol hijau yang diklik di GitHub Web untuk menyetujui dan menggabungkan Pull Request ke branch `main` adalah...  
A. Merge pull request | B. Delete repository | C. Cancel request | D. Close issue

**Soal 6:** File `README.md` di dalam repositori GitHub ditulis menggunakan format dokumentasi...  
A. Markdown (`.md`) | B. HTML | C. C++ | D. PDF

**Soal 7:** Apa keuntungan utama menggunakan Pull Request Workflow dibanding semua orang push langsung ke branch `main`?  
A. Ada proses peninjauan kode (*Code Review*) dan pengujian otomatis sehingga cabang `main` produksi selalu stabil | B. Supaya lambat | C. Mematikan terminal | D. Agar file besar

**Soal 8:** Perintah CLI untuk menghapus branch lokal `feature/add-profile` setelah selesai di-merge adalah...  
A. `git branch -d feature/add-profile` | B. `git delete` | C. `git remove` | D. `git drop`

**Soal 9:** Di manakah kita dapat melihat grafik riwayat penggabungan branch secara visual di GitHub?  
A. Tab **Insights** -> **Network** | B. Tab Settings | C. Tab Security | D. Tab Marketplace

**Soal 10:** Selamat! Setelah menyelesaikan Kelas 4, apa kompetensi utama yang Anda miliki?  
A. Mahir mengoperasikan Git CLI, mengelola commit/branching, menangani merge conflict, dan berkolaborasi tim di GitHub via Pull Request Workflow | B. Jualan laptop | C. Buat kabel LAN | D. Mengetik cepat

---

#### 🔑 Jawaban & Pembahasan Quiz Evaluasi Kelas 4
1. **A (`git clone`)** — Clone remote repository.
2. **A (Membuat Pull Request)** — Next step after pushing feature branch.
3. **A (Agar kode di laptop lokal terbarui)** — Local sync post-merge.
4. **A (Mengunggah cabang baru & set upstream)** — Upstream push flag.
5. **A (Merge pull request)** — GitHub PR merge button.
6. **A (Markdown `.md`)** — Standard documentation format.
7. **A (Ada proses Code Review & pengujian otomatis)** — Primary benefit of PR workflow.
8. **A (`git branch -d feature/add-profile`)** — Delete merged branch.
9. **A (Tab Insights -> Network)** — GitHub visual commit graph.
10. **A (Mahir mengoperasikan Git CLI...)** — Git & GitHub Mastery.

---

### 🎓 KESIMPULAN KELAS 4
Selamat! Anda telah menyelesaikan **Kelas 4: Git & GitHub Version Control**.
