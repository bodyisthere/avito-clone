import { ApiError } from "../exceptions/ApiError.js";
import LocationService from "../service/LocationService.js";

class LocationController {
  async get(req, res, next) {
    try {
      const city = req.query.city || req.body.city;
      if(!city) {
        return next(ApiError.BadRequest('Строка не может быть пустой', ['Строка не может быть пустой'])) 
      }
      const result = await LocationService.get(city);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getPopularCities(req, res, next) {
    try {
      const response = await LocationService.getPopularCities();
      res.json(response)
    } catch (err) {
      next(err);
    }
  }

  async getRepublics(req, res, next) {
    try {
      const response = await LocationService.getRepublics();
      res.json(response)
    } catch (err) {
      next(err);
    }
  }

  async getCitiesByRepublic(req, res, next) {
    try {
      const republic = req.query.republic || req.body.republic;
      const response = await LocationService.getCitiesByRepublic(republic);
      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  async getCity(req, res, next) {
    try {
      const cityId = req.query.city ||req.body.city;
      const response = await LocationService.getCity(cityId);
      res.json(response);
    } catch (err) {
      next(err);
    }
  }
}

export default new LocationController();