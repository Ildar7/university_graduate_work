import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    SubjectsScheduleDetailStudentsGroupsData,
} from '../types/subjectsScheduleDetailStudentsGroups';
import {
    fetchSubjectsScheduleClassTime,
} from '../services/fetchSubjectsScheduleClassTime/fetchSubjectsScheduleClassTime';
import { SubjectsScheduleDetailSchema } from '../types/subjectsScheduleDetailSchema';
import {
    fetchSubjectsScheduleDetailStudentsGroups,
} from '../services/fetchSubjectsScheduleDetailStudentsGroups/fetchSubjectsScheduleDetailStudentsGroups';
import { fetchSubjectsScheduleDetail } from '../services/fetchSubjectsScheduleDetail/fetchSubjectsScheduleDetail';
import {
    SubjectsScheduleDetailData,
    SubjectsScheduleDetailWeekDayDetail,
    SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail,
} from '../types/subjectsScheduleDetail';
import {
    SubjectsScheduleDetailClassTimeData,
} from '../types/subjectsScheduleDetailClassTime';

const initialState: SubjectsScheduleDetailSchema = {
    subjectsScheduleDetail: {
        data: undefined,
        dataParsed: undefined,
        dataToWork: undefined,
        isLoading: true,
        error: undefined,
    },
    studentsGroups: {
        data: undefined,
        isLoading: true,
        error: undefined,
    },
    classTime: {
        data: undefined,
        isLoading: true,
        error: undefined,
    },
    filters: {
        shifts: undefined,
        eduLangs: undefined,
        courses: undefined,
        weekNums: undefined,
    },
};

const subjectsScheduleDetailSlice = createSlice({
    name: 'subjectsScheduleDetail',
    initialState,
    reducers: {
        fillDataWithEmptyObjects: (state) => {
            const dataParsed = { ...state.subjectsScheduleDetail.dataParsed };
            const groups = [...state.studentsGroups.data || []];
            const weekNum = Object.keys(dataParsed)[0];
            const days = Object.keys(dataParsed[weekNum].days);
            if (groups) {
                days.forEach((day) => {
                    groups.forEach((group) => {
                        const newArr = [...dataParsed[weekNum].days[day].subjectsByGroups[group.id_group]];
                        const existingClassTimeIds = newArr.map((item) => item.class_time_id);

                        [...new Array(6)].forEach((_, index) => {
                            const classTimeId = index + 1;

                            if (!existingClassTimeIds.includes(classTimeId)) {
                                // @ts-ignore
                                newArr.splice(index, 0, { class_time_id: classTimeId });
                            }
                        });
                        dataParsed[weekNum].days[day].subjectsByGroups[group.id_group] = newArr.sort((a, b) => a.class_time_id - b.class_time_id);
                    });
                });
            }
            state.subjectsScheduleDetail.dataParsed = dataParsed;
            state.subjectsScheduleDetail.dataToWork = dataParsed;
        },
        setFilter: (state, action: PayloadAction<['shifts' | 'eduLangs' | 'courses' | 'weekNums', number[]]>) => {
            const [filterName, filterContent] = action.payload;
            state.filters[filterName] = filterContent.length ? filterContent : null;
        },
        reorderSubjectsInDay: (state, action: PayloadAction<[SubjectsScheduleDetailWeekDayDetail, string]>) => {
            const [day, week] = action.payload;
            if (state.subjectsScheduleDetail.dataToWork) {
                state.subjectsScheduleDetail.dataToWork[week].days[day.dayNum] = day;
            }
        },
        deleteSubjectFromData: (state, action: PayloadAction<SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail>) => {
            const {
                group_id, subject_id, educational_activity_type_id, type, week_num, day_num, class_time_id, classroom_id,
            } = action.payload;

            if (state.subjectsScheduleDetail.dataToWork) {
                if (type === 'subject') {
                    // @ts-ignore
                    state.subjectsScheduleDetail.dataToWork[`${week_num}`].days[`${day_num}`].subjectsByGroups[`${group_id}`] = [...state.subjectsScheduleDetail.dataToWork[`${week_num}`].days[`${day_num}`].subjectsByGroups[`${group_id}`].filter((subject) => (!(subject.subject_id === subject_id && subject.class_time_id === class_time_id && subject.classroom_id === classroom_id))), { class_time_id }].sort((a, b) => a.class_time_id - b.class_time_id);
                } else {
                    // @ts-ignore
                    state.subjectsScheduleDetail.dataToWork[`${week_num}`].days[`${day_num}`].subjectsByGroups[`${group_id}`] = [...state.subjectsScheduleDetail.dataToWork[`${week_num}`].days[`${day_num}`].subjectsByGroups[`${group_id}`].filter((subject) => (!(subject.educational_activity_type_id === educational_activity_type_id && subject.class_time_id === class_time_id && subject.classroom_id === classroom_id))), { class_time_id }].sort((a, b) => a.class_time_id - b.class_time_id);
                }
            }
        },
        addSubjectToData: (state, action: PayloadAction<[SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail, boolean]>) => {
            const [
                {
                    group_id, week_num, day_num, class_time_id,
                },
                isAddSubGroup,
            ] = action.payload;

            if (state.subjectsScheduleDetail.dataToWork) {
                const filteredData = state.subjectsScheduleDetail
                    .dataToWork[`${week_num}`]
                    .days[`${day_num}`]
                    .subjectsByGroups[`${group_id}`].filter((subject) => subject.class_time_id !== class_time_id);

                if (isAddSubGroup) {
                    state.subjectsScheduleDetail
                        .dataToWork[`${week_num}`]
                        .days[`${day_num}`]
                        .subjectsByGroups[`${group_id}`] = [...state.subjectsScheduleDetail
                            .dataToWork[`${week_num}`]
                            .days[`${day_num}`]
                            .subjectsByGroups[`${group_id}`], action.payload[0]].sort((a, b) => a.class_time_id - b.class_time_id);
                } else {
                    state.subjectsScheduleDetail
                        .dataToWork[`${week_num}`]
                        .days[`${day_num}`]
                        .subjectsByGroups[`${group_id}`] = [...filteredData || [], action.payload[0]]
                            .sort((a, b) => a.class_time_id - b.class_time_id);
                }
            }
        },
        updateSubjectInData: (state, action: PayloadAction<
            [number, string | number, SubjectsScheduleDetailWeekDayDetailSubjectsByGroupsDetail, boolean, boolean]
        >) => {
            const [
                prevClassTimeId,
                prevTempIndex,
                {
                    group_id, week_num, day_num, subject_schedule_id, class_time_id,
                },
                isEditingSubgroup,
                isDouble,
            ] = action.payload;

            if (state.subjectsScheduleDetail.dataToWork) {
                let filteredSubjects = [...state.subjectsScheduleDetail
                    .dataToWork[`${week_num}`]
                    .days[`${day_num}`]
                    .subjectsByGroups[`${group_id}`]];

                if (prevClassTimeId !== class_time_id) {
                    if (!isEditingSubgroup) {
                        if (isDouble) {
                            // @ts-ignore
                            filteredSubjects = [...filteredSubjects.filter((subject) => subject.class_time_id !== class_time_id)].sort((a, b) => a.class_time_id - b.class_time_id);
                        } else {
                            // @ts-ignore
                            filteredSubjects = [...filteredSubjects.filter((subject) => subject.class_time_id !== class_time_id), { class_time_id: prevClassTimeId }].sort((a, b) => a.class_time_id - b.class_time_id);
                        }
                    } else if (isDouble) {
                        // @ts-ignore
                        filteredSubjects = [...filteredSubjects].sort((a, b) => a.class_time_id - b.class_time_id);
                    } else {
                        // @ts-ignore
                        filteredSubjects = [...filteredSubjects, { class_time_id: prevClassTimeId }].sort((a, b) => a.class_time_id - b.class_time_id);
                    }
                }

                if (subject_schedule_id) {
                    state.subjectsScheduleDetail
                        .dataToWork[`${week_num}`]
                        .days[`${day_num}`]
                        .subjectsByGroups[`${group_id}`] = [...filteredSubjects.filter((item) => (
                            item.subject_schedule_id !== subject_schedule_id
                        )) || [], action.payload[2]].sort((a, b) => a.class_time_id - b.class_time_id);
                } else {
                    state.subjectsScheduleDetail
                        .dataToWork[`${week_num}`]
                        .days[`${day_num}`]
                        .subjectsByGroups[`${group_id}`] = [...filteredSubjects.filter((item) => (
                            item.tempIndex !== prevTempIndex
                        )) || [], action.payload[2]].sort((a, b) => a.class_time_id - b.class_time_id);
                }
            }
        },
        clearData: (state) => {
            state.subjectsScheduleDetail.dataToWork = state.subjectsScheduleDetail.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubjectsScheduleDetailStudentsGroups.pending, (state) => {
                state.studentsGroups.error = undefined;
                state.studentsGroups.isLoading = true;
            })
            .addCase(fetchSubjectsScheduleDetailStudentsGroups.fulfilled, (
                state,
                action: PayloadAction<SubjectsScheduleDetailStudentsGroupsData[]>,
            ) => {
                state.studentsGroups.isLoading = false;
                state.studentsGroups.data = action.payload;
            })
            .addCase(fetchSubjectsScheduleDetailStudentsGroups.rejected, (state, action) => {
                state.studentsGroups.isLoading = false;
                state.studentsGroups.error = action.payload;
            })
            .addCase(fetchSubjectsScheduleDetail.pending, (state) => {
                state.subjectsScheduleDetail.error = undefined;
                state.subjectsScheduleDetail.isLoading = true;
            })
            .addCase(fetchSubjectsScheduleDetail.fulfilled, (
                state,
                action: PayloadAction<SubjectsScheduleDetailData>,
            ) => {
                state.subjectsScheduleDetail.isLoading = false;
                state.subjectsScheduleDetail.data = action.payload;
                state.subjectsScheduleDetail.dataParsed = { ...action.payload };

                const groups = [...state.studentsGroups.data || []];
                const dataParsed = { ...state.subjectsScheduleDetail.dataParsed };
                const weekNum = Object.keys(dataParsed)[0];
                const days = Object.keys(dataParsed[weekNum].days);
                if (groups) {
                    days.forEach((day) => {
                        groups.forEach((group) => {
                            if (!dataParsed[weekNum].days[day].subjectsByGroups[group.id_group]) {
                                dataParsed[weekNum].days[day].subjectsByGroups[group.id_group] = [];
                            }
                        });
                    });
                }
                state.subjectsScheduleDetail.dataParsed = dataParsed;
            })
            .addCase(fetchSubjectsScheduleDetail.rejected, (state, action) => {
                state.subjectsScheduleDetail.isLoading = false;
                state.subjectsScheduleDetail.error = action.payload;
            })
            .addCase(fetchSubjectsScheduleClassTime.pending, (state) => {
                state.classTime.error = undefined;
                state.classTime.isLoading = true;
            })
            .addCase(fetchSubjectsScheduleClassTime.fulfilled, (
                state,
                action: PayloadAction<SubjectsScheduleDetailClassTimeData[]>,
            ) => {
                state.classTime.isLoading = false;
                state.classTime.data = action.payload;
            })
            .addCase(fetchSubjectsScheduleClassTime.rejected, (state, action) => {
                state.classTime.isLoading = false;
                state.classTime.error = action.payload;
            });
    },
});

export const { actions: subjectsScheduleDetailActions } = subjectsScheduleDetailSlice;
export const { reducer: subjectsScheduleDetailReducer } = subjectsScheduleDetailSlice;
