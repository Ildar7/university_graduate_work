import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const deleteStandardCurriculumModules = createAsyncThunk<void, [number, number], ThunkConfig<string>>(
    'standardCurriculum/deleteStandardCurriculumModules',
    async ([curriculaId, moduleId], thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(`/curriculum/standard-curricula/${curriculaId}/modules/${moduleId}`);

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
