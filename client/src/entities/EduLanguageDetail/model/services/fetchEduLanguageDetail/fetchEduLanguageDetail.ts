import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { EduLanguageDetailType } from 'entities/EduLanguageDetail/model/types/eduLanguageDetail';
import { editEduLanguageActions } from 'features/EduLanguages/EditEduLanguage';

export const fetchEduLanguageDetail = createAsyncThunk<EduLanguageDetailType, string, ThunkConfig<string>>(
    'eduLanguages/fetchEmployeeEducationDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<EduLanguageDetailType>(`/college/study-languages/${id}`);

            dispatch(editEduLanguageActions.setEduLanguageData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
