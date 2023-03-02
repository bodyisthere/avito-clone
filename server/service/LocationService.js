import LocationModel from "../models/LocationModel.js";

class CategoryService {
  async get(city) {
    return await LocationModel.find({$or : [{region: {$regex: city, $options: "si"}}, {city: {$regex: city, $options: "si"}}]}).limit(10);
  }

  async getPopularCities() {
    return await LocationModel.find({isPopular: true})
  }
  
  async getRepublics() {
    return await LocationModel.distinct("region")
  }

  async getCitiesByRepublic(republic) {
    return await LocationModel.find({region: republic} )
  }

  async getCity(cityId) {
    return await LocationModel.findById(cityId)
  }
}

export default new CategoryService();