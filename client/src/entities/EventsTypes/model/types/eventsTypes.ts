export interface EventsTypesType {
    id_typeofevent: number;
    typeofevent: string;
}

export interface EventsTypesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface EventsTypesData {
    data: EventsTypesType[];
    pagination: EventsTypesPagination | null;
}

export interface EventsTypesError {
    status: number;
    error: string;
}
export interface EventsTypesSchema {
    data?: EventsTypesData;
    isLoading: boolean;
    error?: EventsTypesError;
    page: string;
    limit: string;
}
