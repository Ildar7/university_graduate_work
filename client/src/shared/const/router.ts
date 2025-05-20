export enum AppRoutes {
    MAIN = 'main',
    STUDENTS = 'students',
    STUDENT_GROUPS = 'student_groups',
    ADD_STUDENT_GROUPS_ASSISTANT = 'add_student_groups_assistant',
    AUTO_DISTRIBUTION_STUDENT_GROUPS_ASSISTANT = 'auto_distribution_student_groups_assistant',
    STUDENTS_IN_GROUPS = 'students_in_groups',
    IMPORT_STUDENTS = 'import_students',
    ENROLLMENT_TYPES = 'enrollment_types',
    CITIZENSHIP = 'citizenship',
    NATIONALITIES = 'nationalities',
    EDU_LANGUAGES = 'edu_languages',
    FINISHED_EDU_TYPES = 'finished_edu_types',
    EDU_COURSES = 'edu_courses',
    STUDY_DIRECTIONS = 'study_directions',
    STUDY_DURATIONS = 'study_durations',
    QUALIFICATIONS = 'qualifications',
    EDU_FORMS = 'edu_forms',
    RESIDENCE_TYPES = 'residence_types',
    FIN_SOURCES = 'fin_sources',
    ARRIVAL_SOURCES = 'arrival_sources',
    PRACTICE_TYPES = 'practice_types',
    EVENTS_TYPES = 'events_types',
    STUDENT_SECTIONS = 'student_sections',
    PERFORMANCE_TYPES = 'performance_types',
    STUDENT_CLUBS = 'student_clubs',
    EDUCATION = 'education',
    REFERENCES = 'references',
    SETTINGS_FOR_DEVELOPERS = 'settings_for_developers',
    SETTINGS_MAIN = 'settings_main',
    CURRICULUM_SUBJECTS = 'curriculum_subjects',
    STANDARD_CURRICULUM = 'standard_curriculum',
    ADD_STANDARD_CURRICULUM = 'add_standard_curriculum',
    EDIT_STANDARD_CURRICULUM = 'edit_standard_curriculum',
    WORKING_CURRICULUM = 'working_curriculum',
    WORKING_CURRICULUM_TRAINING_SCHEDULE = 'working_curriculum_training_schedule',
    WORKING_CURRICULUM_EXTRACT = 'working_curriculum_extract',
    TRAINING_SCHEDULE = 'training_schedule',
    TRAINING_SCHEDULE_DETAIL = 'training_schedule_detail',
    EMPLOYEES = 'employees',
    EMPLOYEE_CATEGORIES = 'employee_categories',
    EMPLOYEE_POSITIONS = 'employee_positions',
    EMPLOYEE_EDUCATIONS = 'employee_educations',
    SUBJECTS_SCHEDULE = 'subjects_schedule',
    SUBJECTS_SCHEDULE_DETAIL = 'subjects_schedule_detail',
    SUBJECTS_SCHEDULE_WORKLOAD = 'subjects_schedule_workload',
    LOGIN = 'login',

    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteStudents = () => '/students';
export const getRouteStudentGroups = () => '/students/groups';
export const getRouteAddAssistantStudentGroups = () => '/students/groups/assistant/add';
export const getRouteAssistantAutoDistributionStudentGroups = () => '/students/groups/assistant/auto-distribution';
export const getRouteStudentsInGroups = () => '/students/groups/linking';
export const getRouteImportStudents = () => '/students/import';
export const getRouteEnrollmentTypes = () => '/students/learning/enrollment-types';
export const getRouteCitizenship = () => '/students/citizenship';
export const getRouteNationalities = () => '/students/nationalities';
export const getRouteEduLanguages = () => '/students/learning/edu-languages';
export const getRouteFinishedEduTypes = () => '/students/learning/finished-edu-types';
export const getRouteEduCourses = () => '/students/edu-courses';
export const getRouteStudyDirections = () => '/students/olympiads/study-directions';
export const getRouteStudyDurations = () => '/students/study-durations';
export const getRouteResidenceTypes = () => '/students/habitation/residence-types';
export const getRouteFinSources = () => '/students/learning/financing-sources';
export const getRouteArrivalSources = () => '/students/habitation/arrival-sources';
export const getRouteEventsTypes = () => '/students/olympiads/events-types';
export const getRouteStudentSections = () => '/students/olympiads/sections';
export const getRouteStudentClubs = () => '/students/olympiads/clubs';
export const getRouteEducation = () => '/education';
export const getRouteReferences = () => '/references';
export const getRouteCurriculumSubjects = () => '/references/subjects';
export const getRouteStandardCurriculum = () => '/references/standard-curriculum/';
export const getRouteAddStandardCurriculum = () => '/references/standard-curriculum/add/';
export const getRouteEditStandardCurriculum = (id: string) => `/references/standard-curriculum/edit/${id}`;
export const getRouteWorkingCurriculum = () => '/references/working-curriculum/';
export const getRouteWorkingCurriculumTrainingSchedule = (id: string) => `/references/working-curriculum/training-schedule/${id}`;
export const getRouteWorkingCurriculumExtract = (id: string) => `/references/working-curriculum/extract/${id}`;
export const getRouteTrainingSchedule = () => '/references/training-schedule/';
export const getRouteTrainingScheduleDetail = (year: string) => `/references/training-schedule/${year}`;
export const getRouteSubjectsSchedule = () => '/references/subjects-schedule/';
export const getRouteSubjectsScheduleDetail = (year: string, week: string) => `/references/subjects-schedule/${year}/${week}`;
export const getRouteSubjectsScheduleWorkload = (year: string, week: string) => `/references/subjects-schedule/workload/${year}/${week}`;
export const getRouteQualifications = () => '/education/qualifications';
export const getRouteEduForms = () => '/education/edu-forms';
export const getRoutePracticeTypes = () => '/education/practice-types';
export const getRoutePerformanceTypes = () => '/education/performance-types';
export const getRouteSettingsForDevelopers = () => '/settings/developers';
export const getRouteSettingsMain = () => '/settings/main/';
export const getRouteEmployees = () => '/employees';
export const getRouteEmployeeCategories = () => '/employees/categories';
export const getRouteEmployeePositions = () => '/employees/positions';
export const getRouteEmployeeEducations = () => '/employees/edu-types';

export const getRouteLogin = () => '/login';
