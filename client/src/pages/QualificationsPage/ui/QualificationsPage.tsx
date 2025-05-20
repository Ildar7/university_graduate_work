import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import {
    fetchQualifications,
    getQualificationsData,
    getQualificationsError,
    getQualificationsIsLoading,
    getQualificationsLimit,
    getQualificationsPage,
    Qualifications,
    qualificationsActions,
    qualificationsReducer,
    QualificationsType,
} from 'entities/Qualifications';
import { qualificationsSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { AddQualification, addQualificationReducer } from 'features/Qualifications/AddQualification';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { qualificationDetailReducer } from 'entities/QualificationDetail';
import { editQualificationReducer } from 'features/Qualifications/EditQualification';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { specialtiesReducer } from 'entities/Specialties';
import { tableSortActions } from 'features/TableSort';

interface QualificationsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    qualifications: qualificationsReducer,
    qualificationDetail: qualificationDetailReducer,
    addQualification: addQualificationReducer,
    editQualification: editQualificationReducer,
    specialties: specialtiesReducer,
};

const exportDisabled = true;
const QualificationsPage = (props: QualificationsPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewQualification, setVisibleAddNewQualification] = useState(false);
    const qualificationsData = useSelector(getQualificationsData);
    const isLoadingQualifications = useSelector(getQualificationsIsLoading);
    const errorQualifications = useSelector(getQualificationsError);
    const qualificationsLimit = useSelector(getQualificationsLimit);
    const qualificationsPage = useSelector(getQualificationsPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<QualificationsType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(qualificationsActions.setLimit(limit));
        dispatch(fetchQualifications());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(qualificationsActions.setPage(page));
        dispatch(fetchQualifications());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(qualificationsData?.data || []);
    }, [qualificationsData]);

    useEffect(() => {
        const filteredData = qualificationsSearchFilter(searchValue, qualificationsData?.data || []);
        setSearchedData(filteredData || []);
    }, [qualificationsData, searchValue]);

    useEffect(() => {
        dispatch(tableSortActions.setSort('id_qual'));
        dispatch(fetchQualifications());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Квалификации"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorQualifications}
                            isLoading={isLoadingQualifications}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewQualification}
                            addingModalText="Добавить квалификацию"
                            error={errorQualifications}
                            isLoading={isLoadingQualifications}
                        >
                            <AddQualification
                                visible={visibleAddNewQualification}
                                setVisible={setVisibleAddNewQualification}
                            />
                        </TableConfig>
                    </div>
                    <Qualifications
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={qualificationsData?.pagination}
                            itemsLimit={qualificationsLimit!}
                            withRecords
                            isLoading={isLoadingQualifications!}
                            error={errorQualifications}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={qualificationsPage!}
                            isLoading={isLoadingQualifications!}
                            error={errorQualifications}
                            paginationData={qualificationsData?.pagination}
                        />
                    </div>
                </div>
                {errorQualifications && <TimeoutErrorToast error={errorQualifications} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default QualificationsPage;
