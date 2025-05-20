export interface ClassRoomsData {
    classroom_id: number;
    name: string;
    number: number;
    full_name: string;
}

export interface ClassRoomsError {
    status: number;
    error: string;
}

export interface ClassRoomsSchema {
    data?: ClassRoomsData[];
    isLoading: boolean;
    error?: ClassRoomsError;
}
