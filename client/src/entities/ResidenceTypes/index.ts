export { fetchResidenceTypes } from './model/services/fetchResidenceTypes/fetchResidenceTypes';

export {
    getResidenceTypesLimit,
} from './model/selectors/getResidenceTypesLimit/getResidenceTypesLimit';
export {
    getResidenceTypesPage,
} from './model/selectors/getResidenceTypesPage/getResidenceTypesPage';

export {
    getResidenceTypesData,
} from './model/selectors/getResidenceTypesData/getResidenceTypesData';
export {
    getResidenceTypesIsLoading,
} from './model/selectors/getResidenceTypesIsLoading/getResidenceTypesIsLoading';
export {
    getResidenceTypesError,
} from './model/selectors/getResidenceTypesError/getResidenceTypesError';

export { residenceTypesActions, residenceTypesReducer } from './model/slice/residenceTypesSlice';

export {
    ResidenceTypesSchema, ResidenceTypesData, ResidenceTypesError, ResidenceTypesType,
} from './model/types/residenceTypes';

export { ResidenceTypes } from './ui/ResidenceTypes';
