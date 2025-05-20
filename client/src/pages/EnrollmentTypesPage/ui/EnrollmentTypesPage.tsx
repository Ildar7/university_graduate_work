import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddEnrollmentType, addEnrollmentTypeReducer } from 'features/EnrollmentTypes/AddEnrollmentType';
import {
    EnrollmentTypes,
    enrollmentTypesActions,
    enrollmentTypesReducer, EnrollmentTypesType, fetchEnrollmentTypes,
    getEnrollmentTypesData,
    getEnrollmentTypesError,
    getEnrollmentTypesIsLoading,
    getEnrollmentTypesLimit,
    getEnrollmentTypesPage,
} from 'entities/EnrollmentTypes';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { enrollmentTypesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { enrollmentTypeDetailReducer } from 'entities/EnrollmentTypeDetail';
import { editEnrollmentTypeReducer } from 'features/EnrollmentTypes/EditEnrollmentType';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';
import cls from './EnrollmentTypesPage.module.scss';

interface EnrollmentTypesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    enrollmentTypes: enrollmentTypesReducer,
    addEnrollmentType: addEnrollmentTypeReducer,
    enrollmentTypeDetail: enrollmentTypeDetailReducer,
    editEnrollmentType: editEnrollmentTypeReducer,
};

const exportDisabled = true;
const EnrollmentTypesPage = (props: EnrollmentTypesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewEnrollmentType, setVisibleAddNewEnrollmentType] = useState(false);
    const enrollmentTypesData = useSelector(getEnrollmentTypesData);
    const isLoadingEnrollmentTypes = useSelector(getEnrollmentTypesIsLoading);
    const errorEnrollmentTypes = useSelector(getEnrollmentTypesError);
    const enrollmentTypesLimit = useSelector(getEnrollmentTypesLimit);
    const enrollmentTypesPage = useSelector(getEnrollmentTypesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<EnrollmentTypesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(enrollmentTypesActions.setLimit(limit));
        dispatch(fetchEnrollmentTypes());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(enrollmentTypesActions.setPage(page));
        dispatch(fetchEnrollmentTypes());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(enrollmentTypesData?.data || []);
    }, [enrollmentTypesData]);

    useEffect(() => {
        const filteredData = enrollmentTypesSearchFilter(searchValue, enrollmentTypesData?.data || []);
        setSearchedData(filteredData || []);
    }, [enrollmentTypesData, searchValue]);

    useEffect(() => {
        dispatch(fetchEnrollmentTypes());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Типы зачисления"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={cls.EnrollmentTypesPage}>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorEnrollmentTypes}
                            isLoading={isLoadingEnrollmentTypes}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewEnrollmentType}
                            addingModalText="Добавить вид зачисления"
                            error={errorEnrollmentTypes}
                            isLoading={isLoadingEnrollmentTypes}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddEnrollmentType
                                visible={visibleAddNewEnrollmentType}
                                setVisible={setVisibleAddNewEnrollmentType}
                            />
                        </TableConfig>
                    </div>
                    <EnrollmentTypes
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={enrollmentTypesData?.pagination}
                            itemsLimit={enrollmentTypesLimit!}
                            withRecords
                            isLoading={isLoadingEnrollmentTypes!}
                            error={errorEnrollmentTypes}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={enrollmentTypesPage!}
                            isLoading={isLoadingEnrollmentTypes!}
                            error={errorEnrollmentTypes}
                            paginationData={enrollmentTypesData?.pagination}
                        />
                    </div>
                </div>
                {errorEnrollmentTypes && <TimeoutErrorToast error={errorEnrollmentTypes} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EnrollmentTypesPage;
