import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authApi } from "./api/authApi";
import { categoriesApi } from "./api/categoriesApi";
import { citiesApi } from "./api/citiesApi";
import { userApi } from "./api/userApi";
import { adsApi } from "./api/adsApi";

import { userReducer } from './slices/userSlice'
import { categoryReducer } from "./slices/categorySlice";
import { locationReducer } from "./slices/locationSlice";

import { adsReducer } from "../modules/ads";
import { storiesSlice } from "./slices/storiesSlice";
import { uploadApi } from "./api/uploadApi";
import { storiesApi } from "./api/storiesApi";

const storiesReducer = storiesSlice.reducer;

const rootReducer = combineReducers({
  storiesReducer,
  userReducer,
  categoryReducer,
  adsReducer,
  locationReducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [citiesApi.reducerPath]: citiesApi.reducer,
  [uploadApi.reducerPath]: uploadApi.reducer,
  [storiesApi.reducerPath]: storiesApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [adsApi.reducerPath]: adsApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
      authApi.middleware, 
      categoriesApi.middleware, 
      citiesApi.middleware,
      uploadApi.middleware,
      storiesApi.middleware,
      userApi.middleware,
      adsApi.middleware,
    ),
  })
}  

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']