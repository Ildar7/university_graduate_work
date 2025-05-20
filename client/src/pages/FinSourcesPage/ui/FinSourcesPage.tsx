import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddFinSource, addFinSourceReducer } from 'features/FinSources/AddFinSource';
import {
    FinSources,
    finSourcesActions,
    finSourcesReducer, FinSourcesType, fetchFinSources,
    getFinSourcesData,
    getFinSourcesError,
    getFinSourcesIsLoading,
    getFinSourcesLimit,
    getFinSourcesPage,
} from 'entities/FinSources';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { finSourcesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { finSourceDetailReducer } from 'entities/FinSourceDetail';
import { editFinSourceReducer } from 'features/FinSources/EditFinSource';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';
import cls from './FinSourcesPage.module.scss';

interface FinSourcesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    finSources: finSourcesReducer,
    addFinSource: addFinSourceReducer,
    finSourcesDetail: finSourceDetailReducer,
    editFinSource: editFinSourceReducer,
};

const exportDisabled = true;
const FinSourcesPage = (props: FinSourcesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewFinSource, setVisibleAddNewFinSource] = useState(false);
    const finSourcesData = useSelector(getFinSourcesData);
    const isLoadingFinSources = useSelector(getFinSourcesIsLoading);
    const errorFinSources = useSelector(getFinSourcesError);
    const finSourcesLimit = useSelector(getFinSourcesLimit);
    const finSourcesPage = useSelector(getFinSourcesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<FinSourcesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(finSourcesActions.setLimit(limit));
        dispatch(fetchFinSources());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(finSourcesActions.setPage(page));
        dispatch(fetchFinSources());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(finSourcesData?.data || []);
    }, [finSourcesData]);

    useEffect(() => {
        const filteredData = finSourcesSearchFilter(searchValue, finSourcesData?.data || []);
        setSearchedData(filteredData || []);
    }, [finSourcesData, searchValue]);

    useEffect(() => {
        dispatch(fetchFinSources());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Финансовая помощь"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={cls.FinSourcesPage}>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorFinSources}
                            isLoading={isLoadingFinSources}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewFinSource}
                            addingModalText="Добавить финансовую помощь"
                            error={errorFinSources}
                            isLoading={isLoadingFinSources}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddFinSource
                                visible={visibleAddNewFinSource}
                                setVisible={setVisibleAddNewFinSource}
                            />
                        </TableConfig>
                    </div>
                    <FinSources
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={finSourcesData?.pagination}
                            itemsLimit={finSourcesLimit!}
                            withRecords
                            isLoading={isLoadingFinSources!}
                            error={errorFinSources}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={finSourcesPage!}
                            isLoading={isLoadingFinSources!}
                            error={errorFinSources}
                            paginationData={finSourcesData?.pagination}
                        />
                    </div>
                </div>
                {errorFinSources && <TimeoutErrorToast error={errorFinSources} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default FinSourcesPage;
