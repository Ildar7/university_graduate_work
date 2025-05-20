import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StandardCurriculumType } from 'entities/StandardCurriculum';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { addStandardCurriculumActions } from 'features/StandardCurriculum/AddStandardCurriculum';
import {
    addStandardCurriculumModules,
} from 'features/StandardCurriculum/AddStandardCurriculum/model/services/addStandardCurriculumModules/addStandardCurriculumModules';
import { AddStandardCurriculumErrors, AddStandardCurriculumQualification } from '../../types/addStandardCurriculum';

export const addStandardCurriculumQualifications = createAsyncThunk<
    AddStandardCurriculumQualification,
    [number, AddStandardCurriculumQualification],
    ThunkConfig<AddStandardCurriculumErrors>
>(
    'standardCurriculum/editStandardCurriculumQualifications',
    async ([curriculaId, qualificationItem], thunkAPI) => {
        const {
            rejectWithValue, extra, dispatch,
        } = thunkAPI;

        try {
            const response = await extra.api.post<AddStandardCurriculumQualification>(
                `/curriculum/standard-curricula/${curriculaId}/qualifications/`,
                excludePropertiesFromObject(qualificationItem, ['modules', 'total', 'standard_curriculum_qualification_id']),
            );

            const filteredModules = qualificationItem.modules
                .filter((module) => module.standard_curriculum_module_id === null);

            filteredModules.forEach((module) => {
                dispatch(addStandardCurriculumModules([
                    curriculaId,
                    // @ts-ignore
                    {
                        ...module,
                        standard_curriculum_id: curriculaId,
                        standard_curriculum_qualification_id: response.data.standard_curriculum_qualification_id!,
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
