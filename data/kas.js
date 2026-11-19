const { IURAN } = require("../utils/status");

const kas = [
  { id: 1, nama: "Irpan", noRumah: "12", jumlah: 20000, tanggal: "05-11-2026" },
  { id: 2, nama: "Almira",  noRumah: "15", jumlah: 10000, tanggal: "07-11-2026" },
  { id: 3, nama: "Jildan", noRumah: "21", jumlah: 0, tanggal: "07-11-2026" },
  { id: 4, nama: "Rafi", noRumah: "28", jumlah: 5000, tanggal: "05-11-2026" },
  { id: 5, nama: "Memey", noRumah: "31", jumlah: 0, tanggal: "06-11-2026" },
  { id: 6, nama: "Reza", noRumah: "08", jumlah: 10000, tanggal: "06-11-2026" },
  { id: 7, nama: "Maria", noRumah: "18", jumlah: 20000, tanggal: "06-11-2026" },
  { id: 8, nama: "Chikal", noRumah: "06", jumlah: 20000, tanggal: "05-11-2026" },
];

for (const k of kas) {
  if (k.jumlah >= IURAN) {
    k.status = "lunas";
  } else if (k.jumlah > 0) {
    k.status = "kurang";
  } else {
    k.status = "belum";
  }
}

module.exports = kas;