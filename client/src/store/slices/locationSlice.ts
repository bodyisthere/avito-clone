import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICities } from '../../modules/searchBar/types/types';

const initialState: ICities = {
  districts: [],
  metroes: [],
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setDistricts(state, payload: PayloadAction<string[] | []>) {
      state.districts = payload.payload;
    },
    setMetroes(state, payload: PayloadAction<string[] | []>) {
      state.metroes = payload.payload;
    },
  }
})

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;