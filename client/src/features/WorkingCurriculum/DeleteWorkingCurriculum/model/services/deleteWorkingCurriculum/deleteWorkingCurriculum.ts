import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchWorkingCurriculum } from 'entities/WorkingCurriculum';

export const deleteWorkingCurriculum = createAsyncThunk<void, string, ThunkConfig<string>>(
    'workingCurriculum/deleteStudentGroups',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/curriculum/working-curriculum/${id}`);

            dispatch(fetchWorkingCurriculum());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
