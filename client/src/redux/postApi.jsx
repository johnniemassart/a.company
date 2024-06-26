import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `api/posts`,
      providesTags: ["Post"],
    }),
    getPost: builder.query({
      query: (id) => `api/posts/${id}`,
      providesTags: ["Post"],
    }),
    getProfilePosts: builder.query({
      query: (user_id) => `api/user/posts/${user_id}`,
      providesTags: ["Post"],
    }),
    postPost: builder.mutation({
      query: (body) => {
        return {
          url: "api/posts/",
          method: "post",
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
          body,
        };
      },
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => {
        return {
          url: `api/posts/${id}/`,
          method: "delete",
          body: id,
        };
      },
      invalidatesTags: ["Post"],
    }),
    getProfileFollowingPosts: builder.query({
      query: (user_id) => `api/profile/following_posts/${user_id}`,
      providesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostQuery,
  useGetPostsQuery,
  useGetProfilePostsQuery,
  usePostPostMutation,
  useDeletePostMutation,
  useGetProfileFollowingPostsQuery,
} = postApi;
