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

export interface IUser {
  isAuth: boolean,
  isAuthPopOpen: boolean,
  accessToken: string,
  refreshToken: string,
  data: IUserInfo
}
