const mongoose = require("mongoose");
const collection = "consorcio";

const consorcioEsquema = {
    nombre:{type:String,required:true},
    descripcion:{type:String,required:true}
}
const options ={
    timestamps:true,
}

const schema = new mongoose.Schema(consorcioEsquema, options);

const Consorcio =  mongoose.model(collection, schema);

module.exports = Consorcio;