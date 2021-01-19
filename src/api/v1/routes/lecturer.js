import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import * as controller from '../controllers/lecturer';

const validator = createValidator();

const createLecturerSchema = Joi.object({
  name: Joi.string().trim().required(),
  position: Joi.string().trim().required(),
  about: Joi.string().trim().required(),
  qualification: Joi.string().trim().required(),
});

const updateLecturerSchema = Joi.object({
  name: Joi.string().trim(),
  position: Joi.string().trim(),
  about: Joi.string().trim(),
  qualification: Joi.string().trim(),
});

const router = Router();

router.get('/', controller.findAll);
router.post('/', validator.body(createLecturerSchema), controller.create);
router.patch('/:id', validator.body(updateLecturerSchema), controller.update);
router.delete('/:id', controller.remove);

export default router;
