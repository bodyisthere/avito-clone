import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ICategory } from "../../types/category";

export const categoriesApi = createApi({
  reducerPath: "categories/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    getCategories: build.query<ICategory[], void>({
      query: () => ({
        url: 'get-all-categories',
        method: 'GET',
      })
    }),
  })
})
