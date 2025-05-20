export {
    getEmployeePositionDetailError,
} from './model/selectors/getEmployeePositionDetailError/getEmployeePositionDetailError';
export {
    getEmployeePositionDetailIsLoading,
} from './model/selectors/getEmployeePositionDetailIsLoading/getEmployeePositionDetailIsLoading';
export {
    getEmployeePositionDetailData,
} from './model/selectors/getEmployeePositionDetailData/getEmployeePositionDetailData';
export {
    fetchEmployeePositionDetail,
} from './model/services/fetchEmployeePositionDetail/fetchEmployeePositionDetail';

export { employeePositionDetailReducer, employeePositionDetailActions } from './model/slice/employeePositionDetailSlice';

export { EmployeePositionDetailSchema, EmployeePositionDetailType } from './model/types/employeePositionDetail';
