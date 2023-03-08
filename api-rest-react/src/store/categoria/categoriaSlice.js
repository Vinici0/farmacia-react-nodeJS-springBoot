import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const CategoriaSlice = createSlice({
    name: 'Categoria',
    initialState: {
        listCategoria: [],
    },
    reducers: {
        setCategoria: (state, action) => {
            state.listCategoria = action.payload;
          },
    }
});

// Action creators are generated for each case reducer function
export const { setCategoria } = CategoriaSlice.actions;

export const fetchAllCategorias = () => {
    return (dispatch) => {
        axios
        .get("http://localhost:9090/api/categorias")
        .then((resp) => {
            // console.log("fetchAllCategorias");
            // console.log(resp.data);
            dispatch(setCategoria(resp.data));
        })
        .catch((err) => {
            console.log(err);
        });
    };
}