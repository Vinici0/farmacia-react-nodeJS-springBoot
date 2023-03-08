const { Router } = require("express");
const { check } = require("express-validator");
const { getFarmacias, postFarmacias, putFarmacias, deleteFarmacias } = require("../controllers/farmacias");

const router = Router();

router.get("/", getFarmacias);

router.get("/:id", getFarmacias);

router.post("/", postFarmacias);

router.put("/:id", putFarmacias);

router.delete("/:id", deleteFarmacias);

module.exports = router;
