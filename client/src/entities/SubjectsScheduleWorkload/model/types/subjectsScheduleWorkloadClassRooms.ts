import { SubjectsScheduleWorkload, SubjectsScheduleWorkloadError } from './subjectsScheduleWorkloadSchema';

interface SubjectsScheduleWorkloadClassRoomsInfo {
    classroom_id: number;
    name: string;
    number: number;
}

export interface SubjectsScheduleWorkloadClassRoomsData {
    workload: SubjectsScheduleWorkload<undefined, number[]>[];
    classrooms: SubjectsScheduleWorkloadClassRoomsInfo[];
}

export interface SubjectsScheduleWorkloadClassRooms {
    data?: SubjectsScheduleWorkloadClassRoomsData;
    dataToWork?: SubjectsScheduleWorkloadClassRoomsData;
    isLoading: boolean;
    error?: SubjectsScheduleWorkloadError;
}
