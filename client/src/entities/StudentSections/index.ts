export { fetchStudentSections } from './model/services/fetchStudentSections/fetchStudentSections';

export {
    getStudentSectionsLimit,
} from './model/selectors/getStudentSectionsLimit/getStudentSectionsLimit';
export {
    getStudentSectionsPage,
} from './model/selectors/getStudentSectionsPage/getStudentSectionsPage';

export {
    getStudentSectionsData,
} from './model/selectors/getStudentSectionsData/getStudentSectionsData';
export {
    getStudentSectionsIsLoading,
} from './model/selectors/getStudentSectionsIsLoading/getStudentSectionsIsLoading';
export {
    getStudentSectionsError,
} from './model/selectors/getStudentSectionsError/getStudentSectionsError';

export { studentSectionsActions, studentSectionsReducer } from './model/slice/studentSectionsSlice';

export {
    StudentSectionsSchema, StudentSectionsData, StudentSectionsError, StudentSectionsType,
} from './model/types/studentSections';

export { StudentSections } from './ui/StudentSections';
