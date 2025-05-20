import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    SubjectsScheduleWorkloadTeachersData,
} from '../types/subjectsScheduleWorkloadTeachers';
import {
    SubjectsScheduleWorkloadClassRoomsData,
} from '../types/subjectsScheduleWorkloadClassRooms';
import { SubjectsScheduleWorkloadSchema } from '../types/subjectsScheduleWorkloadSchema';
import {
    fetchSubjectsScheduleWorkloadTeachers,
} from '../services/fetchSubjectsScheduleWorkloadTeachers/fetchSubjectsScheduleWorkloadTeachers';
import {
    fetchSubjectsScheduleWorkloadClassRooms,
} from '../services/fetchSubjectsScheduleWorkloadClassRooms/fetchSubjectsScheduleWorkloadClassRooms';

const initialState: SubjectsScheduleWorkloadSchema = {
    teachers: {
        data: undefined,
        dataToWork: undefined,
        isLoading: true,
        error: undefined,
    },
    classRooms: {
        data: undefined,
        dataToWork: undefined,
        isLoading: true,
        error: undefined,
    },
};

const subjectsScheduleWorkloadSlice = createSlice({
    name: 'subjectsScheduleWorkload',
    initialState,
    reducers: {
        addTeacherWorkloadId: (state, action: PayloadAction<[number, number, number]>) => {
            const [dayNum, classTime, teacherId] = action.payload;

            if (state.teachers.dataToWork) {
                state.teachers.dataToWork.workload = state.teachers.dataToWork.workload.map((day) => {
                    if (day.dayNum === dayNum) {
                        return {
                            ...day,
                            class_time: day.class_time.map((time) => {
                                if (time.class_time_id === classTime) {
                                    return {
                                        ...time,
                                        teachers_ids: [...time.teachers_ids, teacherId],
                                    };
                                }

                                return time;
                            }),
                        };
                    }

                    return day;
                });
            }
        },
        deleteTeacherWorkloadId: (state, action: PayloadAction<[number, number, number]>) => {
            const [dayNum, classTime, teacherId] = action.payload;

            if (state.teachers.dataToWork) {
                state.teachers.dataToWork.workload = state.teachers.dataToWork.workload.map((day) => {
                    if (day.dayNum === dayNum) {
                        return {
                            ...day,
                            class_time: day.class_time.map((time) => {
                                if (time.class_time_id === classTime) {
                                    return {
                                        ...time,
                                        teachers_ids: time.teachers_ids.filter((id) => id !== teacherId),
                                    };
                                }

                                return time;
                            }),
                        };
                    }

                    return day;
                });
            }
        },

        addClassRoomWorkloadId: (state, action: PayloadAction<[number, number, number]>) => {
            const [dayNum, classTime, classRoomId] = action.payload;

            if (state.classRooms.dataToWork) {
                state.classRooms.dataToWork.workload = state.classRooms.dataToWork.workload.map((day) => {
                    if (day.dayNum === dayNum) {
                        return {
                            ...day,
                            class_time: day.class_time.map((time) => {
                                if (time.class_time_id === classTime) {
                                    return {
                                        ...time,
                                        classroom_ids: [...time.classroom_ids, classRoomId],
                                    };
                                }

                                return time;
                            }),
                        };
                    }

                    return day;
                });
            }
        },
        deleteClassRoomWorkloadId: (state, action: PayloadAction<[number, number, number]>) => {
            const [dayNum, classTime, classRoomId] = action.payload;

            if (state.classRooms.dataToWork) {
                state.classRooms.dataToWork.workload = state.classRooms.dataToWork.workload.map((day) => {
                    if (day.dayNum === dayNum) {
                        return {
                            ...day,
                            class_time: day.class_time.map((time) => {
                                if (time.class_time_id === classTime) {
                                    return {
                                        ...time,
                                        classroom_ids: time.classroom_ids.filter((id) => id !== classRoomId),
                                    };
                                }

                                return time;
                            }),
                        };
                    }

                    return day;
                });
            }
        },

        clearData: (state) => {
            state.teachers.dataToWork = state.teachers.data;
            state.classRooms.dataToWork = state.classRooms.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubjectsScheduleWorkloadTeachers.pending, (state) => {
                state.teachers.error = undefined;
                state.teachers.isLoading = true;
            })
            .addCase(fetchSubjectsScheduleWorkloadTeachers.fulfilled, (state, action: PayloadAction<SubjectsScheduleWorkloadTeachersData>) => {
                state.teachers.isLoading = false;
                state.teachers.data = action.payload;
                state.teachers.dataToWork = action.payload;
            })
            .addCase(fetchSubjectsScheduleWorkloadTeachers.rejected, (state, action) => {
                state.teachers.isLoading = false;
                state.teachers.error = action.payload;
            })
            .addCase(fetchSubjectsScheduleWorkloadClassRooms.pending, (state) => {
                state.classRooms.error = undefined;
                state.classRooms.isLoading = true;
            })
            .addCase(fetchSubjectsScheduleWorkloadClassRooms.fulfilled, (state, action: PayloadAction<SubjectsScheduleWorkloadClassRoomsData>) => {
                state.classRooms.isLoading = false;
                state.classRooms.data = action.payload;
                state.classRooms.dataToWork = action.payload;
            })
            .addCase(fetchSubjectsScheduleWorkloadClassRooms.rejected, (state, action) => {
                state.classRooms.isLoading = false;
                state.classRooms.error = action.payload;
            });
    },
});

export const { actions: subjectsScheduleWorkloadActions } = subjectsScheduleWorkloadSlice;
export const { reducer: subjectsScheduleWorkloadReducer } = subjectsScheduleWorkloadSlice;
