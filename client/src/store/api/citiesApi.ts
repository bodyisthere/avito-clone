import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ICities } from "../../types/location";

export const citiesApi = createApi({
  reducerPath: "cities/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    getCities: build.query<ICities[], string>({
      query: (city: string) => ({
        url: 'get-cities',
        method: 'GET',
        params: {
          city
        }
      })
    }),
  })
})
