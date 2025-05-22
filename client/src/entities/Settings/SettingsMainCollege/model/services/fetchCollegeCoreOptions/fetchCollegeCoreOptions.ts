import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { settingsMainCollegeActions } from 'entities/Settings/SettingsMainCollege';
import { SettingsMainCollegeData, SettingsMainCollegeFetchedData } from '../../types/settingsMainCollege';

export const fetchCollegeCoreOptions = createAsyncThunk<SettingsMainCollegeData, void, ThunkConfig<string>>(
    'settings/fetchCollegeCoreOptions',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<SettingsMainCollegeFetchedData[]>('/core/options/') as any;

            const resultData: SettingsMainCollegeData = {
                knrtu_kai: {
                    title: 'Общие',
                    options: (response.data as SettingsMainCollegeFetchedData[]).map((item) => ({
                        name: item.option_name,
                        group: item.option_group,
                        key: item.option_key,
                        value: item.option_value,
                        type: item.option_type,
                        id: item.option_id,
                    })),
                },
            };

            dispatch(settingsMainCollegeActions.setDataToChange(resultData));
            return resultData;
        } catch (err: any) {
            return rejectWithValue('ERROR');
        }
    },
);
