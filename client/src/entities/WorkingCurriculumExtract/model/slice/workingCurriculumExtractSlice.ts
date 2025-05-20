import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import { EduActivitiesTypes } from 'entities/EduActivitiesTypes';
import { WORKING_CURRICULUM_EXTRACT_TABLE_DATA } from 'shared/const/localstorage';
import { WorkingCurriculumExtractSchema } from '../types/workingCurriculumExtractSchema';
import { WorkingCurriculumExtract } from '../types/workingCurriculumExtract';
import { fetchWorkingCurriculumExtract } from '../services/fetchWorkingCurriculumExtract/fetchWorkingCurriculumExtract';
import { WorkingCurriculumExtractSemestersDistributionSummary, WorkingCurriculumExtractSummary } from '../types/workingCurriculumExtractQualifications';
import {
    WorkingCurriculumExtractEducationalActivities,
    WorkingCurriculumExtractSubject,
    WorkingCurriculumExtractSubjects,
} from '../types/workingCurriculumExtractGeneral';
import { WorkingCurriculumExtractActionFields } from '../types/workingCurriculumExtractActions';
import {
    WorkingCurriculumExtractDistributionActionFields,
} from '../types/workingCurriculumExtractDistributionActions';
import {
    updateWorkingCurriculumExtract,
} from '../services/updateWorkingCurriculumExtract/updateWorkingCurriculumExtract';

const initialState: WorkingCurriculumExtractSchema = {
    data: undefined,
    dataParsed: undefined,
    dataToWork: undefined,
    actions: {
        delete: [],
        update: [],
        create: [],
        simulate: false,
    },
    distributionActions: {
        delete: [],
        update: [],
        create: [],
        simulate: false,
    },
    validationErrors: {
        amountOfStudyTime: [],
        semestersDistribution: [],
        notFilledSummaryHours: [],
    },
    isLoading: true,
    error: undefined,
    updatingIsLoading: false,
    updatingError: undefined,
    updatedStatus: false,
    formWithErrors: false,
    readOnly: true,
    redirectToMainPage: false,
    showAllDisciplines: true,
};

const workingCurriculumExtractSlice = createSlice({
    name: 'workingCurriculumExtract',
    initialState,
    reducers: {
        addSubject: (state, action: PayloadAction<
        [
            number | null,
            number | undefined,
            number | undefined,
            WorkingCurriculumExtractSubject,
            number,
            number,
        ]>) => {
            const [qualificationId, moduleId, unitId, newSubject, workingCurriculumId, sort] = action.payload;

            if (!state.dataParsed || !state.dataToWork) return;

            const subject = {
                ...newSubject,
                code: '',
                subject: newSubject,
                hours: null,
                hours_theory: null,
                hours_practice: null,
                hours_coursework: null,
                hours_internship: null,
                name: newSubject.name,
                controlworks_count: null,
                courseworks_count: null,
                educational_activity_type_id: null,
                sort,
                sortValue: `${sort}`,
                standard_curriculum_qualification_id: qualificationId,
                exams_semestrs: null,
                tests_semesters: null,
                semestersDistribution: Array(state.data!.meta.semestersCount).fill(null).map((_, index) => ({
                    semester_number: index + 1,
                    hours: null,
                })),
            };

            const savedData = localStorage.getItem(WORKING_CURRICULUM_EXTRACT_TABLE_DATA);
            const changeFieldName = savedData ? 'dataToWork' : 'dataParsed';

            // ADD SUBJECT TO QUALIFICATIONS BLOCK
            if (qualificationId) {
                state[changeFieldName]!.data.qualifications.forEach((qualification) => {
                    if (qualification.standard_curriculum_qualification_id === qualificationId) {
                        qualification.modules.forEach((module) => {
                            if (module.module_id === moduleId) {
                                module.units.forEach((unit) => {
                                    if (unit.educational_modules_unit_id === unitId) {
                                        unit.subjects.push(subject);
                                        unit.subjects.sort((a, b) => a.sort - b.sort);
                                    }
                                });
                            }
                        });
                    }
                });

            // ADD SUBJECT TO GENERAL MODULES BLOCK
            } else {
                state[changeFieldName]!.data.general[0].subjects.push(subject);
                state[changeFieldName]!.data.general[0].subjects.sort((a, b) => a.sort - b.sort);
            }

            if (!savedData) {
                state.dataToWork = state.dataParsed;
            } else {
                localStorage.removeItem(WORKING_CURRICULUM_EXTRACT_TABLE_DATA);
            }

            const newAction = {
                ...excludePropertiesFromObject(subject, [
                    'subject', 'code', 'name', 'semestersDistribution', 'restrictions', 'module_id', 'unit_id',
                ]),
                working_curriculum_id: workingCurriculumId,
            } as WorkingCurriculumExtractActionFields;
            state.actions.create?.push(newAction);

            subject.semestersDistribution.forEach((semester) => {
                const newDistributionAction: WorkingCurriculumExtractDistributionActionFields = {
                    standard_curriculum_qualification_id: subject.standard_curriculum_qualification_id,
                    subject_id: subject.subject_id,
                    semester_number: semester.semester_number,
                    hours: semester.hours,
                };
                state.distributionActions.create?.push(newDistributionAction);
            });

            state.validationErrors.notFilledSummaryHours.push({
                notFilled: true,
                subject_id: subject.subject_id,
                standard_curriculum_qualification_id: subject.standard_curriculum_qualification_id,
            });
        },
        addEducationalActivityType: (state, action: PayloadAction<
        [
            number | null,
            EduActivitiesTypes,
            number,
        ]>) => {
            const [qualificationId, newActivity, workingCurriculumId] = action.payload;

            if (!state.dataToWork) return;

            const activity = {
                ...newActivity,
                standard_curriculum_qualification_id: qualificationId,
                subject_id: null,
                exams_semestrs: null,
                tests_semesters: null,
                courseworks_count: null,
                controlworks_count: null,
                sort: 100,
                sortValue: '100',
                hours: null,
                hours_theory: null,
                hours_practice: null,
                hours_coursework: null,
                hours_internship: null,
                semestersDistribution: Array(state.data!.meta.semestersCount).fill(null).map((_, index) => ({
                    semester_number: index + 1,
                    hours: null,
                })),
            };

            // ADD EDU ACTIVITY TYPE TO QUALIFICATIONS BLOCK
            if (qualificationId) {
                state.dataToWork.data.qualifications.forEach((qualification) => {
                    if (qualification.standard_curriculum_qualification_id === qualificationId) {
                        qualification.educationalActivities.push(activity);
                        qualification.educationalActivities.sort((a, b) => a.sort - b.sort);
                    }
                });

            // ADD EDU ACTIVITY TYPE TO GENERAL MODULES BLOCK
            } else {
                state.dataToWork.data.general[0].educationalActivities.push(activity);
                state.dataToWork.data.general[0].educationalActivities.sort((a, b) => a.sort - b.sort);
            }

            const newAction = {
                ...excludePropertiesFromObject(activity, ['code', 'name', 'semestersDistribution', 'is_in_compulsory_education', 'short_name']),
                working_curriculum_id: workingCurriculumId,
            } as WorkingCurriculumExtractActionFields;
            state.actions.create?.push(newAction);

            activity.semestersDistribution.forEach((semester) => {
                const newDistributionAction: WorkingCurriculumExtractDistributionActionFields = {
                    standard_curriculum_qualification_id: activity.standard_curriculum_qualification_id,
                    educational_activity_type_id: activity.educational_activity_type_id,
                    semester_number: semester.semester_number,
                    hours: semester.hours,
                };
                state.distributionActions.create?.push(newDistributionAction);
            });

            state.validationErrors.notFilledSummaryHours.push({
                notFilled: true,
                educational_activity_type_id: activity.educational_activity_type_id,
                standard_curriculum_qualification_id: activity.standard_curriculum_qualification_id,
            });
        },
        changeFieldValue: (state, action: PayloadAction<
            [
                number | null,
                number | undefined,
                number | undefined,
                WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
                string,
                string | number | null,
                boolean
            ]
        >) => {
            if (!state.dataToWork) return;

            const [
                qualId,
                modId,
                unitId,
                subject,
                fieldName,
                fieldValue,
                isSubject,
            ] = action.payload;

            const creatingValue = fieldName === 'exams_semestrs' || fieldName === 'tests_semesters'
                ? Array.from(new Set((fieldValue as string).split(',')))
                    .map((semestr) => Number(semestr))
                    .filter((semestr) => semestr !== 0) : fieldValue;

            // CHANGE SUBJECT FIELD
            if (isSubject) {
                // CHANGE SUBJECT FIELD IN QUALIFICATIONS BLOCK
                if (qualId) {
                    state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                        if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                        return {
                            ...qualification,
                            modules: qualification.modules.map((module) => {
                                if (module.module_id !== modId) return module;

                                return {
                                    ...module,
                                    units: module.units.map((unit) => {
                                        if (unit.educational_modules_unit_id !== unitId) return unit;

                                        return {
                                            ...unit,
                                            subjects: unit.subjects.map((subjectItem) => {
                                                if (subjectItem.subject_id !== subject.subject_id) return subjectItem;

                                                return {
                                                    ...subjectItem,
                                                    [fieldName]: fieldValue,
                                                };
                                            }),
                                        };
                                    }),
                                };
                            }),
                        };
                    });

                    if (!subject.working_curriculum_extract_id) {
                        state.actions.create = state.actions.create?.map((item) => {
                            if (item.standard_curriculum_qualification_id !== qualId || item.subject_id !== subject.subject_id) return item;

                            return {
                                ...item,
                                [fieldName]: fieldValue ? creatingValue : null,
                            };
                        });
                    }

                // CHANGE SUBJECT FIELD IN GENERAL MODULES BLOCK
                } else {
                    state.dataToWork.data.general[0].subjects = state.dataToWork.data.general[0].subjects.map((subjectItem) => {
                        if (subjectItem.subject_id !== subject.subject_id) return subjectItem;

                        return {
                            ...subjectItem,
                            [fieldName]: fieldValue,
                        };
                    });
                    if (!subject.working_curriculum_extract_id) {
                        state.actions.create = state.actions.create?.map((item) => {
                            if (item.standard_curriculum_qualification_id !== null || item.subject_id !== subject.subject_id) return item;

                            return {
                                ...item,
                                [fieldName]: fieldValue ? creatingValue : null,
                            };
                        });
                    }
                }

                if (subject.working_curriculum_extract_id) {
                    const editFoundItem = state.actions.update?.filter((item) => (
                        item.working_curriculum_extract_id === subject.working_curriculum_extract_id
                    ))[0];

                    state.actions.delete = state.actions.delete?.filter((action) => action !== subject.working_curriculum_extract_id);

                    if (editFoundItem) {
                        state.actions.update = state.actions.update?.map((item) => {
                            if (item.working_curriculum_extract_id !== subject.working_curriculum_extract_id) return item;

                            return {
                                ...item,
                                fields: {
                                    ...item.fields,
                                    [fieldName]: fieldValue ? creatingValue : null,
                                },
                            };
                        });
                    } else {
                        state.actions.update?.push({
                            working_curriculum_extract_id: subject.working_curriculum_extract_id,
                            fields: {
                                ...excludePropertiesFromObject(subject as WorkingCurriculumExtractSubjects, [
                                    'working_curriculum_extract_id',
                                    'name',
                                    'code',
                                    'subject',
                                    'semestersDistribution',
                                ]) as WorkingCurriculumExtractActionFields,
                                exams_semestrs: subject.exams_semestrs ? (subject.exams_semestrs as string).split(',').map((item) => +item) : null,
                                tests_semesters: subject.tests_semesters ? (subject.tests_semesters as string).split(',').map((item) => +item) : null,
                                [fieldName]: fieldValue ? creatingValue : null,
                            },
                        });
                    }
                }

            // CHANGE EDU ACTIVITY FIELD IN QUALIFICATIONS BLOCK
            } else {
                if (qualId) {
                    state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                        if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                        return {
                            ...qualification,
                            educationalActivities: qualification.educationalActivities.map((activity) => {
                                if (activity.educational_activity_type_id !== subject.educational_activity_type_id) return activity;

                                return {
                                    ...activity,
                                    [fieldName]: fieldValue,
                                };
                            }),
                        };
                    });
                    if (!subject.working_curriculum_extract_id) {
                        state.actions.create = state.actions.create?.map((item) => {
                            if (item.standard_curriculum_qualification_id !== qualId
                                || item.educational_activity_type_id !== subject.educational_activity_type_id) return item;

                            return {
                                ...item,
                                [fieldName]: fieldValue ? creatingValue : null,
                            };
                        });
                    }
                    // CHANGE EDU ACTIVITY FIELD IN GENERAL MODULES BLOCK
                } else {
                    state.dataToWork.data.general[0].educationalActivities = state.dataToWork.data.general[0].educationalActivities.map((activity) => {
                        if (activity.educational_activity_type_id !== subject.educational_activity_type_id) return activity;

                        return {
                            ...activity,
                            [fieldName]: fieldValue,
                        };
                    });
                    if (!subject.working_curriculum_extract_id) {
                        state.actions.create = state.actions.create?.map((item) => {
                            if (item.standard_curriculum_qualification_id !== null
                                || item.educational_activity_type_id !== subject.educational_activity_type_id) return item;

                            return {
                                ...item,
                                [fieldName]: fieldValue ? creatingValue : null,
                            };
                        });
                    }
                }

                if (subject.working_curriculum_extract_id) {
                    const editFoundItem = state.actions.update?.filter((item) => (
                        item.working_curriculum_extract_id === subject.working_curriculum_extract_id
                    ))[0];

                    state.actions.delete = state.actions.delete?.filter((action) => action !== subject.working_curriculum_extract_id);

                    if (editFoundItem) {
                        state.actions.update = state.actions.update?.map((item) => {
                            if (item.working_curriculum_extract_id !== subject.working_curriculum_extract_id) return item;

                            return {
                                ...item,
                                fields: {
                                    ...item.fields,
                                    [fieldName]: fieldValue ? creatingValue : null,
                                },
                            };
                        });
                    } else {
                        state.actions.update?.push({
                            working_curriculum_extract_id: subject.working_curriculum_extract_id,
                            fields: {
                                ...excludePropertiesFromObject(subject as WorkingCurriculumExtractEducationalActivities, [
                                    'working_curriculum_extract_id',
                                    'short_name',
                                    'name',
                                    'code',
                                    'is_in_compulsory_education',
                                    'semestersDistribution',
                                ]) as WorkingCurriculumExtractActionFields,
                                exams_semestrs: subject.exams_semestrs ? (subject.exams_semestrs as string).split(',').map((item) => +item) : null,
                                tests_semesters: subject.tests_semesters ? (subject.tests_semesters as string).split(',').map((item) => +item) : null,
                                [fieldName]: fieldValue ? creatingValue : null,
                            },
                        });
                    }
                }
            }
        },
        changeDistributionValues: (state, action: PayloadAction<
            [
                number | null,
                number | undefined,
                number | undefined,
                WorkingCurriculumExtractSubjects | WorkingCurriculumExtractEducationalActivities,
                number,
                number | null,
                boolean]
        >) => {
            if (!state.dataToWork) return;

            const [qualId, modId, unitId, subjectData, semesterNumber, fieldValue, isSubject] = action.payload;
            const foundItem = subjectData.semestersDistribution.filter((semester) => (
                semester.semester_number === semesterNumber))[0];

            // CHANGE DISTRIBUTION VALUE IN SUBJECT
            if (isSubject) {
                // CHANGE DISTRIBUTION VALUE IN SUBJECT IN QUALIFICATIONS BLOCK
                if (qualId) {
                    state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                        if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                        return {
                            ...qualification,
                            modules: qualification.modules.map((module) => {
                                if (module.module_id !== modId) return module;

                                return {
                                    ...module,
                                    units: module.units.map((unit) => {
                                        if (unit.educational_modules_unit_id !== unitId) return unit;

                                        return {
                                            ...unit,
                                            subjects: unit.subjects.map((subject) => {
                                                if (subject.subject_id !== subjectData.subject_id) return subject;

                                                return {
                                                    ...subject,
                                                    semestersDistribution: subject.semestersDistribution.map((semester) => {
                                                        if (semester.semester_number !== semesterNumber) return semester;

                                                        return {
                                                            ...semester,
                                                            hours: fieldValue,
                                                        };
                                                    }),
                                                };
                                            }),
                                        };
                                    }),
                                };
                            }),
                        };
                    });
                    if (!foundItem.working_curriculum_extract_distribution_id) {
                        const foundCreateItem = state.distributionActions.create?.filter((action) => (
                            action.standard_curriculum_qualification_id === qualId
                            && action.subject_id === subjectData.subject_id
                            && action.semester_number === semesterNumber
                        ))[0];
                        if (foundCreateItem) {
                            state.distributionActions.create = state.distributionActions.create?.map((action) => {
                                if (action.standard_curriculum_qualification_id === qualId
                                    && action.subject_id === subjectData.subject_id
                                    && action.semester_number === semesterNumber) {
                                    return {
                                        ...action,
                                        hours: fieldValue,
                                    };
                                }

                                return action;
                            });
                        } else {
                            state.distributionActions.create?.push({
                                standard_curriculum_qualification_id: subjectData.standard_curriculum_qualification_id,
                                educational_activity_type_id: subjectData.educational_activity_type_id,
                                subject_id: subjectData.subject_id,
                                semester_number: semesterNumber,
                                hours: fieldValue,
                            });
                        }
                    }

                // CHANGE DISTRIBUTION VALUE IN SUBJECT IN GENERAL MODULES BLOCK
                } else {
                    state.dataToWork.data.general[0].subjects = state.dataToWork.data.general[0].subjects.map((subject) => {
                        if (subject.subject_id !== subjectData.subject_id) return subject;

                        return {
                            ...subject,
                            semestersDistribution: subject.semestersDistribution.map((semester) => {
                                if (semester.semester_number !== semesterNumber) return semester;

                                return {
                                    ...semester,
                                    hours: fieldValue,
                                };
                            }),
                        };
                    });
                    if (!foundItem.working_curriculum_extract_distribution_id) {
                        const foundCreateItem = state.distributionActions.create?.filter((action) => (
                            action.standard_curriculum_qualification_id === null
                            && action.subject_id === subjectData.subject_id
                            && action.semester_number === semesterNumber
                        ))[0];
                        if (foundCreateItem) {
                            state.distributionActions.create = state.distributionActions.create?.map((action) => {
                                if (action.standard_curriculum_qualification_id === null
                                    && action.subject_id === subjectData.subject_id
                                    && action.semester_number === semesterNumber) {
                                    return {
                                        ...action,
                                        hours: fieldValue,
                                    };
                                }

                                return action;
                            });
                        } else {
                            state.distributionActions.create?.push({
                                standard_curriculum_qualification_id: subjectData.standard_curriculum_qualification_id,
                                educational_activity_type_id: subjectData.educational_activity_type_id,
                                subject_id: subjectData.subject_id,
                                semester_number: semesterNumber,
                                hours: fieldValue,
                            });
                        }
                    }
                }

            // CHANGE DISTRIBUTION VALUE IN EDU ACTIVITY IN QUALIFICATIONS BLOCK
            } else if (qualId) {
                state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                    if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                    return {
                        ...qualification,
                        educationalActivities: qualification.educationalActivities.map((activity) => {
                            if (activity.educational_activity_type_id !== subjectData.educational_activity_type_id) return activity;

                            return {
                                ...activity,
                                semestersDistribution: activity.semestersDistribution.map((semester) => {
                                    if (semester.semester_number !== semesterNumber) return semester;

                                    return {
                                        ...semester,
                                        hours: fieldValue,
                                    };
                                }),
                            };
                        }),
                    };
                });
                if (!foundItem.working_curriculum_extract_distribution_id) {
                    const foundCreateItem = state.distributionActions.create?.filter((action) => (
                        action.standard_curriculum_qualification_id === qualId
                        && action.educational_activity_type_id === subjectData.educational_activity_type_id
                        && action.semester_number === semesterNumber
                    ))[0];
                    if (foundCreateItem) {
                        state.distributionActions.create = state.distributionActions.create?.map((action) => {
                            if (action.standard_curriculum_qualification_id === qualId
                                && action.educational_activity_type_id === subjectData.educational_activity_type_id
                                && action.semester_number === semesterNumber) {
                                return {
                                    ...action,
                                    hours: fieldValue,
                                };
                            }

                            return action;
                        });
                    } else {
                        state.distributionActions.create?.push({
                            standard_curriculum_qualification_id: subjectData.standard_curriculum_qualification_id,
                            educational_activity_type_id: subjectData.educational_activity_type_id,
                            subject_id: subjectData.subject_id,
                            semester_number: semesterNumber,
                            hours: fieldValue,
                        });
                    }
                }

            // CHANGE DISTRIBUTION VALUE IN EDU ACTIVITY IN GENERAL MODULES BLOCK
            } else {
                state.dataToWork.data.general[0].educationalActivities = state.dataToWork.data.general[0].educationalActivities.map((activity) => {
                    if (activity.educational_activity_type_id !== subjectData.educational_activity_type_id) return activity;

                    return {
                        ...activity,
                        semestersDistribution: activity.semestersDistribution.map((semester) => {
                            if (semester.semester_number !== semesterNumber) return semester;

                            return {
                                ...semester,
                                hours: fieldValue,
                            };
                        }),
                    };
                });
                if (!foundItem.working_curriculum_extract_distribution_id) {
                    const foundCreateItem = state.distributionActions.create?.filter((action) => (
                        action.standard_curriculum_qualification_id === null
                        && action.educational_activity_type_id === subjectData.educational_activity_type_id
                        && action.semester_number === semesterNumber
                    ))[0];
                    if (foundCreateItem) {
                        state.distributionActions.create = state.distributionActions.create?.map((action) => {
                            if (action.standard_curriculum_qualification_id === null
                                && action.educational_activity_type_id === subjectData.educational_activity_type_id
                                && action.semester_number === semesterNumber) {
                                return {
                                    ...action,
                                    hours: fieldValue,
                                };
                            }

                            return action;
                        });
                    } else {
                        state.distributionActions.create?.push({
                            standard_curriculum_qualification_id: subjectData.standard_curriculum_qualification_id,
                            educational_activity_type_id: subjectData.educational_activity_type_id,
                            subject_id: subjectData.subject_id,
                            semester_number: semesterNumber,
                            hours: fieldValue,
                        });
                    }
                }
            }

            if (foundItem.working_curriculum_extract_distribution_id) {
                const foundUpdateItem = state.distributionActions.update?.filter((action) => (
                    action.working_curriculum_extract_distribution_id === foundItem.working_curriculum_extract_distribution_id
                ))[0];

                state.distributionActions.delete = state.distributionActions.delete?.filter((action) => (
                    action !== foundItem.working_curriculum_extract_distribution_id
                ));

                if (!fieldValue) {
                    state.distributionActions.delete?.push(foundItem.working_curriculum_extract_distribution_id);
                    state.distributionActions.delete = Array.from(new Set(state.distributionActions.delete));
                    state.distributionActions.update = state.distributionActions.update?.filter((action) => (
                        action.working_curriculum_extract_distribution_id !== foundItem.working_curriculum_extract_distribution_id
                    ));
                } else {
                    state.distributionActions.delete = state.distributionActions.delete?.filter((action) => (
                        action !== foundItem.working_curriculum_extract_distribution_id
                    ));
                }

                if (foundUpdateItem) {
                    state.distributionActions.update = state.distributionActions.update?.map((action) => {
                        if (action.working_curriculum_extract_distribution_id !== foundUpdateItem.working_curriculum_extract_distribution_id) {
                            return action;
                        }

                        return {
                            ...action,
                            fields: {
                                ...action.fields,
                                hours: fieldValue,
                            },
                        };
                    });
                } else {
                    state.distributionActions.update?.push({
                        working_curriculum_extract_distribution_id: foundItem.working_curriculum_extract_distribution_id,
                        fields: {
                            working_curriculum_extract_id: subjectData.working_curriculum_extract_id,
                            semester_number: semesterNumber,
                            hours: fieldValue,
                        },
                    });
                }
            }
        },
        calculateSummaryTime: (state, action: PayloadAction<
            [number | null, number | undefined, number | undefined, boolean]
        >) => {
            if (!state.dataToWork) return;

            const [qualId, modId, unitId, isSubject] = action.payload;

            // CALCULATE SUBJECTS
            if (isSubject) {
                // CALCULATE SUBJECTS IN QUALIFICATIONS BLOCK
                if (qualId) {
                    state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                        if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                        return {
                            ...qualification,
                            modules: qualification.modules.map((module) => {
                                if (module.module_id !== modId) return module;

                                return {
                                    ...module,
                                    units: module.units.map((unit) => {
                                        if (unit.educational_modules_unit_id !== unitId) return unit;

                                        const totalSemestersDistribution = unit.subjects.reduce((acc, subject) => {
                                            subject.semestersDistribution.forEach(({ semester_number, hours }) => {
                                                // @ts-ignore
                                                acc[semester_number] = (acc[semester_number] || 0) + (hours || 0);
                                            });
                                            return acc;
                                        }, {});

                                        const newSummary = {
                                            ...unit.summary!,
                                            amountOfStudyTime: {
                                                hours: unit.subjects.reduce((prev, next) => (
                                                    prev + (next.hours || 0)
                                                ), 0) || null,
                                                hours_theory: unit.subjects.reduce((prev, next) => (
                                                    prev + (next.hours_theory || 0)
                                                ), 0) || null,
                                                hours_practice: unit.subjects.reduce((prev, next) => (
                                                    prev + (next.hours_practice || 0)
                                                ), 0) || null,
                                                hours_coursework: unit.subjects.reduce((prev, next) => (
                                                    prev + (next.hours_coursework || 0)
                                                ), 0) || null,
                                                hours_internship: unit.subjects.reduce((prev, next) => (
                                                    prev + (next.hours_internship || 0)
                                                ), 0) || null,
                                            },
                                            semestersDistribution: unit.subjects.length
                                                ? Object.entries(totalSemestersDistribution).map(([semester_number, hours]) => ({
                                                    semester_number: Number(semester_number),
                                                    hours: (hours as number || null) || null,
                                                }))
                                                : Array(state.data!.meta.semestersCount).fill(null).map((_, index) => ({
                                                    semester_number: index + 1,
                                                    hours: null,
                                                })),
                                        };

                                        return {
                                            ...unit,
                                            summary: newSummary,
                                        };
                                    }),
                                };
                            }),
                        };
                    });
                    state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                        if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                        return {
                            ...qualification,
                            modules: qualification.modules.map((module) => {
                                if (module.module_id !== modId) return module;

                                const totalSemestersDistribution = module.units.reduce((acc, unit) => {
                                    unit.summary!.semestersDistribution.forEach(({ semester_number, hours }) => {
                                        // @ts-ignore
                                        acc[semester_number] = (acc[semester_number] || 0) + (hours || 0);
                                    });
                                    return acc;
                                }, {});

                                const newSummary = {
                                    ...module.summary!,
                                    amountOfStudyTime: {
                                        hours: module.units.reduce((prev, next) => (
                                            prev + (next.summary!.amountOfStudyTime.hours || 0)
                                        ), 0) || null,
                                        hours_theory: module.units.reduce((prev, next) => (
                                            prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                                        ), 0) || null,
                                        hours_practice: module.units.reduce((prev, next) => (
                                            prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                                        ), 0) || null,
                                        hours_coursework: module.units.reduce((prev, next) => (
                                            prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                                        ), 0) || null,
                                        hours_internship: module.units.reduce((prev, next) => (
                                            prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                                        ), 0) || null,
                                    },
                                    semestersDistribution: Object.entries(totalSemestersDistribution).map(([semester_number, hours]) => ({
                                        semester_number: Number(semester_number),
                                        hours: (hours as number || null) || null,
                                    })),
                                };

                                return {
                                    ...module,
                                    summary: newSummary,
                                };
                            }),
                        };
                    });
                    state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                        if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                        const totalSemestersDistribution: WorkingCurriculumExtractSemestersDistributionSummary[] = [];
                        const totalSemestersDistributionCompulsory: WorkingCurriculumExtractSemestersDistributionSummary[] = [];

                        for (let i = 0; i < state.data!.meta.semestersCount; i++) {
                            totalSemestersDistribution.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                            totalSemestersDistributionCompulsory.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                        }

                        qualification.modules.forEach((module) => {
                            module.summary!.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                                totalSemestersDistributionCompulsory[index]
                                    .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        qualification.educationalActivities.forEach((activity) => {
                            activity.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        qualification.educationalActivities
                            .filter((activity) => activity.is_in_compulsory_education)
                            .forEach((activity) => {
                                activity.semestersDistribution.forEach((semester, index) => {
                                    totalSemestersDistributionCompulsory[index]
                                        .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                                });
                            });

                        const newSummary = {
                            ...qualification.summary!,
                            amountOfStudyTime: {
                                hours: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistribution,
                        };
                        const newSummaryCompulsory = {
                            ...qualification.summaryCompulsory!,
                            amountOfStudyTime: {
                                hours: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_theory || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_practice || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_coursework || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_internship || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistributionCompulsory,
                        };

                        return {
                            ...qualification,
                            summary: newSummary,
                            summaryCompulsory: newSummaryCompulsory,
                        };
                    });

                // CALCULATE SUBJECTS IN GENERAL MODULES BLOCK
                } else {
                    state.dataToWork.data.general = state.dataToWork.data.general.map((general) => {
                        const totalSemestersDistribution: WorkingCurriculumExtractSemestersDistributionSummary[] = [];
                        const totalSemestersDistributionCompulsory: WorkingCurriculumExtractSemestersDistributionSummary[] = [];

                        for (let i = 0; i < state.data!.meta.semestersCount; i++) {
                            totalSemestersDistribution.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                            totalSemestersDistributionCompulsory.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                        }

                        general.subjects.forEach((subject) => {
                            subject.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                                totalSemestersDistributionCompulsory[index]
                                    .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        general.educationalActivities.forEach((activity) => {
                            activity.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        general.educationalActivities
                            .filter((activity) => activity.is_in_compulsory_education)
                            .forEach((activity) => {
                                activity.semestersDistribution.forEach((semester, index) => {
                                    totalSemestersDistributionCompulsory[index]
                                        .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                                });
                            });

                        const newSummary = {
                            ...general.summary!,
                            amountOfStudyTime: {
                                hours: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistribution,
                        };
                        const newSummaryCompulsory = {
                            ...general.summaryCompulsory!,
                            amountOfStudyTime: {
                                hours: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_theory || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_practice || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_coursework || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_internship || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistributionCompulsory,
                        };

                        return {
                            ...general,
                            summary: newSummary,
                            summaryCompulsory: newSummaryCompulsory,
                        };
                    });
                }

            // CALCULATE EDU ACTIVITY TYPE IN QUALIFICATIONS BLOCK
            } else if (qualId) {
                state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                    if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                    const totalSemestersDistribution: WorkingCurriculumExtractSemestersDistributionSummary[] = [];
                    const totalSemestersDistributionCompulsory: WorkingCurriculumExtractSemestersDistributionSummary[] = [];

                    for (let i = 0; i < state.data!.meta.semestersCount; i++) {
                        totalSemestersDistribution.push({
                            semester_number: i + 1,
                            hours: null,
                        });
                        totalSemestersDistributionCompulsory.push({
                            semester_number: i + 1,
                            hours: null,
                        });
                    }

                    qualification.modules.forEach((module) => {
                            module.summary!.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                                totalSemestersDistributionCompulsory[index]
                                    .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                    });

                    qualification.educationalActivities.forEach((activity) => {
                        activity.semestersDistribution.forEach((semester, index) => {
                            totalSemestersDistribution[index]
                                .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                        });
                    });

                    qualification.educationalActivities
                        .filter((activity) => activity.is_in_compulsory_education)
                        .forEach((activity) => {
                            activity.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistributionCompulsory[index]
                                    .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                    const newSummary = {
                        ...qualification.summary!,
                        amountOfStudyTime: {
                            hours: ((qualification.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours || 0)
                            ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours || 0)
                            ), 0) || 0)) || null,
                            hours_theory: ((qualification.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours_theory || 0)
                            ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                            ), 0) || 0)) || null,
                            hours_practice: ((qualification.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours_practice || 0)
                            ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                            ), 0) || 0)) || null,
                            hours_coursework: ((qualification.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours_coursework || 0)
                            ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                            ), 0) || 0)) || null,
                            hours_internship: ((qualification.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours_internship || 0)
                            ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                            ), 0) || 0)) || null,
                        },
                        semestersDistribution: totalSemestersDistribution,
                    };
                    const newSummaryCompulsory = {
                        ...qualification.summaryCompulsory!,
                        amountOfStudyTime: {
                            hours: ((qualification.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours || 0)
                            ), 0) || 0)) || null,
                            hours_theory: ((qualification.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                            ), 0) || 0)) || null,
                            hours_practice: ((qualification.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                            ), 0) || 0)) || null,
                            hours_coursework: ((qualification.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                            ), 0) || 0)) || null,
                            hours_internship: ((qualification.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                            ), 0) || 0)) || null,
                        },
                        semestersDistribution: totalSemestersDistributionCompulsory,
                    };

                    return {
                        ...qualification,
                        summary: newSummary,
                        summaryCompulsory: newSummaryCompulsory,
                    };
                });

            // CALCULATE EDU ACTIVITY TYPE IN GENERAL MODULES BLOCK
            } else {
                state.dataToWork.data.general = state.dataToWork.data.general.map((general) => {
                    const totalSemestersDistribution: WorkingCurriculumExtractSemestersDistributionSummary[] = [];
                    const totalSemestersDistributionCompulsory: WorkingCurriculumExtractSemestersDistributionSummary[] = [];

                    for (let i = 0; i < state.data!.meta.semestersCount; i++) {
                        totalSemestersDistribution.push({
                            semester_number: i + 1,
                            hours: null,
                        });
                        totalSemestersDistributionCompulsory.push({
                            semester_number: i + 1,
                            hours: null,
                        });
                    }

                    general.subjects.forEach((subject) => {
                        subject.semestersDistribution.forEach((semester, index) => {
                            totalSemestersDistribution[index]
                                .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                            totalSemestersDistributionCompulsory[index]
                                .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                        });
                    });

                    general.educationalActivities.forEach((activity) => {
                        activity.semestersDistribution.forEach((semester, index) => {
                            totalSemestersDistribution[index]
                                .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                        });
                    });

                    general.educationalActivities
                        .filter((activity) => activity.is_in_compulsory_education)
                        .forEach((activity) => {
                            activity.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistributionCompulsory[index]
                                    .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                    const newSummary = {
                        ...general.summary!,
                        amountOfStudyTime: {
                            hours: ((general.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours || 0)
                            ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours || 0)
                            ), 0) || 0)) || null,
                            hours_theory: ((general.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours_theory || 0)
                            ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours_theory || 0)
                            ), 0) || 0)) || null,
                            hours_practice: ((general.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours_practice || 0)
                            ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours_practice || 0)
                            ), 0) || 0)) || null,
                            hours_coursework: ((general.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours_coursework || 0)
                            ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours_coursework || 0)
                            ), 0) || 0)) || null,
                            hours_internship: ((general.educationalActivities.reduce((prev, next) => (
                                prev + (next.hours_internship || 0)
                            ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours_internship || 0)
                            ), 0) || 0)) || null,
                        },
                        semestersDistribution: totalSemestersDistribution,
                    };
                    const newSummaryCompulsory = {
                        ...general.summaryCompulsory!,
                        amountOfStudyTime: {
                            hours: ((general.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours || 0)
                            ), 0) || 0)) || null,
                            hours_theory: ((general.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours_theory || 0)
                            ), 0) || 0)) || null,
                            hours_practice: ((general.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours_practice || 0)
                            ), 0) || 0)) || null,
                            hours_coursework: ((general.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours_coursework || 0)
                            ), 0) || 0)) || null,
                            hours_internship: ((general.educationalActivities
                                .filter((activity) => activity.is_in_compulsory_education)
                                .reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                prev + (next.hours_internship || 0)
                            ), 0) || 0)) || null,
                        },
                        semestersDistribution: totalSemestersDistributionCompulsory,
                    };

                    return {
                        ...general,
                        summary: newSummary,
                        summaryCompulsory: newSummaryCompulsory,
                    };
                });
            }
        },
        changeSubjectName: (state, action: PayloadAction<
            [
            number | null,
            number | undefined,
            number | undefined,
            number,
            string
        ]
        >) => {
            if (!state.dataToWork) return;

            const [qualId, modId, unitId, subjId, subjName] = action.payload;

            // CHANGE SUBJECT NAME IN QUALIFICATIONS BLOCK
            if (qualId) {
                state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                    if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                    return {
                        ...qualification,
                        modules: qualification.modules.map((module) => {
                            if (module.module_id !== modId) return module;

                            return {
                                ...module,
                                units: module.units.map((unit) => {
                                    if (unit.educational_modules_unit_id !== unitId) return unit;

                                    return {
                                        ...unit,
                                        subjects: unit.subjects.map((subject) => {
                                            if (subject.subject_id !== subjId) return subject;

                                            return {
                                                ...subject,
                                                name: subjName,
                                            };
                                        }),
                                    };
                                }),
                            };
                        }),
                    };
                });

            // CHANGE SUBJECT NAME IN GENERAL MODULES BLOCK
            } else {
                state.dataToWork.data.general[0].subjects = state.dataToWork.data.general[0].subjects.map((subject) => {
                    if (subject.subject_id !== subjId) return subject;

                    return {
                        ...subject,
                        name: subjName,
                    };
                });
            }
        },
        deleteSubject: (state, action: PayloadAction<
            [number | null, number | undefined, number | undefined, WorkingCurriculumExtractSubjects]
        >) => {
            if (!state.dataToWork) return;

            const [qualId, modId, unitId, subj] = action.payload;

            // DELETE SUBJECT FROM QUALIFICATIONS BLOCK
            if (qualId) {
                state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                    if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                    return {
                        ...qualification,
                        modules: qualification.modules.map((module) => {
                            if (module.module_id !== modId) return module;

                            return {
                                ...module,
                                units: module.units.map((unit) => {
                                    if (unit.educational_modules_unit_id !== unitId) return unit;

                                    return {
                                        ...unit,
                                        subjects: unit.subjects.map((subject) => {
                                            if (subject.subject_id === subj.subject_id) {
                                                return {
                                                    ...subject,
                                                    hours: null,
                                                    hours_coursework: null,
                                                    hours_internship: null,
                                                    hours_practice: null,
                                                    hours_theory: null,
                                                    tests_semesters: null,
                                                    courseworks_count: null,
                                                    exams_semestrs: null,
                                                    controlworks_count: null,
                                                    semestersDistribution: subject.semestersDistribution.map((semester) => ({
                                                        ...semester,
                                                        hours: null,
                                                    })),
                                                };
                                            }

                                            return subject;
                                        }),
                                    };
                                }),
                            };
                        }),
                    };
                });

            // DELETE SUBJECT FROM GENERAL MODULES BLOCK
            } else {
                state.dataToWork.data.general[0].subjects = state.dataToWork.data.general[0].subjects
                    .map((subject) => {
                        if (subject.subject_id === subj.subject_id) {
                            return {
                                ...subject,
                                hours: null,
                                hours_coursework: null,
                                hours_internship: null,
                                hours_practice: null,
                                hours_theory: null,
                                tests_semesters: null,
                                courseworks_count: null,
                                exams_semestrs: null,
                                controlworks_count: null,
                                semestersDistribution: subject.semestersDistribution.map((semester) => ({
                                    ...semester,
                                    hours: null,
                                })),
                            };
                        }

                        return subject;
                    });
            }

            if (subj.working_curriculum_extract_id) {
                state.actions.delete = [...state.actions.delete || [], subj.working_curriculum_extract_id];
                state.distributionActions.delete = [
                    ...state.distributionActions.delete || [],
                    ...subj.semestersDistribution.map((semester) => semester.working_curriculum_extract_distribution_id!),
                ];
            } else {
                state.actions.create = state.actions.create?.filter((item) => (
                    !(item.subject_id === subj.subject_id
                    && item.standard_curriculum_qualification_id === subj.standard_curriculum_qualification_id)
                ));
                state.distributionActions.create = state.distributionActions.create?.filter((item) => (
                    !(item.subject_id === subj.subject_id
                    && item.standard_curriculum_qualification_id === subj.standard_curriculum_qualification_id)
                ));
                Object.keys(state.validationErrors).forEach((name) => {
                    // @ts-ignore
                    state.validationErrors[name] = state.validationErrors[name].filter((error) => (
                        error.subject_id !== subj.subject_id
                    ));
                });
            }
        },
        deleteEduActivity: (state, action: PayloadAction<[number | null, WorkingCurriculumExtractEducationalActivities]>) => {
            if (!state.dataToWork) return;

            const [qualId, activityToDelete] = action.payload;

            // DELETE EDU ACTIVITY TYPE FROM QUALIFICATIONS BLOCK
            if (qualId) {
                state.dataToWork.data.qualifications = state.dataToWork.data.qualifications.map((qualification) => {
                    if (qualification.standard_curriculum_qualification_id !== qualId) return qualification;

                    return {
                        ...qualification,
                        educationalActivities: qualification.educationalActivities.filter((activity) => (
                            activity.educational_activity_type_id !== activityToDelete.educational_activity_type_id
                        )),
                    };
                });

            // DELETE EDU ACTIVITY TYPE FROM GENERAL MODULES BLOCK
            } else {
                state.dataToWork.data.general[0].educationalActivities = state.dataToWork.data.general[0].educationalActivities
                    .filter((activity) => (
                        activity.educational_activity_type_id !== activityToDelete.educational_activity_type_id
                    ));
            }

            if (activityToDelete.working_curriculum_extract_id) {
                state.actions.delete = [...state.actions.delete || [], activityToDelete.working_curriculum_extract_id];
                state.distributionActions.delete = [
                    ...state.distributionActions.delete || [],
                    ...activityToDelete.semestersDistribution.map((semester) => semester.working_curriculum_extract_distribution_id!),
                ];
            } else {
                state.actions.create = state.actions.create?.filter((item) => (
                    !(item.educational_activity_type_id === activityToDelete.educational_activity_type_id
                    && item.standard_curriculum_qualification_id === activityToDelete.standard_curriculum_qualification_id)
                ));
                state.distributionActions.create = state.distributionActions.create?.filter((item) => (
                    !(item.educational_activity_type_id === activityToDelete.educational_activity_type_id
                    && item.standard_curriculum_qualification_id === activityToDelete.standard_curriculum_qualification_id)
                ));
                Object.keys(state.validationErrors).forEach((name) => {
                    // @ts-ignore
                    state.validationErrors[name] = state.validationErrors[name].filter((error) => (
                        error.educational_activity_type_id !== activityToDelete.educational_activity_type_id
                    ));
                });
            }
        },
        addValidationErrors: (state, action: PayloadAction<
            [number | null, number, 'amountOfStudyTime' | 'semestersDistribution' | 'notFilledSummaryHours', boolean, boolean, boolean]
        >) => {
            const [qualId, subjId, fieldName, validated, notFilled, isSubject] = action.payload;

            // ADD SUBJECT VALIDATION ERROR
            if (isSubject) {
                const foundError = [...state.validationErrors[fieldName]].filter((field) => (
                    field.standard_curriculum_qualification_id === qualId && field.subject_id === subjId
                ))[0];

                if (foundError) {
                    if (fieldName !== 'notFilledSummaryHours') {
                        state.validationErrors[fieldName] = state.validationErrors[fieldName].map((field) => {
                            if (field.standard_curriculum_qualification_id === qualId && field.subject_id === subjId) {
                                return {
                                    ...field,
                                    validated,
                                };
                            }

                            return field;
                        });
                    } else {
                        state.validationErrors.notFilledSummaryHours = state.validationErrors.notFilledSummaryHours.map((field) => {
                            if (field.standard_curriculum_qualification_id === qualId && field.subject_id === subjId) {
                                return {
                                    ...field,
                                    notFilled,
                                };
                            }

                            return field;
                        });
                    }
                } else if (fieldName !== 'notFilledSummaryHours') {
                    state.validationErrors[fieldName].push({
                        standard_curriculum_qualification_id: qualId,
                        subject_id: subjId,
                        validated,
                    });
                } else {
                    state.validationErrors.notFilledSummaryHours.push({
                        standard_curriculum_qualification_id: qualId,
                        subject_id: subjId,
                        notFilled,
                    });
                }

            // ADD EDU ACTIVITY TYPE VALIDATION ERROR
            } else {
                const foundError = [...state.validationErrors[fieldName]].filter((field) => (
                    field.standard_curriculum_qualification_id === qualId && field.educational_activity_type_id === subjId
                ))[0];

                if (foundError) {
                    if (fieldName !== 'notFilledSummaryHours') {
                        state.validationErrors[fieldName] = state.validationErrors[fieldName].map((field) => {
                            if (field.standard_curriculum_qualification_id === qualId && field.educational_activity_type_id === subjId) {
                                return {
                                    ...field,
                                    validated,
                                };
                            }

                            return field;
                        });
                    } else {
                        state.validationErrors.notFilledSummaryHours = state.validationErrors.notFilledSummaryHours.map((field) => {
                            if (field.standard_curriculum_qualification_id === qualId && field.educational_activity_type_id === subjId) {
                                return {
                                    ...field,
                                    notFilled,
                                };
                            }

                            return field;
                        });
                    }
                } else if (fieldName !== 'notFilledSummaryHours') {
                    state.validationErrors[fieldName].push({
                        standard_curriculum_qualification_id: qualId,
                        educational_activity_type_id: subjId,
                        validated,
                    });
                } else {
                    state.validationErrors.notFilledSummaryHours.push({
                        standard_curriculum_qualification_id: qualId,
                        educational_activity_type_id: subjId,
                        notFilled,
                    });
                }
            }
        },

        prepareSemestersDistributionToSend: (state, action: PayloadAction<WorkingCurriculumExtractSubjects[]>) => {
            if (state.distributionActions.create?.length) {
                const updatedCreateActions: WorkingCurriculumExtractDistributionActionFields[] = [];
                action.payload.forEach((dataAction) => {
                    state.distributionActions.create?.forEach((oldAction) => {
                        if (dataAction.subject_id) {
                            if (dataAction.subject_id === oldAction.subject_id
                            && dataAction.standard_curriculum_qualification_id === oldAction.standard_curriculum_qualification_id
                            && oldAction.hours) {
                                updatedCreateActions.push({
                                    working_curriculum_extract_id: dataAction.working_curriculum_extract_id,
                                    semester_number: oldAction.semester_number,
                                    hours: oldAction.hours,
                                });
                            }
                        } else if (dataAction.educational_activity_type_id === oldAction.educational_activity_type_id
                                && dataAction.standard_curriculum_qualification_id === oldAction.standard_curriculum_qualification_id
                                && oldAction.hours) {
                            updatedCreateActions.push({
                                working_curriculum_extract_id: dataAction.working_curriculum_extract_id,
                                semester_number: oldAction.semester_number,
                                hours: oldAction.hours,
                            });
                        }
                    });
                });
                state.distributionActions.create = updatedCreateActions;
            }
        },
        changeFormWithErrorsValue: (state, action: PayloadAction<boolean>) => {
            state.formWithErrors = action.payload;
        },
        changeReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readOnly = action.payload;
        },
        changeRedirectToMainPage: (state, action: PayloadAction<boolean>) => {
            state.redirectToMainPage = action.payload;
        },
        toggleShowAllDisciplines: (state, action: PayloadAction<boolean>) => {
            state.showAllDisciplines = action.payload;
        },
        cancelChanges: (state) => {
            state.dataToWork = state.dataParsed;
            state.actions = initialState.actions;
            state.distributionActions = initialState.distributionActions;
            state.validationErrors = initialState.validationErrors;
            state.formWithErrors = initialState.formWithErrors;
        },
        clearUpdatingErrors: (state) => {
            state.updatingError = initialState.updatingError;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorkingCurriculumExtract.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchWorkingCurriculumExtract.fulfilled, (state, action: PayloadAction<WorkingCurriculumExtract>) => {
                state.data = action.payload;

                const initSummaryData: WorkingCurriculumExtractSummary = {
                    formControl: ['formControlExamCell', 'formControlEasyExamCell', 'formControlControlWorksCell', 'formControlCourseWorksCell'],
                    amountOfStudyTime: {
                        hours: null,
                        hours_coursework: null,
                        hours_internship: null,
                        hours_practice: null,
                        hours_theory: null,
                    },
                    semestersDistribution: [],
                };

                for (let i = 0; i < action.payload.meta.semestersCount; i++) {
                    initSummaryData.semestersDistribution.push({
                        hours: null,
                        semester_number: i + 1,
                    });
                }

                const parsedData: WorkingCurriculumExtract = {
                    meta: action.payload.meta,
                    data: {
                        general: action.payload.data.general
                            ? action.payload.data.general.map((general) => (
                                {
                                    ...general,
                                    summary: initSummaryData,
                                    summaryCompulsory: initSummaryData,
                                    subjects: general.subjects.map((subject) => {
                                        const subjSemDistribution = [...initSummaryData.semestersDistribution];

                                        subject.semestersDistribution.forEach((semester) => {
                                            subjSemDistribution.forEach((initSemester, index) => {
                                                if (semester.semester_number === initSemester.semester_number && semester.hours) {
                                                    subjSemDistribution[index] = semester;
                                                }
                                            });
                                        });

                                        return {
                                            ...subject,
                                            exams_semestrs: (subject.exams_semestrs as number[])?.join(','),
                                            tests_semesters: (subject.tests_semesters as number[])?.join(','),
                                            sortValue: subject.sort,
                                            semestersDistribution: subjSemDistribution,
                                        };
                                    }),
                                    educationalActivities: general.educationalActivities.map((activity) => {
                                        const subjSemDistribution = [...initSummaryData.semestersDistribution];

                                        activity.semestersDistribution.forEach((semester) => {
                                            subjSemDistribution.forEach((initSemester, index) => {
                                                if (semester.semester_number === initSemester.semester_number && semester.hours) {
                                                    subjSemDistribution[index] = semester;
                                                }
                                            });
                                        });

                                        return {
                                            ...activity,
                                            exams_semestrs: (activity.exams_semestrs as number[])?.join(','),
                                            tests_semesters: (activity.tests_semesters as number[])?.join(','),
                                            sortValue: activity.sort,
                                            semestersDistribution: subjSemDistribution,
                                        };
                                    }),
                                }
                            )) : action.payload.data.general,
                        qualifications: action.payload.data.qualifications ? action.payload.data.qualifications.map((qualification) => (
                            {
                                ...qualification,
                                summary: initSummaryData,
                                summaryCompulsory: initSummaryData,
                                modules: qualification.modules.map((module) => (
                                    {
                                        ...module,
                                        summary: initSummaryData,
                                        units: module.units.map((unit) => (
                                            {
                                                ...unit,
                                                subjects: unit.subjects.map((subject) => {
                                                    const subjSemDistribution = [...initSummaryData.semestersDistribution];

                                                    subject.semestersDistribution.forEach((semester) => {
                                                        subjSemDistribution.forEach((initSemester, index) => {
                                                            if (semester.semester_number === initSemester.semester_number && semester.hours) {
                                                                subjSemDistribution[index] = semester;
                                                            }
                                                        });
                                                    });

                                                    return {
                                                        ...subject,
                                                        exams_semestrs: (subject.exams_semestrs as number[])?.join(','),
                                                        tests_semesters: (subject.tests_semesters as number[])?.join(','),
                                                        sortValue: subject.sort,
                                                        semestersDistribution: subjSemDistribution,
                                                    };
                                                }),
                                                summary: initSummaryData,
                                            }
                                        )),
                                    }
                                )),
                                educationalActivities: qualification.educationalActivities.map((activity) => {
                                    const subjSemDistribution = [...initSummaryData.semestersDistribution];

                                    activity.semestersDistribution.forEach((semester) => {
                                        subjSemDistribution.forEach((initSemester, index) => {
                                            if (semester.semester_number === initSemester.semester_number && semester.hours) {
                                                subjSemDistribution[index] = semester;
                                            }
                                        });
                                    });

                                    return {
                                        ...activity,
                                        exams_semestrs: (activity.exams_semestrs as number[])?.join(','),
                                        tests_semesters: (activity.tests_semesters as number[])?.join(','),
                                        sortValue: activity.sort,
                                        semestersDistribution: subjSemDistribution,
                                    };
                                }),
                            }
                        )) : action.payload.data.qualifications,
                    },
                };

                state.dataParsed = parsedData;

                if (state.dataParsed.data.qualifications && state.dataParsed.data.qualifications.length) {
                    state.dataParsed.data.qualifications = state.dataParsed.data.qualifications.map((qualification) => ({
                        ...qualification,
                        modules: qualification.modules.map((module) => ({
                            ...module,
                            units: module.units.map((unit) => {
                                const totalSemestersDistribution = unit.subjects.reduce((acc, subject) => {
                                    subject.semestersDistribution.forEach(({ semester_number, hours }) => {
                                        // @ts-ignore
                                        acc[semester_number] = (acc[semester_number] || 0) + (hours || 0);
                                    });
                                    return acc;
                                }, {});

                                const newSummary = {
                                    ...unit.summary!,
                                    amountOfStudyTime: {
                                        hours: unit.subjects.reduce((prev, next) => (
                                            prev + (next.hours || 0)
                                        ), 0) || null,
                                        hours_theory: unit.subjects.reduce((prev, next) => (
                                            prev + (next.hours_theory || 0)
                                        ), 0) || null,
                                        hours_practice: unit.subjects.reduce((prev, next) => (
                                            prev + (next.hours_practice || 0)
                                        ), 0) || null,
                                        hours_coursework: unit.subjects.reduce((prev, next) => (
                                            prev + (next.hours_coursework || 0)
                                        ), 0) || null,
                                        hours_internship: unit.subjects.reduce((prev, next) => (
                                            prev + (next.hours_internship || 0)
                                        ), 0) || null,
                                    },
                                    semestersDistribution: unit.subjects.length
                                        ? Object.entries(totalSemestersDistribution).map(([semester_number, hours]) => ({
                                            semester_number: Number(semester_number),
                                            hours: (hours as number || null) || null,
                                        }))
                                        : Array(state.data!.meta.semestersCount).fill(null).map((_, index) => ({
                                            semester_number: index + 1,
                                            hours: null,
                                        })),
                                };

                                return {
                                    ...unit,
                                    summary: newSummary,
                                };
                            }),
                        })),
                    }));
                    state.dataParsed.data.qualifications = state.dataParsed.data.qualifications.map((qualification) => ({
                        ...qualification,
                        modules: qualification.modules.map((module) => {
                            const totalSemestersDistribution = module.units.reduce((acc, unit) => {
                                unit.summary!.semestersDistribution.forEach(({ semester_number, hours }) => {
                                    // @ts-ignore
                                    acc[semester_number] = (acc[semester_number] || 0) + (hours || 0);
                                });
                                return acc;
                            }, {});

                            const newSummary = {
                                ...module.summary!,
                                amountOfStudyTime: {
                                    hours: module.units.reduce((prev, next) => (
                                        prev + (next.summary!.amountOfStudyTime.hours || 0)
                                    ), 0) || null,
                                    hours_theory: module.units.reduce((prev, next) => (
                                        prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                                    ), 0) || null,
                                    hours_practice: module.units.reduce((prev, next) => (
                                        prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                                    ), 0) || null,
                                    hours_coursework: module.units.reduce((prev, next) => (
                                        prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                                    ), 0) || null,
                                    hours_internship: module.units.reduce((prev, next) => (
                                        prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                                    ), 0) || null,
                                },
                                semestersDistribution: Object.entries(totalSemestersDistribution).map(([semester_number, hours]) => ({
                                    semester_number: Number(semester_number),
                                    hours: (hours as number || null) || null,
                                })),
                            };

                            return {
                                ...module,
                                summary: newSummary,
                            };
                        }),
                    }));
                    state.dataParsed.data.qualifications = state.dataParsed.data.qualifications.map((qualification) => {
                        const totalSemestersDistribution: WorkingCurriculumExtractSemestersDistributionSummary[] = [];
                        const totalSemestersDistributionCompulsory: WorkingCurriculumExtractSemestersDistributionSummary[] = [];

                        for (let i = 0; i < state.data!.meta.semestersCount; i++) {
                            totalSemestersDistribution.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                            totalSemestersDistributionCompulsory.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                        }

                        qualification.modules.forEach((module) => {
                            module.summary!.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                                totalSemestersDistributionCompulsory[index]
                                    .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        qualification.educationalActivities.forEach((activity) => {
                            activity.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        qualification.educationalActivities
                            .filter((activity) => activity.is_in_compulsory_education)
                            .forEach((activity) => {
                                activity.semestersDistribution.forEach((semester, index) => {
                                    totalSemestersDistributionCompulsory[index]
                                        .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                                });
                            });

                        const newSummary = {
                            ...qualification.summary!,
                            amountOfStudyTime: {
                                hours: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistribution,
                        };
                        const newSummaryCompulsory = {
                            ...qualification.summaryCompulsory!,
                            amountOfStudyTime: {
                                hours: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_theory || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_practice || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_coursework || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_internship || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistributionCompulsory,
                        };

                        return {
                            ...qualification,
                            summary: newSummary,
                            summaryCompulsory: newSummaryCompulsory,
                        };
                    });
                    state.dataParsed.data.qualifications = state.dataParsed.data.qualifications.map((qualification) => {
                        const totalSemestersDistribution: WorkingCurriculumExtractSemestersDistributionSummary[] = [];
                        const totalSemestersDistributionCompulsory: WorkingCurriculumExtractSemestersDistributionSummary[] = [];

                        for (let i = 0; i < state.data!.meta.semestersCount; i++) {
                            totalSemestersDistribution.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                            totalSemestersDistributionCompulsory.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                        }

                        qualification.modules.forEach((module) => {
                            module.summary!.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                                totalSemestersDistributionCompulsory[index]
                                    .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        qualification.educationalActivities.forEach((activity) => {
                            activity.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        qualification.educationalActivities
                            .filter((activity) => activity.is_in_compulsory_education)
                            .forEach((activity) => {
                                activity.semestersDistribution.forEach((semester, index) => {
                                    totalSemestersDistributionCompulsory[index]
                                        .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                                });
                            });

                        const newSummary = {
                            ...qualification.summary!,
                            amountOfStudyTime: {
                                hours: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((qualification.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistribution,
                        };
                        const newSummaryCompulsory = {
                            ...qualification.summaryCompulsory!,
                            amountOfStudyTime: {
                                hours: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_theory || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_practice || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_coursework || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((qualification.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_internship || 0)
                                    ), 0) || 0) + (qualification.modules.reduce((prev, next) => (
                                    prev + (next.summary!.amountOfStudyTime.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistributionCompulsory,
                        };

                        return {
                            ...qualification,
                            summary: newSummary,
                            summaryCompulsory: newSummaryCompulsory,
                        };
                    });
                }
                if (state.dataParsed.data.general && state.dataParsed.data.general.length) {
                    state.dataParsed.data.general = state.dataParsed.data.general.map((general) => {
                        const totalSemestersDistribution: WorkingCurriculumExtractSemestersDistributionSummary[] = [];
                        const totalSemestersDistributionCompulsory: WorkingCurriculumExtractSemestersDistributionSummary[] = [];

                        for (let i = 0; i < state.data!.meta.semestersCount; i++) {
                            totalSemestersDistribution.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                            totalSemestersDistributionCompulsory.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                        }

                        general.subjects.forEach((subject) => {
                            subject.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                                totalSemestersDistributionCompulsory[index]
                                    .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        general.educationalActivities.forEach((activity) => {
                            activity.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        general.educationalActivities
                            .filter((activity) => activity.is_in_compulsory_education)
                            .forEach((activity) => {
                                activity.semestersDistribution.forEach((semester, index) => {
                                    totalSemestersDistributionCompulsory[index]
                                        .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                                });
                            });

                        const newSummary = {
                            ...general.summary!,
                            amountOfStudyTime: {
                                hours: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistribution,
                        };
                        const newSummaryCompulsory = {
                            ...general.summaryCompulsory!,
                            amountOfStudyTime: {
                                hours: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_theory || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_practice || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_coursework || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_internship || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistributionCompulsory,
                        };

                        return {
                            ...general,
                            summary: newSummary,
                            summaryCompulsory: newSummaryCompulsory,
                        };
                    });
                    state.dataParsed.data.general = state.dataParsed.data.general.map((general) => {
                        const totalSemestersDistribution: WorkingCurriculumExtractSemestersDistributionSummary[] = [];
                        const totalSemestersDistributionCompulsory: WorkingCurriculumExtractSemestersDistributionSummary[] = [];

                        for (let i = 0; i < state.data!.meta.semestersCount; i++) {
                            totalSemestersDistribution.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                            totalSemestersDistributionCompulsory.push({
                                semester_number: i + 1,
                                hours: null,
                            });
                        }

                        general.subjects.forEach((subject) => {
                            subject.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                                totalSemestersDistributionCompulsory[index]
                                    .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        general.educationalActivities.forEach((activity) => {
                            activity.semestersDistribution.forEach((semester, index) => {
                                totalSemestersDistribution[index]
                                    .hours = ((totalSemestersDistribution[index].hours || 0) + (semester.hours || 0)) || null;
                            });
                        });

                        general.educationalActivities
                            .filter((activity) => activity.is_in_compulsory_education)
                            .forEach((activity) => {
                                activity.semestersDistribution.forEach((semester, index) => {
                                    totalSemestersDistributionCompulsory[index]
                                        .hours = ((totalSemestersDistributionCompulsory[index].hours || 0) + (semester.hours || 0)) || null;
                                });
                            });

                        const newSummary = {
                            ...general.summary!,
                            amountOfStudyTime: {
                                hours: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((general.educationalActivities.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistribution,
                        };
                        const newSummaryCompulsory = {
                            ...general.summaryCompulsory!,
                            amountOfStudyTime: {
                                hours: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours || 0)
                                ), 0) || 0)) || null,
                                hours_theory: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_theory || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_theory || 0)
                                ), 0) || 0)) || null,
                                hours_practice: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_practice || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_practice || 0)
                                ), 0) || 0)) || null,
                                hours_coursework: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_coursework || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_coursework || 0)
                                ), 0) || 0)) || null,
                                hours_internship: ((general.educationalActivities
                                    .filter((activity) => activity.is_in_compulsory_education)
                                    .reduce((prev, next) => (
                                        prev + (next.hours_internship || 0)
                                    ), 0) || 0) + (general.subjects.reduce((prev, next) => (
                                    prev + (next.hours_internship || 0)
                                ), 0) || 0)) || null,
                            },
                            semestersDistribution: totalSemestersDistributionCompulsory,
                        };

                        return {
                            ...general,
                            summary: newSummary,
                            summaryCompulsory: newSummaryCompulsory,
                        };
                    });
                }

                state.dataToWork = state.dataParsed;

                state.isLoading = false;
            })
            .addCase(fetchWorkingCurriculumExtract.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateWorkingCurriculumExtract.pending, (state) => {
                state.updatingError = undefined;
                state.updatingIsLoading = true;
                state.updatedStatus = false;
            })
            .addCase(updateWorkingCurriculumExtract.fulfilled, (state) => {
                state.updatingIsLoading = false;
                state.updatedStatus = true;
            })
            .addCase(updateWorkingCurriculumExtract.rejected, (state, action) => {
                state.updatingIsLoading = false;
                state.updatingError = action.payload;
                state.updatedStatus = false;
            });
    },
});

export const { actions: workingCurriculumExtractActions } = workingCurriculumExtractSlice;
export const { reducer: workingCurriculumExtractReducer } = workingCurriculumExtractSlice;
