import {
    getRouteArrivalSources,
    getRouteEduLanguages,
    getRouteEnrollmentTypes,
    getRouteEventsTypes,
    getRouteFinishedEduTypes,
    getRouteFinSources,
    getRouteResidenceTypes,
    getRouteStudentClubs,
    getRouteStudentSections,
    getRouteStudyDirections,
} from 'shared/const/router';
import { BreadcrumbList } from 'widgets/Breadcrumb';

export const studentsPageBreadcrumbs: BreadcrumbList[] = [
    {
        id: 1,
        name: 'Обучение',
        items: [
            {
                id: 1,
                name: 'Язык обучения',
                pathname: getRouteEduLanguages(),
                items: null,
                active: window.location.pathname.includes(getRouteEduLanguages()),
            },
            {
                id: 2,
                name: 'Источник финансирования',
                pathname: getRouteFinSources(),
                items: null,
                active: window.location.pathname.includes(getRouteFinSources()),
            },
            {
                id: 3,
                name: 'Типы зачисления',
                pathname: getRouteEnrollmentTypes(),
                items: null,
                active: window.location.pathname.includes(getRouteEnrollmentTypes()),
            },
            {
                id: 4,
                name: 'Типы окончания обучения',
                pathname: getRouteFinishedEduTypes(),
                items: null,
                active: window.location.pathname.includes(getRouteFinishedEduTypes()),
            },
        ],
        active: window.location.pathname.includes('/students/education'),
    },
    {
        id: 2,
        name: 'Проживание',
        items: [
            {
                id: 1,
                name: 'Место рождения',
                pathname: getRouteArrivalSources(),
                items: null,
                active: window.location.pathname.includes(getRouteArrivalSources()),
            },
            {
                id: 2,
                name: 'Местожительства',
                pathname: getRouteResidenceTypes(),
                items: null,
                active: window.location.pathname.includes(getRouteResidenceTypes()),
            },
        ],
        active: window.location.pathname.includes('/students/habitation'),
    },
    {
        id: 3,
        name: 'Секции и олимпиады',
        items: [
            {
                id: 1,
                name: 'Направления олимпиады',
                pathname: getRouteStudyDirections(),
                items: null,
                active: window.location.pathname.includes(getRouteStudyDirections()),
            },
        ],
        active: window.location.pathname.includes('/students/olympiads'),
    },
];
