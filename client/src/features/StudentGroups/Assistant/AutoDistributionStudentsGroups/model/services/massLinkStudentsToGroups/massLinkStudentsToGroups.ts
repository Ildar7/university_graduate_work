import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import {
    getAutoDistributionStudentGroupsGeneratedDistributionData,
} from '../../selectors/getAutoDistributionStudentGroupsGeneratedDistributon/getAutoDistributionStudentGroupsGeneratedDistributon';
import {
    AutoDistributionStudentGroupsMassLinkData,
} from '../../types/autoDistributionStudentGroupsMassLink';

export const massLinkStudentsToGroups = createAsyncThunk<
    AutoDistributionStudentGroupsMassLinkData,
    void,
    ThunkConfig<string>
>(
    'studentGroups/assistant/massLinkStudentsToGroups',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const data = getAutoDistributionStudentGroupsGeneratedDistributionData(getState() as StateSchema)?.studentsGroupsComparison;

        try {
            const response = await extra.api
                .post<AutoDistributionStudentGroupsMassLinkData>('/college/groups/students/batch', data);

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
