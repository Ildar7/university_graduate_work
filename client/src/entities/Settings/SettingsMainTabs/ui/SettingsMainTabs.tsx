import { CNav, CNavItem, CNavLink } from '@coreui/react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getSettingsMainCollegeData,
    getSettingsMainCollegeIsLoading,
    getSettingsMainCollegeTabs,
    settingsMainCollegeActions,
} from 'entities/Settings/SettingsMainCollege';
import { useEffect } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './SettingsMainTabs.module.scss';

interface SettingsMainTabsProps {
    className?: string;
}
export const SettingsMainTabs = (props: SettingsMainTabsProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const mainSettings = useSelector(getSettingsMainCollegeData);
    const mainSettingsIsLoading = useSelector(getSettingsMainCollegeIsLoading);
    const mainSettingsTabs = useSelector(getSettingsMainCollegeTabs);

    const mainSettingsKeys = mainSettings && Object.keys(mainSettings);

    const changeActiveTab = (tabName: string) => {
        dispatch(settingsMainCollegeActions.changeActiveTab(tabName));
    };

    useEffect(() => {
        if (!mainSettingsIsLoading && mainSettingsKeys && mainSettingsKeys.length) {
            dispatch(settingsMainCollegeActions.setTabs(mainSettingsKeys.map((setting, index) => {
                if (index === 0) {
                    return {
                        name: setting,
                        title: mainSettings[setting].title,
                        active: true,
                    };
                }

                return {
                    name: setting,
                    title: mainSettings[setting].title,
                    active: false,
                };
            })));
        }
        // eslint-disable-next-line
    }, [dispatch, mainSettingsIsLoading]);

    return (
        <CNav variant="tabs" className={classNames(cls.SettingsMainTabs, {}, [className])}>
            {
                mainSettingsTabs?.map((tab) => (
                    <CNavItem
                        key={tab.name}
                    >
                        <CNavLink
                            active={tab.active}
                            onClick={() => { changeActiveTab(tab.name); }}
                            className={classNames(cls.navLink, { [cls.navLinkActive]: tab.active }, [])}
                        >
                            {tab.title}
                        </CNavLink>
                    </CNavItem>
                ))
            }
        </CNav>
    );
};
