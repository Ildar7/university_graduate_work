import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { EditStandardCurriculumErrors, EditStandardCurriculumUnit } from '../../types/editStandardCurriculum';

export interface EditStandardCurriculumUnitWithStandardId extends EditStandardCurriculumUnit {
    standard_curriculum_modules_unit_id: number;
}
export const editStandardCurriculumModuleUnit = createAsyncThunk<
    EditStandardCurriculumUnit,
    [number, number, EditStandardCurriculumUnitWithStandardId],
    ThunkConfig<EditStandardCurriculumErrors>
>(
    'standardCurriculum/editStandardCurriculumQualifications',
    async ([curriculaId, moduleId, unitItem], thunkAPI) => {
        const {
            rejectWithValue, extra,
        } = thunkAPI;

        try {
            const response = await extra.api.put<EditStandardCurriculumUnit>(
                `/curriculum/standard-curricula/${curriculaId}/modules/${moduleId}/units/${unitItem.standard_curriculum_modules_unit_id}`,
                excludePropertiesFromObject(unitItem, ['standard_curriculum_module_id']),
            );

            return response.data;
        } catch (err: any) {
            return rejectWithValue({
                errors: err.response.data.errors,
                status: err.response.status,
            });
        }
    },
);
