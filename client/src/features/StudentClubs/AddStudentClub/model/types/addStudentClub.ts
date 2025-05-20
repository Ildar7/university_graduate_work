export interface AddStudentClubType {
    title: string | null;
}

export interface AddStudentClubErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddStudentClubErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddStudentClubErrorDataBaseGeneral {
    message: string;
}

export interface AddStudentClubErrorDataBase {
    validation: AddStudentClubErrorDataBaseValidation[];
    general: AddStudentClubErrorDataBaseGeneral[];
}

export interface AddStudentClubErrors {
    errors?: AddStudentClubErrorApi[] | AddStudentClubErrorDataBase;
    status: number;
}

export interface AddStudentClubSchema {
    data: AddStudentClubType;
    isLoading: boolean;
    errors?: AddStudentClubErrors;
}
