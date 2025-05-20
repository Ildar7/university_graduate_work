export {
    addEmployeePosition as addEmployeePositionToEmployee,
} from './model/services/addEmployeePosition/addEmployeePosition';

export {
    getAddEmployeePositionToEmployeeErrors,
} from './model/selectors/getAddEmployeePosition/getAddEmployeePosition';

export { getAddEmployeePositionToEmployeeData } from './model/selectors/getAddEmployeePosition/getAddEmployeePosition';

export {
    addEmployeePositionReducer as addEmployeePositionToEmployeeReducer,
    addEmployeePositionActions as addEmployeePositionToEmployeeActions,
} from './model/slice/addEmployeePositionSlice';

export {
    AddEmployeePositionSchema as AddEmployeePositionToEmployeeSchema,
    AddEmployeePositionErrors as AddEmployeePositionToEmployeeErrors,
} from './model/types/addEmployeePosition';
