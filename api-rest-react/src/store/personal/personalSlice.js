import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const personalSlice = createSlice({
  name: "personal",
  initialState: {
    list: [],
  },
  reducers: {
    setPersonal: (state, action) => {
      state.list = action.payload;
    },
    addPersonal: (state, action) => {
      state.list.push(action.payload);
    },
    editPersonal: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list[index] = action.payload;
    },
    deletePersonal: (state, action) => {
      state.list = state.list.filter(
        (personal) => personal.id !== action.payload
      );
    },

    

  },
});

export const { addPersonal, setPersonal, editPersonal,deletePersonal } = personalSlice.actions;

export const fetchAllPersonal = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:9090/api/personal")
      .then((resp) => {
        // console.log(resp.data);
        dispatch(setPersonal(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchAddPersonal = (personalData) => {
  // http://localhost:9080/api/productos
  return (dispatch) => {
    axios
      .post("http://localhost:9090/api/personal", personalData)
      .then((resp) => {
        dispatch(addPersonal(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchPutPersonal = (personalData) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:9090/api/personal/${personalData.id}`, personalData)
      .then((resp) => {
        dispatch(editPersonal(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const fetchDeletePersonal = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:9090/api/personal/${id}`)
        .then((resp) => {
            dispatch(deletePersonal(id));
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

