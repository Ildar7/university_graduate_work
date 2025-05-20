import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getComesfrom, getComesfromById, createComesfrom, updateComesfrom, deleteComesfrom } from '../controllers/comesfromsController.js';

const router = Router();

router.get('/college/student-arrival-sources', authenticateJWT, getComesfrom);
router.get('/college/student-arrival-sources/:id', authenticateJWT, getComesfromById);
router.post('/college/student-arrival-sources', authenticateJWT, createComesfrom);
router.put('/college/student-arrival-sources/:id', authenticateJWT, updateComesfrom);
router.delete('/college/student-arrival-sources/:id', authenticateJWT, deleteComesfrom);

export default router;
