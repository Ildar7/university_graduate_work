import express from 'express';
import { authenticateJWT } from '../middleware/auth.js';
import { getGenders, getGenderById } from '../controllers/gendersController.js';
import { getNationalities, getNationalityById } from '../controllers/nationalitiesController.js';
import { getSpecialties, getSpecialtyById } from '../controllers/specialtiesController.js';
import { getQualifications, getQualificationById } from '../controllers/qualificationsController.js';
import { getDurationoftrainings, getDurationoftrainingById } from '../controllers/durationoftrainingsController.js';
import { getCourseoftrainings, getCourseoftrainingById } from '../controllers/courseoftrainingsController.js';
import { getTypeoftrainings, getTypeoftrainingById } from '../controllers/typeoftrainingsController.js';
import { getTypeenrollments, getTypeenrollmentById } from '../controllers/typeenrollmentsController.js';
import { getCitizenships, getCitizenshipById } from '../controllers/citizenshipsController.js';
import { getComesfrom, getComesfromById } from '../controllers/comesfromsController.js';
import { getFromacceptedfinished, getFromacceptedfinishedById } from '../controllers/fromacceptedfinishedsController.js';
import { getTypeofareaofresidence, getTypeofareaofresidenceById } from '../controllers/typeofareaofresidencesController.js';
import { getNeedhostels, getNeedhostelById } from '../controllers/needhostelsController.js';
import { getWhopaying, getWhopayingById } from '../controllers/whopayingsController.js';
import { getKvotums, getKvotumById } from '../controllers/kvotumsController.js';
import { getFinimatpomoshs, getFinimatpomoshById } from '../controllers/finimatpomoshsController.js';
import { getGroups } from '../controllers/groupsController.js';
import { getTypeofdirection, getTypeofdirectionById } from '../controllers/typeofdirectionController.js';

const router = express.Router();

// Существующие маршруты с пагинацией и сортировкой
router.get('/college/genders', authenticateJWT, getGenders);
router.get('/college/nationalities', authenticateJWT, getNationalities);
router.get('/college/specialties', authenticateJWT, getSpecialties);
router.get('/college/qualifications', authenticateJWT, getQualifications);
router.get('/college/study-durations', authenticateJWT, getDurationoftrainings);
router.get('/college/educations-courses', authenticateJWT, getCourseoftrainings);
router.get('/college/education-forms', authenticateJWT, getTypeoftrainings);
router.get('/college/enrollment-types', authenticateJWT, getTypeenrollments);
router.get('/college/citizenship', authenticateJWT, getCitizenships);
router.get('/college/student-arrival-sources', authenticateJWT, getComesfrom);
router.get('/college/finished-education-types', authenticateJWT, getFromacceptedfinished);
router.get('/college/residence-types', authenticateJWT, getTypeofareaofresidence);
router.get('/college/need-hostel-types', authenticateJWT, getNeedhostels);
router.get('/college/financing-sources', authenticateJWT, getWhopaying);
router.get('/college/admission-quotas-types', authenticateJWT, getKvotums);
router.get('/college/material-assistance-types', authenticateJWT, getFinimatpomoshs);
router.get('/college/groups', authenticateJWT, getGroups);
router.get('/college/study-directions', authenticateJWT, getTypeofdirection);

// Новые маршруты для получения записи по ID
router.get('/college/genders/:id', authenticateJWT, getGenderById);
router.get('/college/nationalities/:id', authenticateJWT, getNationalityById);
router.get('/college/specialties/:id', authenticateJWT, getSpecialtyById);
router.get('/college/qualifications/:id', authenticateJWT, getQualificationById);
router.get('/college/study-durations/:id', authenticateJWT, getDurationoftrainingById);
router.get('/college/educations-courses/:id', authenticateJWT, getCourseoftrainingById);
router.get('/college/education-forms/:id', authenticateJWT, getTypeoftrainingById);
router.get('/college/enrollment-types/:id', authenticateJWT, getTypeenrollmentById);
router.get('/college/citizenship/:id', authenticateJWT, getCitizenshipById);
router.get('/college/student-arrival-sources/:id', authenticateJWT, getComesfromById);
router.get('/college/finished-education-types/:id', authenticateJWT, getFromacceptedfinishedById);
router.get('/college/residence-types/:id', authenticateJWT, getTypeofareaofresidenceById);
router.get('/college/need-hostel-types/:id', authenticateJWT, getNeedhostelById);
router.get('/college/financing-sources/:id', authenticateJWT, getWhopayingById);
router.get('/college/admission-quotas-types/:id', authenticateJWT, getKvotumById);
router.get('/college/material-assistance-types/:id', authenticateJWT, getFinimatpomoshById);
// router.get('/college/groups/:id', authenticateJWT, getGroupById);
router.get('/college/study-directions/:id', authenticateJWT, getTypeofdirectionById);

export default router;
