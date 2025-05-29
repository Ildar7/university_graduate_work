import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getOptions } from '../controllers/optionsController.js';

const router = express.Router();

router.get('/core/options', authenticateJWT, getOptions);

export default router;
