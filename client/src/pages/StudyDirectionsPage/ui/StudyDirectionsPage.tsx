import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import {
    fetchStudyDirections,
    getStudyDirectionsData,
    getStudyDirectionsError,
    getStudyDirectionsIsLoading,
    getStudyDirectionsLimit,
    getStudyDirectionsPage,
    StudyDirections,
    studyDirectionsActions,
    studyDirectionsReducer,
    StudyDirectionsType,
} from 'entities/StudyDirections';
import { studyDirectionsSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { AddStudyDirection, addStudyDirectionReducer } from 'features/StudyDirections/AddStudyDirection';
import { studyDirectionDetailReducer } from 'entities/StudyDirectionDetail';
import { editStudyDirectionReducer } from 'features/StudyDirections/EditStudyDirection';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';

interface StudyDirectionsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    studyDirections: studyDirectionsReducer,
    studyDirectionDetail: studyDirectionDetailReducer,
    addStudyDirection: addStudyDirectionReducer,
    editStudyDirection: editStudyDirectionReducer,
};

const exportDisabled = true;
const StudyDirectionsPage = (props: StudyDirectionsPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewStudyDirection, setVisibleAddNewStudyDirection] = useState(false);
    const studyDirectionsData = useSelector(getStudyDirectionsData);
    const isLoadingStudyDirections = useSelector(getStudyDirectionsIsLoading);
    const errorStudyDirections = useSelector(getStudyDirectionsError);
    const studyDirectionsLimit = useSelector(getStudyDirectionsLimit);
    const studyDirectionsPage = useSelector(getStudyDirectionsPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<StudyDirectionsType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(studyDirectionsActions.setLimit(limit));
        dispatch(fetchStudyDirections());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(studyDirectionsActions.setPage(page));
        dispatch(fetchStudyDirections());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(studyDirectionsData?.data || []);
    }, [studyDirectionsData]);

    useEffect(() => {
        const filteredData = studyDirectionsSearchFilter(searchValue, studyDirectionsData?.data || []);
        setSearchedData(filteredData || []);
    }, [studyDirectionsData, searchValue]);

    useEffect(() => {
        dispatch(fetchStudyDirections());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Направления олимпиады"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorStudyDirections}
                            isLoading={isLoadingStudyDirections}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewStudyDirection}
                            addingModalText="Добавить направление олимпиады"
                            error={errorStudyDirections}
                            isLoading={isLoadingStudyDirections}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddStudyDirection
                                visible={visibleAddNewStudyDirection}
                                setVisible={setVisibleAddNewStudyDirection}
                            />
                        </TableConfig>
                    </div>
                    <StudyDirections
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={studyDirectionsData?.pagination}
                            itemsLimit={studyDirectionsLimit!}
                            withRecords
                            isLoading={isLoadingStudyDirections!}
                            error={errorStudyDirections}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={studyDirectionsPage!}
                            isLoading={isLoadingStudyDirections!}
                            error={errorStudyDirections}
                            paginationData={studyDirectionsData?.pagination}
                        />
                    </div>
                </div>
                {errorStudyDirections && <TimeoutErrorToast error={errorStudyDirections} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default StudyDirectionsPage;
