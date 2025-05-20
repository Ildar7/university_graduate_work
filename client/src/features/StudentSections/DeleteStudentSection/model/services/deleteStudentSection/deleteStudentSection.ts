import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchStudentSections } from 'entities/StudentSections';

export const deleteStudentSection = createAsyncThunk<void, string, ThunkConfig<string>>(
    'studentSections/deleteStudentSection',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/college/student-sections/${id}`);

            dispatch(fetchStudentSections());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
