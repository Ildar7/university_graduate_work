import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeeEducations } from 'entities/EmployeeEducations';
import {
    getAddEmployeeEducationData,
} from '../../selectors/getAddEmployeeEducation/getAddEmployeeEducation';
import { addEmployeeEducationActions } from '../../slice/addEmployeeEducationSlice';
import { AddEmployeeEducationErrors, AddEmployeeEducationType } from '../../types/addEmployeeEducation';

export const addEmployeeEducation = createAsyncThunk<AddEmployeeEducationType, void, ThunkConfig<AddEmployeeEducationErrors>>(
    'employeeEducations/addEmployeeEducation',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addNewEmployeeEducationData = getAddEmployeeEducationData(getState() as any);

        try {
            const response = await extra.api.post<AddEmployeeEducationType>('/human-resources/educations/', addNewEmployeeEducationData);

            dispatch(fetchEmployeeEducations());
            dispatch(addEmployeeEducationActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
