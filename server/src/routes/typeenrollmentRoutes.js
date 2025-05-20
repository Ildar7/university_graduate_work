import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getTypeenrollments, getTypeenrollmentById, createTypeenrollment, updateTypeenrollment, deleteTypeenrollment } from '../controllers/typeenrollmentsController.js';

const router = Router();

router.get('/college/enrollment-types', authenticateJWT, getTypeenrollments);
router.get('/college/enrollment-types/:id', authenticateJWT, getTypeenrollmentById);
router.post('/college/enrollment-types', authenticateJWT, createTypeenrollment);
router.put('/college/enrollment-types/:id', authenticateJWT, updateTypeenrollment);
router.delete('/college/enrollment-types/:id', authenticateJWT, deleteTypeenrollment);

export default router;
