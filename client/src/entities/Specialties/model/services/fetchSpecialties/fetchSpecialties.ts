import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { SpecialtiesData, SpecialtiesError } from 'entities/Specialties/model/types/specialties';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import { getSpecialtiesPage } from '../../selectors/getSpecialtiesPage/getSpecialtiesPage';
import { getSpecialtiesLimit } from '../../selectors/getSpecialtiesLimit/getSpecialtiesLimit';

export const fetchSpecialties = createAsyncThunk<SpecialtiesData, void, ThunkConfig<SpecialtiesError>>(
    'students/fetchSpecialties',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getSpecialtiesPage,
            limitSelector: getSpecialtiesLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/specialties', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<SpecialtiesData>(requestUrl);

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
