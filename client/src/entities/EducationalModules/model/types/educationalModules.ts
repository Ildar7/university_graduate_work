export interface EducationalUnitsData {
    unit_id: number;
    module_id: number;
    name: string;
    sort: number;
}

export interface EducationalModulesAndUnitsError {
    status: number;
    error: string;
}
export interface EducationalModulesData {
    module_id: number;
    name: string;
    short_name: string;
    basic_education: boolean;
    sort: number;
    study_time_in_credits: number | null;
    units?: EducationalUnitsData[];
}

export interface EducationalModulesSchema {
    data?: EducationalModulesData[];
    dataUnits: EducationalUnitsData[];
    isLoading: boolean;
    isLoadingUnits: boolean;
    error?: EducationalModulesAndUnitsError;
    errorUnits?: EducationalModulesAndUnitsError;
}
