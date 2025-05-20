export {
    getFinSourceDetailError,
} from './model/selectors/getFinSourceDetailError/getFinSourceDetailError';
export {
    getFinSourceDetailIsLoading,
} from './model/selectors/getFinSourceDetailIsLoading/getFinSourceDetailIsLoading';
export {
    getFinSourceDetailData,
} from './model/selectors/getFinSourceDetailData/getFinSourceDetailData';
export {
    fetchFinSourceDetail,
} from './model/services/fetchFinSourceDetail/fetchFinSourceDetail';

export { finSourceDetailActions, finSourceDetailReducer } from './model/slice/finSourceDetailSlice';

export { FinSourceDetailSchema, FinSourceDetailType } from './model/types/finSourceDetail';
