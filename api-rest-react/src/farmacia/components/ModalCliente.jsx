import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { process_image } from "../../hook/resizeImg";
import { useForm } from "../../hook/useForm";
import { addClienteAsync, editClienteAsync } from "../../store/cliente/clienteSlice";
import {
  fetchAddPersonal,
  fetchPutPersonal,
} from "../../store/personal/personalSlice";

export const ModalPersonal = ({
  showModal,
  setShowModal,
  listCliente,
  titulo,
  data,
}) => {

  const {
    nombre,
    apellido,
    email,
    cedula,
    onInputChange,
    setFormState,
    formState,
  } = useForm({
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    cedula: "",
  });

  useEffect(() => {
    if (data) {
      setFormState({
        id: data.id,
        nombre: data.nombre,
        cedula: data.cedula,
        apellido: data.apellido,
        email: data.email,
      });
    }
  }, [data, setFormState]);

  const dispatch = useDispatch();

  const onSumit = async () => {
    if (titulo === "Editar Cliente") {
      console.log("onSumitaddd");
      dispatch(editClienteAsync(formState));
      console.log(formState);
      return;
    }
    dispatch(addClienteAsync(formState));
  };

  const closeModal = async (e) => {
    e.preventDefault();
    await onSumit();
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    {titulo}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto ">
                  <div className="w-96">
                    <form
                      onSubmit={closeModal}
                      className="space-y-6"
                      action="#"
                    >
                      <div className="w-full">
                        <div className="">
                          <label
                            htmlFor="nombre"
                            className="block  mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Nombre
                          </label>
                          <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            onChange={onInputChange}
                            defaultValue={data?.nombre}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Ingrese el nombre"
                            required
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="apellido"
                            className="block  mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Apellido
                          </label>
                          <input
                            type="text"
                            name="apellido"
                            id="apellido"
                            onChange={onInputChange}
                            defaultValue={data?.nombre}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Ingrese el nombre"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="cedula"
                            className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Cédula
                          </label>
                          <input
                            type="text"
                            name="cedula"
                            id="cedula"
                            defaultValue={data?.cedula}
                            onChange={onInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Ingrese la cédula"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Correo
                          </label>
                          <input
                            type="email"
                            onChange={onInputChange}
                            name="email"
                            defaultValue={data?.email}
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="ejemplo@gmail.com"
                            //Si es edi
                            required
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 border-slate-200 rounded-b">
                        <button
                          className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          //close modal
                          onClick={closeModal}
                          type="submit"
                        >
                          {titulo}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
