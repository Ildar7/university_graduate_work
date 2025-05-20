import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { NationalitiesData, NationalitiesError } from 'entities/Nationalities/model/types/nationalities';
import { getEduLanguagesLimit, getEduLanguagesPage } from 'entities/EduLanguages';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getNationalitiesPage } from '../../selectors/getNationalitiesPage/getNationalitiesPage';
import { getNationalitiesLimit } from '../../selectors/getNationalitiesLimit/getNationalitiesLimit';

export const fetchNationalities = createAsyncThunk<NationalitiesData, void, ThunkConfig<NationalitiesError>>(
    'students/fetchNationalities',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getNationalitiesPage,
            limitSelector: getNationalitiesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/nationalities', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<NationalitiesData>(requestUrl);

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
