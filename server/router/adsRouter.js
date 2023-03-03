import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware.js'
import AdsController from '../controllers/AdsController.js'

export const adsRouter = new Router();

adsRouter.post('/ads', authMiddleware, AdsController.post);