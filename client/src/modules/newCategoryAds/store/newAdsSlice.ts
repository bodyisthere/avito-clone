import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IInitialState {
  category: string[]
}

const initialState: IInitialState = {
  category: ['']
}

export const newAdsSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, payload: PayloadAction<string[]>) {
      state.category = payload.payload;
    }
  }
})
