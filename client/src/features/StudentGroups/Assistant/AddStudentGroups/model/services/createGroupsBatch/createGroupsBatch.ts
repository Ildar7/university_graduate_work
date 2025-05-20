import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import {
    getAddStudentGroupsGeneratedGroupsData,
} from '../../selectors/getAddStudentGroupsGeneratedGroups/getAddStudentGroupsGeneratedGroups';
import {
    AddStudentGroupsBatchData, AddStudentGroupsBatchError,
} from '../../types/addStudentGroupsBatch';

export const createGroupsBatch = createAsyncThunk<
    AddStudentGroupsBatchData,
    void,
    ThunkConfig<AddStudentGroupsBatchError>
>(
    'studentGroups/assistant/createGroupsBatch',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const data = getAddStudentGroupsGeneratedGroupsData(getState() as StateSchema);
        const dataToSend = data
            ?.filter((group) => group.checked)
            .map((group) => {
                const groupToReturn = { ...group };
                delete groupToReturn.checked;
                delete groupToReturn.tempIndex;
                // @ts-ignore
                delete groupToReturn.humanReadable;

                return groupToReturn;
            });

        try {
            const response = await extra.api
                .post<AddStudentGroupsBatchData>('/college/groups/batch', dataToSend);

            return response.data;
        } catch (err: any) {
            return rejectWithValue(err);
        }
    },
);
