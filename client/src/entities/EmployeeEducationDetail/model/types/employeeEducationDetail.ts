import { EmployeeEducationsType } from 'entities/EmployeeEducations';

export interface EmployeeEducationDetailType extends EmployeeEducationsType {
    education_id: number;
}

export interface EmployeeEducationDetailSchema {
    data?: EmployeeEducationDetailType;
    isLoading: boolean;
    error?: string;
}
