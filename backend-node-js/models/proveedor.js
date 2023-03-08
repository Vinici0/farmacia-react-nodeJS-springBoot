const { Schema, model } = require("mongoose");

const ProveedorSchema = Schema({
    empresa: {
        type: String,
        required: [true, "El nombre de la empresa es obligatorio"],
    },
    direccion: {
        type: String,
        required: [true, "La dirección es obligatoria"],
    },
    telefono: {
        type: String,
        required: [true, "El teléfono es obligatorio"],
    },
});

module.exports = model("Proveedor", ProveedorSchema);
