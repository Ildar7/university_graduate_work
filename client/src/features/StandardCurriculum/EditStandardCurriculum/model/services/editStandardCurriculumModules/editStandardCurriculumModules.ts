import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import {
    editStandardCurriculumModuleUnit, EditStandardCurriculumUnitWithStandardId,
} from '../../services/editStandardCurriculumModuleUnit/editStandardCurriculumModuleUnit';
import { EditStandardCurriculumErrors, EditStandardCurriculumModule } from '../../types/editStandardCurriculum';

export const editStandardCurriculumModules = createAsyncThunk<
    EditStandardCurriculumModule,
    [number, EditStandardCurriculumModule],
    ThunkConfig<EditStandardCurriculumErrors>
>(
    'standardCurriculum/editStandardCurriculumModules',
    async ([curriculaId, moduleItem], thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch,
        } = thunkAPI;

        try {
            const response = await extra.api.put<EditStandardCurriculumModule>(
                `/curriculum/standard-curricula/${curriculaId}/modules/${moduleItem.standard_curriculum_module_id}`,
                excludePropertiesFromObject(moduleItem, ['units', 'standard_curriculum_module_id']),
            );

            moduleItem.units.forEach((unit) => {
                dispatch(editStandardCurriculumModuleUnit([
                    curriculaId,
                    moduleItem.standard_curriculum_module_id!,
                    unit as EditStandardCurriculumUnitWithStandardId,
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
