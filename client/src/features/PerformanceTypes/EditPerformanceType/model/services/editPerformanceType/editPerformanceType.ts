import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchPerformanceTypes } from 'entities/PerformanceTypes';
import {
    fetchPerformanceTypeDetail,
} from 'entities/PerformanceTypeDetail/model/services/fetchPerformanceTypeDetail/fetchPerformanceTypeDetail';
import { EditPerformanceTypeErrors } from '../../types/editPerformanceType';
import {
    getEditPerformanceTypeNewFieldsData,
} from '../../selectors/getEditPerformanceTypeNewFieldsData/getEditPerformanceTypeNewFieldsData';

export const editPerformanceType = createAsyncThunk<void, string, ThunkConfig<EditPerformanceTypeErrors>>(
    'performanceTypes/editPerformanceType',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const performanceTypeNewData = getEditPerformanceTypeNewFieldsData(getState() as any);

        const data = {
            name: performanceTypeNewData?.title,
            value: +performanceTypeNewData!.value!,
        };

        try {
            const response = await extra.api.put<void>(`/college/student-performance-types/${id}`, data);

            dispatch(fetchPerformanceTypes());
            dispatch(fetchPerformanceTypeDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
