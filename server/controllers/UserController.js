import { validationResult } from "express-validator";
import UserService from '../service/UserService.js'
import { ApiError } from "../exceptions/ApiError.js";

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
         return next(ApiError.BadRequest('Ошибка при валидации', errors.array())) 
      }
      const { email, password, name } = req.body;
      const userData = await UserService.registration(email, password, name);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (err) {     
      next(err)
    }
  }

  async login(req, res, next) {
    try {
      //дату можно передавать, как в query запроса, так и в теле запроса
      const { email, password } = req.query.hasOwnProperty('email') ? req.query : req.body
      const userData = await UserService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (err) {
      next(err)
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await UserService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (err) {
      next(err)
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await UserService.activate(activationLink);

      return res.redirect(process.env.CLIENT_URL)
    } catch (err) {
      next(err)
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await UserService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (err) {
      next(err)
    }
  }

  async avatarChange(req, res, next) {
    try {
      console.log(req)
      const { avatar } = req.body;
      // const { userId } = 
      // const response = await UserService.avatarChange(avatar);
      return res.json('1')
    } catch (err) {
      next(err)
    }
  }
}

export default new UserController()