import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { SubjectsSchedule, subjectsScheduleReducer } from 'entities/SubjectsSchedule';
import cls from './SubjectsSchedulePage.module.scss';

interface SubjectsScheduleProps {
    className?: string;
}

const reducers: ReducersList = {
    subjectsSchedule: subjectsScheduleReducer,
};

const SubjectsSchedulePage = memo((props: SubjectsScheduleProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - Расписание дисциплин"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.SubjectsSchedulePage, {}, [className])}>
                    <SubjectsSchedule />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
});

export default SubjectsSchedulePage;
