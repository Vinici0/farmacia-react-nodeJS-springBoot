const { Schema, model } = require("mongoose");


const CaracteristicaSchema = Schema({
  //Color, referencia, ubicacion
  color: {
    type: String,
  },
  referencia: {
    type: String,
  },
  ubicacion: {
    type: String,
  },
});

module.exports = model("Caracteristica", CaracteristicaSchema);


