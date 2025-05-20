export interface EducationBasesType {
    id_education_bases: number;
    symbol_code: string;
    original_name: string;
    short_name: string;
}

export interface EducationBasesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface EducationBasesData {
    data: EducationBasesType[];
    pagination: EducationBasesPagination | null;
}

export interface EducationBasesError {
    status: number;
    error: string;
}
export interface EducationBasesSchema {
    data?: EducationBasesType[];
    isLoading: boolean;
    error?: EducationBasesError;
    page: string;
    limit: string;
}
