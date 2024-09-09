// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./baseQuery";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query<any, any>({
      query: ({ page, pageSize }) =>
        `products?limit=${pageSize}&skip=${page * pageSize}`,
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: ({ data }) => ({
        url: "products/add",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({ url: `products/${id}`, method: "DELETE" }),
      invalidatesTags: ["Products"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = productsApi;
