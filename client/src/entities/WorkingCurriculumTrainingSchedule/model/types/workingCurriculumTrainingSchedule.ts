import {
    WorkingCurriculumTrainingScheduleSummary,
} from './workingCurriculumSummary';

export interface WorkingCurriculumTrainingScheduleAdditionalInfo {
    standard_curriculum_modules_units_ids: number[];
    start?: number;
    end?: number;
}

export interface WorkingCurriculumTrainingScheduleSymbol {
    working_curriculum_symbol_id: number;
    symbol_code: string;
    name: string;
    displayed_symbol: string;
    symbol_hex_color: string;
}

export interface WorkingCurriculumTrainingScheduleDataWithoutSymbolInfo {
    working_curriculum_training_schedule_id: number;
    working_curriculum_id: number;
    training_course: number;
    start_week: number;
    end_week: number;
    working_curriculum_symbol_id: number;
    additional_information: WorkingCurriculumTrainingScheduleAdditionalInfo | null;
}

export interface WorkingCurriculumTrainingScheduleData extends WorkingCurriculumTrainingScheduleDataWithoutSymbolInfo {
    working_curriculum_symbol: WorkingCurriculumTrainingScheduleSymbol;
}

export interface WorkingCurriculumTrainingSchedule {
    data: WorkingCurriculumTrainingScheduleData[];
    summary?: WorkingCurriculumTrainingScheduleSummary;
}
