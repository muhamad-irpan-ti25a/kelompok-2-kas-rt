const kas = require("../data/kas");
const { tentukanStatus, IURAN } = require("../utils/status");
const { hitungStatistik } = require("../utils/statistik");

exports.getAll = (req, res) => {
  res.json({ jumlah: kas.length, data: kas });
};

exports.getById = (req, res) => {
  const param = req.params.id;

  // Kalau ada tanda "=", berarti pencarian (contoh: nama=budi)
  if (param.includes("=")) {
    const f = new URLSearchParams(param);
    const nama = f.get("nama");
    const status = f.get("status");
    const tanggal = f.get("tanggal");
    const noRumah = f.get("noRumah");
    const bayar = f.get("bayar");
    let hasil = kas;

    if (nama) {
      hasil = hasil.filter((k) => k.nama.toLowerCase().includes(nama.toLowerCase()));
    }
    if (status) {
      hasil = hasil.filter((k) => k.status === status);
    }
    if (tanggal) {
      hasil = hasil.filter((k) => k.tanggal === tanggal);
    }
    if (noRumah) {
      hasil = hasil.filter((k) => k.noRumah === noRumah);
    }
    if (bayar === "ya") {
      hasil = hasil.filter((k) => k.jumlah > 0);
    }
    return res.json({ jumlah: hasil.length, data: hasil });
  }

  // Kalau tidak ada "=", berarti cari berdasarkan id
  const item = kas.find((k) => k.id === Number(param));
  if (!item) return res.status(404).json({ pesan: "Data tidak ditemukan" });
  res.json(item);
};

exports.statistik = (req, res) => {
  res.json(hitungStatistik(kas));
};

exports.lunas = (req, res) => {
  const hasil = kas.filter((k) => k.status === "lunas");
  res.json({ jumlah: hasil.length, data: hasil });
};

exports.belumLunas = (req, res) => {
  const hasil = kas.filter((k) => k.status !== "lunas");
  res.json({ jumlah: hasil.length, data: hasil });
};

exports.tunggakan = (req, res) => {
  let total = 0;
  for (const k of kas) {
    if (k.status !== "lunas") {
      total += IURAN - k.jumlah;
    }
  }
  res.json({ iuranPerWarga: IURAN, totalTunggakan: total });
};

exports.tambah = (req, res) => {
  const { nama, noRumah, jumlah, tanggal } = req.body;
  const baru = {
    id: kas.length ? kas[kas.length - 1].id + 1 : 1,
    nama,
    noRumah,
    jumlah: Number(jumlah),
    tanggal,
    status: tentukanStatus(Number(jumlah)),
  };
  kas.push(baru);
  res.status(201).json(baru);
};

exports.ubah = (req, res) => {
  const item = kas.find((k) => k.id === Number(req.params.id));
  if (!item) return res.status(404).json({ pesan: "Data tidak ditemukan" });

  const { nama, noRumah, jumlah, tanggal } = req.body || {};
  if (nama) item.nama = nama;
  if (noRumah) item.noRumah = noRumah;
  if (tanggal) item.tanggal = tanggal;
  if (jumlah !== undefined) item.jumlah = Number(jumlah);
  item.status = tentukanStatus(item.jumlah);

  res.json(item);
};

exports.hapus = (req, res) => {
  const idx = kas.findIndex((k) => k.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ pesan: "Data tidak ditemukan" });

  const [dihapus] = kas.splice(idx, 1);
  res.json({ pesan: "Berhasil dihapus", data: dihapus });
};

exports.headAll = (req, res) => {
  res.set("X-Total-Data", String(kas.length));
  res.end();
};