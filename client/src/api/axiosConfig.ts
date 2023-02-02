import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type' : 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin' : '*'
  }
})
