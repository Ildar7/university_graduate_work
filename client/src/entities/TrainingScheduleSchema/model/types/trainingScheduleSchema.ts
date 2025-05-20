interface TrainingScheduleSchemaByWeeks {
    index: number;
    startDate: string;
    endDate: string;
    year: number;
    monthsNums: number[];
    doubleMonth: boolean;
    daysNums: number[];
    startDay: number;
    endDay: number;
    monthsNames: string[];
    monthsNamesRu: string[];
}

interface TrainingScheduleSchemaByMonths {
    name: string;
    monthsNums: number[];
    monthsNames: string[];
    monthsNamesRu: string[];
    year: number;
    doubleMonth: boolean;
    weeks: TrainingScheduleSchemaByWeeks[];
}

export interface TrainingScheduleHeaderSchemaData {
    byWeeks: TrainingScheduleSchemaByWeeks[];
    byMonths: TrainingScheduleSchemaByMonths[];
}

export interface TrainingScheduleHeaderSchema {
    data?: TrainingScheduleHeaderSchemaData;
    isLoading: boolean;
    error?: string;
}
