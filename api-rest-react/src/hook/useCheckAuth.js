import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { fetchAllPersonal } from "../store/personal/personalSlice";
import { fetchAllClientes } from "../store/cliente/clienteSlice";
import { fetchAllProductos } from "../store/producto/productoSlice";
import { fetchAllCategorias } from "../store/categoria/categoriaSlice";
import { fetchAllProveedor } from "../store/proveedor/proveedorSlice";
import { fetchAllFarmacia } from "../store/farmacia/farmaciaSlice";
// import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {

  const { status } = useSelector((state) => state.auth);
  const dispach = useDispatch();

  useEffect(() => {
    //onAuthStateChanged-> Sirve para escuchar los cambios de estado de la autenticacion de firebase y nos devuelve el usuario que esta autenticado o null si no hay ninguno
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (!user) return dispach(logout());
      const { uid, email, displayName, photoURL } = user;
      console.log(user);
      dispach(login({ uid, email, displayName, photoURL }));
      dispach(fetchAllPersonal()); 
      dispach(fetchAllFarmacia());
      dispach(fetchAllClientes());
      dispach(fetchAllProductos());
      dispach(fetchAllCategorias());
      dispach(fetchAllProveedor());
      // Sirve para cargar las notas del usuario que se autentico en firebase y que se guardan en el store de redux si no esta autenticado no se cargan las notas
      // dispach(startLoadingNotes());
    });
  }, []);

  return {
    status,
  };
};
