import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddEduForm, addEduFormReducer } from 'features/EduForms/AddEduForm';
import {
    EduForms,
    eduFormsActions,
    eduFormsReducer, EduFormsType, fetchEduForms,
    getEduFormsData,
    getEduFormsError,
    getEduFormsIsLoading,
    getEduFormsLimit,
    getEduFormsPage,
} from 'entities/EduForms';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { eduFormsSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { eduFormDetailReducer } from 'entities/EduFormDetail';
import { editEduFormReducer } from 'features/EduForms/EditEduForm';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';

interface EduFormsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    eduForms: eduFormsReducer,
    addEduForm: addEduFormReducer,
    eduFormDetail: eduFormDetailReducer,
    editEduForm: editEduFormReducer,
};

const exportDisabled = true;
const EduFormsPage = (props: EduFormsPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewEduForm, setVisibleAddNewEduForm] = useState(false);
    const eduFormsData = useSelector(getEduFormsData);
    const isLoadingEduForms = useSelector(getEduFormsIsLoading);
    const errorEduForms = useSelector(getEduFormsError);
    const eduFormsLimit = useSelector(getEduFormsLimit);
    const eduFormsPage = useSelector(getEduFormsPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<EduFormsType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(eduFormsActions.setLimit(limit));
        dispatch(fetchEduForms());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(eduFormsActions.setPage(page));
        dispatch(fetchEduForms());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(eduFormsData?.data || []);
    }, [eduFormsData]);

    useEffect(() => {
        const filteredData = eduFormsSearchFilter(searchValue, eduFormsData?.data || []);
        setSearchedData(filteredData || []);
    }, [eduFormsData, searchValue]);

    useEffect(() => {
        dispatch(fetchEduForms());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Форма обучения"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorEduForms}
                            isLoading={isLoadingEduForms}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewEduForm}
                            addingModalText="Добавить форму обучения"
                            error={errorEduForms}
                            isLoading={isLoadingEduForms}
                        >
                            <AddEduForm
                                visible={visibleAddNewEduForm}
                                setVisible={setVisibleAddNewEduForm}
                            />
                        </TableConfig>
                    </div>
                    <EduForms
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={eduFormsData?.pagination}
                            itemsLimit={eduFormsLimit!}
                            withRecords
                            isLoading={isLoadingEduForms!}
                            error={errorEduForms}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={eduFormsPage!}
                            isLoading={isLoadingEduForms!}
                            error={errorEduForms}
                            paginationData={eduFormsData?.pagination}
                        />
                    </div>
                </div>
                {errorEduForms && <TimeoutErrorToast error={errorEduForms} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EduFormsPage;
