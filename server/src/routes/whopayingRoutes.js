import {Router} from 'express';
import {authenticateJWT} from '../middleware/auth.js';
import {getWhopaying, getWhopayingById, createWhopaying, deleteWhopaying, updateWhopaying} from "../controllers/whopayingsController.js";

const router = Router();

router.get('/college/financing-sources', authenticateJWT, getWhopaying);
router.get('/college/financing-sources/:id', authenticateJWT, getWhopayingById);
router.post('/college/financing-sources', authenticateJWT, createWhopaying);
router.put('/college/financing-sources/:id', authenticateJWT, updateWhopaying);
router.delete('/college/financing-sources/:id', authenticateJWT, deleteWhopaying);

export default router;
