import AutoBrandModel from "../models/AutoBrandModel.js"

class AutoBrandService {
  async getAll() {
    return await AutoBrandModel.find()
  }
}

export default new AutoBrandService();