import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
  }),
  tagTypes: ["AccountApi"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (user_id) => `auth/profiles/${user_id}`,
      providesTags: ["AccountApi"],
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
    updateProfilePic: builder.mutation({
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
  useGetProfileQuery,
  useUpdateAboutMutation,
  useUpdateProfilePicMutation,
} = accountApi;
