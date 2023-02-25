import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const setHeaders = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return token
  }
  return ''
}

export const userApi = createApi({
  reducerPath: "user/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    avatarChange: build.mutation<any, string>({
      query: (avatar) => ({
        url: 'avatar-change',
        method: 'POST',
        headers: {authorization : `Bearer ${setHeaders}`},
        body: avatar
      })
    }),
  })
})
