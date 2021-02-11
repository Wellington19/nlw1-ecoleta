import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import ItensController from './controllers/ItensController';
import PointsController from './controllers/PointsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itensController = new ItensController();

routes.get('/itens', itensController.index);

routes.get('/points', 
  celebrate({
    query: Joi.object().keys({
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      itens: Joi.string().required().regex(/[\d,]+$/),
    })
  }, {
    abortEarly: false
  }),
  pointsController.index);

routes.get('/points/:id', 
  celebrate({
    params: Joi.object().keys({
      id: Joi.number().required(),
    })
  }),
  pointsController.show);

routes.post('/points', 
  upload.single('image'), 
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      itens: Joi.string().required().regex(/[\d,]+$/),
    })
  }, {
    abortEarly: false
  }),
  pointsController.create);

export default routes;