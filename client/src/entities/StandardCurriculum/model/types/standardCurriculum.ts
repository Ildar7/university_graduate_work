interface StandardCurriculumSpeciality {
    id_spec: number;
    shifr_spec: string;
    speciality: string;
    level_of_education: string;
}

export interface StandardCurriculumType {
    standard_curriculum_id: number;
    speciality_id: number;
    date_of_order: string;
    sort: number;
    file_id: string;
    specialty: StandardCurriculumSpeciality;
}

export interface StandardCurriculumPagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}
export interface StandardCurriculumData {
    data: StandardCurriculumType[];
    pagination: StandardCurriculumPagination | null;
}

export interface StandardCurriculumError {
    status: number;
    error: string;
}
export interface StandardCurriculumSchema {
    data?: StandardCurriculumType[];
    isLoading: boolean;
    error?: StandardCurriculumError;
    page: string;
    limit: string;
}
