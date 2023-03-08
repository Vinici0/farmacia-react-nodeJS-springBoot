const { response, request } = require("express");
const Farmacia = require("../models/farmacia");

const getFarmacias = async (req = request, res = response) => {
  const farmacias = await Farmacia.find();
  res.json(farmacias);
};

const getFarmaciasById = async (req = request, res = response) => {
  const { id } = req.params;
  const farmacia = await Farmacia.findById(id);
  res.json(farmacia);
};

const postFarmacias = async (req = request, res = response) => {
  const { nombre, direccion, yearFundacion } = req.body;
  const data = {
    nombre,
    direccion,
    yearFundacion,
  };

  const farmacia = new Farmacia(data);
  console.log(farmacia);
  await farmacia.save();

  res.status(201).json(farmacia);
};

const putFarmacias = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;
  const farmacia = await Farmacia.findByIdAndUpdate(id, resto);
  res.json(farmacia);
};

const deleteFarmacias = async (req = request, res = response) => {
  const { id } = req.params;
  const farmacia = await Farmacia.findByIdAndDelete(id);
  res.json(farmacia);
};

module.exports = {
  getFarmacias,
  getFarmaciasById,
  postFarmacias,
  putFarmacias,
  deleteFarmacias,
};
