import { createSlice } from '@reduxjs/toolkit';
import { STUDENTS_TABLE_FIELDS_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { StudentsTableFieldsSchema } from '../types/studentsTableFields';
import { studentsTableCheckedFields } from '../../const/studentsTableCheckedFields';

const initialState: StudentsTableFieldsSchema = {
    data: undefined,
};

const studentsTableFieldsSlice = createSlice({
    name: 'studentsTableFieldsSlice',
    initialState,
    reducers: {
        initFieldsData: (state) => {
            const fields = localStorage.getItem(STUDENTS_TABLE_FIELDS_LOCALSTORAGE_KEY);
            if (fields) {
                state.data = JSON.parse(fields);
            } else {
                state.data = studentsTableCheckedFields;
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
            localStorage.setItem(STUDENTS_TABLE_FIELDS_LOCALSTORAGE_KEY, JSON.stringify(state.data));
        },
        clearCheckedFields: (state) => {
            state.data = studentsTableCheckedFields;
            localStorage.setItem(STUDENTS_TABLE_FIELDS_LOCALSTORAGE_KEY, JSON.stringify(studentsTableCheckedFields));
        },
    },
});

export const { actions: studentsTableFieldsActions } = studentsTableFieldsSlice;
export const { reducer: studentsTableFieldsReducer } = studentsTableFieldsSlice;
