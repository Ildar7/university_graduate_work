import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEducationalModules, fetchEducationalUnits } from 'entities/EducationalModules';
import { fetchEducationalModuleDetail } from 'entities/EducationalModuleDetail';
import { fetchEducationalUnitDetail } from 'entities/EducationalUnitDetail';
import { EditEduUnitErrors } from '../../types/editEduUnit';
import {
    getEditEduUnitNewFieldsData,
} from '../../selectors/getEditEduUnitNewFieldsData/getEditEduUnitNewFieldsData';

export const editEduUnit = createAsyncThunk<void, string[], ThunkConfig<EditEduUnitErrors>>(
    'reference/editEduUnit',
    async ([moduleId, unitId], thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const eduModuleNewData = getEditEduUnitNewFieldsData(getState() as any);

        try {
            const response = await extra.api.put<void>(
                `/curriculum/educational-modules/${moduleId}/units/${unitId}`,
                eduModuleNewData,
            );

            dispatch(fetchEducationalModules());
            dispatch(fetchEducationalUnits());
            dispatch(fetchEducationalModuleDetail(moduleId));
            dispatch(fetchEducationalUnitDetail([moduleId, unitId]));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
