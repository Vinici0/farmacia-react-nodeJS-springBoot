import React, { useEffect, useState } from "react";
import { ModalPersonal } from "./ModalPersonal";

export const PersonalList = ({
  foto,
  nombre,
  cedula,
  direccion,
  estado,
  id,
}) => {
  const [editData, setEditData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setEditData({
      foto,
      nombre,
      cedula,
      direccion,
      estado,
      id,
    });
    // console.log(editData);
    setShowModal(true);
  };


  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img className="w-10 h-10 rounded-full" src={foto} alt="Jese image" />
          <div className="pl-3">
            <div className="text-base font-semibold">{nombre}</div>
          </div>
        </th>
        <td className="px-6 py-4">{cedula}</td>
        <td className="px-6 py-4">
          {direccion.length > 20 ? direccion.slice(0, 20) + "..." : direccion}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                estado === 0 ? "bg-green-400" : "bg-red-500"
              } mr-2`}
            ></div>{" "}
            {estado === 0 ? "Online" : "Offline"}
          </div>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={handleEdit}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </button>
        </td>
        <td>
          <ModalPersonal
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
