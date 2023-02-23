import { ApiError } from '../exceptions/ApiError.js';
import StoryModel from '../models/StoryModel.js'

class StoryService {
  async getAll(req, res, next) {
    const stories = await StoryModel.find();
    return stories;
  }

  async getOne(req, res, next) {
    
  }

  async post(title, cover, slides) {
    if(!title || !slides || !cover) throw ApiError.BadRequest('Одно из полей некорректно заполнено');
    const story = await StoryModel.create({
        title,
        slides,
        cover
    });
    return { result: 'success' };
  }

  async delete(req, res, next) {
    
  }
}

export default new StoryService();