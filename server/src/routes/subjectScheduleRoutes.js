import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import {getAvailableYears, getSchedule, SubjectScheduleController} from '../controllers/SubjectScheduleController.js';

const router = express.Router();

router.get('/curriculum/subject-schedule/available-years', authenticateJWT, getAvailableYears);
router.get('/curriculum/subject-schedule/list/:year', authenticateJWT, getSchedule);
router.get('/curriculum/subject-schedule/:year/:week/', authenticateJWT, SubjectScheduleController.getScheduleByYearAndWeek);
router.post('/curriculum/subject-schedule/:year/:week/', authenticateJWT, SubjectScheduleController.createOrUpdateSchedule);

export default router;
