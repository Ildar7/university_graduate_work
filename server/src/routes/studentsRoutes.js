import { Router } from 'express';
import { getStudents } from '../controllers/studentsController.js';
import { authenticateJWT } from '../middleware/auth.js';

const router = Router();

router.get('/college/students', authenticateJWT, getStudents);

export default router;
