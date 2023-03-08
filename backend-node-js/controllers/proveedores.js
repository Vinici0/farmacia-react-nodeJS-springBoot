const { response, request } = require("express");
const Proveedor = require("../models/proveedor");

const getProveedores = async (req = request, res = response) => {
  const proveedores = await Proveedor.find();
  res.json(proveedores);
};

const getProveedoresById = async (req = request, res = response) => {
  const { id } = req.params;
  const proveedor = await Proveedor.findById(id);
  res.json(proveedor);
};

const postProveedores = async (req = request, res = response) => {
  const { empresa, direccion, telefono } = req.body;
  const data = {
    empresa,
    direccion,
    telefono,
  };

  const proveedor = new Proveedor(data);
  console.log(proveedor);
  await proveedor.save();

  res.status(201).json(proveedor);
};

const putProveedores = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;
  const proveedor = await Proveedor.findByIdAndUpdate(id, resto);
  res.json(proveedor);
};

const deleteProveedores = async (req = request, res = response) => {
  const { id } = req.params;
  const proveedor = await Proveedor.findByIdAndDelete(id);
  res.json(proveedor);
};

module.exports = {
  getProveedores,
  getProveedoresById,
  postProveedores,
  putProveedores,
  deleteProveedores,
};
