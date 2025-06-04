import React, {
    memo, useCallback, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import {
    getRouteEducation, getRouteMain, getRouteReferences, getRouteStudents,
} from 'shared/const/router';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { SubList } from 'shared/ui/SubList/SubList';
import { subListLinks } from 'widgets/Header/const/subListLinks';
import { useLocation } from 'react-router-dom';
import { useOutsideAlerter } from 'shared/lib/hooks/useOutsideDetect/useOutsideDetect';
import cls from './HeaderNavigation.module.scss';

interface HeaderNavigationProps {
    className?: string;
}

export const HeaderNavigation = memo((props: HeaderNavigationProps) => {
    const {
        className,
    } = props;

    const [contingentSublistVisible, setContingentSublistVisible] = useState(false);
    const [educationSublistVisible, setEducationSublistVisible] = useState(false);
    const [learningProcessSublistVisible, setLearningProcessSublistVisible] = useState(false);
    const [systemSublistVisible, setSystemSublistVisible] = useState(false);
    const { pathname } = useLocation();
    const contingentSublistRef = useRef(null);
    const educationSublistRef = useRef(null);
    const learningProcessSublistRef = useRef(null);
    const systemSublistRef = useRef(null);

    useOutsideAlerter(contingentSublistRef, setContingentSublistVisible);
    useOutsideAlerter(educationSublistRef, setEducationSublistVisible);
    useOutsideAlerter(learningProcessSublistRef, setLearningProcessSublistVisible);
    useOutsideAlerter(systemSublistRef, setSystemSublistVisible);

    const onToggleVisibleContingentSublist = useCallback(() => {
        setContingentSublistVisible((prevState) => !prevState);
    }, []);

    const onToggleVisibleEducationSublist = useCallback(() => {
        setEducationSublistVisible((prevState) => !prevState);
    }, []);

    const onToggleVisibleLearningProcessSublist = useCallback(() => {
        setLearningProcessSublistVisible((prevState) => !prevState);
    }, []);

    const onToggleVisibleSystemSublist = useCallback(() => {
        setSystemSublistVisible((prevState) => !prevState);
    }, []);

    return (
        <nav className={classNames(cls.HeaderNavigation, {}, [className])}>
            <ul className={cls.navList}>
                <li
                    className={
                        classNames(
                            cls.navItem,
                            { [cls.navItemActive]: pathname === getRouteMain() },
                            [],
                        )
                    }
                >
                    <AppLink
                        to={getRouteMain()}
                    >
                        <Text
                            size={TextSize.XS}
                        >
                            Главная
                        </Text>
                    </AppLink>
                </li>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <li
                    className={
                        classNames(
                            cls.navItem,
                            { [cls.navItemActive]: pathname.includes(getRouteStudents()) },
                            [],
                        )
                    }
                    onClick={onToggleVisibleContingentSublist}
                >
                    <Text
                        size={TextSize.XS}
                    >
                        {
                            subListLinks.contingent.filter((link) => link.link === pathname).length
                                ? subListLinks.contingent.filter((link) => link.link === pathname)[0].name
                                : 'Контингент'
                        }
                    </Text>
                    <SubList
                        links={subListLinks.contingent}
                        visible={contingentSublistVisible}
                        ref={contingentSublistRef}
                    />
                </li>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <li
                    className={
                        classNames(
                            cls.navItem,
                            { [cls.navItemActive]: pathname.includes(getRouteEducation()) },
                            [],
                        )
                    }
                    onClick={onToggleVisibleEducationSublist}
                >
                    <Text
                        size={TextSize.XS}
                    >
                        {
                            subListLinks.education.filter((link) => link.link === pathname).length
                                ? subListLinks.education.filter((link) => link.link === pathname)[0].name
                                : 'Образование'
                        }
                    </Text>
                    <SubList
                        links={subListLinks.education}
                        visible={educationSublistVisible}
                        ref={educationSublistRef}
                    />
                </li>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <li
                    className={
                        classNames(
                            cls.navItem,
                            { [cls.navItemActive]: pathname.includes(getRouteReferences()) },
                            [],
                        )
                    }
                    onClick={onToggleVisibleLearningProcessSublist}
                >
                    <Text
                        size={TextSize.XS}
                    >
                        {
                            subListLinks.learningProcess.filter((link) => link.link === pathname).length
                                ? subListLinks.learningProcess.filter((link) => link.link === pathname)[0].name
                                : 'Учебный процесс'
                        }
                    </Text>
                    <SubList
                        links={subListLinks.learningProcess}
                        visible={learningProcessSublistVisible}
                        ref={learningProcessSublistRef}
                    />
                </li>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <li
                    className={
                        classNames(
                            cls.navItem,
                            { [cls.navItemActive]: pathname.includes('/settings') },
                            [],
                        )
                    }
                    onClick={!pathname.includes('/settings') ? onToggleVisibleSystemSublist : undefined}
                >
                    <Text
                        size={TextSize.XS}
                    >
                        {
                            subListLinks.system.filter((link) => link.link === pathname).length
                                ? subListLinks.system.filter((link) => link.link === pathname)[0].name
                                : 'Система'
                        }
                    </Text>
                    {!pathname.includes('/settings')
                        ? (
                            <SubList
                                links={subListLinks.system}
                                visible={systemSublistVisible}
                                ref={systemSublistRef}
                            />
                        )
                        : ''}
                </li>
            </ul>
        </nav>
    );
});
