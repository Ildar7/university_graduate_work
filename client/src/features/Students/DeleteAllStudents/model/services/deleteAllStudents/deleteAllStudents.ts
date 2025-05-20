import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchStudents } from 'entities/Students';

export const deleteAllStudents = createAsyncThunk<void, void, ThunkConfig<string>>(
    'students/deleteAllStudents',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>('/college/students/');

            dispatch(fetchStudents());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
