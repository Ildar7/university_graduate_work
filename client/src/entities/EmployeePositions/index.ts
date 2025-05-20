export { fetchEmployeePositions } from 'entities/EmployeePositions/model/services/fetchEmployeePositions/fetchEmployeePositions';

export { EmployeePositions } from './ui/EmployeePositions';

export { getEmployeePositionsLimit } from 'entities/EmployeePositions/model/selectors/getEmployeePositionsLimit/getEmployeePositionsLimit';
export { getEmployeePositionsPage } from 'entities/EmployeePositions/model/selectors/getEmployeePositionsPage/getEmployeePositionsPage';

export { getEmployeePositionsData } from 'entities/EmployeePositions/model/selectors/getEmployeePositionsData/getEmployeePositionsData';
export { getEmployeePositionsError } from 'entities/EmployeePositions/model/selectors/getEmployeePositionsError/getEmployeePositionsError';
export {
    getEmployeePositionsIsLoading,
} from 'entities/EmployeePositions/model/selectors/getEmployeePositionsIsLoading/getEmployeePositionsIsLoading';

export { employeePositionsActions, employeePositionsReducer } from './model/slice/employeePositionsSlice';

export {
    EmployeePositionsSchema, EmployeePositionsData, EmployeePositionsError, EmployeePositionsType,
} from './model/types/employeePositions';
