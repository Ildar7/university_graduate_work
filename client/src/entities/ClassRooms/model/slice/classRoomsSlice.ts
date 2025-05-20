import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClassRoomsData, ClassRoomsSchema } from '../types/classRooms';
import { fetchClassRooms } from '../services/fetchClassRooms/fetchClassRooms';

const initialState: ClassRoomsSchema = {
    data: undefined,
    isLoading: true,
    error: undefined,
};

const classRoomsSlice = createSlice({
    name: 'classRooms',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClassRooms.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchClassRooms.fulfilled, (state, action: PayloadAction<ClassRoomsData[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchClassRooms.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: classRoomsActions } = classRoomsSlice;
export const { reducer: classRoomsReducer } = classRoomsSlice;
