import { Search } from 'widgets/Search';
import React, { useCallback, useEffect, useState } from 'react';
import { TableConfig } from 'widgets/TableConfig';
import {
    getTrainingScheduleData,
    getTrainingScheduleError,
    getTrainingScheduleIsLoading,
    TrainingSchedule,
    trainingScheduleReducer,
    TrainingScheduleType,
} from 'entities/TrainingSchedule';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { trainingScheduleSearchFilter } from 'shared/lib/helpers/searchFilter/searchFilter';
import { HelmetProvider } from 'app/providers/HelmetProvider';
import cls from './TrainingSchedulePage.module.scss';

const reducers: ReducersList = {
    trainingSchedule: trainingScheduleReducer,
};

const exportDisabled = true;

const TrainingSchedulePage = () => {
    const trainingScheduleData = useSelector(getTrainingScheduleData);
    const isLoadingTrainingScheduleData = useSelector(getTrainingScheduleIsLoading);
    const errorTrainingScheduleData = useSelector(getTrainingScheduleError);
    const [searchValue, setSearchValue] = useState('');
    const [searchedData, setSearchedData] = useState<TrainingScheduleType[]>();

    const onSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    useEffect(() => {
        setSearchedData(trainingScheduleData || []);
    }, [trainingScheduleData]);

    useEffect(() => {
        const filteredData = trainingScheduleSearchFilter(searchValue, trainingScheduleData || []);
        setSearchedData(filteredData || []);
    }, [trainingScheduleData, searchValue]);

    return (
        <HelmetProvider
            title="WhitePaper LMS - График учебного процесса"
        >
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div>
                    <div className={`page-settings ${!exportDisabled && 'page-settings-with-export'}`}>
                        <Search
                            className={cls.search}
                            value={searchValue}
                            onChange={onSearch}
                            searchText="Введите для поиска по учебному году"
                            error={errorTrainingScheduleData}
                            isLoading={isLoadingTrainingScheduleData}
                        />
                        <TableConfig
                            onlyAdding
                            addingVisible={false}
                            error={errorTrainingScheduleData}
                            isLoading={isLoadingTrainingScheduleData}
                        >
                            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
                            <></>
                        </TableConfig>
                    </div>
                    <TrainingSchedule
                        data={searchedData || []}
                        exportDisabled={exportDisabled}
                    />
                </div>
            </DynamicModuleLoader>
        </HelmetProvider>
    );
};

export default TrainingSchedulePage;
