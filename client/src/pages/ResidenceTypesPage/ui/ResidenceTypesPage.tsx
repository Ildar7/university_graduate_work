import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddResidenceType, addResidenceTypeReducer } from 'features/ResidenceTypes/AddResidenceType';
import {
    ResidenceTypes,
    residenceTypesActions,
    residenceTypesReducer, ResidenceTypesType, fetchResidenceTypes,
    getResidenceTypesData,
    getResidenceTypesError,
    getResidenceTypesIsLoading,
    getResidenceTypesLimit,
    getResidenceTypesPage,
} from 'entities/ResidenceTypes';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { residenceTypesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { residenceTypeDetailReducer } from 'entities/ResidenceTypeDetail';
import { editResidenceTypeReducer } from 'features/ResidenceTypes/EditResidenceType';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';

interface ResidenceTypesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    residenceTypes: residenceTypesReducer,
    addResidenceType: addResidenceTypeReducer,
    residenceTypeDetail: residenceTypeDetailReducer,
    editResidenceType: editResidenceTypeReducer,
};

const exportDisabled = true;
const ResidenceTypesPage = (props: ResidenceTypesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewResidenceType, setVisibleAddNewResidenceType] = useState(false);
    const residenceTypesData = useSelector(getResidenceTypesData);
    const isLoadingResidenceTypes = useSelector(getResidenceTypesIsLoading);
    const errorResidenceTypes = useSelector(getResidenceTypesError);
    const residenceTypesLimit = useSelector(getResidenceTypesLimit);
    const residenceTypesPage = useSelector(getResidenceTypesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<ResidenceTypesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(residenceTypesActions.setLimit(limit));
        dispatch(fetchResidenceTypes());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(residenceTypesActions.setPage(page));
        dispatch(fetchResidenceTypes());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(residenceTypesData?.data || []);
    }, [residenceTypesData]);

    useEffect(() => {
        const filteredData = residenceTypesSearchFilter(searchValue, residenceTypesData?.data || []);
        setSearchedData(filteredData || []);
    }, [residenceTypesData, searchValue]);

    useEffect(() => {
        dispatch(fetchResidenceTypes());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Местожительства"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorResidenceTypes}
                            isLoading={isLoadingResidenceTypes}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewResidenceType}
                            addingModalText="Добавить местожительство"
                            error={errorResidenceTypes}
                            isLoading={isLoadingResidenceTypes}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddResidenceType
                                visible={visibleAddNewResidenceType}
                                setVisible={setVisibleAddNewResidenceType}
                            />
                        </TableConfig>
                    </div>
                    <ResidenceTypes
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={residenceTypesData?.pagination}
                            itemsLimit={residenceTypesLimit!}
                            withRecords
                            isLoading={isLoadingResidenceTypes!}
                            error={errorResidenceTypes}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={residenceTypesPage!}
                            isLoading={isLoadingResidenceTypes!}
                            error={errorResidenceTypes}
                            paginationData={residenceTypesData?.pagination}
                        />
                    </div>
                </div>
                {errorResidenceTypes && <TimeoutErrorToast error={errorResidenceTypes} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default ResidenceTypesPage;
