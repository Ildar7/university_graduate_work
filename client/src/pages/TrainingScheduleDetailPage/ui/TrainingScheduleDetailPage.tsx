import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { TrainingScheduleDetail, trainingScheduleDetailReducer } from 'entities/TrainingScheduleDetail';
import { workingCurriculumTrainingScheduleReducer } from 'entities/WorkingCurriculumTrainingSchedule';
import { trainingScheduleSchemaReducer } from 'entities/TrainingScheduleSchema';
import cls from './TrainingScheduleDetailPage.module.scss';

interface TrainingScheduleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    trainingScheduleDetail: trainingScheduleDetailReducer,
    workingCurriculumTrainingSchedule: workingCurriculumTrainingScheduleReducer,
    trainingScheduleSchema: trainingScheduleSchemaReducer,
};

const TrainingScheduleDetailPage = memo((props: TrainingScheduleDetailPageProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - График учебного процесса"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.TrainingScheduleDetailPage, {}, [className])}>
                    <TrainingScheduleDetail />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
});

export default TrainingScheduleDetailPage;
