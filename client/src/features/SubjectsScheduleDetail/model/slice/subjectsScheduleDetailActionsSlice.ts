import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    SubjectsScheduleDetailWeekDayDetailSubjectsByGroups,
    SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail,
} from 'entities/SubjectsScheduleDetail';
import { excludePropertiesFromObject } from 'shared/lib/helpers/excludePropertiesFromObject/excludePropertiesFromObject';
import {
    SubjectsScheduleDetailActionsFields,
    SubjectsScheduleDetailActionsSchema,
    SubjectsScheduleDetailUpdate,
} from '../types/subjectsScheduleDetailActions';
import { updateSubjectsScheduleDetail } from '../services/updateSubjectsScheduleDetail/updateSubjectsScheduleDetail';

const initialState: SubjectsScheduleDetailActionsSchema = {
    actions: {
        update: undefined,
        create: undefined,
        delete: undefined,
        simulate: false,
    },
    creating: {
        class_time_id: null,
        day_num: null,
        classroom_id: null,
        group_id: null,
        shift: null,
        subgroup: null,
        subject_id: null,
        teacher_id: null,
        week_num: null,
        year: null,
        educational_activity_type_id: null,
        tempIndex: null,
        isSubgroup: false,
        type: null,
    },
    updating: {
        class_time_id: null,
        day_num: null,
        classroom_id: null,
        group_id: null,
        shift: null,
        subgroup: null,
        subject_id: null,
        teacher_id: null,
        week_num: null,
        year: null,
        educational_activity_type_id: null,
        tempIndex: null,
        isSubgroup: false,
        type: null,
    },
    updated: false,
    error: undefined,
    isLoading: false,
};

const subjectsScheduleDetailActionsSlice = createSlice({
    name: 'subjectsScheduleDetailActions',
    initialState,
    reducers: {
        updateSubjectsDragDrop: (state, action: PayloadAction<SubjectsScheduleDetailWeekDayDetailSubjectsByGroups>) => {
            const values = Object.values(action.payload).map((item) => item)[0];
            const secondShift = [4, 5, 6];

            const dataToUpdate: SubjectsScheduleDetailUpdate[] = values.map((value) => ({
                subject_schedule_id: value.subject_schedule_id!,
                fields: {
                    tempIndex: `day-${value.day_num}-group-${value.group_id}-week-${value.week_num}-classroom-${value.classroom_id}-subjId-${value.subject_id}-eduId-${value.educational_activity_type_id}`,
                    subject_id: value.subject_id,
                    educational_activity_type_id: value.educational_activity_type_id,
                    group_id: value.group_id,
                    teacher_id: value.teacher_id,
                    year: value.year,
                    week_num: value.week_num,
                    day_num: value.day_num,
                    class_time_id: value.class_time_id,
                    classroom_id: value.classroom_id,
                    shift: secondShift.includes(value.class_time_id) ? 2 : 1,
                    subgroup: value.subgroup,
                },
            }));

            if (state.actions.update && state.actions.update.length) {
                state.actions.update.forEach((item) => {
                    dataToUpdate.filter((itemInner) => itemInner.subject_schedule_id).forEach((itemInner) => {
                        if (item.subject_schedule_id === itemInner.subject_schedule_id) {
                            state.actions.update = state.actions.update?.filter((itemToChange) => (
                                itemToChange.subject_schedule_id !== itemInner.subject_schedule_id
                            ));
                        }
                    });
                });
            }
            state.actions.update = [...state.actions.update || [], ...dataToUpdate.filter((item) => item.subject_schedule_id)];

            if (state.actions.create && state.actions.create.length) {
                state.actions.create.forEach((item) => {
                    dataToUpdate.filter((itemInner) => !itemInner.subject_schedule_id).forEach((itemInner) => {
                        if (item.tempIndex === itemInner.fields.tempIndex) {
                            state.actions.create = state.actions.create?.filter((itemToChange) => (
                                itemToChange.tempIndex !== itemInner.fields.tempIndex
                            ));
                        }
                    });
                });
            }
            state.actions.create = [
                ...state.actions.create || [],
                ...dataToUpdate
                    .filter((item) => !item.subject_schedule_id)
                    .filter((item) => item.fields.week_num)
                    .map((item) => item.fields),
            ];
        },
        deleteSubject: (state, action: PayloadAction<number>) => {
            state.actions.delete = [...state.actions.delete || [], action.payload];
            state.actions.update = state.actions.update?.filter((item) => item.subject_schedule_id !== action.payload);
            state.actions.update = state.actions.update?.map((item, index) => ({
                ...item,
                fields: {
                    ...item.fields,
                    class_time_id: index + 1,
                },
            }));
        },
        deleteSubjectFromCreate: (state, action: PayloadAction<string>) => {
            state.actions.create = state.actions.create?.filter((item) => item.tempIndex !== action.payload);
        },
        addSubject: (state, action: PayloadAction<SubjectsScheduleDetailActionsFields>) => {
            state.actions.create = [...state.actions.create || [], action.payload];
        },
        updateSubjects: (state, action: PayloadAction<SubjectsScheduleDetailUpdate>) => {
            const secondShift = [4, 5, 6];
            if (action.payload.subject_schedule_id) {
                state.actions.update = [
                    ...state.actions.update?.filter((item) => item.subject_schedule_id !== action.payload.subject_schedule_id) || [],
                    {
                        subject_schedule_id: action.payload.subject_schedule_id,
                        fields: {
                            ...action.payload.fields,
                            shift: secondShift.includes(action.payload.fields.class_time_id) ? 2 : 1,
                        } as any,
                    },
                ];
            } else {
                state.actions.create = [
                    ...state.actions.create?.filter((item) => item.tempIndex !== action.payload.fields.tempIndex) || [],
                    {
                        ...action.payload.fields,
                        shift: secondShift.includes(action.payload.fields.class_time_id) ? 2 : 1,
                        tempIndex: `day-${action.payload.fields
                            .day_num}-group-${action.payload.fields
                            .group_id}-week-${action.payload.fields
                            .week_num}-classroom-${action.payload.fields
                            .classroom_id}-subjId-${action.payload.fields.subject_id}-eduId-${action.payload.fields.educational_activity_type_id}`,
                    },
                ];
            }
        },

        // creating and updating modal reducers start ------
        changeClassTime: (state, action: PayloadAction<[number | null, number, 'creating' | 'updating']>) => {
            const [classTimeId, shift, actionType] = action.payload;
            state[actionType].class_time_id = classTimeId;
            state[actionType].shift = shift;
        },
        changeDiscipline: (state, action: PayloadAction<[string, number | null, 'creating' | 'updating']>) => {
            const [type, id, actionType] = action.payload;

            if (type === 'subject') {
                state[actionType].subject_id = id;
                state[actionType].educational_activity_type_id = null;
            } else {
                state[actionType].educational_activity_type_id = id;
                state[actionType].subject_id = null;
            }
            state[actionType].type = type;
        },
        changeTeacher: (state, action: PayloadAction<[number | null, 'creating' | 'updating']>) => {
            const [teacherId, actionType] = action.payload;
            state[actionType].teacher_id = teacherId;
        },
        changeClassRoom: (state, action: PayloadAction<[number, 'creating' | 'updating']>) => {
            const [classRoomId, actionType] = action.payload;
            state[actionType].classroom_id = classRoomId;
        },
        changeDefaultValues: (state, action: PayloadAction<[number, number, number, number, 'creating' | 'updating']>) => {
            const [dayNum, groupId, weekNum, year, actionType] = action.payload;
            state[actionType] = {
                ...state[actionType],
                day_num: dayNum,
                group_id: groupId,
                week_num: weekNum,
                year,
            };
        },
        checkIsSubgroup: (state, action: PayloadAction<[boolean, 'creating' | 'updating']>) => {
            const [isSubgroup, actionType] = action.payload;
            state[actionType].isSubgroup = isSubgroup;
        },
        changeSubGroup: (state, action: PayloadAction<[number | null, 'creating' | 'updating']>) => {
            const [subgroup, actionType] = action.payload;
            state[actionType].subgroup = subgroup;
        },
        // creating and updating modal reducers end --------

        clearActions: (state) => {
            state.actions = initialState.actions;
            state.error = initialState.error;
        },
        clearActionData: (state, action: PayloadAction<'creating' | 'updating'>) => {
            state[action.payload] = initialState[action.payload];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateSubjectsScheduleDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                state.updated = false;
            })
            .addCase(updateSubjectsScheduleDetail.fulfilled, (state) => {
                state.isLoading = false;
                state.updated = true;
            })
            .addCase(updateSubjectsScheduleDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.updated = false;
            });
    },
});

export const { actions: subjectsScheduleDetailActionsActions } = subjectsScheduleDetailActionsSlice;
export const { reducer: subjectsScheduleDetailActionsReducer } = subjectsScheduleDetailActionsSlice;
