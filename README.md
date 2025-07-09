UAS PBK - Aplikasi Belajar Frontend 

Nama: Rahmat Firman Syaputra
NPM: 233510773
Repository: RahmatFirmanSyaputra-uaspbk
Framework: Vue 3 + Vite
State Management: Pinia
Mock API: JSON Server
Unit Test: Vitest


Deskripsi Proyek
Aplikasi ini merupakan tugas akhir dari mata kuliah Pemrograman Berbasis Komponen (PBK) yang bertujuan memberikan panduan belajar frontend developer. Aplikasi ini dibangun menggunakan Vue 3 + Vite**, dilengkapi dengan routing, state management (Pinia), autentikasi lokal, serta konsumsi API dari json-server.Aplikasi Panduan Belajar Frontend Developer adalah platform pembelajaran yang menampilkan daftar materi dasar hingga lanjutan terkait pengembangan frontend. Materi disajikan berdasarkan kategori dan bisa disimpan sebagai favorit oleh pengguna.

Pengguna dapat melihat daftar materi belajar, membaca penjelasan lengkap, menambahkan materi ke favorit, serta login/register menggunakan `localStorage`.



 Fitur Utama
Login dan Register (dengan validasi localStorage + JSON Server)
Daftar Materi lengkap dari berbagai topik frontend
Favoritkan materi yang disukai
Filter materi berdasarkan kategori
Detail halaman materi lengkap dengan isi pembelajaran
Menyimpan data user login menggunakan Pinia
Data diambil secara dinamis dari JSON Server
Unit test menggunakan Vitest untuk menguji store/materi


Teknologi yang Digunakan

- Vue.js 3
- Vue Router
- Pinia
- Vite
- JSON Server (API lokal)
- Bootstrap 5
- Vitest (untuk unit testing)

---

Struktur Folder
RahmatFirmanSyaputra-uaspbk/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── (opsional: gambar/icon)
│
│   ├── components/
│   │   ├── Navbar.vue
│   │   └── Sidebar.vue (jika ada)
│
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── MateriList.vue
│   │   ├── MateriDetail.vue
│   │   ├── Favorit.vue
│   │   ├── Login.vue
│   │   └── Register.vue
│
│   ├── router/
│   │   └── index.js
│
│   ├── stores/
│   │   ├── userStore.js
│   │   └── materiStore.js
│
│   ├── App.vue
│   └── main.js
│
├── db.json                ← API mock json-server
├── package.json
├── vite.config.js
└── README.md              ← Penjelasan proyek


Endpoint API (JSON Server) =
Materi :
Method	Endpoint	Keterangan
GET	/materi	Ambil semua materi
GET	/materi/:id	Ambil detail materi tertentu
PATCH	/materi/:id	Update status favorit

User :
Method	Endpoint	Keterangan
POST	/users	Register user baru
GET	/users?username=x&password=y	Validasi login


Struktur Menu Navigasi :
Menu	Rute	Komponen
Home	/	Home.vue
Materi	/materi	MateriList.vue
Detail	/materi/:id	MateriDetail.vue
Favorit	/favorit	Favorit.vue
Login	/login	Login.vue
Register	/register	Register.vue

Penjelasan File-Filenya
File/Folder	Fungsi
src/components/Navbar.vue	Navigasi utama, termasuk link ke Home, Materi, Favorit, Login/Logout
src/pages/Home.vue	        Berisi hero section, kategori, dan materi unggulan
src/pages/MateriList.vue	Menampilkan semua materi dari JSON Server
src/pages/MateriDetail.vue	Menampilkan isi materi lengkap dan tombol favorit
src/pages/Favorit.vue	    Menampilkan daftar materi yang disukai/favorit
src/pages/Login.vue	        Halaman login (menggunakan localStorage dan Pinia)
src/pages/Register.vue	    Halaman register yang menyimpan akun ke JSON Server
src/stores/userStore.js	    Pinia store untuk menyimpan data user/login
src/stores/materiStore.js	Pinia store untuk fetch dan toggle materi favorit
src/router/index.js	        Routing halaman (/, /materi, /materi/:id, /login, /favorit)
db.json	                    Simulasi backend JSON Server untuk semua data materi dan user
README.md	P               Penjelasan proyek: fitur, cara jalanin, endpoint API, dll