import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StandardCurriculumType } from 'entities/StandardCurriculum';
import { getAddStandardCurriculumData } from '../../selectors/getAddStandardCurriculumData/getAddStandardCurriculumData';
import { AddStandardCurriculumErrors } from '../../types/addStandardCurriculum';

export const addStandardCurriculum = createAsyncThunk<StandardCurriculumType, void, ThunkConfig<AddStandardCurriculumErrors>>(
    'standardCurriculum/editStandardCurriculum',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, getState,
        } = thunkAPI;

        const addStandardCurriculumGeneralInfo = getAddStandardCurriculumData(getState() as any)?.general_info;

        try {
            const response = await extra.api.post<StandardCurriculumType>(
                '/curriculum/standard-curricula/',
                addStandardCurriculumGeneralInfo,
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
