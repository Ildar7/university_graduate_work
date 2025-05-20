import { EmployeesType } from 'entities/Employees';

export interface EmployeePositionsType {
    position_id: number;
    name: string;
    employees: Omit<EmployeesType[], 'fio' | 'category' | 'education' | 'positions' | 'subjects'>;
}

export interface EmployeePositionsPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface EmployeePositionsData {
    data: EmployeePositionsType[];
    pagination: EmployeePositionsPagination | null;
}

export interface EmployeePositionsError {
    status: number;
    error: string;
}
export interface EmployeePositionsSchema {
    data?: EmployeePositionsData;
    isLoading: boolean;
    error?: EmployeePositionsError;
    page: string;
    limit: string;
}
