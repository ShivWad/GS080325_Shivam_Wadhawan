import { createSlice } from "@reduxjs/toolkit";

import { InitialState, PageNames } from "../../types";


const initialState: InitialState = {
  selectedPage: "Store"
};

export const globalSlice = createSlice({
  name: "configState",
  initialState: initialState,
  reducers: {
    changePage: (state, payload) => {
      state.selectedPage = payload.payload.pageName;
      return state;
    }
  },
});

export const { changePage } =
  globalSlice.actions;
export default globalSlice.reducer;
