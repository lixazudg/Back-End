const mongoose = require("mongoose");
const collection = "peaje";

const peajeEsquema = {
    nombre:{type:String,required:true},
    latitud:{type:String,required:true},
    longitud:{type:String,required:true},
    recaudo:{type:Number,required:true}
}
const options ={
    timestamps:true,
}

const schema = new mongoose.Schema(peajeEsquema, options);

const Peaje =  mongoose.model(collection, schema);

module.exports = Peaje;