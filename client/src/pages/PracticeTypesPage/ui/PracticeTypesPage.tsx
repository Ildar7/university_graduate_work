import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddPracticeType, addPracticeTypeReducer } from 'features/PracticeTypes/AddPracticeType';
import {
    PracticeTypes,
    practiceTypesActions,
    practiceTypesReducer, PracticeTypesType, fetchPracticeTypes,
    getPracticeTypesData,
    getPracticeTypesError,
    getPracticeTypesIsLoading,
    getPracticeTypesLimit,
    getPracticeTypesPage,
} from 'entities/PracticeTypes';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { practiceTypesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { practiceTypeDetailReducer } from 'entities/PracticeTypeDetail';
import { editPracticeTypeReducer } from 'features/PracticeTypes/EditPracticeType';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';

interface PracticeTypesPageProps {
  className?: string;
}

const reducers: ReducersList = {
    practiceTypes: practiceTypesReducer,
    addPracticeType: addPracticeTypeReducer,
    practiceTypeDetail: practiceTypeDetailReducer,
    editPracticeType: editPracticeTypeReducer,
};

const exportDisabled = true;
const PracticeTypesPage = (props: PracticeTypesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewPracticeType, setVisibleAddNewPracticeType] = useState(false);
    const practiceTypesData = useSelector(getPracticeTypesData);
    const isLoadingPracticeTypes = useSelector(getPracticeTypesIsLoading);
    const errorPracticeTypes = useSelector(getPracticeTypesError);
    const practiceTypesLimit = useSelector(getPracticeTypesLimit);
    const practiceTypesPage = useSelector(getPracticeTypesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<PracticeTypesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(practiceTypesActions.setLimit(limit));
        dispatch(fetchPracticeTypes());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(practiceTypesActions.setPage(page));
        dispatch(fetchPracticeTypes());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(practiceTypesData?.data || []);
    }, [practiceTypesData]);

    useEffect(() => {
        const filteredData = practiceTypesSearchFilter(searchValue, practiceTypesData?.data || []);
        setSearchedData(filteredData || []);
    }, [practiceTypesData, searchValue]);

    useEffect(() => {
        dispatch(fetchPracticeTypes());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Виды практики"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorPracticeTypes}
                            isLoading={isLoadingPracticeTypes}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewPracticeType}
                            addingModalText="Добавить вид практики"
                            error={errorPracticeTypes}
                            isLoading={isLoadingPracticeTypes}
                        >
                            <AddPracticeType
                                visible={visibleAddNewPracticeType}
                                setVisible={setVisibleAddNewPracticeType}
                            />
                        </TableConfig>
                    </div>
                    <PracticeTypes
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={practiceTypesData?.pagination}
                            itemsLimit={practiceTypesLimit!}
                            withRecords
                            isLoading={isLoadingPracticeTypes!}
                            error={errorPracticeTypes}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={practiceTypesPage!}
                            isLoading={isLoadingPracticeTypes!}
                            error={errorPracticeTypes}
                            paginationData={practiceTypesData?.pagination}
                        />
                    </div>
                </div>
                {errorPracticeTypes && <TimeoutErrorToast error={errorPracticeTypes} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default PracticeTypesPage;
