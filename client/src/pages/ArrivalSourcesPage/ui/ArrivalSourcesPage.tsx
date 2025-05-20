import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddArrivalSource, addArrivalSourceReducer } from 'features/ArrivalSources/AddArrivalSource';
import {
    ArrivalSources,
    arrivalSourcesActions,
    arrivalSourcesReducer, ArrivalSourcesType, fetchArrivalSources,
    getArrivalSourcesData,
    getArrivalSourcesError,
    getArrivalSourcesIsLoading,
    getArrivalSourcesLimit,
    getArrivalSourcesPage,
} from 'entities/ArrivalSources';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { arrivalSourcesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { arrivalSourceDetailReducer } from 'entities/ArrivalSourceDetail';
import { editArrivalSourceReducer } from 'features/ArrivalSources/EditArrivalSource';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';

interface ArrivalSourcesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    arrivalSources: arrivalSourcesReducer,
    addArrivalSource: addArrivalSourceReducer,
    arrivalSourceDetail: arrivalSourceDetailReducer,
    editArrivalSource: editArrivalSourceReducer,
};

const exportDisabled = true;
const ArrivalSourcesPage = (props: ArrivalSourcesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewArrivalSource, setVisibleAddNewArrivalSource] = useState(false);
    const arrivalSourcesData = useSelector(getArrivalSourcesData);
    const isLoadingArrivalSources = useSelector(getArrivalSourcesIsLoading);
    const errorArrivalSources = useSelector(getArrivalSourcesError);
    const arrivalSourcesLimit = useSelector(getArrivalSourcesLimit);
    const arrivalSourcesPage = useSelector(getArrivalSourcesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<ArrivalSourcesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(arrivalSourcesActions.setLimit(limit));
        dispatch(fetchArrivalSources());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(arrivalSourcesActions.setPage(page));
        dispatch(fetchArrivalSources());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(arrivalSourcesData?.data || []);
    }, [arrivalSourcesData]);

    useEffect(() => {
        const filteredData = arrivalSourcesSearchFilter(searchValue, arrivalSourcesData?.data || []);
        setSearchedData(filteredData || []);
    }, [arrivalSourcesData, searchValue]);

    useEffect(() => {
        dispatch(fetchArrivalSources());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Место рождения"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorArrivalSources}
                            isLoading={isLoadingArrivalSources}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewArrivalSource}
                            addingModalText="Добавить место рождения"
                            error={errorArrivalSources}
                            isLoading={isLoadingArrivalSources}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddArrivalSource
                                visible={visibleAddNewArrivalSource}
                                setVisible={setVisibleAddNewArrivalSource}
                            />
                        </TableConfig>
                    </div>
                    <ArrivalSources
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={arrivalSourcesData?.pagination}
                            itemsLimit={arrivalSourcesLimit!}
                            withRecords
                            isLoading={isLoadingArrivalSources!}
                            error={errorArrivalSources}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={arrivalSourcesPage!}
                            isLoading={isLoadingArrivalSources!}
                            error={errorArrivalSources}
                            paginationData={arrivalSourcesData?.pagination}
                        />
                    </div>
                </div>
                {errorArrivalSources && <TimeoutErrorToast error={errorArrivalSources} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default ArrivalSourcesPage;
