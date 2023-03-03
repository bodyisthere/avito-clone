export interface ad {
  name: string | undefined
  photo: string[] | null
  video: string | null
  description: string | undefined
  meetingPoint: string | undefined
  price: number | undefined
}

export interface user {
  name: string
  avatar: string
  email: string
  location: any
  ads: string[]
  
}