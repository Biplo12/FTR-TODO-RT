import IGlobalState from "@/interfaces/IGlobalSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IGlobalState = {};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {},
});

export const {} = globalSlice.actions;

export default globalSlice.reducer;
