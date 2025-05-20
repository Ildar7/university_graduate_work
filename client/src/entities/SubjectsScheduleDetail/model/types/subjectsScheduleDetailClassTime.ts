import { SubjectsScheduleDetailError } from './subjectsScheduleDetailSchema';

export interface SubjectsScheduleDetailClassTimeData {
    class_time_id: number;
    serial_number: number;
    start_time: string;
    end_time: string;
    shifts: number[];
}

export interface SubjectsScheduleDetailClassTime {
    data?: SubjectsScheduleDetailClassTimeData[];
    isLoading: boolean;
    error?: SubjectsScheduleDetailError;
}
