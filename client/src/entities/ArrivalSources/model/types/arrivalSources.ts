export interface ArrivalSourcesType {
    id_comesfrom: number;
    comesfrom: string;
}

export interface ArrivalSourcesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface ArrivalSourcesData {
    data: ArrivalSourcesType[];
    pagination: ArrivalSourcesPagination | null;
}

export interface ArrivalSourcesError {
    status: number;
    error: string;
}
export interface ArrivalSourcesSchema {
    data?: ArrivalSourcesData;
    isLoading: boolean;
    error?: ArrivalSourcesError;
    page: string;
    limit: string;
}
