const mongoose = require("mongoose");
const collection = "pagos";

const pagoEsquema = {
    placa:{type:String,required:true},
    peaje:{type:String,required:true},
    tipo:{type:String,required:true},
    tarifa:{type:Number,required:true}
}
const options ={
    timestamps:true,
}

const schema = new mongoose.Schema(pagoEsquema, options);

const Pago =  mongoose.model(collection, schema);

module.exports = Pago;