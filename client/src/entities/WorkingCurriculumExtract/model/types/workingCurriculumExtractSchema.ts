import {
    WorkingCurriculumExtractValidationErrors,
} from 'entities/WorkingCurriculumExtract/model/types/workingCurriculumExtractValidationErrors';
import { WorkingCurriculumExtract } from './workingCurriculumExtract';
import {
    WorkingCurriculumExtractActions, WorkingCurriculumExtractActionsError,
} from './workingCurriculumExtractActions';
import {
    WorkingCurriculumExtractDistributionActions,
} from '../types/workingCurriculumExtractDistributionActions';

export interface WorkingCurriculumExtractError {
    status: number;
    error: string;
}
export interface WorkingCurriculumExtractSchema {
    data?: WorkingCurriculumExtract;
    dataParsed?: WorkingCurriculumExtract;
    dataToWork?: WorkingCurriculumExtract;
    actions: WorkingCurriculumExtractActions;
    distributionActions: WorkingCurriculumExtractDistributionActions;
    validationErrors: WorkingCurriculumExtractValidationErrors;
    isLoading: boolean;
    error?: WorkingCurriculumExtractError;
    updatingIsLoading: boolean;
    updatingError?: WorkingCurriculumExtractActionsError;
    updatedStatus: boolean;
    formWithErrors: boolean;
    readOnly: boolean;
    redirectToMainPage: boolean;
    showAllDisciplines: boolean;
}
