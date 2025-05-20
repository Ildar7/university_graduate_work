import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getTypeoftrainings, getTypeoftrainingById, createTypeoftraining, updateTypeoftraining, deleteTypeoftraining } from '../controllers/typeoftrainingsController.js';

const router = Router();

router.get('/college/education-forms', authenticateJWT, getTypeoftrainings);
router.get('/college/education-forms/:id', authenticateJWT, getTypeoftrainingById);
router.post('/college/education-forms', authenticateJWT, createTypeoftraining);
router.put('/college/education-forms/:id', authenticateJWT, updateTypeoftraining);
router.delete('/college/education-forms/:id', authenticateJWT, deleteTypeoftraining);

export default router;
