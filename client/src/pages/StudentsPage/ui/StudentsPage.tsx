import { Search } from 'widgets/Search';
import React, { useCallback, useEffect, useState } from 'react';
import { TableConfig } from 'widgets/TableConfig';
import {
    fetchStudents,
    getStudentsData,
    getStudentsError,
    getStudentsIsLoading,
    getStudentsLimit,
    getStudentsPage,
    Students,
    studentsActions,
    StudentsType,
} from 'entities/Students';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { studentSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { tableFiltersReducer } from 'features/TableFilters';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddStudent, addStudentReducer } from 'features/Students/AddStudent';
import { studentDetailReducer } from 'entities/StudentDetail';
import { editStudentReducer } from 'features/Students/EditStudent';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { exportStudentsReducer } from 'features/Students/ExportStudents';
import { TableSettings } from 'widgets/TableConfig/ui/TableSettings/TableSettings';
import { studentsPageBreadcrumbs } from 'widgets/Breadcrumb/const/students';
import {
    getStudentsTableFieldsData, StudentsTableFields,
    studentsTableFieldsActions,
    studentsTableFieldsReducer,
    StudentsTableFieldsType,
} from 'features/Students/StudentsTableFields';

const reducers: ReducersList = {
    studentsTableFields: studentsTableFieldsReducer,
    tableFilters: tableFiltersReducer,
    studentDetail: studentDetailReducer,
    addNewStudent: addStudentReducer,
    editStudent: editStudentReducer,
    exportStudents: exportStudentsReducer,
};

const onlyExport = true;
const importDisabled = true;
const exportDisabled = false;
const printDisabled = true;
const StudentsPage = () => {
    const dispatch = useAppDispatch();
    const studentsData = useSelector(getStudentsData);
    const isLoadingStudentsData = useSelector(getStudentsIsLoading);
    const errorStudentsData = useSelector(getStudentsError);
    const tableFieldsData = useSelector(getStudentsTableFieldsData);
    const studentsLimit = useSelector(getStudentsLimit);
    const studentsPage = useSelector(getStudentsPage);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<StudentsType[]>();
    const [visibleCells, setVisibleCells] = useState<StudentsTableFieldsType>();
    const [visibleAddNewStudent, setVisibleAddNewStudent] = useState(false);

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onSaveFields = useCallback(() => {
        dispatch(studentsTableFieldsActions.saveCheckedFields());
        setVisibleCells(tableFieldsData);
    }, [dispatch, tableFieldsData]);

    const onClearFields = useCallback(() => {
        dispatch(studentsTableFieldsActions.clearCheckedFields());
        setVisibleCells(tableFieldsData);
    }, [dispatch, tableFieldsData]);

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(studentsActions.setLimit(limit));
        dispatch(fetchStudents());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(studentsActions.setPage(page));
        dispatch(fetchStudents());
    }, [dispatch]);

    useEffect(() => {
        setSearchedData(studentsData?.data || []);
    }, [studentsData]);

    useEffect(() => {
        const filteredData = studentSearchFilter(searchValue, studentsData?.data || []);
        setSearchedData(filteredData || []);
    }, [studentsData, searchValue]);

    useEffect(() => {
        setVisibleCells(tableFieldsData);
    }, [tableFieldsData]);

    useEffect(() => {
        dispatch(studentsTableFieldsActions.initFieldsData());
    }, [dispatch]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Студенты"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Введите для поиска по ФИО..."
                            error={errorStudentsData}
                            isLoading={isLoadingStudentsData}
                        />
                        <TableConfig
                            onSaveFields={onSaveFields}
                            onClearFields={onClearFields}
                            setVisibleAddNewField={setVisibleAddNewStudent}
                            addingModalText="Добавить студента"
                            error={errorStudentsData}
                            filtersVisible={false}
                            isLoading={isLoadingStudentsData}
                            references={studentsPageBreadcrumbs}
                            referencesTitle="Справочники"
                            TableFieldsContent={StudentsTableFields}
                        >
                            <AddStudent
                                visible={visibleAddNewStudent}
                                setVisible={setVisibleAddNewStudent}
                            />
                        </TableConfig>
                    </div>
                    <Students
                        data={searchedData || []}
                        visibleCells={visibleCells}
                        exportDisabled={exportDisabled}
                    />
                    <div className="page-table-settings">
                        {studentsLimit && (
                            <LimitShow
                                data={searchedData || []}
                                onChange={onChangePaginationLimit}
                                onChangePage={onChangePaginationPage}
                                paginationData={studentsData?.pagination}
                                itemsLimit={studentsLimit}
                                withRecords
                                isLoading={isLoadingStudentsData}
                                error={errorStudentsData}
                            />
                        )}
                        {studentsPage && (
                            <Pagintaion
                                data={searchedData || []}
                                onChange={onChangePaginationPage}
                                itemsPage={studentsPage}
                                isLoading={isLoadingStudentsData}
                                error={errorStudentsData}
                                paginationData={studentsData?.pagination}
                            />
                        )}
                    </div>
                    <TableSettings
                        onlyExport={onlyExport}
                        importDisabled={importDisabled}
                        exportDisabled={exportDisabled}
                        printDisabled={printDisabled}
                        error={errorStudentsData}
                        isLoading={isLoadingStudentsData}
                    />
                </div>
                {errorStudentsData && <TimeoutErrorToast error={errorStudentsData} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default StudentsPage;
