import React from "react";

export const ListFarmacia = ({nombre, direccion,yearFundacion }) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {nombre}
        </th>
        <td className="px-6 py-4">{direccion}</td>
        <td className="px-6 py-4">{yearFundacion}</td>

      </tr>
    </>
  );
};
