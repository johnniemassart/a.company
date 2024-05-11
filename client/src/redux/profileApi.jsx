import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    profileData: builder.query({
      query: (user_id) => `auth/users/${user_id}`,
      providesTags: ["Profile"],
    }),
    addProfile: builder.mutation({
      query: ({ user_id, ...rest }) => {
        return {
          url: `auth/users/${user_id}/`,
          method: "put",
          body: rest,
        };
      },
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useProfileDataQuery, useAddProfileMutation } = profileApi;
