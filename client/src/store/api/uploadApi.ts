import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uploadApi = createApi({
  reducerPath: "upload/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    uploadImages: build.mutation<any, FormData>({
      query: (body) => ({
        url: 'uploads',
        method: 'POST',
        body,
      })
    }),
  })
})
