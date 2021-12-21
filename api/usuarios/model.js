const mongoose = require("mongoose");
const collection = "usuario";

const usuarioEsquema = {
    nombre:{type:String,required:true},
    ident:{type:String,required:true},
    correo:{type:String,required:true},
    password:{type:String,required:true},
    tarjeta:{type:String,required:false},
    saldo:{type:Number,required:false}
}
const options ={
    timestamps:true,
}

const schema = new mongoose.Schema(usuarioEsquema, options);

const Usuario =  mongoose.model(collection, schema);

module.exports = Usuario;