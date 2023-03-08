const { Router } = require("express");
const { getCaracteristicas, postCaracteristicas } = require("../controllers/caracteristicas");


const router = Router();

router.get("/", getCaracteristicas );



router.post("/", postCaracteristicas );


module.exports = router;
