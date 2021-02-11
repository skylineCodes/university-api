import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import * as controller from '../controllers/department.js';

const validator = createValidator();

const createDepartmentSchema = Joi.object({
  name: Joi.string().trim().required(),
  acronym: Joi.string().trim().required(),
  founded: Joi.string().trim().required(),
  history: Joi.string().trim().required(),
  hod: Joi.string().trim().required(),
  lecturers: Joi.array().required(),
  courses: Joi.array().required(),
});

const updateDepartmentSchema = Joi.object({
  name: Joi.string().trim(),
  acronym: Joi.string().trim(),
  founded: Joi.string().trim(),
  history: Joi.string().trim(),
  hod: Joi.string().trim(),
  lecturers: Joi.array(),
  courses: Joi.array(),
});

const router = Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findSingle);
router.post('/', validator.body(createDepartmentSchema), controller.create);
router.patch('/:id', validator.body(updateDepartmentSchema), controller.update);
router.delete('/:id', controller.remove);

export default router;
