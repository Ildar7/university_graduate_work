import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    TrainingScheduleDetailSchedule,
    TrainingScheduleDetailSchema,
    TrainingScheduleDetailType,
} from '../types/trainingScheduleDetail';
import {
    fetchTrainingScheduleDetail,
} from '../services/fetchTrainingScheduleDetail/fetchTrainingScheduleDetail';

const initialState: TrainingScheduleDetailSchema = {
    data: undefined,
    dataParsed: [],
    isLoading: true,
    error: undefined,
};

const trainingScheduleDetailSlice = createSlice({
    name: 'trainingScheduleDetail',
    initialState,
    reducers: {
        parseData: (state) => {
            let count = 0;
            const groupsCount = state.data!.length;
            const dataToChange = [];

            while (count < groupsCount) {
                const dataToWork: TrainingScheduleDetailSchedule[] = [];
                const thisTrainingSchedule = state.data![count].trainingSchedule;

                for (let i = 0; i < thisTrainingSchedule.length; i++) {
                    for (let j = thisTrainingSchedule[i].start_week - 1; j <= thisTrainingSchedule[i].end_week - 1; j++) {
                        if (thisTrainingSchedule[i].training_course === 1) {
                            dataToWork[j] = {
                                ...thisTrainingSchedule[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: thisTrainingSchedule[i].additional_information
                                    ? {
                                        ...thisTrainingSchedule[i].additional_information!,
                                        start: thisTrainingSchedule[i].start_week,
                                        end: thisTrainingSchedule[i].end_week,
                                    }
                                    : null,
                            };
                        } else if (thisTrainingSchedule[i].training_course === 2) {
                            dataToWork[j + 52] = {
                                ...thisTrainingSchedule[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: thisTrainingSchedule[i].additional_information
                                    ? {
                                        ...thisTrainingSchedule[i].additional_information!,
                                        start: thisTrainingSchedule[i].start_week,
                                        end: thisTrainingSchedule[i].end_week,
                                    }
                                    : null,
                            };
                        } else if (thisTrainingSchedule[i].training_course === 3) {
                            dataToWork[j + 104] = {
                                ...thisTrainingSchedule[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: thisTrainingSchedule[i].additional_information
                                    ? {
                                        ...thisTrainingSchedule[i].additional_information!,
                                        start: thisTrainingSchedule[i].start_week,
                                        end: thisTrainingSchedule[i].end_week,
                                    }
                                    : null,
                            };
                        } else {
                            dataToWork[j + 156] = {
                                ...thisTrainingSchedule[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: thisTrainingSchedule[i].additional_information
                                    ? {
                                        ...thisTrainingSchedule[i].additional_information!,
                                        start: thisTrainingSchedule[i].start_week,
                                        end: thisTrainingSchedule[i].end_week,
                                    }
                                    : null,
                            };
                        }
                    }
                }

                dataToChange.push({
                    groups: [...state!.data![count].groups],
                    trainingSchedule: dataToWork,
                });

                count++;
            }

            state.dataParsed = dataToChange;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrainingScheduleDetail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTrainingScheduleDetail.fulfilled, (state, action: PayloadAction<TrainingScheduleDetailType[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTrainingScheduleDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: trainingScheduleDetailActions } = trainingScheduleDetailSlice;
export const { reducer: trainingScheduleDetailReducer } = trainingScheduleDetailSlice;
