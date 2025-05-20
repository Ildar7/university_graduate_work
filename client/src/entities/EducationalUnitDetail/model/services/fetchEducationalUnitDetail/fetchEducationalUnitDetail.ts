import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { editEduUnitActions } from 'features/EduUnits/EditEduUnit';
import { EducationalUnitDetailData } from '../../types/educationalUnitDetail';

export const fetchEducationalUnitDetail = createAsyncThunk<EducationalUnitDetailData, string[], ThunkConfig<string>>(
    'references/fetchEducationalUnitDetail',
    async ([moduleId, unitId], thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<EducationalUnitDetailData>(
                `/curriculum/educational-modules/${moduleId}/units/${unitId}`,
            );

            dispatch(editEduUnitActions.setEditEduUnitData(response.data));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
