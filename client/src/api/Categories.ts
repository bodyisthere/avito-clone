import axios, {AxiosResponse} from "axios";

import { instance } from "./axiosConfig";

class Categories {
  async getAll() {
    return await instance.get('/get-all-categories');
  }

  async getOne() {
    return await instance.get('/get-one-category/:id')
  }
}

export default new Categories();