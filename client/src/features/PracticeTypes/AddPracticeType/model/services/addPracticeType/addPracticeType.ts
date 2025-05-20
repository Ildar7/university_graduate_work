import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddPracticeTypeErrors, AddPracticeTypeType } from 'features/PracticeTypes/AddPracticeType';
import { fetchPracticeTypes } from 'entities/PracticeTypes/model/services/fetchPracticeTypes/fetchPracticeTypes';
import { getAddPracticeTypeTitle } from '../../selectors/getAddPracticeTypeTitle/getAddPracticeTypeTitle';
import { addPracticeTypeActions } from '../../slice/addPracticeTypeSlice';

export const addPracticeType = createAsyncThunk<AddPracticeTypeType, void, ThunkConfig<AddPracticeTypeErrors>>(
    'practiceTypes/addPracticeType',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addPracticeTypeTitle = getAddPracticeTypeTitle(getState() as any);

        const data = {
            name: addPracticeTypeTitle,
        };

        try {
            const response = await extra.api.post<AddPracticeTypeType>('/college/practice-types/', data);

            dispatch(fetchPracticeTypes());
            dispatch(addPracticeTypeActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
