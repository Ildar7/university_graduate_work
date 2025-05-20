import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditEventsTypeSchema } from 'features/EventsTypes/EditEventsType';
import { EventsTypeDetailType } from 'entities/EventsTypeDetail';
import {
    editEventsType,
} from '../services/editEventsType/editEventsType';

const initialState: EditEventsTypeSchema = {
    data: undefined,
    newFields: undefined,
    isLoading: false,
    errors: undefined,
};

const editEventsTypeSlice = createSlice({
    name: 'editEventsType',
    initialState,
    reducers: {
        setEventsTypeData: (state, action: PayloadAction<EventsTypeDetailType | undefined>) => {
            if (action.payload) {
                state.data = action.payload;
                state.newFields = {
                    title: state.data.typeofevent,
                };
            }
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.newFields!.title = action.payload;
        },
        clearNewFields: (state) => {
            state.newFields = {
                title: state.data?.typeofevent || null,
            };
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editEventsType.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editEventsType.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editEventsType.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: editEventsTypeActions } = editEventsTypeSlice;
export const { reducer: editEventsTypeReducer } = editEventsTypeSlice;
