import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authApi } from "./api/authApi";
import { categoriesApi } from "./api/categoriesApi";
import { citiesApi } from "./api/citiesApi";

import { userReducer } from './slices/userSlice'
import { categoryReducer } from "./slices/categorySlice";
import { locationReducer } from "./slices/locationSlice";

import { adsReducer } from "../modules/ads";
import { storiesSlice } from "./slices/storiesSlice";

const storiesReducer = storiesSlice.reducer;

const rootReducer = combineReducers({
  storiesReducer,
  userReducer,
  categoryReducer,
  locationReducer,
  adsReducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [citiesApi.reducerPath]: citiesApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
      authApi.middleware, 
      categoriesApi.middleware, 
      citiesApi.middleware
      ),
  })
}  

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']