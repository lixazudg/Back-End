const Consorcio = require("./model");

const crearConsorcio = async (req, res) =>{
    const {nombre, descripcion} = req.body;

    const consorcio = {
        nombre, descripcion
    }

    const newCons = new Consorcio(consorcio);
    newCons.save().then(consorcio=>{
        res.status(200).json({newCons});
    })
}

const listarConsorcio= async (req, res) =>{
    const consorcios = await Consorcio.find();
    res.status(200).json({ consorcios })
}

module.exports = {
    crearConsorcio, listarConsorcio
}