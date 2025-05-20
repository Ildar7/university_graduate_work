import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { subjectsScheduleDetailActionsActions } from 'features/SubjectsScheduleDetail';
import {
    SubjectsScheduleDetailActions,
    SubjectsScheduleDetailActionsErrors,
} from '../../types/subjectsScheduleDetailActions';
import {
    getSubjectsScheduleDetailActions,
} from '../../selectors/getSubjectsScheduleDetailActions/getSubjectsScheduleDetailActions';

export const updateSubjectsScheduleDetail = createAsyncThunk<SubjectsScheduleDetailActions, string[], ThunkConfig<SubjectsScheduleDetailActionsErrors>>(
    'subjectsScheduleDetail/updateSubjectsScheduleDetail',
    async ([year, week], thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const actions = getSubjectsScheduleDetailActions(getState() as StateSchema);
        const data = {
            actions,
        };

        try {
            const response = await extra.api.post<SubjectsScheduleDetailActions>(`/curriculum/subject-schedule/${year}/${week}`, data);

            dispatch(subjectsScheduleDetailActionsActions.clearActions());

            return response.data;
        } catch (err: any) {
            console.log(err.response.data);
            return rejectWithValue({
                errors: err.response.data,
                status: err.response.status,
            });
        }
    },
);
