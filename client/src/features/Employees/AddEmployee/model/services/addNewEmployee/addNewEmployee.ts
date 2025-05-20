import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { formatDate } from 'shared/lib/helpers/formatDate/formatDate';
import { formatPhoneNumber } from 'shared/lib/helpers/formatPhoneNumber/formatPhoneNumber';
import { fetchEmployees } from 'entities/Employees';
import { getAddEmployeeData } from 'features/Employees/AddEmployee/model/selectors/getAddEmployeeData/getAddEmployeeData';
import { addEmployeeActions } from '../../slice/addEmployeeSlice';
import { AddEmployeeErrors, AddEmployeeType } from '../../types/addEmployee';

export const addNewEmployee = createAsyncThunk<AddEmployeeType, void, ThunkConfig<AddEmployeeErrors>>(
    'employees/addEmployeeGroup',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addNewEmployeeData = getAddEmployeeData(getState() as any);

        const birthDateFormat = addNewEmployeeData?.birth_date ? addNewEmployeeData?.birth_date.split('.') : '';

        const data = {
            ...addNewEmployeeData,
            birth_date: formatDate(birthDateFormat),
            date_of_employment: addNewEmployeeData?.date_of_employment,
            phone_number: formatPhoneNumber(addNewEmployeeData?.phone_number || ''),
            work_experience: +addNewEmployeeData!.work_experience!,
            teaching_experience: Number(addNewEmployeeData!.teaching_experience),
            tariff_rate: Number(addNewEmployeeData!.tariff_rate!).toFixed(1).toString(),
            arrival_order_number: addNewEmployeeData?.arrival_order_number?.split('№')[1],
        };

        try {
            const response = await extra.api.post<AddEmployeeType>('/human-resources/employees/', data);

            dispatch(fetchEmployees());
            dispatch(addEmployeeActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
