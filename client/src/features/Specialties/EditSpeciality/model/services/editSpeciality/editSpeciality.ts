import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchSpecialties } from 'entities/Specialties';
import {
    fetchSpecialityDetail,
} from 'entities/SpecialityDetail/model/services/fetchSpecialityDetail/fetchSpecialityDetail';
import { EditSpecialityErrors } from '../../types/editSpeciality';
import {
    getEditSpecialityNewFieldsData,
} from '../../selectors/getEditSpecialityNewFieldsData/getEditSpecialityNewFieldsData';

export const editSpeciality = createAsyncThunk<void, string, ThunkConfig<EditSpecialityErrors>>(
    'specialties/editSpeciality',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const specialityNewData = getEditSpecialityNewFieldsData(getState() as any);

        const data = {
            name: specialityNewData?.title,
            code: specialityNewData?.code,
        };

        try {
            const response = await extra.api.put<void>(`/college/specialties/${id}`, data);

            dispatch(fetchSpecialties());
            dispatch(fetchSpecialityDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
