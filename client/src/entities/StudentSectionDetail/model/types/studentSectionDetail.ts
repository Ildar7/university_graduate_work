import { StudentSectionsType } from 'entities/StudentSections';

export interface StudentSectionDetailType extends StudentSectionsType {
    id_sections: number;
}

export interface StudentSectionDetailSchema {
    data?: StudentSectionDetailType;
    isLoading: boolean;
    error?: string;
}
