import {
    getRouteCurriculumSubjects,
    getRouteEducation,
    getRouteEduForms, getRouteEmployees,
    getRoutePerformanceTypes,
    getRoutePracticeTypes,
    getRouteQualifications,
    getRouteReferences,
    getRouteSettingsForDevelopers,
    getRouteSettingsMain,
    getRouteStandardCurriculum,
    getRouteStudentGroups,
    getRouteStudents, getRouteSubjectsSchedule, getRouteTrainingSchedule,
    getRouteWorkingCurriculum,
} from 'shared/const/router';
import StudentsIcons from 'shared/assets/icons/students.svg';
import EmployeeIcons from 'shared/assets/icons/employee.svg';
import { getAcademicYear } from 'shared/lib/helpers/getAcademicYear/getAcademicYear';

export const subListLinks = {
    contingent: [
        {
            name: 'Студенты',
            link: getRouteStudents(),
            icon: StudentsIcons,
        },
        {
            name: 'Группы',
            link: getRouteStudentGroups(),
        },
    ],
    education: [
        {
            name: 'Специальности',
            link: getRouteEducation(),
        },
        {
            name: 'Квалификации',
            link: getRouteQualifications(),
        },
        {
            name: 'Формы обучения',
            link: getRouteEduForms(),
        },
    ],
    learningProcess: [
        {
            name: 'Образовательные модули',
            link: getRouteReferences(),
        },
        {
            name: 'Дисциплины',
            link: getRouteCurriculumSubjects(),
        },
        {
            name: 'ТУПы',
            link: getRouteStandardCurriculum(),
        },
        {
            name: 'ГУПы',
            link: getRouteTrainingSchedule(),
        },
        {
            name: 'РУПы',
            link: getRouteWorkingCurriculum(),
        },
        {
            name: 'Расписание дисциплин',
            link: getRouteSubjectsSchedule(),
        },
    ],
    system: [
        {
            name: 'Настройки',
            link: getRouteSettingsMain(),
        },
        {
            name: 'Для разработчиков',
            link: getRouteSettingsForDevelopers(),
        },
    ],
};
