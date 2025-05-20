import { PerformanceTypesType } from 'entities/PerformanceTypes';

export interface PerformanceTypeDetailType extends PerformanceTypesType {
    id_academicperformancesemester: number;
}

export interface PerformanceTypeDetailSchema {
    data?: PerformanceTypeDetailType;
    isLoading: boolean;
    error?: string;
}
