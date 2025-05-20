import { EducationalUnitsData } from 'entities/EducationalModules';

export interface WorkingCurriculumProfessionalModules {
    standard_curriculum_modules_unit_id: number;
    standard_curriculum_module_id: number;
    educational_modules_unit_id: number;
    sort: number;
    has_in_basic_education: boolean;
    has_in_general_education: boolean;
    name: string;
    educational_modules_unit: EducationalUnitsData;
}
