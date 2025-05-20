import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PerformanceTypeDetailType } from 'entities/PerformanceTypeDetail/model/types/performanceTypeDetail';
import { editPerformanceTypeActions } from 'features/PerformanceTypes/EditPerformanceType';

export const fetchPerformanceTypeDetail = createAsyncThunk<PerformanceTypeDetailType, string, ThunkConfig<string>>(
    'performanceTypes/fetchPerformanceTypeDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<PerformanceTypeDetailType>(`/college/student-performance-types/${id}`);

            dispatch(editPerformanceTypeActions.setPerformanceTypeData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
