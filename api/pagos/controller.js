const Pago = require("./model");

const crearPago = async (req, res) =>{
    const {placa, peaje, tipo, tarifa} = req.body;

    const pago = {
        placa, peaje, tipo, tarifa
    }

    const newPay = new Pago(pago);
    newPay.save().then(crearPago=>{
        res.status(200).json({newPay});
    })
}
const eliminarPago = async (req, res) =>{
    const {id}=req.body;
    const pagos = await Pago.deleteOne({_id:id});
    res.status(200).json({ pagos })
}

const listarPagos = async (req, res) =>{
    const pagos = await Pago.find();
    res.status(200).json({ pagos })
}

module.exports = {
    crearPago, eliminarPago, listarPagos
}