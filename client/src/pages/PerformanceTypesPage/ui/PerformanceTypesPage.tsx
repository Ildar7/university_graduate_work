import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddPerformanceType, addPerformanceTypeReducer } from 'features/PerformanceTypes/AddPerformanceType';
import {
    PerformanceTypes,
    performanceTypesActions,
    performanceTypesReducer, PerformanceTypesType, fetchPerformanceTypes,
    getPerformanceTypesData,
    getPerformanceTypesError,
    getPerformanceTypesIsLoading,
    getPerformanceTypesLimit,
    getPerformanceTypesPage,
} from 'entities/PerformanceTypes';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { performanceTypesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { performanceTypeDetailReducer } from 'entities/PerformanceTypeDetail';
import { editPerformanceTypeReducer } from 'features/PerformanceTypes/EditPerformanceType';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';

interface PerformanceTypesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    performanceTypes: performanceTypesReducer,
    addPerformanceType: addPerformanceTypeReducer,
    performanceTypeDetail: performanceTypeDetailReducer,
    editPerformanceType: editPerformanceTypeReducer,
};

const exportDisabled = true;
const PerformanceTypesPage = (props: PerformanceTypesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewPerformanceType, setVisibleAddNewPerformanceType] = useState(false);
    const performanceTypesData = useSelector(getPerformanceTypesData);
    const isLoadingPerformanceTypes = useSelector(getPerformanceTypesIsLoading);
    const errorPerformanceTypes = useSelector(getPerformanceTypesError);
    const performanceTypesLimit = useSelector(getPerformanceTypesLimit);
    const performanceTypesPage = useSelector(getPerformanceTypesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<PerformanceTypesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(performanceTypesActions.setLimit(limit));
        dispatch(fetchPerformanceTypes());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(performanceTypesActions.setPage(page));
        dispatch(fetchPerformanceTypes());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(performanceTypesData?.data || []);
    }, [performanceTypesData]);

    useEffect(() => {
        const filteredData = performanceTypesSearchFilter(searchValue, performanceTypesData?.data || []);
        setSearchedData(filteredData || []);
    }, [performanceTypesData, searchValue]);

    useEffect(() => {
        dispatch(fetchPerformanceTypes());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Категории успеваемости"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorPerformanceTypes}
                            isLoading={isLoadingPerformanceTypes}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewPerformanceType}
                            addingModalText="Добавить категорию"
                            error={errorPerformanceTypes}
                            isLoading={isLoadingPerformanceTypes}
                        >
                            <AddPerformanceType
                                visible={visibleAddNewPerformanceType}
                                setVisible={setVisibleAddNewPerformanceType}
                            />
                        </TableConfig>
                    </div>
                    <PerformanceTypes
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={performanceTypesData?.pagination}
                            itemsLimit={performanceTypesLimit!}
                            withRecords
                            isLoading={isLoadingPerformanceTypes!}
                            error={errorPerformanceTypes}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={performanceTypesPage!}
                            isLoading={isLoadingPerformanceTypes!}
                            error={errorPerformanceTypes}
                            paginationData={performanceTypesData?.pagination}
                        />
                    </div>
                </div>
                {errorPerformanceTypes && <TimeoutErrorToast error={errorPerformanceTypes} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default PerformanceTypesPage;
