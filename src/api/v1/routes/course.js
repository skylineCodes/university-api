import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import * as controller from '../controllers/course.js';

const validator = createValidator();

const createCourseSchema = Joi.object({
  name: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  acronym: Joi.string().trim().required(),
  lecturer: Joi.string().trim().required(),
});

const updateCourseSchema = Joi.object({
  name: Joi.string().trim(),
  description: Joi.string().trim(),
  acronym: Joi.string().trim(),
  lecturer: Joi.string().trim(),
});

const router = Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findSingle);
router.post('/', validator.body(createCourseSchema), controller.create);
router.patch('/:id', validator.body(updateCourseSchema), controller.update);
router.delete('/:id', controller.remove);

export default router;
