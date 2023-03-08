import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const productoSlice = createSlice({
    name: 'producto',
    initialState: {
        listProducto: [],
    },
    reducers: {
        setProducto: (state, action) => {
          state.listProducto = action.payload;
        },
        addProducto: (state, action) => {
          state.listProducto.push(action.payload);
        },
        editProducto: (state, action) => {
          const index = state.listProducto.findIndex(
            (item) => item.id === action.payload.id
          );
          state.listProducto[index] = action.payload;
        },
        updateEstadoProducto: (state, action) => {
            const index = state.listProducto.findIndex(
              (item) => item.id === action.payload.id
            );
            state.listProducto[index].estado = action.payload.estado;
            // state.listProducto = state.listProducto.filter(
            //     (cliente) => cliente.id !== action.payload
            //   );
          },
      },
});

// Action creators are generated for each case reducer function
export const { addProducto, setProducto, editProducto,deleteProducto, updateEstadoProducto } = productoSlice.actions;

export const fetchAllProductos = () => {
    return (dispatch) => {
        axios
        .get("http://localhost:9090/api/productos/true")
        .then((resp) => {
            // console.log("fetchAllProductos");
            // console.log(resp.data);
            dispatch(setProducto(resp.data));
        })
        .catch((err) => {
            console.log(err);
        });
    };
}

export const addProductoAsync = (producto) => {
  
    return (dispatch) => {
        axios
        .post("http://localhost:9090/api/productos", producto)
        .then((resp) => {
            dispatch(addProducto(resp.data));
        })
        .catch((err) => {
            console.log(err);
        });
    };
}

export const editProductoAsync = (producto) => {
    return (dispatch) => {
        axios
        .put("http://localhost:9090/api/productos", producto)
        .then((resp) => {
            console.log("editProductoAsync");
            console.log(resp.data);
            dispatch(editProducto(resp.data));
        })
        .catch((err) => {
            console.log(err);
        });
    };
}


export const updateEstadoProductoAsync = ({id, estado}) => {
    console.log("updateEstadoProductoAsync"
    + " id: " + id);
    return (dispatch) => {
        axios
        .put("http://localhost:9090/api/productos/estado/"+ id, {estado: estado})
        .then((resp) => {
            console.log("updateEstadoProductoAsync");
            console.log(resp.data);
            dispatch(updateEstadoProducto({id: id, estado: estado}));
        })
        .catch((err) => {
            console.log(err);
        });
    };
}