import { ApiError } from "../exceptions/ApiError.js";

class UploadService {
  async upload(files) {
    console.log(files);
    return files;
  }
}

export default new UploadService();