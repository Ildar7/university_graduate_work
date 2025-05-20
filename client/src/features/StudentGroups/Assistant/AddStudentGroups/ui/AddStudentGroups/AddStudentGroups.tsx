import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { getRouteStudentGroups } from 'shared/const/router';
import { useNavigate } from 'react-router-dom';
import {
    AddStudentGroupsFinishing,
} from 'features/StudentGroups/Assistant/AddStudentGroups/ui/AddStudentGroupsFinishing/AddStudentGroupsFinishing';
import cls from './AddStudentGroups.module.scss';
import { AddStudentGroupsNav } from '../AddStudentGroupsNav/AddStudentGroupsNav';
import {
    AddStudentGroupsIntroduction,
} from '../AddStudentGroupsIntroduction/AddStudentGroupsIntroduction';
import {
    AddStudentGroupsCodes,
} from '../AddStudentGroupsCodes/AddStudentGroupsCodes';
import { AddStudentGroupsNewGroups } from '../AddStudentGroupsNewGroups/AddStudentGroupsNewGroups';

interface AddStudentGroupsProps {
    className?: string;
}

export const AddStudentGroups = memo((props: AddStudentGroupsProps) => {
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
        <div className={classNames(cls.AddStudentGroups, {}, [className])}>
            <AddStudentGroupsNav active={activeTab} />

            {activeTab === 1 && (
                <AddStudentGroupsIntroduction
                    changeActiveTab={changeActiveTabHandler}
                />
            )}
            {activeTab === 2 && (
                <AddStudentGroupsCodes
                    changeActiveTab={changeActiveTabHandler}
                    returnToStudentGroupsPage={returnToStudentGroupsPage}
                    className={cls.tab}
                />
            )}
            {activeTab === 3 && (
                <AddStudentGroupsNewGroups
                    changeActiveTab={changeActiveTabHandler}
                    returnToStudentGroupsPage={returnToStudentGroupsPage}
                    className={cls.tab}
                />
            )}
            {activeTab === 4 && (
                <AddStudentGroupsFinishing
                    className={cls.tabWithoutSettings}
                />
            )}
        </div>
    );
});
