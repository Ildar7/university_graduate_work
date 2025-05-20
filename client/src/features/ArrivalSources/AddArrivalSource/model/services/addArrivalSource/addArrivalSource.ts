import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddArrivalSourceErrors, AddArrivalSourceType } from 'features/ArrivalSources/AddArrivalSource';
import { fetchArrivalSources } from 'entities/ArrivalSources/model/services/fetchArrivalSources/fetchArrivalSources';
import { getAddArrivalSourceTitle } from '../../selectors/getAddArrivalSourceTitle/getAddArrivalSourceTitle';
import { addArrivalSourceActions } from '../../slice/addArrivalSourceSlice';

export const addArrivalSource = createAsyncThunk<AddArrivalSourceType, void, ThunkConfig<AddArrivalSourceErrors>>(
    'arrivalSources/addArrivalSource',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addArrivalSourceTitle = getAddArrivalSourceTitle(getState() as any);

        const data = {
            name: addArrivalSourceTitle,
        };

        try {
            const response = await extra.api.post<AddArrivalSourceType>('/college/student-arrival-sources/', data);

            dispatch(fetchArrivalSources());
            dispatch(addArrivalSourceActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
