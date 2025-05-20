import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { fetchWorkingCurriculum } from 'entities/WorkingCurriculum';
import { fetchWorkingCurriculumDetail } from 'entities/WorkingCurriculumDetail';
import { EditWorkingCurriculumErrors } from '../../types/editWorkingCurriculum';
import { getEditWorkingCurriculumNewFields } from '../../selectors/getEditWorkingCurriculum/getEditWorkingCurriculum';

export const editWorkingCurriculum = createAsyncThunk<void, string, ThunkConfig<EditWorkingCurriculumErrors>>(
    'workingCurriculum/editStudentGroups',
    async (id, thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch, getState,
        } = thunkAPI;

        const workingCurriculumNewData = getEditWorkingCurriculumNewFields(getState() as any);

        const data = {
            ...workingCurriculumNewData,
            standard_curriculum_id: Number(String(workingCurriculumNewData!.standard_curriculum_id!).split(':')[0].split('№')[1]),
            academic_year_from: Number(workingCurriculumNewData!.academic_year_from!.split(' -')[0]),
        };

        try {
            const response = await extra.api.put<void>(`/curriculum/working-curriculum/${id}`, data);

            dispatch(fetchWorkingCurriculum());
            dispatch(fetchWorkingCurriculumDetail(id));

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
