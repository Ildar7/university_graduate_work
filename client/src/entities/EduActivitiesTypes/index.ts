export {
    getEduActivitiesTypesData,
    getEduActivitiesTypesIsLoading,
    getEduActivitiesTypesError,
} from './model/selectors/getEduActivitiesTypes/getEduActivitiesTypes';

export {
    fetchEduActivitiesTypes,
} from './model/services/fetchEduActivitiesTypes/fetchEduActivitiesTypes';

export { eduActivitiesTypesActions, eduActivitiesTypesReducer } from './model/slice/eduActivitiesTypesSlice';

export { EduActivitiesTypesSchema, EduActivitiesTypes } from './model/types/eduActivitiesTypes';
