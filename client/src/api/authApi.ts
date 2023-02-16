import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    login: build.query<any, {email: string, password: string}>({
      query: ({email, password}) => ({
        url: 'login',
        method: 'POST',
        params: {
          email,
          password
        }
      })
    })
  })
})