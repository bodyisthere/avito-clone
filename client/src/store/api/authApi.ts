import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    login: build.mutation<any, {email: string, password: string}>({
      query: (body: {email: string, password: string}) => ({
        url: 'login',
        method: 'POST',
        body,
      })
    }),
    registration: build.mutation<{lol: string}, {email: string, password: string}>({
      query: (body: {email: string, password: string}) => ({
        url: 'registration',
        method: 'POST',
        body: body
      }),
    }),
  })
})

export const { useLoginMutation, useRegistrationMutation } = authApi;