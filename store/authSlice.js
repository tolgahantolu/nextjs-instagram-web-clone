import { createSlice } from "@reduxjs/toolkit";

const initState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
