interface user {
  isAuth: boolean,
  isAuthPopOpen: boolean,
  accessToken: string,
  refreshToken: string,
  userDto: {
    name: string,
		_id: string,
    email: string,
    avatar: string,
		isActivated: boolean,
    roles: string[],
    contactInfo: {
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
    },
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
}

export {}