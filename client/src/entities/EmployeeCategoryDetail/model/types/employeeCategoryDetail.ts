import { EmployeeCategoriesType } from 'entities/EmployeeCategories';

export interface EmployeeCategoryDetailType extends EmployeeCategoriesType {
    category_id: number;
}

export interface EmployeeCategoryDetailSchema {
    data?: EmployeeCategoryDetailType;
    isLoading: boolean;
    error?: string;
}
