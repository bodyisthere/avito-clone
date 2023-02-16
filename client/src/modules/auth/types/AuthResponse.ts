export interface AuthResponse {
  accessToken: string
  refreshToken: string
  userDto: {
		email: string,
		id: string,
		isActivated: boolean
	}
}