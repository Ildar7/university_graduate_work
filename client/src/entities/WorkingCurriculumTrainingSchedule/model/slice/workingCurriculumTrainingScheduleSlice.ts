import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkEvenNumber } from 'shared/lib/helpers/checkEvenNumber/checkEvenNumber';
import {
    editWorkingCurriculumTrainingSchedule,
} from '../services/editWorkingCurriculumTrainingSchedule/editWorkingCurriculumTrainingSchedule';
import { fetchWorkingCurriculumSymbols } from '../services/fetchWorkingCurriculumSymbols/fetchWorkingCurriculumSymbols';
import {
    WorkingCurriculumTrainingScheduleSchema,
    WorkingCurriculumTrainingScheduleSelectedCells,
} from '../types/workingCurriculumTrainingScheduleSchema';
import {
    fetchWorkingCurriculumTrainingSchedule,
} from '../services/fetchWorkingCurriculumTrainingSchedule/fetchWorkingCurriculumTrainingSchedule';
import {
    WorkingCurriculumTrainingSchedule,
    WorkingCurriculumTrainingScheduleData,
    WorkingCurriculumTrainingScheduleSymbol,
} from '../types/workingCurriculumTrainingSchedule';
import {
    createWorkingCurriculumTrainingSchedule,
} from '../services/createWorkingCurriculumTrainingSchedule/createWorkingCurriculumTrainingSchedule';
import { WorkingCurriculumTrainingScheduleSummary } from '../types/workingCurriculumSummary';
import {
    fetchWorkingCurriculumProfessionalModules,
} from '../services/fetchWorkingCurriculumProfessionalModules/fetchWorkingCurriculumProfessionalModules';
import { WorkingCurriculumProfessionalModules } from '../types/workingCurriculumProfessionalModules';

const initialState: WorkingCurriculumTrainingScheduleSchema = {
    data: undefined,
    professionalModules: [],
    editData: {
        data: [],
        summary: undefined,
    },
    selectedCells: undefined,
    editActions: {
        actions: {
            delete: [],
            create: [],
            update: [],
            deleteTrainingCourses: [],
        },
        isLoading: false,
        errors: undefined,
        updated: false,
    },
    createAction: {
        data: [],
        isLoading: false,
        errors: undefined,
        created: false,
    },
    symbols: undefined,
    isLoading: true,
    error: undefined,
    readOnly: true,
    redirectToMainPage: false,
};

const workingCurriculumTrainingScheduleSlice = createSlice({
    name: 'workingCurriculumTrainingSchedule',
    initialState,
    reducers: {
        initEditData: (state) => {
            const cells = [];

            for (let i = 1; i <= 52; i++) {
                cells.push(
                    {
                        training_course: 1,
                        start_week: i,
                        end_week: i,
                        working_curriculum_symbol_id: 1,
                        working_curriculum_symbol: {
                            working_curriculum_symbol_id: 1,
                            symbol_code: 'THEORY',
                            name: 'Теоретическое обучение',
                            displayed_symbol: ' ',
                            symbol_hex_color: 'ffffff',
                        },
                        additional_information: null,
                    },
                );
            }
            state.editData.data = cells as WorkingCurriculumTrainingScheduleData[];
        },
        initEditDataSummary: (state) => {
            const summaryData: WorkingCurriculumTrainingScheduleSummary = {
                bySymbols: {
                    THEORY: {
                        symbolId: 1,
                        symbolCode: 'THEORY',
                        symbolName: 'Теоретическое обучение',
                        courses: {
                            1: {
                                weeks: 52,
                                credits: 78,
                                hours: 1872,
                            },
                        },
                        total: {
                            weeks: 52,
                            credits: 78,
                            hours: 1872,
                        },
                    },
                },
                coursesCount: 1,
            };
            state.symbols!.forEach((symbol) => {
                if (symbol.working_curriculum_symbol_id !== 1) {
                    summaryData.bySymbols[symbol.symbol_code] = {
                        symbolId: symbol.working_curriculum_symbol_id,
                        symbolCode: symbol.symbol_code,
                        symbolName: symbol.name,
                        courses: {
                            1: {
                                weeks: 0,
                                credits: 0,
                                hours: 0,
                            },
                        },
                        total: {
                            weeks: 0,
                            credits: 0,
                            hours: 0,
                        },
                    };
                }
            });
            state.editData.summary = summaryData;
        },
        changeSelectedCells: (state, action: PayloadAction<WorkingCurriculumTrainingScheduleSelectedCells>) => {
            state.selectedCells = action.payload;
        },
        deleteSelectedCells: (state) => {
            state.selectedCells = initialState.selectedCells;
        },
        changeSelectedSymbolInData: (state, action: PayloadAction<[WorkingCurriculumTrainingScheduleData, number]>) => {
            state.editData.data = [...state.editData.data].map((cell) => (
                cell.training_course === action.payload[0].training_course && cell.start_week === action.payload[0].start_week
                && cell.end_week === action.payload[0].end_week
                    ? {
                        ...cell,
                        working_curriculum_symbol_id: action.payload[0].working_curriculum_symbol_id,
                        working_curriculum_symbol: action.payload[0].working_curriculum_symbol,
                        additional_information: action.payload[0].additional_information,
                    }
                    : {
                        ...cell,
                    }
            ));

            const symbolNames = Object.keys(state.editData!.summary!.bySymbols!);
            const foundSymbolsCountInCourse = {} as any;
            symbolNames.forEach((symbolName) => {
                foundSymbolsCountInCourse[symbolName] = 0;
            });
            state.editData.data.forEach((cell) => {
                if (cell.training_course === action.payload[0].training_course) {
                    foundSymbolsCountInCourse[cell.working_curriculum_symbol.symbol_code] += 1;
                }
            });

            const summaryData = { ...state.editData.summary! };
            symbolNames.forEach((symbolName) => {
                const courseSymbolInfo = summaryData.bySymbols[symbolName].courses[action.payload[0].training_course];
                courseSymbolInfo.weeks = foundSymbolsCountInCourse[symbolName];
                courseSymbolInfo.hours = foundSymbolsCountInCourse[symbolName] * 36;
                courseSymbolInfo.credits = Math.floor((foundSymbolsCountInCourse[symbolName] * 36) / action.payload[1])
                    + checkEvenNumber(foundSymbolsCountInCourse[symbolName]);
            });

            state.editData.summary = summaryData;
        },
        calculateTotalFieldsInSummaryData: (state) => {
            const symbolNames = Object.keys(state.editData!.summary!.bySymbols!);
            const foundSymbolsCountTotal = {} as any;
            const summaryData = { ...state.editData.summary! };

            symbolNames.forEach((symbolName) => {
                foundSymbolsCountTotal[symbolName] = {
                    weeks: 0,
                    hours: 0,
                    credits: 0,
                };
            });

            symbolNames.forEach((symbolName) => {
                for (let i = 1; i <= state.editData.summary!.coursesCount; i++) {
                    const courseInfo = state.editData
                        .summary!.bySymbols[symbolName].courses[i];

                    foundSymbolsCountTotal[symbolName].weeks += courseInfo.weeks;
                    foundSymbolsCountTotal[symbolName].hours += courseInfo.hours;
                    foundSymbolsCountTotal[symbolName].credits += courseInfo.credits;
                }

                summaryData.bySymbols[symbolName].total = foundSymbolsCountTotal[symbolName];
            });

            state.editData.summary = summaryData;
        },
        deleteCourseFromTable: (state, action: PayloadAction<[number, number, number]>) => {
            if (state.data) {
                const filteredCells = [...state.editData.data].slice(action.payload[1], action.payload[2])
                    .filter((cell) => cell.working_curriculum_training_schedule_id);

                if (filteredCells.length) {
                    const deleteCourses: number[] = [];
                    filteredCells.forEach((cell) => {
                        deleteCourses.push(cell.training_course);
                    });
                    const uniqueDeleteCourses = Array.from(new Set(deleteCourses));

                    state.editActions.actions.deleteTrainingCourses = [
                        ...state.editActions.actions.deleteTrainingCourses!,
                        ...uniqueDeleteCourses,
                    ];
                }

                state.editActions.actions.update = state.editActions.actions
                    .update?.filter((cell) => cell.fields.training_course !== action.payload[0]);
            }
            state.editData.data.splice(action.payload[1], 52);

            const filteredSummaryData = {
                ...state.editData.summary!,
                coursesCount: state.editData.summary!.coursesCount - 1,
            };
            const symbolsNames = Object.keys(state.editData.summary!.bySymbols);
            symbolsNames.forEach((name) => {
                // @ts-ignore
                const courseInfo = filteredSummaryData.bySymbols[name].courses[action.payload[0]];
                filteredSummaryData.bySymbols[name].total = {
                    weeks: filteredSummaryData.bySymbols[name].total.weeks - courseInfo.weeks,
                    credits: filteredSummaryData.bySymbols[name].total.credits - courseInfo.credits,
                    hours: filteredSummaryData.bySymbols[name].total.hours - courseInfo.hours,
                };

                // @ts-ignore
                delete filteredSummaryData.bySymbols[name].courses[action.payload[0]];
            });
            state.editData.summary = filteredSummaryData;
            state.editActions.actions.create = state.editActions.actions.create?.filter((createAction) => (
                createAction.training_course !== action.payload[0]
            ));
        },
        cancelEditing: (state) => {
            if (state.data) {
                const dataToWork = [];
                for (let i = 0; i < state.data.data.length; i++) {
                    for (let j = state.data.data[i].start_week - 1; j <= state.data.data[i].end_week - 1; j++) {
                        if (state.data.data[i].training_course === 1) {
                            dataToWork[j] = {
                                ...state.data.data[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: state.data.data[i].additional_information
                                    ? {
                                        ...state.data.data[i].additional_information!,
                                        start: state.data.data[i].start_week,
                                        end: state.data.data[i].end_week,
                                    }
                                    : null,
                            };
                        } else if (state.data.data[i].training_course === 2) {
                            dataToWork[j + 52] = {
                                ...state.data.data[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: state.data.data[i].additional_information
                                    ? {
                                        ...state.data.data[i].additional_information!,
                                        start: state.data.data[i].start_week,
                                        end: state.data.data[i].end_week,
                                    }
                                    : null,
                            };
                        } else if (state.data.data[i].training_course === 3) {
                            dataToWork[j + 104] = {
                                ...state.data.data[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: state.data.data[i].additional_information
                                    ? {
                                        ...state.data.data[i].additional_information!,
                                        start: state.data.data[i].start_week,
                                        end: state.data.data[i].end_week,
                                    }
                                    : null,
                            };
                        } else {
                            dataToWork[j + 156] = {
                                ...state.data.data[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: state.data.data[i].additional_information
                                    ? {
                                        ...state.data.data[i].additional_information!,
                                        start: state.data.data[i].start_week,
                                        end: state.data.data[i].end_week,
                                    }
                                    : null,
                            };
                        }
                    }
                }

                state.editData = {
                    data: dataToWork,
                    summary: state.data.summary,
                };
            } else {
                const cells = [];

                for (let i = 1; i <= 52; i++) {
                    cells.push(
                        {
                            training_course: 1,
                            start_week: i,
                            end_week: i,
                            working_curriculum_symbol_id: 1,
                            working_curriculum_symbol: {
                                working_curriculum_symbol_id: 1,
                                symbol_code: 'THEORY',
                                name: 'Теоретическое обучение',
                                displayed_symbol: ' ',
                                symbol_hex_color: 'ffffff',
                            },
                        },
                    );
                }
                state.editData.data = cells as WorkingCurriculumTrainingScheduleData[];

                const summaryData: WorkingCurriculumTrainingScheduleSummary = {
                    bySymbols: {
                        THEORY: {
                            symbolId: 1,
                            symbolCode: 'THEORY',
                            symbolName: 'Теоретическое обучение',
                            courses: {
                                1: {
                                    weeks: 52,
                                    credits: 78,
                                    hours: 1872,
                                },
                            },
                            total: {
                                weeks: 52,
                                credits: 78,
                                hours: 1872,
                            },
                        },
                    },
                    coursesCount: 1,
                };
                state.symbols!.forEach((symbol) => {
                    if (symbol.working_curriculum_symbol_id !== 1) {
                        summaryData.bySymbols[symbol.symbol_code] = {
                            symbolId: symbol.working_curriculum_symbol_id,
                            symbolCode: symbol.symbol_code,
                            symbolName: symbol.name,
                            courses: {
                                1: {
                                    weeks: 0,
                                    credits: 0,
                                    hours: 0,
                                },
                            },
                            total: {
                                weeks: 0,
                                credits: 0,
                                hours: 0,
                            },
                        };
                    }
                });
                state.editData.summary = summaryData;
            }

            state.selectedCells = initialState.selectedCells;
            state.editActions = initialState.editActions;
            state.createAction = initialState.createAction;
        },
        addNewCourse: (state) => {
            const cells = [];

            const createCourse = (state.editData.data.length / 52) + 1;
            for (let i = 1; i <= 52; i++) {
                cells.push(
                    {
                        training_course: createCourse,
                        start_week: i,
                        end_week: i,
                        working_curriculum_symbol_id: 1,
                        working_curriculum_symbol: {
                            working_curriculum_symbol_id: 1,
                            symbol_code: 'THEORY',
                            name: 'Теоретическое обучение',
                            displayed_symbol: ' ',
                            symbol_hex_color: 'ffffff',
                        },
                    },
                );
            }
            state.editData.data = [...state.editData.data, ...cells as WorkingCurriculumTrainingScheduleData[]];

            const summaryData: WorkingCurriculumTrainingScheduleSummary = {
                bySymbols: {
                    THEORY: {
                        symbolId: 1,
                        symbolCode: 'THEORY',
                        symbolName: 'Теоретическое обучение',
                        courses: {
                            ...state.editData.summary?.bySymbols.THEORY.courses,
                            [(state.editData.data.length / 52)]: {
                                weeks: 52,
                                credits: 78,
                                hours: 1872,
                            },
                        },
                        total: {
                            weeks: (state.editData.summary?.bySymbols.THEORY.total.weeks || 0) + 52,
                            credits: (state.editData.summary?.bySymbols.THEORY.total.credits || 0) + 78,
                            hours: (state.editData.summary?.bySymbols.THEORY.total.hours || 0) + 1872,
                        },
                    },
                },
                coursesCount: (state.editData.data.length / 52),
            };
            state.symbols!.forEach((symbol) => {
                if (symbol.working_curriculum_symbol_id !== 1) {
                    summaryData.bySymbols[symbol.symbol_code] = {
                        symbolId: symbol.working_curriculum_symbol_id,
                        symbolCode: symbol.symbol_code,
                        symbolName: symbol.name,
                        courses: {
                            ...state.editData.summary?.bySymbols[symbol.symbol_code].courses,
                            [(state.editData.data.length / 52)]: {
                                weeks: 0,
                                credits: 0,
                                hours: 0,
                            },
                        },
                        total: {
                            weeks: state.editData.summary!.bySymbols[symbol.symbol_code].total.weeks,
                            credits: state.editData.summary!.bySymbols[symbol.symbol_code].total.credits,
                            hours: state.editData.summary!.bySymbols[symbol.symbol_code].total.hours,
                        },
                    };
                }
            });
            state.editData.summary = summaryData;
            state.editActions.actions.create = [
                ...state.editActions.actions.create || [],
                {
                    training_course: createCourse,
                    start_week: 1,
                    end_week: 52,
                    working_curriculum_symbol_id: 1,
                    additional_information: null,
                },
            ];
            if (state.editActions.actions.deleteTrainingCourses?.includes(createCourse)) {
                state.editActions.actions.deleteTrainingCourses = state.editActions.actions.deleteTrainingCourses?.filter((id) => id !== createCourse);
                const filteredCourse = state.data?.data.filter((item) => item.training_course === createCourse);
                if (filteredCourse && filteredCourse.length) {
                    filteredCourse.forEach((item) => {
                        if (item.working_curriculum_training_schedule_id) {
                            state.editActions.actions.delete?.push(item.working_curriculum_training_schedule_id);
                        }
                    });
                }
            }
        },

        // creating action
        createNewTrainingSchedule: (state) => {
            const cells = [
                ...state.editData.data,
                {
                    training_course: -1,
                    working_curriculum_symbol_id: -1,
                    start_week: -1,
                    end_week: -1,
                    additional_information: null,
                },
            ];
            let cellsToWork = [];
            const cellsToSend = [];

            for (let i = 0; i < cells.length - 1; i++) {
                if (cells[i].working_curriculum_symbol_id === cells[i + 1].working_curriculum_symbol_id
                    && cells[i].training_course === cells[i + 1].training_course && i !== cells.length - 2) {
                    cellsToWork.push(cells[i]);
                } else {
                    cellsToWork.push(cells[i]);
                    cellsToSend.push({
                        working_curriculum_symbol_id: cellsToWork[0].working_curriculum_symbol_id,
                        training_course: cellsToWork[0].training_course,
                        start_week: cellsToWork[0].start_week,
                        end_week: cellsToWork[cellsToWork.length - 1].end_week,
                        additional_information: cellsToWork[0].additional_information
                            ? {
                                standard_curriculum_modules_units_ids: cellsToWork[0].additional_information.standard_curriculum_modules_units_ids,
                            } : null,
                    });
                    cellsToWork = [];
                }
            }

            state.createAction.data = cellsToSend;
        },

        // updating actions
        updateTrainingSchedule: (state) => {
            const selectedCourse = state.selectedCells!.cells[0].training_course;
            const deleteIds = [];
            for (let i = 0; i < state.editData.data.length; i++) {
                if (selectedCourse === state.editData.data[i].training_course) {
                    if (state.editData.data[i].working_curriculum_training_schedule_id) {
                        deleteIds.push(state.editData.data[i].working_curriculum_training_schedule_id);
                    }
                }
            }
            const uniqueDeleteIds = Array.from(new Set(deleteIds));
            state.editActions.actions.delete = Array.from(new Set(
                [...state.editActions.actions.delete || [], ...uniqueDeleteIds],
            ));

            const cells = [
                ...state.editData.data.filter((cell) => cell.training_course === selectedCourse),
                {
                    training_course: -1,
                    working_curriculum_symbol_id: -1,
                    start_week: -1,
                    end_week: -1,
                    additional_information: null,
                },
            ];
            let cellsToWork = [];
            const cellsToSend = [];

            for (let i = 0; i < cells.length - 1; i++) {
                if (cells[i].working_curriculum_symbol_id === cells[i + 1].working_curriculum_symbol_id
                    && cells[i].training_course === cells[i + 1].training_course && i !== cells.length - 2) {
                    cellsToWork.push(cells[i]);
                } else {
                    cellsToWork.push(cells[i]);
                    cellsToSend.push({
                        working_curriculum_symbol_id: cellsToWork[0].working_curriculum_symbol_id,
                        training_course: cellsToWork[0].training_course,
                        start_week: cellsToWork[0].start_week,
                        end_week: cellsToWork[cellsToWork.length - 1].end_week,
                        additional_information: cellsToWork[0].additional_information
                            ? {
                                standard_curriculum_modules_units_ids: cellsToWork[0].additional_information.standard_curriculum_modules_units_ids,
                            } : null,
                    });
                    cellsToWork = [];
                }
            }

            state.editActions.actions.create = Array.from(new Set(
                [...state.editActions.actions.create?.filter((cell) => (
                    cell.training_course !== selectedCourse
                )) || [], ...cellsToSend],
            ));
        },
        changeReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readOnly = action.payload;
        },
        changeRedirectToMainPage: (state, action: PayloadAction<boolean>) => {
            state.redirectToMainPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorkingCurriculumTrainingSchedule.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchWorkingCurriculumTrainingSchedule.fulfilled, (state, action: PayloadAction<WorkingCurriculumTrainingSchedule>) => {
                state.data = action.payload;

                const dataToWork = [];
                for (let i = 0; i < action.payload.data.length; i++) {
                    for (let j = action.payload.data[i].start_week - 1; j <= action.payload.data[i].end_week - 1; j++) {
                        if (action.payload.data[i].training_course === 1) {
                            dataToWork[j] = {
                                ...action.payload.data[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: action.payload.data[i].additional_information
                                    ? {
                                        ...action.payload.data[i].additional_information!,
                                        start: action.payload.data[i].start_week,
                                        end: action.payload.data[i].end_week,
                                    }
                                    : null,
                            };
                        } else if (action.payload.data[i].training_course === 2) {
                            dataToWork[j + 52] = {
                                ...action.payload.data[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: action.payload.data[i].additional_information
                                    ? {
                                        ...action.payload.data[i].additional_information!,
                                        start: action.payload.data[i].start_week,
                                        end: action.payload.data[i].end_week,
                                    }
                                    : null,
                            };
                        } else if (action.payload.data[i].training_course === 3) {
                            dataToWork[j + 104] = {
                                ...action.payload.data[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: action.payload.data[i].additional_information
                                    ? {
                                        ...action.payload.data[i].additional_information!,
                                        start: action.payload.data[i].start_week,
                                        end: action.payload.data[i].end_week,
                                    }
                                    : null,
                            };
                        } else {
                            dataToWork[j + 156] = {
                                ...action.payload.data[i],
                                start_week: j + 1,
                                end_week: j + 1,
                                additional_information: action.payload.data[i].additional_information
                                    ? {
                                        ...action.payload.data[i].additional_information!,
                                        start: action.payload.data[i].start_week,
                                        end: action.payload.data[i].end_week,
                                    }
                                    : null,
                            };
                        }
                    }
                }

                state.dataParsed = {
                    data: [...dataToWork],
                    summary: action.payload.summary,
                };
                state.editData = {
                    data: dataToWork,
                    summary: action.payload.summary,
                };
                state.isLoading = false;
            })
            .addCase(fetchWorkingCurriculumTrainingSchedule.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchWorkingCurriculumSymbols.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchWorkingCurriculumSymbols.fulfilled, (state, action: PayloadAction<WorkingCurriculumTrainingScheduleSymbol[]>) => {
                state.isLoading = false;
                state.symbols = action.payload;
            })
            .addCase(fetchWorkingCurriculumSymbols.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createWorkingCurriculumTrainingSchedule.pending, (state) => {
                state.createAction.errors = undefined;
                state.createAction.isLoading = true;
                state.createAction.created = false;
            })
            .addCase(createWorkingCurriculumTrainingSchedule.fulfilled, (state) => {
                state.createAction.isLoading = false;
                state.createAction.created = true;
            })
            .addCase(createWorkingCurriculumTrainingSchedule.rejected, (state, action) => {
                state.createAction.isLoading = false;
                state.createAction.errors = action.payload;
                state.createAction.created = false;
            })
            .addCase(editWorkingCurriculumTrainingSchedule.pending, (state) => {
                state.editActions.errors = undefined;
                state.editActions.isLoading = true;
                state.editActions.updated = false;
            })
            .addCase(editWorkingCurriculumTrainingSchedule.fulfilled, (state) => {
                state.editActions.isLoading = false;
                state.editActions.updated = true;
            })
            .addCase(editWorkingCurriculumTrainingSchedule.rejected, (state, action) => {
                state.editActions.isLoading = false;
                state.editActions.errors = action.payload;
                state.editActions.updated = false;
            })
            .addCase(fetchWorkingCurriculumProfessionalModules.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchWorkingCurriculumProfessionalModules.fulfilled, (state, action: PayloadAction<WorkingCurriculumProfessionalModules[]>) => {
                state.isLoading = false;
                state.professionalModules = action.payload;
            })
            .addCase(fetchWorkingCurriculumProfessionalModules.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: workingCurriculumTrainingScheduleActions } = workingCurriculumTrainingScheduleSlice;
export const { reducer: workingCurriculumTrainingScheduleReducer } = workingCurriculumTrainingScheduleSlice;
