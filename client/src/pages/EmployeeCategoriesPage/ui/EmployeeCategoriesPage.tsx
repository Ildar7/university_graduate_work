import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import {
    EmployeeCategories,
    employeeCategoriesActions,
    employeeCategoriesReducer,
    EmployeeCategoriesType,
    fetchEmployeeCategories,
    getEmployeeCategoriesData,
    getEmployeeCategoriesError,
    getEmployeeCategoriesIsLoading,
    getEmployeeCategoriesLimit,
    getEmployeeCategoriesPage,
} from 'entities/EmployeeCategories';
import { employeeCategoriesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { AddEmployeeCategory, addEmployeeCategoryReducer } from 'features/EmployeeCategories/AddEmployeeCategory';
import { employeeCategoryDetailReducer } from 'entities/EmployeeCategoryDetail';
import { editEmployeeCategoryReducer } from 'features/EmployeeCategories/EditEmployeeCategory';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { employeesPageBreadcrumbs } from 'widgets/Breadcrumb/const/employees';

interface EmployeeCategoriesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    employeeCategories: employeeCategoriesReducer,
    employeeCategoryDetail: employeeCategoryDetailReducer,
    addEmployeeCategory: addEmployeeCategoryReducer,
    editEmployeeCategory: editEmployeeCategoryReducer,
};

const exportDisabled = true;
const EmployeeCategoriesPage = (props: EmployeeCategoriesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewEmployeeCategory, setVisibleAddNewEmployeeCategory] = useState(false);
    const employeeCategoriesData = useSelector(getEmployeeCategoriesData);
    const isLoadingEmployeeCategories = useSelector(getEmployeeCategoriesIsLoading);
    const errorEmployeeCategories = useSelector(getEmployeeCategoriesError);
    const employeeCategoriesLimit = useSelector(getEmployeeCategoriesLimit);
    const employeeCategoriesPage = useSelector(getEmployeeCategoriesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<EmployeeCategoriesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onCloseAddEmployeeCategory = useCallback(() => {
        setVisibleAddNewEmployeeCategory(false);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(employeeCategoriesActions.setLimit(limit));
        dispatch(fetchEmployeeCategories());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(employeeCategoriesActions.setPage(page));
        dispatch(fetchEmployeeCategories());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(employeeCategoriesData?.data || []);
    }, [employeeCategoriesData]);

    useEffect(() => {
        const filteredData = employeeCategoriesSearchFilter(searchValue, employeeCategoriesData?.data || []);
        setSearchedData(filteredData || []);
    }, [employeeCategoriesData, searchValue]);

    useEffect(() => {
        dispatch(fetchEmployeeCategories());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Категории"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorEmployeeCategories}
                            isLoading={isLoadingEmployeeCategories}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewEmployeeCategory}
                            addingModalText="Добавить категорию"
                            error={errorEmployeeCategories}
                            isLoading={isLoadingEmployeeCategories}
                            references={employeesPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddEmployeeCategory
                                isOpen={visibleAddNewEmployeeCategory}
                                onClose={onCloseAddEmployeeCategory}
                            />
                        </TableConfig>
                    </div>
                    <EmployeeCategories
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={employeeCategoriesData?.pagination}
                            itemsLimit={employeeCategoriesLimit!}
                            withRecords
                            isLoading={isLoadingEmployeeCategories!}
                            error={errorEmployeeCategories}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={employeeCategoriesPage!}
                            isLoading={isLoadingEmployeeCategories!}
                            error={errorEmployeeCategories}
                            paginationData={employeeCategoriesData?.pagination}
                        />
                    </div>
                </div>
                {errorEmployeeCategories && <TimeoutErrorToast error={errorEmployeeCategories} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EmployeeCategoriesPage;
