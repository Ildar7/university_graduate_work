import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchStudentClubs } from 'entities/StudentClubs';

export const deleteStudentClub = createAsyncThunk<void, string, ThunkConfig<string>>(
    'studentClubs/deleteStudentClub',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/students/clubs/${id}`);

            dispatch(fetchStudentClubs());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
