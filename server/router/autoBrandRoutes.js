import { Router } from 'express';

import AutoBrandController from '../controllers/AutoBrandController.js'

export const autoBrandRoutes = new Router();

autoBrandRoutes.get('/get-all-car-brands', AutoBrandController.getAll);