const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const pruebaSchema = new Schema({
    name: {
      type: String,
      required: true,
    }
  });
  
  const pruebaModel = mongoose.model("Prueba", pruebaSchema);
  
  module.exports = pruebaModel;
  