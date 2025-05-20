import { EmployeesType } from 'entities/Employees';

export interface EmployeeCategoriesType {
    category_id: number;
    name: string;
    employees: Omit<EmployeesType[], 'fio' | 'category' | 'education' | 'positions' | 'subjects'>;
}

export interface EmployeeCategoriesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface EmployeeCategoriesData {
    data: EmployeeCategoriesType[];
    pagination: EmployeeCategoriesPagination | null;
}

export interface EmployeeCategoriesError {
    status: number;
    error: string;
}
export interface EmployeeCategoriesSchema {
    data?: EmployeeCategoriesData;
    isLoading: boolean;
    error?: EmployeeCategoriesError;
    page: string;
    limit: string;
}
