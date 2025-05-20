import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getFromacceptedfinished, getFromacceptedfinishedById, createFromacceptedfinished, updateFromacceptedfinished, deleteFromacceptedfinished } from '../controllers/fromacceptedfinishedsController.js';

const router = Router();

router.get('/college/finished-education-types', authenticateJWT, getFromacceptedfinished);
router.get('/college/finished-education-types/:id', authenticateJWT, getFromacceptedfinishedById);
router.post('/college/finished-education-types', authenticateJWT, createFromacceptedfinished);
router.put('/college/finished-education-types/:id', authenticateJWT, updateFromacceptedfinished);
router.delete('/college/finished-education-types/:id', authenticateJWT, deleteFromacceptedfinished);

export default router;
