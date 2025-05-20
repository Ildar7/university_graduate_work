export interface PracticeTypesType {
    id_practice: number;
    practice: string;
}

export interface PracticeTypesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface PracticeTypesData {
    data: PracticeTypesType[];
    pagination: PracticeTypesPagination | null;
}

export interface PracticeTypesError {
    status: number;
    error: string;
}
export interface PracticeTypesSchema {
    data?: PracticeTypesData;
    isLoading: boolean;
    error?: PracticeTypesError;
    page: string;
    limit: string;
}
