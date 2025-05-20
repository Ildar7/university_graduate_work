export {
    getArrivalSourceDetailError,
} from './model/selectors/getArrivalSourceDetailError/getArrivalSourceDetailError';
export {
    getArrivalSourceDetailIsLoading,
} from './model/selectors/getArrivalSourceDetailIsLoading/getArrivalSourceDetailIsLoading';
export {
    getArrivalSourceDetailData,
} from './model/selectors/getArrivalSourceDetailData/getArrivalSourceDetailData';
export {
    fetchArrivalSourceDetail,
} from './model/services/fetchArrivalSourceDetail/fetchArrivalSourceDetail';

export { arrivalSourceDetailActions, arrivalSourceDetailReducer } from './model/slice/arrivalSourceDetailSlice';

export { ArrivalSourceDetailSchema, ArrivalSourceDetailType } from './model/types/arrivalSourceDetail';
