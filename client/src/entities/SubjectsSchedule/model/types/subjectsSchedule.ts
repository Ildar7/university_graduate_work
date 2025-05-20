interface SubjectsScheduleProgress {
    current: number;
    max: number;
}

interface SubjectsScheduleWeeks {
    weekNum: number;
    weekAcademicNum: number;
    isNow: boolean;
    progress: SubjectsScheduleProgress;
    year: number;
}

export interface SubjectsScheduleData {
    monthNum: number;
    name: string;
    nameRu: string;
    year: number;
    progress: SubjectsScheduleProgress;
    isNow: boolean;
    weeks: SubjectsScheduleWeeks[];
}

export interface SubjectsScheduleError {
    status: number;
    error: string;
}

interface SubjectsScheduleList {
    data?: SubjectsScheduleData[];
    isLoading: boolean;
    error?: SubjectsScheduleError;
}

interface SubjectsScheduleAvailableYears {
    data?: number[];
    isLoading: boolean;
    error?: SubjectsScheduleError;
}

export interface SubjectsScheduleSchema {
    list: SubjectsScheduleList;
    availableYears: SubjectsScheduleAvailableYears;
}
