export { EditEmployee } from './ui/EditEmployee/EditEmployee';

export {
    getEditEmployeeNewFieldsData,
} from './model/selectors/getEditEmployeeNewFieldsData/getEditEmployeeNewFieldsData';

export { editEmployee } from './model/services/editEmployee/editEmployee';

export { editEmployeeActions, editEmployeeReducer } from './model/slice/editEmployeeSlice';

export { EditEmployeeSchema, EditEmployeeType, EditEmployeeErrors } from './model/types/editEmployee';
