# API KAS RT - KELOMPOK 2 

Project ini merupakan tugas Project UTS pada mata kuliah Pemrograman Berbasis Server, yaitu membangun REST API Manajemen Kas RT menggunakan Node.js dan Express.js. Data disimpan menggunakan array dan object literal, dan pengujian dilakukan di Postman.

## Informasi Kelompok

- Nama Project: API Manajemen Kas RT
- Kelompok: 2
- Framework: Express.js
- Runtime: Node.js
- Port: 3000

## Anggota Kelompok

1. Almira Hardianti
2. Muhammad Jildan
3. Muhammad Irpan

## Deskripsi Aplikasi

Aplikasi ini membantu bendahara RT mencatat iuran kas warga. Iuran per warga adalah Rp20.000. Status pembayaran dihitung otomatis:

- `lunas`: bayar 20.000 atau lebih
- `kurang`: bayar lebih dari 0 tetapi kurang dari 20.000
- `belum`: bayar 0

## Daftar Route dan Contoh Pengujian

| Method | Route | Fungsi |
|---|---|---|
| GET | / | Pesan sambutan |
| GET | /info | Waktu server mulai dijalankan |
| GET | /anggota | Informasi kelompok dan anggota |
| GET | /kas | Tampilkan semua data kas |
| HEAD | /kas | Jumlah data lewat header X-Total-Data |
| GET | /kas/:id | Tampilkan satu data berdasarkan id |
| GET | /kas/nama=Almira | Cari berdasarkan nama |
| GET | /kas/status=lunas | Cari berdasarkan status lunas |
| GET | /kas/status=kurang | Cari berdasarkan status kurang |
| GET | /kas/status=belum | Cari berdasarkan status belum |
| GET | /kas/tanggal=2026-11-05 | Cari berdasarkan tanggal |
| GET | /kas/noRumah=28 | Cari berdasarkan nomor rumah |
| GET | /kas/statistik | Total kas, persentase lunas, daftar belum bayar |
| GET | /kas/lunas | Warga yang sudah lunas |
| GET | /kas/belum-lunas | Warga yang belum lunas |
| GET | /kas/tunggakan | Total tunggakan iuran |
| POST | /kas | Tambah data |
| PUT | /kas/:id | Ubah data |
| PATCH | /kas/:id | Ubah sebagian data |
| DELETE | /kas/:id | Hapus data |

Catatan: di kode terdapat 14 route. Enam baris pencarian (`nama=`, `status=`, `tanggal=`, `noRumah=`) menggunakan satu route yang sama, yaitu `GET /kas/:id`.

## Contoh Body (POST dan PUT)

POST /kas

```json
{"nama":"Juwita","noRumah":"19","jumlah":20000,"tanggal":"2026-11-05"}
```

PUT /kas/3

```json
{"jumlah":15000}
```

## Struktur Project

```
kas-rt/
├── controllers/
│   └── kasController.js
├── data/
│   └── kas.js
├── middleware/
│   └── validasi.js
├── routes/
│   └── kasRoutes.js
├── utils/
│   ├── status.js
│   └── statistik.js
├── screenshot/
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Instalasi dan Menjalankan Server

Pastikan Node.js dan npm sudah terinstal.

1. Instal package

```
npm install
```

2. Jalankan server

```
npm run dev
```

atau tanpa nodemon:

```
npm start
```

3. Akses server di http://localhost:3000/

## Pemenuhan Syarat Tugas

| Syarat | Implementasi |
|---|---|
| Minimal 5 route | 14 route di kode (20 contoh pengujian) |
| Tampil, tambah, cari, ubah, hapus | GET, POST, GET dengan pencarian, PUT/PATCH, DELETE |
| Array dan object literal | `data/kas.js` |
| Percabangan, perulangan, aritmatika | `if` di `utils/status.js`, `for...of` di `utils/statistik.js`, perhitungan total dan tunggakan |
| Modules dan packages | `require` dan `module.exports`, package `express`, `morgan`, `nodemon` |
| Pengujian Postman | Screenshot di folder `screenshot` |

## Teknologi yang Digunakan

- Node.js: menjalankan JavaScript di sisi server
- Express.js: pembuatan server dan routing
- Morgan: mencatat request di terminal
- Nodemon: restart server otomatis saat pengembangan
- JSON: format data response

## Kesimpulan

API Kas RT Kelompok 2 dibuat menggunakan Node.js dan Express.js. Aplikasi ini menerapkan CRUD, pencarian, statistik, percabangan, perulangan, aritmatika, serta pemisahan kode ke dalam modules dan penggunaan packages.

Kelompok 2 