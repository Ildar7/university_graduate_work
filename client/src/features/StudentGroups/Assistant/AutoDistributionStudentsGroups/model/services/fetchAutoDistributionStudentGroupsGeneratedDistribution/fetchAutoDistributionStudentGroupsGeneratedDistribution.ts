import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    AutoDistributionStudentGroupsGenerateData,
} from '../../types/autoDistributionStudentGroupsGenerate';
import {
    AutoDistributionStudentGroupsError,
} from '../../types/autoDistributionStudentGroups';

export const fetchAutoDistributionStudentGroupsGeneratedDistribution = createAsyncThunk<
    AutoDistributionStudentGroupsGenerateData,
    void,
    ThunkConfig<AutoDistributionStudentGroupsError>
>(
    'studentGroups/assistant/fetchAutoDistributionStudentGroupsGeneratedDistribution',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<AutoDistributionStudentGroupsGenerateData>(
                '/assistant/students/groups/generate-distribution/',
            );

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue({
                    status: 500,
                    error: 'timeout',
                });
            }

            return rejectWithValue({
                status: err.response.status,
                error: err.response.data.message,
            });
        }
    },
);
