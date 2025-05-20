import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    changeCollegeCoreOptionField,
} from '../services/changeCollegeCoreOptionField/changeCollegeCoreOptionField';
import { SettingsMainCollegeData, SettingsMainCollegeSchema, SettingsMainTabs } from '../types/settingsMainCollege';
import {
    fetchCollegeCoreOptions,
} from '../services/fetchCollegeCoreOptions/fetchCollegeCoreOptions';

const initialState: SettingsMainCollegeSchema = {
    data: undefined,
    dataToChange: undefined,
    tabs: [],
    isLoadingCollegeData: true,
    errorCollegeData: undefined,
    changeStatus: undefined,
    isLoadingChangeField: false,
    errorChangeField: undefined,
};

const settingsMainCollegeSlice = createSlice({
    name: 'settingsMainCollege',
    initialState,
    reducers: {
        undefineChangeStatus: (state) => {
            state.changeStatus = undefined;
        },
        undefineChangeError: (state) => {
            state.errorChangeField = undefined;
        },
        setDataToChange: (state, action: PayloadAction<SettingsMainCollegeData>) => {
            state.dataToChange = action.payload;
        },
        setTabs: (state, action: PayloadAction<SettingsMainTabs[]>) => {
            state.tabs = [...action.payload];
        },
        changeActiveTab: (state, action: PayloadAction<string>) => {
            const deactiveTabs = state.tabs!.map((tab) => ({
                ...tab,
                active: false,
            }));

            const activateTab = deactiveTabs.map((tab) => (
                tab.name === action.payload
                    ? {
                        ...tab,
                        active: true,
                    } : {
                        ...tab,
                    }
            ));

            state.tabs = [...activateTab];
        },
        editOptionValue: (state, action: PayloadAction<[string, number, string, string]>) => {
            if (action.payload[3] === 'number') {
                if (!action.payload[2].includes('.')) {
                    state.dataToChange![action.payload[0]].options = state.dataToChange![action.payload[0]].options.map((option) => (
                        option.id === action.payload[1]
                            ? {
                                ...option,
                                value: Number(action.payload[2]),
                            } : {
                                ...option,
                            }
                    ));
                }
            } else {
                state.dataToChange![action.payload[0]].options = state.dataToChange![action.payload[0]].options.map((option) => (
                    option.id === action.payload[1]
                        ? {
                            ...option,
                            value: action.payload[2],
                        } : {
                            ...option,
                        }
                ));
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollegeCoreOptions.pending, (state) => {
                state.errorCollegeData = undefined;
                state.isLoadingCollegeData = true;
            })
            .addCase(fetchCollegeCoreOptions.fulfilled, (state, action: PayloadAction<SettingsMainCollegeData>) => {
                state.isLoadingCollegeData = false;
                state.data = action.payload;
            })
            .addCase(fetchCollegeCoreOptions.rejected, (state, action) => {
                state.isLoadingCollegeData = false;
                state.errorCollegeData = action.payload;
            })
            .addCase(changeCollegeCoreOptionField.pending, (state) => {
                state.errorChangeField = undefined;
                state.isLoadingChangeField = true;
            })
            .addCase(changeCollegeCoreOptionField.fulfilled, (state, action: PayloadAction<string>) => {
                state.isLoadingChangeField = false;
                state.changeStatus = action.payload;
            })
            .addCase(changeCollegeCoreOptionField.rejected, (state, action) => {
                state.isLoadingChangeField = false;
                state.errorChangeField = action.payload;
            });
    },
});

export const { actions: settingsMainCollegeActions } = settingsMainCollegeSlice;
export const { reducer: settingsMainCollegeReducer } = settingsMainCollegeSlice;
