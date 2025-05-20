import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchEduForms } from 'entities/EduForms';
import {
    fetchEduFormDetail,
} from 'entities/EduFormDetail/model/services/fetchEduFormDetail/fetchEduFormDetail';
import { EditEduFormErrors } from '../../types/editEduForm';
import {
    getEditEduFormNewFieldsData,
} from '../../selectors/getEditEduFormNewFieldsData/getEditEduFormNewFieldsData';

export const editEduForm = createAsyncThunk<void, string, ThunkConfig<EditEduFormErrors>>(
    'eduForms/editEduForm',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const eduFormNewData = getEditEduFormNewFieldsData(getState() as any);

        const data = {
            title: eduFormNewData,
        };

        try {
            const response = await extra.api.put<void>(`/college/education-forms/${id}`, data);

            dispatch(fetchEduForms());
            dispatch(fetchEduFormDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
