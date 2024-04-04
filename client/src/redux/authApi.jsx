import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: "auth/api/token/",
          method: "post",
          body,
        };
      },
    }),
    updateUsername: builder.mutation({
      query: ({ user_id, ...rest }) => {
        return {
          url: `auth/users/${user_id}/`,
          method: "put",
          body: rest,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useUpdateUsernameMutation } = authApi;
