import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const farmaciaSlice = createSlice({
  name: "farmacia",
  initialState: {
    listFarmacia: [],
  },
  reducers: {
    setFarmacia: (state, action) => {
      state.listFarmacia = action.payload;
    },
    addFarmacia: (state, action) => {
      state.listFarmacia.push(action.payload);
    },
    editFarmacia: (state, action) => {
      const index = state.listFarmacia.findIndex(
        (item) => item.id === action.payload.id
      );
      state.listFarmacia[index] = action.payload;
    },
    deleteFarmacia: (state, action) => {
      state.listFarmacia = state.listFarmacia.filter(
        (farmacia) => farmacia.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFarmacia, setFarmacia, editFarmacia, deleteFarmacia } =
  farmaciaSlice.actions;

export const fetchAllFarmacia = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/api/farmacias")
      .then((resp) => {
        console.log("fetchAllFarmacia");
        console.log(resp.data);
        dispatch(setFarmacia(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
