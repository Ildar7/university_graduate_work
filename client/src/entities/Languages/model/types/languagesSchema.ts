export interface LanguagesType {
    id_languages: number;
    symbol_code: string;
    language: string;
}

export interface LanguagesPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface LanguagesData {
    data: LanguagesType[];
    pagination: LanguagesPagination | null;
}

export interface LanguagesError {
    status: number;
    error: string;
}
export interface LanguagesSchema {
    data?: LanguagesType[];
    isLoading: boolean;
    error?: LanguagesError;
    page: string;
    limit: string;
}
