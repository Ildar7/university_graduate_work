import React, {
    memo, ReactElement, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import {
    Text, TextAlign, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonForm, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Icon } from 'shared/ui/Icon/Icon';
import TrashRedIcon from 'shared/assets/icons/trash-red.svg';
import PlusBorderedIcon from 'shared/assets/icons/plus-bordered.svg';
import { CToaster } from '@coreui/react';
import { Toast } from 'shared/ui/Toast/Toast';
import {
    fetchCollegeCoreOptions,
    getSettingsMainCollegeData,
    getSettingsMainCollegeError,
    getSettingsMainCollegeIsLoading,
} from 'entities/Settings/SettingsMainCollege';
import {
    getTrainingScheduleSchemaData,
    getTrainingScheduleSchemaError,
    getTrainingScheduleSchemaIsLoading,
} from 'entities/TrainingScheduleSchema';
import { workingCurriculumTrainingScheduleActions } from '../../../model/slice/workingCurriculumTrainingScheduleSlice';
import {
    fetchWorkingCurriculumSymbols,
} from '../../../model/services/fetchWorkingCurriculumSymbols/fetchWorkingCurriculumSymbols';
import cls from './WorkingCurriculumTrainingScheduleTable.module.scss';
import {
    fetchWorkingCurriculumTrainingSchedule,
} from '../../../model/services/fetchWorkingCurriculumTrainingSchedule/fetchWorkingCurriculumTrainingSchedule';
import {
    getWorkingCurriculumTrainingScheduleCreateData,
    getWorkingCurriculumTrainingScheduleEditData,
    getWorkingCurriculumTrainingScheduleEditDataInfo,
    getWorkingCurriculumTrainingScheduleError,
    getWorkingCurriculumTrainingScheduleIsLoading,
    getWorkingCurriculumTrainingScheduleReadOnly,
    getWorkingCurriculumTrainingScheduleSelectedCells,
    getWorkingCurriculumTrainingScheduleSymbols,
} from '../../../model/selectors/getWorkingCurriculumTrainingSchedule/getWorkingCurriculumTrainingSchedule';
import { WorkingCurriculumTrainingScheduleSymbol } from '../../../model/types/workingCurriculumTrainingSchedule';
import {
    WorkingCurriculumTrainingScheduleTableCell,
} from '../WorkingCurriculumTrainingScheduleTableCell/WorkingCurriculumTrainingScheduleTableCell';
import {
    WorkingCurriculumTrainingScheduleConfirmDeleting,
} from '../../WorkingCurriculumTrainingScheduleConfirmDeleting/WorkingCurriculumTrainingScheduleConfirmDeleting';
import {
    WorkingCurriculumTrainingScheduleSelectEduModules,
} from '../../WorkingCurriculumTrainingScheduleSelectEduModules/WorkingCurriculumTrainingScheduleSelectEduModules';

interface WorkingCurriculumTrainingScheduleTableProps {
    className?: string;
    workingCurriculumId: string;
}

export const WorkingCurriculumTrainingScheduleTable = memo((props: WorkingCurriculumTrainingScheduleTableProps) => {
    const {
        className,
        workingCurriculumId,
    } = props;
    const [toast, addToast] = useState<ReactElement>();
    const toaster = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();
    const [selectedCourse, setSelectedCourse] = useState(0);
    const [selectModulesModalIsOpen, setSelectModulesModalIsOpen] = useState(false);
    const [confirmDeleteModalIsOpen, setConfirmDeleteModalIsOpen] = useState(false);
    const [deletingCourse, setDeletingCourse] = useState(0);
    const [creditsPerHour, setCreditsPerHour] = useState(0);

    const trainingScheduleEditData = useSelector(getWorkingCurriculumTrainingScheduleEditData);
    const trainingScheduleSymbols = useSelector(getWorkingCurriculumTrainingScheduleSymbols);
    const trainingScheduleIsLoading = useSelector(getWorkingCurriculumTrainingScheduleIsLoading);
    const trainingScheduleError = useSelector(getWorkingCurriculumTrainingScheduleError);

    const trainingScheduleSchema = useSelector(getTrainingScheduleSchemaData);
    const trainingScheduleSchemaIsLoading = useSelector(getTrainingScheduleSchemaIsLoading);
    const trainingScheduleSchemaError = useSelector(getTrainingScheduleSchemaError);

    const createTrainingScheduleIsLoading = useSelector(getWorkingCurriculumTrainingScheduleCreateData)?.isLoading;
    const createTrainingScheduleErrors = useSelector(getWorkingCurriculumTrainingScheduleCreateData)?.errors;
    const createTrainingScheduleCreated = useSelector(getWorkingCurriculumTrainingScheduleCreateData)?.created;

    const editTrainingScheduleIsLoading = useSelector(getWorkingCurriculumTrainingScheduleEditDataInfo)?.isLoading;
    const editTrainingScheduleErrors = useSelector(getWorkingCurriculumTrainingScheduleEditDataInfo)?.errors;
    const editTrainingScheduleUpdated = useSelector(getWorkingCurriculumTrainingScheduleEditDataInfo)?.updated;

    const collegeCoreOptions = useSelector(getSettingsMainCollegeData);
    const collegeCoreOptionsIsLoading = useSelector(getSettingsMainCollegeIsLoading);
    const collegeCoreOptionsError = useSelector(getSettingsMainCollegeError);

    const selectedCells = useSelector(getWorkingCurriculumTrainingScheduleSelectedCells);
    const tableReadOnly = useSelector(getWorkingCurriculumTrainingScheduleReadOnly);

    const onCloseConfirmDeletingModal = useCallback(() => {
        setConfirmDeleteModalIsOpen(false);
    }, []);

    const onOpenSelectModulesModal = useCallback(() => {
        setSelectModulesModalIsOpen(true);
    }, []);

    const onCloseSelectModulesModal = useCallback(() => {
        setSelectModulesModalIsOpen(false);
    }, []);

    const onSelectSymbolHandler = useCallback((symbol: WorkingCurriculumTrainingScheduleSymbol) => {
        if (selectedCells) {
            if (symbol.symbol_code === 'PROFESSIONAL_MODULE') {
                onOpenSelectModulesModal();
            } else {
                const selectedCellsData = [...selectedCells.cells].map((cell) => (
                    {
                        ...cell,
                        working_curriculum_symbol_id: symbol.working_curriculum_symbol_id,
                        working_curriculum_symbol: symbol,
                        additional_information: null,
                    }
                ));

                selectedCellsData.forEach((cell) => {
                    dispatch(workingCurriculumTrainingScheduleActions.changeSelectedSymbolInData([cell, creditsPerHour]));
                });
                dispatch(workingCurriculumTrainingScheduleActions.calculateTotalFieldsInSummaryData());
                const updatedSelectedCellsData = {
                    trainingCourse: selectedCells!.trainingCourse,
                    cells: selectedCellsData,
                    symbol: selectedCells!.symbol,
                    symbolsEqual: selectedCells!.symbolsEqual,
                };

                const updatedSelectedCells = {
                    ...updatedSelectedCellsData,
                    symbol: [symbol.working_curriculum_symbol_id],
                    symbolsEqual: true,
                };
                dispatch(workingCurriculumTrainingScheduleActions.changeSelectedCells(updatedSelectedCells));
                dispatch(workingCurriculumTrainingScheduleActions.updateTrainingSchedule());
            }
        }
    }, [creditsPerHour, dispatch, onOpenSelectModulesModal, selectedCells]);

    const onAddRow = useCallback(() => {
        dispatch(workingCurriculumTrainingScheduleActions.addNewCourse());
    }, [dispatch]);

    const onDeleteRow = useCallback((index: number) => {
        setDeletingCourse(index);
        setConfirmDeleteModalIsOpen(true);
    }, []);

    useEffect(() => {
        if (workingCurriculumId) {
            dispatch(fetchWorkingCurriculumSymbols());
            dispatch(fetchCollegeCoreOptions());
            dispatch(fetchWorkingCurriculumTrainingSchedule(workingCurriculumId));
        }
    }, [dispatch, workingCurriculumId]);

    useEffect(() => {
        if (collegeCoreOptions) {
            const credits = collegeCoreOptions.hectum_curriculum.options
                .filter((option) => option.name === 'credit_in_hours')[0].value;

            setCreditsPerHour(Number(credits));
        }
    }, [collegeCoreOptions]);

    useEffect(() => {
        if (createTrainingScheduleErrors) {
            addToast(Toast.error('Произошла ошибка при создании графика учебного процесса'));
        }
    }, [createTrainingScheduleErrors]);

    useEffect(() => {
        if (editTrainingScheduleErrors) {
            addToast(Toast.error('Произошла ошибка при обновлении данных графика учебного процесса'));
        }
    }, [editTrainingScheduleErrors]);

    useEffect(() => {
        if (createTrainingScheduleCreated) {
            addToast(Toast.success('Данные графика учебного процесса успешно обновлены'));
        }
    }, [createTrainingScheduleCreated]);

    useEffect(() => {
        if (editTrainingScheduleUpdated) {
            addToast(Toast.success('Данные графика учебного процесса успешно обновлены'));
        }
    }, [editTrainingScheduleUpdated]);

    let table;

    if (trainingScheduleIsLoading
        || trainingScheduleSchemaIsLoading
        || createTrainingScheduleIsLoading
        || editTrainingScheduleIsLoading
        || collegeCoreOptionsIsLoading
    ) {
        table = (
            <Skeleton height={600} width="100%" />
        );
    } else if (
        (trainingScheduleError && trainingScheduleError?.status !== 404)
        || trainingScheduleSchemaError
        || collegeCoreOptionsError
    ) {
        table = (
            <Text
                theme={TextTheme.ERROR}
                size={TextSize.M}
                weight={TextWeight.SEMIBOLD}
                className={cls.error}
                align={TextAlign.CENTER}
            >
                Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу
            </Text>
        );
    } else {
        table = (
            <>
                {!tableReadOnly && (
                    <div className={cls.selectSymbols}>
                        {
                            trainingScheduleSymbols?.map((symbol) => (
                                <Button
                                    className={classNames(
                                        cls.symbolBtn,
                                        {
                                            [cls.activeSymbolBtn]: selectedCells?.symbolsEqual
                                            && selectedCells?.symbol?.[0] === symbol.working_curriculum_symbol_id,
                                        },
                                        [],
                                    )}
                                    theme={ButtonTheme.CLEAR}
                                    key={symbol.symbol_code}
                                    buttonForm={ButtonForm.NOT_BORDERED}
                                    onClick={() => {
                                        onSelectSymbolHandler(symbol);
                                    }}
                                    title={symbol.name}
                                >
                                    {
                                        symbol.symbol_code === 'THEORY'
                                            ? <span className={cls.theorySymbol} /> : symbol.displayed_symbol
                                    }
                                </Button>
                            ))
                        }
                    </div>
                )}

                <div className={cls.table}>
                    <div className={cls.tableRow}>
                        <div className={classNames(cls.tableAsideName, {}, [cls.tableCell])}>
                            <Text
                                size={TextSize.M}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Курс
                            </Text>
                        </div>
                        <div className={cls.tableMonths}>
                            {
                                trainingScheduleSchema?.byMonths.map((month) => (
                                    <div
                                        className={classNames(
                                            cls.tableMonth,
                                            { [cls.tableMonthEmpty]: month.doubleMonth },
                                            [],
                                        )}
                                    >
                                        {
                                            !month.doubleMonth
                                                ? (
                                                    <Text
                                                        size={TextSize.XM}
                                                        weight={TextWeight.SEMIBOLD}
                                                        className={classNames(cls.tableMonthName, {}, [cls.tableCell])}
                                                    >
                                                        {month.monthsNamesRu}
                                                    </Text>
                                                )
                                                : (
                                                    <div className={classNames(cls.tableMonthName, {}, [cls.tableCell])} />
                                                )
                                        }
                                        {
                                            !month.doubleMonth
                                                ? (
                                                    <div className={cls.tableMonthDates}>
                                                        {month.weeks.map((week) => (
                                                            <div
                                                                className={classNames(cls.tableMonthDate, {}, [cls.tableCell])}
                                                            >
                                                                <Text>{week.startDay}</Text>
                                                                <Text>{week.endDay}</Text>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )
                                                : (
                                                    <div className={classNames(cls.tableMonthDate, {}, [cls.tableCell])}>
                                                        <Text>{month.weeks[0].startDay}</Text>
                                                        <Text>{month.weeks[0].endDay}</Text>
                                                    </div>
                                                )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={cls.tableRow}>
                        <div className={classNames(cls.tableAsideName, {}, [cls.tableCell])}>
                            <Text
                                size={TextSize.M}
                                weight={TextWeight.SEMIBOLD}
                            >
                                Недели
                            </Text>
                        </div>
                        <div className={cls.tableWeeks}>
                            {
                                trainingScheduleSchema?.byWeeks.map((week) => (
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                        key={week.index}
                                        className={classNames(cls.tableWeek, {}, [cls.tableCell])}
                                    >
                                        {week.index}
                                    </Text>
                                ))
                            }
                        </div>
                    </div>
                    {
                        trainingScheduleEditData && [...new Array(trainingScheduleEditData.data.length / 52)].map((_, index) => (
                            <div
                                className={cls.tableRow}
                                key={index + 1}
                            >
                                <Button
                                    className={classNames(
                                        cls.tableAsideName,
                                        {
                                            [cls.deleteActiveButton]: trainingScheduleEditData
                                            && index + 1 === trainingScheduleEditData.data.length / 52 && !tableReadOnly,
                                        },
                                        [cls.tableCell, cls.tableCourseName],
                                    )}
                                    theme={ButtonTheme.CLEAR}
                                    onClick={() => { onDeleteRow(index + 1); }}
                                    buttonForm={ButtonForm.NOT_BORDERED}
                                    disabled={(trainingScheduleEditData
                                        && index + 1 !== trainingScheduleEditData.data.length / 52) || tableReadOnly}
                                >
                                    <Text
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        {index + 1}
                                    </Text>
                                    {trainingScheduleEditData
                                        && index + 1 === trainingScheduleEditData.data.length / 52 && !tableReadOnly && (
                                        <Icon Svg={TrashRedIcon} />
                                    )}
                                </Button>
                                <div className={cls.tableCourseInfoWrapper}>
                                    {index + 1 === 1 && (
                                        <WorkingCurriculumTrainingScheduleTableCell
                                            className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}
                                            trainingScheduleData={trainingScheduleEditData?.data.slice(0, 52)}
                                            course={selectedCourse}
                                            setCourse={setSelectedCourse}
                                        />
                                    )}
                                    {index + 1 === 2 && (
                                        <WorkingCurriculumTrainingScheduleTableCell
                                            className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}
                                            trainingScheduleData={trainingScheduleEditData?.data.slice(52, 104)}
                                            course={selectedCourse}
                                            setCourse={setSelectedCourse}
                                        />
                                    )}
                                    {index + 1 === 3 && (
                                        <WorkingCurriculumTrainingScheduleTableCell
                                            className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}
                                            trainingScheduleData={trainingScheduleEditData?.data.slice(104, 156)}
                                            course={selectedCourse}
                                            setCourse={setSelectedCourse}
                                        />
                                    )}
                                    {index + 1 === 4 && (
                                        <WorkingCurriculumTrainingScheduleTableCell
                                            className={classNames(cls.tableCourseInfo, {}, [cls.tableCell])}
                                            trainingScheduleData={trainingScheduleEditData?.data.slice(156, 208)}
                                            course={selectedCourse}
                                            setCourse={setSelectedCourse}
                                        />
                                    )}
                                </div>
                            </div>
                        ))
                    }
                    {
                        trainingScheduleEditData && trainingScheduleEditData.data.length / 52 !== 4 && !tableReadOnly && (
                            <Button
                                className={classNames(
                                    cls.tableAsideName,
                                    {},
                                    [cls.tableCell, cls.tableAddNewRow],
                                )}
                                theme={ButtonTheme.CLEAR}
                                buttonForm={ButtonForm.NOT_BORDERED}
                                onClick={onAddRow}
                            >
                                <Icon className={cls.tableAddNewRowIcon} Svg={PlusBorderedIcon} />
                            </Button>
                        )
                    }
                </div>

                <div className={cls.symbolsInfo}>
                    {
                        trainingScheduleSymbols?.map((symbol) => (
                            <div
                                className={cls.symbolInfo}
                                key={symbol.symbol_code}
                            >
                                <div className={cls.symbolBox}>
                                    <span
                                        style={{ backgroundColor: `${symbol.symbol_hex_color}` }}
                                    >
                                        {
                                            symbol.displayed_symbol
                                        }
                                    </span>
                                </div>
                                <Text
                                    className={cls.symbolText}
                                >
                                    {symbol.name}
                                </Text>
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }

    return (
        <>
            <div className={classNames(cls.WorkingCurriculumTrainingScheduleTable, {}, [className])}>
                <Text
                    size={TextSize.M}
                    theme={TextTheme.PRIMARY}
                    weight={TextWeight.SEMIBOLD}
                    align={TextAlign.CENTER}
                    className={cls.title}
                >
                    График учебного процесса
                </Text>

                <div className={cls.content}>
                    {table}
                </div>
            </div>

            <WorkingCurriculumTrainingScheduleConfirmDeleting
                onClose={onCloseConfirmDeletingModal}
                isOpen={confirmDeleteModalIsOpen}
                deletingCourse={deletingCourse}
            />

            <WorkingCurriculumTrainingScheduleSelectEduModules
                onClose={onCloseSelectModulesModal}
                isOpen={selectModulesModalIsOpen}
                creditsPerHour={creditsPerHour}
            />

            <CToaster
                ref={toaster}
                push={toast}
                placement="top-end"
            />
        </>
    );
});
