import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddStudentGroupsAssistantSchema } from 'features/StudentGroups/Assistant/AddStudentGroups';
import {
    generateGroups,
} from '../services/generateGroups/generateGroups';
import {
    AddStudentGroupsGeneratedGroupsData,
} from '../types/addStudentGroupsGeneratedGroups';
import { createGroupsBatch } from '../services/createGroupsBatch/createGroupsBatch';
import {
    fetchAddStudentGroupsSpecialties,
} from '../services/fetchAddStudentGroupsSpecialties/fetchAddStudentGroupsSpecialties';
import {
    AddStudentGroupsSpecialtiesData,
} from '../types/addStudentGroupsSpecialties';
import {
    AddStudentGroupsBatchData,
} from '../types/addStudentGroupsBatch';

const initialState: AddStudentGroupsAssistantSchema = {
    specialties: {
        data: undefined,
        isLoading: true,
        error: undefined,
    },
    codes: {
        data: [],
        canSend: false,
    },
    generatedGroups: {
        data: [],
        isLoading: true,
        error: undefined,
    },
    batchInfo: {
        data: undefined,
        isLoading: true,
        error: undefined,
    },
};

const addStudentGroupsSlice = createSlice({
    name: 'addStudentGroups',
    initialState,
    reducers: {
        initCodes: (state, action: PayloadAction<AddStudentGroupsSpecialtiesData[]>) => {
            state.codes.data = action.payload.map((specialty) => ({
                [specialty.speciality_id]: null,
            }));
        },
        changeCode: (state, action: PayloadAction<[string, string]>) => {
            const [id, value] = action.payload;
            state.codes.data = state.codes.data.map((code) => {
                if (code[Number(id)] !== undefined) {
                    return { ...code, [id]: value || null };
                }
                return code;
            });
        },
        changeCanSendCodes: (state, action: PayloadAction<boolean>) => {
            state.codes.canSend = action.payload;
        },
        changeCheckedGroup: (state, action: PayloadAction<[number, boolean]>) => {
            const [tempIndex, checked] = action.payload;
            state.generatedGroups.data = state.generatedGroups.data?.map((group) => {
                if (group.tempIndex === tempIndex) {
                    return {
                        ...group,
                        checked,
                    };
                }

                return group;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddStudentGroupsSpecialties.pending, (state) => {
                state.specialties.data = undefined;
                state.specialties.isLoading = true;
            })
            .addCase(fetchAddStudentGroupsSpecialties.fulfilled, (state, action: PayloadAction<AddStudentGroupsSpecialtiesData[]>) => {
                state.specialties.isLoading = false;
                state.specialties.data = action.payload;
            })
            .addCase(fetchAddStudentGroupsSpecialties.rejected, (state, action) => {
                state.specialties.isLoading = false;
                state.specialties.error = action.payload;
            })
            .addCase(generateGroups.pending, (state) => {
                state.generatedGroups.data = undefined;
                state.generatedGroups.isLoading = true;
            })
            .addCase(generateGroups.fulfilled, (state, action: PayloadAction<AddStudentGroupsGeneratedGroupsData[]>) => {
                state.generatedGroups.isLoading = false;
                state.generatedGroups.data = action.payload.map((item, index) => ({
                    ...item,
                    tempIndex: index + 1,
                    checked: true,
                }));
            })
            .addCase(generateGroups.rejected, (state, action) => {
                state.generatedGroups.isLoading = false;
                state.generatedGroups.error = action.payload;
            })
            .addCase(createGroupsBatch.pending, (state) => {
                state.batchInfo.data = undefined;
                state.batchInfo.isLoading = true;
            })
            .addCase(createGroupsBatch.fulfilled, (state, action: PayloadAction<AddStudentGroupsBatchData>) => {
                state.batchInfo.isLoading = false;
                state.batchInfo.data = action.payload;
            })
            .addCase(createGroupsBatch.rejected, (state, action) => {
                state.batchInfo.isLoading = false;
                state.batchInfo.error = action.payload;
            });
    },
});

export const { actions: addStudentGroupsActions } = addStudentGroupsSlice;
export const { reducer: addStudentGroupsReducer } = addStudentGroupsSlice;
