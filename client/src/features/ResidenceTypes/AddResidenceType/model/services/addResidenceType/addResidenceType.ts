import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddResidenceTypeErrors, AddResidenceTypeType } from 'features/ResidenceTypes/AddResidenceType';
import { fetchResidenceTypes } from 'entities/ResidenceTypes/model/services/fetchResidenceTypes/fetchResidenceTypes';
import { getAddResidenceTypeTitle } from '../../selectors/getAddResidenceTypeTitle/getAddResidenceTypeTitle';
import { addResidenceTypeActions } from '../../slice/addResidenceTypeSlice';

export const addResidenceType = createAsyncThunk<AddResidenceTypeType, void, ThunkConfig<AddResidenceTypeErrors>>(
    'residenceTypes/addResidenceType',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addResidenceTypeTitle = getAddResidenceTypeTitle(getState() as any);

        const data = {
            title: addResidenceTypeTitle,
        };

        try {
            const response = await extra.api.post<AddResidenceTypeType>('/college/residence-types/', data);

            dispatch(fetchResidenceTypes());
            dispatch(addResidenceTypeActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
