import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchPerformanceTypes } from 'entities/PerformanceTypes';

export const deletePerformanceType = createAsyncThunk<void, string, ThunkConfig<string>>(
    'performanceTypes/deletePerformanceType',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/student-performance-types/${id}`);

            dispatch(fetchPerformanceTypes());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
