import { createSlice } from '@reduxjs/toolkit';
import {
    EMPLOYEES_TABLE_FIELDS_LOCALSTORAGE_KEY,
} from 'shared/const/localstorage';
import { EmployeesTableFieldsSchema } from '../types/employeesTableFields';
import { employeesTableCheckedFields } from '../../const/employeesTableCheckedFields';

const initialState: EmployeesTableFieldsSchema = {
    data: undefined,
};

const employeesTableFieldsSlice = createSlice({
    name: 'employeesTableFieldsSlice',
    initialState,
    reducers: {
        initFieldsData: (state) => {
            const fields = localStorage.getItem(EMPLOYEES_TABLE_FIELDS_LOCALSTORAGE_KEY);
            if (fields) {
                state.data = JSON.parse(fields);
            } else {
                state.data = employeesTableCheckedFields;
            }
        },
        setCheckedField: (state, action) => {
            // @ts-ignore
            state.data = {
                ...state.data || {},
                [action.payload[1]]: action.payload[0],
            };
        },
        saveCheckedFields: (state) => {
            localStorage.setItem(EMPLOYEES_TABLE_FIELDS_LOCALSTORAGE_KEY, JSON.stringify(state.data));
        },
        clearCheckedFields: (state) => {
            state.data = employeesTableCheckedFields;
            localStorage.setItem(EMPLOYEES_TABLE_FIELDS_LOCALSTORAGE_KEY, JSON.stringify(employeesTableCheckedFields));
        },
    },
});

export const { actions: employeesTableFieldsActions } = employeesTableFieldsSlice;
export const { reducer: employeesTableFieldsReducer } = employeesTableFieldsSlice;
