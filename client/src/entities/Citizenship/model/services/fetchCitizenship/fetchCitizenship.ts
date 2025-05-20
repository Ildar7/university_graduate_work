import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { CitizenshipData, CitizenshipError } from 'entities/Citizenship/model/types/citizenship';
import { getPracticeTypesLimit, getPracticeTypesPage } from 'entities/PracticeTypes';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getCitizenshipPage } from '../../selectors/getCitizenshipPage/getCitizenshipPage';
import { getCitizenshipLimit } from '../../selectors/getCitizenshipLimit/getCitizenshipLimit';

export const fetchCitizenship = createAsyncThunk<CitizenshipData, void, ThunkConfig<CitizenshipError>>(
    'students/fetchCitizenship',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getCitizenshipPage,
            limitSelector: getCitizenshipLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/citizenship', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<CitizenshipData>(requestUrl);

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
