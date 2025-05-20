import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getTypeofdirection, getTypeofdirectionById, createTypeofdirection, updateTypeofdirection, deleteTypeofdirection } from '../controllers/typeofdirectionController.js';

const router = Router();

router.get('/college/study-directions', authenticateJWT, getTypeofdirection);
router.get('/college/study-directions/:id', authenticateJWT, getTypeofdirectionById);
router.post('/college/study-directions', authenticateJWT, createTypeofdirection);
router.put('/college/study-directions/:id', authenticateJWT, updateTypeofdirection);
router.delete('/college/study-directions/:id', authenticateJWT, deleteTypeofdirection);

export default router;
