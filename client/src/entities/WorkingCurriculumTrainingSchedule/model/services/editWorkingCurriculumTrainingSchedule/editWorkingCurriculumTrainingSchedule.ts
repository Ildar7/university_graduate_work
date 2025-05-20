import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getWorkingCurriculumTrainingScheduleEditDataInfo,
} from '../../selectors/getWorkingCurriculumTrainingSchedule/getWorkingCurriculumTrainingSchedule';
import {
    WorkingCurriculumEditDataErrors,
} from '../../types/workingCurriculumTrainingScheduleEditDataToSend';
import {
    fetchWorkingCurriculumTrainingSchedule,
} from '../../services/fetchWorkingCurriculumTrainingSchedule/fetchWorkingCurriculumTrainingSchedule';
import { workingCurriculumTrainingScheduleActions } from '../../slice/workingCurriculumTrainingScheduleSlice';

export const editWorkingCurriculumTrainingSchedule = createAsyncThunk<void, string, ThunkConfig<WorkingCurriculumEditDataErrors>>(
    'workingCurriculum/editWorkingCurriculumTrainingSchedule',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const editTrainingScheduleActions = getWorkingCurriculumTrainingScheduleEditDataInfo(getState() as any)?.actions;

        const data = {
            actions: editTrainingScheduleActions,
        };

        try {
            const response = await extra.api.put<void>(`/curriculum/working-curriculum/${id}/training-schedule/`, data);

            dispatch(fetchWorkingCurriculumTrainingSchedule(id));
            dispatch(workingCurriculumTrainingScheduleActions.cancelEditing());

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
