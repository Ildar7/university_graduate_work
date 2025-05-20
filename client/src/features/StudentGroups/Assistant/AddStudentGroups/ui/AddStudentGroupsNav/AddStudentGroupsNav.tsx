import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { CNav, CNavItem, CNavLink } from '@coreui/react';
import cls from './AddStudentGroupsNav.module.scss';

interface AddStudentGroupsNavProps {
    className?: string;
    active: number;
}

export const AddStudentGroupsNav = memo((props: AddStudentGroupsNavProps) => {
    const {
        className,
        active,
    } = props;

    return (
        <CNav
            className={classNames(cls.AddStudentGroupsNav, {}, [className])}
            variant="pills"
            layout="fill"
        >
            <CNavItem>
                <CNavLink
                    active={active === 1}
                    className={classNames(cls.tabLink, { [cls.activeLink]: active === 1 }, [])}
                >
                    Введение
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink
                    active={active === 2}
                    className={classNames(cls.tabLink, { [cls.activeLink]: active === 2 }, [])}
                >
                    Коды групп
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink
                    active={active === 3}
                    className={classNames(cls.tabLink, { [cls.activeLink]: active === 3 }, [])}
                >
                    Новые группы
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink
                    active={active === 4}
                    className={classNames(cls.tabLink, { [cls.activeLink]: active === 4 }, [])}
                >
                    Завершение
                </CNavLink>
            </CNavItem>
        </CNav>
    );
});
