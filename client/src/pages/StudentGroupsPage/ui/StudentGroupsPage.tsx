import { Search } from 'widgets/Search';
import React, { useCallback, useEffect, useState } from 'react';
import { TableConfig } from 'widgets/TableConfig';
import {
    getStudentGroupsData,
    getStudentGroupsError,
    getStudentGroupsIsLoading,
    StudentGroups,
    studentGroupsReducer,
    StudentGroupsType,
} from 'entities/StudentGroups';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { studentGroupSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { AddStudentGroups, addStudentGroupsReducer } from 'features/StudentGroups/AddStudentGroups';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import { specialtiesReducer } from 'entities/Specialties';
import { qualificationsReducer } from 'entities/Qualifications';
import { educationBasesReducer } from 'entities/EducationBases';
import { languagesReducer } from 'entities/Languages';
import { studentGroupDetailReducer } from 'entities/StudentGroupDetail';
import { editStudentGroupsReducer } from 'features/StudentGroups/EditStudentGroups';
import { useNavigate } from 'react-router-dom';
import { getRouteStudentsInGroups } from 'shared/const/router';

const reducers: ReducersList = {
    studentGroups: studentGroupsReducer,
    studentGroupDetail: studentGroupDetailReducer,
    addStudentGroup: addStudentGroupsReducer,
    editStudentGroup: editStudentGroupsReducer,
    specialties: specialtiesReducer,
    qualifications: qualificationsReducer,
    educationBases: educationBasesReducer,
    languages: languagesReducer,
};

const exportDisabled = true;

const StudentGroupsPage = () => {
    const studentGroupsData = useSelector(getStudentGroupsData);
    const isLoadingStudentGroupsData = useSelector(getStudentGroupsIsLoading);
    const errorStudentGroupsData = useSelector(getStudentGroupsError);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<StudentGroupsType[]>();
    const [visibleAddStudentGroupModal, setVisibleAddStudentGroupModal] = useState(false);
    const navigate = useNavigate();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const onNavigateToAddStudentsToGroupsPage = useCallback(() => {
        navigate(getRouteStudentsInGroups());
    }, [navigate]);

    useEffect(() => {
        setSearchedData(studentGroupsData || []);
    }, [studentGroupsData]);

    useEffect(() => {
        const filteredData = studentGroupSearchFilter(searchValue, studentGroupsData || []);
        setSearchedData(filteredData || []);
    }, [studentGroupsData, searchValue]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - Группы студентов"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Введите для поиска по названию и коду"
                            error={errorStudentGroupsData}
                            isLoading={isLoadingStudentGroupsData}
                        />
                        <TableConfig
                            onlyAdding
                            setVisibleAddNewField={setVisibleAddStudentGroupModal}
                            addingModalText="Добавить группу"
                            addingModalIcon={PlusBorderedIcon}
                            secondBtnText="Прикрепить студентов к группе"
                            secondBtnHandler={onNavigateToAddStudentsToGroupsPage}
                            error={errorStudentGroupsData}
                            isLoading={isLoadingStudentGroupsData}
                        >
                            <AddStudentGroups
                                isOpen={visibleAddStudentGroupModal}
                                setVisible={setVisibleAddStudentGroupModal}
                            />
                        </TableConfig>
                    </div>
                    <StudentGroups
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default StudentGroupsPage;
