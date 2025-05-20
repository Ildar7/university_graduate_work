import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SpecialityDetailType } from 'entities/SpecialityDetail/model/types/specialityDetail';
import { editSpecialityActions } from 'features/Specialties/EditSpeciality';

export const fetchSpecialityDetail = createAsyncThunk<SpecialityDetailType, string, ThunkConfig<string>>(
    'specialties/fetchStandardCurriculumDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<SpecialityDetailType>(`/college/specialties/${id}`);

            dispatch(editSpecialityActions.setSpecialityData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
