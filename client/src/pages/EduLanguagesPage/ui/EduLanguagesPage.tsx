import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import {
    EduLanguages,
    eduLanguagesActions,
    eduLanguagesReducer,
    EduLanguagesType,
    fetchEduLanguages,
    getEduLanguagesData,
    getEduLanguagesError,
    getEduLanguagesIsLoading,
    getEduLanguagesLimit,
    getEduLanguagesPage,
} from 'entities/EduLanguages';
import { eduLanguagesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { AddEduLanguage, addEduLanguageReducer } from 'features/EduLanguages/AddEduLanguage';
import { eduLanguageDetailReducer } from 'entities/EduLanguageDetail';
import { editEduLanguageReducer } from 'features/EduLanguages/EditEduLanguage';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';

interface EduLanguagesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    eduLanguages: eduLanguagesReducer,
    eduLanguagesDetail: eduLanguageDetailReducer,
    addEduLanguage: addEduLanguageReducer,
    editEduLanguage: editEduLanguageReducer,
};

const exportDisabled = true;
const EduLanguagesPage = (props: EduLanguagesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewEduLanguage, setVisibleAddNewEduLanguage] = useState(false);
    const eduLanguagesData = useSelector(getEduLanguagesData);
    const isLoadingEduLanguages = useSelector(getEduLanguagesIsLoading);
    const errorEduLanguages = useSelector(getEduLanguagesError);
    const eduLanguagesLimit = useSelector(getEduLanguagesLimit);
    const eduLanguagesPage = useSelector(getEduLanguagesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<EduLanguagesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(eduLanguagesActions.setLimit(limit));
        dispatch(fetchEduLanguages());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(eduLanguagesActions.setPage(page));
        dispatch(fetchEduLanguages());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(eduLanguagesData?.data || []);
    }, [eduLanguagesData]);

    useEffect(() => {
        const filteredData = eduLanguagesSearchFilter(searchValue, eduLanguagesData?.data || []);
        setSearchedData(filteredData || []);
    }, [eduLanguagesData, searchValue]);

    useEffect(() => {
        dispatch(fetchEduLanguages());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Язык обучения"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorEduLanguages}
                            isLoading={isLoadingEduLanguages}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewEduLanguage}
                            addingModalText="Добавить язык обучения"
                            error={errorEduLanguages}
                            isLoading={isLoadingEduLanguages}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddEduLanguage
                                visible={visibleAddNewEduLanguage}
                                setVisible={setVisibleAddNewEduLanguage}
                            />
                        </TableConfig>
                    </div>
                    <EduLanguages
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={eduLanguagesData?.pagination}
                            itemsLimit={eduLanguagesLimit!}
                            withRecords
                            isLoading={isLoadingEduLanguages!}
                            error={errorEduLanguages}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={eduLanguagesPage!}
                            isLoading={isLoadingEduLanguages!}
                            error={errorEduLanguages}
                            paginationData={eduLanguagesData?.pagination}
                        />
                    </div>
                </div>
                {errorEduLanguages && <TimeoutErrorToast error={errorEduLanguages} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EduLanguagesPage;
