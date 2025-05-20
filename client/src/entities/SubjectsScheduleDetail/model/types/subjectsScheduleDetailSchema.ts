import {
    SubjectsScheduleDetailStudentsGroups,
} from './subjectsScheduleDetailStudentsGroups';
import { SubjectsScheduleDetailFilters } from './subjectsScheduleDetailFilters';
import { SubjectsScheduleDetail } from './subjectsScheduleDetail';
import {
    SubjectsScheduleDetailClassTime,
} from './subjectsScheduleDetailClassTime';

export interface SubjectsScheduleDetailError {
    status: number;
    error: string;
}

export interface SubjectsScheduleDetailSchema {
    subjectsScheduleDetail: SubjectsScheduleDetail;
    studentsGroups: SubjectsScheduleDetailStudentsGroups;
    classTime: SubjectsScheduleDetailClassTime;
    filters: SubjectsScheduleDetailFilters;
}
