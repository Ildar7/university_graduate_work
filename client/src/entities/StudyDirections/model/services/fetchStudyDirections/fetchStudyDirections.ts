import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { StudyDirectionsData, StudyDirectionsError } from 'entities/StudyDirections/model/types/studyDirections';
import { getQualificationsLimit, getQualificationsPage } from 'entities/Qualifications';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getStudyDirectionsPage } from '../../selectors/getStudyDirectionsPage/getStudyDirectionsPage';
import { getStudyDirectionsLimit } from '../../selectors/getStudyDirectionsLimit/getStudyDirectionsLimit';

export const fetchStudyDirections = createAsyncThunk<StudyDirectionsData, void, ThunkConfig<StudyDirectionsError>>(
    'students/fetchStudyDirections',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getQualificationsPage,
            limitSelector: getQualificationsLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/study-directions', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<StudyDirectionsData>(requestUrl);

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
