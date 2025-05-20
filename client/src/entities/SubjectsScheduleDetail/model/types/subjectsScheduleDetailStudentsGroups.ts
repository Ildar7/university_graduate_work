import { SubjectsScheduleDetailError } from './subjectsScheduleDetailSchema';

interface SubjectsScheduleDetailStudentsGroupsWorkingCurriculum {
    working_curriculum_id: number;
    standard_curriculum_id: number;
    education_base_id: number;
    is_full_time_education: boolean;
    approval_date: string;
    version: number;
    academic_year_from: number;
    title: string;
    is_active: boolean;
    speciality_id: number;
    intersected_standard_curriculum_qualification_ids: number[];
}

export interface SubjectsScheduleDetailStudentsGroupsTeachers {
    teacher_id: number;
    short_name: string;
}

interface SubjectsScheduleDetailStudentsGroupsAvailableSubjects {
    id: number;
    type: string;
    name: string;
    sort: number;
    teachers: SubjectsScheduleDetailStudentsGroupsTeachers[];
}

export interface SubjectsScheduleDetailStudentsGroupsData {
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
    working_curriculum: SubjectsScheduleDetailStudentsGroupsWorkingCurriculum;
    working_curriculum_id: number;
    intersected_qualification_ids: number[];
    availableSubjects: SubjectsScheduleDetailStudentsGroupsAvailableSubjects[];
}

export interface SubjectsScheduleDetailStudentsGroups {
    data?: SubjectsScheduleDetailStudentsGroupsData[];
    isLoading: boolean;
    error?: SubjectsScheduleDetailError;
}
