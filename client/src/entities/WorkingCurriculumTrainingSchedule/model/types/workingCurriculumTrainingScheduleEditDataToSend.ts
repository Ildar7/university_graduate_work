import {
    WorkingCurriculumTrainingScheduleCreateData,
} from './workingCurriculumTrainingScheduleCreate';
import {
    WorkingCurriculumTrainingScheduleAdditionalInfo,
} from '../types/workingCurriculumTrainingSchedule';

interface WorkingCurriculumEditDataUpdateActionFields {
    training_course?: number;
    start_week?: number;
    end_week?: number;
    working_curriculum_symbol_id?: number;
    additional_information?: WorkingCurriculumTrainingScheduleAdditionalInfo | null;
}

interface WorkingCurriculumEditDataUpdateAction {
    working_curriculum_training_schedule_id: number;
    fields: WorkingCurriculumEditDataUpdateActionFields;
}

interface WorkingCurriculumEditDataActions {
    delete?: number[];
    deleteTrainingCourses?: number[];
    update?: WorkingCurriculumEditDataUpdateAction[];
    create?: WorkingCurriculumTrainingScheduleCreateData[];
}

export interface WorkingCurriculumEditDataErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface WorkingCurriculumEditDataErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface WorkingCurriculumEditDataErrorDataBaseGeneral {
    message: string;
}

export interface WorkingCurriculumEditDataErrorDataBase {
    validation: WorkingCurriculumEditDataErrorDataBaseValidation[];
    general: WorkingCurriculumEditDataErrorDataBaseGeneral[];
}

export interface WorkingCurriculumEditDataErrors {
    errors?: WorkingCurriculumEditDataErrorApi[] | WorkingCurriculumEditDataErrorDataBase;
    status: number;
}

export interface WorkingCurriculumTrainingScheduleEditDataToSend {
    actions: WorkingCurriculumEditDataActions;
    isLoading: boolean;
    errors?: WorkingCurriculumEditDataErrors;
    updated: boolean;
}
