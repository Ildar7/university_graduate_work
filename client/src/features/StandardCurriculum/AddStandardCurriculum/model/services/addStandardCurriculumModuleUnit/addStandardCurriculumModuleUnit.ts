import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StandardCurriculumType } from 'entities/StandardCurriculum';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { addStandardCurriculumActions } from 'features/StandardCurriculum/AddStandardCurriculum';
import {
    addStandardCurriculumModules,
} from 'features/StandardCurriculum/AddStandardCurriculum/model/services/addStandardCurriculumModules/addStandardCurriculumModules';
import {
    AddStandardCurriculumErrors,
    AddStandardCurriculumQualification,
    AddStandardCurriculumUnit,
} from '../../types/addStandardCurriculum';

export const addStandardCurriculumModuleUnit = createAsyncThunk<
    AddStandardCurriculumUnit,
    [number, number, AddStandardCurriculumUnit],
    ThunkConfig<AddStandardCurriculumErrors>
>(
    'standardCurriculum/editStandardCurriculumQualifications',
    async ([curriculaId, moduleId, unitItem], thunkAPI) => {
        const {
            rejectWithValue, extra,
        } = thunkAPI;

        try {
            const response = await extra.api.post<AddStandardCurriculumUnit>(
                `/curriculum/standard-curricula/${curriculaId}/modules/${moduleId}/units/`,
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
