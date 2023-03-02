import { Router } from 'express';
import LocationController from '../controllers/LocationController.js'

export const locationRoutes = new Router();

locationRoutes.get('/get-cities', LocationController.get);
//[{_id: string, isPopular: boolean, region: string, city: string, districts: string[], metro: string[]}]

locationRoutes.get('/get-city', LocationController.getCity);

locationRoutes.get('/get-popular-cities', LocationController.getPopularCities);
//[{_id: string, isPopular: boolean, region: string, city: string, districts: string[], metro: string[]}]

locationRoutes.get('/get-republics', LocationController.getRepublics);
//string[]

locationRoutes.get('/get-cities-by-republic', LocationController.getCitiesByRepublic);
//[{_id: string, isPopular: boolean, region: string, city: string, districts: string[], metro: string[]}]