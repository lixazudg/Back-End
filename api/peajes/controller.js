const Peaje = require("./model");

const crearPeaje = async (req, res) =>{
    const {nombre, latitud, longitud, recaudo} = req.body;

    const peaje = {
        nombre, latitud, longitud, recaudo
    }

    const newPeaje = new Peaje(peaje);
    newPeaje.save().then(peaje=>{
        res.status(200).json({newPeaje});
    })
}

const eliminarPeaje = async (req, res) =>{
    const {nombre}=req.body;
    const peajes = await Peaje.deleteOne({nombre:nombre});
    res.status(200).json({ peajes })
}

const listarPeaje = async (req, res) =>{
    const peajes = await Peaje.find();
    res.status(200).json({ peajes })
}

const actualizarPeaje = async (req, res) =>{
    const {nombre, recaudo}=req.body;
    const peajes = await Peaje.updateOne({nombre:nombre},{recaudo:recaudo});
    res.status(200).json({ peajes })
}

module.exports = {
    crearPeaje,
    eliminarPeaje,
    listarPeaje,
    actualizarPeaje
}