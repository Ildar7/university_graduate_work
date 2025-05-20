import { SpecialtiesType } from 'entities/Specialties';
import { EducationalModulesData } from 'entities/EducationalModules';
import { QualificationsData } from 'features/TableFilters/model/types/tableFilters';
import { EditStandardCurriculumQualificationTrainingTime } from 'features/StandardCurriculum/EditStandardCurriculum';

interface StandardCurriculumDetailSubjectRestrictionsType {
    restriction_id: number;
    subject_id: number;
    exams_semestrs_from: number;
    exams_semestrs_to: number;
    tests_semestrs_from: string;
    tests_semestrs_to: string;
    study_time_hours_min: number;
    study_time_hours_max: number;
    study_time_theory_hours: string;
    study_time_practice_hours: string;
    study_time_course_project_hours: string;
    semesters_from: number;
    semesters_to: number;
    count_of_tests: number;
}

interface StandardCurriculumDetailSubjectsType {
    subject_id: number;
    name: string;
    sort: number;
    module_id: number;
    unit_id: string;
    restrictions: StandardCurriculumDetailSubjectRestrictionsType;
}

interface StandardCurriculumDetailEducationalModulesUnitType {
    unit_id: number;
    module_id: number;
    name: string;
    sort: number;
}

export interface StandardCurriculumDetailUnitsType {
    educational_modules_unit: StandardCurriculumDetailEducationalModulesUnitType;
    educational_modules_unit_id: number;
    has_in_basic_education: boolean;
    has_in_general_education: boolean;
    name: string;
    sort: number;
    standard_curriculum_module_id: number;
    standard_curriculum_modules_unit_id: number;
    subjects: StandardCurriculumDetailSubjectsType[];
}

interface StandardCurriculumDetailEducationalModuleType extends EducationalModulesData {
    module_id: number;
}
export interface StandardCurriculumDetailModulesType {
    standard_curriculum_module_id: number;
    standard_curriculum_id: number;
    standard_curriculum_qualification_id: number | string;
    educational_module_id: number;
    sort: number;
    has_in_basic_education: boolean;
    has_in_general_education: boolean;
    educational_module: StandardCurriculumDetailEducationalModuleType;
    subjects: StandardCurriculumDetailSubjectsType[];
    units: StandardCurriculumDetailUnitsType[];
}

interface StandardCurriculumDetailQualificationDetailType extends QualificationsData {
    sort: number;
}

export interface StandardCurriculumDetailQualificationsType {
    standard_curriculum_qualification_id: number;
    standard_curriculum_id: number;
    qualification_id: number;
    sort: number;
    compulsory_education_basic_credits_from: number;
    compulsory_education_basic_credits_to: number;
    compulsory_education_general_credits_from: number;
    compulsory_education_general_credits_to: number;
    extracurricular_activities_hours_per_week: number;
    consultations_hours_per_academic_year: number;
    qualification: StandardCurriculumDetailQualificationDetailType;
    total: EditStandardCurriculumQualificationTrainingTime;
    modules: StandardCurriculumDetailModulesType[];
}
interface StandardCurriculumDetailSpecialityType extends SpecialtiesType {
    level_of_education: string;
}
export interface StandardCurriculumDetailType {
    standard_curriculum_id: number;
    speciality_id: number;
    date_of_order: string;
    sort: number;
    file_id: string;
    specialty: StandardCurriculumDetailSpecialityType;
    modules: StandardCurriculumDetailModulesType[];
    qualifications: StandardCurriculumDetailQualificationsType[];
}

export interface StandardCurriculumDetailSchema {
    data?: StandardCurriculumDetailType;
    isLoading: boolean;
    error?: string;
}
