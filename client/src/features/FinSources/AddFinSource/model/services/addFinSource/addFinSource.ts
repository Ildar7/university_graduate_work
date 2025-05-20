import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddFinSourceErrors, AddFinSourceType } from 'features/FinSources/AddFinSource';
import { fetchFinSources } from 'entities/FinSources/model/services/fetchFinSources/fetchFinSources';
import { getAddFinSourceTitle } from '../../selectors/getAddFinSourceTitle/getAddFinSourceTitle';
import { addFinSourceActions } from '../../slice/addFinSourceSlice';

export const addFinSource = createAsyncThunk<AddFinSourceType, void, ThunkConfig<AddFinSourceErrors>>(
    'finSources/addFinSource',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addFinSourceTitle = getAddFinSourceTitle(getState() as any);

        const data = {
            source: addFinSourceTitle,
        };

        try {
            const response = await extra.api.post<AddFinSourceType>('/college/financing-sources/', data);

            dispatch(fetchFinSources());
            dispatch(addFinSourceActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
