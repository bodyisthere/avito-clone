import CategoryModel from "../models/CategoryModel.js";
import { ApiError } from '../exceptions/ApiError.js'

class CategoryService {
  async getAll() {
    return await CategoryModel.find();
  }

  async getOne(id) {
    return await CategoryModel.findById(id)
  }
}

export default new CategoryService();