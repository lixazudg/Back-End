const Usuario = require("./model");

const crearUsuario = async (req, res) =>{
    const {nombre, ident, correo, password, tarjeta, saldo} = req.body;

    const usuario = {
        nombre, ident, correo, password, tarjeta, saldo
    }

    const newUsers = new Usuario(usuario);
    newUsers.save().then(crearUsuario=>{
        res.status(200).json({newUsers});
    })
}


module.exports = {
    crearUsuario
}