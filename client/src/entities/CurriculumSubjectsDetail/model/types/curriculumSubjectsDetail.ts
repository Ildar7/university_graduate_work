import { CurriculumSubjectsType } from 'entities/CurriculumSubjects';

export interface CurriculumSubjectsDetailType extends CurriculumSubjectsType {
    module_id: number;
}

export interface CurriculumSubjectsDetailSchema {
    data?: CurriculumSubjectsDetailType;
    isLoading: boolean;
    error?: string;
}
