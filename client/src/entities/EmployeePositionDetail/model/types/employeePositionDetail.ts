import { EmployeePositionsType } from 'entities/EmployeePositions';

export interface EmployeePositionDetailType extends EmployeePositionsType {
    position_id: number;
}

export interface EmployeePositionDetailSchema {
    data?: EmployeePositionDetailType;
    isLoading: boolean;
    error?: string;
}
