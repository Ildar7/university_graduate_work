import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { getRouteWorkingCurriculum } from 'shared/const/router';
import { WorkingCurriculumData, WorkingCurriculumError } from '../../types/workingCurriculum';
import {
    getWorkingCurriculumLimit,
    getWorkingCurriculumPage,
} from '../../selectors/getWorkingCurriculum/getWorkingCurriculum';

export const fetchWorkingCurriculum = createAsyncThunk<WorkingCurriculumData, string | undefined, ThunkConfig<WorkingCurriculumError>>(
    'workingCurriculum/fetchWorkingCurriculum',
    async (year, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const selectedSortField = getTableSortField(getState() as StateSchema);
        const selectedSortOrderField = getTableSortOrderField(getState() as StateSchema);

        const page = getWorkingCurriculumPage(getState() as StateSchema);
        const limit = getWorkingCurriculumLimit(getState() as StateSchema);

        const selectedSort = {
            sort: window.location.pathname === getRouteWorkingCurriculum() ? selectedSortField! : 'working_curriculum_id',
            order: selectedSortOrderField!,
        };

        const sort = new URLSearchParams(selectedSort).toString();
        const paginationParams = new URLSearchParams();
        const selectedYear = new URLSearchParams();

        if (page !== undefined) {
            paginationParams.append('page', page.toString());
        }

        if (limit !== undefined) {
            paginationParams.append('limit', limit.toString());
        }

        if (year !== undefined) {
            selectedYear.append('academicYearFrom', year.toString());
        }

        const requestUrl = `/curriculum/working-curriculum?${paginationParams.toString()}&${sort}&${selectedYear}`;

        try {
            const response = await extra.api.get<WorkingCurriculumData>(requestUrl);

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
