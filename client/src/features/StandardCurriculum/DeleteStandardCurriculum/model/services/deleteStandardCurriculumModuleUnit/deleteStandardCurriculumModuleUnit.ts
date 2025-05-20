import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const deleteStandardCurriculumModuleUnit = createAsyncThunk<void, [number, number, number], ThunkConfig<string>>(
    'standardCurriculum/deleteStandardCurriculumModuleUnit',
    async ([curriculaId, moduleId, unitId], thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(
                `/curriculum/standard-curricula/${curriculaId}/modules/${moduleId}/units/${unitId}`,
            );

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
