export interface StudentClubsType {
    id_clubs: number;
    clubs: string;
}

export interface StudentClubsPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface StudentClubsData {
    data: StudentClubsType[];
    pagination: StudentClubsPagination | null;
}

export interface StudentClubsError {
    status: number;
    error: string;
}
export interface StudentClubsSchema {
    data?: StudentClubsData;
    isLoading: boolean;
    error?: StudentClubsError;
    page: string;
    limit: string;
}
