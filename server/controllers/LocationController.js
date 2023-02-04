import { ApiError } from "../exceptions/ApiError.js";
import LocationService from "../service/LocationService.js";

class LocationController {
  async get(req, res, next) {
    try {
      const city = req.query.city || req.body.city
      const result = await LocationService.get(city);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default new LocationController();