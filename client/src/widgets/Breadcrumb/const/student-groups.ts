import { BreadcrumbList } from 'widgets/Breadcrumb';
import {
    getRouteAddAssistantStudentGroups,
    getRouteAssistantAutoDistributionStudentGroups,
} from 'shared/const/router';

export const studentGroups: BreadcrumbList[] = [
    {
        id: 1,
        name: 'Создать группы студентов',
        pathname: getRouteAddAssistantStudentGroups(),
        active: window.location.pathname === getRouteAddAssistantStudentGroups(),
        items: null,
    },
    {
        id: 2,
        name: 'Распределить студентов по группам',
        pathname: getRouteAssistantAutoDistributionStudentGroups(),
        active: window.location.pathname === getRouteAssistantAutoDistributionStudentGroups(),
        items: null,
    },
];
