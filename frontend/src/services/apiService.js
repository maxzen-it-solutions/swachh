import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) || "http://localhost:5000/api";


export const apiService = createApi({
reducerPath: "apiService",
baseQuery: fetchBaseQuery({
baseUrl,
prepareHeaders: (headers) => {
  headers.set("Content-Type", "application/json");

  // Get token from localStorage
  const token = localStorage.getItem("token");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
},

}),
endpoints: (builder) => ({
signup: builder.mutation({
query: (data) => ({ url: "/auth/register", method: "POST", body: data }),
}),
login: builder.mutation({
query: (data) => ({ url: "/auth/login", method: "POST", body: data }),
}),
}),
});


export const { useSignupMutation, useLoginMutation } = apiService;