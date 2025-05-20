import { StudentClubsType } from 'entities/StudentClubs';

export interface StudentClubDetailType extends StudentClubsType {
    id_clubs: number;
}

export interface StudentClubDetailSchema {
    data?: StudentClubDetailType;
    isLoading: boolean;
    error?: string;
}
