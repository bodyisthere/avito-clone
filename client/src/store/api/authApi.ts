import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ILoginAccept {
  email: string,
  password: string
}

interface IRegAccept extends ILoginAccept {
  name: string
}

export const authApi = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    credentials: "include"
  }),
  endpoints: (build) => ({
    login: build.mutation<any, ILoginAccept>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      })
    }),
    registration: build.mutation<any, IRegAccept>({
      query: (body) => ({
        url: 'registration',
        method: 'POST',
        body,
      })
    }),
    checkAuth: build.query<any, void>({
      query: () => ({
        url: 'refresh',
      })
    }),
    logout: build.query<any, void>({
      query: () => ({
        url: 'logout',
      })
    })
  })
})

export const { useLoginMutation, useRegistrationMutation } = authApi;