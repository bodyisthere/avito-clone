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
    getPopularCities: build.query<ICities[], void>({
      query: () => ({
        url: 'get-popular-cities',
        method: 'GET',
      })
    }),
    getRepublics: build.query<string[], void>({
      query: () => ({
        url: 'get-republics',
        method: 'GET',
      })
    }),
    getCitiesByRepublic: build.query<ICities[], string>({
      query: (republic) => ({
        url: 'get-cities-by-republic',
        method: 'GET',
        params: {
          republic
        }
      })
    }),
  })
})
