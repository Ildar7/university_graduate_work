import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { SubjectsScheduleDetailError } from '../../types/subjectsScheduleDetailSchema';
import {
    getSubjectsScheduleDetailFilters,
} from '../../selectors/getSubjectsScheduleDetailFilters/getSubjectsScheduleDetailFilters';
import { SubjectsScheduleDetailFilters } from '../../types/subjectsScheduleDetailFilters';
import { SubjectsScheduleDetailData } from '../../types/subjectsScheduleDetail';

export const fetchSubjectsScheduleDetail = createAsyncThunk<
    SubjectsScheduleDetailData,
    string[],
    ThunkConfig<SubjectsScheduleDetailError>
>(
    'subjectsScheduleDetail/fetchSubjectsScheduleDetail',
    async ([year, week], thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const filters: SubjectsScheduleDetailFilters | undefined = getSubjectsScheduleDetailFilters(getState() as StateSchema);
        const clearedFilters: SubjectsScheduleDetailFilters = {};

        if (filters?.eduLangs && filters.eduLangs.length) {
            clearedFilters.eduLangs = filters.eduLangs;
        }

        if (filters?.courses && filters.courses.length) {
            clearedFilters.courses = filters.courses;
        }

        if (filters?.shifts && filters.shifts.length) {
            clearedFilters.shifts = filters.shifts;
        }

        if (filters?.weekNums && filters.weekNums.length) {
            clearedFilters.weekNums = filters.weekNums;
        }

        const filtersQuery = encodeURIComponent(JSON.stringify(clearedFilters));

        let requestUrl = `/curriculum/subject-schedule/${year}/${week}/`;
        if (filtersQuery !== '%7B%7D') {
            requestUrl = `/curriculum/subject-schedule/${year}/${week}?filter=${filtersQuery}`;
        }

        try {
            const response = await extra.api.get<SubjectsScheduleDetailData>(requestUrl);

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
