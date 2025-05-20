export interface ResidenceTypesType {
    id_typeofareaofresidence: number;
    typeofareaofresidence: string;
}

export interface ResidenceTypesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface ResidenceTypesData {
    data: ResidenceTypesType[];
    pagination: ResidenceTypesPagination | null;
}

export interface ResidenceTypesError {
    status: number;
    error: string;
}
export interface ResidenceTypesSchema {
    data?: ResidenceTypesData;
    isLoading: boolean;
    error?: ResidenceTypesError;
    page: string;
    limit: string;
}
