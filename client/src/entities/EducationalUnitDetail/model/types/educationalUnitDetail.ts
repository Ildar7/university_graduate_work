import { EducationalUnitsData } from 'entities/EducationalModules';

export interface EducationalUnitDetailData extends EducationalUnitsData {
    module_id: number;
}

export interface EducationalUnitDetailSchema {
    data?: EducationalUnitDetailData;
    isLoading: boolean;
    error?: string;
}
