import { EventsTypesType } from 'entities/EventsTypes';

export interface EventsTypeDetailType extends EventsTypesType {
    id_typeofevent: number;
}

export interface EventsTypeDetailSchema {
    data?: EventsTypeDetailType;
    isLoading: boolean;
    error?: string;
}
