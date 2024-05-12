import type { RootState } from "./store";

import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  value: boolean;
};

const displayTechSlice = createSlice({
  name: "displayTech",
  initialState: {
    value: false,
  } as InitialStateType,
  reducers: {
    toggleState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleState } = displayTechSlice.actions;

export const selectDisplay = (state: RootState) => state.displayTech.value;

export default displayTechSlice.reducer;
