import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getAll } from '../controllers/EducationBasesController.js';

const router = express.Router();

router.get('/college/education-bases', authenticateJWT, getAll);

export default router;
