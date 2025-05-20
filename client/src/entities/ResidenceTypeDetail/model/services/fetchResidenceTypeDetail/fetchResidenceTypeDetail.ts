import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ResidenceTypeDetailType } from 'entities/ResidenceTypeDetail/model/types/residenceTypeDetail';
import { editResidenceTypeActions } from 'features/ResidenceTypes/EditResidenceType';

export const fetchResidenceTypeDetail = createAsyncThunk<ResidenceTypeDetailType, string, ThunkConfig<string>>(
    'residenceTypes/fetchResidenceTypeDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<ResidenceTypeDetailType>(`/college/residence-types/${id}`);

            dispatch(editResidenceTypeActions.setResidenceTypeData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
