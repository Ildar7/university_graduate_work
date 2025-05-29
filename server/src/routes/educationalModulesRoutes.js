import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import {
    getEducationalModules,
    getEducationalUnits,
    getEducationalModuleById,
    getEducationalUnitById,
    createEducationalUnit,
    updateEducationalUnit,
    deleteEducationalUnit
} from '../controllers/educationalModulesController.js';

const router = express.Router();

router.get('/curriculum/educational-modules', authenticateJWT, getEducationalModules);
router.get('/curriculum/educational-modules/units', authenticateJWT, getEducationalUnits);
router.get('/curriculum/educational-modules/:id', authenticateJWT, getEducationalModuleById);
router.get('/curriculum/educational-modules/:moduleId/units/:unitId', authenticateJWT, getEducationalUnitById);
router.post('/curriculum/educational-modules/:moduleId/units', authenticateJWT, createEducationalUnit);
router.put('/curriculum/educational-modules/:moduleId/units/:unitId', authenticateJWT, updateEducationalUnit);
router.delete('/curriculum/educational-modules/:moduleId/units/:unitId', authenticateJWT, deleteEducationalUnit);

export default router;
