import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IInitialState {
  category: string[]
}

const initialState: IInitialState = {
  category: ['']
}

const adsSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, payload: PayloadAction<string[]>) {
      state.category = payload.payload;
    }
  }
})

export const adsReducer = adsSlice.reducer;
export const adsActions = adsSlice.actions;