import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    EditStandardCurriculum,
    editStandardCurriculumReducer,
} from 'features/StandardCurriculum/EditStandardCurriculum';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import React, { useEffect } from 'react';
import { fetchSpecialties, specialtiesReducer } from 'entities/Specialties';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { tableSortActions } from 'features/TableSort';
import { educationalModulesReducer } from 'entities/EducationalModules';
import { qualificationsReducer } from 'entities/Qualifications';
import { fetchCollegeCoreOptions, settingsMainCollegeReducer } from 'entities/Settings/SettingsMainCollege';
import { useLocation } from 'react-router-dom';
import {
    fetchStandardCurriculumDetail, getStandardCurriculumDetailError,
    getStandardCurriculumDetailIsLoading,
    standardCurriculumDetailReducer,
} from 'entities/StandardCurriculumDetail';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './EditStandardCurriculumPage.module.scss';

interface EditStandardCurriculumProps {
    className?: string;
}

const reducers: ReducersList = {
    standardCurriculumDetail: standardCurriculumDetailReducer,
    editStandardCurriculum: editStandardCurriculumReducer,
    specialties: specialtiesReducer,
    eduModules: educationalModulesReducer,
    qualifications: qualificationsReducer,
    settingsMainCollege: settingsMainCollegeReducer,
};
const EditStandardCurriculumPage = (props: EditStandardCurriculumProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const curriculumPathnameItems = pathname.split('/');
    const curriculumId = curriculumPathnameItems[curriculumPathnameItems.length - 1];

    const curriculumIsLoading = useSelector(getStandardCurriculumDetailIsLoading);
    const curriculumError = useSelector(getStandardCurriculumDetailError);

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_spec'));
        dispatch(fetchSpecialties());
        dispatch(fetchCollegeCoreOptions());
        dispatch(fetchStandardCurriculumDetail(curriculumId));
    }, [curriculumId, dispatch]);

    let content;

    if (curriculumIsLoading) {
        content = (
            <Skeleton width="100%" height={400} />
        );
    } else if (curriculumError) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.XL}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
            >
                Произошла ошибка при загрузке данных о типовом учебном плане, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        content = (
            <>
                <Text
                    className={cls.title}
                    size={TextSize.XL}
                    weight={TextWeight.SEMIBOLD}
                >
                    Типовой учебный план №
                    {curriculumId}
                </Text>

                <EditStandardCurriculum />
            </>
        );
    }

    return (
        <HelmetProvider
            title="WhitePaper LMS - Редактировать учебный план"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(
                    cls.EditStandardCurriculum,
                    { [cls.centered]: !!curriculumError },
                    [className],
                )}
                >
                    {content}
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EditStandardCurriculumPage;
