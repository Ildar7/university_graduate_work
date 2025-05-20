import { Search } from 'widgets/Search';
import React, { useCallback, useEffect, useState } from 'react';
import { TableConfig } from 'widgets/TableConfig';
import {
    Employees,
    employeesActions, employeesReducer,
    EmployeesType,
    fetchEmployees,
    getEmployeesData,
    getEmployeesError,
    getEmployeesIsLoading,
    getEmployeesLimit,
    getEmployeesPage,
} from 'entities/Employees';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddEmployee, addEmployeeReducer } from 'features/Employees/AddEmployee';
import { employeeDetailReducer } from 'entities/EmployeeDetail';
import { editEmployeeReducer } from 'features/Employees/EditEmployee';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { TableSettings } from 'widgets/TableConfig/ui/TableSettings/TableSettings';
import {
    EmployeesTableFields,
    employeesTableFieldsActions,
    employeesTableFieldsReducer,
    EmployeesTableFieldsType,
    getEmployeesTableFieldsData,
} from 'features/Employees/EmployeesTableFields';
import { employeeSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { tableSortActions } from 'features/TableSort';
import { employeesPageBreadcrumbs } from 'widgets/Breadcrumb/const/employees';
import { curriculumSubjectsReducer } from 'entities/CurriculumSubjects';
import { addEmployeeSubjectReducer } from 'features/Employees/AddEmployeeSubject';
import { employeeEducationsReducer } from 'entities/EmployeeEducations';
import { employeePositionsReducer } from 'entities/EmployeePositions';
import { addEmployeePositionToEmployeeReducer } from 'features/Employees/AddEmployeePosition';
import { employeeCategoriesReducer } from 'entities/EmployeeCategories';

const reducers: ReducersList = {
    employees: employeesReducer,
    employeesTableFields: employeesTableFieldsReducer,
    employeeDetail: employeeDetailReducer,
    addEmployee: addEmployeeReducer,
    editEmployee: editEmployeeReducer,
    curriculumSubjects: curriculumSubjectsReducer,
    addEmployeeSubject: addEmployeeSubjectReducer,
    employeeEducations: employeeEducationsReducer,
    employeePositions: employeePositionsReducer,
    employeeCategories: employeeCategoriesReducer,
    addEmployeePositionToEmployee: addEmployeePositionToEmployeeReducer,
};

const onlyExport = true;
const importDisabled = false;
const exportDisabled = true;
const printDisabled = true;

const EmployeesPage = () => {
    const dispatch = useAppDispatch();
    const employeesData = useSelector(getEmployeesData);
    const isLoadingEmployeesData = useSelector(getEmployeesIsLoading);
    const errorEmployeesData = useSelector(getEmployeesError);
    const tableFieldsData = useSelector(getEmployeesTableFieldsData);
    const employeesLimit = useSelector(getEmployeesLimit);
    const employeesPage = useSelector(getEmployeesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<EmployeesType[]>();
    const [visibleCells, setVisibleCells] = useState<EmployeesTableFieldsType>();
    const [visibleAddNewEmployee, setVisibleAddNewEmployee] = useState(false);

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onSaveFields = useCallback(() => {
        dispatch(employeesTableFieldsActions.saveCheckedFields());
        setVisibleCells(tableFieldsData);
    }, [dispatch, tableFieldsData]);

    const onClearFields = useCallback(() => {
        dispatch(employeesTableFieldsActions.clearCheckedFields());
        setVisibleCells(tableFieldsData);
    }, [dispatch, tableFieldsData]);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(employeesActions.setLimit(limit));
        dispatch(fetchEmployees());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(employeesActions.setPage(page));
        dispatch(fetchEmployees());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(employeesData?.data || []);
    }, [employeesData]);

    useEffect(() => {
        const filteredData = employeeSearchFilter(searchValue, employeesData?.data || []);
        setSearchedData(filteredData || []);
    }, [employeesData, searchValue]);

    useEffect(() => {
        setVisibleCells(tableFieldsData);
    }, [tableFieldsData]);

    useEffect(() => {
        dispatch(tableSortActions.setSort('employee_id'));
        dispatch(fetchEmployees());
        dispatch(employeesTableFieldsActions.initFieldsData());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Сотрудники"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Введите для поиска по ФИО..."
                            error={errorEmployeesData}
                            isLoading={isLoadingEmployeesData}
                        />
                        <TableConfig
                            onSaveFields={onSaveFields}
                            onClearFields={onClearFields}
                            setVisibleAddNewField={setVisibleAddNewEmployee}
                            addingModalText="Добавить сотрудника"
                            error={errorEmployeesData}
                            isLoading={isLoadingEmployeesData}
                            references={employeesPageBreadcrumbs}
                            referencesTitle="Справочники"
                            TableFieldsContent={EmployeesTableFields}
                        >
                            <AddEmployee
                                visible={visibleAddNewEmployee}
                                setVisible={setVisibleAddNewEmployee}
                            />
                        </TableConfig>
                    </div>
                    <Employees
                        data={searchedData || []}
                        visibleCells={visibleCells}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        {employeesLimit && (
                            <LimitShow
                                data={searchedData || []}
                                onChange={onChangePaginationLimit}
                                onChangePage={onChangePaginationPage}
                                paginationData={employeesData?.pagination}
                                itemsLimit={employeesLimit}
                                withRecords
                                isLoading={isLoadingEmployeesData!}
                                error={errorEmployeesData}
                            />
                        )}
                        {employeesPage && (
                            <Pagintaion
                                data={searchedData || []}
                                onChange={onChangePaginationPage}
                                itemsPage={employeesPage}
                                isLoading={isLoadingEmployeesData!}
                                error={errorEmployeesData}
                                paginationData={employeesData?.pagination}
                            />
                        )}
                    </div>
                    <TableSettings
                        onlyExport={onlyExport}
                        importDisabled={importDisabled}
                        exportDisabled={exportDisabled}
                        printDisabled={printDisabled}
                        error={errorEmployeesData}
                        isLoading={isLoadingEmployeesData}
                    />
                </div>
                {errorEmployeesData && <TimeoutErrorToast error={errorEmployeesData} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EmployeesPage;
