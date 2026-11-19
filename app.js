const express = require("express");
const morgan = require("morgan");
const kasRoutes = require("./routes/kasRoutes");

const app = express();
const PORT = 3000;
const waktuMulai = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    pesan: "Selamat datang di API Manajemen Kas RT - Kelompok 2 Chernobyl",
    mataKuliah: "Pemrograman Berbasis Server",
    endpoint: "/kas",
  });
});

app.get("/info", (req, res) => {
  res.json({
    pesan: "Server Kelompok 2 dijalankan pada",
    waktu: waktuMulai,
  });
});

app.get("/anggota", (req, res) => {
  res.json({
    kelompok: "2",
    anggota: [{ nama: "Almira Hardianti" }, { nama: "Muhammad Jildan" }, { nama: "Muhammad Irpan" }],
  });
});

app.use("/kas", kasRoutes);

app.use((req, res) => {
  res.status(404).json({ pesan: "Route tidak ditemukan" });
});

app.listen(PORT, () => {
  console.log("======================================");
  console.log(" API KAS RT KELOMPOK 2 CHERNOBYL");
  console.log("======================================");
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`Waktu server dijalankan: ${waktuMulai}`);
  console.log("Route utama:");
  console.log(`- http://localhost:${PORT}/`);
  console.log(`- http://localhost:${PORT}/info`);
  console.log(`- http://localhost:${PORT}/anggota`);
  console.log(`- http://localhost:${PORT}/kas`);
  console.log("Tekan CTRL + C untuk menghentikan server.");
});