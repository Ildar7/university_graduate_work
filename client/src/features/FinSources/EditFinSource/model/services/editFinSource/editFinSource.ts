import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchFinSources } from 'entities/FinSources';
import {
    fetchFinSourceDetail,
} from 'entities/FinSourceDetail/model/services/fetchFinSourceDetail/fetchFinSourceDetail';
import { EditFinSourceErrors } from '../../types/editFinSource';
import {
    getEditFinSourceNewFieldsData,
} from '../../selectors/getEditFinSourceNewFieldsData/getEditFinSourceNewFieldsData';

export const editFinSource = createAsyncThunk<void, string, ThunkConfig<EditFinSourceErrors>>(
    'finSources/editFinSource',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const finSourceNewData = getEditFinSourceNewFieldsData(getState() as any);

        const data = {
            source: finSourceNewData,
        };

        try {
            const response = await extra.api.put<void>(`/college/financing-sources/${id}`, data);

            dispatch(fetchFinSources());
            dispatch(fetchFinSourceDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
