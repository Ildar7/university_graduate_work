import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import {
    AddStudentGroupsGeneratedGroupsData,
} from '../../types/addStudentGroupsGeneratedGroups';
import {
    getAddStudentGroupsCodesData,
} from '../../selectors/getAddStudentGroupsCodes/getAddStudentGroupsCodes';

export const generateGroups = createAsyncThunk<
    AddStudentGroupsGeneratedGroupsData[],
    void,
    ThunkConfig<string>
>(
    'studentGroups/assistant/generateGroups',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const data = getAddStudentGroupsCodesData(getState() as StateSchema);
        const dataToSend = data?.map((code) => (
            [Number(Object.keys(code)[0]), Object.values(code)[0]]
        ));

        try {
            const response = await extra.api
                .post<AddStudentGroupsGeneratedGroupsData[]>('/assistant/students/groups/generate/', dataToSend);

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
