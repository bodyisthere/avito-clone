import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TCategoryChapter = {
  title: string
  subchapter: string[]
}

export interface ICategoryData {
  category: string
  chapter: TCategoryChapter[]
}

interface ICategoryResponse {
  data: ICategoryData[],
  isLoading: boolean,
  error: string,
}

const initialState: ICategoryResponse = {
  data: [],
  isLoading: false,
  error: ''
};


export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getAll(state) {
      state.isLoading = true;
    },
    getAllSuccess(state, action: PayloadAction<ICategoryData[]>) {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    getAllError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})
