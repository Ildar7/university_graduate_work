import { WorkingCurriculumExtractGeneral } from './workingCurriculumExtractGeneral';
import {
    WorkingCurriculumExtractQualifications,
} from './workingCurriculumExtractQualifications';

export interface WorkingCurriculumExtractMeta {
    coursesCount: number;
    semestersCount: number;
}

interface WorkingCurriculumExtractData {
    general: WorkingCurriculumExtractGeneral[];
    qualifications: WorkingCurriculumExtractQualifications[];
}

export interface WorkingCurriculumExtract {
    meta: WorkingCurriculumExtractMeta;
    data: WorkingCurriculumExtractData;
}
