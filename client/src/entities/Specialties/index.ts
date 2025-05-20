export { fetchSpecialties } from './model/services/fetchSpecialties/fetchSpecialties';

export { Specialties } from './ui/Specialties';

export { getSpecialtiesLimit } from './model/selectors/getSpecialtiesLimit/getSpecialtiesLimit';
export { getSpecialtiesPage } from './model/selectors/getSpecialtiesPage/getSpecialtiesPage';

export { getSpecialtiesData } from './model/selectors/getSpecialtiesData/getSpecialtiesData';
export { getSpecialtiesError } from './model/selectors/getSpecialtiesError/getSpecialtiesError';
export {
    getSpecialtiesIsLoading,
} from './model/selectors/getSpecialtiesIsLoading/getSpecialtiesIsLoading';

export { specialtiesActions, specialtiesReducer } from './model/slice/specialtiesSlice';

export {
    SpecialtiesSchema, SpecialtiesData, SpecialtiesError, SpecialtiesType,
} from './model/types/specialties';
