import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  propertyData: [],
};

const propertySlice = createSlice({
  name: "propery",
  initialState,
  reducers: {
    propertyData(state, action) {
      state.propertyData = action.payload;
    },
  },
});
export const { propertyData } = propertySlice.actions;
export default propertySlice.reducer;
