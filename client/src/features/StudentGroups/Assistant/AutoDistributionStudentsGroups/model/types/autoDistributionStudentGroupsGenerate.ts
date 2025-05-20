import {
    AutoDistributionStudentGroupsError,
} from './autoDistributionStudentGroups';

interface AutoDistributionStudentGroupsGenerateUser {
    user_id: number;
    login: string;
    Email: string;
    first_name: string;
    last_name: string;
    patronymic: string;
    createdAt: string;
    updatedAt: string;
}

interface AutoDistributionStudentGroupsGenerateStudents {
    user_id: number;
    students_id: number;
    enrollment_year: number;
    id_qual: number;
    student_study_duration: number;
    user: AutoDistributionStudentGroupsGenerateUser;
    id_language: number;
    id_specialty: number;
    id_education_base: number;
    course: number;
    is_full_time: boolean;
}

interface AutoDistributionStudentGroupsGenerateGroups {
    id_group: number;
    name: string;
    id_language: number;
    enrollment_year: number;
    id_specialty: number;
    id_education_base: number;
    course: number;
    study_duration: number;
    is_full_time: boolean;
    short_name: string;
    serial_number: number;
    qualificationsIds: number[];
    students: AutoDistributionStudentGroupsGenerateStudents[];
}

interface AutoDistributionStudentGroupsGenerateComparison {
    students_id: number;
    id_group: number;
}

export interface AutoDistributionStudentGroupsGenerateData {
    groups: AutoDistributionStudentGroupsGenerateGroups[];
    studentsGroupsComparison: AutoDistributionStudentGroupsGenerateComparison[];
    studentsWithoutGroupsCount: number;
}

export interface AutoDistributionStudentGroupsGenerate {
    data?: AutoDistributionStudentGroupsGenerateData;
    isLoading: boolean;
    error?: AutoDistributionStudentGroupsError;
}
