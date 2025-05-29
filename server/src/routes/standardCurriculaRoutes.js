import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getStandardCurricula, getStandardCurriculumDetail, deleteStandardCurriculum } from '../controllers/standardCurriculaController.js';

const router = express.Router();

router.get('/curriculum/standard-curricula', authenticateJWT, getStandardCurricula);
router.get('/curriculum/standard-curricula/:id/detailed', authenticateJWT, getStandardCurriculumDetail);
router.delete('/curriculum/standard-curricula/:id', authenticateJWT, deleteStandardCurriculum);

export default router;
