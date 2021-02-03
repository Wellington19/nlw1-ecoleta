import express from 'express';

import ItensController from './controllers/ItensController';
import PointsController from './controllers/PointsController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItensController();

routes.get('/itens', itensController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;