import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getSpecialties, getSpecialtyById, createSpecialty, updateSpecialty, deleteSpecialty } from '../controllers/specialtiesController.js';

const router = Router();

router.get('/college/specialties', authenticateJWT, getSpecialties);
router.get('/college/specialties/:id', authenticateJWT, getSpecialtyById);
router.post('/college/specialties', authenticateJWT, createSpecialty);
router.put('/college/specialties/:id', authenticateJWT, updateSpecialty);
router.delete('/college/specialties/:id', authenticateJWT, deleteSpecialty);

export default router;
