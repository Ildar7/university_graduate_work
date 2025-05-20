export { getEducationBasesData, getEducationBasesError, getEducationBasesIsLoading } from './model/selectors/getEducationBases/getEducationBases';

export { educationBasesReducer, educationBasesActions } from './model/slice/educationBasesSlice';

export { EducationBasesSchema, EducationBasesType } from './model/types/educationBases';

export { fetchEducationBases } from './model/services/fetchEducationBases/fetchEducationBases';
