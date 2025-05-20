import { StandardCurriculumType } from 'entities/StandardCurriculum';

interface WorkingCurriculumEducationBasis {
    id_education_bases: number;
    symbol_code: string;
    original_name: string;
    short_name: string;
}

export interface WorkingCurriculumType {
    working_curriculum_id: number;
    standard_curriculum_id: number;
    education_base_id: number;
    is_full_time_education: boolean;
    approval_date: string;
    version: number;
    academic_year_from: number;
    academic_year_to: number;
    title: string;
    is_active: boolean;
    standard_curricula: StandardCurriculumType;
    education_basis: WorkingCurriculumEducationBasis;
}

export interface WorkingCurriculumPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface WorkingCurriculumData {
    data: WorkingCurriculumType[];
    pagination: WorkingCurriculumPagination | null;
}

export interface WorkingCurriculumError {
    status: number;
    error: string;
}
export interface WorkingCurriculumSchema {
    data?: WorkingCurriculumData;
    isLoading: boolean;
    error?: WorkingCurriculumError;
    page: string;
    limit: string;
}
