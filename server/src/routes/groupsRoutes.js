import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import {
    getGroups,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup,
    attachStudents,
    detachStudents
} from '../controllers/groupsController.js';

const router = express.Router();

router.get('/college/groups/', authenticateJWT, getGroups);
router.get('/college/groups/:id', authenticateJWT, getGroupById);
router.post('/college/groups/', authenticateJWT, createGroup);
router.put('/college/groups/:id', authenticateJWT, updateGroup);
router.delete('/college/groups/:id', authenticateJWT, deleteGroup);
router.post('/college/groups/:id/students', authenticateJWT, attachStudents);
router.delete('/college/groups/:id/students', authenticateJWT, detachStudents);

export default router;
