import { Router } from 'express';
import LocationController from '../controllers/LocationController.js'

export const locationRoutes = new Router();

locationRoutes.get('/get-cities', LocationController.get);