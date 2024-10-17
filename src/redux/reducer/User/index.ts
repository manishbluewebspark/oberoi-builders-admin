import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [], // Initial state to store user data
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData(state, action) {
      state.userData = action.payload; // Store the fetched user data
    },
  },
});

export const { userData } = userSlice.actions; // Export the action to be dispatched
export default userSlice.reducer; // Export the reducer to be included in the store
