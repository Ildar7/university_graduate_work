import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { filterCreateActions } from 'shared/lib/helpers/workingCurriculumExtract/filterCreateActions/filterCreateActions';
import {
    getWorkingCurriculumExtractActions,
} from '../../selectors/getWorkingCurriculumExtract/getWorkingCurriculumExtract';
import {
    WorkingCurriculumExtractActionFields,
    WorkingCurriculumExtractActions,
    WorkingCurriculumExtractActionsError,
} from '../../types/workingCurriculumExtractActions';
import { WorkingCurriculumExtractSubjects } from '../../types/workingCurriculumExtractGeneral';

interface WorkingCurriculumExtractActionsToSend {
    actions: WorkingCurriculumExtractActions;
}
export const updateWorkingCurriculumExtract = createAsyncThunk<
    WorkingCurriculumExtractSubjects[],
    string,
    ThunkConfig<WorkingCurriculumExtractActionsError>
>(
    'workingCurriculum/updateWorkingCurriculumExtract',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, getState,
        } = thunkAPI;

        const extractActions = getWorkingCurriculumExtractActions(getState() as StateSchema);

        const deleteActions = extractActions!.delete?.length ? extractActions!.delete : undefined;
        const createActions = extractActions!.create?.length
            ? extractActions!.create
                .map((action) => ({
                    ...excludePropertiesFromObject(action, ['sortValue']) as WorkingCurriculumExtractActionFields,
                }))
                .filter((action) => filterCreateActions(action))
            : undefined;
        const updateActions = extractActions!.update?.length
            ? extractActions!.update.map((action) => ({
                ...action,
                fields: {
                    ...excludePropertiesFromObject(action.fields, ['sortValue']) as WorkingCurriculumExtractActionFields,
                },
            }))
            : undefined;

        const dataToSend: WorkingCurriculumExtractActionsToSend = {
            actions: {
                ...extractActions!,
                delete: deleteActions,
                create: createActions?.length ? createActions : undefined,
                update: updateActions,
            },
        };

        try {
            const response = await extra.api.post<WorkingCurriculumExtractSubjects[]>(`/curriculum/working-curriculum/${id}/extract/`, dataToSend);

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                ...err.response.data,
                status: err.response.status,
            });
        }
    },
);
