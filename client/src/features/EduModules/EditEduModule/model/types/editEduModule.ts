export interface EditEduModuleData {
    module_id: number;
    name: string;
    short_name: string;
    basic_education: boolean;
    sort: number;
    study_time_in_credits: number | null;
}

export interface NewFieldsData {
    module_id?: number;
    name?: string | null;
    short_name?: string | null;
    basic_education?: boolean;
    sort?: number | null;
    study_time_in_credits?: number | null;
}

export interface EditEduModuleErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface EditEduModuleErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface EditEduModuleErrorDataBaseGeneral {
    message: string;
}

export interface EditEduModuleErrorDataBase {
    validation: EditEduModuleErrorDataBaseValidation[];
    general: EditEduModuleErrorDataBaseGeneral[];
}

export interface EditEduModuleErrors {
    errors?: EditEduModuleErrorApi[] | EditEduModuleErrorDataBase;
    status: number;
}

export interface EditEduModuleSchema {
    data?: EditEduModuleData;
    newFields?: NewFieldsData;
    isLoading: boolean;
    errors?: EditEduModuleErrors;
}
