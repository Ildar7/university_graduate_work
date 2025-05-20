import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { BreadcrumbList } from 'widgets/Breadcrumb';
import { cilChevronBottom } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getRouteEducation, getRouteReferences, getRouteStudents } from 'shared/const/router';
import { useLocation } from 'react-router-dom';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';
import { educationPageBreadcrumbs } from 'widgets/Breadcrumb/const/education';
import { curriculumReferencesBreadcrumbs } from 'widgets/Breadcrumb/const/curriculum-references';
import cls from './SecondaryMenu.module.scss';

interface SecondaryMenuProps {
    className?: string;
}
export const SecondaryMenu = memo((props: SecondaryMenuProps) => {
    const {
        className,
    } = props;
    const location = useLocation();
    const [breadcrumbsList, setBreadcrumbsList] = useState<BreadcrumbList[]>([]);

    const setActiveMainMenuItem = useCallback((mainItemId: number) => {
        setBreadcrumbsList(
            breadcrumbsList?.map((item) => (
                // eslint-disable-next-line no-nested-ternary
                item.active
                    ? {
                        ...item,
                        active: false,
                        items: item.items ? item.items.map((secondaryItem) => (
                            {
                                ...secondaryItem,
                                active: false,
                            }
                        )) : null,
                    }
                    : item.id === mainItemId
                        ? { ...item, active: true }
                        : item
            )),
        );
    }, [breadcrumbsList]);

    const setActiveSecondaryMenuItem = useCallback((mainItemId: number, secondaryItemId: number) => {
        setBreadcrumbsList(
            breadcrumbsList?.map((item) => (
                item.id === mainItemId
                    ? {
                        ...item,
                        active: true,
                        items: item.items ? item.items.map((secondaryItem) => (
                            {
                                ...secondaryItem,
                                active: secondaryItem.id === secondaryItemId,
                            }
                        )) : null,
                    }
                    : {
                        ...item,
                        active: false,
                        items: item.items ? item.items.map((secondaryItem) => (
                            {
                                ...secondaryItem,
                                active: false,
                            }
                        )) : null,
                    }
            )),
        );
    }, [breadcrumbsList]);

    useEffect(() => {
        if (
            !breadcrumbsList.find((item) => item.active)
            || (!breadcrumbsList[0].active && location.pathname === getRouteStudents())
            || (!breadcrumbsList[0].active && location.pathname === getRouteReferences())
            || (!breadcrumbsList[0].active && location.pathname === getRouteEducation())
        ) {
            setActiveMainMenuItem(1);
        }
    }, [breadcrumbsList, location.pathname, setActiveMainMenuItem]);

    useEffect(() => {
        if (location.pathname.includes(getRouteStudents())) {
            setBreadcrumbsList(studentsPageBreadcrumbs);
        } else if (location.pathname.includes(getRouteEducation())) {
            setBreadcrumbsList(educationPageBreadcrumbs);
        } else if (location.pathname.includes(getRouteReferences())) {
            setBreadcrumbsList(curriculumReferencesBreadcrumbs);
        } else {
            setBreadcrumbsList([
                {
                    id: 1,
                    name: '',
                    pathname: '',
                    items: null,
                    active: false,
                },
            ]);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={classNames(cls.SecondaryMenu, {}, [className])}>
            <div className={cls.items}>
                {breadcrumbsList?.map((menuItem) => (
                    // eslint-disable-next-line no-nested-ternary
                    menuItem.items
                        ? (
                            <div
                                key={menuItem.id}
                                className={classNames(
                                    cls.item,
                                    { [cls.active]: menuItem.active },
                                    [cls.withChildrenItems],
                                )}
                            >
                                {menuItem.name}
                                <span className={cls.menuIcon}>
                                    <CIcon icon={cilChevronBottom} />
                                </span>

                                <div className={cls.subItems}>
                                    {menuItem.items.map((subItem) => (
                                        subItem.active
                                            ? (
                                                <div
                                                    key={subItem.id}
                                                    className={classNames(
                                                        cls.subItemLink,
                                                        { [cls.subItemActive]: subItem.active },
                                                        [],
                                                    )}
                                                >
                                                    {subItem.name}
                                                </div>
                                            )
                                            : (
                                                <AppLink
                                                    key={subItem.id}
                                                    to={subItem.pathname!}
                                                    className={cls.subItemLink}
                                                    onClick={() => {
                                                        setActiveSecondaryMenuItem(menuItem.id, subItem.id);
                                                    }}
                                                >
                                                    {subItem.name}
                                                </AppLink>
                                            )
                                    ))}
                                </div>
                            </div>
                        )
                        : (
                            menuItem.active
                                ? (
                                    <div
                                        key={menuItem.id}
                                        className={classNames(cls.item, { [cls.active]: menuItem.active })}
                                    >
                                        {menuItem.name}
                                    </div>
                                )
                                : (
                                    <AppLink
                                        key={menuItem.id}
                                        to={menuItem.pathname!}
                                        className={cls.item}
                                        onClick={() => { setActiveMainMenuItem(menuItem.id); }}
                                    >
                                        {menuItem.name}
                                    </AppLink>
                                )
                        )
                ))}
            </div>
        </div>
    );
});
