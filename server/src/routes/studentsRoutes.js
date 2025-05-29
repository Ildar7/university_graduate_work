import { Router } from 'express';
import { getStudents, getStudentById, createStudent, deleteStudent, updateStudent } from '../controllers/studentsController.js';
import { authenticateJWT } from '../middleware/auth.js';

const router = Router();

router.get('/college/students', authenticateJWT, getStudents);
router.get('/college/students/:id', authenticateJWT, getStudentById);
router.post('/college/students', authenticateJWT, createStudent);
router.put('/college/students/:id', authenticateJWT, updateStudent);
router.delete('/college/students/:id', authenticateJWT, deleteStudent);

export default router;
