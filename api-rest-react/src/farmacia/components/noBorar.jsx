import React from 'react'

export const noBorar = () => {
  return (
    <>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         <th
           scope="row"
           className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
         >
           <img
             className="w-10 h-10 rounded-full"
             src="https://cdn-icons-png.flaticon.com/512/2706/2706950.png"
             alt="Jese image"
           />
           <div className="pl-3">
             <div className="text-base font-semibold">Neil Sims</div>
           </div>
         </th>
         <td className="px-6 py-4">React Developer</td>
         <td className="px-6 py-4">Brisas 2</td>
         <td className="px-6 py-4">
           <div className="flex items-center">
             <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
             Online
           </div>
         </td>
         <td className="px-6 py-4">
           <a
             href="#"
             className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
           >
             Edit user
           </a>
         </td>
       </tr>

       <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
         <th
           scope="row"
           className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
         >
           <img
             className="w-10 h-10 rounded-full"
             //sec base 64
                src="https://cdn-icons-png.flaticon.com/512/2706/2706950.png"
             alt="Jese image"
           />
           <div className="pl-3">
             <div className="text-base font-semibold">Leslie Livingston</div>
             <div className="font-normal text-gray-500">
               leslie@flowbite.com
             </div>
           </div>
         </th>
         <td className="px-6 py-4">SEO Specialist</td>
         <td className="px-6 py-4">Brisas 1</td>
         <td className="px-6 py-4">
           <div className="flex items-center">
             <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
             Offline
           </div>
         </td>
         <td className="px-6 py-4">
           <a
             href="#"
             className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
           >
             Edit user
           </a>
         </td>
       </tr>
</>
  )
}
