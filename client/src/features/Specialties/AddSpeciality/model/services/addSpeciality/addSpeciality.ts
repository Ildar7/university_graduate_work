import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddSpecialityErrors, AddSpecialityType } from 'features/Specialties/AddSpeciality';
import { fetchSpecialties } from 'entities/Specialties/model/services/fetchSpecialties/fetchSpecialties';
import { getAddSpecialityTitle } from '../../selectors/getAddSpecialityTitle/getAddSpecialityTitle';
import { addSpecialityActions } from '../../slice/addSpecialitySlice';
import {
    getAddSpecialityCode,
} from '../../selectors/getAddSpecialityCode/getAddSpecialityCode';

export const addSpeciality = createAsyncThunk<AddSpecialityType, void, ThunkConfig<AddSpecialityErrors>>(
    'specialties/addSpeciality',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addSpecialityTitle = getAddSpecialityTitle(getState() as any);
        const addSpecialityCode = getAddSpecialityCode(getState() as any);

        const data = {
            name: addSpecialityTitle,
            code: addSpecialityCode,
        };

        try {
            const response = await extra.api.post<AddSpecialityType>('/college/specialties/', data);

            dispatch(fetchSpecialties());
            dispatch(addSpecialityActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
