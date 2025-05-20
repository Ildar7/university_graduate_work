import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEnrollmentTypes } from 'entities/EnrollmentTypes';

export const deleteEnrollmentType = createAsyncThunk<void, string, ThunkConfig<string>>(
    'enrollmentTypes/deleteEduUnit',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/enrollment-types/${id}`);

            dispatch(fetchEnrollmentTypes());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
