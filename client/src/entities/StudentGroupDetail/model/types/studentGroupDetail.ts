import { StudentGroupsType } from 'entities/StudentGroups';

export interface StudentGroupDetailType extends StudentGroupsType {
    id_group: number;
}

export interface StudentGroupDetailSchema {
    data?: StudentGroupDetailType;
    isLoading: boolean;
    error?: string;
}
