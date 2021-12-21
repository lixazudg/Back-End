const express = require("express");
const {crearPeaje, eliminarPeaje, listarPeaje, actualizarPeaje} = require("./controller");

const router = express.Router();

router.route("/").get(listarPeaje).post(crearPeaje).delete(eliminarPeaje).patch(actualizarPeaje);
module.exports = router;