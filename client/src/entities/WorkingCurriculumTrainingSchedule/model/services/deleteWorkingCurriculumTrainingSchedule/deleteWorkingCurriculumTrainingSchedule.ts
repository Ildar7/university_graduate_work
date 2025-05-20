import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getWorkingCurriculumTrainingScheduleEditDataInfo,
} from '../../selectors/getWorkingCurriculumTrainingSchedule/getWorkingCurriculumTrainingSchedule';
import {
    WorkingCurriculumEditDataErrors,
} from '../../types/workingCurriculumTrainingScheduleEditDataToSend';
import { workingCurriculumTrainingScheduleActions } from '../../slice/workingCurriculumTrainingScheduleSlice';

export const deleteWorkingCurriculumTrainingSchedule = createAsyncThunk<void, string, ThunkConfig<WorkingCurriculumEditDataErrors>>(
    'workingCurriculum/deleteWorkingCurriculumTrainingSchedule',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const deleteTrainingScheduleAction = getWorkingCurriculumTrainingScheduleEditDataInfo(getState() as any)?.actions;

        const data = {
            actions: deleteTrainingScheduleAction,
        };

        try {
            const response = await extra.api.put<void>(`/curriculum/working-curriculum/${id}/training-schedule/`, data);

            return response.data;
        } catch (err: any) {
            dispatch(workingCurriculumTrainingScheduleActions.cancelEditing());

            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
