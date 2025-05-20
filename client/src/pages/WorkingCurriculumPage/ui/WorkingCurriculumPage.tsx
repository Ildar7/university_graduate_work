import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Search } from 'widgets/Search';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TimeoutErrorToast } from 'shared/ui/TimeoutErrorToast/TimeoutErrorToast';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchWorkingCurriculum,
    getWorkingCurriculumData,
    getWorkingCurriculumError,
    getWorkingCurriculumIsLoading,
    getWorkingCurriculumLimit,
    getWorkingCurriculumPage,
    WorkingCurriculum,
    workingCurriculumActions,
    workingCurriculumReducer,
    WorkingCurriculumType,
} from 'entities/WorkingCurriculum';
import { TableConfig } from 'widgets/TableConfig';
import { workingCurriculumSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
// import { getRouteAddWorkingCurriculum } from 'shared/const/router';
import { TableSettings } from 'widgets/TableConfig/ui/TableSettings/TableSettings';
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import { AddWorkingCurriculum, addWorkingCurriculumReducer } from 'features/WorkingCurriculum/AddWorkingCurriculum';
import { standardCurriculumReducer } from 'entities/StandardCurriculum';
import { educationBasesReducer } from 'entities/EducationBases';
import { workingCurriculumDetailReducer } from 'entities/WorkingCurriculumDetail';
import { editWorkingCurriculumReducer } from 'features/WorkingCurriculum/EditWorkingCurriculum';
import { LimitShow, Pagintaion } from 'widgets/Pagination';
import { tableSortActions } from 'features/TableSort';
import {
    fetchSubjectsScheduleAvailableYears,
    getSubjectsScheduleAvailableYearsData,
    getSubjectsScheduleAvailableYearsError,
    getSubjectsScheduleAvailableYearsIsLoading,
    subjectsScheduleReducer,
} from 'entities/SubjectsSchedule';
import { SearchSelect, SearchSelectTheme } from 'shared/ui/SearchSelect/SearchSelect';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextTheme, TextWeight } from 'shared/ui/Text/Text';
import cls from './WorkingCurriculumPage.module.scss';

interface WorkingCurriculumPageProps {
    className?: string;
}

const reducers: ReducersList = {
    standardCurriculum: standardCurriculumReducer,
    workingCurriculum: workingCurriculumReducer,
    workingCurriculumDetail: workingCurriculumDetailReducer,
    addNewWorkingCurriculum: addWorkingCurriculumReducer,
    editWorkingCurriculum: editWorkingCurriculumReducer,
    educationBases: educationBasesReducer,
    subjectsSchedule: subjectsScheduleReducer,
};

const onlyExport = true;
const importDisabled = true;
const exportDisabled = true;
const printDisabled = true;

const WorkingCurriculumPage = (props: WorkingCurriculumPageProps) => {
    const {
        className,
    } = props;
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<WorkingCurriculumType[]>();
    const [visibleAddNewWorkingCurriculum, setVisibleAddNewWorkingCurriculum] = useState(false);
    const [selectedYear, setSelectedYear] = useState<string | undefined>();

    const dispatch = useAppDispatch();
    const workingCurriculum = useSelector(getWorkingCurriculumData);
    const workingCurriculumIsLoading = useSelector(getWorkingCurriculumIsLoading);
    const workingCurriculumError = useSelector(getWorkingCurriculumError);
    const workingCurriculumPage = useSelector(getWorkingCurriculumPage);
    const workingCurriculumLimit = useSelector(getWorkingCurriculumLimit);

    const isLoadingAvailableYears = useSelector(getSubjectsScheduleAvailableYearsIsLoading);
    const errorAvailableYears = useSelector(getSubjectsScheduleAvailableYearsError);
    const availableYears = useSelector(getSubjectsScheduleAvailableYearsData);

    const onCloseAddNewWorkingCurriculumModal = useCallback(() => {
        setVisibleAddNewWorkingCurriculum(false);
    }, []);

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    useEffect(() => {
        setSearchedData(workingCurriculum?.data || []);
    }, [workingCurriculum]);

    useEffect(() => {
        const filteredData = workingCurriculumSearchFilter(searchValue, workingCurriculum?.data || []);
        setSearchedData(filteredData || []);
    }, [workingCurriculum, searchValue]);

    const changeSelectedYear = (year: string) => {
        if (year === 'Все учебные годы') {
            setSelectedYear(undefined);
            return;
        }

        setSelectedYear(year.split('-')[0]);
    };

    const onChangePaginationLimit = useCallback((limit: string) => {
        dispatch(workingCurriculumActions.setLimit(limit));
        dispatch(fetchWorkingCurriculum());
    }, [dispatch]);

    const onChangePaginationPage = useCallback((page: string) => {
        dispatch(workingCurriculumActions.setPage(page));
        dispatch(fetchWorkingCurriculum());
    }, [dispatch]);

    useEffect(() => {
        dispatch(tableSortActions.setSort('working_curriculum_id'));
        dispatch(fetchWorkingCurriculum());
        dispatch(fetchSubjectsScheduleAvailableYears());
    }, [dispatch]);

    useEffect(() => {
        if (selectedYear) {
            dispatch(fetchWorkingCurriculum(selectedYear));
        } else {
            dispatch(fetchWorkingCurriculum());
        }
    }, [dispatch, selectedYear]);

    let searchAvailableYears;

    if (isLoadingAvailableYears) {
        searchAvailableYears = (
            <Skeleton width={300} height={50} border="5px" />
        );
    } else if (errorAvailableYears) {
        searchAvailableYears = (
            <Text
                theme={TextTheme.ERROR}
                weight={TextWeight.SEMIBOLD}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        searchAvailableYears = (
            <SearchSelect
                options={['Все учебные годы', ...availableYears?.map((year) => `${year}-${Number(year) + 1}`) || []]}
                optionValue={selectedYear ? `${selectedYear}-${Number(selectedYear) + 1}` : 'Все учебные годы'}
                onClickOption={changeSelectedYear}
                columnName=""
                searchDisabled
                theme={SearchSelectTheme.GRAY}
                className={cls.select}
                activeItemClassName={cls.selectItemActive}
            />
        );
    }

    return (
        <HelmetProvider
            title="WhitePaper LMS - Рабочий учебный план"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.WorkingCurriculumPage, {}, [className])}>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            className={cls.search}
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Введите для поиска по названию или специальности"
                            error={workingCurriculumError}
                            isLoading={workingCurriculumIsLoading}
                        />
                        {searchAvailableYears}
                        <TableConfig
                            onlyAdding
                            addingModalText="Добавить"
                            setVisibleAddNewField={setVisibleAddNewWorkingCurriculum}
                            addingModalIcon={PlusBorderedIcon}
                            error={workingCurriculumError}
                            isLoading={workingCurriculumIsLoading}
                            // pathname={getRouteAddWorkingCurriculum()}
                        >
                            <AddWorkingCurriculum
                                onClose={onCloseAddNewWorkingCurriculumModal}
                                isOpen={visibleAddNewWorkingCurriculum}
                            />
                        </TableConfig>
                    </div>
                    <WorkingCurriculum
                        data={searchedData || []}
                        exportDisabled={false}
                    />
                    <div className="page-table-settings">
                        {workingCurriculumLimit && (
                            <LimitShow
                                data={searchedData || []}
                                onChange={onChangePaginationLimit}
                                onChangePage={onChangePaginationPage}
                                paginationData={workingCurriculum?.pagination}
                                itemsLimit={workingCurriculumLimit}
                                withRecords
                                isLoading={workingCurriculumIsLoading!}
                                error={workingCurriculumError}
                            />
                        )}
                        {workingCurriculumPage && (
                            <Pagintaion
                                data={searchedData || []}
                                onChange={onChangePaginationPage}
                                itemsPage={workingCurriculumPage!}
                                isLoading={workingCurriculumIsLoading!}
                                error={workingCurriculumError}
                                paginationData={workingCurriculum?.pagination}
                            />
                        )}
                    </div>
                    <TableSettings
                        onlyExport={onlyExport}
                        importDisabled={importDisabled}
                        exportDisabled={exportDisabled}
                        printDisabled={printDisabled}
                        error={workingCurriculumError}
                        isLoading={workingCurriculumIsLoading}
                    />
                </div>
                {workingCurriculumError && <TimeoutErrorToast error={workingCurriculumError} />}
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default WorkingCurriculumPage;
