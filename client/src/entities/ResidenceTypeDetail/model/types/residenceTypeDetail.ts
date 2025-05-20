import { ResidenceTypesType } from 'entities/ResidenceTypes';

export interface ResidenceTypeDetailType extends ResidenceTypesType {
    id_typeofareaofresidence: number;
}

export interface ResidenceTypeDetailSchema {
    data?: ResidenceTypeDetailType;
    isLoading: boolean;
    error?: string;
}
