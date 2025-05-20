import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteStudentGroups } from 'shared/const/router';
import {
    AutoDistributionStudentGroupsFinishing,
} from 'features/StudentGroups/Assistant/AutoDistributionStudentsGroups/ui/AutoDistributionStudentGroupsFinishing/AutoDistributionStudentGroupsFinishing';
import {
    AutoDistributionStudentsGroupsNav,
} from '../AutoDistributionStudentsGroupsNav/AutoDistributionStudentsGroupsNav';
import {
    AutoDistributionStudentsGroupsIntroduction,
} from '../AutoDistributionStudentsGroupsIntroduction/AutoDistributionStudentsGroupsIntroduction';
import cls from './AutoDistributionStudentsGroups.module.scss';
import {
    AutoDistributionStudentsGroupsProcess,
} from '../AutoDistributionStudentsGroupsProcess/AutoDistributionStudentsGroupsProcess';

interface AutoDistributionStudentsGroupsProps {
    className?: string;
}

export const AutoDistributionStudentsGroups = memo((props: AutoDistributionStudentsGroupsProps) => {
    const {
        className,
    } = props;
    const [activeTab, setActiveTab] = useState(1);
    const navigate = useNavigate();

    const changeActiveTabHandler = useCallback((value: number) => {
        setActiveTab(value);
    }, []);

    const returnToStudentGroupsPage = useCallback(() => {
        navigate(getRouteStudentGroups());
    }, [navigate]);

    return (
        <div className={classNames(cls.AutoDistributionStudentsGroups, {}, [className])}>
            <AutoDistributionStudentsGroupsNav
                active={activeTab}
            />

            {activeTab === 1 && (
                <AutoDistributionStudentsGroupsIntroduction
                    changeActiveTab={changeActiveTabHandler}
                />
            )}
            {activeTab === 2 && (
                <AutoDistributionStudentsGroupsProcess
                    changeActiveTab={changeActiveTabHandler}
                    returnToStudentGroupsPage={returnToStudentGroupsPage}
                    className={cls.tab}
                />
            )}
            {activeTab === 3 && (
                <AutoDistributionStudentGroupsFinishing
                    className={cls.tabWithoutSettings}
                />
            )}
        </div>
    );
});
