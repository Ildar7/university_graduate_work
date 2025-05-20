import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEducationalModules, fetchEducationalUnits } from 'entities/EducationalModules';
import { AddEduUnitErrors } from '../../types/addEduUnit';
import { addEduUnitActions } from '../../slice/addEduUnitSlice';
import { getAddEduUnitData } from '../../selectors/getAddEduUnitData/getAddEduUnitData';

export const addEduUnit = createAsyncThunk<any, number, ThunkConfig<AddEduUnitErrors>>(
    'references/addEduUnit',
    async (moduleId, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const data = getAddEduUnitData(getState() as any);

        const dataToSend = {
            ...data,
            module_id: moduleId,
        };

        try {
            const response = await extra.api.post<any>(`/curriculum/educational-modules/${moduleId}/units`, dataToSend);

            dispatch(fetchEducationalModules());
            dispatch(fetchEducationalUnits());
            dispatch(addEduUnitActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
