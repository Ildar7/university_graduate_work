interface AddStudentGroupsGeneratedGroupsHumanReadable {
    code: string;
    specialtyName: string;
    languageName: string;
    educationBaseName: string;
    educationFormName: string;
}

export interface AddStudentGroupsGeneratedGroupsData {
    enrollment_year: number;
    id_language: number;
    id_specialty: number;
    id_education_base: number;
    course: number;
    study_duration: number;
    is_full_time: boolean;
    serial_number: number;
    short_name: string;
    name: string;
    qualificationIds: number[];
    humanReadable: AddStudentGroupsGeneratedGroupsHumanReadable;
    tempIndex?: number;
    checked?: boolean;
}

export interface AddStudentGroupsGeneratedGroups {
    data?: AddStudentGroupsGeneratedGroupsData[];
    isLoading: boolean;
    error?: string;
}
