export {
    getEmployeeEducationDetailError,
} from './model/selectors/getEmployeeEducationDetailError/getEmployeeEducationDetailError';
export {
    getEmployeeEducationDetailIsLoading,
} from './model/selectors/getEmployeeEducationDetailIsLoading/getEmployeeEducationDetailIsLoading';
export {
    getEmployeeEducationDetailData,
} from './model/selectors/getEmployeeEducationDetailData/getEmployeeEducationDetailData';
export {
    fetchEmployeeEducationDetail,
} from './model/services/fetchEmployeeEducationDetail/fetchEmployeeEducationDetail';

export { employeeEducationDetailReducer, employeeEducationDetailActions } from './model/slice/employeeEducationDetailSlice';

export { EmployeeEducationDetailSchema, EmployeeEducationDetailType } from './model/types/employeeEducationDetail';
