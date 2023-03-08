const { Router } = require("express");
const { getProveedores, deleteProveedores, putProveedores, postProveedores } = require("../controllers/proveedores");

const router = Router();

router.get("/", getProveedores );

router.get("/:id", getProveedores );

router.post("/", postProveedores );

router.put("/:id", putProveedores );

router.delete("/:id", deleteProveedores );

module.exports = router;