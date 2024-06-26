import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "http://127.0.0.1:8000/";

export const updateAbout = createAsyncThunk(
  "account/updateAbout",
  async (info) => {
    const { id, about } = info;
    const response = await axios.patch(
      `${base_url}auth/profiles/${id}/`,
      { about },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
);

export const updateProfilePic = createAsyncThunk(
  "account/updateProfilePic",
  async (info) => {
    const { id, profile_pic } = info;
    const response = await axios.patch(
      `${base_url}auth/profiles/${id}/`,
      { profile_pic: `${base_url}media/images/${profile_pic}` },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        // transformRequest: (info) => info,
      }
    );
    return response.data;
  }
);

const initialState = {
  user: "",
  about: "",
  profile_pic: null,
  follows: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateAbout.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(updateAbout.fulfilled, (state, action) => {
        state.pending = false;
        state.initialState = action.payload;
      })
      .addCase(updateAbout.rejected, (state) => {
        state.pending = null;
        state.error = true;
      });
    builder
      .addCase(updateProfilePic.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(updateProfilePic.fulfilled, (state, action) => {
        state.pending = false;
        state.initialState = action.payload;
      })
      .addCase(updateProfilePic.rejected, (state) => {
        state.pending = null;
        state.error = true;
      });
  },
});

export default accountSlice.reducer;
