const { response, request } = require("express");
const Caracteristica = require("../models/caracteristica");

const getCaracteristicas = async (req = request, res = response) => {
  const caracteristicas = await Caracteristica.find();
  res.json(caracteristicas);
}

const postCaracteristicas = async (req = request, res = response) => {
  //  //Color, referencia, ubicacion
  const { color, referencia, ubicacion } = req.body;
  const data = {
    color,
    referencia,
    ubicacion,
  };

  const caracteristica = new Caracteristica(data);
  console.log(caracteristica);
  await caracteristica.save();

  res.status(201).json(caracteristica);
}

module.exports = {
  getCaracteristicas,
  postCaracteristicas,
}



