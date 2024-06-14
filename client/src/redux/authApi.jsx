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
    postFavorite: builder.mutation({
      query: ({ id, favorites }) => {
        let formData = new FormData();
        formData.append("id", id);
        formData.append("favorites", favorites);
        return {
          url: `auth/favorite/${id}/`,
          method: "post",
          body: formData,
        };
      },
      invalidatesTags: ["AuthUser"],
    }),
    // registerUser: builder.mutation({
    //   query: (body) => {
    //     return {
    //       url: "auth/api/token/",
    //       method: "post",
    //       body,
    //     };
    //   },
    //   invalidatesTags: ["AuthUser"],
    // }),
  }),
});

export const { useLoginUserMutation, usePostFavoriteMutation } = authApi;
