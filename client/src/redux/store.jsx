import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./authSlice";
import { profileApi } from "./profileApi";
import { postApi } from "./postApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      profileApi.middleware,
      postApi.middleware,
    ]),
});

setupListeners(store.dispatch);
