import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchArrivalSources } from 'entities/ArrivalSources';
import {
    fetchArrivalSourceDetail,
} from 'entities/ArrivalSourceDetail/model/services/fetchArrivalSourceDetail/fetchArrivalSourceDetail';
import { EditArrivalSourceErrors } from '../../types/editArrivalSource';
import {
    getEditArrivalSourceNewFieldsData,
} from '../../selectors/getEditArrivalSourceNewFieldsData/getEditArrivalSourceNewFieldsData';

export const editArrivalSource = createAsyncThunk<void, string, ThunkConfig<EditArrivalSourceErrors>>(
    'arrivalSources/editArrivalSource',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const arrivalSourceNewData = getEditArrivalSourceNewFieldsData(getState() as any);

        const data = {
            name: arrivalSourceNewData,
        };

        try {
            const response = await extra.api.put<void>(`/college/student-arrival-sources/${id}`, data);

            dispatch(fetchArrivalSources());
            dispatch(fetchArrivalSourceDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
