export interface EditStudentClubType {
    id_clubs: number;
    clubs: string;
}

export interface NewFieldsType {
    title?: string | null;
}

export interface EditStudentClubErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditStudentClubErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditStudentClubErrorDataBaseGeneral {
    message: string;
}

export interface EditStudentClubErrorDataBase {
    validation: EditStudentClubErrorDataBaseValidation[];
    general: EditStudentClubErrorDataBaseGeneral[];
}

export interface EditStudentClubErrors {
    errors?: EditStudentClubErrorApi[] | EditStudentClubErrorDataBase;
    status: number;
}

export interface EditStudentClubSchema {
    data?: EditStudentClubType;
    newFields?: NewFieldsType;
    isLoading: boolean;
    errors?: EditStudentClubErrors;
}
