import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    AddStandardCurriculumQualificationTrainingTime, AddStandardCurriculumQualificationTrainingTimeToSend,
} from '../../../../../features/StandardCurriculum/AddStandardCurriculum/model/types/addStandardCurriculum';

export const calculateQualificationTrainingTime = createAsyncThunk<
    AddStandardCurriculumQualificationTrainingTime,
    AddStandardCurriculumQualificationTrainingTimeToSend,
    ThunkConfig<string>
>(
    'standardCurriculum/calculateQualificationTrainingTime',
    async (data, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api
                .post<AddStandardCurriculumQualificationTrainingTime>('/curriculum/standard-curricula/qualifications/training-time', data);

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
