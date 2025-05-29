import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import {
    getSubjects,
    getSubjectById,
    createSubject,
    updateSubject,
    deleteSubject
} from '../controllers/subjectsController.js';

const router = express.Router();

router.get('/curriculum/subjects', authenticateJWT, getSubjects);
router.get('/curriculum/subjects/:subjectId', authenticateJWT, getSubjectById);
router.post('/curriculum/subjects', authenticateJWT, createSubject);
router.put('/curriculum/subjects/:subjectId', authenticateJWT, updateSubject);
router.delete('/curriculum/subjects/:subjectId', authenticateJWT, deleteSubject);

export default router;
