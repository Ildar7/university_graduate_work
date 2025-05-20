import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEducationalModules, fetchEducationalUnits } from 'entities/EducationalModules';
import { AddEduModuleErrors } from '../../types/addEduModule';
import { addEduModuleActions } from '../../slice/addEduModuleSlice';
import { getAddEduModuleData } from '../../selectors/getAddEduModuleData/getAddEduModuleData';

export const addEduModule = createAsyncThunk<any, void, ThunkConfig<AddEduModuleErrors>>(
    'references/addEduModule',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const data = getAddEduModuleData(getState() as any);

        try {
            const response = await extra.api.post<any>('/curriculum/educational-modules/', data);

            dispatch(fetchEducationalModules());
            dispatch(fetchEducationalUnits());
            dispatch(addEduModuleActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
