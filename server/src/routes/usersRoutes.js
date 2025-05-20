import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/usersController.js';
import { authenticateJWT } from '../middleware/auth.js';

const router = Router();

router.get('/college/users', authenticateJWT, getUsers);
router.post('/college/users', authenticateJWT, createUser);
router.put('/college/users/:id', authenticateJWT, updateUser);
router.delete('/college/users/:id', authenticateJWT, deleteUser);

export default router;
