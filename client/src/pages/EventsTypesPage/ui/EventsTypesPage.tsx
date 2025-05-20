import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddEventsType, addEventsTypeReducer } from 'features/EventsTypes/AddEventsType';
import {
    EventsTypes,
    eventsTypesActions,
    eventsTypesReducer, EventsTypesType, fetchEventsTypes,
    getEventsTypesData,
    getEventsTypesError,
    getEventsTypesIsLoading,
    getEventsTypesLimit,
    getEventsTypesPage,
} from 'entities/EventsTypes';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { eventsTypesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { eventsTypeDetailReducer } from 'entities/EventsTypeDetail';
import { editEventsTypeReducer } from 'features/EventsTypes/EditEventsType';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';

interface EventsTypesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    eventsTypes: eventsTypesReducer,
    addEventsType: addEventsTypeReducer,
    eventsTypeDetail: eventsTypeDetailReducer,
    editEventsType: editEventsTypeReducer,
};

const exportDisabled = true;
const EventsTypesPage = (props: EventsTypesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewEventsType, setVisibleAddNewEventsType] = useState(false);
    const eventsTypesData = useSelector(getEventsTypesData);
    const isLoadingEventsTypes = useSelector(getEventsTypesIsLoading);
    const errorEventsTypes = useSelector(getEventsTypesError);
    const eventsTypesLimit = useSelector(getEventsTypesLimit);
    const eventsTypesPage = useSelector(getEventsTypesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<EventsTypesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(eventsTypesActions.setLimit(limit));
        dispatch(fetchEventsTypes());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(eventsTypesActions.setPage(page));
        dispatch(fetchEventsTypes());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(eventsTypesData?.data || []);
    }, [eventsTypesData]);

    useEffect(() => {
        const filteredData = eventsTypesSearchFilter(searchValue, eventsTypesData?.data || []);
        setSearchedData(filteredData || []);
    }, [eventsTypesData, searchValue]);

    useEffect(() => {
        dispatch(fetchEventsTypes());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Тип соревнования"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorEventsTypes}
                            isLoading={isLoadingEventsTypes}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewEventsType}
                            addingModalText="Добавить тип соревнования"
                            error={errorEventsTypes}
                            isLoading={isLoadingEventsTypes}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddEventsType
                                visible={visibleAddNewEventsType}
                                setVisible={setVisibleAddNewEventsType}
                            />
                        </TableConfig>
                    </div>
                    <EventsTypes
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={eventsTypesData?.pagination}
                            itemsLimit={eventsTypesLimit!}
                            withRecords
                            isLoading={isLoadingEventsTypes!}
                            error={errorEventsTypes}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={eventsTypesPage!}
                            isLoading={isLoadingEventsTypes!}
                            error={errorEventsTypes}
                            paginationData={eventsTypesData?.pagination}
                        />
                    </div>
                </div>
                {errorEventsTypes && <TimeoutErrorToast error={errorEventsTypes} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EventsTypesPage;
