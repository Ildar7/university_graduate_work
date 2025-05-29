import express from 'express';
import {authenticateJWT} from '../middleware/auth.js';
import {getGenderById, getGenders} from '../controllers/gendersController.js';
import {getNationalities, getNationalityById} from '../controllers/nationalitiesController.js';
import {getDurationoftrainingById, getDurationoftrainings} from '../controllers/durationoftrainingsController.js';
import {getCourseoftrainingById, getCourseoftrainings} from '../controllers/courseoftrainingsController.js';
import {getCitizenshipById, getCitizenships} from '../controllers/citizenshipsController.js';
import {getComesfrom, getComesfromById} from '../controllers/comesfromsController.js';
import {getNeedhostelById, getNeedhostels} from '../controllers/needhostelsController.js';
import {getKvotumById, getKvotums} from '../controllers/kvotumsController.js';
import {getFinimatpomoshById, getFinimatpomoshs} from '../controllers/finimatpomoshsController.js';

const router = express.Router();

router.get('/college/genders', authenticateJWT, getGenders);
router.get('/college/nationalities', authenticateJWT, getNationalities);
router.get('/college/study-durations', authenticateJWT, getDurationoftrainings);
router.get('/college/educations-courses', authenticateJWT, getCourseoftrainings);
router.get('/college/citizenship', authenticateJWT, getCitizenships);
router.get('/college/student-arrival-sources', authenticateJWT, getComesfrom);
router.get('/college/need-hostel-types', authenticateJWT, getNeedhostels);
router.get('/college/admission-quotas-types', authenticateJWT, getKvotums);
router.get('/college/material-assistance-types', authenticateJWT, getFinimatpomoshs);

router.get('/college/genders/:id', authenticateJWT, getGenderById);
router.get('/college/nationalities/:id', authenticateJWT, getNationalityById);
router.get('/college/study-durations/:id', authenticateJWT, getDurationoftrainingById);
router.get('/college/educations-courses/:id', authenticateJWT, getCourseoftrainingById);
router.get('/college/citizenship/:id', authenticateJWT, getCitizenshipById);
router.get('/college/student-arrival-sources/:id', authenticateJWT, getComesfromById);
router.get('/college/need-hostel-types/:id', authenticateJWT, getNeedhostelById);
router.get('/college/admission-quotas-types/:id', authenticateJWT, getKvotumById);
router.get('/college/material-assistance-types/:id', authenticateJWT, getFinimatpomoshById);

export default router;
