export interface ImportStudentColumns {
    last_name: string;
    first_name: string;
    patronymic: string;
    email: string;
    govid: string;
    birthdate: string;
    gender: string;
    citizenship: string;
    nationality: string;
    edu_lang: string;
    phone_number: string;
    residential_address: string;
    temporary_residence_address: string;
    enrollment_type: string;
    arrival_date: string;
    govid_issue_date: string;
    is_arrival_from: string;
    is_finished_edu_type: string;
    residence_type: string;
    study_duration: string;
    study_course: string;
    edu_form: string;
    edu_speciality: string;
    is_study_in_dual_system: string;
    is_study_in_productive_employment: string;
    is_completed_training_at_competence_center: string;
    is_study_in_worldskills: string;
    is_need_hostel_type: string;
    is_live_at_hostel: string;
    financing_source_type: string;
    quota: string;
    is_involved_in_social_activities: string;
    is_orphan: string;
    is_without_parental_care: string;
    is_disabled_person: string;
    material_assistance_type: string;
    is_from_young_family: string;
    is_has_access_to_exams: string;
}

export interface ImportStudentsMatchingFieldsKeys {
    [key: string]: string;
}

export interface ImportStudentsImportedInfo {
    message: string;
    count: number;
}

export interface ImportStudentsSendData {
    columns: string;
    file: File;
}

export interface ImportStudentsSchema {
    databaseFields?: ImportStudentColumns;
    columnsFromFile?: string[];
    matchingFields: ImportStudentsMatchingFieldsKeys;
    isLoadingFetchFields: boolean;
    errorFetchFields?: string;
    data?: ImportStudentsImportedInfo;
    isLoading: boolean;
    error?: string;
}
