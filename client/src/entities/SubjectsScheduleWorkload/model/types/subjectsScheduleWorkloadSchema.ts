import {
    SubjectsScheduleWorkloadTeachers,
} from './subjectsScheduleWorkloadTeachers';
import {
    SubjectsScheduleWorkloadClassRooms,
} from './subjectsScheduleWorkloadClassRooms';

export interface SubjectsScheduleWorkloadClassTime<TeachersIds, ClassRoomsIds> {
    class_time_id: number;
    serial_number: number;
    start_time: string;
    end_time: string;
    teachers_ids: TeachersIds;
    classroom_ids: ClassRoomsIds;
}

export interface SubjectsScheduleWorkload<TeachersIds, ClassRoomsIds> {
    dayNum: number;
    dayName: string;
    dayNameRu: string;
    date: string;
    class_time: SubjectsScheduleWorkloadClassTime<TeachersIds, ClassRoomsIds>[];
}

export interface SubjectsScheduleWorkloadError {
    status: number;
    error: string;
}

export interface SubjectsScheduleWorkloadSchema {
    teachers: SubjectsScheduleWorkloadTeachers;
    classRooms: SubjectsScheduleWorkloadClassRooms;
}
