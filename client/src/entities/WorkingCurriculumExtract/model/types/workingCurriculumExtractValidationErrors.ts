interface WorkingCurriculumExtractValidationErrorsAmountOfStudyTime {
    standard_curriculum_qualification_id: number | null;
    subject_id?: number;
    educational_activity_type_id?: number;
    validated: boolean;
}

interface WorkingCurriculumExtractValidationErrorsSummaryHour {
    standard_curriculum_qualification_id: number | null;
    subject_id?: number;
    educational_activity_type_id?: number;
    notFilled: boolean;
}

export interface WorkingCurriculumExtractValidationErrors {
    amountOfStudyTime: WorkingCurriculumExtractValidationErrorsAmountOfStudyTime[];
    semestersDistribution: WorkingCurriculumExtractValidationErrorsAmountOfStudyTime[];
    notFilledSummaryHours: WorkingCurriculumExtractValidationErrorsSummaryHour[];
}
