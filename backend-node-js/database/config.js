const mongoose = require("mongoose");

// Toda la configuración de la base de datos se encuentra en el archivo .env
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_AUTH);
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la DB. Ver logs.");
  }
};

module.exports = {
  dbConnection,
};
