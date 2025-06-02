import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { EduLanguagesData, EduLanguagesError } from 'entities/EduLanguages/model/types/eduLanguages';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getEduLanguagesPage } from '../../selectors/getEduLanguagesPage/getEduLanguagesPage';
import { getEduLanguagesLimit } from '../../selectors/getEduLanguagesLimit/getEduLanguagesLimit';

export const fetchEduLanguages = createAsyncThunk<EduLanguagesData, void, ThunkConfig<EduLanguagesError>>(
    'students/fetchEmployeeEducations',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getEduLanguagesPage,
            limitSelector: getEduLanguagesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/study-languages', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<EduLanguagesData>(requestUrl);

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
