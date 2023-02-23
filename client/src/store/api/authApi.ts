import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

interface ILoginAccept {
  email: string,
  password: string
}

interface IRegAccept extends ILoginAccept {
  name: string
}


const reAuthFunction = async () => {
  //делаем какой - то кастомный запрос, который требует авторизации
  let result = authApi.useCheckAuthQuery();

  if (result.data) {
    //получаем новую дату и обновленные токены
    const refreshResult = authApi.useCheckAuthQuery();
    if (refreshResult.data) {
      //обновляем дату 

    } else {

    }
  }
  return result
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