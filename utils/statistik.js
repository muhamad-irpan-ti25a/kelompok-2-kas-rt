const { IURAN } = require("./status");

function hitungStatistik(daftar) {
  let total = 0;
  const belumLunas = [];

  for (const k of daftar) {
    total += k.jumlah;
    if (k.status !== "lunas") {
      belumLunas.push({ nama: k.nama, kekurangan: IURAN - k.jumlah });
    }
  }

  const jumlahLunas = daftar.length - belumLunas.length;
  const persentaseLunas = daftar.length
    ? Math.round((jumlahLunas / daftar.length) * 100)
    : 0;

  return {
    totalKas: total,
    jumlahAnggota: daftar.length,
    jumlahLunas,
    persentaseLunas: persentaseLunas + "%",
    belumLunas,
  };
}

module.exports = { hitungStatistik };