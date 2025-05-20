import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { WorkingCurriculumExtract } from '../../types/workingCurriculumExtract';
import {
    WorkingCurriculumExtractError,
} from '../../types/workingCurriculumExtractSchema';

export const fetchWorkingCurriculumExtract = createAsyncThunk<
    WorkingCurriculumExtract,
    string,
    ThunkConfig<WorkingCurriculumExtractError>
>(
    'workingCurriculum/fetchWorkingCurriculumExtract',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<WorkingCurriculumExtract>(`/curriculum/working-curriculum/${id}/extract/`);

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
