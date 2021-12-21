const express = require("express");
const {crearUsuario} = require("./controller");

const router = express.Router();

router.route("/").post(crearUsuario);
module.exports = router;
