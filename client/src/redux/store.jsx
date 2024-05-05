import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./authSlice";
import { profileApi } from "./profileApi";
import { postApi } from "./postApi";
import { accountApi } from "./accountApi";
import accountReducer from "./accountSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    auth: authReducer,
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      profileApi.middleware,
      postApi.middleware,
      accountApi.middleware,
    ]),
});

setupListeners(store.dispatch);
