const express = require("express");
const c = require("../controllers/kasController");
const { validasiTambah, validasiUbah } = require("../middleware/validasi");

const router = express.Router();

// Route khusus HARUS di atas /:id
router.head("/", c.headAll);
router.get("/", c.getAll);
router.get("/statistik", c.statistik);
router.get("/lunas", c.lunas);
router.get("/belum-lunas", c.belumLunas);
router.get("/tunggakan", c.tunggakan);
router.get("/:id", c.getById);
router.post("/", validasiTambah, c.tambah);
router.put("/:id", validasiUbah, c.ubah);
router.patch("/:id", validasiUbah, c.ubah);
router.delete("/:id", c.hapus);

module.exports = router;