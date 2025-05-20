import { SubjectsScheduleDetailError } from './subjectsScheduleDetailSchema';

interface SubjectsScheduleDetailProgress {
    current: number;
    max: number;
}

interface SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsClassTime {
    class_time_id: number;
    serial_number: number;
    start_time: string;
    end_time: string;
    shifts: number[];
}

interface SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsSubject {
    subject_id: number;
    name: string;
}

export interface SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail {
    subject_schedule_id?: number;
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
    class_time: SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsClassTime;
    type: string;
    subject: SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsSubject;
    classRoomTitle: string;
    teacherName: string;
    tempIndex?: number | string | null;
}

export interface SubjectsScheduleDetailWeekDayDetailSubjectsByGroups {
    [subjectByGroupNum: string]: SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail[];
}

export interface SubjectsScheduleDetailWeekDayDetail {
    dayNum: number;
    dayName: string;
    dayNameRu: string;
    date: string;
    progress: SubjectsScheduleDetailProgress;
    subjectsByGroups: SubjectsScheduleDetailWeekDayDetailSubjectsByGroups;
}

interface SubjectsScheduleDetailWeekDays {
    [dayNum: string]: SubjectsScheduleDetailWeekDayDetail;
}

interface SubjectsScheduleDetailWeek {
    days: SubjectsScheduleDetailWeekDays;
    progress: SubjectsScheduleDetailProgress;
}

export interface SubjectsScheduleDetailData {
    [weekNum: string]: SubjectsScheduleDetailWeek;
}

export interface SubjectsScheduleDetail {
    data?: SubjectsScheduleDetailData;
    dataParsed?: SubjectsScheduleDetailData;
    dataToWork?: SubjectsScheduleDetailData;
    isLoading: boolean;
    error?: SubjectsScheduleDetailError;
}
