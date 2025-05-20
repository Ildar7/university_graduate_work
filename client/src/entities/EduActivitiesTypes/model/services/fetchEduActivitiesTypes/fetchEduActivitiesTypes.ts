import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { EduActivitiesTypesError, EduActivitiesTypes } from '../../types/eduActivitiesTypes';

export const fetchEduActivitiesTypes = createAsyncThunk<
    EduActivitiesTypes[],
    void,
    ThunkConfig<EduActivitiesTypesError>
>(
    'eduActivitiesTypes/fetchEduActivitiesTypes',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<EduActivitiesTypes[]>('/curriculum/educational-activities-types/');

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
