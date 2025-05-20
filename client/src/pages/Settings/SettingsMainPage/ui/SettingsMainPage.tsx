import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    fetchCollegeCoreOptions,
    getSettingsMainCollegeChangeFieldIsLoading,
    getSettingsMainCollegeDataToChange,
    getSettingsMainCollegeError,
    getSettingsMainCollegeIsLoading,
    getSettingsMainCollegeTabs,
    SettingsMainCollege,
    settingsMainCollegeReducer,
} from 'entities/Settings/SettingsMainCollege';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { SettingsMainTabs } from 'entities/Settings/SettingsMainTabs';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import cls from './SettingsMainPage.module.scss';

interface SettingsMainPageProps {
  className?: string;
}

const reducers: ReducersList = {
    settingsMainCollege: settingsMainCollegeReducer,
};
const SettingsMainPage = (props: SettingsMainPageProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const settingsMainData = useSelector(getSettingsMainCollegeDataToChange);
    const settingsMainIsLoading = useSelector(getSettingsMainCollegeIsLoading);
    const settingsMainError = useSelector(getSettingsMainCollegeError);
    const collegeOptionChangedIsLoading = useSelector(getSettingsMainCollegeChangeFieldIsLoading);
    const settingsMainTabs = useSelector(getSettingsMainCollegeTabs);

    useEffect(() => {
        dispatch(fetchCollegeCoreOptions());
    }, [dispatch]);

    let content;

    if (settingsMainIsLoading || collegeOptionChangedIsLoading) {
        content = (
            <div className={cls.skeletons}>
                <Skeleton width="100%" height={43} border="8px" />
                <Skeleton width="100%" height={300} border="8px" />
            </div>
        );
    } else if (settingsMainError) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.L}
            >
                Произошла ошибка при загрузке, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <>
                <SettingsMainTabs />

                <SettingsMainCollege
                    options={settingsMainData && settingsMainTabs && settingsMainTabs.length
                        ? settingsMainData[settingsMainTabs.filter((tab) => tab.active)[0].name].options
                        : []}
                    activeTabName={settingsMainTabs && settingsMainTabs.length
                        ? settingsMainTabs.filter((tab) => tab.active)[0].name : ''}
                />
            </>
        );
    }

    return (
        <HelmetProvider
            title="WhitePaper LMS - Настройки"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.SettingsMainPage, {}, [className])}>
                    {content}
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default SettingsMainPage;
