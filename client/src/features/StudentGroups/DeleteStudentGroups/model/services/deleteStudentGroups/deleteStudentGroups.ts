import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchStudentGroups } from 'entities/StudentGroups';

export const deleteStudentGroups = createAsyncThunk<void, string, ThunkConfig<string>>(
    'studentGroups/deleteStudentGroups',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/groups/${id}`);

            dispatch(fetchStudentGroups());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
