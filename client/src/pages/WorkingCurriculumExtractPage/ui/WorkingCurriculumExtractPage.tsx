import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { WorkingCurriculumExtract, workingCurriculumExtractReducer } from 'entities/WorkingCurriculumExtract';
import { addCurriculumSubjectReducer } from 'features/CurriculumSubjects/AddCurriculumSubject';
import { eduActivitiesTypesReducer } from 'entities/EduActivitiesTypes';
import { settingsMainCollegeReducer } from 'entities/Settings/SettingsMainCollege';
import { curriculumSubjectsDetailReducer } from 'entities/CurriculumSubjectsDetail';
import { editCurriculumSubjectReducer } from 'features/CurriculumSubjects/EditCurriculumSubject';
import { educationalModuleDetailReducer } from 'entities/EducationalModuleDetail';
import cls from './WorkingCurriculumExtractPage.module.scss';

interface WorkingCurriculumExtractPageProps {
    className?: string;
}

const reducers: ReducersList = {
    workingCurriculumExtract: workingCurriculumExtractReducer,
    addCurriculumSubject: addCurriculumSubjectReducer,
    eduActivitiesTypes: eduActivitiesTypesReducer,
    settingsMainCollege: settingsMainCollegeReducer,
    curriculumSubjectsDetail: curriculumSubjectsDetailReducer,
    editCurriculumSubject: editCurriculumSubjectReducer,
    eduModuleDetail: educationalModuleDetailReducer,
};

const WorkingCurriculumExtractPage = memo((props: WorkingCurriculumExtractPageProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - Выписка из рабочего учебного плана"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.WorkingCurriculumExtractPage, {}, [className])}>
                    <WorkingCurriculumExtract />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
});

export default WorkingCurriculumExtractPage;
