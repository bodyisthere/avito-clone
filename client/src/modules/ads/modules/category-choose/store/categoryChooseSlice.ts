import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IInitialState {
  category: string[]
}

const initialState: IInitialState = {
  category: []
}

const categoryChooseSlice = createSlice({
  name: 'category-choose',
  initialState,
  reducers: {
    changeCategory(state, payload: PayloadAction<string[]>) {
      state.category = payload.payload;
    }
  }
})

export const categoryChooseReducer = categoryChooseSlice.reducer;
export const categoryChooseActions = categoryChooseSlice.actions;