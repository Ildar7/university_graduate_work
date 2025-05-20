import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { EduCoursesData, EduCoursesError } from 'entities/EduCourses/model/types/eduCourses';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getEduCoursesPage } from '../../selectors/getEduCoursesPage/getEduCoursesPage';
import { getEduCoursesLimit } from '../../selectors/getEduCoursesLimit/getEduCoursesLimit';

export const fetchEduCourses = createAsyncThunk<EduCoursesData, void, ThunkConfig<EduCoursesError>>(
    'students/fetchEduCourses',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getEduCoursesPage,
            limitSelector: getEduCoursesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/educations-courses', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<EduCoursesData>(requestUrl);

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
