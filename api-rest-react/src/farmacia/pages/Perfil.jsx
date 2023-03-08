import React from "react";
import { useSelector } from "react-redux";

export const Perfil = () => {
  const { photoURL, email, displayName } = useSelector((state) => state.auth);

  return (
    <>


      <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Bienvenido a tu perfil
        </h5>
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg m-auto"
          src={photoURL}
          alt="Bonnie image"
        />
          <p class="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                    {displayName}
                  </p>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {email}
                  </span>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">


        </div>
      </div>
    </>
  );
};
