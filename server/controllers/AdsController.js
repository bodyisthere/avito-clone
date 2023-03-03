import { ApiError } from "../exceptions/ApiError.js";
import AdsService from "../service/AdsService.js";

class CategroiesController {
  async post(req, res, next) {
    try {
      console.log(req.body.color);
    } catch (err) {
      next(err);
    }
  }
}

export default new CategroiesController();