import { ArrivalSourcesType } from 'entities/ArrivalSources';

export interface ArrivalSourceDetailType extends ArrivalSourcesType {
    id_comesfrom: number;
}

export interface ArrivalSourceDetailSchema {
    data?: ArrivalSourceDetailType;
    isLoading: boolean;
    error?: string;
}
