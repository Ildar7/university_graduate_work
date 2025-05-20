export interface StudentSectionsType {
    id_sections: number;
    sections: string;
}

export interface StudentSectionsPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface StudentSectionsData {
    data: StudentSectionsType[];
    pagination: StudentSectionsPagination | null;
}

export interface StudentSectionsError {
    status: number;
    error: string;
}
export interface StudentSectionsSchema {
    data?: StudentSectionsData;
    isLoading: boolean;
    error?: StudentSectionsError;
    page: string;
    limit: string;
}
