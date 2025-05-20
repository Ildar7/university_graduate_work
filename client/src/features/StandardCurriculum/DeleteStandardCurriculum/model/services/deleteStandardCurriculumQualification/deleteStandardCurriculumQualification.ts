import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const deleteStandardCurriculumQualification = createAsyncThunk<void, [number, number], ThunkConfig<string>>(
    'standardCurriculum/deleteStandardCurriculumQualification',
    async ([curriculaId, qualId], thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.delete<void>(
                `/curriculum/standard-curricula/${curriculaId}/qualifications/${qualId}`,
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
