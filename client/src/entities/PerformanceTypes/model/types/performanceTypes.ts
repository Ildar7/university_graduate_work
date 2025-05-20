export interface PerformanceTypesType {
    id_academicperformancesemester: number;
    academicperformancesemester: string;
    perfomance_value: number;
}

export interface PerformanceTypesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface PerformanceTypesData {
    data: PerformanceTypesType[];
    pagination: PerformanceTypesPagination | null;
}

export interface PerformanceTypesError {
    status: number;
    error: string;
}
export interface PerformanceTypesSchema {
    data?: PerformanceTypesData;
    isLoading: boolean;
    error?: PerformanceTypesError;
    page: string;
    limit: string;
}
