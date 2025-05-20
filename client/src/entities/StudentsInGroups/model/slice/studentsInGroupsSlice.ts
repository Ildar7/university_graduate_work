import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudentsType } from 'entities/Students';
import { StudentsInGroupsSchema } from '../types/studentsInGroups';
import { moveStudentsInGroups } from '../services/moveStudentsInGroups/moveStudentsInGroups';
import {
    deleteStudentsInGroups,
} from '../services/deleteStudentsInGroups/deleteStudentsInGroups';

const initialState: StudentsInGroupsSchema = {
    create: [],
    delete: undefined,
    isLoading: false,
    error: undefined,
    dataFrom: [],
    dataTo: [],
};

const studentsInGroupsSlice = createSlice({
    name: 'studentsInGroups',
    initialState,
    reducers: {
        setCreateStudents: (state, action: PayloadAction<[number, number[]]>) => {
            const [groupId, studentsIds] = action.payload;
            const filteredAction = state.create?.filter((actionInfo) => actionInfo.groupId === groupId)[0];

            if (filteredAction) {
                state.create = state.create?.map((group) => {
                    if (group.groupId === groupId) {
                        return {
                            ...group,
                            students: Array.from(new Set([...group.students, ...studentsIds])),
                        };
                    }

                    return group;
                });
            } else {
                state.create?.push({
                    groupId,
                    students: studentsIds,
                });
            }
        },
        setDeleteStudents: (state, action: PayloadAction<[number, number[]]>) => {
            const [groupId, studentsIds] = action.payload;

            state.delete = {
                groupId,
                students: studentsIds,
            };
        },
        changeCreateStudents: (state, action: PayloadAction<[number, number]>) => {
            const [groupId, studentId] = action.payload;

            state.create = state.create?.map((actionInfo) => {
                if (actionInfo.groupId !== groupId) return actionInfo;

                return {
                    ...actionInfo,
                    students: actionInfo.students.filter((student) => student !== studentId),
                };
            });
        },
        changeDeleteStudents: (state, action: PayloadAction<number>) => {
            state.delete = {
                ...state.delete,
                students: state.delete?.students.filter((student) => student !== action.payload) || [],
            };
        },
        setDataFrom: (state, action: PayloadAction<StudentsType[]>) => {
            state.dataFrom = action.payload;
        },
        setDataTo: (state, action: PayloadAction<StudentsType[]>) => {
            state.dataTo = action.payload;
        },
        clearStudentsIds: (state) => {
            state.create = initialState.create;
            state.delete = initialState.delete;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(moveStudentsInGroups.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(moveStudentsInGroups.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(moveStudentsInGroups.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteStudentsInGroups.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(deleteStudentsInGroups.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(deleteStudentsInGroups.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: studentsInGroupsActions } = studentsInGroupsSlice;
export const { reducer: studentsInGroupsReducer } = studentsInGroupsSlice;
