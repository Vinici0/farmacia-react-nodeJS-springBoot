import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateEstadoProductoAsync } from "../../store/producto/productoSlice";
import { ModalProducto } from "./ModalProdcuto";

export const ListProdcuto = ({
  nombre,
  fechaCaducida,
  descripcion,
  foto,
  id,
  stock,
  precio,
  listProducto,
  setListProducto,
}) => {
  const [producto, setProducto] = useState({ id: null, estado: null });
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({});
  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    const updatedList = listProducto.filter((product) => product.id !== id);
    dispatch(updateEstadoProductoAsync({ id, estado: false }));
    setListProducto(updatedList);
    console.log("termino");
  };




  const handleEdit = () => {
    setEditData({
      nombre,
      fechaCaducida,
      descripcion,
      foto,
      id,
      stock,
      precio,
    });
    setShowModal(true);
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-32 p-4">
          <img src={foto} alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {nombre}
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {stock}
        </td>

        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {`${precio} $`}
        </td>
        <td className="px-6 py-4">
          <div className="flex justify-around">
            <button
              onClick={handleEdit}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => deleteProduct(id)}
              className="font-medium text-red-600 dark:text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </td>
        <td>
          <ModalProducto
            showModal={showModal}
            setShowModal={setShowModal}
            titulo={"Editar Personal"}
            data={editData}
          />
        </td>
      </tr>
    </>
  );
};
