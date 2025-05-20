import { ButtonTheme } from 'shared/ui/Button/Button';
import { TabsType } from '../model/types/addEmployee';

export const tabsButtonsItems: TabsType[] = [
    {
        id: 1,
        title: 'Личные данные',
        theme: ButtonTheme.BACKGROUND,
        active: true,
    },
    {
        id: 2,
        title: 'Проф. деятельность',
        theme: ButtonTheme.LIGHT,
        active: false,
    },
];
