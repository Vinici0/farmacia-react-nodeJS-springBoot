import React, { useState } from "react";
import { ModalPersonal } from "./ModalCliente";

export const ListCliente = ({ nombre, cedula, email, apellido, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({});

  
  const handleEdit = () => {
    setEditData({
      nombre,
      cedula,
      apellido,
      email,
      id,
    });
    // console.log(editData);
    setShowModal(true);
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        {/* <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img className="w-10 h-10 rounded-full" src={foto} alt="Jese image" />
          <div className="pl-3">
            <div className="text-base font-semibold">{nombre + apellido}</div>
          </div>
        </th> */}
        <td className="px-6 py-4">{nombre +" "+ apellido}</td>
        <td className="px-6 py-4">{cedula}</td>
        <td>{email.length > 20 ? email.slice(0, 20) + "..." : email}</td>
        {/* <td className="px-6 py-4">
          <div className="flex items-center">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                estado === 0 ? "bg-green-400" : "bg-red-500"
              } mr-2`}
            ></div>{" "}
            {estado === 0 ? "Online" : "Offline"}
          </div>
        </td> */}
        <td className="px-6 py-4">
          <div className="flex justify-around">
            <button
              onClick={handleEdit}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
            {/* <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
              Remove
            </button> */}
          </div>
        </td>

        <td>
          <ModalPersonal
            showModal={showModal}
            setShowModal={setShowModal}
            titulo={"Editar Cliente"}
            data={editData}
          />
        </td>
      </tr>
    </>
  );
};
