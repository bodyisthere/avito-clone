import { createSlice } from '@reduxjs/toolkit'

const initialState: {isOpen: boolean} = {
  isOpen: false
}

export const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    toggleOpen(state) {
      if(state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    }
  }
})
