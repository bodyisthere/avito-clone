import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {BaseQueryFn, FetchArgs, FetchBaseQueryError} from '@reduxjs/toolkit/query'
import { userActions } from "../slices/userSlice";
import { IUser } from "../../modules/models/IUser";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('token');
    if(token) headers.set("authorization", `Bearer ${token}`);
    return headers
  }
})


const baseQueryWithReauth: BaseQueryFn<string | FetchArgs,unknown,FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('/refresh', api, extraOptions)
    if (refreshResult.data) {
      api.dispatch(userActions.authCheck(refreshResult.data as IUser));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(userActions.logout())
    }
  }
  return result
}

export const adsApi = createApi({
  reducerPath: "ads/api",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    newPost: build.mutation<any, any>({
      query: (body) => ({
        url: 'ads',
        method: 'POST',
        body,
      })
    }),
  })
})
