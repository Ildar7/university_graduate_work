import { getRouteEmployeeCategories, getRouteEmployeeEducations, getRouteEmployeePositions } from 'shared/const/router';
import { BreadcrumbList } from 'widgets/Breadcrumb';

export const employeesPageBreadcrumbs: BreadcrumbList[] = [
    {
        id: 1,
        name: 'Категории',
        pathname: getRouteEmployeeCategories(),
        active: window.location.pathname === getRouteEmployeeCategories(),
        items: null,
    },
    {
        id: 2,
        name: 'Должности',
        pathname: getRouteEmployeePositions(),
        active: window.location.pathname === getRouteEmployeePositions(),
        items: null,
    },
    {
        id: 3,
        name: 'Виды образования',
        pathname: getRouteEmployeeEducations(),
        active: window.location.pathname === getRouteEmployeeEducations(),
        items: null,
    },
];
