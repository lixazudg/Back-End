const express = require("express");
const {crearConsorcio, listarConsorcio} = require("./controller");

const router = express.Router();

router.route("/").post(crearConsorcio).get(listarConsorcio);
module.exports = router;