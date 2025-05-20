import {
    WorkingCurriculumExtractSummary,
} from 'entities/WorkingCurriculumExtract/model/types/workingCurriculumExtractQualifications';

interface WorkingCurriculumExtractSubjectRestrictions {
    restriction_id: number;
    subject_id: number;
    exams_semestrs_from: number;
    exams_semestrs_to: number;
    tests_semestrs_from: number | null;
    tests_semestrs_to: number | null;
    study_time_hours_min: number;
    study_time_hours_max: number;
    study_time_theory_hours: number | null;
    study_time_practice_hours: number | null;
    study_time_course_project_hours: number | null;
    semesters_from: number;
    semesters_to: number;
    count_of_tests: number;
}

export interface WorkingCurriculumExtractSubject {
    subject_id: number;
    name: string;
    sort: number;
    module_id: number | null;
    unit_id: number | null;
    restrictions?: WorkingCurriculumExtractSubjectRestrictions;
}

interface WorkingCurriculumExtractSemestersDistribution {
    working_curriculum_extract_distribution_id?: number;
    working_curriculum_extract_id?: number;
    semester_number: number;
    hours: number| null;
}

export interface WorkingCurriculumExtractSubjects {
    working_curriculum_extract_id?: number;
    working_curriculum_id?: number;
    standard_curriculum_qualification_id: number | null;
    subject_id: number;
    educational_activity_type_id: null;
    sort: number;
    sortValue?: string | number;
    exams_semestrs: string | number[] | null;
    tests_semesters: string | number[] | null;
    courseworks_count: number | null;
    controlworks_count: number | null;
    hours: number | null;
    hours_theory: number | null;
    hours_practice: number | null;
    hours_coursework: number | null;
    hours_internship: number | null;
    name: string;
    code: string;
    subject: WorkingCurriculumExtractSubject;
    semestersDistribution: WorkingCurriculumExtractSemestersDistribution[];
}

export interface WorkingCurriculumExtractEducationalActivities {
    working_curriculum_extract_id?: number;
    working_curriculum_id?: number;
    short_name?: string;
    standard_curriculum_qualification_id: number | null;
    subject_id: number | null;
    educational_activity_type_id: number;
    sort: number;
    sortValue?: number | string;
    exams_semestrs: string | number[] | null;
    tests_semesters: string | number[] | null;
    courseworks_count: number | null;
    controlworks_count: number | null;
    hours: number | null;
    hours_theory: number | null;
    hours_practice: number | null;
    hours_coursework: number | null;
    hours_internship: number | null;
    name: string;
    code: string;
    is_in_compulsory_education: boolean;
    semestersDistribution: WorkingCurriculumExtractSemestersDistribution[];
}

export interface WorkingCurriculumExtractGeneral {
    standard_curriculum_module_id: number;
    standard_curriculum_id: number;
    standard_curriculum_qualification_id: number | null;
    educational_module_id: number;
    sort: number;
    module_id: number,
    code: string;
    name: string;
    subjects: WorkingCurriculumExtractSubjects[];
    availableSubjects: WorkingCurriculumExtractSubject[];
    unfilledSubjects: WorkingCurriculumExtractSubject[];
    educationalActivities: WorkingCurriculumExtractEducationalActivities[];
    summary?: WorkingCurriculumExtractSummary;
    summaryCompulsory?: WorkingCurriculumExtractSummary;
}
