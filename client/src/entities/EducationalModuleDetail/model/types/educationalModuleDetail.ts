import { EducationalModulesData } from 'entities/EducationalModules';

export interface EducationalModuleDetailData extends EducationalModulesData {
    module_id: number;
}

export interface EducationalModuleDetailSchema {
    data?: EducationalModuleDetailData;
    isLoading: boolean;
    error?: string;
}
