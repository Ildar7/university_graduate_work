import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddPerformanceTypeErrors, AddPerformanceTypeType } from 'features/PerformanceTypes/AddPerformanceType';
import { fetchPerformanceTypes } from 'entities/PerformanceTypes/model/services/fetchPerformanceTypes/fetchPerformanceTypes';
import {
    getAddPerformanceTypeValue,
} from 'features/PerformanceTypes/AddPerformanceType/model/selectors/getAddPerformanceTypeValue/getAddPerformanceTypeValue';
import { getAddPerformanceTypeTitle } from '../../selectors/getAddPerformanceTypeTitle/getAddPerformanceTypeTitle';
import { addPerformanceTypeActions } from '../../slice/addPerformanceTypeSlice';

export const addPerformanceType = createAsyncThunk<AddPerformanceTypeType, void, ThunkConfig<AddPerformanceTypeErrors>>(
    'performanceTypes/addPerformanceType',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addPerformanceTypeTitle = getAddPerformanceTypeTitle(getState() as any);
        const addPerformanceTypeValue = getAddPerformanceTypeValue(getState() as any);

        const data = {
            name: addPerformanceTypeTitle,
            value: addPerformanceTypeValue,
        };

        try {
            const response = await extra.api.post<AddPerformanceTypeType>('/college/student-performance-types/', data);

            dispatch(fetchPerformanceTypes());
            dispatch(addPerformanceTypeActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
