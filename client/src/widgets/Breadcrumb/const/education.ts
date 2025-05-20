import { BreadcrumbList } from 'widgets/Breadcrumb';
import {
    getRouteEducation, getRouteEduForms, getRoutePerformanceTypes, getRoutePracticeTypes, getRouteQualifications,
} from 'shared/const/router';

export const educationPageBreadcrumbs: BreadcrumbList[] = [
    {
        id: 1,
        name: 'Специальности',
        pathname: getRouteEducation(),
        items: null,
        active: window.location.pathname === getRouteEducation(),
    },
    {
        id: 2,
        name: 'Квалификация',
        pathname: getRouteQualifications(),
        items: null,
        active: window.location.pathname === getRouteQualifications(),
    },
    {
        id: 3,
        name: 'Формы обучения',
        pathname: getRouteEduForms(),
        items: null,
        active: window.location.pathname === getRouteEduForms(),
    },
    {
        id: 4,
        name: 'Виды практики',
        pathname: getRoutePracticeTypes(),
        items: null,
        active: window.location.pathname === getRoutePracticeTypes(),
    },
    {
        id: 5,
        name: 'Категории успеваемости',
        pathname: getRoutePerformanceTypes(),
        items: null,
        active: window.location.pathname === getRoutePerformanceTypes(),
    },
];
