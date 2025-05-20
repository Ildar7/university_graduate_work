import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import {
    autoDistributionStudentGroupsReducer,
    AutoDistributionStudentsGroups,
} from 'features/StudentGroups/Assistant/AutoDistributionStudentsGroups';
import cls from './AutoDistributionStudentGroupsPage.module.scss';

interface AutoDistributionStudentGroupsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    autoDistributionStudentGroupsAssistant: autoDistributionStudentGroupsReducer,
};

const AutoDistributionStudentGroupsPage = memo((props: AutoDistributionStudentGroupsPageProps) => {
    const {
        className,
    } = props;

    return (
        <HelmetProvider
            title="WhitePaper LMS - Автоматическое распределение студентов по группам"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.AutoDistributionStudentGroupsPagePage, {}, [className])}>
                    <AutoDistributionStudentsGroups />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
});

export default AutoDistributionStudentGroupsPage;
