import { body } from 'express-validator';

export const registrationValidation = [
  body("name", "Минимальная длина имена 2 символа").isString().isLength({ min: 2 }),
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Минимальная длина пароля 5 символов").isLength({ min: 5 })
];

export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Минимальная длина пароля 5 символов").isLength({ min: 5 })
];
