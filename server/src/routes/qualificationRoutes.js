import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getQualifications, getQualificationById, createQualification, updateQualification, deleteQualification } from '../controllers/qualificationsController.js';

const router = Router();

router.get('/college/qualifications', authenticateJWT, getQualifications);
router.get('/college/qualifications/:id', authenticateJWT, getQualificationById);
router.post('/college/qualifications', authenticateJWT, createQualification);
router.put('/college/qualifications/:id', authenticateJWT, updateQualification);
router.delete('/college/qualifications/:id', authenticateJWT, deleteQualification);

export default router;
