import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

interface ILoginAccept {
  email: string,
  password: string
}

interface IRegAccept extends ILoginAccept {
  name: string
}

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('token')
    if(token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  }
})

export const authApi = createApi({
  reducerPath: "auth/api",
  baseQuery,
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