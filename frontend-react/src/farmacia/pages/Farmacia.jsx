import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import { ListFarmacia } from "../components/ListFarmacia";

export const Farmacia = () => {

  const {listFarmacia} = useSelector((state) => state.farmacia);

  const dispach = useDispatch();

  const onLogaut = () => {
    dispach( startLogout() );
  }

  return (
    <>
      <div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 my-4"
          >Lista de farmacias disponibles</h3>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Direccion
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha de creacion
                </th>
              </tr>
            </thead>
            <tbody>
              {listFarmacia.map((farmacia) => (
                <ListFarmacia key={farmacia.id} {...farmacia} id={farmacia.id}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
