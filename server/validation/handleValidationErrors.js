import { validationResult } from "express-validator";
import { ApiError } from "../exceptions/apiError.js";

export function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Ошибка валидации");
    throw next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
  }

  next();
};
