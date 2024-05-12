import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./authSlice";
import { postApi } from "./postApi";
import accountReducer from "./accountSlice";
import { userApi } from "./userApi";
import userReducer from "../redux/userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    auth: authReducer,
    account: accountReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      postApi.middleware,
    ]),
});

setupListeners(store.dispatch);
