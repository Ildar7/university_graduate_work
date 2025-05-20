import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    AddStudentGroupsSpecialtiesData,
} from '../../types/addStudentGroupsSpecialties';
import { AddStudentGroupsError } from '../../types/addStudentGroups';
import { addStudentGroupsActions } from '../../slice/addStudentGroupsSlice';

export const fetchAddStudentGroupsSpecialties = createAsyncThunk<
    AddStudentGroupsSpecialtiesData[],
    void,
    ThunkConfig<AddStudentGroupsError>
>(
    'studentGroups/assistant/fetchAddStudentGroupsSpecialties',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<AddStudentGroupsSpecialtiesData[]>(
                '/assistant/students/groups/specialties',
            );

            dispatch(addStudentGroupsActions.initCodes(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue({
                    status: 500,
                    error: 'timeout',
                });
            }

            return rejectWithValue({
                status: err.response.status,
                error: err.response.data.message,
            });
        }
    },
);
