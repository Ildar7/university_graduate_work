import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { FinSourceDetailType } from 'entities/FinSourceDetail/model/types/finSourceDetail';
import { editFinSourceActions } from 'features/FinSources/EditFinSource';

export const fetchFinSourceDetail = createAsyncThunk<FinSourceDetailType, string, ThunkConfig<string>>(
    'finSources/fetchFinSourceDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<FinSourceDetailType>(`/college/financing-sources/${id}`);

            dispatch(editFinSourceActions.setFinSourceData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
