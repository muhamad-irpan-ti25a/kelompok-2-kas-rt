function validasiTambah(req, res, next) {
  const { nama, noRumah, jumlah, tanggal } = req.body || {};

  if (!nama || !noRumah || jumlah === undefined || !tanggal) {
    return res.status(400).json({ nama: "", noRumah:"", jumlah:"", tanggal:"" });
  }
  if (isNaN(Number(jumlah)) || Number(jumlah) < 0) {
    return res.status(400).json({ pesan: "jumlah harus berupa angka >= 0" });
  }
  next();
}

function validasiUbah(req, res, next) {
  const { jumlah } = req.body || {};

  if (jumlah !== undefined && (isNaN(Number(jumlah)) || Number(jumlah) < 0)) {
    return res.status(400).json({ pesan: "jumlah harus berupa angka >= 0" });
  }
  next();
}

module.exports = { validasiTambah, validasiUbah };