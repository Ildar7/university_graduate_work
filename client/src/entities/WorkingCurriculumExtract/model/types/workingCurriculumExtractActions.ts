export interface WorkingCurriculumExtractActionFields {
    working_curriculum_id?: number;
    standard_curriculum_qualification_id: number;
    subject_id: number;
    educational_activity_type_id: number;
    sort: number;
    exams_semestrs: number[] | null;
    tests_semesters: number[] | null;
    courseworks_count: number | null;
    controlworks_count: number | null;
    hours: number | null;
    hours_theory: number | null;
    hours_practice: number | null;
    hours_coursework: number | null;
    hours_internship: number | null;
}

interface WorkingCurriculumExtractActionUpdate {
    working_curriculum_extract_id: number;
    fields: WorkingCurriculumExtractActionFields;
}

interface WorkingCurriculumExtractActionsErrors {
    message_ru: string;
    message: string;
    type: string;
    record: any;
}

export interface WorkingCurriculumExtractActionsError {
    message_ru: string;
    message: string;
    type: string;
    errors: WorkingCurriculumExtractActionsErrors[];
    status?: number;
}

export interface WorkingCurriculumExtractActions {
    delete?: number[];
    update?: WorkingCurriculumExtractActionUpdate[];
    create?: WorkingCurriculumExtractActionFields[];
    simulate: boolean;
}
