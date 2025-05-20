import { SubjectsScheduleDetailModalInfo } from './subjectsScheduleDetailModalInfo';

export interface SubjectsScheduleDetailActionsFields {
    tempIndex?: string | number;
    subject_id: number;
    educational_activity_type_id: number | null;
    group_id: number;
    teacher_id: number;
    year: number;
    week_num: number;
    day_num: number;
    class_time_id: number;
    classroom_id: number;
    shift: number;
    subgroup: number | null;
}

export interface SubjectsScheduleDetailUpdate {
    subject_schedule_id?: number;
    fields: SubjectsScheduleDetailActionsFields;
}

export interface SubjectsScheduleDetailActions {
    delete?: number[];
    update?: SubjectsScheduleDetailUpdate[];
    create?: SubjectsScheduleDetailActionsFields[];
    simulate: boolean;
}

interface SubjectsScheduleDetailActionsError {
    message_ru: string;
    message: string;
    action: string;
    recordId: number;
    record: SubjectsScheduleDetailActionsFields;
}

export interface SubjectsScheduleDetailActionsErrors {
    errors?: SubjectsScheduleDetailActionsError;
    status: number;
}

export interface SubjectsScheduleDetailActionsSchema {
    actions: SubjectsScheduleDetailActions;
    creating: SubjectsScheduleDetailModalInfo;
    updating: SubjectsScheduleDetailModalInfo;
    updated: boolean;
    isLoading: boolean;
    error?: SubjectsScheduleDetailActionsErrors;
}
