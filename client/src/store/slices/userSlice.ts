import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IUser {
  isAuth: boolean
  accessToken: string
  refreshToken: string
  userDto: {
    email: string
		id: string
		isActivated: boolean
	}
}

// const initialState: IUser = {isAuth: false} as IUser;
const initialState: IUser = {
  isAuth: false,
  accessToken: '',
  refreshToken: '',
  userDto: {
    email: '',
		id: '',
		isActivated: false
	}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state = action.payload;
    }
  }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
