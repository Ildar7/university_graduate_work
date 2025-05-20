import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddStudentClub, addStudentClubReducer } from 'features/StudentClubs/AddStudentClub';
import {
    StudentClubs,
    studentClubsActions,
    studentClubsReducer, StudentClubsType, fetchStudentClubs,
    getStudentClubsData,
    getStudentClubsError,
    getStudentClubsIsLoading,
    getStudentClubsLimit,
    getStudentClubsPage,
} from 'entities/StudentClubs';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { studentClubsSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { studentClubDetailReducer } from 'entities/StudentClubDetail';
import { editStudentClubReducer } from 'features/StudentClubs/EditStudentClub';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';

interface StudentClubsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    studentClubs: studentClubsReducer,
    addStudentClub: addStudentClubReducer,
    studentClubDetail: studentClubDetailReducer,
    editStudentClub: editStudentClubReducer,
};

const exportDisabled = true;
const StudentClubsPage = (props: StudentClubsPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewStudentClub, setVisibleAddNewStudentClub] = useState(false);
    const studentClubsData = useSelector(getStudentClubsData);
    const isLoadingStudentClubs = useSelector(getStudentClubsIsLoading);
    const errorStudentClubs = useSelector(getStudentClubsError);
    const studentClubsLimit = useSelector(getStudentClubsLimit);
    const studentClubsPage = useSelector(getStudentClubsPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<StudentClubsType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(studentClubsActions.setLimit(limit));
        dispatch(fetchStudentClubs());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(studentClubsActions.setPage(page));
        dispatch(fetchStudentClubs());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(studentClubsData?.data || []);
    }, [studentClubsData]);

    useEffect(() => {
        const filteredData = studentClubsSearchFilter(searchValue, studentClubsData?.data || []);
        setSearchedData(filteredData || []);
    }, [studentClubsData, searchValue]);

    useEffect(() => {
        dispatch(fetchStudentClubs());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Студенческие клубы"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorStudentClubs}
                            isLoading={isLoadingStudentClubs}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewStudentClub}
                            addingModalText="Добавить студенческий клуб"
                            error={errorStudentClubs}
                            isLoading={isLoadingStudentClubs}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddStudentClub
                                visible={visibleAddNewStudentClub}
                                setVisible={setVisibleAddNewStudentClub}
                            />
                        </TableConfig>
                    </div>
                    <StudentClubs
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={studentClubsData?.pagination}
                            itemsLimit={studentClubsLimit!}
                            withRecords
                            isLoading={isLoadingStudentClubs!}
                            error={errorStudentClubs}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={studentClubsPage!}
                            isLoading={isLoadingStudentClubs!}
                            error={errorStudentClubs}
                            paginationData={studentClubsData?.pagination}
                        />
                    </div>
                </div>
                {errorStudentClubs && <TimeoutErrorToast error={errorStudentClubs} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default StudentClubsPage;
