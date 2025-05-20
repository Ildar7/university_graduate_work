import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchStandardCurriculum,
    getStandardCurriculumData,
    getStandardCurriculumError,
    getStandardCurriculumIsLoading,
    StandardCurriculum,
    standardCurriculumReducer,
    StandardCurriculumType,
} from 'entities/StandardCurriculum';
import { TableConfig } from 'widgets/TableConfig';
import { standardCurriculumSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { getRouteAddStandardCurriculum } from 'shared/const/router';
import cls from './StandardCurriculumPage.module.scss';

interface StandardCurriculumPageProps {
    className?: string;
}

const reducers: ReducersList = {
    standardCurriculum: standardCurriculumReducer,
};

const exportDisabled = true;
const StandardCurriculumPage = (props: StandardCurriculumPageProps) => {
    const {
        className,
    } = props;
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<StandardCurriculumType[]>();

    const dispatch = useAppDispatch();
    const standardCurriculum = useSelector(getStandardCurriculumData);
    const standardCurriculumIsLoading = useSelector(getStandardCurriculumIsLoading);
    const standardCurriculumError = useSelector(getStandardCurriculumError);

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    useEffect(() => {
        setSearchedData(standardCurriculum || []);
    }, [standardCurriculum]);

    useEffect(() => {
        const filteredData = standardCurriculumSearchFilter(searchValue, standardCurriculum || []);
        setSearchedData(filteredData || []);
    }, [standardCurriculum, searchValue]);

    useEffect(() => {
        dispatch(fetchStandardCurriculum());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Типовой учебный план"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.StandardCurriculumPage, {}, [className])}>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по шифру и названию специальности"
                            error={standardCurriculumError}
                            isLoading={standardCurriculumIsLoading}
                        />
                        <TableConfig
                            onlyAdding
                            addingModalText="Добавить учебный план"
                            error={standardCurriculumError}
                            isLoading={standardCurriculumIsLoading}
                            pathname={getRouteAddStandardCurriculum()}
                        >
                            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
                            <></>
                        </TableConfig>
                    </div>
                    <StandardCurriculum
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                </div>
                {standardCurriculumError && <TimeoutErrorToast error={standardCurriculumError} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default StandardCurriculumPage;
