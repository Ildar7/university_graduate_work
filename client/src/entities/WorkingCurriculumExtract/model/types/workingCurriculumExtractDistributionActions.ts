export interface WorkingCurriculumExtractDistributionActionFields {
    educational_activity_type_id?: number | null;
    standard_curriculum_qualification_id?: number | null;
    subject_id?: number | null;
    working_curriculum_extract_id?: number;
    semester_number: number;
    hours: number | null;
}

interface WorkingCurriculumExtractDistributionActionUpdate {
    working_curriculum_extract_distribution_id: number;
    fields: WorkingCurriculumExtractDistributionActionFields;
}

export interface WorkingCurriculumExtractDistributionActions {
    delete?: number[];
    update?: WorkingCurriculumExtractDistributionActionUpdate[];
    create?: WorkingCurriculumExtractDistributionActionFields[];
    simulate: boolean;
}
