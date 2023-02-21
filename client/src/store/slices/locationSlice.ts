import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICities } from '../../modules/searchBar/types/types';

const initialState: ICities = {
  _id: "63d768efecd6d8f0e0918d38",
  region: "Татарстан",
  city: "Казань",
  district: [],
  districts: ["Авиастроительный", "Вахитовский", "Кировский", "Московский", "Ново-Савиновский", "Приволжский", "Советский",],
  metro: [],
  metroes: ["Кремлёвская", "Площадь Тукая", "Суконная слобода", "Аметьево", "Горки", "Пр. Победы", "Козья слобода", "Яшьлек (Юность)", "Северный вокзал", "Авиастроительная", "Дубравная",],
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setRegion(state, payload: PayloadAction<ICities>) {
      state._id = payload.payload._id;
      state.region = payload.payload.region;
      state.city = payload.payload.city;
    },
    setDistricts(state, payload: PayloadAction<string[] | []>) {
      state.districts = payload.payload;
    },
    setDistrict(state, payload: PayloadAction<string[] | []>) {
      if(state.district) {
        state.district = payload.payload;
      }
    },
    setMetroes(state, payload: PayloadAction<string[] | []>) {
      state.metroes = payload.payload;
    },
    setMetro(state, payload: PayloadAction<string[]>) {
      state.metro = payload.payload;
    }
  }
})

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;