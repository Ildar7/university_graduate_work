import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PracticeTypeDetailType } from 'entities/PracticeTypeDetail/model/types/practiceTypeDetail';
import { editPracticeTypeActions } from 'features/PracticeTypes/EditPracticeType';

export const fetchPracticeTypeDetail = createAsyncThunk<PracticeTypeDetailType, string, ThunkConfig<string>>(
    'practiceTypes/fetchPracticeTypeDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<PracticeTypeDetailType>(`/college/practice-types/${id}`);

            dispatch(editPracticeTypeActions.setPracticeTypeData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
