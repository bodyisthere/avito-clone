import { body } from 'express-validator';

class Validation {
  registration() {
    [
      body("username", "Минимальная длина имена 2 символа").isString().isLength({ min: 2 }),
      body("email", "Неверный формат почты").isEmail(),
      body("password", "Минимальная длина пароля 5 символов").isLength({ min: 5 })
    ]
  }

  login() {
    [
      body("email", "Неверный формат почты").isEmail(),
      body("password", "Минимальная длина пароля 5 символов").isLength({ min: 5 })
    ]
  }
}

export default new Validation();