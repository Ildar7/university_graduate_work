import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchPracticeTypes } from 'entities/PracticeTypes';
import {
    fetchPracticeTypeDetail,
} from 'entities/PracticeTypeDetail/model/services/fetchPracticeTypeDetail/fetchPracticeTypeDetail';
import { EditPracticeTypeErrors } from '../../types/editPracticeType';
import {
    getEditPracticeTypeNewFieldsData,
} from '../../selectors/getEditPracticeTypeNewFieldsData/getEditPracticeTypeNewFieldsData';

export const editPracticeType = createAsyncThunk<void, string, ThunkConfig<EditPracticeTypeErrors>>(
    'practiceTypes/editPracticeType',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const practiceTypeNewData = getEditPracticeTypeNewFieldsData(getState() as any);

        const data = {
            name: practiceTypeNewData,
        };

        try {
            const response = await extra.api.put<void>(`/college/practice-types/${id}`, data);

            dispatch(fetchPracticeTypes());
            dispatch(fetchPracticeTypeDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
