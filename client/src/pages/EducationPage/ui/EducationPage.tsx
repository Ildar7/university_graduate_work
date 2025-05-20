import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import {
    fetchSpecialties,
    getSpecialtiesData,
    getSpecialtiesError,
    getSpecialtiesIsLoading,
    getSpecialtiesLimit,
    getSpecialtiesPage,
    Specialties,
    specialtiesActions,
    specialtiesReducer,
    SpecialtiesType,
} from 'entities/Specialties';
import { specialtiesSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { AddSpeciality, addSpecialityReducer } from 'features/Specialties/AddSpeciality';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { specialityDetailReducer } from 'entities/SpecialityDetail';
import { editSpecialityReducer } from 'features/Specialties/EditSpeciality';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';

interface EducationPageProps {
    className?: string;
}

const reducers: ReducersList = {
    specialties: specialtiesReducer,
    specialityDetail: specialityDetailReducer,
    addSpeciality: addSpecialityReducer,
    editSpeciality: editSpecialityReducer,
};

const exportDisabled = true;
const EducationPage = (props: EducationPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewSpeciality, setVisibleAddNewSpeciality] = useState(false);
    const specialtiesData = useSelector(getSpecialtiesData);
    const isLoadingSpecialties = useSelector(getSpecialtiesIsLoading);
    const errorSpecialties = useSelector(getSpecialtiesError);
    const specialtiesLimit = useSelector(getSpecialtiesLimit);
    const specialtiesPage = useSelector(getSpecialtiesPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<SpecialtiesType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(specialtiesActions.setLimit(limit));
        dispatch(fetchSpecialties());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(specialtiesActions.setPage(page));
        dispatch(fetchSpecialties());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(specialtiesData?.data || []);
    }, [specialtiesData]);

    useEffect(() => {
        const filteredData = specialtiesSearchFilter(searchValue, specialtiesData?.data || []);
        setSearchedData(filteredData || []);
    }, [specialtiesData, searchValue]);

    useEffect(() => {
        dispatch(fetchSpecialties());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Специальность"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorSpecialties}
                            isLoading={isLoadingSpecialties}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewSpeciality}
                            addingModalText="Добавить специальность"
                            error={errorSpecialties}
                            isLoading={isLoadingSpecialties}
                        >
                            <AddSpeciality
                                visible={visibleAddNewSpeciality}
                                setVisible={setVisibleAddNewSpeciality}
                            />
                        </TableConfig>
                    </div>
                    <Specialties
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={specialtiesData?.pagination}
                            itemsLimit={specialtiesLimit!}
                            withRecords
                            isLoading={isLoadingSpecialties!}
                            error={errorSpecialties}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={specialtiesPage!}
                            isLoading={isLoadingSpecialties!}
                            error={errorSpecialties}
                            paginationData={specialtiesData?.pagination}
                        />
                    </div>
                </div>
                {errorSpecialties && <TimeoutErrorToast error={errorSpecialties} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default EducationPage;
