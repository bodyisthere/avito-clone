import { ApiError } from "../exceptions/ApiError.js";
import CategoriesService from "../service/CategoriesService.js";

class CategroiesController {
  async getAll(req, res, next) {
    try {
      const result = await CategoriesService.getAll();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const result = await CategoriesService.getOne(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default new CategroiesController();