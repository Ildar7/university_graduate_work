import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { SubjectsScheduleWorkload, subjectsScheduleWorkloadReducer } from 'entities/SubjectsScheduleWorkload';
import cls from './SubjectsScheduleWorkloadPage.module.scss';

interface SubjectsScheduleWorkloadPageProps {
    className?: string;
}

const reducers: ReducersList = {
    subjectsScheduleWorkload: subjectsScheduleWorkloadReducer,
};

const SubjectsScheduleWorkloadPage = memo((props: SubjectsScheduleWorkloadPageProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - Учебная нагрузка"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.SubjectsScheduleWorkloadPage, {}, [className])}>
                    <SubjectsScheduleWorkload />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
});

export default SubjectsScheduleWorkloadPage;
