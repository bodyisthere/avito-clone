import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { categorySlice } from "./categorySlice";

import { authSlice } from '../modules/auth'
import { storiesSlice } from '../modules/stories'
import { locationSlice } from "../modules/searchBar";
import { adsSlice } from "../modules/ads";

const authReducer = authSlice.reducer;
const storiesReducer = storiesSlice.reducer;
const categoryReducer = categorySlice.reducer;
const locationReducer = locationSlice.reducer;
const adsReducer = adsSlice.reducer;

const rootReducer = combineReducers({
  authReducer,
  storiesReducer,
  categoryReducer,
  locationReducer,
  adsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']