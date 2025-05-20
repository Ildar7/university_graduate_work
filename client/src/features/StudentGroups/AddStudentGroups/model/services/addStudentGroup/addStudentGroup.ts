import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchStudentGroups } from 'entities/StudentGroups';
import { AddStudentGroupErrors, AddStudentGroupType } from '../../types/addStudentGroups';
import { getAddStudentGroupData } from '../../selectors/getAddStudentGroup/getAddStudentGroup';
import { addStudentGroupsActions } from '../../slice/addStudentGroupsSlice';

export const addStudentGroup = createAsyncThunk<AddStudentGroupType, void, ThunkConfig<AddStudentGroupErrors>>(
    'students/addStudentGroupGroup',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addStudentGroupData = getAddStudentGroupData(getState() as any);

        try {
            const response = await extra.api.post<AddStudentGroupType>('/college/groups/', addStudentGroupData);

            dispatch(fetchStudentGroups());
            dispatch(addStudentGroupsActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
