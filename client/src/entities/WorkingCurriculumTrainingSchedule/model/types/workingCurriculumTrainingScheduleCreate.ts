import {
    WorkingCurriculumTrainingScheduleAdditionalInfo,
} from './workingCurriculumTrainingSchedule';

export interface WorkingCurriculumTrainingScheduleCreateErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface WorkingCurriculumTrainingScheduleCreateErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface WorkingCurriculumTrainingScheduleCreateErrorDataBaseGeneral {
    message: string;
}

export interface WorkingCurriculumTrainingScheduleCreateErrorDataBase {
    validation: WorkingCurriculumTrainingScheduleCreateErrorDataBaseValidation[];
    general: WorkingCurriculumTrainingScheduleCreateErrorDataBaseGeneral[];
}

export interface WorkingCurriculumTrainingScheduleCreateErrors {
    errors?: WorkingCurriculumTrainingScheduleCreateErrorApi[] | WorkingCurriculumTrainingScheduleCreateErrorDataBase;
    status: number;
}

export interface WorkingCurriculumTrainingScheduleCreateData {
    training_course: number;
    start_week: number;
    end_week: number;
    working_curriculum_symbol_id: number;
    additional_information: WorkingCurriculumTrainingScheduleAdditionalInfo | null;
}

export interface WorkingCurriculumTrainingScheduleCreate {
    data: WorkingCurriculumTrainingScheduleCreateData[];
    isLoading: boolean;
    errors?: WorkingCurriculumTrainingScheduleCreateErrors;
    created: boolean;
}
