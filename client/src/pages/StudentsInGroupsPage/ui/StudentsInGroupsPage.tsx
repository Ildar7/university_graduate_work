import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { StudentsInGroups, studentsInGroupsReducer } from 'entities/StudentsInGroups';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { studentGroupsReducer } from 'entities/StudentGroups';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { tableFiltersReducer } from 'features/TableFilters';
import cls from './StudentsInGroupsPage.module.scss';

interface StudentsInGroupsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    studentGroups: studentGroupsReducer,
    tableFilters: tableFiltersReducer,
    studentsInGroups: studentsInGroupsReducer,
};

const StudentsInGroupsPage = memo((props: StudentsInGroupsPageProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - Привязка студентов к группе"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.StudentsInGroupsPage, {}, [className])}>
                    <StudentsInGroups />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>

    );
});

export default StudentsInGroupsPage;
