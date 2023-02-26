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
    region: string,
    city: {
      _id: string,
      title: string,
    },
    subway?: string,
    district?: string,
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
            region: '',
            city: {
              _id: '',
              title: '',
            },
            subway: '',
            district: '',
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
    },
    setUserCityRegion: (state, action: PayloadAction<{city: {_id: string, title: string}, region: string}>) => {
      state.data.contactInfo.location.city = action.payload.city;
      state.data.contactInfo.location.region = action.payload.region;
    },
    setUserDistrict: (state, action: PayloadAction<string>) => {
      state.data.contactInfo.location.district = action.payload;
    },
    setUserSubway: (state, action: PayloadAction<string>) => {
      state.data.contactInfo.location.subway = action.payload;
    },
    setUserAvatar: (state, action: PayloadAction<string>) => {
      state.data.avatar = action.payload;
    },
  }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
