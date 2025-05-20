import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    calculateQualificationTrainingTime,
} from 'entities/StandardCurriculum/model/services/calculateQualificationTrainingTime/calculateQualificationTrainingTime';
import {
    AddStandardCurriculumModule,
    AddStandardCurriculumQualification,
} from 'features/StandardCurriculum/AddStandardCurriculum/model/types/addStandardCurriculum';
import {
    EditStandardCurriculumModule,
    EditStandardCurriculumQualification,
    EditStandardCurriculumQualificationTrainingTime,
    EditStandardCurriculumSchema,
    EditStandardCurriculumUnit,
    NewModuleFields,
    NewQualificationFields,
    NewUnitFields,
    PlaceToAddNewItems,
} from '../types/editStandardCurriculum';
import { editStandardCurriculum } from '../services/editStandardCurriculum/editStandardCurriculum';
import {
    EditStandardCurriculumUnitWithStandardId,
} from '../services/editStandardCurriculumModuleUnit/editStandardCurriculumModuleUnit';

const initialState: EditStandardCurriculumSchema = {
    data: {
        general_info: {
            date_of_order: null,
            sort: 100,
            speciality_id: null,
        },
        structure: {
            general_modules: [],
            qualifications: [],
        },
    },
    newFields: undefined,
    newModuleModalData: {
        standard_curriculum_module_id: null,
        educational_module_id: null,
        sort: 100,
        has_in_basic_education: true,
        has_in_general_education: false,
        standard_curriculum_id: null,
        standard_curriculum_qualification_id: null,
        units: [],
    },
    newUnitModalData: {
        standard_curriculum_module_id: null,
        educational_modules_unit_id: null,
        sort: 100,
        has_in_basic_education: true,
        has_in_general_education: false,
    },
    newQualificationModalData: {
        standard_curriculum_qualification_id: null,
        consultations_hours_per_academic_year: null,
        sort: 100,
        qualification_id: null,
        compulsory_education_basic_credits_from: null,
        compulsory_education_basic_credits_to: null,
        compulsory_education_general_credits_from: null,
        compulsory_education_general_credits_to: null,
        modules: [],
        extracurricular_activities_hours_per_week: null,
        total: {
            basicEducationFrom: {
                hours: null,
                credits: null,
            },
            basicEducationTo: {
                hours: null,
                credits: null,
            },
            generalEducationFrom: {
                hours: null,
                credits: null,
            },
            generalEducationTo: {
                hours: null,
                credits: null,
            },
        },
    },
    editModuleModalData: {
        data: undefined,
        newFields: undefined,
    },
    editModuleUnitModalData: {
        data: undefined,
        newFields: undefined,
    },
    editQualificationModalData: {
        data: undefined,
        newFields: undefined,
    },
    modulesToDelete: [],
    moduleUnitsToDelete: [],
    qualificationsToDelete: [],
    isLoading: false,
    errors: undefined,
    isLoadingQualificationTrainingTime: false,
    errorQualificationTrainingTime: undefined,
};

const editStandardCurriculumSlice = createSlice({
    name: 'editStandardCurriculum',
    initialState,
    reducers: {

        // General Info Reducers Start
        setSpecialityId: (state, action: PayloadAction<[PlaceToAddNewItems, number]>) => {
            // eslint-disable-next-line prefer-destructuring
            state[action.payload[0]]!.general_info.speciality_id = action.payload[1];

            if (action.payload[0] === 'newFields') {
                state.newFields!.structure.qualifications.forEach((qualification) => {
                    if (qualification.standard_curriculum_qualification_id) {
                        state.qualificationsToDelete.push(qualification);
                    }
                });
            }

            state[action.payload[0]]!.structure.qualifications = initialState.data.structure.qualifications;
        },
        setSort: (state, action: PayloadAction<[PlaceToAddNewItems, number]>) => {
            // eslint-disable-next-line prefer-destructuring
            state[action.payload[0]]!.general_info.sort = action.payload[1];
        },
        setDate: (state, action: PayloadAction<[PlaceToAddNewItems, string | null]>) => {
            // eslint-disable-next-line prefer-destructuring
            state[action.payload[0]]!.general_info.date_of_order = action.payload[1];
        },
        // General Info Reducers End

        // New Module Modal Reducers Start
        changeNewModuleField: (state, action: PayloadAction<[string, NewModuleFields]>) => {
            // @ts-ignore
            state.newModuleModalData[action.payload[1]] = Number(action.payload[0]);
        },
        changeNewModuleCheck: (state, action: PayloadAction<[boolean, NewModuleFields]>) => {
            // @ts-ignore
            // eslint-disable-next-line prefer-destructuring
            state.newModuleModalData[action.payload[1]] = action.payload[0];
        },
        clearNewModuleData: (state) => {
            state.newModuleModalData = initialState.newModuleModalData;
        },
        // New Module Modal Reducers End

        // Edit Module Modal Reducers Start
        saveEditModuleChangesGeneralModules: (state, action: PayloadAction<[number, EditStandardCurriculumModule]>) => {
            state.newFields!.structure.general_modules = [...state.newFields!.structure.general_modules.filter(
                (module) => module.educational_module_id !== action.payload[0],
            ), action.payload[1]].sort((a, b) => a.sort - b.sort);
        },
        saveEditModuleChangesQualificationsStructure: (state, action: PayloadAction<[number, number, EditStandardCurriculumModule]>) => {
            state.newFields!.structure.qualifications = state.newFields!.structure.qualifications.map((qualification) => (
                qualification.qualification_id === action.payload[0]
                    ? {
                        ...qualification,
                        modules: [...qualification.modules.filter((module) => module.educational_module_id !== action.payload[1]), action.payload[2]]
                            .sort((a, b) => a.sort - b.sort),
                    }
                    : {
                        ...qualification,
                    }
            ));
        },
        changeEditModuleField: (state, action: PayloadAction<[string, NewModuleFields]>) => {
            // @ts-ignore
            state.editModuleModalData.newFields[action.payload[1]] = Number(action.payload[0]);
        },
        changeEditModuleCheck: (state, action: PayloadAction<[boolean, NewModuleFields]>) => {
            // @ts-ignore
            // eslint-disable-next-line prefer-destructuring
            state.editModuleModalData.newFields[action.payload[1]] = action.payload[0];
        },
        setEditModuleItem: (state, action: PayloadAction<EditStandardCurriculumModule>) => {
            state.editModuleModalData.data = action.payload;
            state.editModuleModalData.newFields = action.payload;
        },
        // Edit Module Modal Reducers End

        // New Unit Modal Reducers Start
        changeNewUnitField: (state, action: PayloadAction<[string, NewUnitFields]>) => {
            // @ts-ignore
            state.newUnitModalData[action.payload[1]] = Number(action.payload[0]);
        },
        changeNewUnitCheck: (state, action: PayloadAction<[boolean, NewUnitFields]>) => {
            // @ts-ignore
            // eslint-disable-next-line prefer-destructuring
            state.newUnitModalData[action.payload[1]] = action.payload[0];
        },
        clearNewUnitData: (state) => {
            state.newUnitModalData = initialState.newUnitModalData;
        },
        // New Unit Modal Reducers End

        // Edit Unit Modal Reducers Start
        saveEditUnitChangesGeneralModules: (state, action: PayloadAction<[number, number, EditStandardCurriculumUnit]>) => {
            state.newFields!.structure.general_modules = state.newFields!.structure.general_modules.map((module) => (
                module.educational_module_id === action.payload[0]
                    ? {
                        ...module,
                        units: [...module.units.filter((unit) => unit.educational_modules_unit_id !== action.payload[1]), action.payload[2]]
                            .sort((a, b) => a.sort - b.sort),
                    }
                    : {
                        ...module,
                    }
            ));
        },
        saveEditUnitChangesQualificationsStructure: (state, action: PayloadAction<[number, number, number, EditStandardCurriculumUnit]>) => {
            const filteredModule = [...state.newFields!.structure.qualifications
                .filter((qualification) => qualification.qualification_id === action.payload[0])][0].modules
                .filter((module) => module.educational_module_id === action.payload[1])[0];
            filteredModule.units = [
                ...filteredModule.units.filter((unit) => unit.educational_modules_unit_id !== action.payload[2]),
                action.payload[3],
            ].sort((a, b) => a.sort - b.sort);

            state.newFields!.structure.qualifications = state.newFields!.structure.qualifications.map((qualification) => (
                qualification.qualification_id === action.payload[0]
                    ? {
                        ...qualification,
                        modules: [...qualification.modules.filter((module) => module.educational_module_id !== action.payload[1]), filteredModule]
                            .sort((a, b) => a.sort - b.sort),
                    }
                    : {
                        ...qualification,
                    }
            ));
        },
        changeEditUnitField: (state, action: PayloadAction<[string, NewModuleFields]>) => {
            // @ts-ignore
            state.editModuleUnitModalData.newFields[action.payload[1]] = Number(action.payload[0]);
        },
        changeEditUnitCheck: (state, action: PayloadAction<[boolean, NewModuleFields]>) => {
            // @ts-ignore
            // eslint-disable-next-line prefer-destructuring
            state.editModuleUnitModalData.newFields[action.payload[1]] = action.payload[0];
        },
        setEditUnitItem: (state, action: PayloadAction<EditStandardCurriculumUnit>) => {
            state.editModuleUnitModalData.data = action.payload;
            state.editModuleUnitModalData.newFields = action.payload;
        },
        // Edit Unit Modal Reducers End

        // New Qualification Modal Reducers Start
        changeNewQualificationField: (state, action: PayloadAction<[string, NewQualificationFields]>) => {
            state.newQualificationModalData[action.payload[1]] = Number(action.payload[0]);
        },
        clearNewQualificationData: (state) => {
            state.newQualificationModalData = initialState.newQualificationModalData;
        },
        // New Qualification Modal Reducers End

        // Edit Qualification Modal Reducers Start
        saveEditQualificationChanges: (state, action: PayloadAction<[number, EditStandardCurriculumQualification]>) => {
            state.newFields!.structure.qualifications = [...state.newFields!.structure.qualifications.filter(
                (qualification) => qualification.qualification_id !== action.payload[0],
            ), action.payload[1]].sort((a, b) => a.sort - b.sort);
        },
        changeEditQualificationField: (state, action: PayloadAction<[string, NewQualificationFields]>) => {
            // @ts-ignore
            state.editQualificationModalData.newFields[action.payload[1]] = Number(action.payload[0]);
        },
        setEditQualificationItem: (state, action: PayloadAction<EditStandardCurriculumQualification>) => {
            state.editQualificationModalData.data = action.payload;
            state.editQualificationModalData.newFields = action.payload;
        },
        // Edit Qualification Modal Reducers End

        // General Modules Reducers Start
        addModuleToGeneralModulesFromServer: (state, action: PayloadAction<EditStandardCurriculumModule[]>) => {
            state.data.structure.general_modules = action.payload
                .sort((a, b) => a.sort - b.sort);
        },
        addModuleToGeneralModules: (state, action: PayloadAction<AddStandardCurriculumModule>) => {
            state.newFields!.structure.general_modules.push(action.payload);
            state.newFields!.structure.general_modules = [...state.newFields!.structure.general_modules.sort((a, b) => a.sort - b.sort)];
        },
        deleteModuleFromGeneralModules: (state, action: PayloadAction<number>) => {
            const filteredModules = state.newFields!.structure.general_modules
                .filter((module) => module.educational_module_id !== action.payload);

            const filteredModuleItem = state.newFields!.structure.general_modules
                .filter((module) => module.educational_module_id === action.payload)[0];
            if (filteredModuleItem && filteredModuleItem.standard_curriculum_module_id) {
                state.modulesToDelete.push(filteredModuleItem);
            }

            state.newFields!.structure.general_modules = [...filteredModules].sort((a, b) => a.sort - b.sort);
        },
        addUnitToGeneralModulesModule: (state, action: PayloadAction<[number, EditStandardCurriculumUnit]>) => {
            state.newFields!.structure.general_modules = state.newFields!.structure.general_modules.map((module) => {
                if (module.educational_module_id === action.payload[0]) {
                    return {
                        ...module,
                        units: [...module.units, action.payload[1]].sort((a, b) => a.sort - b.sort),
                    };
                }

                return {
                    ...module,
                };
            });
        },
        deleteUnitFromGeneralModulesModule: (state, action: PayloadAction<number[]>) => {
            const filteredUnitItem = state.newFields!.structure.general_modules
                .filter((module) => module.educational_module_id === action.payload[0])[0].units
                .filter((unit) => unit.educational_modules_unit_id === action.payload[1])[0];

            // @ts-ignore
            if (filteredUnitItem && filteredUnitItem.standard_curriculum_modules_unit_id) {
                state.moduleUnitsToDelete.push(filteredUnitItem);
            }

            state.newFields!.structure.general_modules = state.newFields!.structure.general_modules.map((module) => (
                module.educational_module_id === action.payload[0]
                    ? {
                        ...module,
                        units: [...module.units.filter((unit) => unit.educational_modules_unit_id !== action.payload[1])],
                    }
                    : {
                        ...module,
                    }
            ));
        },
        // General Modules Reducers End

        // Qualifications Reducers Start
        addQualificationToStructureFromServer: (state, action: PayloadAction<EditStandardCurriculumQualification[]>) => {
            state.data.structure.qualifications = action.payload
                .sort((a, b) => a.sort - b.sort);
        },
        addQualificationToStructure: (state, action: PayloadAction<AddStandardCurriculumQualification>) => {
            state.newFields!.structure.qualifications.push(action.payload);
            state.newFields!.structure.qualifications = state.newFields!.structure.qualifications.sort((a, b) => a.sort - b.sort);
        },
        addTrainingTimeToQualification: (state, action: PayloadAction<
            [number, EditStandardCurriculumQualificationTrainingTime]
        >) => {
            const qualToChange = [...state.newFields!.structure.qualifications
                .filter((qual) => qual.qualification_id === action.payload[0])][0];
            // eslint-disable-next-line prefer-destructuring
            qualToChange.total = action.payload[1];

            state.newFields!.structure.qualifications = [
                ...state.newFields!.structure.qualifications.filter((qual) => qual.qualification_id !== action.payload[0]),
                qualToChange,
            ].sort((a, b) => a.sort - b.sort);
        },
        deleteQualificationFromStructure: (state, action: PayloadAction<number>) => {
            const filteredQualifications = state.newFields!.structure.qualifications
                .filter((qualification) => qualification.qualification_id !== action.payload);

            const filteredQualification = state.newFields!.structure.qualifications
                .filter((qualification) => qualification.qualification_id === action.payload)[0];
            if (filteredQualification && filteredQualification.standard_curriculum_qualification_id) {
                state.qualificationsToDelete.push(filteredQualification);
            }

            state.newFields!.structure.qualifications = [...filteredQualifications];
        },
        addModuleToQualificationStructure: (state, action: PayloadAction<[number, EditStandardCurriculumModule]>) => {
            state.newFields!.structure.qualifications = state.newFields!.structure.qualifications.map((qualification) => {
                if (qualification.qualification_id === action.payload[0]) {
                    return {
                        ...qualification,
                        modules: [...qualification.modules, action.payload[1]].sort((a, b) => a.sort - b.sort),
                    };
                }

                return {
                    ...qualification,
                };
            });
        },
        deleteModuleFromQualificationStructure: (state, action: PayloadAction<number[]>) => {
            const filteredModule = state.newFields!.structure.qualifications
                .filter((qualification) => qualification.qualification_id === action.payload[0])[0].modules
                .filter((module) => module.educational_module_id === action.payload[1])[0];
            if (filteredModule && filteredModule.standard_curriculum_module_id) {
                state.modulesToDelete.push(filteredModule);
            }

            state.newFields!.structure.qualifications = state.newFields!.structure.qualifications.map((qualification) => (
                qualification.qualification_id === action.payload[0]
                    ? {
                        ...qualification,
                        modules: [...qualification.modules.filter((module) => module.educational_module_id !== action.payload[1])],
                    }
                    : {
                        ...qualification,
                    }
            ));
        },
        addUnitToQualificationModuleStructure: (state, action: PayloadAction<
            [number, number, EditStandardCurriculumUnit]
        >) => {
            const filteredQualification = [...state.newFields!.structure.qualifications
                .filter((qualification) => qualification.qualification_id === action.payload[0])][0];
            const filteredModule = [...filteredQualification.modules
                .filter((module) => module.educational_module_id === action.payload[1])][0];
            filteredModule.units.push(action.payload[2]);
            filteredModule.units.sort((a, b) => a.sort - b.sort);

            state.newFields!.structure.qualifications = state.newFields!.structure.qualifications.map((qualification) => {
                if (qualification.qualification_id === action.payload[0]) {
                    return {
                        ...qualification,
                        modules: [
                            ...qualification.modules.filter(((module) => module.educational_module_id !== action.payload[1])),
                            filteredModule,
                        ].sort((a, b) => a.sort - b.sort),
                    };
                }

                return {
                    ...qualification,
                };
            });
        },
        deleteUnitFromQualificationModuleStructure: (state, action: PayloadAction<number[]>) => {
            const filteredUnit = state.newFields!.structure.qualifications
                .filter((qualification) => qualification.qualification_id === action.payload[0])[0].modules
                .filter((module) => module.educational_module_id === action.payload[1])[0].units
                .filter((unit) => unit.educational_modules_unit_id === action.payload[2])[0];
            // @ts-ignore
            if (filteredUnit && filteredUnit.standard_curriculum_modules_unit_id) {
                state.moduleUnitsToDelete.push(filteredUnit);
            }

            const filteredModule = [...state.newFields!.structure.qualifications
                .filter((qualification) => qualification.qualification_id === action.payload[0])][0].modules
                .filter((module) => module.educational_module_id === action.payload[1])[0];
            filteredModule.units = filteredModule.units
                .filter((unit) => unit.educational_modules_unit_id !== action.payload[2])
                .sort((a, b) => a.sort - b.sort);

            state.newFields!.structure.qualifications = state.newFields!.structure.qualifications.map((qualification) => (
                qualification.qualification_id === action.payload[0]
                    ? {
                        ...qualification,
                        modules: [
                            ...qualification.modules.filter((module) => module.educational_module_id !== action.payload[1]),
                            filteredModule,
                        ].sort((a, b) => a.sort - b.sort),
                    }
                    : {
                        ...qualification,
                    }
            ));
        },
        // Qualifications Reducers End

        setDataToChange: (state) => {
            state.newFields = state.data;
        },

        clearData: (state) => {
            state.newFields = state.data;
            state.modulesToDelete = [];
            state.moduleUnitsToDelete = [];
            state.qualificationsToDelete = [];
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editStandardCurriculum.pending, (state) => {
                state.errors = undefined;
                state.isLoading = true;
            })
            .addCase(editStandardCurriculum.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(editStandardCurriculum.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            })
            .addCase(calculateQualificationTrainingTime.pending, (state) => {
                state.errorQualificationTrainingTime = undefined;
                state.isLoadingQualificationTrainingTime = true;
            })
            .addCase(calculateQualificationTrainingTime.fulfilled, (state) => {
                state.isLoadingQualificationTrainingTime = false;
            })
            .addCase(calculateQualificationTrainingTime.rejected, (state, action) => {
                state.isLoadingQualificationTrainingTime = false;
                state.errorQualificationTrainingTime = action.payload;
            });
    },
});

export const { actions: editStandardCurriculumActions } = editStandardCurriculumSlice;
export const { reducer: editStandardCurriculumReducer } = editStandardCurriculumSlice;
