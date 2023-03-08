import { ApiError } from "../exceptions/ApiError.js";
import AdsService from "../service/AdsService.js";

class CategroiesController {
  async post(req, res, next) {
    try {
      const body = req.body;
      const userId = req.user.id;
      const result = await AdsService.post(body, userId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default new CategroiesController();