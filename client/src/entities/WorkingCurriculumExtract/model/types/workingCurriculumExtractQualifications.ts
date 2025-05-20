import { QualificationsType } from 'entities/Qualifications';
import {
    WorkingCurriculumExtractSubject,
    WorkingCurriculumExtractEducationalActivities,
    WorkingCurriculumExtractSubjects,
} from './workingCurriculumExtractGeneral';

interface WorkingCurriculumExtractAmountOfStudyTime {
    hours: number | null;
    hours_theory: number | null;
    hours_practice: number | null;
    hours_coursework: number | null;
    hours_internship: number | null;
}

export interface WorkingCurriculumExtractSemestersDistributionSummary {
    semester_number: number;
    hours: number | null;
}

export interface WorkingCurriculumExtractSummary {
    formControl: string[];
    amountOfStudyTime: WorkingCurriculumExtractAmountOfStudyTime;
    semestersDistribution: WorkingCurriculumExtractSemestersDistributionSummary[];
}
interface WorkingCurriculumExtractUnit {
    unit_id: number;
    module_id: number;
    name: string;
}
export interface WorkingCurriculumExtractUnits {
    standard_curriculum_modules_unit_id: number;
    standard_curriculum_module_id: number;
    educational_modules_unit_id: number;
    sort: number;
    name: string;
    code: string;
    educational_modules_unit: WorkingCurriculumExtractUnit;
    subjects: WorkingCurriculumExtractSubjects[];
    availableSubjects: WorkingCurriculumExtractSubject[];
    unfilledSubjects: WorkingCurriculumExtractSubject[];
    summary?: WorkingCurriculumExtractSummary;
}
export interface WorkingCurriculumExtractModules {
    standard_curriculum_module_id: number;
    standard_curriculum_id: number;
    standard_curriculum_qualification_id: number;
    educational_module_id: number;
    sort: number;
    module_id: number;
    code: string;
    name: string;
    units: WorkingCurriculumExtractUnits[];
    summary?: WorkingCurriculumExtractSummary;
}
export interface WorkingCurriculumExtractQualifications {
    standard_curriculum_qualification_id: number;
    qualification_id: number;
    sort: number;
    name: string;
    qualification: QualificationsType;
    modules: WorkingCurriculumExtractModules[];
    educationalActivities: WorkingCurriculumExtractEducationalActivities[];
    summary?: WorkingCurriculumExtractSummary;
    summaryCompulsory?: WorkingCurriculumExtractSummary;
}
