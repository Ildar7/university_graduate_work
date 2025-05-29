import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getAllPaginated, create, getById, update, deleteCurriculum } from '../controllers/WorkingCurriculumController.js';

const router = express.Router();

router.get('/curriculum/working-curriculum', authenticateJWT, getAllPaginated);
router.post('/curriculum/working-curriculum', authenticateJWT, create);
router.get('/curriculum/working-curriculum/:id', authenticateJWT, getById);
router.put('/curriculum/working-curriculum/:id', authenticateJWT, update);
router.delete('/curriculum/working-curriculum/:id', authenticateJWT, deleteCurriculum);

export default router;
