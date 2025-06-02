import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import React from 'react';
import { StudentsPage } from 'pages/StudentsPage';
import { LoginPage } from 'pages/LoginPage';
import { EnrollmentTypesPage } from 'pages/EnrollmentTypesPage';
import { EduLanguagesPage } from 'pages/EduLanguagesPage';
import { FinishedEduTypesPage } from 'pages/FinishedEduTypesPage';
import { StudyDirectionsPage } from 'pages/StudyDirectionsPage';
import { QualificationsPage } from 'pages/QualificationsPage';
import { EduFormsPage } from 'pages/EduFormsPage';
import { ResidenceTypesPage } from 'pages/ResidenceTypesPage';
import { FinSourcesPage } from 'pages/FinSourcesPage';
import { ArrivalSourcesPage } from 'pages/ArrivalSourcesPage';
import { EducationPage } from 'pages/EducationPage';
import { SettingsForDevelopersPage } from 'pages/Settings/SettingsForDevelopersPage';
import { SettingsMainPage } from 'pages/Settings/SettingsMainPage';
import { ReferencesPage } from 'pages/ReferencesPage';
import { CurriculumSubjectsPage } from 'pages/CurriculumSubjectsPage';
import { StudentGroupsPage } from 'pages/StudentGroupsPage';
import { StudentsInGroupsPage } from 'pages/StudentsInGroupsPage';
import {
    AppRoutes,
    getRouteArrivalSources,
    getRouteCurriculumSubjects,
    getRouteEducation,
    getRouteEduForms,
    getRouteEduLanguages,
    getRouteEnrollmentTypes,
    getRouteFinishedEduTypes,
    getRouteFinSources,
    getRouteLogin,
    getRouteMain,
    getRouteQualifications,
    getRouteReferences,
    getRouteResidenceTypes,
    getRouteSettingsForDevelopers,
    getRouteSettingsMain,
    getRouteStudentGroups,
    getRouteStudents,
    getRouteStudentsInGroups,
    getRouteStudyDirections,
} from '../../const/router';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.STUDENTS]: {
        path: getRouteStudents(),
        element: <StudentsPage />,
        authOnly: true,
    },
    [AppRoutes.STUDENT_GROUPS]: {
        path: getRouteStudentGroups(),
        element: <StudentGroupsPage />,
        authOnly: true,
    },
    [AppRoutes.STUDENTS_IN_GROUPS]: {
        path: getRouteStudentsInGroups(),
        element: <StudentsInGroupsPage />,
        authOnly: true,
    },
    [AppRoutes.ENROLLMENT_TYPES]: {
        path: getRouteEnrollmentTypes(),
        element: <EnrollmentTypesPage />,
        authOnly: true,
    },
    [AppRoutes.EDU_LANGUAGES]: {
        path: getRouteEduLanguages(),
        element: <EduLanguagesPage />,
        authOnly: true,
    },
    [AppRoutes.FINISHED_EDU_TYPES]: {
        path: getRouteFinishedEduTypes(),
        element: <FinishedEduTypesPage />,
        authOnly: true,
    },
    [AppRoutes.STUDY_DIRECTIONS]: {
        path: getRouteStudyDirections(),
        element: <StudyDirectionsPage />,
        authOnly: true,
    },
    [AppRoutes.QUALIFICATIONS]: {
        path: getRouteQualifications(),
        element: <QualificationsPage />,
        authOnly: true,
    },
    [AppRoutes.EDU_FORMS]: {
        path: getRouteEduForms(),
        element: <EduFormsPage />,
        authOnly: true,
    },
    [AppRoutes.RESIDENCE_TYPES]: {
        path: getRouteResidenceTypes(),
        element: <ResidenceTypesPage />,
        authOnly: true,
    },
    [AppRoutes.FIN_SOURCES]: {
        path: getRouteFinSources(),
        element: <FinSourcesPage />,
        authOnly: true,
    },
    [AppRoutes.ARRIVAL_SOURCES]: {
        path: getRouteArrivalSources(),
        element: <ArrivalSourcesPage />,
        authOnly: true,
    },
    [AppRoutes.EDUCATION]: {
        path: getRouteEducation(),
        element: <EducationPage />,
        authOnly: true,
    },
    [AppRoutes.REFERENCES]: {
        path: getRouteReferences(),
        element: <ReferencesPage />,
        authOnly: true,
    },
    [AppRoutes.SETTINGS_FOR_DEVELOPERS]: {
        path: getRouteSettingsForDevelopers(),
        element: <SettingsForDevelopersPage />,
        authOnly: true,
    },
    [AppRoutes.SETTINGS_MAIN]: {
        path: getRouteSettingsMain(),
        element: <SettingsMainPage />,
        authOnly: true,
    },
    [AppRoutes.CURRICULUM_SUBJECTS]: {
        path: getRouteCurriculumSubjects(),
        element: <CurriculumSubjectsPage />,
        authOnly: true,
    },
    [AppRoutes.LOGIN]: {
        path: getRouteLogin(),
        element: <LoginPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
        authOnly: true,
    },
};

const routes = [
    { path: getRouteMain(), exact: true, name: 'Главная' },
    { path: getRouteStudents(), name: 'Студенты' },
    { path: getRouteLogin(), name: 'Вход' },
];

export default routes;
