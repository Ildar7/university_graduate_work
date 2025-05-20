import { EduFormsType } from 'entities/EduForms';

export interface EduFormDetailType extends EduFormsType {
    id_typeoftraining: number;
}

export interface EduFormDetailSchema {
    data?: EduFormDetailType;
    isLoading: boolean;
    error?: string;
}
