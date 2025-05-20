import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import { TableConfig } from 'widgets/TableConfig';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { useCallback, useEffect, useState } from 'react';
import { AddStudentSection, addStudentSectionReducer } from 'features/StudentSections/AddStudentSection';
import {
    StudentSections,
    studentSectionsActions,
    studentSectionsReducer, StudentSectionsType, fetchStudentSections,
    getStudentSectionsData,
    getStudentSectionsError,
    getStudentSectionsIsLoading,
    getStudentSectionsLimit,
    getStudentSectionsPage,
} from 'entities/StudentSections';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { studentSectionsSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { studentSectionDetailReducer } from 'entities/StudentSectionDetail';
import { editStudentSectionReducer } from 'features/StudentSections/EditStudentSection';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';

interface StudentSectionsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    studentSections: studentSectionsReducer,
    addStudentSection: addStudentSectionReducer,
    studentSectionDetail: studentSectionDetailReducer,
    editStudentSection: editStudentSectionReducer,
};

const exportDisabled = true;
const StudentSectionsPage = (props: StudentSectionsPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const [visibleAddNewStudentSection, setVisibleAddNewStudentSection] = useState(false);
    const studentSectionsData = useSelector(getStudentSectionsData);
    const isLoadingStudentSections = useSelector(getStudentSectionsIsLoading);
    const errorStudentSections = useSelector(getStudentSectionsError);
    const studentSectionsLimit = useSelector(getStudentSectionsLimit);
    const studentSectionsPage = useSelector(getStudentSectionsPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<StudentSectionsType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(studentSectionsActions.setLimit(limit));
        dispatch(fetchStudentSections());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(studentSectionsActions.setPage(page));
        dispatch(fetchStudentSections());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(studentSectionsData?.data || []);
    }, [studentSectionsData]);

    useEffect(() => {
        const filteredData = studentSectionsSearchFilter(searchValue, studentSectionsData?.data || []);
        setSearchedData(filteredData || []);
    }, [studentSectionsData, searchValue]);

    useEffect(() => {
        dispatch(fetchStudentSections());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Секции"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Поиск по наименованию"
                            error={errorStudentSections}
                            isLoading={isLoadingStudentSections}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddNewStudentSection}
                            addingModalText="Добавить секцию"
                            error={errorStudentSections}
                            isLoading={isLoadingStudentSections}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                        >
                            <AddStudentSection
                                visible={visibleAddNewStudentSection}
                                setVisible={setVisibleAddNewStudentSection}
                            />
                        </TableConfig>
                    </div>
                    <StudentSections
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        <LimitShow
                            data={searchedData || []}
                            onChange={onChangePaginationLimit}
                            onChangePage={onChangePaginationPage}
                            paginationData={studentSectionsData?.pagination}
                            itemsLimit={studentSectionsLimit!}
                            withRecords
                            isLoading={isLoadingStudentSections!}
                            error={errorStudentSections}
                        />
                        <Pagintaion
                            data={searchedData || []}
                            onChange={onChangePaginationPage}
                            itemsPage={studentSectionsPage!}
                            isLoading={isLoadingStudentSections!}
                            error={errorStudentSections}
                            paginationData={studentSectionsData?.pagination}
                        />
                    </div>
                </div>
                {errorStudentSections && <TimeoutErrorToast error={errorStudentSections} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default StudentSectionsPage;
