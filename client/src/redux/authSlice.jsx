import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  refresh: "",
  access: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          username: action.payload.username,
          email: action.payload.email,
          refresh: action.payload.refresh,
          access: action.payload.access,
        })
      );
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.refresh = action.payload.refresh;
      state.access = action.payload.access;
    },
    logout: (state) => {
      localStorage.clear();
      state.first_name = "";
      state.last_name = "";
      state.username = "";
      state.email = "";
      state.refresh = "";
      state.access = "";
    },
  },
});

export const selectAuth = (state) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
