const express = require("express");
const {crearPago, eliminarPago, listarPagos} = require("./controller");

const router = express.Router();

router.route("/").post(crearPago).delete(eliminarPago).get(listarPagos);
module.exports = router;