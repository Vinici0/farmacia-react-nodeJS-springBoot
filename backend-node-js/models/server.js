const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.path = {
      farmaciaPath: "/api/farmacias",
      proveedorPath: "/api/proveedores",
      caracteristicasPath: "/api/caracteristicas",
    };

    //Conectar a base de datos
    this.ConectorDB();

    // Middlewares
    this.middleware();

    //Rutas de mi aplicación
    this.router();
  }

  async ConectorDB() {
    await dbConnection();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  router() {
    this.app.use(this.path.farmaciaPath, require("../routes/farmacias"));
    this.app.use(this.path.proveedorPath, require("../routes/proveedores"));
    this.app.use(this.path.caracteristicasPath, require("../routes/caracteristicas"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${process.env.PORT}!`);
    });
  }
}

module.exports = Server;
