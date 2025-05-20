import { AddStudentGroupsError } from './addStudentGroups';

interface AddStudentGroupsSpecialty {
    id_spec: number;
    shifr_spec: string;
    speciality: string;
    level_of_education: string;
}

export interface AddStudentGroupsSpecialtiesData {
    speciality_id: number;
    specialty: AddStudentGroupsSpecialty;
}

export interface AddStudentGroupsSpecialties {
    data?: AddStudentGroupsSpecialtiesData[];
    isLoading: boolean;
    error?: AddStudentGroupsError;
}
