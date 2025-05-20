export {
    getResidenceTypeDetailError,
} from './model/selectors/getResidenceTypeDetailError/getResidenceTypeDetailError';
export {
    getResidenceTypeDetailIsLoading,
} from './model/selectors/getResidenceTypeDetailIsLoading/getResidenceTypeDetailIsLoading';
export {
    getResidenceTypeDetailData,
} from './model/selectors/getResidenceTypeDetailData/getResidenceTypeDetailData';
export {
    fetchResidenceTypeDetail,
} from './model/services/fetchResidenceTypeDetail/fetchResidenceTypeDetail';

export { residenceTypeDetailActions, residenceTypeDetailReducer } from './model/slice/residenceTypeDetailSlice';

export { ResidenceTypeDetailSchema, ResidenceTypeDetailType } from './model/types/residenceTypeDetail';
