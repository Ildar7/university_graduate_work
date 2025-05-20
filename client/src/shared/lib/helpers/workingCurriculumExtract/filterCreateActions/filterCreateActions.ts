import {
    WorkingCurriculumExtractActionFields,
    WorkingCurriculumExtractSubjects,
} from 'entities/WorkingCurriculumExtract';

export const filterCreateActions = (action: WorkingCurriculumExtractActionFields | WorkingCurriculumExtractSubjects) => (
    !!(action.hours || action.hours_theory || action.hours_practice || action.hours_coursework || action.hours_internship
        || action.controlworks_count || action.courseworks_count || action.exams_semestrs || action.tests_semesters)
);
