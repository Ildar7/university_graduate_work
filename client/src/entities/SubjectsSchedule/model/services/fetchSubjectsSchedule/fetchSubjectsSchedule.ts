import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SubjectsScheduleError, SubjectsScheduleData } from '../../types/subjectsSchedule';

export const fetchSubjectsSchedule = createAsyncThunk<SubjectsScheduleData[], string, ThunkConfig<SubjectsScheduleError>>(
    'subjectsSchedule/fetchSubjectsSchedule',
    async (year, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<SubjectsScheduleData[]>(`/curriculum/subject-schedule/list/${year}`);

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
