export interface FinSourcesType {
    id_whopaying: number;
    whopaying: string;
}

export interface FinSourcesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface FinSourcesData {
    data: FinSourcesType[];
    pagination: FinSourcesPagination | null;
}

export interface FinSourcesError {
    status: number;
    error: string;
}
export interface FinSourcesSchema {
    data?: FinSourcesData;
    isLoading: boolean;
    error?: FinSourcesError;
    page: string;
    limit: string;
}
