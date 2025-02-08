import { Router } from 'express';
import demoRoute from './demo.route';

const router = Router();

router.use('/demo', demoRoute);

export default router;
