import { BreadcrumbList } from 'widgets/Breadcrumb';
import { getRouteCurriculumSubjects, getRouteReferences } from 'shared/const/router';

export const curriculumReferencesBreadcrumbs: BreadcrumbList[] = [
    {
        id: 1,
        name: 'Образовательные модули',
        pathname: getRouteReferences(),
        items: null,
        active: window.location.pathname === getRouteReferences(),
    },
    {
        id: 2,
        name: 'Дисциплины',
        pathname: getRouteCurriculumSubjects(),
        items: null,
        active: window.location.pathname === getRouteCurriculumSubjects(),
    },
];
