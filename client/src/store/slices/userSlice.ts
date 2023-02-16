import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IUser {
  isLoading: boolean
  error: string
  accessToken: string
  refreshToken: string
  userDto: {
    email: string
		id: string
		isActivated: boolean
	}
}

const initialState: IUser = {} as IUser;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = '';
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userDto = action.payload.userDto;
    },
    loginError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})
