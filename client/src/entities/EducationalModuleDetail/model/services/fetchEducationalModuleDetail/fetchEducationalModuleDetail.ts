import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { editEduModuleActions } from 'features/EduModules/EditEduModule';
import { EducationalModuleDetailData } from '../../types/educationalModuleDetail';

export const fetchEducationalModuleDetail = createAsyncThunk<EducationalModuleDetailData, string, ThunkConfig<string>>(
    'references/fetchEducationalModuleDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<EducationalModuleDetailData>(`/curriculum/educational-modules/${id}`);

            dispatch(editEduModuleActions.setEditEduModuleData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
