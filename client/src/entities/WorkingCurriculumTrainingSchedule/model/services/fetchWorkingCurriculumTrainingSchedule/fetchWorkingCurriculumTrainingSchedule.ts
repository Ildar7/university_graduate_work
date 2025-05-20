import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { workingCurriculumTrainingScheduleActions } from 'entities/WorkingCurriculumTrainingSchedule';
import {
    WorkingCurriculumTrainingSchedule,
} from '../../types/workingCurriculumTrainingSchedule';
import { WorkingCurriculumTrainingScheduleError } from '../../types/workingCurriculumTrainingScheduleSchema';

export const fetchWorkingCurriculumTrainingSchedule = createAsyncThunk<
    WorkingCurriculumTrainingSchedule,
    string,
    ThunkConfig<WorkingCurriculumTrainingScheduleError>
>(
    'workingCurriculum/fetchTrainingScheduleDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<WorkingCurriculumTrainingSchedule>(
                `/curriculum/working-curriculum/${id}/training-schedule/`,
            );

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue({
                    status: 500,
                    error: 'timeout',
                });
            }

            if (err.response.status === 404) {
                dispatch(workingCurriculumTrainingScheduleActions.initEditData());
            }

            return rejectWithValue({
                status: err.response.status,
                error: err.response.data.message,
            });
        }
    },
);
