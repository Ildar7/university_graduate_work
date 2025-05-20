import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StudentGroupsError, StudentGroupsType } from '../../types/studentGroups';

export const fetchStudentGroups = createAsyncThunk<StudentGroupsType[], void, ThunkConfig<StudentGroupsError>>(
    'students/fetchTrainingSchedule',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<any>('/college/groups/') as any;

            return response.data.data;
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
