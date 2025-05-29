import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getAllAvailable } from '../controllers/trainingScheduleController.js';

const router = express.Router();

router.get('/curriculum/training-schedule/all-available', authenticateJWT, getAllAvailable);

export default router;
