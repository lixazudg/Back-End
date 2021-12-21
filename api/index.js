const express = require("express");
const consorcios = require("./consorcios/router");
const pagos = require("./pagos/router");
const peajes = require("./peajes/router");
const usuarios = require("./usuarios/router");

const api= express();

api.use("/consorcios", consorcios);
api.use("/pagos", pagos);
api.use("/peajes", peajes);
api.use("/usuarios", usuarios);

module.exports = api;
