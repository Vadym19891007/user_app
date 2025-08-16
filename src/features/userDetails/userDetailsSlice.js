import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUserId: null,
};

const userDetailsReducer = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    selectUser(state, action) {
      state.selectedUserId = action.payload;
    },
  },
});

export const { selectUser } = userDetailsReducer.actions;

export default userDetailsReducer.reducer;
