import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';
import React from 'react';
import { StudentsPage } from 'pages/StudentsPage';
import { LoginPage } from 'pages/LoginPage';
import { ImportStudentsPage } from 'pages/ImportStudentsPage';
import { EnrollmentTypesPage } from 'pages/EnrollmentTypesPage';
import { CitizenshipPage } from 'pages/CitizenshipPage';
import { NationalitiesPage } from 'pages/NationalitiesPage';
import { EduLanguagesPage } from 'pages/EduLanguagesPage';
import { FinishedEduTypesPage } from 'pages/FinishedEduTypesPage';
import { EduCoursesPage } from 'pages/EduCoursesPage';
import { StudyDirectionsPage } from 'pages/StudyDirectionsPage';
import { StudyDurationsPage } from 'pages/StudyDurationsPage';
import { QualificationsPage } from 'pages/QualificationsPage';
import { EduFormsPage } from 'pages/EduFormsPage';
import { ResidenceTypesPage } from 'pages/ResidenceTypesPage';
import { FinSourcesPage } from 'pages/FinSourcesPage';
import { ArrivalSourcesPage } from 'pages/ArrivalSourcesPage';
import { PracticeTypesPage } from 'pages/PracticeTypesPage';
import { EventsTypesPage } from 'pages/EventsTypesPage';
import { StudentSectionsPage } from 'pages/StudentSectionsPage';
import { PerformanceTypesPage } from 'pages/PerformanceTypesPage';
import { StudentClubsPage } from 'pages/StudentClubsPage';
import { EducationPage } from 'pages/EducationPage';
import { SettingsForDevelopersPage } from 'pages/Settings/SettingsForDevelopersPage';
import { SettingsMainPage } from 'pages/Settings/SettingsMainPage';
import { ReferencesPage } from 'pages/ReferencesPage';
import { CurriculumSubjectsPage } from 'pages/CurriculumSubjectsPage';
import {
    AddStandardCurriculumPage,
    EditStandardCurriculumPage,
    StandardCurriculumPage,
} from 'pages/StandardCurriculumPage';
import { WorkingCurriculumPage } from 'pages/WorkingCurriculumPage';
import { WorkingCurriculumTrainingSchedulePage } from 'pages/WorkingCurriculumTrainingSchedulePage';
import { StudentGroupsPage } from 'pages/StudentGroupsPage';
import { TrainingSchedulePage } from 'pages/TrainingSchedulePage';
import { TrainingScheduleDetailPage } from 'pages/TrainingScheduleDetailPage';
import { WorkingCurriculumExtractPage } from 'pages/WorkingCurriculumExtractPage';
import { StudentsInGroupsPage } from 'pages/StudentsInGroupsPage';
import { EmployeesPage } from 'pages/EmployeesPage';
import { EmployeeCategoriesPage } from 'pages/EmployeeCategoriesPage';
import { EmployeePositionsPage } from 'pages/EmployeePositionsPage';
import { EmployeeEducationsPage } from 'pages/EmployeeEducationsPage';
import { SubjectsSchedulePage } from 'pages/SubjectsSchedulePage';
import { SubjectsScheduleDetailPage } from 'pages/SubjectsScheduleDetailPage';
import { SubjectsScheduleWorkloadPage } from 'pages/SubjectsScheduleWorkloadPage';
import { AddStudentGroupsPage } from 'pages/AssistantPages/AddStudentGroups';
import { AutoDistributionStudentGroupsPage } from 'pages/AssistantPages/AutoDistributionStudentGroupsPage';
import {
    AppRoutes, getRouteAddAssistantStudentGroups,
    getRouteAddStandardCurriculum,
    getRouteArrivalSources, getRouteAssistantAutoDistributionStudentGroups,
    getRouteCitizenship,
    getRouteCurriculumSubjects,
    getRouteEditStandardCurriculum,
    getRouteEducation,
    getRouteEduCourses,
    getRouteEduForms,
    getRouteEduLanguages,
    getRouteEmployeeCategories, getRouteEmployeeEducations, getRouteEmployeePositions,
    getRouteEmployees,
    getRouteEnrollmentTypes,
    getRouteEventsTypes,
    getRouteFinishedEduTypes,
    getRouteFinSources,
    getRouteImportStudents,
    getRouteLogin,
    getRouteMain,
    getRouteNationalities,
    getRoutePerformanceTypes,
    getRoutePracticeTypes,
    getRouteQualifications,
    getRouteReferences,
    getRouteResidenceTypes,
    getRouteSettingsForDevelopers,
    getRouteSettingsMain,
    getRouteStandardCurriculum,
    getRouteStudentClubs,
    getRouteStudentGroups,
    getRouteStudents,
    getRouteStudentSections,
    getRouteStudentsInGroups,
    getRouteStudyDirections,
    getRouteStudyDurations, getRouteSubjectsSchedule, getRouteSubjectsScheduleDetail, getRouteSubjectsScheduleWorkload,
    getRouteTrainingSchedule,
    getRouteTrainingScheduleDetail,
    getRouteWorkingCurriculum,
    getRouteWorkingCurriculumExtract,
    getRouteWorkingCurriculumTrainingSchedule,
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
    [AppRoutes.ADD_STUDENT_GROUPS_ASSISTANT]: {
        path: getRouteAddAssistantStudentGroups(),
        element: <AddStudentGroupsPage />,
        authOnly: true,
    },
    [AppRoutes.AUTO_DISTRIBUTION_STUDENT_GROUPS_ASSISTANT]: {
        path: getRouteAssistantAutoDistributionStudentGroups(),
        element: <AutoDistributionStudentGroupsPage />,
        authOnly: true,
    },
    [AppRoutes.STUDENTS_IN_GROUPS]: {
        path: getRouteStudentsInGroups(),
        element: <StudentsInGroupsPage />,
        authOnly: true,
    },
    [AppRoutes.IMPORT_STUDENTS]: {
        path: getRouteImportStudents(),
        element: <ImportStudentsPage />,
        authOnly: true,
    },
    [AppRoutes.ENROLLMENT_TYPES]: {
        path: getRouteEnrollmentTypes(),
        element: <EnrollmentTypesPage />,
        authOnly: true,
    },
    [AppRoutes.CITIZENSHIP]: {
        path: getRouteCitizenship(),
        element: <CitizenshipPage />,
        authOnly: true,
    },
    [AppRoutes.NATIONALITIES]: {
        path: getRouteNationalities(),
        element: <NationalitiesPage />,
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
    [AppRoutes.EDU_COURSES]: {
        path: getRouteEduCourses(),
        element: <EduCoursesPage />,
        authOnly: true,
    },
    [AppRoutes.STUDY_DIRECTIONS]: {
        path: getRouteStudyDirections(),
        element: <StudyDirectionsPage />,
        authOnly: true,
    },
    [AppRoutes.STUDY_DURATIONS]: {
        path: getRouteStudyDurations(),
        element: <StudyDurationsPage />,
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
    [AppRoutes.PRACTICE_TYPES]: {
        path: getRoutePracticeTypes(),
        element: <PracticeTypesPage />,
        authOnly: true,
    },
    [AppRoutes.EVENTS_TYPES]: {
        path: getRouteEventsTypes(),
        element: <EventsTypesPage />,
        authOnly: true,
    },
    [AppRoutes.STUDENT_SECTIONS]: {
        path: getRouteStudentSections(),
        element: <StudentSectionsPage />,
        authOnly: true,
    },
    [AppRoutes.PERFORMANCE_TYPES]: {
        path: getRoutePerformanceTypes(),
        element: <PerformanceTypesPage />,
        authOnly: true,
    },
    [AppRoutes.STUDENT_CLUBS]: {
        path: getRouteStudentClubs(),
        element: <StudentClubsPage />,
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
    [AppRoutes.STANDARD_CURRICULUM]: {
        path: getRouteStandardCurriculum(),
        element: <StandardCurriculumPage />,
        authOnly: true,
    },
    [AppRoutes.ADD_STANDARD_CURRICULUM]: {
        path: getRouteAddStandardCurriculum(),
        element: <AddStandardCurriculumPage />,
        authOnly: true,
    },
    [AppRoutes.EDIT_STANDARD_CURRICULUM]: {
        path: getRouteEditStandardCurriculum(':id'),
        element: <EditStandardCurriculumPage />,
        authOnly: true,
    },
    [AppRoutes.WORKING_CURRICULUM]: {
        path: getRouteWorkingCurriculum(),
        element: <WorkingCurriculumPage />,
        authOnly: true,
    },
    [AppRoutes.WORKING_CURRICULUM_TRAINING_SCHEDULE]: {
        path: getRouteWorkingCurriculumTrainingSchedule(':id'),
        element: <WorkingCurriculumTrainingSchedulePage />,
        authOnly: true,
    },
    [AppRoutes.WORKING_CURRICULUM_EXTRACT]: {
        path: getRouteWorkingCurriculumExtract(':id'),
        element: <WorkingCurriculumExtractPage />,
        authOnly: true,
    },
    [AppRoutes.TRAINING_SCHEDULE]: {
        path: getRouteTrainingSchedule(),
        element: <TrainingSchedulePage />,
        authOnly: true,
    },
    [AppRoutes.TRAINING_SCHEDULE_DETAIL]: {
        path: getRouteTrainingScheduleDetail(':year'),
        element: <TrainingScheduleDetailPage />,
        authOnly: true,
    },
    [AppRoutes.EMPLOYEES]: {
        path: getRouteEmployees(),
        element: <EmployeesPage />,
        authOnly: true,
    },
    [AppRoutes.EMPLOYEE_CATEGORIES]: {
        path: getRouteEmployeeCategories(),
        element: <EmployeeCategoriesPage />,
        authOnly: true,
    },
    [AppRoutes.EMPLOYEE_POSITIONS]: {
        path: getRouteEmployeePositions(),
        element: <EmployeePositionsPage />,
        authOnly: true,
    },
    [AppRoutes.EMPLOYEE_EDUCATIONS]: {
        path: getRouteEmployeeEducations(),
        element: <EmployeeEducationsPage />,
        authOnly: true,
    },
    [AppRoutes.SUBJECTS_SCHEDULE]: {
        path: getRouteSubjectsSchedule(),
        element: <SubjectsSchedulePage />,
        authOnly: true,
    },
    [AppRoutes.SUBJECTS_SCHEDULE_DETAIL]: {
        path: getRouteSubjectsScheduleDetail(':year', ':week'),
        element: <SubjectsScheduleDetailPage />,
        authOnly: true,
    },
    [AppRoutes.SUBJECTS_SCHEDULE_WORKLOAD]: {
        path: getRouteSubjectsScheduleWorkload(':year', ':week'),
        element: <SubjectsScheduleWorkloadPage />,
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
    { path: getRouteImportStudents(), name: 'Импорт студентов' },
    { path: getRouteLogin(), name: 'Вход' },
];

export default routes;
