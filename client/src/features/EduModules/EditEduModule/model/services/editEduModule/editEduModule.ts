import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEducationalModules, fetchEducationalUnits } from 'entities/EducationalModules';
import { fetchEducationalModuleDetail } from 'entities/EducationalModuleDetail';
import { EditEduModuleErrors } from '../../types/editEduModule';
import {
    getEditEduModuleNewFieldsData,
} from '../../selectors/getEditEduModuleNewFieldsData/getEditEduModuleNewFieldsData';

export const editEduModule = createAsyncThunk<void, string, ThunkConfig<EditEduModuleErrors>>(
    'reference/editEduUnit',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const eduModuleNewData = getEditEduModuleNewFieldsData(getState() as any);

        try {
            const response = await extra.api.put<void>(`/curriculum/educational-modules/${id}`, eduModuleNewData);

            dispatch(fetchEducationalModules());
            dispatch(fetchEducationalUnits());
            dispatch(fetchEducationalModuleDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
