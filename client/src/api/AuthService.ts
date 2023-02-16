import $api from "./axiosConfig";
import { AxiosResponse } from "axios";

interface AuthResponse {
  accessToken: string
  refreshToken: string
  userDto: {
		email: string,
		id: string,
		isActivated: boolean
	}
}

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return (
      $api.post<AuthResponse>('/login', {email, password})
    )
  }

  static async registration(name: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return (
      $api.post<AuthResponse>('/registration', {name, email, password})
    )
  }

  static async logout(): Promise<void> {
    return $api.post('/logout')
  }
}
