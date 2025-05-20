export interface ExportStudentsResponse {
    idsWithErrors: any[];
    fileLink: string;
}

export interface ExportStudentsSchema {
    data?: ExportStudentsResponse;
    isLoading: boolean;
    error?: string;
}
