import { Router } from 'express';
import lecturer from './routes/lecturer.js';
import course from './routes/course.js';
import department from './routes/department.js';

const router = Router();

router.get('/', (_, res) => res.json({ data: 200, message: 'Welcome to version 1 of university API'}));
router.use('/lecturer', lecturer);
router.use('/course', course);
router.use('/department', department);

export default router;
