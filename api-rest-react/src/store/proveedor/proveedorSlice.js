import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const proveedorSlice = createSlice({
  name: "proveedor",
  initialState: {
    listProveedor: [],
  },
  reducers: {
    setProveedor: (state, action) => {
      state.listProveedor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProveedor } = proveedorSlice.actions;

export const fetchAllProveedor = () => {
    return (dispatch) => {
        axios
        .get("http://localhost:8080/api/proveedores")
        .then((resp) => {
            // console.log("Respuesta de la API proveedores");
            // console.log(resp.data);
            dispatch(setProveedor(resp.data));
        })
        .catch((err) => {
            console.log(err);
        });
    };
    }