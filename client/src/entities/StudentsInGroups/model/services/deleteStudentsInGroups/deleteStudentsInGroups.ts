import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { StudentsInGroupsError } from '../../types/studentsInGroups';
import { getStudentsInGroupsDeletingData } from '../../selectors/getStudentsInGroups/getStudentsInGroups';

export const deleteStudentsInGroups = createAsyncThunk<string, void, ThunkConfig<StudentsInGroupsError>>(
    'students/deleteStudentsInGroups',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, getState,
        } = thunkAPI;

        const deletingStudentsInfo = getStudentsInGroupsDeletingData(getState() as StateSchema);
        const data = excludePropertiesFromObject(deletingStudentsInfo, ['groupId']);

        try {
            const response = await extra.api.delete<string>(
                `/college/groups/${deletingStudentsInfo!.groupId}/students/`,
                {
                    data,
                },
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
