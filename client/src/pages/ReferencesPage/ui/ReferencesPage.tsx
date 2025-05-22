import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import {
    EducationalModules,
    EducationalModulesData,
    educationalModulesReducer,
    fetchEducationalModules, fetchEducationalUnits,
    getEduModulesData,
    getEduModulesError,
    getEduModulesIsLoading,
    getEduUnitsData,
    getEduUnitsError,
    getEduUnitsIsLoading,
} from 'entities/EducationalModules';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import React, { useCallback, useEffect, useState } from 'react';
import { eduModulesAndUnitsSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { useSelector } from 'react-redux';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddEduModule, addEduModuleReducer } from 'features/EduModules/AddEduModule';
import { educationalModuleDetailReducer } from 'entities/EducationalModuleDetail';
import { editEduModuleReducer } from 'features/EduModules/EditEduModule';
import { addEduUnitReducer } from 'features/EduUnits/AddEduUnit';
import { editEduUnitReducer } from 'features/EduUnits/EditEduUnit';
import { educationalUnitDetailReducer } from 'entities/EducationalUnitDetail';
import cls from './ReferencesPage.module.scss';

interface ReferencesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    eduModules: educationalModulesReducer,
    addEduModule: addEduModuleReducer,
    eduModuleDetail: educationalModuleDetailReducer,
    editEduModule: editEduModuleReducer,
    addEduUnit: addEduUnitReducer,
    eduUnitDetail: educationalUnitDetailReducer,
    editEduUnit: editEduUnitReducer,
};
const ReferencesPage = (props: ReferencesPageProps) => {
    const {
        className,
    } = props;
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<EducationalModulesData[]>();

    const dispatch = useAppDispatch();
    const modules = useSelector(getEduModulesData);
    const units = useSelector(getEduUnitsData);
    const modulesIsLoading = useSelector(getEduModulesIsLoading);
    const unitsIsLoading = useSelector(getEduUnitsIsLoading);
    const modulesError = useSelector(getEduModulesError);
    const unitsError = useSelector(getEduUnitsError);

    const [visibleAddEduModule, setVisibleAddEduModule] = useState(false);

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    useEffect(() => {
        setSearchedData(modules || []);
    }, [modules]);

    useEffect(() => {
        const filteredData = eduModulesAndUnitsSearchFilter(searchValue, modules || [], units || []);
        setSearchedData(filteredData || []);
    }, [modules, searchValue, units]);

    useEffect(() => {
        dispatch(fetchEducationalModules());
        dispatch(fetchEducationalUnits());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Образовательные модули"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.ReferencesPage, {}, [className])}>
                    <Search
                        value={searchValue}
                        onChange={onSearch}
                        searchText="Поиск по модулям и модульным единицам"
                        error={modulesError || unitsError}
                        isLoading={modulesIsLoading || unitsIsLoading}
                    />
                    <EducationalModules
                        data={searchedData || []}
                        className={cls.modules}
                    />

                    <AddEduModule
                        visible={visibleAddEduModule}
                        setVisible={setVisibleAddEduModule}
                    />
                </div>
                {modulesError && <TimeoutErrorToast error={modulesError} />}
            </DynamicModuleLoader>

        </HelmetProvider>
    );
};

export default ReferencesPage;
