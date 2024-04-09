import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
  }),
  tagTypes: ["AuthUser"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: "auth/api/token/",
          method: "post",
          body,
        };
      },
      invalidatesTags: ["AuthUser"],
    }),
    updateUsername: builder.mutation({
      query: ({ id, ...rest }) => {
        return {
          url: `auth/users/${id}/`,
          method: "put",
          body: rest,
        };
      },
      invalidatesTags: ["AuthUser"],
    }),
  }),
});

export const { useLoginUserMutation, useUpdateUsernameMutation } = authApi;
