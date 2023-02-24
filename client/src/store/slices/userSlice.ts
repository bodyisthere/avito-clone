import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserInfo {
  name: string,
  _id: string,
  email: string,
  avatar: string,
  isActivated: boolean,
  roles: string[],
  contactInfo: TContactInfo,
  ads: string[],
  favorites: string[],
  cart: string[],
  dialogues: string[],
  wallet: number,
  notifications: string[],
  reviews: {
    //отзывы мне
    toMe: string[],
    //отзывы, которые я оставил
    others: string[]
  },
  followers: string[],
  follow: string[],
}

type TContactInfo = {
  location: {
    city: {
      _id: string,
      title: string,
    },
    subway?: {
      _id: string,
      title: string,
    },
    district?: {
      _id: string,
      title: string,
    }
  },
  phoneNumber: string,
}

interface IUser {
  isAuth: boolean,
  isAuthPopOpen: boolean,
  accessToken: string,
  refreshToken: string,
  data: IUserInfo
}


const resetFunction = () => {
  return (
    {
      isAuth: false,
      isAuthPopOpen: false,
      accessToken: '',
      refreshToken: '',
      data: {
        name: '',
        _id: '',
        email: '',
        avatar: '',
        isActivated: false,
        roles: [],
        contactInfo: {
          location: {
            city: {
              _id: '',
              title: '',
            },
            subway: {
              _id: '',
              title: '',
            },
            district: {
              _id: '',
              title: '',
            }
          },
          phoneNumber: '',
        },
        ads: [],
        favorites: [],
        cart: [],
        dialogues: [],
        wallet: 0,
        notifications: [],
        reviews: {
          toMe: [],
          others: []
        },
        followers: [],
        follow: [],
      }
    }
  )
}

const initialState: IUser = resetFunction();


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
      state.data = action.payload.data;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.accessToken);
    },
    registration: (state, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.data = action.payload.data;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.accessToken);
    },
    authCheck: (state, action: PayloadAction<IUser>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.data = action.payload.data;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.accessToken);
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state = resetFunction();
    }
  }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
