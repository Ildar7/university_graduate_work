import {
    getRouteCurriculumSubjects,
    getRouteEducation,
    getRouteEduForms,
    getRouteQualifications,
    getRouteReferences,
    getRouteSettingsForDevelopers,
    getRouteSettingsMain,
    getRouteStudentGroups,
    getRouteStudents,
} from 'shared/const/router';
import StudentsIcons from 'shared/assets/icons/students.svg';

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
