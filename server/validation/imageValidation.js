import { ApiError } from "../exceptions/ApiError.js";

const imageValidation = (req, file, callback) => {
  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  if(Array.isArray(file)) {
    for(let i = 0; i < file.length; i++) {
      if(types.includes(file[i].mimetype)) {
        callback(null, true);
      } else {
        callback(ApiError.UnsupportedMediaType(), false)
      }
    }
  } else {
    if(types.includes(file.mimetype)) {
      console.log('file')
      callback(null, true);
    } else {
      callback(ApiError.UnsupportedMediaType(), false)
    }
  }
}

export default imageValidation;