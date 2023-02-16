import { ApiError } from '../exceptions/ApiError.js';
import StoryModel from '../models/StoryModel.js'

class StoryService {
  async getAll(req, res, next) {
    
  }

  async getOne(req, res, next) {
    
  }

  async post(title, slides) {
    if(!title || !slides) throw ApiError.BadRequest('Одно из полей некорректно заполнено');
    const story = await StoryModel.create({
        title,
        slides,
    });
    return { result: 'success' };
  }

  async delete(req, res, next) {
    
  }
}

export default new StoryService();