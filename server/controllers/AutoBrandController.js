import { ApiError } from "../exceptions/ApiError.js";
import AutoBrandService from "../service/AutoBrandService.js";

class AutoBrandController {
  async getAll(req, res, next) {
    try {
      const result = await AutoBrandService.getAll();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default new AutoBrandController();