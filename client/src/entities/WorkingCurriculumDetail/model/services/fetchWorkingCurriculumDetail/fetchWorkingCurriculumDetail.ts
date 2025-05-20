import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { editWorkingCurriculumActions } from 'features/WorkingCurriculum/EditWorkingCurriculum';
import { WorkingCurriculumDetailType } from '../../types/workingCurriculumDetail';

export const fetchWorkingCurriculumDetail = createAsyncThunk<WorkingCurriculumDetailType, string, ThunkConfig<string>>(
    'workingCurriculum/fetchStudentGroupDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<WorkingCurriculumDetailType>(`/curriculum/working-curriculum/${id}`);

            const editData = {
                standard_curriculum_id: `
                №${response.data.standard_curriculum_id}: 
                ${response.data.standard_curricula.specialty.shifr_spec} - ${response.data.standard_curricula.specialty.speciality}
                `,
                education_base_id: response.data.education_base_id,
                is_full_time_education: response.data.is_full_time_education,
                approval_date: response.data.approval_date,
                version: response.data.version,
                academic_year_from: `${response.data.academic_year_from} - ${response.data.academic_year_from + 1}`,
                title: response.data.title,
                is_active: response.data.is_active,
            };

            dispatch(editWorkingCurriculumActions.setWorkingCurriculumData(editData));

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }
            return rejectWithValue('ERROR');
        }
    },
);
