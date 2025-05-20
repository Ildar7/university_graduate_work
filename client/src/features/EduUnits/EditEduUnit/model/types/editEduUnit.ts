export interface EditEduUnitData {
    name: string;
    sort: number | null;
}

export interface NewFieldsData {
    name?: string | null;
    sort?: number | null;
}

export interface EditEduUnitErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditEduUnitErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditEduUnitErrorDataBaseGeneral {
    message: string;
}

export interface EditEduUnitErrorDataBase {
    validation: EditEduUnitErrorDataBaseValidation[];
    general: EditEduUnitErrorDataBaseGeneral[];
}

export interface EditEduUnitErrors {
    errors?: EditEduUnitErrorApi[] | EditEduUnitErrorDataBase;
    status: number;
}

export interface EditEduUnitSchema {
    data?: EditEduUnitData;
    newFields?: NewFieldsData;
    isLoading: boolean;
    errors?: EditEduUnitErrors;
}
