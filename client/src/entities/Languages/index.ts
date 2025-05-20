export { getLanguagesData, getLanguagesError, getLanguagesIsLoading } from './model/selectors/getLanguages/getLanguages';

export { languagesActions, languagesReducer } from './model/slice/languagesSlice';

export { LanguagesSchema, LanguagesType } from './model/types/languagesSchema';

export { fetchLanguages } from './model/services/fetchLanguages/fetchLanguages';
