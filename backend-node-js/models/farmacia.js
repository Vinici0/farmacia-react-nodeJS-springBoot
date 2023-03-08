const { Schema, model } = require("mongoose");

const FarmaciaSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    direccion: {
        type: String,
        required: [true, "La dirección es obligatoria"],
    },
    yearFundacion: {
        type: String,
        required: [true, "El año de fundación es obligatorio"],
    },
    caracteristica: {
      type: Schema.Types.ObjectId,
        ref: "Caracteristica",
    },
});

module.exports = model("Farmacia", FarmaciaSchema);

