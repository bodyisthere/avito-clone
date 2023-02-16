import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { categorySlice } from "./slices/categorySlice";
import { userSlice } from "./slices/userSlice";

import { storiesSlice } from '../modules/stories'
import { locationSlice } from "../modules/searchBar";
import { adsSlice } from "../modules/ads";
import { authApi } from "../api/authApi";

const categoryReducer = categorySlice.reducer;
const userReducer = userSlice.reducer;
const storiesReducer = storiesSlice.reducer;
const locationReducer = locationSlice.reducer;
const adsReducer = adsSlice.reducer;

const rootReducer = combineReducers({
  storiesReducer,
  userReducer,
  categoryReducer,
  locationReducer,
  adsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    rootReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']