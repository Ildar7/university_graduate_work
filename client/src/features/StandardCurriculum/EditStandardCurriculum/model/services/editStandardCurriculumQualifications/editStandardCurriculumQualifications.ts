import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import {
    editStandardCurriculumModules,
} from 'features/StandardCurriculum/EditStandardCurriculum/model/services/editStandardCurriculumModules/editStandardCurriculumModules';
import { EditStandardCurriculumErrors, EditStandardCurriculumQualification } from '../../types/editStandardCurriculum';

export const editStandardCurriculumQualifications = createAsyncThunk<
    EditStandardCurriculumQualification,
    [number, EditStandardCurriculumQualification],
    ThunkConfig<EditStandardCurriculumErrors>
>(
    'standardCurriculum/editStandardCurriculumQualifications',
    async ([curriculaId, qualificationItem], thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch,
        } = thunkAPI;

        try {
            const response = await extra.api.put<EditStandardCurriculumQualification>(
                `/curriculum/standard-curricula/${curriculaId}/qualifications/${qualificationItem.standard_curriculum_qualification_id}`,
                excludePropertiesFromObject(qualificationItem, ['modules', 'total', 'standard_curriculum_qualification_id']),
            );

            qualificationItem.modules.forEach((module) => {
                dispatch(editStandardCurriculumModules([
                    curriculaId,
                    // @ts-ignore
                    {
                        ...module,
                        standard_curriculum_id: curriculaId,
                        standard_curriculum_qualification_id: qualificationItem.standard_curriculum_qualification_id,
                    },
                ]));
            });

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
