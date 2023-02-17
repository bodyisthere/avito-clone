import axios, { AxiosResponse } from 'axios'

export const uploadImages = async (formData: FormData): Promise<AxiosResponse<string>> => {
  return await axios.post<string>('http://localhost:5000/uploads', formData);
}