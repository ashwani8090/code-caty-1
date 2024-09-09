import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "react-use-cookie";

// Define the base query
export const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyjson.com/", // Replace with your API base URL
  prepareHeaders: (headers) => {
    const token = getCookie("token");

    // Example: Add an authorization token if needed
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
