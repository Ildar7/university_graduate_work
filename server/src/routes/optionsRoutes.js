import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getOptions, updateOptions } from '../controllers/optionsController.js'; // Добавляем updateOptions

const router = express.Router();

router.get('/core/options', authenticateJWT, getOptions);
router.put('/core/options', authenticateJWT, updateOptions); // Новый PUT-роут

export default router;
