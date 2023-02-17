import { ApiError } from "../exceptions/ApiError.js";
import UploadService from "../service/UploadService.js";

class UploadController {
  async upload(req, res, next) {
    try {
      const files = req.files.map(el => el.filename);
      const result = await UploadService.upload(files);
      res.json({data: result})
    } catch (err) {
      next(err);
    }
  }
}

export default new UploadController();