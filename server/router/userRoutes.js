import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';

import Validation from '../validation/validation.js';

import UserController from '../controllers/UserController.js'

export const userRoutes = new Router();

userRoutes.post('/registration', UserController.registration);
userRoutes.post('/login', UserController.login);
userRoutes.post('/logout', UserController.logout);
userRoutes.get('/activate/:link', UserController.activate);
userRoutes.get('/refresh', UserController.refresh);