import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import {
    addStandardCurriculumModuleUnit,
} from 'features/StandardCurriculum/AddStandardCurriculum/model/services/addStandardCurriculumModuleUnit/addStandardCurriculumModuleUnit';
import { AddStandardCurriculumErrors, AddStandardCurriculumModule } from '../../types/addStandardCurriculum';

export const addStandardCurriculumModules = createAsyncThunk<
    AddStandardCurriculumModule,
    [number, AddStandardCurriculumModule],
    ThunkConfig<AddStandardCurriculumErrors>
>(
    'standardCurriculum/editStandardCurriculumModules',
    async ([curriculaId, moduleItem], thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch,
        } = thunkAPI;

        try {
            const response = await extra.api.post<AddStandardCurriculumModule>(
                `/curriculum/standard-curricula/${curriculaId}/modules/`,
                excludePropertiesFromObject(moduleItem, ['units', 'standard_curriculum_module_id']),
            );

            const filteredUnits = [...moduleItem.units
                .filter((unit) => unit.standard_curriculum_module_id === null)];

            filteredUnits.forEach((unit) => {
                dispatch(addStandardCurriculumModuleUnit([
                    curriculaId,
                    response.data.standard_curriculum_module_id!,
                    unit,
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
