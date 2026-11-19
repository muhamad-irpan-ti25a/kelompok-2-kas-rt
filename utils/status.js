const IURAN = 20000;

function tentukanStatus(jumlah) {
  if (jumlah >= IURAN) return "lunas";
  if (jumlah > 0) return "belum lunas";
  return "belum";
}

module.exports = { IURAN, tentukanStatus };