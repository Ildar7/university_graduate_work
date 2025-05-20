import { FinSourcesType } from 'entities/FinSources';

export interface FinSourceDetailType extends FinSourcesType {
    id_whopaying: number;
}

export interface FinSourceDetailSchema {
    data?: FinSourceDetailType;
    isLoading: boolean;
    error?: string;
}
