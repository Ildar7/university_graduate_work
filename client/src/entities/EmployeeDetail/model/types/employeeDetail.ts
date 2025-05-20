import { EmployeesType } from 'entities/Employees';

export interface EmployeeDetailType extends EmployeesType {
    employee_id: number;
}

export interface EmployeeDetailSchema {
    data?: EmployeeDetailType;
    isLoading: boolean;
    error?: string;
}
