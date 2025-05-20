export {
    getEmployeeCategoryDetailError,
} from './model/selectors/getEmployeeCategoryDetailError/getEmployeeCategoryDetailError';
export {
    getEmployeeCategoryDetailIsLoading,
} from './model/selectors/getEmployeeCategoryDetailIsLoading/getEmployeeCategoryDetailIsLoading';
export {
    getEmployeeCategoryDetailData,
} from './model/selectors/getEmployeeCategoryDetailData/getEmployeeCategoryDetailData';
export {
    fetchEmployeeCategoryDetail,
} from 'entities/EmployeeCategoryDetail/model/services/fetchEmployeeCategoryDetail/fetchEmployeeCategoryDetail';

export { employeeCategoryDetailReducer, employeeCategoryDetailActions } from './model/slice/employeeCategoryDetailSlice';

export { EmployeeCategoryDetailSchema, EmployeeCategoryDetailType } from './model/types/employeeCategoryDetail';
