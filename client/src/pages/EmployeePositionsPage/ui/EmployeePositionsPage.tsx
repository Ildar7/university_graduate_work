import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import {
    EmployeePositions,
    employeePositionsActions,
    employeePositionsReducer,
    EmployeePositionsType,
    fetchEmployeePositions,
    getEmployeePositionsData,
    getEmployeePositionsError,
    getEmployeePositionsIsLoading,
    getEmployeePositionsLimit,
    getEmployeePositionsPage,
} from 'entities/EmployeePositions';
import { employeePositionsSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { AddEmployeePosition, addEmployeePositionReducer } from 'features/EmployeePositions/AddEmployeePosition';
import { employeePositionDetailReducer } from 'entities/EmployeePositionDetail';
import { editEmployeePositionReducer } from 'features/EmployeePositions/EditEmployeePosition';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { employeesPageBreadcrumbs } from 'widgets/Breadcrumb/const/employees';

interface EmployeePositionsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    employeePositions: employeePositionsReducer,
    employeePositionDetail: employeePositionDetailReducer,
    addEmployeePosition: addEmployeePositionReducer,
    editEmployeePosition: editEmployeePositionReducer,
};

const exportDisabled = true;
const EmployeePositionsPage = (props: EmployeePositionsPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewEmployeePosition, setVisibleAddNewEmployeePosition] = useState(false);
    const employeePositionsData = useSelector(getEmployeePositionsData);
    const isLoadingEmployeePositions = useSelector(getEmployeePositionsIsLoading);
    const errorEmployeePositions = useSelector(getEmployeePositionsError);
    const employeePositionsLimit = useSelector(getEmployeePositionsLimit);
    const employeePositionsPage = useSelector(getEmployeePositionsPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<EmployeePositionsType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onCloseAddEmployeePosition = useCallback(() => {
        setVisibleAddNewEmployeePosition(false);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(employeePositionsActions.setLimit(limit));
        dispatch(fetchEmployeePositions());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(employeePositionsActions.setPage(page));
        dispatch(fetchEmployeePositions());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(employeePositionsData?.data || []);
    }, [employeePositionsData]);

    useEffect(() => {
        const filteredData = employeePositionsSearchFilter(searchValue, employeePositionsData?.data || []);
        setSearchedData(filteredData || []);
    }, [employeePositionsData, searchValue]);

    useEffect(() => {
        dispatch(fetchEmployeePositions());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Должности"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorEmployeePositions}
                            isLoading={isLoadingEmployeePositions}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewEmployeePosition}
                            addingModalText="Добавить должность"
                            error={errorEmployeePositions}
                            isLoading={isLoadingEmployeePositions}
                            references={employeesPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddEmployeePosition
                                isOpen={visibleAddNewEmployeePosition}
                                onClose={onCloseAddEmployeePosition}
                            />
                        </TableConfig>
                    </div>
                    <EmployeePositions
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={employeePositionsData?.pagination}
                            itemsLimit={employeePositionsLimit!}
                            withRecords
                            isLoading={isLoadingEmployeePositions!}
                            error={errorEmployeePositions}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={employeePositionsPage!}
                            isLoading={isLoadingEmployeePositions!}
                            error={errorEmployeePositions}
                            paginationData={employeePositionsData?.pagination}
                        />
                    </div>
                </div>
                {errorEmployeePositions && <TimeoutErrorToast error={errorEmployeePositions} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EmployeePositionsPage;
