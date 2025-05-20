export interface AddStudentGroupsBatchData {
    groupsIds: number[];
    count: number;
}

export interface AddStudentGroupsBatchError {
    error: string;
    message: string;
}

export interface AddStudentGroupsBatch {
    data?: AddStudentGroupsBatchData;
    isLoading: boolean;
    error?: AddStudentGroupsBatchError;
}
