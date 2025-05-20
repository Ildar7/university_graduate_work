import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { EduFormDetailType } from 'entities/EduFormDetail/model/types/eduFormDetail';
import { editEduFormActions } from 'features/EduForms/EditEduForm';

export const fetchEduFormDetail = createAsyncThunk<EduFormDetailType, string, ThunkConfig<string>>(
    'eduForms/fetchEduFormDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<EduFormDetailType>(`/college/education-forms/${id}`);

            dispatch(editEduFormActions.setEduFormData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }
            return rejectWithValue('ERROR');
        }
    },
);
