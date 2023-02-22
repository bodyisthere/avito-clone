import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IUser {
  isAuth: boolean
  isAuthPopOpen: boolean
  accessToken: string
  refreshToken: string
  userDto: {
    email: string
		id: string
		isActivated: boolean
    roles: string[]
	}
}

const initialState: IUser = {
  isAuth: false,
  isAuthPopOpen: false,
  accessToken: '',
  refreshToken: '',
  userDto: {
    email: '',
		id: '',
		isActivated: false,
    roles: []
	}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setAuthPop: (state, action: PayloadAction<boolean>) => {
      state.isAuthPopOpen = action.payload
    },
    login: (state, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userDto = action.payload.userDto;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.accessToken);
    },
    registration: (state, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userDto = action.payload.userDto;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.accessToken);
    },
    authCheck: (state, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userDto = action.payload.userDto;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.accessToken);
    },
    logout: () => {
      localStorage.removeItem('token');
    }
  }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
