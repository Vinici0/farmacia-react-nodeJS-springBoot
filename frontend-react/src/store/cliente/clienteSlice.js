import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const clienteSlice = createSlice({
  name: "cliente",
  initialState: {
    listCliente: [],
  },
  reducers: {
    setCliente: (state, action) => {
      state.listCliente = action.payload;
    },
    addCliente: (state, action) => {
      state.listCliente.push(action.payload);
    },
    editCliente: (state, action) => {
      const index = state.listCliente.findIndex(
        (item) => item.id === action.payload.id
      );
      state.listCliente[index] = action.payload;
    },
    deleteCliente: (state, action) => {
      state.listCliente = state.listCliente.filter(
        (cliente) => cliente.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCliente, setCliente, editCliente,deleteCliente } = clienteSlice.actions;

export const fetchAllClientes = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:9090/api/clientes")
      .then((resp) => {
        // console.log("fetchAllClientes");
        // console.log(resp.data);
        dispatch(setCliente(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const addClienteAsync = (cliente) => {
  return (dispatch) => {
    axios
      .post("http://localhost:9090/api/cliente", cliente)
      .then((resp) => {
        console.log("addClienteAsync");
        console.log(resp.data);
        dispatch(addCliente(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const editClienteAsync = (cliente) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:9090/api/cliente/${cliente.id}`, cliente)
      .then((resp) => {
        console.log("editClienteAsync");
        console.log(resp.data);
        dispatch(editCliente(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const deleteClienteAsync = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:9090/api/cliente/" + id)
      .then((resp) => {
        console.log("deleteClienteAsync");
        console.log(resp.data);
        dispatch(deleteCliente(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
