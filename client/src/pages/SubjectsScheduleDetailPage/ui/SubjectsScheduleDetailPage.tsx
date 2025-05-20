import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { SubjectsScheduleDetail, subjectsScheduleDetailReducer } from 'entities/SubjectsScheduleDetail';
import { eduCoursesReducer } from 'entities/EduCourses';
import { eduLanguagesReducer } from 'entities/EduLanguages';
import { subjectsScheduleDetailActionsReducer } from 'features/SubjectsScheduleDetail';
import { classRoomsReducer } from 'entities/ClassRooms';
import { subjectsScheduleWorkloadReducer } from 'entities/SubjectsScheduleWorkload';
import cls from './SubjectsScheduleDetailPage.module.scss';

interface SubjectsScheduleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    subjectsScheduleDetail: subjectsScheduleDetailReducer,
    subjectsScheduleDetailActions: subjectsScheduleDetailActionsReducer,
    subjectsScheduleWorkload: subjectsScheduleWorkloadReducer,
    classRooms: classRoomsReducer,
    eduCourses: eduCoursesReducer,
    eduLanguages: eduLanguagesReducer,
};

const SubjectsScheduleDetailPage = memo((props: SubjectsScheduleDetailPageProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - Расписание дисциплин"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.SubjectsScheduleDetailPage, {}, [className])}>
                    <SubjectsScheduleDetail />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
});

export default SubjectsScheduleDetailPage;
