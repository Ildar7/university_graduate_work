import { QualificationsType } from 'entities/Qualifications';
import { SpecialtiesType } from 'entities/Specialties';
import { EducationBasesType } from 'entities/EducationBases';
import { LanguagesType } from 'entities/Languages';

interface StudentGroupsQualifications extends QualificationsType {
    sort: number;
}

interface StudentGroupsSpecialty extends SpecialtiesType {
    level_of_education: string;
}

export interface StudentGroupsInterface {
    id_group: number;
    name: string;
    id_language: number;
    enrollment_year: number;
    id_specialty: number;
    id_education_base: number;
    course: number;
    study_duration: number;
    is_full_time: true;
    short_name: string;
    serial_number: number;
    code: string;
    studentsCount: number;
}

export interface StudentGroupsType extends StudentGroupsInterface {
    qualifications: StudentGroupsQualifications[];
    language: LanguagesType;
    specialty: StudentGroupsSpecialty;
    education_basis: EducationBasesType;
}

export interface StudentGroupsPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}

export interface StudentGroupsData {
    data: StudentGroupsType[];
    pagination: StudentGroupsPagination | null;
}

export interface StudentGroupsError {
    status: number;
    error: string;
}

export interface StudentGroupsSchema {
    data?: StudentGroupsType[];
    isLoading: boolean;
    error?: StudentGroupsError;
}
