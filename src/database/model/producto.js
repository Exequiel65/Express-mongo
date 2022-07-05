const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productoSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    cantidad : {
        type : Number
    },
    categoria : {
        type : String
    },
    control : {
        type : Schema.Types.ObjectId,
        ref : 'Prueba'
    }
  });
  
  const productoModel = mongoose.model("Producto", productoSchema);
  
  module.exports = productoModel;
  