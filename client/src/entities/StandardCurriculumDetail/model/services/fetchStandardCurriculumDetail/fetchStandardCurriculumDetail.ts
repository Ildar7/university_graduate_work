import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { editStandardCurriculumActions } from 'features/StandardCurriculum/EditStandardCurriculum';
import {
    EditStandardCurriculumModule, EditStandardCurriculumQualification,
} from 'features/StandardCurriculum/EditStandardCurriculum/model/types/editStandardCurriculum';
import { StandardCurriculumDetailType } from '../../types/standardCurriculumDetail';

export const fetchStandardCurriculumDetail = createAsyncThunk<StandardCurriculumDetailType, string, ThunkConfig<string>>(
    'specialties/fetchStandardCurriculumDetail',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra, dispatch } = thunkAPI;

        try {
            const response = await extra.api.get<StandardCurriculumDetailType>(
                `/curriculum/standard-curricula/${id}/detailed`,
            ) as any;

            dispatch(editStandardCurriculumActions.setSpecialityId([
                'data', response.data.speciality_id,
            ]));
            dispatch(editStandardCurriculumActions.setSort([
                'data', response.data.sort,
            ]));
            dispatch(editStandardCurriculumActions.setDate([
                'data', response.data.date_of_order,
            ]));

            if (response.data.modules && response.data.modules.length) {
                dispatch(editStandardCurriculumActions.addModuleToGeneralModulesFromServer(
                    response.data.modules as EditStandardCurriculumModule[],
                ));
            }

            if (response.data.qualifications && response.data.qualifications.length) {
                dispatch(editStandardCurriculumActions.addQualificationToStructureFromServer(
                    response.data.qualifications as EditStandardCurriculumQualification[],
                ));
            }

            dispatch(editStandardCurriculumActions.setDataToChange());

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue('timeout');
            }

            return rejectWithValue('ERROR');
        }
    },
);
