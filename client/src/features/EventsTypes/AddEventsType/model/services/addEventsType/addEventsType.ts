import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AddEventsTypeErrors, AddEventsTypeType } from 'features/EventsTypes/AddEventsType';
import { fetchEventsTypes } from 'entities/EventsTypes/model/services/fetchEventsTypes/fetchEventsTypes';
import { getAddEventsTypeTitle } from '../../selectors/getAddEventsTypeTitle/getAddEventsTypeTitle';
import { addEventsTypeActions } from '../../slice/addEventsTypeSlice';

export const addEventsType = createAsyncThunk<AddEventsTypeType, void, ThunkConfig<AddEventsTypeErrors>>(
    'eventsTypes/addEventsType',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addEventsTypeTitle = getAddEventsTypeTitle(getState() as any);

        const data = {
            name: addEventsTypeTitle,
        };

        try {
            const response = await extra.api.post<AddEventsTypeType>('/college/events/types/', data);

            dispatch(fetchEventsTypes());
            dispatch(addEventsTypeActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
