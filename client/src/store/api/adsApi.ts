import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const setHeaders = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return token
  }
  return ''
}

export const adsApi = createApi({
  reducerPath: "ads/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    newPost: build.mutation<any, any>({
      query: (body) => ({
        url: 'ads',
        method: 'POST',
        body,
        headers: {authorization : `Bearer ${setHeaders()}`},
      })
    }),
  })
})
