import {
    AddStudentGroupsSpecialties,
} from './addStudentGroupsSpecialties';
import {
    AddStudentGroupsCodes,
} from './addStudentGroupsCodes';
import {
    AddStudentGroupsGeneratedGroups,
} from './addStudentGroupsGeneratedGroups';
import {
    AddStudentGroupsBatch,
} from './addStudentGroupsBatch';

export interface AddStudentGroupsError {
    status: number;
    error: string;
}

export interface AddStudentGroupsSchema {
    specialties: AddStudentGroupsSpecialties;
    codes: AddStudentGroupsCodes;
    generatedGroups: AddStudentGroupsGeneratedGroups;
    batchInfo: AddStudentGroupsBatch;
}
