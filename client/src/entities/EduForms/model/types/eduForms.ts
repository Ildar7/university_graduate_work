export interface EduFormsType {
    id_typeoftraining: number;
    typeoftraining: string;
}

export interface EduFormsPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface EduFormsData {
    data: EduFormsType[];
    pagination: EduFormsPagination | null;
}

export interface EduFormsError {
    status: number;
    error: string;
}
export interface EduFormsSchema {
    data?: EduFormsData;
    isLoading: boolean;
    error?: EduFormsError;
    page: string;
    limit: string;
}
