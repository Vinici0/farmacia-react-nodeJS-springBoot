import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { process_image } from "../../hook/resizeImg";
import { useForm } from "../../hook/useForm";
import { addProductoAsync, editProducto } from "../../store/producto/productoSlice";

export const ModalProducto = ({
  showModal,
  setShowModal,
  productos,
  titulo,
  data,
}) => {
  const {
    nombre,
    fechaCaducida,
    descripcion,
    foto,
    stock,
    precio,
    id_provedor,
    categoriaId,
    onInputChange,
    setFormState,
    formState,
  } = useForm({
    id: "",
    nombre: "",
    fechaCaducida: "",
    descripcion: "",
    foto: "",
    stock: "",
    precio: "",
    id_provedor: "",
    categoriaId: "",
  });

  useEffect(() => {
    if (data) {
      setFormState({
        id: data.id,
        nombre: data.nombre,
        precio: data.precio,
        fechaCaducida: data.fechaCaducida,
        descripcion: data.descripcion,
        foto: data.foto,
        stock: data.stock,
        id_provedor: data.id_provedor,
        categoriaId: data.categoriaId,
      });
    }
  }, [data, setFormState]);

  // useEffect(() => {
  //   console.log(formState);
  // }, [formState]);

  const dispatch = useDispatch();

  const { listProveedor } = useSelector((state) => state.proveedor);
  const { listCategoria } = useSelector((state) => state.categoria);

  const onSumit = async () => {
    const file = document.querySelector("#foto").files[0];
    let image = await process_image(file);
    Object.entries(formState).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        formState[key] = data[key]; 
      }
    });

    if (image === null || image === undefined) {
      image = data.foto;
    }

    formState.foto = image;
    if (titulo === "Editar Producto") {
      dispatch(editProducto(formState));
      console.log(formState);
      return;
    }
    dispatch(addProductoAsync(formState));
  };

  const closeModal = async (e) => {
    console.log(formState);
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
                            className="block text-sm font-medium text-gray-900 dark:text-white"
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
                        <div>
                          <div className="flex justify-between object-center">
                            <div className="mt-4">
                              <label
                                htmlFor="precio"
                                className="lock  mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Precio
                              </label>
                              <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <span className="text-gray-500 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <input
                                  type="number"
                                  name="precio"
                                  id="precio"
                                  defaultValue={data?.precio}
                                  onChange={onInputChange}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  placeholder="0.00"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                  <label htmlFor="currency" className="sr-only">
                                    Currency
                                  </label>
                                  <select
                                    id="currency"
                                    name="currency"
                                    className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  >
                                    <option>USD</option>
                                    <option>CAD</option>
                                    <option>EUR</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="cantidad"
                                className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Stock
                              </label>
                              <input
                                type="number"
                                name="stock"
                                id="stock"
                                defaultValue={data?.stock}
                                onChange={onInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Ingrese el stock"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="fechaVencimiento"
                              className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Fecha de vencimiento
                            </label>
                            <input
                              type="date"
                              onChange={onInputChange}
                              name="fechaCaducida"
                              id="fechaCaducida"
                              defaultValue={data?.fechaCaducida}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Ingrese la fecha de vencimiento"
                              //Si es edi
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <div>
                              <label
                                htmlFor="proveedor"
                                className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Proveedor
                              </label>
                              <select
                                id="id_provedor"
                                name="id_provedor"
                                onChange={onInputChange}
                                className="bg-gray-50 border w-44 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                {listProveedor.map((proveedor) => (
                                  <option
                                    key={proveedor._id}
                                    value={proveedor._id}
                                  >
                                    {/* no pasar de 10 caracteres */}

                                    {proveedor.empresa.length > 10
                                      ? proveedor.empresa.substring(0, 10) +
                                        "..."
                                      : proveedor.empresa}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label
                                htmlFor="proveedor"
                                className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Categoria
                              </label>
                              <select
                                id="categoriaId"
                                name="categoriaId"
                                onChange={onInputChange}
                                className="bg-gray-50 border w-44 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                {listCategoria.map((categoria) => (
                                  <option
                                    key={categoria.id}
                                    value={categoria.id}
                                  >
                                    {/* no pasar de 10 caracteres */}
                                    {categoria.nombre.length > 10
                                      ? categoria.nombre.substring(0, 10) +
                                        "..."
                                      : categoria.nombre}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="descripcion"
                            className="block text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Descripcion
                          </label>
                          <input
                            type="text"
                            name="descripcion"
                            id="descripcion"
                            onChange={onInputChange}
                            defaultValue={data?.nombre}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Ingrese la descripcion"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="direccion"
                            className="block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Foto
                          </label>
                          <input
                            className="
                              text-xs text-grey-500
                              file:mr-5 file:py-3 file:px-10
                              file:rounded-full file:border-0
                              file:text-md file:font-semibold  file:text-white
                              file:bg-gradient-to-r file:from-blue-600 file:to-amber-600
                                hover:file:cursor-pointer hover:file:opacity-80
                              "
                            aria-describedby="file_input_help"
                            id="foto"
                            name="foto"
                            type="file"
                            onChange={onInputChange}
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
