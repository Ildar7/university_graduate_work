import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { StudyDurationsData, StudyDurationsError } from 'entities/StudyDurations/model/types/studyDurations';
import { getQualificationsLimit, getQualificationsPage } from 'entities/Qualifications';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getStudyDurationsPage } from '../../selectors/getStudyDurationsPage/getStudyDurationsPage';
import { getStudyDurationsLimit } from '../../selectors/getStudyDurationsLimit/getStudyDurationsLimit';

export const fetchStudyDurations = createAsyncThunk<StudyDurationsData, void, ThunkConfig<StudyDurationsError>>(
    'students/fetchStudyDurations',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getStudyDurationsPage,
            limitSelector: getStudyDurationsLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/study-durations', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<StudyDurationsData>(requestUrl);

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
