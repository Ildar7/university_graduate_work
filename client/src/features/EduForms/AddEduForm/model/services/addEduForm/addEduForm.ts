import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddEduFormErrors, AddEduFormType } from 'features/EduForms/AddEduForm';
import { fetchEduForms } from 'entities/EduForms/model/services/fetchEduForms/fetchEduForms';
import { getAddEduFormTitle } from '../../selectors/getAddEduFormTitle/getAddEduFormTitle';
import { addEduFormActions } from '../../slice/addEduFormSlice';

export const addEduForm = createAsyncThunk<AddEduFormType, void, ThunkConfig<AddEduFormErrors>>(
    'eduForms/addEduForm',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addEduFormTitle = getAddEduFormTitle(getState() as any);

        const data = {
            title: addEduFormTitle,
        };

        try {
            const response = await extra.api.post<AddEduFormType>('/college/education-forms/', data);

            dispatch(fetchEduForms());
            dispatch(addEduFormActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
