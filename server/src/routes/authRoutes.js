import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { loginUser } from '../controllers/authController.js';

const router = Router();

router.post('/core/auth/', asyncHandler(loginUser));

export default router;
