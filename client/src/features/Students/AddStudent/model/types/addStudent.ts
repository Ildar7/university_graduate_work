import { ButtonTheme } from 'shared/ui/Button/Button';

export interface TabsType {
    id: number;
    title: string;
    theme: ButtonTheme;
    active: boolean;
}

export interface AddStudentType {
    login: string | null;
    password: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    patronymic: string | null;
    govid: string | null;
    govid_issue_date: string | null;
    birth_date: string | null;
    reason_for_missing_govid_id: null;
    gender_id: string | null;
    citizenship_id: string | null;
    nationality_id: string | null;
    residential_address: string | null;
    temporary_residence_address: string | null;
    enrollment_type_id: string | null;
    arrival_date: string | null;
    is_arrival_from_id: string | null;
    phone_number: string | null;
    is_finished_edu_type_id: string | null;
    residence_type_id: string | null;
    study_duration_id: string | null;
    study_course_id: string | null;
    edu_lang_id: string | null;
    edu_form_id: string | null;
    edu_speciality_id: string | null;
    edu_classifier_id: string | null;
    is_study_in_dual_system: boolean;
    is_study_in_productive_employment: boolean;
    is_completed_training_at_competence_center: boolean;
    is_study_in_worldskills: boolean;
    is_need_hostel_type_id: string | null;
    is_live_at_hostel: boolean;
    financing_source_type_id: string | null;
    quota_id: string | null;
    is_involved_in_social_activities: boolean;
    is_orphan: boolean;
    is_without_parental_care: boolean;
    is_disabled_person: boolean;
    material_assistance_type_id: string | null;
    is_from_young_family: boolean;
}

export interface AddStudentErrorApi {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface AddStudentErrorDataBaseValidation {
    message: string;
    field: string;
    type: string;
    value: string;
}

interface AddStudentErrorDataBaseGeneral {
    message: string;
}

export interface AddStudentErrorDataBase {
    validation: AddStudentErrorDataBaseValidation[];
    general: AddStudentErrorDataBaseGeneral[];
}

export interface AddStudentErrors {
    errors?: AddStudentErrorApi[] | AddStudentErrorDataBase;
    status: number;
}

export interface AddStudentSchema {
    data: AddStudentType;
    isLoading: boolean;
    errors?: AddStudentErrors;
}
