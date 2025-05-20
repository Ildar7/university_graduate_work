export interface EduActivitiesTypes {
    educational_activity_type_id: number;
    name: string;
    code: string;
    short_name: string;
    is_in_compulsory_education: boolean;
    sort: number;
}

export interface EduActivitiesTypesError {
    status: number;
    error: string;
}

export interface EduActivitiesTypesSchema {
    data?: EduActivitiesTypes[];
    isLoading: boolean;
    error?: EduActivitiesTypesError;
}
