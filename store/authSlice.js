import { createSlice } from "@reduxjs/toolkit";

//let jsonParse;
//if (typeof window !== "undefined") {
//  jsonParse = JSON.parse(localStorage.getItem("user"));
//}

const initState = {
  user: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    setUser: (state, action) => {
      //  if (action.payload) {
      //    localStorage.setItem("user", JSON.stringify(action.payload));
      //  } else {
      //    localStorage.removeItem("user");
      //  }
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
