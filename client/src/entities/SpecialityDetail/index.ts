export {
    getSpecialityDetailError,
} from './model/selectors/getSpecialityDetailError/getSpecialityDetailError';
export {
    getSpecialityDetailIsLoading,
} from './model/selectors/getSpecialityDetailIsLoading/getSpecialityDetailIsLoading';
export {
    getSpecialityDetailData,
} from './model/selectors/getSpecialityDetailData/getSpecialityDetailData';
export {
    fetchSpecialityDetail,
} from './model/services/fetchSpecialityDetail/fetchSpecialityDetail';

export { specialityDetailActions, specialityDetailReducer } from './model/slice/specialityDetailSlice';

export { SpecialityDetailSchema, SpecialityDetailType } from './model/types/specialityDetail';
