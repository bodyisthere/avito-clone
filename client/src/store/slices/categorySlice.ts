import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICategory } from '../../types/category';

const initialState: ICategory[] = [];

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<ICategory[]>) {
      state = action.payload;
      return state;
    }
  }
})

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;