import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { SubjectsScheduleDetailStudentsGroupsData } from '../../types/subjectsScheduleDetailStudentsGroups';
import { SubjectsScheduleDetailError } from '../../types/subjectsScheduleDetailSchema';
import {
    getSubjectsScheduleDetailFilters,
} from '../../selectors/getSubjectsScheduleDetailFilters/getSubjectsScheduleDetailFilters';
import { SubjectsScheduleDetailFilters } from '../../types/subjectsScheduleDetailFilters';

export const fetchSubjectsScheduleDetailStudentsGroups = createAsyncThunk<
    SubjectsScheduleDetailStudentsGroupsData[],
    string[],
    ThunkConfig<SubjectsScheduleDetailError>
>(
    'subjectsScheduleDetail/fetchSubjectsScheduleDetailStudentsGroups',
    async ([year, week], thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const filters = getSubjectsScheduleDetailFilters(getState() as StateSchema);
        const needFilters: Omit<SubjectsScheduleDetailFilters, 'shifts' | 'weekNums'> = excludePropertiesFromObject(filters, ['shifts', 'weekNums']);
        const clearedFilters: Omit<SubjectsScheduleDetailFilters, 'shifts' | 'weekNums'> = {};

        if (needFilters.eduLangs && needFilters.eduLangs.length) {
            clearedFilters.eduLangs = needFilters.eduLangs;
        }

        if (needFilters.courses && needFilters.courses.length) {
            clearedFilters.courses = needFilters.courses;
        }

        const filtersQuery = encodeURIComponent(JSON.stringify(clearedFilters));

        let requestUrl = `/curriculum/subject-schedule/${year}/${week}/student-groups/`;
        if (filtersQuery !== '%7B%7D') {
            requestUrl = `/curriculum/subject-schedule/${year}/${week}/student-groups?filter=${filtersQuery}`;
        }

        try {
            const response = await extra.api.get<SubjectsScheduleDetailStudentsGroupsData[]>(requestUrl);

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue({
                    status: 500,
                    error: 'timeout',
                });
            }

            return rejectWithValue({
                status: err.response.status,
                error: err.response.data.message,
            });
        }
    },
);
