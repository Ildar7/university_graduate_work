import { StudentsType } from 'entities/Students';

export interface StudentsInGroupsAction {
    groupId?: number;
    students: number[];
}

export interface StudentsInGroupsError {
    status: number;
    error: string;
}

export interface StudentsInGroupsSchema {
    create?: StudentsInGroupsAction[];
    delete?: StudentsInGroupsAction;
    dataFrom: StudentsType[];
    dataTo: StudentsType[];
    isLoading: boolean;
    error?: StudentsInGroupsError;
}
