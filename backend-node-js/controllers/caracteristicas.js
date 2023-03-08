const { response, request } = require("express");
const Caracteristica = require("../models/caracteristica");



const getCaracteristicas = async (req = request, res = response) => {
  const caracteristicas = await Caracteristica.find();
  res.json(caracteristicas);
}

// const getCaracteristicasById = async (req = request, res = response) => {
//   const { id } = req.params;
//   const caracteristica = await Caracteristica.findById(id);
//   res.json(caracteristica);
// }


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

// const putCaracteristicas = async (req = request, res = response) => {

//   const { id } = req.params;
//   const { _id, ...resto } = req.body;
//   const caracteristica = await Caracter
//   caracteristica.findByIdAndUpdate(id, resto);
//   res.json(caracteristica);
// }

// const deleteCaracteristicas = async (req = request, res = response) => {
//   const { id } = req.params;
//   const caracteristica = await Caracteristica.findByIdAndDelete(id);
//   res.json(caracteristica);
// }


module.exports = {
  getCaracteristicas,
  postCaracteristicas,
}



