import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IStoryResponsePost {
  data: string[]
}

interface IStoryResponseDelete {
  data: string
}

interface IStoryResponseGetOne {
  data: string
}

interface IStoryResponseGetAll {
  _id: string;
  title: string;
  cover: string;
  slides: string[];
  __v: number;
}

const setHeaders = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return token
  }
  return ''
}

export const storiesApi = createApi({
  reducerPath: "stories/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (build) => ({
    postStory: build.mutation<IStoryResponsePost, {title: string, slides: string[], cover: string}>({
      query: (body) => ({
        url: 'story',
        method: 'POST',
        headers: {authorization : setHeaders()},
        body,
      })
    }),
    deleteStory: build.mutation<IStoryResponseDelete, string>({
      query: (id) => ({
        url: `story${id}`,
        method: 'DELETE',
        headers: {authorization : setHeaders()},
      })
    }),
    getOneStory: build.query<IStoryResponseGetOne, string>({
      query: (id) => ({
        url: `story${id}`,
        method: 'GET',
      })
    }),
    getAllStories: build.query<IStoryResponseGetAll[], void>({
      query: () => ({
        url: 'story',
        method: 'GET',
      })
    }),
  })
})
