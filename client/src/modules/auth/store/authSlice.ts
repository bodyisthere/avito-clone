import { createSlice } from '@reduxjs/toolkit'

const initialState: {isOpen: boolean} = {
  isOpen: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuth(state) {
      if(state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    }
  }
})
