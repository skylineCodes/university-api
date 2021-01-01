import { Router } from 'express';
import lecturer from './routes/lecturer';

const router = Router();

router.use('/', (req, res) => res.send('Welcome to version 1 of university API'));
router.use('/lecturer', lecturer);

export default router;
