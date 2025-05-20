import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ClassRoomsData, ClassRoomsError } from '../../types/classRooms';

export const fetchClassRooms = createAsyncThunk<ClassRoomsData[], void, ThunkConfig<ClassRoomsError>>(
    'materialResources/fetchClassRooms',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<ClassRoomsData[]>('/material-resources/classrooms/');

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue({
                    status: 500,
                    error: 'timeout',
                });
            }

            return rejectWithValue({
                status: err.response.status,
                error: err.response.data.message,
            });
        }
    },
);
