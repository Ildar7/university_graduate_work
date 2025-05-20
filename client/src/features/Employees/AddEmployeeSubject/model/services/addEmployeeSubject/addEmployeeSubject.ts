import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployeeDetail } from 'entities/EmployeeDetail';
import { getAddEmployeeSubjectData } from '../../selectors/getAddEmployeeSubject/getAddEmployeeSubject';
import { addEmployeeSubjectActions } from '../../slice/addEmployeeSubjectSlice';
import { AddEmployeeSubjectErrors, AddEmployeeSubjectType } from '../../types/addEmployeeSubject';

export const addEmployeeSubject = createAsyncThunk<AddEmployeeSubjectType, string, ThunkConfig<AddEmployeeSubjectErrors>>(
    'employeeSubject/addEmployeeSubject',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addNewEmployeeSubjectData = getAddEmployeeSubjectData(getState() as any);

        try {
            const response = await extra.api.post<AddEmployeeSubjectType>(`/human-resources/employees/${id}/subject`, addNewEmployeeSubjectData);

            dispatch(fetchEmployeeDetail(id));
            dispatch(addEmployeeSubjectActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
