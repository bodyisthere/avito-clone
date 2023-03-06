import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transportApi = createApi({
  reducerPath: "transport/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    getAllCarBrands: build.query<{_id: string, brand: string}[], void>({
      query: () => ({
        url: 'get-all-car-brands',
        method: 'GET',
      })
    }),
  })
})
