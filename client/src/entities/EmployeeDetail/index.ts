export { fetchEmployeeDetail } from './model/services/fetchEmployeeDetail/fetchEmployeeDetail';

export {
    getEmployeeDetailError,
} from './model/selectors/getEmployeeDetailError/getEmployeeDetailError';

export { getEmployeeDetailData } from './model/selectors/getEmployeeDetailData/getEmployeeDetailData';

export {
    getEmployeeDetailIsLoading,
} from './model/selectors/getEmployeeDetailIsLoading/getEmployeeDetailIsLoading';

export { employeeDetailReducer, employeeDetailActions } from './model/slice/employeeDetailSlice';

export { EmployeeDetailType, EmployeeDetailSchema } from './model/types/employeeDetail';
