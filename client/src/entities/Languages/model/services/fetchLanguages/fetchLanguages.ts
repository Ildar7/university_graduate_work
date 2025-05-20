import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { LanguagesError, LanguagesType } from '../../types/languagesSchema';

export const fetchLanguages = createAsyncThunk<LanguagesType[], void, ThunkConfig<LanguagesError>>(
    'languages/fetchLanguages',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<LanguagesType[]>('/college/languages/');

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
