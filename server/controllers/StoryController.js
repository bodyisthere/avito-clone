import { ApiError } from "../exceptions/ApiError.js";
import StoryService from "../service/StoryService.js";

class StoryController {
  async getAll(req, res, next) {
    try {

    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      
    } catch (err) {
      next(err);
    }
  }

  async post(req, res, next) {
    try {
      const { title, slides } = req.body;
      const response = await StoryService.post(title, slides);
      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      
    } catch (err) {
      next(err);
    }
  }
}

export default new StoryController();