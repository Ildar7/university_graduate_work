import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArrivalSourceDetailType } from 'entities/ArrivalSourceDetail/model/types/arrivalSourceDetail';
import { editArrivalSourceActions } from 'features/ArrivalSources/EditArrivalSource';

export const fetchArrivalSourceDetail = createAsyncThunk<ArrivalSourceDetailType, string, ThunkConfig<string>>(
    'arrivalSources/fetchArrivalSourceDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<ArrivalSourceDetailType>(`/college/student-arrival-sources/${id}`);

            dispatch(editArrivalSourceActions.setArrivalSourceData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }
            return rejectWithValue('ERROR');
        }
    },
);
