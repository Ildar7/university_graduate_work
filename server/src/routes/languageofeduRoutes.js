import {Router} from 'express';
import {authenticateJWT} from '../middleware/auth.js';
import {getLanguageofeduById, getLanguageofedus, createLanguageofedu, deleteLanguageofedu, updateLanguageofedu} from "../controllers/languageofedusController.js";

const router = Router();

router.get('/college/study-languages', authenticateJWT, getLanguageofedus);
router.get('/college/study-languages/:id', authenticateJWT, getLanguageofeduById);
router.post('/college/study-languages', authenticateJWT, createLanguageofedu);
router.put('/college/study-languages/:id', authenticateJWT, updateLanguageofedu);
router.delete('/college/study-languages/:id', authenticateJWT, deleteLanguageofedu);

export default router;
