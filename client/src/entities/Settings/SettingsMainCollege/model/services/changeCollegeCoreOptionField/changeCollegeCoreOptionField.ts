import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    fetchCollegeCoreOptions,
} from '../fetchCollegeCoreOptions/fetchCollegeCoreOptions';

interface DataToSend {
    [value: string]: string | number;
}

export const changeCollegeCoreOptionField = createAsyncThunk<string, DataToSend, ThunkConfig<string>>(
    'settings/changeCollegeCoreOptionField',
    async (data, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.put<string>('/core/options/', data);

            dispatch(fetchCollegeCoreOptions());

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
