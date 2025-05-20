import { SpecialtiesType } from 'entities/Specialties';

export interface SpecialityDetailType extends SpecialtiesType {
    id_spec: number;
}

export interface SpecialityDetailSchema {
    data?: SpecialityDetailType;
    isLoading: boolean;
    error?: string;
}
