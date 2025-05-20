import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { workingCurriculumExtractActions } from 'entities/WorkingCurriculumExtract';
import {
    fetchWorkingCurriculumExtract,
} from 'entities/WorkingCurriculumExtract/model/services/fetchWorkingCurriculumExtract/fetchWorkingCurriculumExtract';
import {
    WorkingCurriculumExtractDistributionActions,
} from '../../types/workingCurriculumExtractDistributionActions';
import {
    getWorkingCurriculumExtractDistributionActions,
} from '../../selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';
import { WorkingCurriculumExtractActionsError } from '../../types/workingCurriculumExtractActions';

interface WorkingCurriculumExtractDistributionActionsToSend {
    actions: WorkingCurriculumExtractDistributionActions;
}
export const updateDistributionWorkingCurriculumExtract = createAsyncThunk<
    any,
    string,
    ThunkConfig<WorkingCurriculumExtractActionsError>
>(
    'workingCurriculum/updateDistributionWorkingCurriculumExtract',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, getState, dispatch,
        } = thunkAPI;

        const extractDistributionActions = getWorkingCurriculumExtractDistributionActions(getState() as StateSchema);

        const dataToSend: WorkingCurriculumExtractDistributionActionsToSend = {
            actions: {
                ...extractDistributionActions!,
                delete: extractDistributionActions!.delete?.length ? extractDistributionActions!.delete.filter((id) => id) : undefined,
                create: extractDistributionActions!.create?.length ? extractDistributionActions!.create : undefined,
                update: extractDistributionActions!.update?.length ? extractDistributionActions!.update : undefined,
            },
        };

        try {
            const response = await extra.api.post<any>(`/curriculum/working-curriculum/${id}/extract/distribution`, dataToSend);

            dispatch(workingCurriculumExtractActions.cancelChanges());
            dispatch(fetchWorkingCurriculumExtract(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                ...err.response.data,
                status: err.response.status,
            });
        }
    },
);
