import { Router } from 'express';
import StoryController from '../controllers/StoryController.js'

import { roleMiddleware } from '../middlewares/roleMiddleware.js'

export const storyRoutes = new Router();

storyRoutes.get('/story', StoryController.getAll);
storyRoutes.get('/story/:id', StoryController.getOne);
storyRoutes.post('/story', roleMiddleware, StoryController.post);
storyRoutes.delete('/story/:id', roleMiddleware, StoryController.delete);