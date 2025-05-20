import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { EduFormsData, EduFormsError } from 'entities/EduForms';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { getQualificationsLimit, getQualificationsPage } from 'entities/Qualifications';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getEduFormsPage,
} from '../../selectors/getEduFormsPage/getEduFormsPage';
import {
    getEduFormsLimit,
} from '../../selectors/getEduFormsLimit/getEduFormsLimit';

export const fetchEduForms = createAsyncThunk<EduFormsData, void, ThunkConfig<EduFormsError>>(
    'students/fetchEduForms',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getEduFormsPage,
            limitSelector: getEduFormsLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/education-forms', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<EduFormsData>(requestUrl);

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
