import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchResidenceTypes } from 'entities/ResidenceTypes';
import {
    fetchResidenceTypeDetail,
} from 'entities/ResidenceTypeDetail/model/services/fetchResidenceTypeDetail/fetchResidenceTypeDetail';
import { EditResidenceTypeErrors } from '../../types/editResidenceType';
import {
    getEditResidenceTypeNewFieldsData,
} from '../../selectors/getEditResidenceTypeNewFieldsData/getEditResidenceTypeNewFieldsData';

export const editResidenceType = createAsyncThunk<void, string, ThunkConfig<EditResidenceTypeErrors>>(
    'residenceTypes/editResidenceType',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const residenceTypeNewData = getEditResidenceTypeNewFieldsData(getState() as any);

        const data = {
            title: residenceTypeNewData,
        };

        try {
            const response = await extra.api.put<void>(`/college/residence-types/${id}`, data);

            dispatch(fetchResidenceTypes());
            dispatch(fetchResidenceTypeDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
