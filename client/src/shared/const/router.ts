export enum AppRoutes {
    MAIN = 'main',
    STUDENTS = 'students',
    STUDENT_GROUPS = 'student_groups',
    STUDENTS_IN_GROUPS = 'students_in_groups',
    ENROLLMENT_TYPES = 'enrollment_types',
    EDU_LANGUAGES = 'edu_languages',
    FINISHED_EDU_TYPES = 'finished_edu_types',
    STUDY_DIRECTIONS = 'study_directions',
    QUALIFICATIONS = 'qualifications',
    EDU_FORMS = 'edu_forms',
    RESIDENCE_TYPES = 'residence_types',
    FIN_SOURCES = 'fin_sources',
    ARRIVAL_SOURCES = 'arrival_sources',
    EDUCATION = 'education',
    REFERENCES = 'references',
    SETTINGS_FOR_DEVELOPERS = 'settings_for_developers',
    SETTINGS_MAIN = 'settings_main',
    CURRICULUM_SUBJECTS = 'curriculum_subjects',
    LOGIN = 'login',

    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/'; // есть
export const getRouteStudents = () => '/students'; // есть
export const getRouteStudentGroups = () => '/students/groups'; // есть
export const getRouteStudentsInGroups = () => '/students/groups/linking'; // есть
export const getRouteEnrollmentTypes = () => '/students/learning/enrollment-types'; // есть
export const getRouteEduLanguages = () => '/students/learning/edu-languages'; // есть
export const getRouteFinishedEduTypes = () => '/students/learning/finished-edu-types'; // есть
export const getRouteStudyDirections = () => '/students/olympiads/study-directions'; // есть
export const getRouteResidenceTypes = () => '/students/habitation/residence-types'; // есть
export const getRouteFinSources = () => '/students/learning/financing-sources'; // есть
export const getRouteArrivalSources = () => '/students/habitation/arrival-sources'; // есть
export const getRouteEducation = () => '/education'; // есть
export const getRouteReferences = () => '/references'; // есть
export const getRouteCurriculumSubjects = () => '/references/subjects'; // есть
export const getRouteQualifications = () => '/education/qualifications'; // есть
export const getRouteEduForms = () => '/education/edu-forms'; // есть
export const getRouteSettingsForDevelopers = () => '/settings/developers'; // есть
export const getRouteSettingsMain = () => '/settings/main/'; // есть

export const getRouteLogin = () => '/login';
