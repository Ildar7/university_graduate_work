import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StudentsInGroupsAction, StudentsInGroupsError } from '../../types/studentsInGroups';

export const moveStudentsInGroups = createAsyncThunk<string, [number, StudentsInGroupsAction], ThunkConfig<StudentsInGroupsError>>(
    'students/moveStudentsInGroups',
    async ([groupId, data], thunkAPI) => {
        const {
            rejectWithValue, extra,
        } = thunkAPI;

        try {
            const response = await extra.api.post<string>(
                `/college/groups/${groupId}/students/`,
                data,
            );

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                error: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
