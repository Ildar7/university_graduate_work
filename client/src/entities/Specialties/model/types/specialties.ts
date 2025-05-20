export interface SpecialtiesType {
    id_spec: number;
    shifr_spec: string;
    speciality: string;
}

export interface SpecialtiesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface SpecialtiesData {
    data: SpecialtiesType[];
    pagination: SpecialtiesPagination | null;
}

export interface SpecialtiesError {
    status: number;
    error: string;
}
export interface SpecialtiesSchema {
    data?: SpecialtiesData;
    isLoading: boolean;
    error?: SpecialtiesError;
    page: string;
    limit: string;
}
