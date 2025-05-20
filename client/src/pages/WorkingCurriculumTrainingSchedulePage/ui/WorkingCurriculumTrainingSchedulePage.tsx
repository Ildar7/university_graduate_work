import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import {
    WorkingCurriculumTrainingSchedule,
    workingCurriculumTrainingScheduleReducer,
} from 'entities/WorkingCurriculumTrainingSchedule';
import { workingCurriculumDetailReducer } from 'entities/WorkingCurriculumDetail';
import { standardCurriculumDetailReducer } from 'entities/StandardCurriculumDetail';
import { settingsMainCollegeReducer } from 'entities/Settings/SettingsMainCollege';
import { trainingScheduleSchemaReducer } from 'entities/TrainingScheduleSchema';
import cls from './WorkingCurriculumTrainingSchedulePage.module.scss';

interface WorkingCurriculumTrainingSchedulePageProps {
    className?: string;
}

const reducers: ReducersList = {
    workingCurriculumTrainingSchedule: workingCurriculumTrainingScheduleReducer,
    workingCurriculumDetail: workingCurriculumDetailReducer,
    standardCurriculumDetail: standardCurriculumDetailReducer,
    settingsMainCollege: settingsMainCollegeReducer,
    trainingScheduleSchema: trainingScheduleSchemaReducer,
};

const WorkingCurriculumTrainingSchedulePage = memo((props: WorkingCurriculumTrainingSchedulePageProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - График рабочего учебного плана"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.WorkingCurriculumTrainingSchedulePage, {}, [className])}>
                    <WorkingCurriculumTrainingSchedule />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
});

export default WorkingCurriculumTrainingSchedulePage;
