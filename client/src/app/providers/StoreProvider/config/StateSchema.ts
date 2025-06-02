import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { TableFiltersSchema, TableFiltersSelectedSchema } from 'features/TableFilters';
import { AddStudentSchema } from 'features/Students/AddStudent';
import { EditStudentSchema } from 'features/Students/EditStudent';
import { StudentDetailSchema } from 'entities/StudentDetail';
import { LoginSchema } from 'features/Login';
import { UserSchema } from 'entities/User';
import { TableSortSchema } from 'features/TableSort';
import { StudentsSchema } from 'entities/Students';
import { EnrollmentTypesSchema } from 'entities/EnrollmentTypes';
import { AddEnrollmentTypeSchema } from 'features/EnrollmentTypes/AddEnrollmentType';
import { EnrollmentTypeDetailSchema } from 'entities/EnrollmentTypeDetail';
import { EditEnrollmentTypeSchema } from 'features/EnrollmentTypes/EditEnrollmentType';
import { EduLanguagesSchema } from 'entities/EduLanguages';
import { EduLanguageDetailSchema } from 'entities/EduLanguageDetail';
import { EditEduLanguageSchema } from 'features/EduLanguages/EditEduLanguage';
import { AddEduLanguageSchema } from 'features/EduLanguages/AddEduLanguage';
import { FinishedEduTypesSchema } from 'entities/FinishedEduTypes';
import { FinishedEduTypeDetailSchema } from 'entities/FinishedEduTypeDetail/model/types/finishedEduTypeDetail';
import { AddFinishedEduTypeSchema } from 'features/FinishedEduTypes/AddFinishedEduType';
import { EditFinishedEduTypeSchema } from 'features/FinishedEduTypes/EditFinishedEduType';
import { EduCoursesSchema } from 'entities/EduCourses';
import { StudyDirectionsSchema } from 'entities/StudyDirections';
import { StudyDirectionDetailSchema } from 'entities/StudyDirectionDetail';
import { AddStudyDirectionSchema } from 'features/StudyDirections/AddStudyDirection';
import { EditStudyDirectionSchema } from 'features/StudyDirections/EditStudyDirection';
import { QualificationsSchema } from 'entities/Qualifications';
import { QualificationDetailSchema } from 'entities/QualificationDetail';
import { AddQualificationSchema } from 'features/Qualifications/AddQualification';
import { EditQualificationSchema } from 'features/Qualifications/EditQualification';
import { EduFormsSchema } from 'entities/EduForms';
import { EduFormDetailSchema } from 'entities/EduFormDetail';
import { AddEduFormSchema } from 'features/EduForms/AddEduForm';
import { EditEduFormSchema } from 'features/EduForms/EditEduForm';
import { ResidenceTypesSchema } from 'entities/ResidenceTypes';
import { ResidenceTypeDetailSchema } from 'entities/ResidenceTypeDetail';
import { AddResidenceTypeSchema } from 'features/ResidenceTypes/AddResidenceType';
import { EditResidenceTypeSchema } from 'features/ResidenceTypes/EditResidenceType';
import { SpecialtiesSchema } from 'entities/Specialties';
import { SpecialityDetailSchema } from 'entities/SpecialityDetail';
import { AddSpecialitySchema } from 'features/Specialties/AddSpeciality';
import { EditSpecialitySchema } from 'features/Specialties/EditSpeciality';
import { FinSourcesSchema } from 'entities/FinSources';
import { FinSourceDetailSchema } from 'entities/FinSourceDetail';
import { AddFinSourceSchema } from 'features/FinSources/AddFinSource';
import { EditFinSourceSchema } from 'features/FinSources/EditFinSource';
import { ArrivalSourcesSchema } from 'entities/ArrivalSources';
import { ArrivalSourceDetailSchema } from 'entities/ArrivalSourceDetail';
import { AddArrivalSourceSchema } from 'features/ArrivalSources/AddArrivalSource';
import { EditArrivalSourceSchema } from 'features/ArrivalSources/EditArrivalSource';
import { SettingsMainCollegeSchema } from 'entities/Settings/SettingsMainCollege';
import { EducationalModulesSchema } from 'entities/EducationalModules';
import { AddEduModuleSchema } from 'features/EduModules/AddEduModule';
import { EducationalModuleDetailSchema } from 'entities/EducationalModuleDetail';
import { EditEduModuleSchema } from 'features/EduModules/EditEduModule';
import { AddEduUnitSchema } from 'features/EduUnits/AddEduUnit';
import { EditEduUnitSchema } from 'features/EduUnits/EditEduUnit';
import { EducationalUnitDetailSchema } from 'entities/EducationalUnitDetail';
import { CurriculumSubjectsSchema } from 'entities/CurriculumSubjects';
import { CurriculumSubjectsDetailSchema } from 'entities/CurriculumSubjectsDetail';
import { AddCurriculumSubjectSchema } from 'features/CurriculumSubjects/AddCurriculumSubject';
import { EditCurriculumSubjectSchema } from 'features/CurriculumSubjects/EditCurriculumSubject';
import { EducationBasesSchema } from 'entities/EducationBases';
import { StudentGroupsSchema } from 'entities/StudentGroups';
import { AddStudentGroupSchema } from 'features/StudentGroups/AddStudentGroups';
import { LanguagesSchema } from 'entities/Languages';
import { EditStudentGroupsSchema } from 'features/StudentGroups/EditStudentGroups';
import { StudentGroupDetailSchema } from 'entities/StudentGroupDetail';
import { EduActivitiesTypesSchema } from 'entities/EduActivitiesTypes';
import { StudentsInGroupsSchema } from 'entities/StudentsInGroups';
import { StudentsTableFieldsSchema } from 'features/Students/StudentsTableFields';
import { ClassRoomsSchema } from 'entities/ClassRooms';

export interface StateSchema {
    user: UserSchema;
    students: StudentsSchema;
    tableSort: TableSortSchema;
    tableFiltersSelected: TableFiltersSelectedSchema;

    // async-reducers
    tableFilters?: TableFiltersSchema;
    studentsTableFields?: StudentsTableFieldsSchema;
    addNewStudent?: AddStudentSchema;
    editStudent?: EditStudentSchema;
    studentDetail?: StudentDetailSchema;
    login?: LoginSchema;
    enrollmentTypes?: EnrollmentTypesSchema;
    addEnrollmentType?: AddEnrollmentTypeSchema;
    enrollmentTypeDetail?: EnrollmentTypeDetailSchema;
    editEnrollmentType?: EditEnrollmentTypeSchema;
    eduLanguages?: EduLanguagesSchema;
    eduLanguagesDetail?: EduLanguageDetailSchema;
    editEduLanguage?: EditEduLanguageSchema;
    addEduLanguage?: AddEduLanguageSchema;
    finishedEduTypes?: FinishedEduTypesSchema;
    finishedEduTypesDetail?: FinishedEduTypeDetailSchema;
    addFinishedEduType?: AddFinishedEduTypeSchema;
    editFinishedEduType?: EditFinishedEduTypeSchema;
    eduCourses?: EduCoursesSchema;
    studyDirections?: StudyDirectionsSchema;
    studyDirectionDetail?: StudyDirectionDetailSchema;
    addStudyDirection?: AddStudyDirectionSchema;
    editStudyDirection?: EditStudyDirectionSchema;
    qualifications?: QualificationsSchema;
    qualificationDetail?: QualificationDetailSchema;
    addQualification?: AddQualificationSchema;
    editQualification?: EditQualificationSchema;
    eduForms?: EduFormsSchema;
    eduFormDetail?: EduFormDetailSchema;
    addEduForm?: AddEduFormSchema;
    editEduForm?: EditEduFormSchema;
    residenceTypes?: ResidenceTypesSchema;
    residenceTypeDetail?: ResidenceTypeDetailSchema;
    addResidenceType?: AddResidenceTypeSchema;
    editResidenceType?: EditResidenceTypeSchema;
    specialties?: SpecialtiesSchema;
    specialityDetail?: SpecialityDetailSchema;
    addSpeciality?: AddSpecialitySchema;
    editSpeciality?: EditSpecialitySchema;
    finSources?: FinSourcesSchema;
    finSourcesDetail?: FinSourceDetailSchema;
    addFinSource?: AddFinSourceSchema;
    editFinSource?: EditFinSourceSchema;
    arrivalSources?: ArrivalSourcesSchema;
    arrivalSourceDetail?: ArrivalSourceDetailSchema;
    addArrivalSource?: AddArrivalSourceSchema;
    editArrivalSource?: EditArrivalSourceSchema;
    settingsMainCollege?: SettingsMainCollegeSchema;
    eduModules?: EducationalModulesSchema;
    eduModuleDetail?: EducationalModuleDetailSchema;
    addEduModule?: AddEduModuleSchema;
    editEduModule?: EditEduModuleSchema;
    eduUnitDetail?: EducationalUnitDetailSchema;
    addEduUnit?: AddEduUnitSchema;
    editEduUnit?: EditEduUnitSchema;
    curriculumSubjects?: CurriculumSubjectsSchema;
    curriculumSubjectsDetail?: CurriculumSubjectsDetailSchema;
    addCurriculumSubject?: AddCurriculumSubjectSchema;
    editCurriculumSubject?: EditCurriculumSubjectSchema;
    educationBases?: EducationBasesSchema;
    languages?: LanguagesSchema;
    studentGroups?: StudentGroupsSchema;
    studentGroupDetail?: StudentGroupDetailSchema;
    addStudentGroup?: AddStudentGroupSchema;
    editStudentGroup?: EditStudentGroupsSchema;
    eduActivitiesTypes?: EduActivitiesTypesSchema;
    studentsInGroups?: StudentsInGroupsSchema;
    classRooms?: ClassRoomsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}
