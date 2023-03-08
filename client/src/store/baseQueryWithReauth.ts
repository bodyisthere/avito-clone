import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

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

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs,unknown,FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    console.log('sending refresh token');

    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);

    // if(refreshResult?)
  }
  return result
}