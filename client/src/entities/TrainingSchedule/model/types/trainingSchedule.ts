export interface TrainingScheduleType {
    academic_year_from: number;
    groups_count: number;
}

export interface TrainingSchedulePagination {
    total_records: number;
    current_page: number;
    total_pages: number;
    next_page: number | null;
    prev_page: number | null;
}

export interface TrainingScheduleData {
    data: TrainingScheduleType[];
    pagination: TrainingSchedulePagination | null;
}

export interface TrainingScheduleError {
    status: number;
    error: string;
}
export interface TrainingScheduleSchema {
    data?: TrainingScheduleType[];
    isLoading: boolean;
    error?: TrainingScheduleError;
}
