interface WorkingCurriculumTrainingScheduleCoursesDetail {
    weeks: number;
    hours: number;
    credits: number;
}

interface WorkingCurriculumTrainingScheduleCourses {
    [value: number]: WorkingCurriculumTrainingScheduleCoursesDetail;
}

interface WorkingCurriculumTrainingScheduleBySymbolsDetail {
    symbolId: number;
    symbolCode: string;
    symbolName: string;
    courses: WorkingCurriculumTrainingScheduleCourses;
    total: WorkingCurriculumTrainingScheduleCoursesDetail;
}

interface WorkingCurriculumTrainingScheduleBySymbols {
    [name: string]: WorkingCurriculumTrainingScheduleBySymbolsDetail;
}

export interface WorkingCurriculumTrainingScheduleSummary {
    bySymbols: WorkingCurriculumTrainingScheduleBySymbols;
    coursesCount: number;
}
