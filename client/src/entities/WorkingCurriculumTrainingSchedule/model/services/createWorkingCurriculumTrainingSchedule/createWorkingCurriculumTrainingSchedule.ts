import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getWorkingCurriculumTrainingScheduleCreateData,
} from '../../selectors/getWorkingCurriculumTrainingSchedule/getWorkingCurriculumTrainingSchedule';
import {
    WorkingCurriculumTrainingScheduleCreateData,
    WorkingCurriculumTrainingScheduleCreateErrors,
} from '../../types/workingCurriculumTrainingScheduleCreate';
import {
    fetchWorkingCurriculumTrainingSchedule,
} from '../../services/fetchWorkingCurriculumTrainingSchedule/fetchWorkingCurriculumTrainingSchedule';
import { workingCurriculumTrainingScheduleActions } from '../../slice/workingCurriculumTrainingScheduleSlice';

export const createWorkingCurriculumTrainingSchedule = createAsyncThunk<
    WorkingCurriculumTrainingScheduleCreateData,
    string,
    ThunkConfig<WorkingCurriculumTrainingScheduleCreateErrors>
>(
    'workingCurriculum/createWorkingCurriculumTrainingSchedule',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const data = getWorkingCurriculumTrainingScheduleCreateData(getState() as any);

        const dataToSend = {
            data: data?.data,
        };

        try {
            const response = await extra.api.post<
                WorkingCurriculumTrainingScheduleCreateData
            >(`/curriculum/working-curriculum/${id}/training-schedule/`, dataToSend);

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
