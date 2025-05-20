import { SubjectsScheduleWorkload, SubjectsScheduleWorkloadError } from './subjectsScheduleWorkloadSchema';

interface SubjectsScheduleWorkloadTeachersInfo {
    teacher_id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
}

export interface SubjectsScheduleWorkloadTeachersData {
    workload: SubjectsScheduleWorkload<number[], undefined>[];
    teachers: SubjectsScheduleWorkloadTeachersInfo[];
}

export interface SubjectsScheduleWorkloadTeachers {
    data?: SubjectsScheduleWorkloadTeachersData;
    dataToWork?: SubjectsScheduleWorkloadTeachersData;
    isLoading: boolean;
    error?: SubjectsScheduleWorkloadError;
}
