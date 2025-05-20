import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getTypeofareaofresidence, getTypeofareaofresidenceById, createTypeofareaofresidence, updateTypeofareaofresidence, deleteTypeofareaofresidence } from '../controllers/typeofareaofresidencesController.js';

const router = Router();

router.get('/college/residence-types', authenticateJWT, getTypeofareaofresidence);
router.get('/college/residence-types/:id', authenticateJWT, getTypeofareaofresidenceById);
router.post('/college/residence-types', authenticateJWT, createTypeofareaofresidence);
router.put('/college/residence-types/:id', authenticateJWT, updateTypeofareaofresidence);
router.delete('/college/residence-types/:id', authenticateJWT, deleteTypeofareaofresidence);

export default router;
