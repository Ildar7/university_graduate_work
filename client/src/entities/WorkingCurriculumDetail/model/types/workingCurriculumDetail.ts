import { WorkingCurriculumType } from 'entities/WorkingCurriculum';

export interface WorkingCurriculumDetailType extends WorkingCurriculumType {
    working_curriculum_id: number;
}

export interface WorkingCurriculumDetailSchema {
    data?: WorkingCurriculumDetailType;
    isLoading: boolean;
    error?: string;
}
