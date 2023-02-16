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
}

export default new LocationController();