import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { settingsMainCollegeActions } from 'entities/Settings/SettingsMainCollege';
import { SettingsMainCollegeData } from '../../types/settingsMainCollege';

export const fetchCollegeCoreOptions = createAsyncThunk<SettingsMainCollegeData, void, ThunkConfig<string>>(
    'settings/fetchCollegeCoreOptions',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<SettingsMainCollegeData>('/core/options/');

            dispatch(settingsMainCollegeActions.setDataToChange(response.data));

            return response.data;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
