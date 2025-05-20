import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { AddStudentGroups, addStudentGroupsAssistantReducer } from 'features/StudentGroups/Assistant/AddStudentGroups';
import cls from './AddStudentGroupsPage.module.scss';

interface AddStudentGroupsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    addStudentGroupsAssistant: addStudentGroupsAssistantReducer,
};

const AddStudentGroupsPage = memo((props: AddStudentGroupsPageProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - Создать группы студентов"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.AddStudentGroupsPage, {}, [className])}>
                    <AddStudentGroups />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
});

export default AddStudentGroupsPage;
