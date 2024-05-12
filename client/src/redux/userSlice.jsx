import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "http://127.0.0.1:8000/";

export const updateUsername = createAsyncThunk(
  "user/updateUsername",
  async (info) => {
    const { id, username } = info;
    const response = await axios.patch(
      `${base_url}auth/users/${id}/`,
      { username },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
);

const initialState = {
  id: "",
  first_name: "",
  last_name: "",
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUsername.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.pending = false;
        state.initialState = action.payload;
      })
      .addCase(updateUsername.rejected, (state) => {
        state.pending = null;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
