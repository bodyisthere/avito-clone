import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';

// import Validation from '../validation/validation.js';
import { registrationValidation, loginValidation } from '../validation/validation.js';

import UserController from '../controllers/UserController.js'
import { handleValidationErrors } from '../validation/handleValidationErrors.js';

export const userRoutes = new Router();

userRoutes.post('/registration', registrationValidation, handleValidationErrors, UserController.registration);
userRoutes.post('/login', loginValidation, handleValidationErrors, UserController.login);

userRoutes.post('/logout', UserController.logout);
userRoutes.get('/activate/:link', UserController.activate);
userRoutes.get('/refresh', UserController.refresh);

userRoutes.post('/avatar-change', authMiddleware, UserController.avatarChange);

userRoutes.post('/location-change', authMiddleware, UserController.locationChange);