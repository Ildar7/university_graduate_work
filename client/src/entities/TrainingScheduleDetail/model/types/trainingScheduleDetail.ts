import { StudentGroupsInterface } from 'entities/StudentGroups';
import {
    WorkingCurriculumTrainingScheduleAdditionalInfo,
    WorkingCurriculumTrainingScheduleDataWithoutSymbolInfo,
} from 'entities/WorkingCurriculumTrainingSchedule';

export interface TrainingScheduleDetailSchedule extends WorkingCurriculumTrainingScheduleDataWithoutSymbolInfo {
    additional_information: WorkingCurriculumTrainingScheduleAdditionalInfo | null;
}

export interface TrainingScheduleDetailType {
    groups: StudentGroupsInterface[];
    trainingSchedule: TrainingScheduleDetailSchedule[];
}

export interface TrainingScheduleDetailError {
    status: number;
    error: string;
}
export interface TrainingScheduleDetailSchema {
    data?: TrainingScheduleDetailType[];
    dataParsed?: TrainingScheduleDetailType[];
    isLoading: boolean;
    error?: TrainingScheduleDetailError;
}
