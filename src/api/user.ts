import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./baseQuery";

// Define the API service
export const userApi = createApi({
  reducerPath: "user",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string },
      { username: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          ...credentials,
          expiresInMins: 30, // Optional, defaults to 60
        },
      }),
    }),

    getUsers: builder.query<any, null>({
      query: () => `users`,
      transformResponse: (res) => {
        return (res as any).users;
      },
    }),
  }),
});

// Export hooks for usage in function components
export const { useLoginMutation, useGetUsersQuery } = userApi;
