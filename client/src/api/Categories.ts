import axios, {AxiosResponse} from "axios";

import $api from "./axiosConfig";

class Categories {
  async getAll() {
    return await $api.get('/get-all-categories');
  }

  async getOne() {
    return await $api.get('/get-one-category/:id')
  }
}

export default new Categories();