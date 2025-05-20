import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { StudentClubsData, StudentClubsError } from 'entities/StudentClubs';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { getEduCoursesLimit, getEduCoursesPage } from 'entities/EduCourses';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getStudentClubsPage,
} from '../../selectors/getStudentClubsPage/getStudentClubsPage';
import {
    getStudentClubsLimit,
} from '../../selectors/getStudentClubsLimit/getStudentClubsLimit';

export const fetchStudentClubs = createAsyncThunk<StudentClubsData, void, ThunkConfig<StudentClubsError>>(
    'students/fetchStudentClubs',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getStudentClubsPage,
            limitSelector: getStudentClubsLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/students/clubs', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<StudentClubsData>(requestUrl);

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
