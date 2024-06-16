import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
  }),
  tagTypes: ["UserApi"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `auth/users`,
      providesTags: ["UserApi"],
    }),
    getUser: builder.query({
      query: (user_id) => `auth/users/${user_id}`,
      providesTags: ["UserApi"],
    }),
    getProfiles: builder.query({
      query: () => `auth/profiles`,
      providesTags: ["UserApi"],
    }),
    getProfile: builder.query({
      query: (user_id) => `auth/profiles/${user_id}`,
      providesTags: ["UserApi"],
    }),
    getFollowing: builder.query({
      query: () => `auth/following`,
      providesTags: ["UserApi"],
    }),
    getFollowings: builder.query({
      query: (user_id) => `auth/following/${user_id}`,
      providesTags: ["UserApi"],
    }),
    getProfileFollowedBy: builder.query({
      query: () => `auth/profile_followed_by`,
      providesTags: ["UserApi"],
    }),
    putUser: builder.mutation({
      query: ({ id, ...rest }) => {
        return {
          url: `auth/users/${id}/`,
          method: "put",
          body: rest,
        };
      },
      invalidatesTags: ["AuthUser"],
    }),
    postFollow: builder.mutation({
      query: ({ id, follows }) => {
        let formData = new FormData();
        formData.append("id", id);
        formData.append("follows", follows);
        return {
          url: `auth/follow/${id}/`,
          method: "post",
          body: formData,
        };
      },
      invalidatesTags: ["AuthUser"],
    }),
    updateAbout: builder.mutation({
      query: ({ user, ...rest }) => {
        return {
          url: `auth/profiles/${user}/`,
          method: "put",
          body: rest,
          prepareHeaders: async (headers) => {
            await headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["AccountApi"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetProfileQuery,
  useGetProfilesQuery,
  useGetFollowingQuery,
  useGetFollowingsQuery,
  useGetProfileFollowedByQuery,
  usePutUserMutation,
  usePostFollowMutation,
  useUpdateAboutMutation,
} = userApi;
