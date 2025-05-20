import { WorkingCurriculumTrainingScheduleCreate } from './workingCurriculumTrainingScheduleCreate';
import { WorkingCurriculumProfessionalModules } from './workingCurriculumProfessionalModules';
import {
    WorkingCurriculumTrainingSchedule,
    WorkingCurriculumTrainingScheduleData,
    WorkingCurriculumTrainingScheduleSymbol,
} from './workingCurriculumTrainingSchedule';
import { WorkingCurriculumTrainingScheduleEditDataToSend } from './workingCurriculumTrainingScheduleEditDataToSend';

export interface WorkingCurriculumTrainingScheduleSelectedCells {
    trainingCourse: number;
    cells: WorkingCurriculumTrainingScheduleData[];
    symbol?: number[];
    symbolsEqual: boolean;
}
export interface WorkingCurriculumTrainingScheduleError {
    status: number;
    error: string;
}

export interface WorkingCurriculumTrainingScheduleSchema {
    data?: WorkingCurriculumTrainingSchedule;
    dataParsed?: WorkingCurriculumTrainingSchedule;
    professionalModules: WorkingCurriculumProfessionalModules[];
    editData: WorkingCurriculumTrainingSchedule;
    symbols?: WorkingCurriculumTrainingScheduleSymbol[];
    selectedCells?: WorkingCurriculumTrainingScheduleSelectedCells;
    createAction: WorkingCurriculumTrainingScheduleCreate;
    editActions: WorkingCurriculumTrainingScheduleEditDataToSend;
    isLoading: boolean;
    error?: WorkingCurriculumTrainingScheduleError;
    readOnly: boolean;
    redirectToMainPage: boolean;
}
