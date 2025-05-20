import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEmployees } from 'entities/Employees';
import { formatDate } from 'shared/lib/helpers/formatDate/formatDate';
import { formatPhoneNumber } from 'shared/lib/helpers/formatPhoneNumber/formatPhoneNumber';
import { fetchEmployeeDetail } from 'entities/EmployeeDetail';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { format } from 'date-fns';
import { getEditEmployeeNewFieldsData } from '../../selectors/getEditEmployeeNewFieldsData/getEditEmployeeNewFieldsData';
import { EditEmployeeErrors, NewFieldsType } from '../../types/editEmployee';

export const editEmployee = createAsyncThunk<void, string, ThunkConfig<EditEmployeeErrors>>(
    'employees/editEmployee',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const employeeNewData = getEditEmployeeNewFieldsData(getState() as any);

        const birthDateFormat = employeeNewData?.birth_date ? employeeNewData?.birth_date.split('.') : '';

        const data: Omit<NewFieldsType, 'positions'> = {
            ...excludePropertiesFromObject(employeeNewData, ['positions']),
            birth_date: formatDate(birthDateFormat),
            date_of_employment: format(new Date(employeeNewData!.date_of_employment!), 'yyyy-MM-dd'),
            phone_number: employeeNewData!.phone_number![0] === '+'
                ? formatPhoneNumber(employeeNewData?.phone_number || '')
                : employeeNewData?.phone_number,
            work_experience: +employeeNewData!.work_experience!,
            teaching_experience: Number(employeeNewData!.teaching_experience),
            tariff_rate: Number(employeeNewData!.tariff_rate!).toFixed(1).toString(),
            arrival_order_number: employeeNewData?.arrival_order_number?.split('№')[1],
        };

        try {
            const response = await extra.api.put<void>(`/human-resources/employees/${id}`, data);

            dispatch(fetchEmployees());
            dispatch(fetchEmployeeDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
