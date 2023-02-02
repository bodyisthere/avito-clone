import LocationModel from "../models/LocationModel.js";

class CategoryService {
  async get(city) {
    return await LocationModel.find({$or : [{region: {$regex: city, $options: "si"}}, {city: {$regex: city, $options: "si"}}]}).limit(10);
  }
}

export default new CategoryService();