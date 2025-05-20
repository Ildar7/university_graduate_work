export interface AddStudentGroupsCodesField {
    [value: number]: string | null;
}

export interface AddStudentGroupsCodes {
    data: AddStudentGroupsCodesField[];
    canSend: boolean;
}
