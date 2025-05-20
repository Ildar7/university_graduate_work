import { ButtonTheme } from 'shared/ui/Button/Button';
import { TabsType } from '../model/types/addStudent';

export const tabsButtonsItems: TabsType[] = [
    {
        id: 1,
        title: 'Личные данные',
        theme: ButtonTheme.BACKGROUND,
        active: true,
    },
    {
        id: 2,
        title: 'Обучение',
        theme: ButtonTheme.LIGHT,
        active: false,
    },
    {
        id: 3,
        title: 'Проживание',
        theme: ButtonTheme.LIGHT,
        active: false,
    },
    {
        id: 4,
        title: 'Фин. и мат. обеспечение',
        theme: ButtonTheme.LIGHT,
        active: false,
    },
    {
        id: 5,
        title: 'Особенности',
        theme: ButtonTheme.LIGHT,
        active: false,
    },
];
