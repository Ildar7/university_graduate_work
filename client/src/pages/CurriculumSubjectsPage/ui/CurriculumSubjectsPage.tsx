import { HelmetProvider } from 'app/providers/HelmetProvider';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { curriculumSubjectsSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import {
    CurriculumSubjects,
    curriculumSubjectsReducer,
    CurriculumSubjectsType,
    fetchCurriculumSubjects,
    getCurriculumSubjectsData,
    getCurriculumSubjectsError,
    getCurriculumSubjectsIsLoading,
} from 'entities/CurriculumSubjects';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AddCurriculumSubject, addCurriculumSubjectReducer } from 'features/CurriculumSubjects/AddCurriculumSubject';
import { curriculumSubjectsDetailReducer } from 'entities/CurriculumSubjectsDetail';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { editCurriculumSubjectReducer } from 'features/CurriculumSubjects/EditCurriculumSubject';
import { educationalModulesReducer, fetchEducationalModules, fetchEducationalUnits } from 'entities/EducationalModules';
import cls from './CurriculumSubjectsPage.module.scss';

interface CurriculumSubjectsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    curriculumSubjects: curriculumSubjectsReducer,
    curriculumSubjectsDetail: curriculumSubjectsDetailReducer,
    addCurriculumSubject: addCurriculumSubjectReducer,
    editCurriculumSubject: editCurriculumSubjectReducer,
    eduModules: educationalModulesReducer,
};

const exportDisabled = true;
const CurriculumSubjectsPage = (props: CurriculumSubjectsPageProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const [visibleAddNewCurriculumSubjects, setVisibleAddNewCurriculumSubjects] = useState(false);
    const curriculumSubjectsData = useSelector(getCurriculumSubjectsData);
    const isLoadingCurriculumSubjects = useSelector(getCurriculumSubjectsIsLoading);
    const errorCurriculumSubjects = useSelector(getCurriculumSubjectsError);

    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<CurriculumSubjectsType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    useEffect(() => {
        setSearchedData(curriculumSubjectsData || []);
    }, [curriculumSubjectsData]);

    useEffect(() => {
        const filteredData = curriculumSubjectsSearchFilter(searchValue, curriculumSubjectsData || []);
        setSearchedData(filteredData || []);
    }, [curriculumSubjectsData, searchValue]);

    useEffect(() => {
        dispatch(fetchCurriculumSubjects());
        dispatch(fetchEducationalModules());
        dispatch(fetchEducationalUnits());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Дисциплины"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.CurriculumSubjectsPage, {}, [className])}>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по названию"
                            error={errorCurriculumSubjects}
                            isLoading={isLoadingCurriculumSubjects}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewCurriculumSubjects}
                            addingModalText="Добавить дисциплину"
                            error={errorCurriculumSubjects}
                            isLoading={isLoadingCurriculumSubjects}
                        >
                            <AddCurriculumSubject
                                visible={visibleAddNewCurriculumSubjects}
                                setVisible={setVisibleAddNewCurriculumSubjects}
                            />
                        </TableConfig>
                    </div>
                    <CurriculumSubjects
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                </div>
                {errorCurriculumSubjects && <TimeoutErrorToast error={errorCurriculumSubjects} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default CurriculumSubjectsPage;
