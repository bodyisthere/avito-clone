import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';

// import Validation from '../validation/validation.js';

import CategroiesController from '../controllers/CategroiesController.js'

export const categoriesRoutes = new Router();

categoriesRoutes.get('/get-all-categories', CategroiesController.getAll);
categoriesRoutes.get('/get-one-category/:id', CategroiesController.getOne);