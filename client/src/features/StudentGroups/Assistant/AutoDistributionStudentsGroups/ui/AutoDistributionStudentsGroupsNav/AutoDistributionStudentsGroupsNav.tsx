import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo } from 'react';
import { CNav, CNavItem, CNavLink } from '@coreui/react';
import cls from './AutoDistributionStudentsGroupsNav.module.scss';

interface AutoDistributionStudentsGroupsNavProps {
    className?: string;
    active: number;
}

export const AutoDistributionStudentsGroupsNav = memo((props: AutoDistributionStudentsGroupsNavProps) => {
    const {
        className,
        active,
    } = props;

    return (
        <CNav
            className={classNames(cls.AutoDistributionStudentsGroupsNav, {}, [className])}
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
                    Распределение
                </CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink
                    active={active === 3}
                    className={classNames(cls.tabLink, { [cls.activeLink]: active === 3 }, [])}
                >
                    Завершение
                </CNavLink>
            </CNavItem>
        </CNav>
    );
});
