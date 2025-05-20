import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StandardCurriculumType } from 'entities/StandardCurriculum';
import { EditStandardCurriculumErrors } from '../../types/editStandardCurriculum';
import {
    getEditStandardCurriculumNewFields,
} from '../../selectors/getEditStandardCurriculumNewFields/getEditStandardCurriculumNewFields';

export const editStandardCurriculum = createAsyncThunk<StandardCurriculumType, number, ThunkConfig<EditStandardCurriculumErrors>>(
    'standardCurriculum/editStandardCurriculum',
    async (curriculaId, thunkAPI) => {
        const {
            rejectWithValue, extra, getState,
        } = thunkAPI;

        const editStandardCurriculumGeneralInfo = getEditStandardCurriculumNewFields(getState() as any)?.general_info;

        try {
            const response = await extra.api.put<StandardCurriculumType>(
                `/curriculum/standard-curricula/${curriculaId}`,
                editStandardCurriculumGeneralInfo,
            );

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
