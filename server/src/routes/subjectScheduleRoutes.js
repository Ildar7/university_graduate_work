import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getAvailableYears } from '../controllers/SubjectScheduleController.js';

const router = express.Router();

router.get('/curriculum/subject-schedule/available-years', authenticateJWT, getAvailableYears);

export default router;
