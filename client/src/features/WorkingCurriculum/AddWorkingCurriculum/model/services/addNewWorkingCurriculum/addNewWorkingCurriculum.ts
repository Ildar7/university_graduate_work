import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchWorkingCurriculum } from 'entities/WorkingCurriculum';
import { addWorkingCurriculumActions } from '../../slice/addWorkingCurriculumSlice';
import { getAddWorkingCurriculumData } from '../../selectors/getAddWorkingCurriculum/getAddWorkingCurriculum';
import { AddWorkingCurriculumErrors, AddWorkingCurriculumType } from '../../types/addWorkingCurriculum';

export const addNewWorkingCurriculum = createAsyncThunk<AddWorkingCurriculumType, void, ThunkConfig<AddWorkingCurriculumErrors>>(
    'workingCurriculum/addEmployeeEducation',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const addNewWorkingCurriculumData = getAddWorkingCurriculumData(getState() as any);

        const data = {
            ...addNewWorkingCurriculumData,
            standard_curriculum_id: Number(addNewWorkingCurriculumData!.standard_curriculum_id!.split(':')[0].split('№')[1]),
            academic_year_from: Number(addNewWorkingCurriculumData!.academic_year_from!.split(' -')[0]),
        };

        try {
            const response = await extra.api.post<AddWorkingCurriculumType>('/curriculum/working-curriculum/', data);

            dispatch(fetchWorkingCurriculum());
            dispatch(addWorkingCurriculumActions.clearData());

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
