import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AddStandardCurriculum, addStandardCurriculumReducer } from 'features/StandardCurriculum/AddStandardCurriculum';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { useEffect } from 'react';
import { fetchSpecialties, specialtiesReducer } from 'entities/Specialties';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { tableSortActions } from 'features/TableSort';
import {
    educationalModulesActions,
    educationalModulesReducer,
    fetchEducationalModules,
} from 'entities/EducationalModules';
import { qualificationsReducer } from 'entities/Qualifications';
import { fetchCollegeCoreOptions, settingsMainCollegeReducer } from 'entities/Settings/SettingsMainCollege';
import cls from './AddStandardCurriculumPage.module.scss';

interface AddStandardCurriculumProps {
    className?: string;
}

const reducers: ReducersList = {
    addStandardCurriculum: addStandardCurriculumReducer,
    specialties: specialtiesReducer,
    eduModules: educationalModulesReducer,
    qualifications: qualificationsReducer,
    settingsMainCollege: settingsMainCollegeReducer,
};
const AddStandardCurriculumPage = (props: AddStandardCurriculumProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_spec'));
        dispatch(fetchSpecialties());
        dispatch(fetchCollegeCoreOptions());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Добавить учебный план"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.AddStandardCurriculum, {}, [className])}>
                    <Text
                        className={cls.title}
                        size={TextSize.XL}
                        weight={TextWeight.SEMIBOLD}
                    >
                        Новый типовой учебный план
                    </Text>

                    <AddStandardCurriculum />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default AddStandardCurriculumPage;
