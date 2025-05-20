import { PracticeTypesType } from 'entities/PracticeTypes';

export interface PracticeTypeDetailType extends PracticeTypesType {
    id_practice: number;
}

export interface PracticeTypeDetailSchema {
    data?: PracticeTypeDetailType;
    isLoading: boolean;
    error?: string;
}
