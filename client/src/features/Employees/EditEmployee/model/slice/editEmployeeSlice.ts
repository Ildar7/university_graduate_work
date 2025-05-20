import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeDetailType } from 'entities/EmployeeDetail';
import { format } from 'date-fns';
import { editEmployee } from 'features/Employees/EditEmployee/model/services/editEmployee/editEmployee';
import { EditEmployeeSchema } from '../types/editEmployee';

const initialState: EditEmployeeSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editEmployeeSlice = createSlice({
    name: 'editEmployeeSlice',
    initialState,
    reducers: {
        setEmployeeData: (state, action: PayloadAction<EmployeeDetailType | undefined>) => {
            if (action.payload) {
                state.data = {
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name,
                    middle_name: action.payload.middle_name,
                    phone_number: action.payload.phone_number,
                    address: action.payload.address,
                    govid: action.payload.govid,
                    birth_date: action.payload.birth_date
                        ? format(new Date(action.payload.birth_date), 'dd.MM.yyyy') : '',
                    is_staff: action.payload.is_staff,
                    date_of_employment: action.payload.date_of_employment,
                    work_experience: action.payload.work_experience,
                    teaching_experience: action.payload.teaching_experience,
                    arrival_order_number: `№${action.payload.arrival_order_number}`,
                    category_id: action.payload.category_id,
                    is_teacher: action.payload.is_teacher,
                    education_id: action.payload.education_id,
                    specialty: action.payload.specialty,
                    qualification: action.payload.qualification,
                    tariff_rate: action.payload.tariff_rate,
                    positions: action.payload.positions.map((pos) => pos.position_id),
                };
                state.newFields = state.data;
            }
        },
        setInputData: (state, action) => {
            const [name, value] = action.payload;

            if (!value && typeof value !== 'boolean') {
                state.newFields = {
                    ...state.newFields,
                    [name]: null,
                };
            } else {
                state.newFields = {
                    ...state.newFields,
                    [name]: value,
                };
            }
        },
        setPositionIds: (state, action: PayloadAction<number[]>) => {
            state.newFields = {
                ...state.newFields,
                positions: action.payload,
            };
        },
        clearNewFields: (state) => {
            state.newFields = state.data;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editEmployee.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editEmployee.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editEmployeeActions } = editEmployeeSlice;
export const { reducer: editEmployeeReducer } = editEmployeeSlice;
