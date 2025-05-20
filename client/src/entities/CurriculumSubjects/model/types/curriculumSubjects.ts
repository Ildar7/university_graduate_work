import { EducationalModulesData, EducationalUnitsData } from 'entities/EducationalModules';

export interface CurriculumSubjectsType {
    educational_module: EducationalModulesData;
    educational_modules_unit: EducationalUnitsData;
    subject_id: number;
    name: string;
    sort: number;
    module_id: number;
    unit_id: number;
}

export interface CurriculumSubjectsPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface CurriculumSubjectsData {
    data: CurriculumSubjectsType[];
    pagination?: CurriculumSubjectsPagination | null;
}

export interface CurriculumSubjectsError {
    status: number;
    error: string;
}
export interface CurriculumSubjectsSchema {
    data?: CurriculumSubjectsType[];
    isLoading: boolean;
    error?: CurriculumSubjectsError;
    page: string;
    limit: string;
}
