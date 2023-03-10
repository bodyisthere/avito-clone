import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    avatarChange: build.mutation<any, string>({
      query: (body) => ({
        url: 'avatar-change',
        method: 'POST',
        headers: {authorization : `Bearer ${localStorage.getItem('token')}`},
        body,
      }),
    }),
    locationChange: build.mutation<any, {city: {_id: string, title: string}, region: string, subway: string}>({
      query: (body) => ({
        url: 'location-change',
        method: 'POST',
        headers: {authorization : `Bearer ${localStorage.getItem('token')}`},
        body,
      }),
    }),
  })
})
