import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import {
    EmployeeEducations,
    employeeEducationsActions,
    employeeEducationsReducer,
    EmployeeEducationsType,
    fetchEmployeeEducations,
    getEmployeeEducationsData,
    getEmployeeEducationsError,
    getEmployeeEducationsIsLoading,
    getEmployeeEducationsLimit,
    getEmployeeEducationsPage,
} from 'entities/EmployeeEducations';
import { employeeEducationsSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { AddEmployeeEducation, addEmployeeEducationReducer } from 'features/EmployeeEducations/AddEmployeeEducation';
import { employeeEducationDetailReducer } from 'entities/EmployeeEducationDetail';
import { editEmployeeEducationReducer } from 'features/EmployeeEducations/EditEmployeeEducation';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { employeesPageBreadcrumbs } from 'widgets/Breadcrumb/const/employees';

interface EmployeeEducationsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    employeeEducations: employeeEducationsReducer,
    employeeEducationDetail: employeeEducationDetailReducer,
    addEmployeeEducation: addEmployeeEducationReducer,
    editEmployeeEducation: editEmployeeEducationReducer,
};

const exportDisabled = true;
const EmployeeEducationsPage = (props: EmployeeEducationsPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewEmployeeEducation, setVisibleAddNewEmployeeEducation] = useState(false);
    const employeeEducationsData = useSelector(getEmployeeEducationsData);
    const isLoadingEmployeeEducations = useSelector(getEmployeeEducationsIsLoading);
    const errorEmployeeEducations = useSelector(getEmployeeEducationsError);
    const employeeEducationsLimit = useSelector(getEmployeeEducationsLimit);
    const employeeEducationsPage = useSelector(getEmployeeEducationsPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<EmployeeEducationsType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onCloseAddEmployeeEducation = useCallback(() => {
        setVisibleAddNewEmployeeEducation(false);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(employeeEducationsActions.setLimit(limit));
        dispatch(fetchEmployeeEducations());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(employeeEducationsActions.setPage(page));
        dispatch(fetchEmployeeEducations());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(employeeEducationsData?.data || []);
    }, [employeeEducationsData]);

    useEffect(() => {
        const filteredData = employeeEducationsSearchFilter(searchValue, employeeEducationsData?.data || []);
        setSearchedData(filteredData || []);
    }, [employeeEducationsData, searchValue]);

    useEffect(() => {
        dispatch(fetchEmployeeEducations());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Виды образования"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorEmployeeEducations}
                            isLoading={isLoadingEmployeeEducations}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewEmployeeEducation}
                            addingModalText="Добавить вид образования"
                            error={errorEmployeeEducations}
                            isLoading={isLoadingEmployeeEducations}
                            references={employeesPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddEmployeeEducation
                                isOpen={visibleAddNewEmployeeEducation}
                                onClose={onCloseAddEmployeeEducation}
                            />
                        </TableConfig>
                    </div>
                    <EmployeeEducations
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={employeeEducationsData?.pagination}
                            itemsLimit={employeeEducationsLimit!}
                            withRecords
                            isLoading={isLoadingEmployeeEducations!}
                            error={errorEmployeeEducations}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={employeeEducationsPage!}
                            isLoading={isLoadingEmployeeEducations!}
                            error={errorEmployeeEducations}
                            paginationData={employeeEducationsData?.pagination}
                        />
                    </div>
                </div>
                {errorEmployeeEducations && <TimeoutErrorToast error={errorEmployeeEducations} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EmployeeEducationsPage;
