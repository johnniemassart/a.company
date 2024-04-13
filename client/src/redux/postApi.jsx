import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    postData: builder.query({
      query: (user_id) => `auth/users/posts/${user_id}`,
      providesTags: ["Post"],
    }),
  }),
});

export const { usePostDataQuery } = postApi;
