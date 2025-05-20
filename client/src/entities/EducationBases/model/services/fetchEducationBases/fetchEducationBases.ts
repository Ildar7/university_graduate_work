import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { EducationBasesError, EducationBasesType } from '../../types/educationBases';

export const fetchEducationBases = createAsyncThunk<EducationBasesType[], void, ThunkConfig<EducationBasesError>>(
    'educationBases/fetchEducationBases',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<EducationBasesType[]>('/college/education-bases/');

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
